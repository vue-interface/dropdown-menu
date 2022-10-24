<script>
import { Fragment, h } from 'vue';

function appendClass(vnode, str) {
    vnode.props.class = `${vnode.props.class || ''} ${str}`.trim();
}

function wrap(wrapper, fn) {
    return (e) => {
        if(typeof fn === 'function') {
            fn(e);
        }

        if(!e.cancelBubble) {
            wrapper(e);
        }
    };
}

function listener(vnode, key) {
    return vnode.attrs.on[key] || (
        vnode.type &&
        vnode.type.listeners &&
        vnode.componentOptions.listeners[key]
    );
}

function changeMenuItems(items) {
    for(const vnode of items) {
        if(vnode.type === Fragment) {
            changeMenuItems(vnode.children);
        }

        vnode.props = Object.assign({ class: undefined }, vnode.props);
        vnode.attrs = Object.assign({}, vnode.attrs);

        if(!vnode.attrs.on) {
            vnode.attrs.on = {};
        }

        const isDropdownItem = vnode.props.class && vnode.props.class.match(/dropdown-item/);
        const isDropdownDivider = vnode.props.class && vnode.props.class.match(/dropdown-divider/);

        vnode.attrs.on.click = wrap(e => {
            context.parent.$emit('click-item', e, vnode);
        }, listener(vnode, 'click'));

        vnode.attrs.on.blur = wrap(e => {
            context.parent.$emit('blur-item', e, vnode);
        }, listener(vnode, 'blur'));

        if(typeof vnode.type === 'string' && vnode.type.match(/^h\d$/)) {
            appendClass(vnode, 'dropdown-header');
        }
        else if(vnode.type === 'hr' && !isDropdownDivider) {
            vnode.type = 'div';

            appendClass(vnode, 'dropdown-divider');
        }
        else if(!isDropdownItem && !isDropdownDivider) {
            appendClass(vnode, 'dropdown-item');
        }
    }

    return items;
}

const DropdownMenuItems = (props, context) => h('div', {}, changeMenuItems(context.slots.default()));

export default DropdownMenuItems;
</script>
