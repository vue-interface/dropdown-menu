import { h as i, Fragment as l, resolveComponent as c, openBlock as m, createElementBlock as f, normalizeClass as u, createVNode as w, withCtx as h, renderSlot as g } from "vue";
function s(e, o) {
  e.props.class = `${e.props.class || ""} ${o}`.trim();
}
function d(e) {
  for (const o of e) {
    o.type === l && d(o.children), o.props = Object.assign({ class: void 0 }, o.props), o.attrs = Object.assign({}, o.attrs), o.attrs.on || (o.attrs.on = {});
    const n = o.props.class && o.props.class.match(/dropdown-item/), t = o.props.class && o.props.class.match(/dropdown-divider/);
    typeof o.type == "string" && o.type.match(/^h\d$/) ? s(o, "dropdown-header") : o.type === "hr" && !t ? (o.type = "div", s(o, "dropdown-divider")) : !n && !t && s(o, "dropdown-item");
  }
  return e;
}
const _ = (e, o) => i("div", {}, d(o.slots.default())), v = _, y = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [t, r] of o)
    n[t] = r;
  return n;
}, C = {
  name: "DropdownMenu",
  components: {
    DropdownMenuItems: v
  },
  props: {
    align: {
      type: String,
      default: "left",
      validate(e) {
        return ["left", "right"].indexOf(e.toLowerCase()) !== -1;
      }
    },
    show: Boolean
  }
}, D = ["aria-labelledby"];
function $(e, o, n, t, r, b) {
  const p = c("dropdown-menu-items");
  return m(), f("div", {
    class: u(["dropdown-menu", {
      "dropdown-menu-left": n.align === "left",
      "dropdown-menu-right": n.align === "right",
      show: n.show
    }]),
    "aria-labelledby": e.$attrs.id
  }, [
    w(p, null, {
      default: h(() => [
        g(e.$slots, "default", {
          onClick: o[0] || (o[0] = (...a) => e.onItemClick && e.onItemClick(...a))
        })
      ]),
      _: 3
    })
  ], 10, D);
}
const I = /* @__PURE__ */ y(C, [["render", $]]);
export {
  I as DropdownMenu
};
