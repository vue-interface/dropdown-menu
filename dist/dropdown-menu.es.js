import { h as d, Fragment as m, resolveComponent as u, openBlock as f, createElementBlock as w, normalizeClass as h, createVNode as g, withCtx as _, renderSlot as y } from "vue";
function s(e, t) {
  e.props.class = `${e.props.class || ""} ${t}`.trim();
}
function i(e, t) {
  return (n) => {
    typeof t == "function" && t(n), n.cancelBubble || e(n);
  };
}
function p(e, t) {
  return e.attrs.on[t] || e.type && e.type.listeners && e.componentOptions.listeners[t];
}
function a(e) {
  for (const t of e) {
    t.type === m && a(t.children), t.props = Object.assign({ class: void 0 }, t.props), t.attrs = Object.assign({}, t.attrs), t.attrs.on || (t.attrs.on = {});
    const n = t.props.class && t.props.class.match(/dropdown-item/), r = t.props.class && t.props.class.match(/dropdown-divider/);
    t.attrs.on.click = i((o) => {
      context.parent.$emit("click-item", o, t);
    }, p(t, "click")), t.attrs.on.blur = i((o) => {
      context.parent.$emit("blur-item", o, t);
    }, p(t, "blur")), typeof t.type == "string" && t.type.match(/^h\d$/) ? s(t, "dropdown-header") : t.type === "hr" && !r ? (t.type = "div", s(t, "dropdown-divider")) : !n && !r && s(t, "dropdown-item");
  }
  return e;
}
const b = (e, t) => d("div", {}, a(t.slots.default())), $ = b, k = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
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
function D(e, t, n, r, o, I) {
  const l = u("dropdown-menu-items");
  return f(), w("div", {
    class: h(["dropdown-menu", {
      "dropdown-menu-left": n.align === "left",
      "dropdown-menu-right": n.align === "right",
      show: n.show
    }]),
    "aria-labelledby": e.$attrs.id
  }, [
    g(l, null, {
      default: _(() => [
        y(e.$slots, "default", {
          onClick: t[0] || (t[0] = (...c) => e.onItemClick && e.onItemClick(...c))
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
