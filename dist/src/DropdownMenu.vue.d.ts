declare const _sfc_main: import("vue").DefineComponent<{
    /**
     * Display the dropdown menu aligned left or right
     *
     * @property String
     */
    align: {
        type: StringConstructor;
        default: string;
        validate(value: any): boolean;
    };
    /**
     * The default visibility of the dropdown menu.
     *
     * @property Object
     */
    show: BooleanConstructor;
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Display the dropdown menu aligned left or right
     *
     * @property String
     */
    align: {
        type: StringConstructor;
        default: string;
        validate(value: any): boolean;
    };
    /**
     * The default visibility of the dropdown menu.
     *
     * @property Object
     */
    show: BooleanConstructor;
}>>, {
    align: string;
    show: boolean;
}>;
export default _sfc_main;
