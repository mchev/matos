import { defineComponent, unref, mergeProps, withCtx, createVNode, useSSRContext, renderSlot, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$8, a as _sfc_main$9, b as _sfc_main$a, d as _sfc_main$b, c as _sfc_main$c } from "./CardTitle-rMLiyiHU.js";
import { _ as _sfc_main$5, a as _sfc_main$6, b as _sfc_main$7 } from "./index-Don7oRVo.js";
import { c as cn, _ as _sfc_main$4 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$d } from "./index-9VOASAGY.js";
import { reactiveOmit } from "@vueuse/core";
import { ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaRoot, ScrollAreaViewport, ScrollAreaCorner } from "reka-ui";
import { _ as _sfc_main$3 } from "./AppLayout-B3jJCr1A.js";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { PlusCircle, Settings } from "lucide-vue-next";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "@heroicons/vue/24/outline";
import "vue-sonner";
import "./Input-BNuRmWJk.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ScrollBar",
  __ssrInlineRender: true,
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ScrollAreaScrollbar), mergeProps({ "data-slot": "scroll-area-scrollbar" }, unref(delegatedProps), {
        class: unref(cn)(
          "flex touch-none p-px transition-colors select-none",
          __props.orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
          __props.orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ScrollAreaThumb), {
              "data-slot": "scroll-area-thumb",
              class: "bg-border relative flex-1 rounded-full"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ScrollAreaThumb), {
                "data-slot": "scroll-area-thumb",
                class: "bg-border relative flex-1 rounded-full"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/scroll-area/ScrollBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ScrollArea",
  __ssrInlineRender: true,
  props: {
    type: {},
    dir: {},
    scrollHideDelay: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ScrollAreaRoot), mergeProps({ "data-slot": "scroll-area" }, unref(delegatedProps), {
        class: unref(cn)("relative", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ScrollAreaViewport), {
              "data-slot": "scroll-area-viewport",
              class: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ScrollAreaCorner), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ScrollAreaViewport), {
                "data-slot": "scroll-area-viewport",
                class: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }),
              createVNode(_sfc_main$2),
              createVNode(unref(ScrollAreaCorner))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/scroll-area/ScrollArea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    organization: {
      type: Object,
      default: () => ({})
    },
    stats: {
      type: Object,
      default: () => ({
        equipment_count: 0,
        total_borrowed_count: 0,
        total_lent_count: 0,
        depots_count: 0
      })
    },
    lentReservations: {
      type: Array,
      required: true
    },
    borrowedReservations: {
      type: Array,
      required: true
    },
    recentEquipment: {
      type: Array,
      default: () => []
    },
    depots: {
      type: Array,
      default: () => []
    },
    upcomingReservations: {
      type: Array,
      default: () => []
    },
    depotsWithInvalidAddress: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    var _a, _b, _c, _d;
    const props = __props;
    const formatDateRange = (startDate, endDate) => {
      if (!startDate || !endDate) return "---";
      try {
        const start = format(new Date(startDate), "dd/MM/yyyy", { locale: fr });
        const end = format(new Date(endDate), "dd/MM/yyyy", { locale: fr });
        return `${start} → ${end}`;
      } catch (error) {
        console.error("Error formatting date range:", error);
        return "---";
      }
    };
    const formatPrice = (price) => {
      if (!price) return "0,00 €";
      return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR"
      }).format(price);
    };
    const safeStats = {
      equipment_count: ((_a = props.stats) == null ? void 0 : _a.equipment_count) ?? 0,
      total_borrowed_count: ((_b = props.stats) == null ? void 0 : _b.total_borrowed_count) ?? 0,
      total_lent_count: ((_c = props.stats) == null ? void 0 : _c.total_lent_count) ?? 0,
      depots_count: ((_d = props.stats) == null ? void 0 : _d.depots_count) ?? 0
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Tableau de bord" }, null, _parent2, _scopeId));
            _push2(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 py-8"${_scopeId}><div class="flex flex-wrap gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              asChild: "",
              variant: "default",
              class: "group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("app.organizations.equipments.create"),
                    class: "flex items-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(PlusCircle), { class: "i-lucide-plus-circle mr-2 h-4 w-4 transition-transform group-hover:scale-125" }, null, _parent4, _scopeId3));
                        _push4(` Ajouter du matériel `);
                      } else {
                        return [
                          createVNode(unref(PlusCircle), { class: "i-lucide-plus-circle mr-2 h-4 w-4 transition-transform group-hover:scale-125" }),
                          createTextVNode(" Ajouter du matériel ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), {
                      href: _ctx.route("app.organizations.equipments.create"),
                      class: "flex items-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(PlusCircle), { class: "i-lucide-plus-circle mr-2 h-4 w-4 transition-transform group-hover:scale-125" }),
                        createTextVNode(" Ajouter du matériel ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              asChild: "",
              variant: "outline",
              class: "group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("app.organizations.settings.edit"),
                    class: "flex items-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Settings), { class: "i-lucide-settings mr-2 h-4 w-4 transition-transform group-hover:scale-125" }, null, _parent4, _scopeId3));
                        _push4(` Gérer l&#39;organisation `);
                      } else {
                        return [
                          createVNode(unref(Settings), { class: "i-lucide-settings mr-2 h-4 w-4 transition-transform group-hover:scale-125" }),
                          createTextVNode(" Gérer l'organisation ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), {
                      href: _ctx.route("app.organizations.settings.edit"),
                      class: "flex items-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Settings), { class: "i-lucide-settings mr-2 h-4 w-4 transition-transform group-hover:scale-125" }),
                        createTextVNode(" Gérer l'organisation ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (__props.depotsWithInvalidAddress.length > 0) {
              _push2(`<div${_scopeId}><!--[-->`);
              ssrRenderList(__props.depotsWithInvalidAddress, (depot) => {
                _push2(ssrRenderComponent(unref(_sfc_main$5), {
                  class: "bg-yellow-500/10 border-yellow-500 text-yellow-900 dark:text-yellow-500",
                  key: depot.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(_sfc_main$6), null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Votre lieu de stockage <strong${_scopeId3}>&quot;${ssrInterpolate(depot.name)}&quot;</strong> a besoin d&#39;une adresse valide `);
                          } else {
                            return [
                              createTextVNode(" Votre lieu de stockage "),
                              createVNode("strong", null, '"' + toDisplayString(depot.name) + '"', 1),
                              createTextVNode(" a besoin d'une adresse valide ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(_sfc_main$7), null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Les adresses permettent aux utilisateurs de trouver vos équipements par proximité géographique. <span class="block italic"${_scopeId3}> Note : Les adresses exactes ne sont jamais affichées publiquement, elles servent uniquement au calcul de distance. </span>`);
                            _push4(ssrRenderComponent(unref(_sfc_main$4), {
                              asChild: "",
                              size: "sm",
                              class: "mt-3"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(Link), {
                                    href: _ctx.route("app.organizations.depots.edit", depot.id),
                                    class: "flex items-center"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(` Ajouter l&#39;adresse `);
                                      } else {
                                        return [
                                          createTextVNode(" Ajouter l'adresse ")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(Link), {
                                      href: _ctx.route("app.organizations.depots.edit", depot.id),
                                      class: "flex items-center"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Ajouter l'adresse ")
                                      ]),
                                      _: 1
                                    }, 8, ["href"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createTextVNode(" Les adresses permettent aux utilisateurs de trouver vos équipements par proximité géographique. "),
                              createVNode("span", { class: "block italic" }, " Note : Les adresses exactes ne sont jamais affichées publiquement, elles servent uniquement au calcul de distance. "),
                              createVNode(unref(_sfc_main$4), {
                                asChild: "",
                                size: "sm",
                                class: "mt-3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Link), {
                                    href: _ctx.route("app.organizations.depots.edit", depot.id),
                                    class: "flex items-center"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Ajouter l'adresse ")
                                    ]),
                                    _: 1
                                  }, 8, ["href"])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(_sfc_main$6), null, {
                          default: withCtx(() => [
                            createTextVNode(" Votre lieu de stockage "),
                            createVNode("strong", null, '"' + toDisplayString(depot.name) + '"', 1),
                            createTextVNode(" a besoin d'une adresse valide ")
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            createTextVNode(" Les adresses permettent aux utilisateurs de trouver vos équipements par proximité géographique. "),
                            createVNode("span", { class: "block italic" }, " Note : Les adresses exactes ne sont jamais affichées publiquement, elles servent uniquement au calcul de distance. "),
                            createVNode(unref(_sfc_main$4), {
                              asChild: "",
                              size: "sm",
                              class: "mt-3"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Link), {
                                  href: _ctx.route("app.organizations.depots.edit", depot.id),
                                  class: "flex items-center"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Ajouter l'adresse ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$8), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$a), { class: "text-sm font-medium" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Équipements`);
                            } else {
                              return [
                                createTextVNode("Équipements")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<i class="i-lucide-box h-4 w-4 text-muted-foreground"${_scopeId3}></i>`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$a), { class: "text-sm font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode("Équipements")
                            ]),
                            _: 1
                          }),
                          createVNode("i", { class: "i-lucide-box h-4 w-4 text-muted-foreground" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$b), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-2xl font-bold"${_scopeId3}>${ssrInterpolate(safeStats.equipment_count)}</div><p class="text-xs text-muted-foreground"${_scopeId3}> Total des équipements disponibles </p>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(safeStats.equipment_count), 1),
                          createVNode("p", { class: "text-xs text-muted-foreground" }, " Total des équipements disponibles ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$a), { class: "text-sm font-medium" }, {
                          default: withCtx(() => [
                            createTextVNode("Équipements")
                          ]),
                          _: 1
                        }),
                        createVNode("i", { class: "i-lucide-box h-4 w-4 text-muted-foreground" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$b), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(safeStats.equipment_count), 1),
                        createVNode("p", { class: "text-xs text-muted-foreground" }, " Total des équipements disponibles ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$8), { class: "border-blue-200" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$a), { class: "text-sm font-medium" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Emprunts`);
                            } else {
                              return [
                                createTextVNode("Emprunts")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<i class="i-lucide-arrow-down-left h-4 w-4 text-blue-500"${_scopeId3}></i>`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$a), { class: "text-sm font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode("Emprunts")
                            ]),
                            _: 1
                          }),
                          createVNode("i", { class: "i-lucide-arrow-down-left h-4 w-4 text-blue-500" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$b), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-2xl font-bold text-blue-700"${_scopeId3}>${ssrInterpolate(safeStats.total_borrowed_count)}</div><p class="text-xs text-muted-foreground"${_scopeId3}> Total des emprunts effectués </p>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-2xl font-bold text-blue-700" }, toDisplayString(safeStats.total_borrowed_count), 1),
                          createVNode("p", { class: "text-xs text-muted-foreground" }, " Total des emprunts effectués ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$a), { class: "text-sm font-medium" }, {
                          default: withCtx(() => [
                            createTextVNode("Emprunts")
                          ]),
                          _: 1
                        }),
                        createVNode("i", { class: "i-lucide-arrow-down-left h-4 w-4 text-blue-500" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$b), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-2xl font-bold text-blue-700" }, toDisplayString(safeStats.total_borrowed_count), 1),
                        createVNode("p", { class: "text-xs text-muted-foreground" }, " Total des emprunts effectués ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$8), { class: "border-orange-200" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$a), { class: "text-sm font-medium" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Prêts`);
                            } else {
                              return [
                                createTextVNode("Prêts")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<i class="i-lucide-arrow-up-right h-4 w-4 text-orange-500"${_scopeId3}></i>`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$a), { class: "text-sm font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode("Prêts")
                            ]),
                            _: 1
                          }),
                          createVNode("i", { class: "i-lucide-arrow-up-right h-4 w-4 text-orange-500" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$b), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-2xl font-bold text-orange-700"${_scopeId3}>${ssrInterpolate(safeStats.total_lent_count)}</div><p class="text-xs text-muted-foreground"${_scopeId3}> Total des prêts effectués </p>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-2xl font-bold text-orange-700" }, toDisplayString(safeStats.total_lent_count), 1),
                          createVNode("p", { class: "text-xs text-muted-foreground" }, " Total des prêts effectués ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$a), { class: "text-sm font-medium" }, {
                          default: withCtx(() => [
                            createTextVNode("Prêts")
                          ]),
                          _: 1
                        }),
                        createVNode("i", { class: "i-lucide-arrow-up-right h-4 w-4 text-orange-500" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$b), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-2xl font-bold text-orange-700" }, toDisplayString(safeStats.total_lent_count), 1),
                        createVNode("p", { class: "text-xs text-muted-foreground" }, " Total des prêts effectués ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$8), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$a), { class: "text-sm font-medium" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Lieux de stockage`);
                            } else {
                              return [
                                createTextVNode("Lieux de stockage")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<i class="i-lucide-warehouse h-4 w-4 text-muted-foreground"${_scopeId3}></i>`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$a), { class: "text-sm font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode("Lieux de stockage")
                            ]),
                            _: 1
                          }),
                          createVNode("i", { class: "i-lucide-warehouse h-4 w-4 text-muted-foreground" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$b), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-2xl font-bold"${_scopeId3}>${ssrInterpolate(safeStats.depots_count)}</div><p class="text-xs text-muted-foreground"${_scopeId3}> Nombre total de lieux de stockage </p>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(safeStats.depots_count), 1),
                          createVNode("p", { class: "text-xs text-muted-foreground" }, " Nombre total de lieux de stockage ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$a), { class: "text-sm font-medium" }, {
                          default: withCtx(() => [
                            createTextVNode("Lieux de stockage")
                          ]),
                          _: 1
                        }),
                        createVNode("i", { class: "i-lucide-warehouse h-4 w-4 text-muted-foreground" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$b), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(safeStats.depots_count), 1),
                        createVNode("p", { class: "text-xs text-muted-foreground" }, " Nombre total de lieux de stockage ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 gap-6 md:grid-cols-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$8), { class: "col-span-1 border-orange-200" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$a), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Équipements prêtés`);
                            } else {
                              return [
                                createTextVNode("Équipements prêtés")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$c), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Équipements que vous prêtez actuellement`);
                            } else {
                              return [
                                createTextVNode("Équipements que vous prêtez actuellement")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><i class="i-lucide-arrow-up-right h-5 w-5 text-orange-500"${_scopeId3}></i>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$a), null, {
                              default: withCtx(() => [
                                createTextVNode("Équipements prêtés")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$c), null, {
                              default: withCtx(() => [
                                createTextVNode("Équipements que vous prêtez actuellement")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("i", { class: "i-lucide-arrow-up-right h-5 w-5 text-orange-500" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$b), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$1), { class: "h-[300px] pr-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a2, _b2;
                            if (_push5) {
                              if ((_a2 = __props.lentReservations) == null ? void 0 : _a2.length) {
                                _push5(`<div class="space-y-6"${_scopeId4}><!--[-->`);
                                ssrRenderList(__props.lentReservations, (reservation) => {
                                  var _a3;
                                  _push5(`<div class="flex flex-col space-y-2 rounded-lg border border-orange-200 p-4 transition-colors hover:bg-orange-50/50"${_scopeId4}><div class="flex items-center justify-between"${_scopeId4}><div class="font-medium"${_scopeId4}>${ssrInterpolate((_a3 = reservation.borrower_organization) == null ? void 0 : _a3.name)}</div>`);
                                  _push5(ssrRenderComponent(unref(_sfc_main$d), {
                                    class: reservation.status_color
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(reservation.status_label)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(reservation.status_label), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</div><div class="text-sm text-muted-foreground"${_scopeId4}>${ssrInterpolate(formatDateRange(reservation.start_date, reservation.end_date))}</div><div class="space-y-1"${_scopeId4}><!--[-->`);
                                  ssrRenderList(reservation.items, (item) => {
                                    var _a4;
                                    _push5(`<div class="flex items-center justify-between text-sm"${_scopeId4}><div class="flex items-center gap-2"${_scopeId4}>`);
                                    _push5(ssrRenderComponent(unref(_sfc_main$d), {
                                      variant: "outline",
                                      class: "shrink-0"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`${ssrInterpolate(item.quantity)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(item.quantity), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    _push5(`<span${_scopeId4}>${ssrInterpolate(((_a4 = item.equipment) == null ? void 0 : _a4.name) || "Équipement supprimé")}</span></div></div>`);
                                  });
                                  _push5(`<!--]--></div><div class="mt-2 flex items-center justify-between border-t pt-2 text-sm"${_scopeId4}><div class="flex items-center gap-2 text-muted-foreground"${_scopeId4}><i class="i-lucide-wallet h-4 w-4"${_scopeId4}></i><span${_scopeId4}>${ssrInterpolate(formatPrice(reservation.subtotal / 100))}</span>`);
                                  if (reservation.discount_amount) {
                                    _push5(`<span class="text-orange-600"${_scopeId4}> (-${ssrInterpolate(formatPrice(reservation.discount_amount / 100))}) </span>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</div><div class="flex items-center gap-2 text-muted-foreground"${_scopeId4}><i class="i-lucide-shield h-4 w-4"${_scopeId4}></i><span class="font-bold"${_scopeId4}>Total : ${ssrInterpolate(formatPrice(reservation.total / 100))}</span></div></div></div>`);
                                });
                                _push5(`<!--]--></div>`);
                              } else {
                                _push5(`<div class="flex h-[200px] items-center justify-center"${_scopeId4}><div class="text-center"${_scopeId4}><i class="i-lucide-package-x mb-2 h-10 w-10 text-muted-foreground"${_scopeId4}></i><p class="text-sm text-muted-foreground"${_scopeId4}>Aucun équipement prêté</p></div></div>`);
                              }
                            } else {
                              return [
                                ((_b2 = __props.lentReservations) == null ? void 0 : _b2.length) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "space-y-6"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.lentReservations, (reservation) => {
                                    var _a3;
                                    return openBlock(), createBlock("div", {
                                      key: reservation.id,
                                      class: "flex flex-col space-y-2 rounded-lg border border-orange-200 p-4 transition-colors hover:bg-orange-50/50"
                                    }, [
                                      createVNode("div", { class: "flex items-center justify-between" }, [
                                        createVNode("div", { class: "font-medium" }, toDisplayString((_a3 = reservation.borrower_organization) == null ? void 0 : _a3.name), 1),
                                        createVNode(unref(_sfc_main$d), {
                                          class: reservation.status_color
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(reservation.status_label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])
                                      ]),
                                      createVNode("div", { class: "text-sm text-muted-foreground" }, toDisplayString(formatDateRange(reservation.start_date, reservation.end_date)), 1),
                                      createVNode("div", { class: "space-y-1" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(reservation.items, (item) => {
                                          var _a4;
                                          return openBlock(), createBlock("div", {
                                            key: item.id,
                                            class: "flex items-center justify-between text-sm"
                                          }, [
                                            createVNode("div", { class: "flex items-center gap-2" }, [
                                              createVNode(unref(_sfc_main$d), {
                                                variant: "outline",
                                                class: "shrink-0"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.quantity), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode("span", null, toDisplayString(((_a4 = item.equipment) == null ? void 0 : _a4.name) || "Équipement supprimé"), 1)
                                            ])
                                          ]);
                                        }), 128))
                                      ]),
                                      createVNode("div", { class: "mt-2 flex items-center justify-between border-t pt-2 text-sm" }, [
                                        createVNode("div", { class: "flex items-center gap-2 text-muted-foreground" }, [
                                          createVNode("i", { class: "i-lucide-wallet h-4 w-4" }),
                                          createVNode("span", null, toDisplayString(formatPrice(reservation.subtotal / 100)), 1),
                                          reservation.discount_amount ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "text-orange-600"
                                          }, " (-" + toDisplayString(formatPrice(reservation.discount_amount / 100)) + ") ", 1)) : createCommentVNode("", true)
                                        ]),
                                        createVNode("div", { class: "flex items-center gap-2 text-muted-foreground" }, [
                                          createVNode("i", { class: "i-lucide-shield h-4 w-4" }),
                                          createVNode("span", { class: "font-bold" }, "Total : " + toDisplayString(formatPrice(reservation.total / 100)), 1)
                                        ])
                                      ])
                                    ]);
                                  }), 128))
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex h-[200px] items-center justify-center"
                                }, [
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("i", { class: "i-lucide-package-x mb-2 h-10 w-10 text-muted-foreground" }),
                                    createVNode("p", { class: "text-sm text-muted-foreground" }, "Aucun équipement prêté")
                                  ])
                                ]))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$1), { class: "h-[300px] pr-4" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                ((_a2 = __props.lentReservations) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "space-y-6"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.lentReservations, (reservation) => {
                                    var _a3;
                                    return openBlock(), createBlock("div", {
                                      key: reservation.id,
                                      class: "flex flex-col space-y-2 rounded-lg border border-orange-200 p-4 transition-colors hover:bg-orange-50/50"
                                    }, [
                                      createVNode("div", { class: "flex items-center justify-between" }, [
                                        createVNode("div", { class: "font-medium" }, toDisplayString((_a3 = reservation.borrower_organization) == null ? void 0 : _a3.name), 1),
                                        createVNode(unref(_sfc_main$d), {
                                          class: reservation.status_color
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(reservation.status_label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])
                                      ]),
                                      createVNode("div", { class: "text-sm text-muted-foreground" }, toDisplayString(formatDateRange(reservation.start_date, reservation.end_date)), 1),
                                      createVNode("div", { class: "space-y-1" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(reservation.items, (item) => {
                                          var _a4;
                                          return openBlock(), createBlock("div", {
                                            key: item.id,
                                            class: "flex items-center justify-between text-sm"
                                          }, [
                                            createVNode("div", { class: "flex items-center gap-2" }, [
                                              createVNode(unref(_sfc_main$d), {
                                                variant: "outline",
                                                class: "shrink-0"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.quantity), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode("span", null, toDisplayString(((_a4 = item.equipment) == null ? void 0 : _a4.name) || "Équipement supprimé"), 1)
                                            ])
                                          ]);
                                        }), 128))
                                      ]),
                                      createVNode("div", { class: "mt-2 flex items-center justify-between border-t pt-2 text-sm" }, [
                                        createVNode("div", { class: "flex items-center gap-2 text-muted-foreground" }, [
                                          createVNode("i", { class: "i-lucide-wallet h-4 w-4" }),
                                          createVNode("span", null, toDisplayString(formatPrice(reservation.subtotal / 100)), 1),
                                          reservation.discount_amount ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "text-orange-600"
                                          }, " (-" + toDisplayString(formatPrice(reservation.discount_amount / 100)) + ") ", 1)) : createCommentVNode("", true)
                                        ]),
                                        createVNode("div", { class: "flex items-center gap-2 text-muted-foreground" }, [
                                          createVNode("i", { class: "i-lucide-shield h-4 w-4" }),
                                          createVNode("span", { class: "font-bold" }, "Total : " + toDisplayString(formatPrice(reservation.total / 100)), 1)
                                        ])
                                      ])
                                    ]);
                                  }), 128))
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex h-[200px] items-center justify-center"
                                }, [
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("i", { class: "i-lucide-package-x mb-2 h-10 w-10 text-muted-foreground" }),
                                    createVNode("p", { class: "text-sm text-muted-foreground" }, "Aucun équipement prêté")
                                  ])
                                ]))
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode(unref(_sfc_main$a), null, {
                            default: withCtx(() => [
                              createTextVNode("Équipements prêtés")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$c), null, {
                            default: withCtx(() => [
                              createTextVNode("Équipements que vous prêtez actuellement")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("i", { class: "i-lucide-arrow-up-right h-5 w-5 text-orange-500" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$b), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1), { class: "h-[300px] pr-4" }, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              ((_a2 = __props.lentReservations) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "space-y-6"
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.lentReservations, (reservation) => {
                                  var _a3;
                                  return openBlock(), createBlock("div", {
                                    key: reservation.id,
                                    class: "flex flex-col space-y-2 rounded-lg border border-orange-200 p-4 transition-colors hover:bg-orange-50/50"
                                  }, [
                                    createVNode("div", { class: "flex items-center justify-between" }, [
                                      createVNode("div", { class: "font-medium" }, toDisplayString((_a3 = reservation.borrower_organization) == null ? void 0 : _a3.name), 1),
                                      createVNode(unref(_sfc_main$d), {
                                        class: reservation.status_color
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(reservation.status_label), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])
                                    ]),
                                    createVNode("div", { class: "text-sm text-muted-foreground" }, toDisplayString(formatDateRange(reservation.start_date, reservation.end_date)), 1),
                                    createVNode("div", { class: "space-y-1" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(reservation.items, (item) => {
                                        var _a4;
                                        return openBlock(), createBlock("div", {
                                          key: item.id,
                                          class: "flex items-center justify-between text-sm"
                                        }, [
                                          createVNode("div", { class: "flex items-center gap-2" }, [
                                            createVNode(unref(_sfc_main$d), {
                                              variant: "outline",
                                              class: "shrink-0"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.quantity), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode("span", null, toDisplayString(((_a4 = item.equipment) == null ? void 0 : _a4.name) || "Équipement supprimé"), 1)
                                          ])
                                        ]);
                                      }), 128))
                                    ]),
                                    createVNode("div", { class: "mt-2 flex items-center justify-between border-t pt-2 text-sm" }, [
                                      createVNode("div", { class: "flex items-center gap-2 text-muted-foreground" }, [
                                        createVNode("i", { class: "i-lucide-wallet h-4 w-4" }),
                                        createVNode("span", null, toDisplayString(formatPrice(reservation.subtotal / 100)), 1),
                                        reservation.discount_amount ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "text-orange-600"
                                        }, " (-" + toDisplayString(formatPrice(reservation.discount_amount / 100)) + ") ", 1)) : createCommentVNode("", true)
                                      ]),
                                      createVNode("div", { class: "flex items-center gap-2 text-muted-foreground" }, [
                                        createVNode("i", { class: "i-lucide-shield h-4 w-4" }),
                                        createVNode("span", { class: "font-bold" }, "Total : " + toDisplayString(formatPrice(reservation.total / 100)), 1)
                                      ])
                                    ])
                                  ]);
                                }), 128))
                              ])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "flex h-[200px] items-center justify-center"
                              }, [
                                createVNode("div", { class: "text-center" }, [
                                  createVNode("i", { class: "i-lucide-package-x mb-2 h-10 w-10 text-muted-foreground" }),
                                  createVNode("p", { class: "text-sm text-muted-foreground" }, "Aucun équipement prêté")
                                ])
                              ]))
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$8), { class: "col-span-1 border-blue-200" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$a), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Équipements empruntés`);
                            } else {
                              return [
                                createTextVNode("Équipements empruntés")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$c), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Équipements que vous empruntez actuellement`);
                            } else {
                              return [
                                createTextVNode("Équipements que vous empruntez actuellement")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><i class="i-lucide-arrow-down-left h-5 w-5 text-blue-500"${_scopeId3}></i>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$a), null, {
                              default: withCtx(() => [
                                createTextVNode("Équipements empruntés")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$c), null, {
                              default: withCtx(() => [
                                createTextVNode("Équipements que vous empruntez actuellement")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("i", { class: "i-lucide-arrow-down-left h-5 w-5 text-blue-500" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$b), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$1), { class: "h-[300px] pr-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a2, _b2;
                            if (_push5) {
                              if ((_a2 = __props.borrowedReservations) == null ? void 0 : _a2.length) {
                                _push5(`<div class="space-y-6"${_scopeId4}><!--[-->`);
                                ssrRenderList(__props.borrowedReservations, (reservation) => {
                                  var _a3;
                                  _push5(`<div class="flex flex-col space-y-2 rounded-lg border border-blue-200 p-4 transition-colors hover:bg-blue-50/50"${_scopeId4}><div class="flex items-center justify-between"${_scopeId4}><div class="font-medium"${_scopeId4}>${ssrInterpolate((_a3 = reservation.lender_organization) == null ? void 0 : _a3.name)}</div>`);
                                  _push5(ssrRenderComponent(unref(_sfc_main$d), {
                                    class: reservation.status_color
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(reservation.status_label)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(reservation.status_label), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</div><div class="text-sm text-muted-foreground"${_scopeId4}>${ssrInterpolate(formatDateRange(reservation.start_date, reservation.end_date))}</div><div class="space-y-1"${_scopeId4}><!--[-->`);
                                  ssrRenderList(reservation.items, (item) => {
                                    var _a4;
                                    _push5(`<div class="flex items-center justify-between text-sm"${_scopeId4}><div class="flex items-center gap-2"${_scopeId4}>`);
                                    _push5(ssrRenderComponent(unref(_sfc_main$d), {
                                      variant: "outline",
                                      class: "shrink-0"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`${ssrInterpolate(item.quantity)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(item.quantity), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    _push5(`<span${_scopeId4}>${ssrInterpolate(((_a4 = item.equipment) == null ? void 0 : _a4.name) || "Équipement supprimé")}</span></div></div>`);
                                  });
                                  _push5(`<!--]--></div><div class="mt-2 flex items-center justify-between border-t pt-2 text-sm"${_scopeId4}><div class="flex items-center gap-2 text-muted-foreground"${_scopeId4}><i class="i-lucide-wallet h-4 w-4"${_scopeId4}></i><span${_scopeId4}>${ssrInterpolate(formatPrice(reservation.subtotal / 100))}</span>`);
                                  if (reservation.discount_amount) {
                                    _push5(`<span class="text-blue-600"${_scopeId4}> (-${ssrInterpolate(formatPrice(reservation.discount_amount / 100))}) </span>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</div><div class="flex items-center gap-2 text-muted-foreground"${_scopeId4}><i class="i-lucide-shield h-4 w-4"${_scopeId4}></i><span class="font-bold"${_scopeId4}>Total : ${ssrInterpolate(formatPrice(reservation.total / 100))}</span></div></div></div>`);
                                });
                                _push5(`<!--]--></div>`);
                              } else {
                                _push5(`<div class="flex h-[200px] items-center justify-center"${_scopeId4}><div class="text-center"${_scopeId4}><i class="i-lucide-package-x mb-2 h-10 w-10 text-muted-foreground"${_scopeId4}></i><p class="text-sm text-muted-foreground"${_scopeId4}>Aucun équipement emprunté</p></div></div>`);
                              }
                            } else {
                              return [
                                ((_b2 = __props.borrowedReservations) == null ? void 0 : _b2.length) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "space-y-6"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.borrowedReservations, (reservation) => {
                                    var _a3;
                                    return openBlock(), createBlock("div", {
                                      key: reservation.id,
                                      class: "flex flex-col space-y-2 rounded-lg border border-blue-200 p-4 transition-colors hover:bg-blue-50/50"
                                    }, [
                                      createVNode("div", { class: "flex items-center justify-between" }, [
                                        createVNode("div", { class: "font-medium" }, toDisplayString((_a3 = reservation.lender_organization) == null ? void 0 : _a3.name), 1),
                                        createVNode(unref(_sfc_main$d), {
                                          class: reservation.status_color
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(reservation.status_label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])
                                      ]),
                                      createVNode("div", { class: "text-sm text-muted-foreground" }, toDisplayString(formatDateRange(reservation.start_date, reservation.end_date)), 1),
                                      createVNode("div", { class: "space-y-1" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(reservation.items, (item) => {
                                          var _a4;
                                          return openBlock(), createBlock("div", {
                                            key: item.id,
                                            class: "flex items-center justify-between text-sm"
                                          }, [
                                            createVNode("div", { class: "flex items-center gap-2" }, [
                                              createVNode(unref(_sfc_main$d), {
                                                variant: "outline",
                                                class: "shrink-0"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.quantity), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode("span", null, toDisplayString(((_a4 = item.equipment) == null ? void 0 : _a4.name) || "Équipement supprimé"), 1)
                                            ])
                                          ]);
                                        }), 128))
                                      ]),
                                      createVNode("div", { class: "mt-2 flex items-center justify-between border-t pt-2 text-sm" }, [
                                        createVNode("div", { class: "flex items-center gap-2 text-muted-foreground" }, [
                                          createVNode("i", { class: "i-lucide-wallet h-4 w-4" }),
                                          createVNode("span", null, toDisplayString(formatPrice(reservation.subtotal / 100)), 1),
                                          reservation.discount_amount ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "text-blue-600"
                                          }, " (-" + toDisplayString(formatPrice(reservation.discount_amount / 100)) + ") ", 1)) : createCommentVNode("", true)
                                        ]),
                                        createVNode("div", { class: "flex items-center gap-2 text-muted-foreground" }, [
                                          createVNode("i", { class: "i-lucide-shield h-4 w-4" }),
                                          createVNode("span", { class: "font-bold" }, "Total : " + toDisplayString(formatPrice(reservation.total / 100)), 1)
                                        ])
                                      ])
                                    ]);
                                  }), 128))
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex h-[200px] items-center justify-center"
                                }, [
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("i", { class: "i-lucide-package-x mb-2 h-10 w-10 text-muted-foreground" }),
                                    createVNode("p", { class: "text-sm text-muted-foreground" }, "Aucun équipement emprunté")
                                  ])
                                ]))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$1), { class: "h-[300px] pr-4" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                ((_a2 = __props.borrowedReservations) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "space-y-6"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.borrowedReservations, (reservation) => {
                                    var _a3;
                                    return openBlock(), createBlock("div", {
                                      key: reservation.id,
                                      class: "flex flex-col space-y-2 rounded-lg border border-blue-200 p-4 transition-colors hover:bg-blue-50/50"
                                    }, [
                                      createVNode("div", { class: "flex items-center justify-between" }, [
                                        createVNode("div", { class: "font-medium" }, toDisplayString((_a3 = reservation.lender_organization) == null ? void 0 : _a3.name), 1),
                                        createVNode(unref(_sfc_main$d), {
                                          class: reservation.status_color
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(reservation.status_label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])
                                      ]),
                                      createVNode("div", { class: "text-sm text-muted-foreground" }, toDisplayString(formatDateRange(reservation.start_date, reservation.end_date)), 1),
                                      createVNode("div", { class: "space-y-1" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(reservation.items, (item) => {
                                          var _a4;
                                          return openBlock(), createBlock("div", {
                                            key: item.id,
                                            class: "flex items-center justify-between text-sm"
                                          }, [
                                            createVNode("div", { class: "flex items-center gap-2" }, [
                                              createVNode(unref(_sfc_main$d), {
                                                variant: "outline",
                                                class: "shrink-0"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.quantity), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode("span", null, toDisplayString(((_a4 = item.equipment) == null ? void 0 : _a4.name) || "Équipement supprimé"), 1)
                                            ])
                                          ]);
                                        }), 128))
                                      ]),
                                      createVNode("div", { class: "mt-2 flex items-center justify-between border-t pt-2 text-sm" }, [
                                        createVNode("div", { class: "flex items-center gap-2 text-muted-foreground" }, [
                                          createVNode("i", { class: "i-lucide-wallet h-4 w-4" }),
                                          createVNode("span", null, toDisplayString(formatPrice(reservation.subtotal / 100)), 1),
                                          reservation.discount_amount ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "text-blue-600"
                                          }, " (-" + toDisplayString(formatPrice(reservation.discount_amount / 100)) + ") ", 1)) : createCommentVNode("", true)
                                        ]),
                                        createVNode("div", { class: "flex items-center gap-2 text-muted-foreground" }, [
                                          createVNode("i", { class: "i-lucide-shield h-4 w-4" }),
                                          createVNode("span", { class: "font-bold" }, "Total : " + toDisplayString(formatPrice(reservation.total / 100)), 1)
                                        ])
                                      ])
                                    ]);
                                  }), 128))
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex h-[200px] items-center justify-center"
                                }, [
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("i", { class: "i-lucide-package-x mb-2 h-10 w-10 text-muted-foreground" }),
                                    createVNode("p", { class: "text-sm text-muted-foreground" }, "Aucun équipement emprunté")
                                  ])
                                ]))
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode(unref(_sfc_main$a), null, {
                            default: withCtx(() => [
                              createTextVNode("Équipements empruntés")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$c), null, {
                            default: withCtx(() => [
                              createTextVNode("Équipements que vous empruntez actuellement")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("i", { class: "i-lucide-arrow-down-left h-5 w-5 text-blue-500" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$b), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1), { class: "h-[300px] pr-4" }, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              ((_a2 = __props.borrowedReservations) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "space-y-6"
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.borrowedReservations, (reservation) => {
                                  var _a3;
                                  return openBlock(), createBlock("div", {
                                    key: reservation.id,
                                    class: "flex flex-col space-y-2 rounded-lg border border-blue-200 p-4 transition-colors hover:bg-blue-50/50"
                                  }, [
                                    createVNode("div", { class: "flex items-center justify-between" }, [
                                      createVNode("div", { class: "font-medium" }, toDisplayString((_a3 = reservation.lender_organization) == null ? void 0 : _a3.name), 1),
                                      createVNode(unref(_sfc_main$d), {
                                        class: reservation.status_color
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(reservation.status_label), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])
                                    ]),
                                    createVNode("div", { class: "text-sm text-muted-foreground" }, toDisplayString(formatDateRange(reservation.start_date, reservation.end_date)), 1),
                                    createVNode("div", { class: "space-y-1" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(reservation.items, (item) => {
                                        var _a4;
                                        return openBlock(), createBlock("div", {
                                          key: item.id,
                                          class: "flex items-center justify-between text-sm"
                                        }, [
                                          createVNode("div", { class: "flex items-center gap-2" }, [
                                            createVNode(unref(_sfc_main$d), {
                                              variant: "outline",
                                              class: "shrink-0"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.quantity), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode("span", null, toDisplayString(((_a4 = item.equipment) == null ? void 0 : _a4.name) || "Équipement supprimé"), 1)
                                          ])
                                        ]);
                                      }), 128))
                                    ]),
                                    createVNode("div", { class: "mt-2 flex items-center justify-between border-t pt-2 text-sm" }, [
                                      createVNode("div", { class: "flex items-center gap-2 text-muted-foreground" }, [
                                        createVNode("i", { class: "i-lucide-wallet h-4 w-4" }),
                                        createVNode("span", null, toDisplayString(formatPrice(reservation.subtotal / 100)), 1),
                                        reservation.discount_amount ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "text-blue-600"
                                        }, " (-" + toDisplayString(formatPrice(reservation.discount_amount / 100)) + ") ", 1)) : createCommentVNode("", true)
                                      ]),
                                      createVNode("div", { class: "flex items-center gap-2 text-muted-foreground" }, [
                                        createVNode("i", { class: "i-lucide-shield h-4 w-4" }),
                                        createVNode("span", { class: "font-bold" }, "Total : " + toDisplayString(formatPrice(reservation.total / 100)), 1)
                                      ])
                                    ])
                                  ]);
                                }), 128))
                              ])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "flex h-[200px] items-center justify-center"
                              }, [
                                createVNode("div", { class: "text-center" }, [
                                  createVNode("i", { class: "i-lucide-package-x mb-2 h-10 w-10 text-muted-foreground" }),
                                  createVNode("p", { class: "text-sm text-muted-foreground" }, "Aucun équipement emprunté")
                                ])
                              ]))
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$8), { class: "col-span-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$a), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Lieux de stockage`);
                            } else {
                              return [
                                createTextVNode("Lieux de stockage")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$c), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Vue d&#39;ensemble des lieux de stockage`);
                            } else {
                              return [
                                createTextVNode("Vue d'ensemble des lieux de stockage")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><i class="i-lucide-warehouse h-5 w-5 text-muted-foreground"${_scopeId3}></i>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$a), null, {
                              default: withCtx(() => [
                                createTextVNode("Lieux de stockage")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$c), null, {
                              default: withCtx(() => [
                                createTextVNode("Vue d'ensemble des lieux de stockage")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("i", { class: "i-lucide-warehouse h-5 w-5 text-muted-foreground" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$b), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$1), { class: "h-[300px] pr-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a2, _b2;
                            if (_push5) {
                              if ((_a2 = __props.depots) == null ? void 0 : _a2.length) {
                                _push5(`<div class="space-y-4"${_scopeId4}><!--[-->`);
                                ssrRenderList(__props.depots, (depot) => {
                                  _push5(`<div class="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"${_scopeId4}><div class="space-y-1"${_scopeId4}><div class="font-medium"${_scopeId4}>${ssrInterpolate((depot == null ? void 0 : depot.name) ?? "Dépôt sans nom")}</div><div class="flex items-center gap-4 text-sm text-muted-foreground"${_scopeId4}><span class="flex items-center gap-1"${_scopeId4}><i class="i-lucide-box h-4 w-4"${_scopeId4}></i> ${ssrInterpolate((depot == null ? void 0 : depot.equipments_count) ?? 0)} ${ssrInterpolate((depot == null ? void 0 : depot.equipments_count) ?? 0 > 1 ? "équipements" : "équipement")}</span></div></div>`);
                                  _push5(ssrRenderComponent(unref(_sfc_main$4), {
                                    variant: "ghost",
                                    size: "icon"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<i class="i-lucide-chevron-right h-4 w-4"${_scopeId5}></i>`);
                                      } else {
                                        return [
                                          createVNode("i", { class: "i-lucide-chevron-right h-4 w-4" })
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                });
                                _push5(`<!--]--></div>`);
                              } else {
                                _push5(`<div class="flex h-[200px] items-center justify-center"${_scopeId4}><div class="text-center"${_scopeId4}><i class="i-lucide-warehouse-off mb-2 h-10 w-10 text-muted-foreground"${_scopeId4}></i><p class="text-sm text-muted-foreground"${_scopeId4}>Aucun dépôt</p></div></div>`);
                              }
                            } else {
                              return [
                                ((_b2 = __props.depots) == null ? void 0 : _b2.length) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "space-y-4"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.depots, (depot) => {
                                    return openBlock(), createBlock("div", {
                                      key: depot.id,
                                      class: "flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                                    }, [
                                      createVNode("div", { class: "space-y-1" }, [
                                        createVNode("div", { class: "font-medium" }, toDisplayString((depot == null ? void 0 : depot.name) ?? "Dépôt sans nom"), 1),
                                        createVNode("div", { class: "flex items-center gap-4 text-sm text-muted-foreground" }, [
                                          createVNode("span", { class: "flex items-center gap-1" }, [
                                            createVNode("i", { class: "i-lucide-box h-4 w-4" }),
                                            createTextVNode(" " + toDisplayString((depot == null ? void 0 : depot.equipments_count) ?? 0) + " " + toDisplayString((depot == null ? void 0 : depot.equipments_count) ?? 0 > 1 ? "équipements" : "équipement"), 1)
                                          ])
                                        ])
                                      ]),
                                      createVNode(unref(_sfc_main$4), {
                                        variant: "ghost",
                                        size: "icon"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("i", { class: "i-lucide-chevron-right h-4 w-4" })
                                        ]),
                                        _: 1
                                      })
                                    ]);
                                  }), 128))
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex h-[200px] items-center justify-center"
                                }, [
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("i", { class: "i-lucide-warehouse-off mb-2 h-10 w-10 text-muted-foreground" }),
                                    createVNode("p", { class: "text-sm text-muted-foreground" }, "Aucun dépôt")
                                  ])
                                ]))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$1), { class: "h-[300px] pr-4" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                ((_a2 = __props.depots) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "space-y-4"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.depots, (depot) => {
                                    return openBlock(), createBlock("div", {
                                      key: depot.id,
                                      class: "flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                                    }, [
                                      createVNode("div", { class: "space-y-1" }, [
                                        createVNode("div", { class: "font-medium" }, toDisplayString((depot == null ? void 0 : depot.name) ?? "Dépôt sans nom"), 1),
                                        createVNode("div", { class: "flex items-center gap-4 text-sm text-muted-foreground" }, [
                                          createVNode("span", { class: "flex items-center gap-1" }, [
                                            createVNode("i", { class: "i-lucide-box h-4 w-4" }),
                                            createTextVNode(" " + toDisplayString((depot == null ? void 0 : depot.equipments_count) ?? 0) + " " + toDisplayString((depot == null ? void 0 : depot.equipments_count) ?? 0 > 1 ? "équipements" : "équipement"), 1)
                                          ])
                                        ])
                                      ]),
                                      createVNode(unref(_sfc_main$4), {
                                        variant: "ghost",
                                        size: "icon"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("i", { class: "i-lucide-chevron-right h-4 w-4" })
                                        ]),
                                        _: 1
                                      })
                                    ]);
                                  }), 128))
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex h-[200px] items-center justify-center"
                                }, [
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("i", { class: "i-lucide-warehouse-off mb-2 h-10 w-10 text-muted-foreground" }),
                                    createVNode("p", { class: "text-sm text-muted-foreground" }, "Aucun dépôt")
                                  ])
                                ]))
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode(unref(_sfc_main$a), null, {
                            default: withCtx(() => [
                              createTextVNode("Lieux de stockage")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$c), null, {
                            default: withCtx(() => [
                              createTextVNode("Vue d'ensemble des lieux de stockage")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("i", { class: "i-lucide-warehouse h-5 w-5 text-muted-foreground" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$b), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1), { class: "h-[300px] pr-4" }, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              ((_a2 = __props.depots) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "space-y-4"
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.depots, (depot) => {
                                  return openBlock(), createBlock("div", {
                                    key: depot.id,
                                    class: "flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                                  }, [
                                    createVNode("div", { class: "space-y-1" }, [
                                      createVNode("div", { class: "font-medium" }, toDisplayString((depot == null ? void 0 : depot.name) ?? "Dépôt sans nom"), 1),
                                      createVNode("div", { class: "flex items-center gap-4 text-sm text-muted-foreground" }, [
                                        createVNode("span", { class: "flex items-center gap-1" }, [
                                          createVNode("i", { class: "i-lucide-box h-4 w-4" }),
                                          createTextVNode(" " + toDisplayString((depot == null ? void 0 : depot.equipments_count) ?? 0) + " " + toDisplayString((depot == null ? void 0 : depot.equipments_count) ?? 0 > 1 ? "équipements" : "équipement"), 1)
                                        ])
                                      ])
                                    ]),
                                    createVNode(unref(_sfc_main$4), {
                                      variant: "ghost",
                                      size: "icon"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("i", { class: "i-lucide-chevron-right h-4 w-4" })
                                      ]),
                                      _: 1
                                    })
                                  ]);
                                }), 128))
                              ])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "flex h-[200px] items-center justify-center"
                              }, [
                                createVNode("div", { class: "text-center" }, [
                                  createVNode("i", { class: "i-lucide-warehouse-off mb-2 h-10 w-10 text-muted-foreground" }),
                                  createVNode("p", { class: "text-sm text-muted-foreground" }, "Aucun dépôt")
                                ])
                              ]))
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$8), { class: "col-span-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$a), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Équipements Récents`);
                            } else {
                              return [
                                createTextVNode("Équipements Récents")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$c), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Derniers équipements ajoutés`);
                            } else {
                              return [
                                createTextVNode("Derniers équipements ajoutés")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><i class="i-lucide-box h-5 w-5 text-muted-foreground"${_scopeId3}></i>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$a), null, {
                              default: withCtx(() => [
                                createTextVNode("Équipements Récents")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$c), null, {
                              default: withCtx(() => [
                                createTextVNode("Derniers équipements ajoutés")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("i", { class: "i-lucide-box h-5 w-5 text-muted-foreground" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$b), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$1), { class: "h-[300px] pr-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a2, _b2;
                            if (_push5) {
                              if ((_a2 = __props.recentEquipment) == null ? void 0 : _a2.length) {
                                _push5(`<div class="space-y-4"${_scopeId4}><!--[-->`);
                                ssrRenderList(__props.recentEquipment, (equipment) => {
                                  var _a3;
                                  _push5(`<div class="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"${_scopeId4}><div class="space-y-1"${_scopeId4}><div class="font-medium"${_scopeId4}>${ssrInterpolate((equipment == null ? void 0 : equipment.name) ?? "Équipement sans nom")}</div><div class="flex items-center gap-1 text-sm text-muted-foreground"${_scopeId4}><i class="i-lucide-warehouse h-4 w-4"${_scopeId4}></i> ${ssrInterpolate(((_a3 = equipment == null ? void 0 : equipment.depot) == null ? void 0 : _a3.name) ?? "Dépôt inconnu")}</div></div>`);
                                  _push5(ssrRenderComponent(unref(_sfc_main$4), {
                                    variant: "ghost",
                                    size: "icon"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<i class="i-lucide-chevron-right h-4 w-4"${_scopeId5}></i>`);
                                      } else {
                                        return [
                                          createVNode("i", { class: "i-lucide-chevron-right h-4 w-4" })
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                });
                                _push5(`<!--]--></div>`);
                              } else {
                                _push5(`<div class="flex h-[200px] items-center justify-center"${_scopeId4}><div class="text-center"${_scopeId4}><i class="i-lucide-package-x mb-2 h-10 w-10 text-muted-foreground"${_scopeId4}></i><p class="text-sm text-muted-foreground"${_scopeId4}>Aucun équipement</p></div></div>`);
                              }
                            } else {
                              return [
                                ((_b2 = __props.recentEquipment) == null ? void 0 : _b2.length) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "space-y-4"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.recentEquipment, (equipment) => {
                                    var _a3;
                                    return openBlock(), createBlock("div", {
                                      key: equipment.id,
                                      class: "flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                                    }, [
                                      createVNode("div", { class: "space-y-1" }, [
                                        createVNode("div", { class: "font-medium" }, toDisplayString((equipment == null ? void 0 : equipment.name) ?? "Équipement sans nom"), 1),
                                        createVNode("div", { class: "flex items-center gap-1 text-sm text-muted-foreground" }, [
                                          createVNode("i", { class: "i-lucide-warehouse h-4 w-4" }),
                                          createTextVNode(" " + toDisplayString(((_a3 = equipment == null ? void 0 : equipment.depot) == null ? void 0 : _a3.name) ?? "Dépôt inconnu"), 1)
                                        ])
                                      ]),
                                      createVNode(unref(_sfc_main$4), {
                                        variant: "ghost",
                                        size: "icon"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("i", { class: "i-lucide-chevron-right h-4 w-4" })
                                        ]),
                                        _: 1
                                      })
                                    ]);
                                  }), 128))
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex h-[200px] items-center justify-center"
                                }, [
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("i", { class: "i-lucide-package-x mb-2 h-10 w-10 text-muted-foreground" }),
                                    createVNode("p", { class: "text-sm text-muted-foreground" }, "Aucun équipement")
                                  ])
                                ]))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$1), { class: "h-[300px] pr-4" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                ((_a2 = __props.recentEquipment) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "space-y-4"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.recentEquipment, (equipment) => {
                                    var _a3;
                                    return openBlock(), createBlock("div", {
                                      key: equipment.id,
                                      class: "flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                                    }, [
                                      createVNode("div", { class: "space-y-1" }, [
                                        createVNode("div", { class: "font-medium" }, toDisplayString((equipment == null ? void 0 : equipment.name) ?? "Équipement sans nom"), 1),
                                        createVNode("div", { class: "flex items-center gap-1 text-sm text-muted-foreground" }, [
                                          createVNode("i", { class: "i-lucide-warehouse h-4 w-4" }),
                                          createTextVNode(" " + toDisplayString(((_a3 = equipment == null ? void 0 : equipment.depot) == null ? void 0 : _a3.name) ?? "Dépôt inconnu"), 1)
                                        ])
                                      ]),
                                      createVNode(unref(_sfc_main$4), {
                                        variant: "ghost",
                                        size: "icon"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("i", { class: "i-lucide-chevron-right h-4 w-4" })
                                        ]),
                                        _: 1
                                      })
                                    ]);
                                  }), 128))
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex h-[200px] items-center justify-center"
                                }, [
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("i", { class: "i-lucide-package-x mb-2 h-10 w-10 text-muted-foreground" }),
                                    createVNode("p", { class: "text-sm text-muted-foreground" }, "Aucun équipement")
                                  ])
                                ]))
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode(unref(_sfc_main$a), null, {
                            default: withCtx(() => [
                              createTextVNode("Équipements Récents")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$c), null, {
                            default: withCtx(() => [
                              createTextVNode("Derniers équipements ajoutés")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("i", { class: "i-lucide-box h-5 w-5 text-muted-foreground" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$b), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1), { class: "h-[300px] pr-4" }, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              ((_a2 = __props.recentEquipment) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "space-y-4"
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.recentEquipment, (equipment) => {
                                  var _a3;
                                  return openBlock(), createBlock("div", {
                                    key: equipment.id,
                                    class: "flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                                  }, [
                                    createVNode("div", { class: "space-y-1" }, [
                                      createVNode("div", { class: "font-medium" }, toDisplayString((equipment == null ? void 0 : equipment.name) ?? "Équipement sans nom"), 1),
                                      createVNode("div", { class: "flex items-center gap-1 text-sm text-muted-foreground" }, [
                                        createVNode("i", { class: "i-lucide-warehouse h-4 w-4" }),
                                        createTextVNode(" " + toDisplayString(((_a3 = equipment == null ? void 0 : equipment.depot) == null ? void 0 : _a3.name) ?? "Dépôt inconnu"), 1)
                                      ])
                                    ]),
                                    createVNode(unref(_sfc_main$4), {
                                      variant: "ghost",
                                      size: "icon"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("i", { class: "i-lucide-chevron-right h-4 w-4" })
                                      ]),
                                      _: 1
                                    })
                                  ]);
                                }), 128))
                              ])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "flex h-[200px] items-center justify-center"
                              }, [
                                createVNode("div", { class: "text-center" }, [
                                  createVNode("i", { class: "i-lucide-package-x mb-2 h-10 w-10 text-muted-foreground" }),
                                  createVNode("p", { class: "text-sm text-muted-foreground" }, "Aucun équipement")
                                ])
                              ]))
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Tableau de bord" }),
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 py-8" }, [
                createVNode("div", { class: "flex flex-wrap gap-4" }, [
                  createVNode(unref(_sfc_main$4), {
                    asChild: "",
                    variant: "default",
                    class: "group"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Link), {
                        href: _ctx.route("app.organizations.equipments.create"),
                        class: "flex items-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(PlusCircle), { class: "i-lucide-plus-circle mr-2 h-4 w-4 transition-transform group-hover:scale-125" }),
                          createTextVNode(" Ajouter du matériel ")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$4), {
                    asChild: "",
                    variant: "outline",
                    class: "group"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Link), {
                        href: _ctx.route("app.organizations.settings.edit"),
                        class: "flex items-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Settings), { class: "i-lucide-settings mr-2 h-4 w-4 transition-transform group-hover:scale-125" }),
                          createTextVNode(" Gérer l'organisation ")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ]),
                    _: 1
                  })
                ]),
                __props.depotsWithInvalidAddress.length > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.depotsWithInvalidAddress, (depot) => {
                    return openBlock(), createBlock(unref(_sfc_main$5), {
                      class: "bg-yellow-500/10 border-yellow-500 text-yellow-900 dark:text-yellow-500",
                      key: depot.id
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6), null, {
                          default: withCtx(() => [
                            createTextVNode(" Votre lieu de stockage "),
                            createVNode("strong", null, '"' + toDisplayString(depot.name) + '"', 1),
                            createTextVNode(" a besoin d'une adresse valide ")
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            createTextVNode(" Les adresses permettent aux utilisateurs de trouver vos équipements par proximité géographique. "),
                            createVNode("span", { class: "block italic" }, " Note : Les adresses exactes ne sont jamais affichées publiquement, elles servent uniquement au calcul de distance. "),
                            createVNode(unref(_sfc_main$4), {
                              asChild: "",
                              size: "sm",
                              class: "mt-3"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Link), {
                                  href: _ctx.route("app.organizations.depots.edit", depot.id),
                                  class: "flex items-center"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Ajouter l'adresse ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" }, [
                  createVNode(unref(_sfc_main$8), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$a), { class: "text-sm font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode("Équipements")
                            ]),
                            _: 1
                          }),
                          createVNode("i", { class: "i-lucide-box h-4 w-4 text-muted-foreground" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$b), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(safeStats.equipment_count), 1),
                          createVNode("p", { class: "text-xs text-muted-foreground" }, " Total des équipements disponibles ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$8), { class: "border-blue-200" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$a), { class: "text-sm font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode("Emprunts")
                            ]),
                            _: 1
                          }),
                          createVNode("i", { class: "i-lucide-arrow-down-left h-4 w-4 text-blue-500" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$b), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-2xl font-bold text-blue-700" }, toDisplayString(safeStats.total_borrowed_count), 1),
                          createVNode("p", { class: "text-xs text-muted-foreground" }, " Total des emprunts effectués ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$8), { class: "border-orange-200" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$a), { class: "text-sm font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode("Prêts")
                            ]),
                            _: 1
                          }),
                          createVNode("i", { class: "i-lucide-arrow-up-right h-4 w-4 text-orange-500" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$b), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-2xl font-bold text-orange-700" }, toDisplayString(safeStats.total_lent_count), 1),
                          createVNode("p", { class: "text-xs text-muted-foreground" }, " Total des prêts effectués ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$8), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$a), { class: "text-sm font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode("Lieux de stockage")
                            ]),
                            _: 1
                          }),
                          createVNode("i", { class: "i-lucide-warehouse h-4 w-4 text-muted-foreground" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$b), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(safeStats.depots_count), 1),
                          createVNode("p", { class: "text-xs text-muted-foreground" }, " Nombre total de lieux de stockage ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 gap-6 md:grid-cols-2" }, [
                  createVNode(unref(_sfc_main$8), { class: "col-span-1 border-orange-200" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$a), null, {
                              default: withCtx(() => [
                                createTextVNode("Équipements prêtés")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$c), null, {
                              default: withCtx(() => [
                                createTextVNode("Équipements que vous prêtez actuellement")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("i", { class: "i-lucide-arrow-up-right h-5 w-5 text-orange-500" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$b), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$1), { class: "h-[300px] pr-4" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                ((_a2 = __props.lentReservations) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "space-y-6"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.lentReservations, (reservation) => {
                                    var _a3;
                                    return openBlock(), createBlock("div", {
                                      key: reservation.id,
                                      class: "flex flex-col space-y-2 rounded-lg border border-orange-200 p-4 transition-colors hover:bg-orange-50/50"
                                    }, [
                                      createVNode("div", { class: "flex items-center justify-between" }, [
                                        createVNode("div", { class: "font-medium" }, toDisplayString((_a3 = reservation.borrower_organization) == null ? void 0 : _a3.name), 1),
                                        createVNode(unref(_sfc_main$d), {
                                          class: reservation.status_color
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(reservation.status_label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])
                                      ]),
                                      createVNode("div", { class: "text-sm text-muted-foreground" }, toDisplayString(formatDateRange(reservation.start_date, reservation.end_date)), 1),
                                      createVNode("div", { class: "space-y-1" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(reservation.items, (item) => {
                                          var _a4;
                                          return openBlock(), createBlock("div", {
                                            key: item.id,
                                            class: "flex items-center justify-between text-sm"
                                          }, [
                                            createVNode("div", { class: "flex items-center gap-2" }, [
                                              createVNode(unref(_sfc_main$d), {
                                                variant: "outline",
                                                class: "shrink-0"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.quantity), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode("span", null, toDisplayString(((_a4 = item.equipment) == null ? void 0 : _a4.name) || "Équipement supprimé"), 1)
                                            ])
                                          ]);
                                        }), 128))
                                      ]),
                                      createVNode("div", { class: "mt-2 flex items-center justify-between border-t pt-2 text-sm" }, [
                                        createVNode("div", { class: "flex items-center gap-2 text-muted-foreground" }, [
                                          createVNode("i", { class: "i-lucide-wallet h-4 w-4" }),
                                          createVNode("span", null, toDisplayString(formatPrice(reservation.subtotal / 100)), 1),
                                          reservation.discount_amount ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "text-orange-600"
                                          }, " (-" + toDisplayString(formatPrice(reservation.discount_amount / 100)) + ") ", 1)) : createCommentVNode("", true)
                                        ]),
                                        createVNode("div", { class: "flex items-center gap-2 text-muted-foreground" }, [
                                          createVNode("i", { class: "i-lucide-shield h-4 w-4" }),
                                          createVNode("span", { class: "font-bold" }, "Total : " + toDisplayString(formatPrice(reservation.total / 100)), 1)
                                        ])
                                      ])
                                    ]);
                                  }), 128))
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex h-[200px] items-center justify-center"
                                }, [
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("i", { class: "i-lucide-package-x mb-2 h-10 w-10 text-muted-foreground" }),
                                    createVNode("p", { class: "text-sm text-muted-foreground" }, "Aucun équipement prêté")
                                  ])
                                ]))
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$8), { class: "col-span-1 border-blue-200" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$a), null, {
                              default: withCtx(() => [
                                createTextVNode("Équipements empruntés")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$c), null, {
                              default: withCtx(() => [
                                createTextVNode("Équipements que vous empruntez actuellement")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("i", { class: "i-lucide-arrow-down-left h-5 w-5 text-blue-500" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$b), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$1), { class: "h-[300px] pr-4" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                ((_a2 = __props.borrowedReservations) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "space-y-6"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.borrowedReservations, (reservation) => {
                                    var _a3;
                                    return openBlock(), createBlock("div", {
                                      key: reservation.id,
                                      class: "flex flex-col space-y-2 rounded-lg border border-blue-200 p-4 transition-colors hover:bg-blue-50/50"
                                    }, [
                                      createVNode("div", { class: "flex items-center justify-between" }, [
                                        createVNode("div", { class: "font-medium" }, toDisplayString((_a3 = reservation.lender_organization) == null ? void 0 : _a3.name), 1),
                                        createVNode(unref(_sfc_main$d), {
                                          class: reservation.status_color
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(reservation.status_label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])
                                      ]),
                                      createVNode("div", { class: "text-sm text-muted-foreground" }, toDisplayString(formatDateRange(reservation.start_date, reservation.end_date)), 1),
                                      createVNode("div", { class: "space-y-1" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(reservation.items, (item) => {
                                          var _a4;
                                          return openBlock(), createBlock("div", {
                                            key: item.id,
                                            class: "flex items-center justify-between text-sm"
                                          }, [
                                            createVNode("div", { class: "flex items-center gap-2" }, [
                                              createVNode(unref(_sfc_main$d), {
                                                variant: "outline",
                                                class: "shrink-0"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.quantity), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode("span", null, toDisplayString(((_a4 = item.equipment) == null ? void 0 : _a4.name) || "Équipement supprimé"), 1)
                                            ])
                                          ]);
                                        }), 128))
                                      ]),
                                      createVNode("div", { class: "mt-2 flex items-center justify-between border-t pt-2 text-sm" }, [
                                        createVNode("div", { class: "flex items-center gap-2 text-muted-foreground" }, [
                                          createVNode("i", { class: "i-lucide-wallet h-4 w-4" }),
                                          createVNode("span", null, toDisplayString(formatPrice(reservation.subtotal / 100)), 1),
                                          reservation.discount_amount ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "text-blue-600"
                                          }, " (-" + toDisplayString(formatPrice(reservation.discount_amount / 100)) + ") ", 1)) : createCommentVNode("", true)
                                        ]),
                                        createVNode("div", { class: "flex items-center gap-2 text-muted-foreground" }, [
                                          createVNode("i", { class: "i-lucide-shield h-4 w-4" }),
                                          createVNode("span", { class: "font-bold" }, "Total : " + toDisplayString(formatPrice(reservation.total / 100)), 1)
                                        ])
                                      ])
                                    ]);
                                  }), 128))
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex h-[200px] items-center justify-center"
                                }, [
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("i", { class: "i-lucide-package-x mb-2 h-10 w-10 text-muted-foreground" }),
                                    createVNode("p", { class: "text-sm text-muted-foreground" }, "Aucun équipement emprunté")
                                  ])
                                ]))
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$8), { class: "col-span-1" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$a), null, {
                              default: withCtx(() => [
                                createTextVNode("Lieux de stockage")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$c), null, {
                              default: withCtx(() => [
                                createTextVNode("Vue d'ensemble des lieux de stockage")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("i", { class: "i-lucide-warehouse h-5 w-5 text-muted-foreground" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$b), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$1), { class: "h-[300px] pr-4" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                ((_a2 = __props.depots) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "space-y-4"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.depots, (depot) => {
                                    return openBlock(), createBlock("div", {
                                      key: depot.id,
                                      class: "flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                                    }, [
                                      createVNode("div", { class: "space-y-1" }, [
                                        createVNode("div", { class: "font-medium" }, toDisplayString((depot == null ? void 0 : depot.name) ?? "Dépôt sans nom"), 1),
                                        createVNode("div", { class: "flex items-center gap-4 text-sm text-muted-foreground" }, [
                                          createVNode("span", { class: "flex items-center gap-1" }, [
                                            createVNode("i", { class: "i-lucide-box h-4 w-4" }),
                                            createTextVNode(" " + toDisplayString((depot == null ? void 0 : depot.equipments_count) ?? 0) + " " + toDisplayString((depot == null ? void 0 : depot.equipments_count) ?? 0 > 1 ? "équipements" : "équipement"), 1)
                                          ])
                                        ])
                                      ]),
                                      createVNode(unref(_sfc_main$4), {
                                        variant: "ghost",
                                        size: "icon"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("i", { class: "i-lucide-chevron-right h-4 w-4" })
                                        ]),
                                        _: 1
                                      })
                                    ]);
                                  }), 128))
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex h-[200px] items-center justify-center"
                                }, [
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("i", { class: "i-lucide-warehouse-off mb-2 h-10 w-10 text-muted-foreground" }),
                                    createVNode("p", { class: "text-sm text-muted-foreground" }, "Aucun dépôt")
                                  ])
                                ]))
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$8), { class: "col-span-1" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$9), { class: "flex flex-row items-center justify-between space-y-0" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$a), null, {
                              default: withCtx(() => [
                                createTextVNode("Équipements Récents")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$c), null, {
                              default: withCtx(() => [
                                createTextVNode("Derniers équipements ajoutés")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("i", { class: "i-lucide-box h-5 w-5 text-muted-foreground" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$b), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$1), { class: "h-[300px] pr-4" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                ((_a2 = __props.recentEquipment) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "space-y-4"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.recentEquipment, (equipment) => {
                                    var _a3;
                                    return openBlock(), createBlock("div", {
                                      key: equipment.id,
                                      class: "flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                                    }, [
                                      createVNode("div", { class: "space-y-1" }, [
                                        createVNode("div", { class: "font-medium" }, toDisplayString((equipment == null ? void 0 : equipment.name) ?? "Équipement sans nom"), 1),
                                        createVNode("div", { class: "flex items-center gap-1 text-sm text-muted-foreground" }, [
                                          createVNode("i", { class: "i-lucide-warehouse h-4 w-4" }),
                                          createTextVNode(" " + toDisplayString(((_a3 = equipment == null ? void 0 : equipment.depot) == null ? void 0 : _a3.name) ?? "Dépôt inconnu"), 1)
                                        ])
                                      ]),
                                      createVNode(unref(_sfc_main$4), {
                                        variant: "ghost",
                                        size: "icon"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("i", { class: "i-lucide-chevron-right h-4 w-4" })
                                        ]),
                                        _: 1
                                      })
                                    ]);
                                  }), 128))
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex h-[200px] items-center justify-center"
                                }, [
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("i", { class: "i-lucide-package-x mb-2 h-10 w-10 text-muted-foreground" }),
                                    createVNode("p", { class: "text-sm text-muted-foreground" }, "Aucun équipement")
                                  ])
                                ]))
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
