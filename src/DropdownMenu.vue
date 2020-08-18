<template>
    <div
        class="dropdown-menu"
        :class="{'dropdown-menu-left': align === 'left', 'dropdown-menu-right': align === 'right', 'show': show}"
        :aria-labelledby="$attrs.id">
        <dropdown-menu-items>
            <slot @click="onItemClick" />
        </dropdown-menu-items>
    </div>
</template>

<script>
import DropdownMenuItems from './DropdownMenuItems';

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

<style>
.dropdown-menu a.dropdown-item {
    cursor: pointer;
}
</style>
