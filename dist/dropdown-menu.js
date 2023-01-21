import { h as c, defineComponent as f, resolveComponent as m, openBlock as u, createElementBlock as w, normalizeClass as h, createVNode as y, withCtx as b, renderSlot as g } from "vue";
function p(t, o) {
  t.props.class = `${t.props.class || ""} ${o}`.trim();
}
function i(t, o) {
  return (e) => {
    typeof o == "function" && o(e), e.cancelBubble || t(e);
  };
}
function a(t, o) {
  return t.attrs.on[o] || t.type && t.type.listeners && t.componentOptions.listeners[o];
}
function l(t, o) {
  for (const e of t) {
    if (e && e.type && (e.type === "fragment" || typeof e.type == "symbol" || e.type instanceof Symbol))
      return l(e.children, o);
    e.props = Object.assign({ class: void 0 }, e.props), e.attrs = Object.assign({}, e.attrs), e.attrs.on || (e.attrs.on = {});
    const r = e.props.class && e.props.class.match(/dropdown-item/), n = e.props.class && e.props.class.match(/dropdown-divider/);
    e.attrs.on.click = i((s) => {
      o.parent.$emit("click-item", s, e);
    }, a(e, "click")), e.attrs.on.blur = i((s) => {
      o.parent.$emit("blur-item", s, e);
    }, a(e, "blur")), typeof e.type == "string" && e.type.match(/^h\d$/) ? p(e, "dropdown-header") : e.type === "hr" && !n ? (e.type = "div", p(e, "dropdown-divider")) : !r && !n && p(e, "dropdown-item");
  }
  return t;
}
const _ = (t, o) => c("div", {}, l(o.slots.default(), o)), $ = f({
  name: "DropdownMenu",
  components: {
    DropdownMenuItems: _
  },
  props: {
    /**
     * Display the dropdown menu aligned left or right
     *
     * @property String
     */
    align: {
      type: String,
      default: "left",
      validate(t) {
        return ["left", "right"].indexOf(t.toLowerCase()) !== -1;
      }
    },
    /**
     * The default visibility of the dropdown menu.
     *
     * @property Object
     */
    show: Boolean
  }
}), v = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [r, n] of o)
    e[r] = n;
  return e;
}, C = ["aria-labelledby"];
function D(t, o, e, r, n, s) {
  const d = m("dropdown-menu-items");
  return u(), w("div", {
    class: h(["dropdown-menu", {
      "dropdown-menu-left": t.align === "left",
      "dropdown-menu-right": t.align === "right",
      show: t.show
    }]),
    "aria-labelledby": t.$attrs.id
  }, [
    y(d, null, {
      default: b(() => [
        g(t.$slots, "default")
      ]),
      _: 3
    })
  ], 10, C);
}
const O = /* @__PURE__ */ v($, [["render", D]]);
export {
  O as DropdownMenu
};
