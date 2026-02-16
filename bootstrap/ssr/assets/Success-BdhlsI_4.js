import { withCtx, unref, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { CheckCircle } from "lucide-vue-next";
import { Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./PublicLayout-Dy_cSdNa.js";
import { _ as _sfc_main$2 } from "./index-53Kg4F4g.js";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "reka-ui";
import "@vueuse/core";
import "@heroicons/vue/24/outline";
import "./index-9VOASAGY.js";
import "class-variance-authority";
import "vue-sonner";
import "./Input-BNuRmWJk.js";
import "clsx";
import "tailwind-merge";
const _sfc_main = {
  __name: "Success",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container mx-auto px-4 py-16"${_scopeId}><div class="max-w-2xl mx-auto text-center"${_scopeId}><div class="mb-8"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckCircle), { class: "w-16 h-16 text-green-500 mx-auto" }, null, _parent2, _scopeId));
            _push2(`</div><h1 class="text-3xl font-bold mb-4"${_scopeId}>Reservation Successful!</h1><p class="text-lg text-muted-foreground mb-8"${_scopeId}> Thank you for your reservation. We have sent a confirmation email with all the details. </p><div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { asChild: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("equipments.index")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Browse More Equipment `);
                      } else {
                        return [
                          createTextVNode(" Browse More Equipment ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), {
                      href: _ctx.route("equipments.index")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Browse More Equipment ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "container mx-auto px-4 py-16" }, [
                createVNode("div", { class: "max-w-2xl mx-auto text-center" }, [
                  createVNode("div", { class: "mb-8" }, [
                    createVNode(unref(CheckCircle), { class: "w-16 h-16 text-green-500 mx-auto" })
                  ]),
                  createVNode("h1", { class: "text-3xl font-bold mb-4" }, "Reservation Successful!"),
                  createVNode("p", { class: "text-lg text-muted-foreground mb-8" }, " Thank you for your reservation. We have sent a confirmation email with all the details. "),
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode(unref(_sfc_main$2), { asChild: "" }, {
                      default: withCtx(() => [
                        createVNode(unref(Link), {
                          href: _ctx.route("equipments.index")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Browse More Equipment ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Public/Checkout/Success.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
