<script lang="ts">
import { h } from 'vue';

function appendClass(vnode: any, str: any) {
    vnode.props.class = `${vnode.props.class || ''} ${str}`.trim();
}

function wrap(wrapper: any, fn: any) {
    return (e: any) => {
        if(typeof fn === 'function') {
            fn(e);
        }

        if(!e.cancelBubble) {
            wrapper(e);
        }
    };
}

function listener(vnode: any, key: any) {
    return vnode.attrs.on[key] || (
        vnode.type &&
        vnode.type.listeners &&
        vnode.componentOptions.listeners[key]
    );
}

function changeMenuItems(items: any, context: any): any {
    for(const vnode of items) {
        if(vnode && vnode.type && (vnode.type === 'fragment' || typeof vnode.type === 'symbol' || vnode.type instanceof Symbol)) {
            return changeMenuItems(vnode.children, context);
        }

        vnode.props = Object.assign({ class: undefined }, vnode.props);
        vnode.attrs = Object.assign({}, vnode.attrs);

        if(!vnode.attrs.on) {
            vnode.attrs.on = {};
        }

        const isDropdownItem = vnode.props.class && vnode.props.class.match(/dropdown-item/);
        const isDropdownDivider = vnode.props.class && vnode.props.class.match(/dropdown-divider/);

        vnode.attrs.on.click = wrap((e: any) => {
            context.parent.$emit('click-item', e, vnode);
        }, listener(vnode, 'click'));

        vnode.attrs.on.blur = wrap((e: any) => {
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

const DropdownMenuItems = (props: any, context: any) => h('div', {}, changeMenuItems(context.slots.default(), context));

export default DropdownMenuItems;
</script>
