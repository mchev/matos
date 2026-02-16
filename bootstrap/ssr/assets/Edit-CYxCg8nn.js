import { withCtx, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AppLayout-B3jJCr1A.js";
import { _ as _sfc_main$2 } from "./OrganisationLayout-Gv4mqYIW.js";
import _sfc_main$3 from "./GeneralForm-CxAuh_v3.js";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "reka-ui";
import "./index-53Kg4F4g.js";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
import "lucide-vue-next";
import "@heroicons/vue/24/outline";
import "./index-9VOASAGY.js";
import "vue-sonner";
import "./Input-BNuRmWJk.js";
import "./Heading-Dsj-VTAa.js";
import "./Separator-C0fcDgz2.js";
import "./Label-DLRZNtyA.js";
import "./Textarea-DxMXW1ER.js";
import "./InputError-BhTWS2NZ.js";
import "./HeadingSmall-B1yfmTIh.js";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    organization: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Paramètres de l'organisation" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, { organization: __props.organization }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, { organization: __props.organization }, null, 8, ["organization"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Head), { title: "Paramètres de l'organisation" }),
              createVNode(_sfc_main$2, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3, { organization: __props.organization }, null, 8, ["organization"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Settings/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
