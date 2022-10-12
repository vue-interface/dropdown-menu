import { h as c, isVNode as d, resolveComponent as u, openBlock as m, createElementBlock as f, normalizeClass as w, createVNode as h, withCtx as _, renderSlot as g } from "vue";
function s(e, t) {
  e.props.class = `${e.props.class || ""} ${t}`.trim();
}
function i(e, t) {
  return (o) => {
    typeof t == "function" && t(o), o.cancelBubble || e(o);
  };
}
function p(e, t) {
  return e.attrs.on[t] || e.type && e.type.listeners && e.componentOptions.listeners[t];
}
function b(e) {
  for (const t of e[0].children) {
    if (!d(t))
      continue;
    t.props = Object.assign({ class: void 0 }, t.props), t.attrs = Object.assign({}, t.attrs), t.attrs.on || (t.attrs.on = {});
    const o = t.props.class && t.props.class.match(/dropdown-item/), r = t.props.class && t.props.class.match(/dropdown-divider/);
    t.attrs.on.click = i((n) => {
      context.parent.$emit("click-item", n, t);
    }, p(t, "click")), t.attrs.on.blur = i((n) => {
      context.parent.$emit("blur-item", n, t);
    }, p(t, "blur")), typeof t.type == "string" && t.type.match(/^h\d$/) ? s(t, "dropdown-header") : t.type === "hr" && !r ? (t.type = "div", s(t, "dropdown-divider")) : !o && !r && s(t, "dropdown-item");
  }
  return e;
}
const y = (e, t) => c("div", {}, b(t.slots.default())), $ = y, k = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, n] of t)
    o[r] = n;
  return o;
}, C = {
  name: "DropdownMenu",
  components: {
    DropdownMenuItems: $
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
}, v = ["aria-labelledby"];
function D(e, t, o, r, n, I) {
  const l = u("dropdown-menu-items");
  return m(), f("div", {
    class: w(["dropdown-menu", {
      "dropdown-menu-left": o.align === "left",
      "dropdown-menu-right": o.align === "right",
      show: o.show
    }]),
    "aria-labelledby": e.$attrs.id
  }, [
    h(l, null, {
      default: _(() => [
        g(e.$slots, "default", {
          onClick: t[0] || (t[0] = (...a) => e.onItemClick && e.onItemClick(...a))
        })
      ]),
      _: 3
    })
  ], 10, v);
}
const O = /* @__PURE__ */ k(C, [["render", D]]);
export {
  O as DropdownMenu
};
