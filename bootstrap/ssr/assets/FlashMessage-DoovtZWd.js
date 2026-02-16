import { computed, unref, mergeProps, withCtx, createVNode, resolveDynamicComponent, createBlock, createCommentVNode, renderSlot, openBlock, useSSRContext, ref, createTextVNode, toDisplayString, Fragment, TransitionGroup, renderList, watch } from "vue";
import { ssrRenderComponent, ssrRenderVNode, ssrRenderSlot, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { Link, usePage, router } from "@inertiajs/vue3";
import { _ as _sfc_main$6, a as _sfc_main$7, b as _sfc_main$a, i as _sfc_main$b, d as _sfc_main$c, j as _sfc_main$d, e as _sfc_main$e, f as _sfc_main$f, g as _sfc_main$g, h as _sfc_main$i, k as _sfc_main$j } from "./UserDropdown-C5kfPJJO.js";
import { Truck, PackageIcon, Trash, CalendarIcon, Loader2, Search, LayoutDashboard, CalendarDays, Clock, Box, Plus, Menu, X, User, Settings, LogOut, CheckCircle, XCircle, Info } from "lucide-vue-next";
import { _ as _sfc_main$8 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$9 } from "./index-9VOASAGY.js";
import { toast } from "vue-sonner";
import { _ as _sfc_main$h } from "./Input-BNuRmWJk.js";
const _sfc_main$5 = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    icon: {
      type: [Object, Function],
      default: null
    },
    external: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "sm",
      validator: (value) => ["sm", "md", "lg"].includes(value)
    }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => ({
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    })[props.size]);
    return (_ctx, _push, _parent, _attrs) => {
      if (!__props.external) {
        _push(ssrRenderComponent(unref(Link), mergeProps({
          href: __props.href,
          class: ["group inline-flex items-center gap-2 px-1 pt-1 font-medium leading-5 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500", [
            classes.value,
            __props.active ? "opacity-100" : "opacity-70 hover:opacity-100"
          ]]
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.icon) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.icon), {
                  class: ["size-4", __props.active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"]
                }, null), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                __props.icon ? (openBlock(), createBlock(resolveDynamicComponent(__props.icon), {
                  key: 0,
                  class: ["size-4", __props.active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"]
                }, null, 8, ["class"])) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: __props.href,
          target: "_blank",
          rel: "noopener noreferrer",
          class: ["group inline-flex items-center gap-2 px-1 pt-1 font-medium leading-5 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500", [
            classes.value,
            __props.active ? "opacity-100" : "opacity-70 hover:opacity-100"
          ]]
        }, _attrs))}>`);
        if (__props.icon) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.icon), {
            class: ["size-4", __props.active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"]
          }, null), _parent);
        } else {
          _push(`<!---->`);
        }
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      }
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/NavLink.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$4 = {
  __name: "CartMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const items = computed(() => usePage().props.cart);
    const isRemoving = ref(false);
    const isClearing = ref(false);
    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      });
    };
    const formatPrice = (price) => {
      return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2
      }).format(price || 0);
    };
    const totalItems = computed(() => {
      var _a;
      return ((_a = items.value) == null ? void 0 : _a.reduce((total, item) => total + item.quantity, 0)) ?? 0;
    });
    const totalPrice = computed(() => {
      var _a;
      return ((_a = items.value) == null ? void 0 : _a.reduce((total, item) => total + item.total_price, 0)) ?? 0;
    });
    const removeItem = (item) => {
      if (!confirm("Êtes-vous sûr de vouloir retirer cet article du camion ?")) return;
      isRemoving.value = true;
      router.delete(route("carts.remove", item.equipment.id), {
        data: {
          rental_start: item.rental_start,
          rental_end: item.rental_end
        },
        preserveScroll: true,
        only: ["cart"],
        onSuccess: () => {
          toast.success("Article retiré du camion", {
            description: "L'article a été retiré de votre camion avec succès."
          });
        },
        onError: () => {
          toast.error("Erreur de suppression", {
            description: "Une erreur s'est produite lors de la suppression de l'article."
          });
        },
        onFinish: () => {
          isRemoving.value = false;
        }
      });
    };
    const clearCart = () => {
      isClearing.value = true;
      router.delete(route("carts.clear"), {
        preserveScroll: true,
        onSuccess: () => {
          toast.success("Camion vidé", {
            description: "Votre camion a été vidé avec succès."
          });
        },
        onError: () => {
          toast.error("Erreur", {
            description: "Une erreur s'est produite lors du vidage du camion."
          });
        },
        onFinish: () => {
          isClearing.value = false;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$6), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$7), { asChild: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$8), {
                    variant: "ghost",
                    size: "icon",
                    class: "relative hover:bg-primary/10 transition-colors"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Truck), { class: "size-5" }, null, _parent4, _scopeId3));
                        if (totalItems.value > 0) {
                          _push4(ssrRenderComponent(unref(_sfc_main$9), {
                            variant: "primary",
                            class: "absolute -top-2 -right-2 min-w-[20px] h-5 animate-in fade-in slide-in-from-top-2"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(totalItems.value)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(totalItems.value), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(unref(Truck), { class: "size-5" }),
                          totalItems.value > 0 ? (openBlock(), createBlock(unref(_sfc_main$9), {
                            key: 0,
                            variant: "primary",
                            class: "absolute -top-2 -right-2 min-w-[20px] h-5 animate-in fade-in slide-in-from-top-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(totalItems.value), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$8), {
                      variant: "ghost",
                      size: "icon",
                      class: "relative hover:bg-primary/10 transition-colors"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Truck), { class: "size-5" }),
                        totalItems.value > 0 ? (openBlock(), createBlock(unref(_sfc_main$9), {
                          key: 0,
                          variant: "primary",
                          class: "absolute -top-2 -right-2 min-w-[20px] h-5 animate-in fade-in slide-in-from-top-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(totalItems.value), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$a), { class: "w-[350px] animate-in fade-in slide-in-from-top-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$b), { class: "flex items-center gap-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Truck), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                        _push4(`<span data-v-be9c18b0${_scopeId3}>Votre Camion</span>`);
                        if (totalItems.value > 0) {
                          _push4(ssrRenderComponent(unref(_sfc_main$9), {
                            variant: "secondary",
                            class: "ml-auto"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(totalItems.value)} article${ssrInterpolate(totalItems.value > 1 ? "s" : "")}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(totalItems.value) + " article" + toDisplayString(totalItems.value > 1 ? "s" : ""), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(unref(Truck), { class: "h-4 w-4" }),
                          createVNode("span", null, "Votre Camion"),
                          totalItems.value > 0 ? (openBlock(), createBlock(unref(_sfc_main$9), {
                            key: 0,
                            variant: "secondary",
                            class: "ml-auto"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(totalItems.value) + " article" + toDisplayString(totalItems.value > 1 ? "s" : ""), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$c), null, null, _parent3, _scopeId2));
                  if (items.value.length === 0) {
                    _push3(`<div class="p-6 flex flex-col items-center justify-center text-center space-y-4" data-v-be9c18b0${_scopeId2}><div class="relative" data-v-be9c18b0${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(PackageIcon), { class: "h-16 w-16 text-muted-foreground/30 animate-bounce" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(Truck), { class: "h-8 w-8 text-primary absolute -bottom-2 -right-2" }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="space-y-2" data-v-be9c18b0${_scopeId2}><p class="font-medium text-lg" data-v-be9c18b0${_scopeId2}>Votre camion est vide</p><p class="text-sm text-muted-foreground/70" data-v-be9c18b0${_scopeId2}>Ajoutez des équipements à votre camion pour commencer.</p></div>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$8), {
                      asChild: "",
                      variant: "outline",
                      class: "w-full hover:bg-primary/10 transition-colors"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Link), {
                            href: _ctx.route("carts.show")
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Voir le camion `);
                              } else {
                                return [
                                  createTextVNode(" Voir le camion ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Link), {
                              href: _ctx.route("carts.show")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Voir le camion ")
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!--[--><div class="max-h-[300px] overflow-y-auto py-1" data-v-be9c18b0${_scopeId2}><div${ssrRenderAttrs({
                      name: "list",
                      class: "divide-y divide-border"
                    })} data-v-be9c18b0>`);
                    ssrRenderList(items.value, (item, index) => {
                      _push3(`<div class="group px-3 py-3 hover:bg-muted/50 transition-colors" data-v-be9c18b0${_scopeId2}><div class="flex items-center gap-3" data-v-be9c18b0${_scopeId2}><div class="flex-1 min-w-0" data-v-be9c18b0${_scopeId2}><div class="flex items-center justify-between" data-v-be9c18b0${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(Link), {
                        href: _ctx.route("equipments.show", item.equipment.id),
                        class: "text-sm font-medium hover:text-primary-600 truncate block transition-colors"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.equipment.name)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.equipment.name), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(_sfc_main$d), null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(_sfc_main$e), null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(_sfc_main$f), { asChild: "" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(unref(_sfc_main$8), {
                                          variant: "ghost",
                                          size: "icon",
                                          class: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity -mr-1",
                                          onClick: ($event) => removeItem(item),
                                          disabled: isRemoving.value,
                                          "aria-label": `Retirer ${item.equipment.name}`
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(unref(Trash), { class: "h-4 w-4 text-destructive" }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(unref(Trash), { class: "h-4 w-4 text-destructive" })
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(unref(_sfc_main$8), {
                                            variant: "ghost",
                                            size: "icon",
                                            class: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity -mr-1",
                                            onClick: ($event) => removeItem(item),
                                            disabled: isRemoving.value,
                                            "aria-label": `Retirer ${item.equipment.name}`
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Trash), { class: "h-4 w-4 text-destructive" })
                                            ]),
                                            _: 1
                                          }, 8, ["onClick", "disabled", "aria-label"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(unref(_sfc_main$g), null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<p data-v-be9c18b0${_scopeId5}>Retirer du camion</p>`);
                                      } else {
                                        return [
                                          createVNode("p", null, "Retirer du camion")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(_sfc_main$f), { asChild: "" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$8), {
                                          variant: "ghost",
                                          size: "icon",
                                          class: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity -mr-1",
                                          onClick: ($event) => removeItem(item),
                                          disabled: isRemoving.value,
                                          "aria-label": `Retirer ${item.equipment.name}`
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Trash), { class: "h-4 w-4 text-destructive" })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick", "disabled", "aria-label"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(unref(_sfc_main$g), null, {
                                      default: withCtx(() => [
                                        createVNode("p", null, "Retirer du camion")
                                      ]),
                                      _: 1
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(_sfc_main$e), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$f), { asChild: "" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$8), {
                                        variant: "ghost",
                                        size: "icon",
                                        class: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity -mr-1",
                                        onClick: ($event) => removeItem(item),
                                        disabled: isRemoving.value,
                                        "aria-label": `Retirer ${item.equipment.name}`
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Trash), { class: "h-4 w-4 text-destructive" })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick", "disabled", "aria-label"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$g), null, {
                                    default: withCtx(() => [
                                      createVNode("p", null, "Retirer du camion")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div><div class="flex items-center gap-2 mt-1.5" data-v-be9c18b0${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(CalendarIcon), { class: "h-3 w-3 text-muted-foreground/70" }, null, _parent3, _scopeId2));
                      _push3(`<p class="text-xs text-muted-foreground" data-v-be9c18b0${_scopeId2}>`);
                      if (item.rental_start && item.rental_end) {
                        _push3(`<span data-v-be9c18b0${_scopeId2}>${ssrInterpolate(formatDate(item.rental_start))} - ${ssrInterpolate(formatDate(item.rental_end))} (${ssrInterpolate(item.days)} jours) </span>`);
                      } else {
                        _push3(`<span class="text-yellow-600 font-medium" data-v-be9c18b0${_scopeId2}>Dates non définies</span>`);
                      }
                      _push3(`</p></div><div class="flex items-center justify-between mt-1.5" data-v-be9c18b0${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(_sfc_main$9), {
                        variant: "secondary",
                        class: "text-xs"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Qté : ${ssrInterpolate(item.quantity)}`);
                          } else {
                            return [
                              createTextVNode(" Qté : " + toDisplayString(item.quantity), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<div class="text-xs font-medium" data-v-be9c18b0${_scopeId2}><p class="text-muted-foreground/70" data-v-be9c18b0${_scopeId2}>${ssrInterpolate(formatPrice(item.equipment.rental_price))} × ${ssrInterpolate(item.quantity)} × ${ssrInterpolate(item.days)}j </p><p class="text-right font-semibold" data-v-be9c18b0${_scopeId2}>${ssrInterpolate(formatPrice(item.total_price))}</p></div></div></div></div></div>`);
                    });
                    _push3(`</div></div><div class="border-t" data-v-be9c18b0${_scopeId2}><div class="px-3 py-2 space-y-1.5 bg-muted/50" data-v-be9c18b0${_scopeId2}><div class="flex justify-between items-center text-sm" data-v-be9c18b0${_scopeId2}><span class="text-muted-foreground" data-v-be9c18b0${_scopeId2}>Sous-total</span><span class="font-medium" data-v-be9c18b0${_scopeId2}>${ssrInterpolate(formatPrice(totalPrice.value))}</span></div></div><div class="p-3 pt-2 space-y-2" data-v-be9c18b0${_scopeId2}><div class="flex gap-2" data-v-be9c18b0${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$8), {
                      asChild: "",
                      class: "flex-1 h-9"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Link), {
                            href: _ctx.route("carts.show")
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Ouvrir le camion `);
                              } else {
                                return [
                                  createTextVNode(" Ouvrir le camion ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Link), {
                              href: _ctx.route("carts.show")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Ouvrir le camion ")
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$8), {
                      variant: "outline",
                      class: "h-9",
                      onClick: clearCart,
                      disabled: isClearing.value
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (isClearing.value) {
                            _push4(ssrRenderComponent(unref(Loader2), { class: "h-4 w-4 animate-spin" }, null, _parent4, _scopeId3));
                          } else {
                            _push4(ssrRenderComponent(unref(Trash), { class: "h-4 w-4 text-destructive" }, null, _parent4, _scopeId3));
                          }
                        } else {
                          return [
                            isClearing.value ? (openBlock(), createBlock(unref(Loader2), {
                              key: 0,
                              class: "h-4 w-4 animate-spin"
                            })) : (openBlock(), createBlock(unref(Trash), {
                              key: 1,
                              class: "h-4 w-4 text-destructive"
                            }))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div></div><!--]-->`);
                  }
                } else {
                  return [
                    createVNode(unref(_sfc_main$b), { class: "flex items-center gap-2" }, {
                      default: withCtx(() => [
                        createVNode(unref(Truck), { class: "h-4 w-4" }),
                        createVNode("span", null, "Votre Camion"),
                        totalItems.value > 0 ? (openBlock(), createBlock(unref(_sfc_main$9), {
                          key: 0,
                          variant: "secondary",
                          class: "ml-auto"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(totalItems.value) + " article" + toDisplayString(totalItems.value > 1 ? "s" : ""), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$c)),
                    items.value.length === 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "p-6 flex flex-col items-center justify-center text-center space-y-4"
                    }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(unref(PackageIcon), { class: "h-16 w-16 text-muted-foreground/30 animate-bounce" }),
                        createVNode(unref(Truck), { class: "h-8 w-8 text-primary absolute -bottom-2 -right-2" })
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("p", { class: "font-medium text-lg" }, "Votre camion est vide"),
                        createVNode("p", { class: "text-sm text-muted-foreground/70" }, "Ajoutez des équipements à votre camion pour commencer.")
                      ]),
                      createVNode(unref(_sfc_main$8), {
                        asChild: "",
                        variant: "outline",
                        class: "w-full hover:bg-primary/10 transition-colors"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Link), {
                            href: _ctx.route("carts.show")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Voir le camion ")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 1
                      })
                    ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode("div", { class: "max-h-[300px] overflow-y-auto py-1" }, [
                        createVNode(TransitionGroup, {
                          name: "list",
                          tag: "div",
                          class: "divide-y divide-border"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                              return openBlock(), createBlock("div", {
                                key: index,
                                class: "group px-3 py-3 hover:bg-muted/50 transition-colors"
                              }, [
                                createVNode("div", { class: "flex items-center gap-3" }, [
                                  createVNode("div", { class: "flex-1 min-w-0" }, [
                                    createVNode("div", { class: "flex items-center justify-between" }, [
                                      createVNode(unref(Link), {
                                        href: _ctx.route("equipments.show", item.equipment.id),
                                        class: "text-sm font-medium hover:text-primary-600 truncate block transition-colors"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.equipment.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["href"]),
                                      createVNode(unref(_sfc_main$d), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$e), null, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$f), { asChild: "" }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(_sfc_main$8), {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    class: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity -mr-1",
                                                    onClick: ($event) => removeItem(item),
                                                    disabled: isRemoving.value,
                                                    "aria-label": `Retirer ${item.equipment.name}`
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(Trash), { class: "h-4 w-4 text-destructive" })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick", "disabled", "aria-label"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$g), null, {
                                                default: withCtx(() => [
                                                  createVNode("p", null, "Retirer du camion")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    createVNode("div", { class: "flex items-center gap-2 mt-1.5" }, [
                                      createVNode(unref(CalendarIcon), { class: "h-3 w-3 text-muted-foreground/70" }),
                                      createVNode("p", { class: "text-xs text-muted-foreground" }, [
                                        item.rental_start && item.rental_end ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(formatDate(item.rental_start)) + " - " + toDisplayString(formatDate(item.rental_end)) + " (" + toDisplayString(item.days) + " jours) ", 1)) : (openBlock(), createBlock("span", {
                                          key: 1,
                                          class: "text-yellow-600 font-medium"
                                        }, "Dates non définies"))
                                      ])
                                    ]),
                                    createVNode("div", { class: "flex items-center justify-between mt-1.5" }, [
                                      createVNode(unref(_sfc_main$9), {
                                        variant: "secondary",
                                        class: "text-xs"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Qté : " + toDisplayString(item.quantity), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("div", { class: "text-xs font-medium" }, [
                                        createVNode("p", { class: "text-muted-foreground/70" }, toDisplayString(formatPrice(item.equipment.rental_price)) + " × " + toDisplayString(item.quantity) + " × " + toDisplayString(item.days) + "j ", 1),
                                        createVNode("p", { class: "text-right font-semibold" }, toDisplayString(formatPrice(item.total_price)), 1)
                                      ])
                                    ])
                                  ])
                                ])
                              ]);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "border-t" }, [
                        createVNode("div", { class: "px-3 py-2 space-y-1.5 bg-muted/50" }, [
                          createVNode("div", { class: "flex justify-between items-center text-sm" }, [
                            createVNode("span", { class: "text-muted-foreground" }, "Sous-total"),
                            createVNode("span", { class: "font-medium" }, toDisplayString(formatPrice(totalPrice.value)), 1)
                          ])
                        ]),
                        createVNode("div", { class: "p-3 pt-2 space-y-2" }, [
                          createVNode("div", { class: "flex gap-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              asChild: "",
                              class: "flex-1 h-9"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Link), {
                                  href: _ctx.route("carts.show")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Ouvrir le camion ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$8), {
                              variant: "outline",
                              class: "h-9",
                              onClick: clearCart,
                              disabled: isClearing.value
                            }, {
                              default: withCtx(() => [
                                isClearing.value ? (openBlock(), createBlock(unref(Loader2), {
                                  key: 0,
                                  class: "h-4 w-4 animate-spin"
                                })) : (openBlock(), createBlock(unref(Trash), {
                                  key: 1,
                                  class: "h-4 w-4 text-destructive"
                                }))
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ])
                        ])
                      ])
                    ], 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$7), { asChild: "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$8), {
                    variant: "ghost",
                    size: "icon",
                    class: "relative hover:bg-primary/10 transition-colors"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Truck), { class: "size-5" }),
                      totalItems.value > 0 ? (openBlock(), createBlock(unref(_sfc_main$9), {
                        key: 0,
                        variant: "primary",
                        class: "absolute -top-2 -right-2 min-w-[20px] h-5 animate-in fade-in slide-in-from-top-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(totalItems.value), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$a), { class: "w-[350px] animate-in fade-in slide-in-from-top-2" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$b), { class: "flex items-center gap-2" }, {
                    default: withCtx(() => [
                      createVNode(unref(Truck), { class: "h-4 w-4" }),
                      createVNode("span", null, "Votre Camion"),
                      totalItems.value > 0 ? (openBlock(), createBlock(unref(_sfc_main$9), {
                        key: 0,
                        variant: "secondary",
                        class: "ml-auto"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(totalItems.value) + " article" + toDisplayString(totalItems.value > 1 ? "s" : ""), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$c)),
                  items.value.length === 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "p-6 flex flex-col items-center justify-center text-center space-y-4"
                  }, [
                    createVNode("div", { class: "relative" }, [
                      createVNode(unref(PackageIcon), { class: "h-16 w-16 text-muted-foreground/30 animate-bounce" }),
                      createVNode(unref(Truck), { class: "h-8 w-8 text-primary absolute -bottom-2 -right-2" })
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("p", { class: "font-medium text-lg" }, "Votre camion est vide"),
                      createVNode("p", { class: "text-sm text-muted-foreground/70" }, "Ajoutez des équipements à votre camion pour commencer.")
                    ]),
                    createVNode(unref(_sfc_main$8), {
                      asChild: "",
                      variant: "outline",
                      class: "w-full hover:bg-primary/10 transition-colors"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Link), {
                          href: _ctx.route("carts.show")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Voir le camion ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      _: 1
                    })
                  ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode("div", { class: "max-h-[300px] overflow-y-auto py-1" }, [
                      createVNode(TransitionGroup, {
                        name: "list",
                        tag: "div",
                        class: "divide-y divide-border"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                            return openBlock(), createBlock("div", {
                              key: index,
                              class: "group px-3 py-3 hover:bg-muted/50 transition-colors"
                            }, [
                              createVNode("div", { class: "flex items-center gap-3" }, [
                                createVNode("div", { class: "flex-1 min-w-0" }, [
                                  createVNode("div", { class: "flex items-center justify-between" }, [
                                    createVNode(unref(Link), {
                                      href: _ctx.route("equipments.show", item.equipment.id),
                                      class: "text-sm font-medium hover:text-primary-600 truncate block transition-colors"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.equipment.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["href"]),
                                    createVNode(unref(_sfc_main$d), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$e), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$f), { asChild: "" }, {
                                              default: withCtx(() => [
                                                createVNode(unref(_sfc_main$8), {
                                                  variant: "ghost",
                                                  size: "icon",
                                                  class: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity -mr-1",
                                                  onClick: ($event) => removeItem(item),
                                                  disabled: isRemoving.value,
                                                  "aria-label": `Retirer ${item.equipment.name}`
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Trash), { class: "h-4 w-4 text-destructive" })
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick", "disabled", "aria-label"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$g), null, {
                                              default: withCtx(() => [
                                                createVNode("p", null, "Retirer du camion")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-2 mt-1.5" }, [
                                    createVNode(unref(CalendarIcon), { class: "h-3 w-3 text-muted-foreground/70" }),
                                    createVNode("p", { class: "text-xs text-muted-foreground" }, [
                                      item.rental_start && item.rental_end ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(formatDate(item.rental_start)) + " - " + toDisplayString(formatDate(item.rental_end)) + " (" + toDisplayString(item.days) + " jours) ", 1)) : (openBlock(), createBlock("span", {
                                        key: 1,
                                        class: "text-yellow-600 font-medium"
                                      }, "Dates non définies"))
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center justify-between mt-1.5" }, [
                                    createVNode(unref(_sfc_main$9), {
                                      variant: "secondary",
                                      class: "text-xs"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Qté : " + toDisplayString(item.quantity), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "text-xs font-medium" }, [
                                      createVNode("p", { class: "text-muted-foreground/70" }, toDisplayString(formatPrice(item.equipment.rental_price)) + " × " + toDisplayString(item.quantity) + " × " + toDisplayString(item.days) + "j ", 1),
                                      createVNode("p", { class: "text-right font-semibold" }, toDisplayString(formatPrice(item.total_price)), 1)
                                    ])
                                  ])
                                ])
                              ])
                            ]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "border-t" }, [
                      createVNode("div", { class: "px-3 py-2 space-y-1.5 bg-muted/50" }, [
                        createVNode("div", { class: "flex justify-between items-center text-sm" }, [
                          createVNode("span", { class: "text-muted-foreground" }, "Sous-total"),
                          createVNode("span", { class: "font-medium" }, toDisplayString(formatPrice(totalPrice.value)), 1)
                        ])
                      ]),
                      createVNode("div", { class: "p-3 pt-2 space-y-2" }, [
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(unref(_sfc_main$8), {
                            asChild: "",
                            class: "flex-1 h-9"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Link), {
                                href: _ctx.route("carts.show")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Ouvrir le camion ")
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$8), {
                            variant: "outline",
                            class: "h-9",
                            onClick: clearCart,
                            disabled: isClearing.value
                          }, {
                            default: withCtx(() => [
                              isClearing.value ? (openBlock(), createBlock(unref(Loader2), {
                                key: 0,
                                class: "h-4 w-4 animate-spin"
                              })) : (openBlock(), createBlock(unref(Trash), {
                                key: 1,
                                class: "h-4 w-4 text-destructive"
                              }))
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ])
                      ])
                    ])
                  ], 64))
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/CartMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CartMenu = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-be9c18b0"]]);
const _sfc_main$3 = {
  __name: "TopbarSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const search = ref("");
    const isFocused = ref(false);
    const handleSearch = () => {
      if (!search.value.trim()) return;
      router.get(route("home"), {
        search: search.value
      }, {
        preserveState: true,
        preserveScroll: true
      });
    };
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center" }, _attrs))} data-v-8bc4a9c5><div class="${ssrRenderClass([
        "flex items-center gap-2 transition-all duration-300 ease-in-out",
        isFocused.value ? "w-full" : "w-full"
      ])}" data-v-8bc4a9c5><div class="relative flex-1" data-v-8bc4a9c5>`);
      _push(ssrRenderComponent(unref(_sfc_main$h), {
        modelValue: search.value,
        "onUpdate:modelValue": ($event) => search.value = $event,
        placeholder: "Chercher du matériel...",
        class: "pr-10 rounded-full",
        onFocus: ($event) => isFocused.value = true,
        onBlur: ($event) => isFocused.value = false,
        onKeydown: handleKeyDown
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$8), {
        variant: "ghost",
        size: "icon",
        class: "absolute right-0 top-0",
        onClick: handleSearch
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Search), { class: "h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Search), { class: "h-4 w-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/TopbarSearch.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TopbarSearch = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-8bc4a9c5"]]);
const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const user = computed(() => page.props.auth.user);
    const isMobileMenuOpen = ref(false);
    const navigationItems = computed(() => [
      {
        name: "Tableau de bord",
        href: route("app.dashboard"),
        active: route().current("app.dashboard"),
        icon: LayoutDashboard,
        show: !!user.value
      },
      {
        name: "Réservations",
        href: route("app.organizations.reservations.in.index"),
        active: route().current("app.organizations.reservations.in.index"),
        icon: CalendarDays,
        show: !!user.value
      },
      {
        name: "Agenda",
        href: route("app.organizations.calendar"),
        active: route().current("app.organizations.calendar"),
        icon: Clock,
        show: !!user.value
      },
      {
        name: "Matériel",
        href: route("app.organizations.equipments.index"),
        active: route().current("app.organizations.equipments.index"),
        icon: Box,
        show: !!user.value
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "border-b border-gray-200 dark:border-gray-800" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between min-h-16"><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: "flex-shrink-0 flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="flex items-baseline"${_scopeId}><span class="text-3xl font-bold font-title bg-gradient-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent"${_scopeId}> asso </span><span class="text-3xl font-bold font-title bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent relative"${_scopeId}> cation <span class="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-violet-400 to-blue-600 rounded-full transform scale-x-100 transition-transform"${_scopeId}></span></span></h1>`);
          } else {
            return [
              createVNode("h1", { class: "flex items-baseline" }, [
                createVNode("span", { class: "text-3xl font-bold font-title bg-gradient-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent" }, " asso "),
                createVNode("span", { class: "text-3xl font-bold font-title bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent relative" }, [
                  createTextVNode(" cation "),
                  createVNode("span", { class: "absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-violet-400 to-blue-600 rounded-full transform scale-x-100 transition-transform" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:ml-6 md:flex md:space-x-4">`);
      if (!user.value) {
        _push(ssrRenderComponent(unref(_sfc_main$8), {
          asChild: "",
          size: "sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("app.organizations.equipments.create"),
                class: "gap-2 flex items-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Plus), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                    _push3(` Ajouter votre matériel `);
                  } else {
                    return [
                      createVNode(unref(Plus), { class: "h-4 w-4" }),
                      createTextVNode(" Ajouter votre matériel ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Link), {
                  href: _ctx.route("app.organizations.equipments.create"),
                  class: "gap-2 flex items-center"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Plus), { class: "h-4 w-4" }),
                    createTextVNode(" Ajouter votre matériel ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(navigationItems.value, (item) => {
        _push(`<div class="flex items-center gap-2" style="${ssrRenderStyle(item.show ? null : { display: "none" })}">`);
        _push(ssrRenderComponent(_sfc_main$5, {
          href: item.href,
          active: item.active,
          icon: item.icon
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        if (item.name === "Matériel") {
          _push(ssrRenderComponent(unref(_sfc_main$8), {
            asChild: "",
            size: "sm",
            variant: "secondary",
            class: "h-8 w-8 p-0 rounded-full",
            title: "Ajouter votre matériel"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("app.organizations.equipments.create")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(Plus), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(Plus), { class: "h-4 w-4" })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(Link), {
                    href: _ctx.route("app.organizations.equipments.create")
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Plus), { class: "h-4 w-4" })
                    ]),
                    _: 1
                  }, 8, ["href"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="hidden md:flex md:items-center md:space-x-4">`);
      if (user.value && !_ctx.route().current("home")) {
        _push(ssrRenderComponent(TopbarSearch, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (user.value) {
        _push(ssrRenderComponent(_sfc_main$i, null, null, _parent));
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_sfc_main$5, {
          href: _ctx.route("login"),
          size: "sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Connexion `);
            } else {
              return [
                createTextVNode(" Connexion ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(_sfc_main$8), {
          asChild: "",
          variant: "default",
          size: "sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("register")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Inscription `);
                  } else {
                    return [
                      createTextVNode(" Inscription ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Link), {
                  href: _ctx.route("register")
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Inscription ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      }
      _push(ssrRenderComponent(CartMenu, null, null, _parent));
      _push(`</div><div class="flex items-center space-x-2 md:hidden">`);
      _push(ssrRenderComponent(CartMenu, null, null, _parent));
      _push(`<button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"><span class="sr-only">${ssrInterpolate(isMobileMenuOpen.value ? "Fermer le menu" : "Ouvrir le menu")}</span>`);
      if (!isMobileMenuOpen.value) {
        _push(ssrRenderComponent(unref(Menu), { class: "h-6 w-6" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(X), { class: "h-6 w-6" }, null, _parent));
      }
      _push(`</button></div></div></div><div class="md:hidden border-t border-gray-200" style="${ssrRenderStyle(isMobileMenuOpen.value ? null : { display: "none" })}">`);
      if (user.value) {
        _push(`<div class="px-4 py-3 bg-gray-50"><div class="flex items-center"><div class="flex-shrink-0"><div class="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center"><span class="text-primary-700 font-medium">${ssrInterpolate(user.value.name.charAt(0).toUpperCase())}</span></div></div><div class="ml-3"><div class="text-base font-medium text-gray-800">${ssrInterpolate(user.value.name)}</div><div class="text-sm font-medium text-gray-500">${ssrInterpolate(user.value.email)}</div></div></div>`);
        if (user.value.current_organization) {
          _push(`<div class="mt-3 pt-3 border-t border-gray-200"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><div class="h-6 w-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-medium">${ssrInterpolate(user.value.current_organization.name.charAt(0).toUpperCase())}</div><span class="text-sm font-medium text-gray-800">${ssrInterpolate(user.value.current_organization.name)}</span></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="pt-2 pb-3 space-y-1">`);
      if (!user.value) {
        _push(ssrRenderComponent(unref(_sfc_main$8), {
          asChild: "",
          size: "sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("app.organizations.equipments.create")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Plus), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                    _push3(` Ajouter votre matériel `);
                  } else {
                    return [
                      createVNode(unref(Plus), { class: "h-4 w-4" }),
                      createTextVNode(" Ajouter votre matériel ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Link), {
                  href: _ctx.route("app.organizations.equipments.create")
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Plus), { class: "h-4 w-4" }),
                    createTextVNode(" Ajouter votre matériel ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(navigationItems.value, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="${ssrRenderClass([[
          item.active ? "text-primary-700 bg-primary-50" : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
        ], "flex items-center gap-2 px-4 py-2 text-base font-medium transition duration-150 ease-in-out"])}" style="${ssrRenderStyle(item.show ? null : { display: "none" })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), { class: "h-5 w-5" }, null), _parent);
        _push(` ${ssrInterpolate(item.name)}</a>`);
      });
      _push(`<!--]--></div>`);
      if (user.value && user.value.organizations) {
        _push(`<div class="pt-4 pb-3 border-t border-gray-200"><div class="px-4 py-2"><h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider">${ssrInterpolate(user.value.organizations.length > 1 ? "Changer d'organisation" : "Organisation")}</h3></div>`);
        _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="pt-4 pb-3 border-t border-gray-200"><div class="space-y-1">`);
      if (user.value) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("profile.edit"),
          class: "flex items-center gap-2 px-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(User), { class: "h-5 w-5" }, null, _parent2, _scopeId));
              _push2(` Mon profil `);
            } else {
              return [
                createVNode(unref(User), { class: "h-5 w-5" }),
                createTextVNode(" Mon profil ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("app.organizations.settings.edit"),
          class: "flex items-center gap-2 px-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Settings), { class: "h-5 w-5" }, null, _parent2, _scopeId));
              _push2(` Paramètres de l&#39;organisation `);
            } else {
              return [
                createVNode(unref(Settings), { class: "h-5 w-5" }),
                createTextVNode(" Paramètres de l'organisation ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("logout"),
          method: "post",
          as: "button",
          class: "flex items-center gap-2 w-full px-4 py-2 text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(LogOut), { class: "h-5 w-5" }, null, _parent2, _scopeId));
              _push2(` Se déconnecter `);
            } else {
              return [
                createVNode(unref(LogOut), { class: "h-5 w-5" }),
                createTextVNode(" Se déconnecter ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("login"),
          class: "block px-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Connexion `);
            } else {
              return [
                createTextVNode(" Connexion ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("register"),
          class: "block px-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Inscription `);
            } else {
              return [
                createTextVNode(" Inscription ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div></div></div></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/partials/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const name = usePage().props.name;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 dark:bg-gray-900 mt-12" }, _attrs))}><div class="max-w-7xl mx-auto px-4 py-8"><p class="text-center text-sm text-gray-500 dark:text-gray-400"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} ${ssrInterpolate(unref(name))}. Tous droits réservés. </p><div class="flex flex-wrap justify-center gap-4 mt-4"><a href="/decouvrir" class="text-sm text-gray-500 dark:text-gray-400">Découvrir</a><a href="/comment-ca-marche" class="text-sm text-gray-500 dark:text-gray-400">Comment ça marche</a><a href="/faq" class="text-sm text-gray-500 dark:text-gray-400">FAQ</a><a href="/mentions-legales" class="text-sm text-gray-500 dark:text-gray-400">Mentions légales</a><a href="/politique-de-confidentialite" class="text-sm text-gray-500 dark:text-gray-400">Politique de confidentialité</a><a href="/conditions-generales-d-utilisation" class="text-sm text-gray-500 dark:text-gray-400">Conditions générales d&#39;utilisation</a></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/partials/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "FlashMessage",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const messages = ref([]);
    let messageId = 0;
    const addMessage = (type, text) => {
      const id = messageId++;
      messages.value.push({ id, type, text });
      setTimeout(() => {
        messages.value = messages.value.filter((m) => m.id !== id);
      }, 3e3);
    };
    watch(() => page.props.flash, (flash) => {
      if (flash.success) {
        addMessage("success", flash.success);
      }
      if (flash.error) {
        addMessage("error", flash.error);
      }
      if (flash.message) {
        addMessage("info", flash.message);
      }
    }, { deep: true });
    watch(() => page.props.errors, (errors) => {
      if (Object.keys(errors).length > 0) {
        addMessage("error", "Il y a des erreurs dans le formulaire");
      }
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "aria-live": "assertive",
        class: "pointer-events-none fixed inset-0 z-50 flex flex-col items-end gap-y-2 px-4 py-6 sm:items-start sm:p-6"
      }, _attrs))}><!--[-->`);
      ssrRenderList(messages.value, (message) => {
        _push(`<div class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"><div class="${ssrRenderClass([
          "p-4",
          message.type === "success" && "bg-green-50",
          message.type === "error" && "bg-red-50",
          message.type === "info" && "bg-blue-50"
        ])}"><div class="flex items-start"><div class="flex-shrink-0">`);
        if (message.type === "success") {
          _push(ssrRenderComponent(unref(CheckCircle), { class: "h-5 w-5 text-green-400" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (message.type === "error") {
          _push(ssrRenderComponent(unref(XCircle), { class: "h-5 w-5 text-red-400" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (message.type === "info") {
          _push(ssrRenderComponent(unref(Info), { class: "h-5 w-5 text-blue-400" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="ml-3 w-0 flex-1 pt-0.5"><p class="${ssrRenderClass([
          "text-sm font-medium",
          message.type === "success" && "text-green-800",
          message.type === "error" && "text-red-800",
          message.type === "info" && "text-blue-800"
        ])}">${ssrInterpolate(message.text)}</p></div></div></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/FlashMessage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _export_sfc as _,
  _sfc_main$2 as a,
  _sfc_main as b,
  _sfc_main$1 as c
};
