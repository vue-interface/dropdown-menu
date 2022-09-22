import { h as m, resolveComponent as u, openBlock as d, createElementBlock as f, normalizeClass as w, createVNode as h, withCtx as _, renderSlot as b } from "vue";
function l(r, s) {
  r.props.class = `${r.props.class || ""} ${s}`.trim();
}
function p(r, s) {
  return (e) => {
    typeof s == "function" && s(e), e.cancelBubble || r(e);
  };
}
function a(r, s) {
  return r.attrs.on[s] || r.type && r.type.listeners && r.componentOptions.listeners[s];
}
const g = (r, s) => {
  const e = s.slots.default()[0].children;
  return e.forEach((t) => {
    t.props = Object.assign({ class: void 0 }, t.props), t.attrs = Object.assign({}, t.attrs), t.attrs.on || (t.attrs.on = {});
    const n = t.props.class && t.props.class.match(/dropdown-item/), i = t.props.class && t.props.class.match(/dropdown-divider/);
    t.attrs.on.click = p((o) => {
      s.parent.$emit("click-item", o, t);
    }, a(t, "click")), t.attrs.on.blur = p((o) => {
      s.parent.$emit("blur-item", o, t);
    }, a(t, "blur")), typeof t.type == "string" && t.type.match(/^h\d$/) ? l(t, "dropdown-header") : t.type === "hr" && !i ? (t.type = "div", l(t, "dropdown-divider")) : !n && !i && l(t, "dropdown-item");
  }), m("div", {}, e);
}, y = g, $ = (r, s) => {
  const e = r.__vccOpts || r;
  for (const [t, n] of s)
    e[t] = n;
  return e;
}, k = {
  name: "DropdownMenu",
  components: {
    DropdownMenuItems: y
  },
  props: {
    align: {
      type: String,
      default: "left",
      validate(r) {
        return ["left", "right"].indexOf(r.toLowerCase()) !== -1;
      }
    },
    show: Boolean
  }
}, C = ["aria-labelledby"];
function D(r, s, e, t, n, i) {
  const o = u("dropdown-menu-items");
  return d(), f("div", {
    class: w(["dropdown-menu", {
      "dropdown-menu-left": e.align === "left",
      "dropdown-menu-right": e.align === "right",
      show: e.show
    }]),
    "aria-labelledby": r.$attrs.id
  }, [
    h(o, null, {
      default: _(() => [
        b(r.$slots, "default", {
          onClick: s[0] || (s[0] = (...c) => r.onItemClick && r.onItemClick(...c))
        })
      ]),
      _: 3
    })
  ], 10, C);
}
const O = /* @__PURE__ */ $(k, [["render", D]]);
export {
  O as DropdownMenu
};
