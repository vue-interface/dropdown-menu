<script>
import { isUndefined } from '@vue-interface/utils';

function appendClass(vnode, str) {
    vnode.data.staticClass = `${vnode.data.staticClass || ''} ${str}`.trim();  
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

export default {
    functional: true,

    render(h, context) {
        context.children.filter(vnode => !!vnode.tag)
            .forEach((vnode, i) => {
                vnode.data = Object.assign({staticClass: undefined}, vnode.data);
                
                if(!vnode.data.on) {
                    vnode.data.on = {};
                }

                vnode.data.on.click = wrap(e => {
                    context.parent.$emit('click-item', e, vnode);
                }, vnode.componentOptions && vnode.componentOptions.listeners.click || vnode.data.on.click);

                vnode.data.on.blur = wrap(e => {
                    context.parent.$emit('blur-item', e, vnode);
                }, vnode.componentOptions && vnode.componentOptions.listeners.blur || vnode.data.on.blur);

                if(vnode.tag.match(/^h\d$/)) {
                    appendClass(vnode, 'dropdown-header');
                }
                else if(vnode.tag === 'hr') {
                    vnode.tag = 'div';

                    appendClass(vnode, 'dropdown-divider');
                }
                else if(!vnode.data.staticClass || vnode.data.staticClass && !vnode.data.staticClass.match(/dropdown-item/)) {
                    appendClass(vnode, 'dropdown-item');
                }
            });

        return context.children;
    }

};
</script>
