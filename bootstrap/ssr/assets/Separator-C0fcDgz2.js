import { defineComponent, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { c as cn } from "./index-53Kg4F4g.js";
import { reactiveOmit } from "@vueuse/core";
import { Separator } from "reka-ui";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Separator",
  __ssrInlineRender: true,
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Separator), mergeProps({ "data-slot": "separator-root" }, unref(delegatedProps), {
        class: unref(cn)(
          `bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px`,
          props.class
        )
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/separator/Separator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
