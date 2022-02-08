<template>
    <div
        class="dropdown-menu"
        :aria-labelledby="$attrs.id"
        :class="{
            'dropdown-menu-left': align === 'left',
            'dropdown-menu-right': align === 'right',
            'show': show
        }">
        <dropdown-menu-items>
            <slot @click="onItemClick" />
        </dropdown-menu-items>
    </div>
</template>

<script>
import DropdownMenuItems from './DropdownMenuItems.vue';

export default {

    name: 'DropdownMenu',

    components: {
        DropdownMenuItems
    },

    props: {

        /**
         * Display the dropdown menu aligned left or right
         *
         * @property String
         */
        align: {
            type: String,
            default: 'left',
            validate(value) {
                return ['left', 'right'].indexOf(value.toLowerCase()) !== -1;
            }
        },

        /**
         * The default visibility of the dropdown menu.
         *
         * @property Object
         */
        show: Boolean

    }

};
</script>