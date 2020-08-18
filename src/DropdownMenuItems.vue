<script>
import { isUndefined } from '@vue-interface/utils';

function appendClass(vnode, str) {
    vnode.data.staticClass = `${vnode.data.staticClass || ''} ${str}`.trim();  
}

export default {
    functional: true,

    render(h, context) {
        context.children.filter(vnode => !!vnode.tag)
            .forEach(vnode => {
                vnode.data = Object.assign({staticClass: undefined}, vnode.data);

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
