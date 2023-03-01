<script lang="ts">
import { defineComponent } from 'vue';
import DropdownMenuItems from './DropdownMenuItems.vue';

export default defineComponent({

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
            validate(value: any) {
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

});
</script>

<template>
    <div
        class="dropdown-menu"
        :aria-labelledby="<string|undefined>$attrs.id"
        :class="{
            'dropdown-menu-left': align === 'left',
            'dropdown-menu-right': align === 'right',
            'show': show
        }">
        <DropdownMenuItems>
            <slot />
        </DropdownMenuItems>
    </div>
</template>