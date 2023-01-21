import { h as a, Fragment as i, defineComponent as l, resolveComponent as c, openBlock as f, createElementBlock as m, normalizeClass as u, createVNode as w, withCtx as h, renderSlot as g } from "vue";
function s(e, o) {
  e.props.class = `${e.props.class || ""} ${o}`.trim();
}
function p(e) {
  for (const o of e) {
    o.type === i && p(o.children), o.props = Object.assign({ class: void 0 }, o.props), o.attrs = Object.assign({}, o.attrs), o.attrs.on || (o.attrs.on = {});
    const t = o.props.class && o.props.class.match(/dropdown-item/), n = o.props.class && o.props.class.match(/dropdown-divider/);
    typeof o.type == "string" && o.type.match(/^h\d$/) ? s(o, "dropdown-header") : o.type === "hr" && !n ? (o.type = "div", s(o, "dropdown-divider")) : !t && !n && s(o, "dropdown-item");
  }
  return e;
}
const _ = (e, o) => a("div", {}, p(o.slots.default())), v = l({
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
      validate(e) {
        return ["left", "right"].indexOf(e.toLowerCase()) !== -1;
      }
    },
    /**
     * The default visibility of the dropdown menu.
     *
     * @property Object
     */
    show: Boolean
  }
}), y = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, r] of o)
    t[n] = r;
  return t;
}, $ = ["aria-labelledby"];
function b(e, o, t, n, r, C) {
  const d = c("dropdown-menu-items");
  return f(), m("div", {
    class: u(["dropdown-menu", {
      "dropdown-menu-left": e.align === "left",
      "dropdown-menu-right": e.align === "right",
      show: e.show
    }]),
    "aria-labelledby": e.$attrs.id
  }, [
    w(d, null, {
      default: h(() => [
        g(e.$slots, "default")
      ]),
      _: 3
    })
  ], 10, $);
}
const M = /* @__PURE__ */ y(v, [["render", b]]);
export {
  M as DropdownMenu
};
