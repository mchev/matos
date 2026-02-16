import { computed, mergeProps, withCtx, unref, createVNode, renderSlot, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-B3jJCr1A.js";
import { usePage, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./index-53Kg4F4g.js";
import { Download, Upload } from "lucide-vue-next";
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
  __name: "Layout",
  __ssrInlineRender: true,
  props: {
    title: String,
    description: String,
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const page = usePage();
    const isIncoming = computed(() => page.url.includes("reservations/in"));
    const isOutgoing = computed(() => page.url.includes("reservations/out"));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: __props.title,
        description: __props.description
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto"${_scopeId}><nav class="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 rounded-b-xl bg-secondary p-4 shadow-sm" role="navigation" aria-label="Réservations navigation"${_scopeId}><div class="flex-1 space-y-1"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              asChild: "",
              variant: isIncoming.value ? "default" : "outline",
              class: "w-full transition-all duration-200 hover:scale-[1.02]",
              disabled: __props.loading,
              "aria-current": isIncoming.value ? "page" : void 0
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("app.organizations.reservations.in.index"),
                    class: "flex items-center justify-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Download), { class: "w-4 h-4 mr-2" }, null, _parent4, _scopeId3));
                        _push4(`<span${_scopeId3}>Mes demandes</span>`);
                      } else {
                        return [
                          createVNode(unref(Download), { class: "w-4 h-4 mr-2" }),
                          createVNode("span", null, "Mes demandes")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), {
                      href: _ctx.route("app.organizations.reservations.in.index"),
                      class: "flex items-center justify-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Download), { class: "w-4 h-4 mr-2" }),
                        createVNode("span", null, "Mes demandes")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-xs text-muted-foreground text-center"${_scopeId}> Consultez et gérez vos demandes d&#39;emprunt de matériel auprès d&#39;autres organisations </p></div><div class="hidden sm:flex items-center"${_scopeId}><div class="w-px h-16 bg-gray-200"${_scopeId}></div></div><div class="flex-1 space-y-1"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              asChild: "",
              variant: isOutgoing.value ? "default" : "outline",
              class: "w-full transition-all duration-200 hover:scale-[1.02]",
              disabled: __props.loading,
              "aria-current": isOutgoing.value ? "page" : void 0
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("app.organizations.reservations.out.index"),
                    class: "flex items-center justify-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Upload), { class: "w-4 h-4 mr-2" }, null, _parent4, _scopeId3));
                        _push4(`<span${_scopeId3}>Demandes reçues</span>`);
                      } else {
                        return [
                          createVNode(unref(Upload), { class: "w-4 h-4 mr-2" }),
                          createVNode("span", null, "Demandes reçues")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), {
                      href: _ctx.route("app.organizations.reservations.out.index"),
                      class: "flex items-center justify-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Upload), { class: "w-4 h-4 mr-2" }),
                        createVNode("span", null, "Demandes reçues")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-xs text-muted-foreground text-center"${_scopeId}> Gérez les demandes d&#39;emprunt de matériel reçues de la part d&#39;autres organisations </p></div></nav></div>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto" }, [
                createVNode("nav", {
                  class: "flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 rounded-b-xl bg-secondary p-4 shadow-sm",
                  role: "navigation",
                  "aria-label": "Réservations navigation"
                }, [
                  createVNode("div", { class: "flex-1 space-y-1" }, [
                    createVNode(unref(_sfc_main$2), {
                      asChild: "",
                      variant: isIncoming.value ? "default" : "outline",
                      class: "w-full transition-all duration-200 hover:scale-[1.02]",
                      disabled: __props.loading,
                      "aria-current": isIncoming.value ? "page" : void 0
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Link), {
                          href: _ctx.route("app.organizations.reservations.in.index"),
                          class: "flex items-center justify-center"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Download), { class: "w-4 h-4 mr-2" }),
                            createVNode("span", null, "Mes demandes")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      _: 1
                    }, 8, ["variant", "disabled", "aria-current"]),
                    createVNode("p", { class: "text-xs text-muted-foreground text-center" }, " Consultez et gérez vos demandes d'emprunt de matériel auprès d'autres organisations ")
                  ]),
                  createVNode("div", { class: "hidden sm:flex items-center" }, [
                    createVNode("div", { class: "w-px h-16 bg-gray-200" })
                  ]),
                  createVNode("div", { class: "flex-1 space-y-1" }, [
                    createVNode(unref(_sfc_main$2), {
                      asChild: "",
                      variant: isOutgoing.value ? "default" : "outline",
                      class: "w-full transition-all duration-200 hover:scale-[1.02]",
                      disabled: __props.loading,
                      "aria-current": isOutgoing.value ? "page" : void 0
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Link), {
                          href: _ctx.route("app.organizations.reservations.out.index"),
                          class: "flex items-center justify-center"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Upload), { class: "w-4 h-4 mr-2" }),
                            createVNode("span", null, "Demandes reçues")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      _: 1
                    }, 8, ["variant", "disabled", "aria-current"]),
                    createVNode("p", { class: "text-xs text-muted-foreground text-center" }, " Gérez les demandes d'emprunt de matériel reçues de la part d'autres organisations ")
                  ])
                ])
              ]),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Reservations/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
