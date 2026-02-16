import { ref, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, createCommentVNode, Fragment, renderList, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { usePage, useForm, Link, router } from "@inertiajs/vue3";
import { Truck, Camera, Minus, Plus, Trash, AlertTriangle, Users, Shield, FileText, AlertCircle, CreditCard } from "lucide-vue-next";
import { _ as _sfc_main$2 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$d } from "./Textarea-DxMXW1ER.js";
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5, d as _sfc_main$6 } from "./CardTitle-rMLiyiHU.js";
import { _ as _sfc_main$7 } from "./Separator-C0fcDgz2.js";
import { _ as _sfc_main$8, a as _sfc_main$9, b as _sfc_main$a, c as _sfc_main$b, d as _sfc_main$c, e as _sfc_main$e } from "./DialogTrigger-CSFZvrzo.js";
import { toast } from "vue-sonner";
import { _ as _sfc_main$1 } from "./PublicLayout-Dy_cSdNa.js";
import "class-variance-authority";
import "reka-ui";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "@heroicons/vue/24/outline";
import "./index-9VOASAGY.js";
import "./Input-BNuRmWJk.js";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  setup(__props) {
    const isProcessing = ref(false);
    const showConfirmationModal = ref(false);
    const items = computed(() => usePage().props.items);
    const form = useForm({
      message: ""
    });
    const confirmReservation = () => {
      form.post(route("app.organizations.reservations.in.store"), {
        onSuccess: () => {
          showConfirmationModal.value = false;
        }
      });
    };
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const formatPrice = (price) => {
      return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(price);
    };
    const totalPrice = computed(() => {
      var _a;
      return ((_a = items.value) == null ? void 0 : _a.reduce((total, item) => total + item.total, 0)) ?? 0;
    });
    const totalDeposit = computed(() => {
      var _a;
      return ((_a = items.value) == null ? void 0 : _a.reduce((total, item) => total + item.deposit, 0)) ?? 0;
    });
    const handleAction = async (action) => {
      if (isProcessing.value) return;
      isProcessing.value = true;
      try {
        await action();
      } finally {
        isProcessing.value = false;
      }
    };
    const updateQuantity = (item, quantity) => {
      if (quantity < 1) return;
      handleAction(
        () => router.put(route("carts.update", item.equipment.id), {
          quantity,
          rental_start: item.rental_start,
          rental_end: item.rental_end
        }, {
          preserveScroll: true,
          only: ["items"],
          onError: () => {
            toast("Erreur", {
              description: "Une erreur s'est produite lors de la mise à jour de la quantité.",
              variant: "destructive"
            });
          }
        })
      );
    };
    const removeItem = (item) => {
      if (!confirm("Voulez-vous vraiment retirer cet article du camion ?")) return;
      handleAction(
        () => router.delete(route("carts.remove", item.equipment.id), {
          data: {
            rental_start: item.rental_start,
            rental_end: item.rental_end
          }
        }, {
          preserveScroll: true,
          onSuccess: () => {
            toast("Article supprimé", {
              description: "L'article a été retiré de votre camion."
            });
          },
          onError: () => {
            toast("Erreur", {
              description: "Une erreur s'est produite lors de la suppression de l'article.",
              variant: "destructive"
            });
          }
        })
      );
    };
    const clearCart = () => {
      if (!confirm("Voulez-vous vraiment vider votre camion ?")) return;
      handleAction(
        () => router.delete(route("carts.clear"), {
          onSuccess: () => {
            toast("Camion vidé", {
              description: "Tous les articles ont été retirés de votre camion."
            });
          },
          onError: () => {
            toast("Erreur", {
              description: "Une erreur s'est produite lors du vidage du camion.",
              variant: "destructive"
            });
          }
        })
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Mon camion",
        description: "Vérifier le chargement avant de confirmer votre demande"
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto"${_scopeId}><h1 class="text-xl font-semibold"${_scopeId}>Mon camion</h1><p class="text-sm text-muted-foreground"${_scopeId}> Vérifiez bien les dates et les quantités avant de confirmer votre demande. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto" }, [
                createVNode("h1", { class: "text-xl font-semibold" }, "Mon camion"),
                createVNode("p", { class: "text-sm text-muted-foreground" }, " Vérifiez bien les dates et les quantités avant de confirmer votre demande. ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto py-6"${_scopeId}>`);
            if (items.value.length === 0) {
              _push2(`<div class="flex flex-col items-center justify-center py-12"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Truck), { class: "h-16 w-16 text-muted-foreground mb-4" }, null, _parent2, _scopeId));
              _push2(`<h2 class="text-2xl font-semibold mb-2"${_scopeId}>Votre camion est vide</h2><p class="text-muted-foreground mb-6"${_scopeId}>Ajoutez du matériel à votre camion pour commencer</p>`);
              _push2(ssrRenderComponent(unref(_sfc_main$2), { asChild: "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("home")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Parcourir le matériel disponible `);
                        } else {
                          return [
                            createTextVNode(" Parcourir le matériel disponible ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Link), {
                        href: _ctx.route("home")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Parcourir le matériel disponible ")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-6"${_scopeId}><div class="lg:col-span-2 space-y-6"${_scopeId}><!--[-->`);
              ssrRenderList(items.value, (group) => {
                _push2(`<div class="space-y-4"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "bg-secondary/50" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(_sfc_main$4), null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span class="uppercase font-medium"${_scopeId4}>${ssrInterpolate(group.organization.name)}</span>`);
                                } else {
                                  return [
                                    createVNode("span", { class: "uppercase font-medium" }, toDisplayString(group.organization.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(_sfc_main$5), null, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "uppercase font-medium" }, toDisplayString(group.organization.name), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "space-y-4" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            ssrRenderList(group.items, (item) => {
                              _push4(ssrRenderComponent(unref(_sfc_main$3), {
                                key: item.equipment.id,
                                class: "group"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(unref(_sfc_main$6), { class: "px-4" }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<div class="flex flex-wrap gap-6"${_scopeId5}><div class="relative"${_scopeId5}>`);
                                          if (item.image) {
                                            _push6(`<img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.equipment.name)} class="w-12 h-12 lg:w-32 lg:h-32 object-cover rounded-lg"${_scopeId5}>`);
                                          } else {
                                            _push6(`<div class="w-12 h-12 lg:w-32 lg:h-32 bg-muted rounded-lg flex items-center justify-center"${_scopeId5}>`);
                                            _push6(ssrRenderComponent(unref(Camera), { class: "h-10 w-10 text-muted-foreground" }, null, _parent6, _scopeId5));
                                            _push6(`</div>`);
                                          }
                                          _push6(`</div><div class="flex-1"${_scopeId5}><h3 class="text-lg font-semibold mb-2"${_scopeId5}>${ssrInterpolate(item.equipment.name)}</h3><div class="space-y-2 text-sm text-muted-foreground"${_scopeId5}><p${_scopeId5}> du ${ssrInterpolate(formatDate(item.rental_start))} au ${ssrInterpolate(formatDate(item.rental_end))}</p><div class="space-y-1"${_scopeId5}><span class="font-medium"${_scopeId5}>Quantité:</span><div class="flex items-center gap-2 mt-1"${_scopeId5}>`);
                                          _push6(ssrRenderComponent(unref(_sfc_main$2), {
                                            variant: "outline",
                                            size: "icon",
                                            onClick: ($event) => updateQuantity(item, item.quantity - 1),
                                            disabled: item.quantity <= 1,
                                            class: "transition-opacity"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(unref(Minus), { class: "h-4 w-4" }, null, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(unref(Minus), { class: "h-4 w-4" })
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                          _push6(`<span class="w-8 text-center"${_scopeId5}>${ssrInterpolate(item.quantity)}</span>`);
                                          _push6(ssrRenderComponent(unref(_sfc_main$2), {
                                            variant: "outline",
                                            size: "icon",
                                            onClick: ($event) => updateQuantity(item, item.quantity + 1),
                                            class: "transition-opacity",
                                            disabled: item.quantity >= item.quantityAvailable
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(unref(Plus), { class: "h-4 w-4" }, null, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(unref(Plus), { class: "h-4 w-4" })
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                          _push6(`</div></div>`);
                                          if (item.notes) {
                                            _push6(`<p${_scopeId5}><span class="font-medium"${_scopeId5}>Notes:</span><br${_scopeId5}> ${ssrInterpolate(item.notes)}</p>`);
                                          } else {
                                            _push6(`<!---->`);
                                          }
                                          _push6(`</div></div><div class="lg:text-right space-y-2"${_scopeId5}><p class="text-lg font-semibold"${_scopeId5}>${ssrInterpolate(formatPrice(item.total))}</p><p class="text-sm"${_scopeId5}>${ssrInterpolate(formatPrice(item.price))} x ${ssrInterpolate(item.days)} jours </p>`);
                                          if (item.equipment.requires_deposit) {
                                            _push6(`<p class="text-sm text-muted-foreground"${_scopeId5}> Caution: ${ssrInterpolate(formatPrice(item.equipment.deposit_amount * item.quantity))}</p>`);
                                          } else {
                                            _push6(`<!---->`);
                                          }
                                          _push6(ssrRenderComponent(unref(_sfc_main$2), {
                                            variant: "ghost",
                                            class: "text-destructive",
                                            size: "sm",
                                            onClick: ($event) => removeItem(item)
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(unref(Trash), { class: "h-4 w-4" }, null, _parent7, _scopeId6));
                                                _push7(` Retirer `);
                                              } else {
                                                return [
                                                  createVNode(unref(Trash), { class: "h-4 w-4" }),
                                                  createTextVNode(" Retirer ")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                          _push6(`</div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "flex flex-wrap gap-6" }, [
                                              createVNode("div", { class: "relative" }, [
                                                item.image ? (openBlock(), createBlock("img", {
                                                  key: 0,
                                                  src: item.image,
                                                  alt: item.equipment.name,
                                                  class: "w-12 h-12 lg:w-32 lg:h-32 object-cover rounded-lg"
                                                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                                                  key: 1,
                                                  class: "w-12 h-12 lg:w-32 lg:h-32 bg-muted rounded-lg flex items-center justify-center"
                                                }, [
                                                  createVNode(unref(Camera), { class: "h-10 w-10 text-muted-foreground" })
                                                ]))
                                              ]),
                                              createVNode("div", { class: "flex-1" }, [
                                                createVNode("h3", { class: "text-lg font-semibold mb-2" }, toDisplayString(item.equipment.name), 1),
                                                createVNode("div", { class: "space-y-2 text-sm text-muted-foreground" }, [
                                                  createVNode("p", null, " du " + toDisplayString(formatDate(item.rental_start)) + " au " + toDisplayString(formatDate(item.rental_end)), 1),
                                                  createVNode("div", { class: "space-y-1" }, [
                                                    createVNode("span", { class: "font-medium" }, "Quantité:"),
                                                    createVNode("div", { class: "flex items-center gap-2 mt-1" }, [
                                                      createVNode(unref(_sfc_main$2), {
                                                        variant: "outline",
                                                        size: "icon",
                                                        onClick: ($event) => updateQuantity(item, item.quantity - 1),
                                                        disabled: item.quantity <= 1,
                                                        class: "transition-opacity"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(unref(Minus), { class: "h-4 w-4" })
                                                        ]),
                                                        _: 1
                                                      }, 8, ["onClick", "disabled"]),
                                                      createVNode("span", { class: "w-8 text-center" }, toDisplayString(item.quantity), 1),
                                                      createVNode(unref(_sfc_main$2), {
                                                        variant: "outline",
                                                        size: "icon",
                                                        onClick: ($event) => updateQuantity(item, item.quantity + 1),
                                                        class: "transition-opacity",
                                                        disabled: item.quantity >= item.quantityAvailable
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(unref(Plus), { class: "h-4 w-4" })
                                                        ]),
                                                        _: 1
                                                      }, 8, ["onClick", "disabled"])
                                                    ])
                                                  ]),
                                                  item.notes ? (openBlock(), createBlock("p", { key: 0 }, [
                                                    createVNode("span", { class: "font-medium" }, "Notes:"),
                                                    createVNode("br"),
                                                    createTextVNode(" " + toDisplayString(item.notes), 1)
                                                  ])) : createCommentVNode("", true)
                                                ])
                                              ]),
                                              createVNode("div", { class: "lg:text-right space-y-2" }, [
                                                createVNode("p", { class: "text-lg font-semibold" }, toDisplayString(formatPrice(item.total)), 1),
                                                createVNode("p", { class: "text-sm" }, toDisplayString(formatPrice(item.price)) + " x " + toDisplayString(item.days) + " jours ", 1),
                                                item.equipment.requires_deposit ? (openBlock(), createBlock("p", {
                                                  key: 0,
                                                  class: "text-sm text-muted-foreground"
                                                }, " Caution: " + toDisplayString(formatPrice(item.equipment.deposit_amount * item.quantity)), 1)) : createCommentVNode("", true),
                                                createVNode(unref(_sfc_main$2), {
                                                  variant: "ghost",
                                                  class: "text-destructive",
                                                  size: "sm",
                                                  onClick: ($event) => removeItem(item)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Trash), { class: "h-4 w-4" }),
                                                    createTextVNode(" Retirer ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$6), { class: "px-4" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex flex-wrap gap-6" }, [
                                            createVNode("div", { class: "relative" }, [
                                              item.image ? (openBlock(), createBlock("img", {
                                                key: 0,
                                                src: item.image,
                                                alt: item.equipment.name,
                                                class: "w-12 h-12 lg:w-32 lg:h-32 object-cover rounded-lg"
                                              }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                                                key: 1,
                                                class: "w-12 h-12 lg:w-32 lg:h-32 bg-muted rounded-lg flex items-center justify-center"
                                              }, [
                                                createVNode(unref(Camera), { class: "h-10 w-10 text-muted-foreground" })
                                              ]))
                                            ]),
                                            createVNode("div", { class: "flex-1" }, [
                                              createVNode("h3", { class: "text-lg font-semibold mb-2" }, toDisplayString(item.equipment.name), 1),
                                              createVNode("div", { class: "space-y-2 text-sm text-muted-foreground" }, [
                                                createVNode("p", null, " du " + toDisplayString(formatDate(item.rental_start)) + " au " + toDisplayString(formatDate(item.rental_end)), 1),
                                                createVNode("div", { class: "space-y-1" }, [
                                                  createVNode("span", { class: "font-medium" }, "Quantité:"),
                                                  createVNode("div", { class: "flex items-center gap-2 mt-1" }, [
                                                    createVNode(unref(_sfc_main$2), {
                                                      variant: "outline",
                                                      size: "icon",
                                                      onClick: ($event) => updateQuantity(item, item.quantity - 1),
                                                      disabled: item.quantity <= 1,
                                                      class: "transition-opacity"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(unref(Minus), { class: "h-4 w-4" })
                                                      ]),
                                                      _: 1
                                                    }, 8, ["onClick", "disabled"]),
                                                    createVNode("span", { class: "w-8 text-center" }, toDisplayString(item.quantity), 1),
                                                    createVNode(unref(_sfc_main$2), {
                                                      variant: "outline",
                                                      size: "icon",
                                                      onClick: ($event) => updateQuantity(item, item.quantity + 1),
                                                      class: "transition-opacity",
                                                      disabled: item.quantity >= item.quantityAvailable
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(unref(Plus), { class: "h-4 w-4" })
                                                      ]),
                                                      _: 1
                                                    }, 8, ["onClick", "disabled"])
                                                  ])
                                                ]),
                                                item.notes ? (openBlock(), createBlock("p", { key: 0 }, [
                                                  createVNode("span", { class: "font-medium" }, "Notes:"),
                                                  createVNode("br"),
                                                  createTextVNode(" " + toDisplayString(item.notes), 1)
                                                ])) : createCommentVNode("", true)
                                              ])
                                            ]),
                                            createVNode("div", { class: "lg:text-right space-y-2" }, [
                                              createVNode("p", { class: "text-lg font-semibold" }, toDisplayString(formatPrice(item.total)), 1),
                                              createVNode("p", { class: "text-sm" }, toDisplayString(formatPrice(item.price)) + " x " + toDisplayString(item.days) + " jours ", 1),
                                              item.equipment.requires_deposit ? (openBlock(), createBlock("p", {
                                                key: 0,
                                                class: "text-sm text-muted-foreground"
                                              }, " Caution: " + toDisplayString(formatPrice(item.equipment.deposit_amount * item.quantity)), 1)) : createCommentVNode("", true),
                                              createVNode(unref(_sfc_main$2), {
                                                variant: "ghost",
                                                class: "text-destructive",
                                                size: "sm",
                                                onClick: ($event) => removeItem(item)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Trash), { class: "h-4 w-4" }),
                                                  createTextVNode(" Retirer ")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--><div class="flex justify-between pt-4 border-t"${_scopeId3}><span class="font-medium"${_scopeId3}>Total pour ${ssrInterpolate(group.organization.name)}</span><div class="text-right"${_scopeId3}><p class="font-semibold"${_scopeId3}>${ssrInterpolate(formatPrice(group.total))}</p>`);
                            if (group.deposit > 0) {
                              _push4(`<p class="text-sm text-muted-foreground"${_scopeId3}> Caution: ${ssrInterpolate(formatPrice(group.deposit))}</p>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div></div>`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList(group.items, (item) => {
                                return openBlock(), createBlock(unref(_sfc_main$3), {
                                  key: item.equipment.id,
                                  class: "group"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$6), { class: "px-4" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex flex-wrap gap-6" }, [
                                          createVNode("div", { class: "relative" }, [
                                            item.image ? (openBlock(), createBlock("img", {
                                              key: 0,
                                              src: item.image,
                                              alt: item.equipment.name,
                                              class: "w-12 h-12 lg:w-32 lg:h-32 object-cover rounded-lg"
                                            }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                                              key: 1,
                                              class: "w-12 h-12 lg:w-32 lg:h-32 bg-muted rounded-lg flex items-center justify-center"
                                            }, [
                                              createVNode(unref(Camera), { class: "h-10 w-10 text-muted-foreground" })
                                            ]))
                                          ]),
                                          createVNode("div", { class: "flex-1" }, [
                                            createVNode("h3", { class: "text-lg font-semibold mb-2" }, toDisplayString(item.equipment.name), 1),
                                            createVNode("div", { class: "space-y-2 text-sm text-muted-foreground" }, [
                                              createVNode("p", null, " du " + toDisplayString(formatDate(item.rental_start)) + " au " + toDisplayString(formatDate(item.rental_end)), 1),
                                              createVNode("div", { class: "space-y-1" }, [
                                                createVNode("span", { class: "font-medium" }, "Quantité:"),
                                                createVNode("div", { class: "flex items-center gap-2 mt-1" }, [
                                                  createVNode(unref(_sfc_main$2), {
                                                    variant: "outline",
                                                    size: "icon",
                                                    onClick: ($event) => updateQuantity(item, item.quantity - 1),
                                                    disabled: item.quantity <= 1,
                                                    class: "transition-opacity"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(Minus), { class: "h-4 w-4" })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick", "disabled"]),
                                                  createVNode("span", { class: "w-8 text-center" }, toDisplayString(item.quantity), 1),
                                                  createVNode(unref(_sfc_main$2), {
                                                    variant: "outline",
                                                    size: "icon",
                                                    onClick: ($event) => updateQuantity(item, item.quantity + 1),
                                                    class: "transition-opacity",
                                                    disabled: item.quantity >= item.quantityAvailable
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(Plus), { class: "h-4 w-4" })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick", "disabled"])
                                                ])
                                              ]),
                                              item.notes ? (openBlock(), createBlock("p", { key: 0 }, [
                                                createVNode("span", { class: "font-medium" }, "Notes:"),
                                                createVNode("br"),
                                                createTextVNode(" " + toDisplayString(item.notes), 1)
                                              ])) : createCommentVNode("", true)
                                            ])
                                          ]),
                                          createVNode("div", { class: "lg:text-right space-y-2" }, [
                                            createVNode("p", { class: "text-lg font-semibold" }, toDisplayString(formatPrice(item.total)), 1),
                                            createVNode("p", { class: "text-sm" }, toDisplayString(formatPrice(item.price)) + " x " + toDisplayString(item.days) + " jours ", 1),
                                            item.equipment.requires_deposit ? (openBlock(), createBlock("p", {
                                              key: 0,
                                              class: "text-sm text-muted-foreground"
                                            }, " Caution: " + toDisplayString(formatPrice(item.equipment.deposit_amount * item.quantity)), 1)) : createCommentVNode("", true),
                                            createVNode(unref(_sfc_main$2), {
                                              variant: "ghost",
                                              class: "text-destructive",
                                              size: "sm",
                                              onClick: ($event) => removeItem(item)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Trash), { class: "h-4 w-4" }),
                                                createTextVNode(" Retirer ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128)),
                              createVNode("div", { class: "flex justify-between pt-4 border-t" }, [
                                createVNode("span", { class: "font-medium" }, "Total pour " + toDisplayString(group.organization.name), 1),
                                createVNode("div", { class: "text-right" }, [
                                  createVNode("p", { class: "font-semibold" }, toDisplayString(formatPrice(group.total)), 1),
                                  group.deposit > 0 ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "text-sm text-muted-foreground"
                                  }, " Caution: " + toDisplayString(formatPrice(group.deposit)), 1)) : createCommentVNode("", true)
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(_sfc_main$4), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$5), null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "uppercase font-medium" }, toDisplayString(group.organization.name), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(_sfc_main$6), { class: "space-y-4" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(group.items, (item) => {
                              return openBlock(), createBlock(unref(_sfc_main$3), {
                                key: item.equipment.id,
                                class: "group"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$6), { class: "px-4" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex flex-wrap gap-6" }, [
                                        createVNode("div", { class: "relative" }, [
                                          item.image ? (openBlock(), createBlock("img", {
                                            key: 0,
                                            src: item.image,
                                            alt: item.equipment.name,
                                            class: "w-12 h-12 lg:w-32 lg:h-32 object-cover rounded-lg"
                                          }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                                            key: 1,
                                            class: "w-12 h-12 lg:w-32 lg:h-32 bg-muted rounded-lg flex items-center justify-center"
                                          }, [
                                            createVNode(unref(Camera), { class: "h-10 w-10 text-muted-foreground" })
                                          ]))
                                        ]),
                                        createVNode("div", { class: "flex-1" }, [
                                          createVNode("h3", { class: "text-lg font-semibold mb-2" }, toDisplayString(item.equipment.name), 1),
                                          createVNode("div", { class: "space-y-2 text-sm text-muted-foreground" }, [
                                            createVNode("p", null, " du " + toDisplayString(formatDate(item.rental_start)) + " au " + toDisplayString(formatDate(item.rental_end)), 1),
                                            createVNode("div", { class: "space-y-1" }, [
                                              createVNode("span", { class: "font-medium" }, "Quantité:"),
                                              createVNode("div", { class: "flex items-center gap-2 mt-1" }, [
                                                createVNode(unref(_sfc_main$2), {
                                                  variant: "outline",
                                                  size: "icon",
                                                  onClick: ($event) => updateQuantity(item, item.quantity - 1),
                                                  disabled: item.quantity <= 1,
                                                  class: "transition-opacity"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Minus), { class: "h-4 w-4" })
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick", "disabled"]),
                                                createVNode("span", { class: "w-8 text-center" }, toDisplayString(item.quantity), 1),
                                                createVNode(unref(_sfc_main$2), {
                                                  variant: "outline",
                                                  size: "icon",
                                                  onClick: ($event) => updateQuantity(item, item.quantity + 1),
                                                  class: "transition-opacity",
                                                  disabled: item.quantity >= item.quantityAvailable
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Plus), { class: "h-4 w-4" })
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick", "disabled"])
                                              ])
                                            ]),
                                            item.notes ? (openBlock(), createBlock("p", { key: 0 }, [
                                              createVNode("span", { class: "font-medium" }, "Notes:"),
                                              createVNode("br"),
                                              createTextVNode(" " + toDisplayString(item.notes), 1)
                                            ])) : createCommentVNode("", true)
                                          ])
                                        ]),
                                        createVNode("div", { class: "lg:text-right space-y-2" }, [
                                          createVNode("p", { class: "text-lg font-semibold" }, toDisplayString(formatPrice(item.total)), 1),
                                          createVNode("p", { class: "text-sm" }, toDisplayString(formatPrice(item.price)) + " x " + toDisplayString(item.days) + " jours ", 1),
                                          item.equipment.requires_deposit ? (openBlock(), createBlock("p", {
                                            key: 0,
                                            class: "text-sm text-muted-foreground"
                                          }, " Caution: " + toDisplayString(formatPrice(item.equipment.deposit_amount * item.quantity)), 1)) : createCommentVNode("", true),
                                          createVNode(unref(_sfc_main$2), {
                                            variant: "ghost",
                                            class: "text-destructive",
                                            size: "sm",
                                            onClick: ($event) => removeItem(item)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Trash), { class: "h-4 w-4" }),
                                              createTextVNode(" Retirer ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128)),
                            createVNode("div", { class: "flex justify-between pt-4 border-t" }, [
                              createVNode("span", { class: "font-medium" }, "Total pour " + toDisplayString(group.organization.name), 1),
                              createVNode("div", { class: "text-right" }, [
                                createVNode("p", { class: "font-semibold" }, toDisplayString(formatPrice(group.total)), 1),
                                group.deposit > 0 ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-sm text-muted-foreground"
                                }, " Caution: " + toDisplayString(formatPrice(group.deposit)), 1)) : createCommentVNode("", true)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div><div class="lg:col-span-1 space-y-6"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$3), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$4), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Récapitulatif de la réservation`);
                              } else {
                                return [
                                  createTextVNode("Récapitulatif de la réservation")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$5), null, {
                              default: withCtx(() => [
                                createTextVNode("Récapitulatif de la réservation")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "space-y-4" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="space-y-2"${_scopeId3}><div class="flex justify-between"${_scopeId3}><span${_scopeId3}>Coût de location</span><span${_scopeId3}>${ssrInterpolate(formatPrice(totalPrice.value))}</span></div><div class="flex justify-between"${_scopeId3}><span${_scopeId3}>Caution totale</span><span${_scopeId3}>${ssrInterpolate(formatPrice(totalDeposit.value))}</span></div>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$7), null, null, _parent4, _scopeId3));
                          _push4(`<p class="text-sm text-muted-foreground"${_scopeId3}> La caution sera à régler directement avec le propriétaire lors de la remise du matériel. </p></div><div class="space-y-2"${_scopeId3}><div class="mt-4 p-4 bg-muted/50 rounded-lg border border-border"${_scopeId3}><h4 class="font-medium mb-3 flex items-center gap-2"${_scopeId3}> Comment fonctionne la réservation ? </h4><div class="space-y-3 text-sm"${_scopeId3}><div class="flex gap-3"${_scopeId3}><div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium"${_scopeId3}>1</div><p${_scopeId3}>Vous notifiez les organisations propriétaires des équipements sélectionnés en cliquant sur le bouton &quot;Confirmer ma demande&quot;.</p></div><div class="flex gap-3"${_scopeId3}><div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium"${_scopeId3}>2</div><p${_scopeId3}>Les propriétaires valident ou refusent votre demande. Laissez-leur un peu de temps pour répondre.</p></div><div class="flex gap-3"${_scopeId3}><div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium"${_scopeId3}>3</div><p${_scopeId3}>Vous recevez un email de chaque propriétaire avec leurs coordonnées pour finaliser la réservation si elle est acceptée. Vous recevez également un email si la réservation est refusée.</p></div></div></div></div>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$2), {
                            class: "w-full",
                            disabled: isProcessing.value,
                            onClick: ($event) => showConfirmationModal.value = true
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Confirmer ma demande `);
                              } else {
                                return [
                                  createTextVNode(" Confirmer ma demande ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2), {
                            variant: "destructive",
                            onClick: clearCart,
                            class: "w-full",
                            disabled: isProcessing.value
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Vider le camion `);
                              } else {
                                return [
                                  createTextVNode(" Vider le camion ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode("div", { class: "flex justify-between" }, [
                                createVNode("span", null, "Coût de location"),
                                createVNode("span", null, toDisplayString(formatPrice(totalPrice.value)), 1)
                              ]),
                              createVNode("div", { class: "flex justify-between" }, [
                                createVNode("span", null, "Caution totale"),
                                createVNode("span", null, toDisplayString(formatPrice(totalDeposit.value)), 1)
                              ]),
                              createVNode(unref(_sfc_main$7)),
                              createVNode("p", { class: "text-sm text-muted-foreground" }, " La caution sera à régler directement avec le propriétaire lors de la remise du matériel. ")
                            ]),
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode("div", { class: "mt-4 p-4 bg-muted/50 rounded-lg border border-border" }, [
                                createVNode("h4", { class: "font-medium mb-3 flex items-center gap-2" }, " Comment fonctionne la réservation ? "),
                                createVNode("div", { class: "space-y-3 text-sm" }, [
                                  createVNode("div", { class: "flex gap-3" }, [
                                    createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium" }, "1"),
                                    createVNode("p", null, 'Vous notifiez les organisations propriétaires des équipements sélectionnés en cliquant sur le bouton "Confirmer ma demande".')
                                  ]),
                                  createVNode("div", { class: "flex gap-3" }, [
                                    createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium" }, "2"),
                                    createVNode("p", null, "Les propriétaires valident ou refusent votre demande. Laissez-leur un peu de temps pour répondre.")
                                  ]),
                                  createVNode("div", { class: "flex gap-3" }, [
                                    createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium" }, "3"),
                                    createVNode("p", null, "Vous recevez un email de chaque propriétaire avec leurs coordonnées pour finaliser la réservation si elle est acceptée. Vous recevez également un email si la réservation est refusée.")
                                  ])
                                ])
                              ])
                            ]),
                            createVNode(unref(_sfc_main$2), {
                              class: "w-full",
                              disabled: isProcessing.value,
                              onClick: ($event) => showConfirmationModal.value = true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Confirmer ma demande ")
                              ]),
                              _: 1
                            }, 8, ["disabled", "onClick"]),
                            createVNode(unref(_sfc_main$2), {
                              variant: "destructive",
                              onClick: clearCart,
                              class: "w-full",
                              disabled: isProcessing.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Vider le camion ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$4), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createTextVNode("Récapitulatif de la réservation")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$6), { class: "space-y-4" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode("div", { class: "flex justify-between" }, [
                              createVNode("span", null, "Coût de location"),
                              createVNode("span", null, toDisplayString(formatPrice(totalPrice.value)), 1)
                            ]),
                            createVNode("div", { class: "flex justify-between" }, [
                              createVNode("span", null, "Caution totale"),
                              createVNode("span", null, toDisplayString(formatPrice(totalDeposit.value)), 1)
                            ]),
                            createVNode(unref(_sfc_main$7)),
                            createVNode("p", { class: "text-sm text-muted-foreground" }, " La caution sera à régler directement avec le propriétaire lors de la remise du matériel. ")
                          ]),
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode("div", { class: "mt-4 p-4 bg-muted/50 rounded-lg border border-border" }, [
                              createVNode("h4", { class: "font-medium mb-3 flex items-center gap-2" }, " Comment fonctionne la réservation ? "),
                              createVNode("div", { class: "space-y-3 text-sm" }, [
                                createVNode("div", { class: "flex gap-3" }, [
                                  createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium" }, "1"),
                                  createVNode("p", null, 'Vous notifiez les organisations propriétaires des équipements sélectionnés en cliquant sur le bouton "Confirmer ma demande".')
                                ]),
                                createVNode("div", { class: "flex gap-3" }, [
                                  createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium" }, "2"),
                                  createVNode("p", null, "Les propriétaires valident ou refusent votre demande. Laissez-leur un peu de temps pour répondre.")
                                ]),
                                createVNode("div", { class: "flex gap-3" }, [
                                  createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium" }, "3"),
                                  createVNode("p", null, "Vous recevez un email de chaque propriétaire avec leurs coordonnées pour finaliser la réservation si elle est acceptée. Vous recevez également un email si la réservation est refusée.")
                                ])
                              ])
                            ])
                          ]),
                          createVNode(unref(_sfc_main$2), {
                            class: "w-full",
                            disabled: isProcessing.value,
                            onClick: ($event) => showConfirmationModal.value = true
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Confirmer ma demande ")
                            ]),
                            _: 1
                          }, 8, ["disabled", "onClick"]),
                          createVNode(unref(_sfc_main$2), {
                            variant: "destructive",
                            onClick: clearCart,
                            class: "w-full",
                            disabled: isProcessing.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Vider le camion ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$8), {
                open: showConfirmationModal.value,
                "onUpdate:open": ($event) => showConfirmationModal.value = $event
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$9), { class: "sm:max-w-[600px]" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$a), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$b), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Confirmation de votre demande`);
                                    } else {
                                      return [
                                        createTextVNode("Confirmation de votre demande")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$c), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Veuillez prendre connaissance des informations importantes avant de confirmer votre demande. `);
                                    } else {
                                      return [
                                        createTextVNode(" Veuillez prendre connaissance des informations importantes avant de confirmer votre demande. ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$b), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Confirmation de votre demande")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$c), null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Veuillez prendre connaissance des informations importantes avant de confirmer votre demande. ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div class="space-y-4 py-4"${_scopeId3}><div class="flex gap-3"${_scopeId3}><div class="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center text-destructive"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(AlertTriangle), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                          _push4(`</div><p class="text-sm text-destructive"${_scopeId3}>Les demandes de réservation de plus d&#39;une semaine restées sans réponse seront automatiquement annulées.</p></div><div class="flex gap-3"${_scopeId3}><div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(Users), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                          _push4(`</div><p class="text-sm"${_scopeId3}>Chaque demande faite à une organisation différente est traitée comme une réservation distincte.</p></div><div class="flex gap-3"${_scopeId3}><div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(Shield), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                          _push4(`</div><p class="text-sm"${_scopeId3}>La plateforme agit uniquement comme intermédiaire et ne peut être tenue responsable des litiges entre les parties.</p></div><div class="flex gap-3"${_scopeId3}><div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(FileText), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                          _push4(`</div><p class="text-sm"${_scopeId3}>Il est de la responsabilité des utilisateurs de vérifier l&#39;état et la conformité du matériel avant la location.</p></div><div class="flex gap-3"${_scopeId3}><div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(AlertCircle), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                          _push4(`</div><p class="text-sm"${_scopeId3}>La plateforme ne garantit pas la disponibilité des équipements et ne peut être tenue responsable des annulations.</p></div><div class="flex gap-3"${_scopeId3}><div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(CreditCard), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                          _push4(`</div><p class="text-sm"${_scopeId3}>Les paiements et arrangements financiers se font directement avec les propriétaires des équipements, en dehors de la plateforme.</p></div></div><form class="space-y-2" id="reservation-message-form"${_scopeId3}><p class="text-sm font-bold"${_scopeId3}>Laissez un message pour présenter votre projet :</p>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$d), {
                            modelValue: unref(form).message,
                            "onUpdate:modelValue": ($event) => unref(form).message = $event,
                            rows: "6",
                            placeholder: "Présentez-vous, donnez du contexte, etc.",
                            error: unref(form).errors.message,
                            required: ""
                          }, null, _parent4, _scopeId3));
                          _push4(`</form>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$e), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$2), {
                                  variant: "outline",
                                  onClick: ($event) => showConfirmationModal.value = false
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Annuler `);
                                    } else {
                                      return [
                                        createTextVNode(" Annuler ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$2), {
                                  type: "submit",
                                  form: "reservation-message-form",
                                  disabled: isProcessing.value
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Je confirme ma demande `);
                                    } else {
                                      return [
                                        createTextVNode(" Je confirme ma demande ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$2), {
                                    variant: "outline",
                                    onClick: ($event) => showConfirmationModal.value = false
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Annuler ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(unref(_sfc_main$2), {
                                    type: "submit",
                                    form: "reservation-message-form",
                                    disabled: isProcessing.value
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Je confirme ma demande ")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$a), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$b), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Confirmation de votre demande")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$c), null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Veuillez prendre connaissance des informations importantes avant de confirmer votre demande. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "space-y-4 py-4" }, [
                              createVNode("div", { class: "flex gap-3" }, [
                                createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center text-destructive" }, [
                                  createVNode(unref(AlertTriangle), { class: "h-4 w-4" })
                                ]),
                                createVNode("p", { class: "text-sm text-destructive" }, "Les demandes de réservation de plus d'une semaine restées sans réponse seront automatiquement annulées.")
                              ]),
                              createVNode("div", { class: "flex gap-3" }, [
                                createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary" }, [
                                  createVNode(unref(Users), { class: "h-4 w-4" })
                                ]),
                                createVNode("p", { class: "text-sm" }, "Chaque demande faite à une organisation différente est traitée comme une réservation distincte.")
                              ]),
                              createVNode("div", { class: "flex gap-3" }, [
                                createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary" }, [
                                  createVNode(unref(Shield), { class: "h-4 w-4" })
                                ]),
                                createVNode("p", { class: "text-sm" }, "La plateforme agit uniquement comme intermédiaire et ne peut être tenue responsable des litiges entre les parties.")
                              ]),
                              createVNode("div", { class: "flex gap-3" }, [
                                createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary" }, [
                                  createVNode(unref(FileText), { class: "h-4 w-4" })
                                ]),
                                createVNode("p", { class: "text-sm" }, "Il est de la responsabilité des utilisateurs de vérifier l'état et la conformité du matériel avant la location.")
                              ]),
                              createVNode("div", { class: "flex gap-3" }, [
                                createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary" }, [
                                  createVNode(unref(AlertCircle), { class: "h-4 w-4" })
                                ]),
                                createVNode("p", { class: "text-sm" }, "La plateforme ne garantit pas la disponibilité des équipements et ne peut être tenue responsable des annulations.")
                              ]),
                              createVNode("div", { class: "flex gap-3" }, [
                                createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary" }, [
                                  createVNode(unref(CreditCard), { class: "h-4 w-4" })
                                ]),
                                createVNode("p", { class: "text-sm" }, "Les paiements et arrangements financiers se font directement avec les propriétaires des équipements, en dehors de la plateforme.")
                              ])
                            ]),
                            createVNode("form", {
                              class: "space-y-2",
                              id: "reservation-message-form",
                              onSubmit: withModifiers(confirmReservation, ["prevent"])
                            }, [
                              createVNode("p", { class: "text-sm font-bold" }, "Laissez un message pour présenter votre projet :"),
                              createVNode(unref(_sfc_main$d), {
                                modelValue: unref(form).message,
                                "onUpdate:modelValue": ($event) => unref(form).message = $event,
                                rows: "6",
                                placeholder: "Présentez-vous, donnez du contexte, etc.",
                                error: unref(form).errors.message,
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error"])
                            ], 32),
                            createVNode(unref(_sfc_main$e), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), {
                                  variant: "outline",
                                  onClick: ($event) => showConfirmationModal.value = false
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Annuler ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(unref(_sfc_main$2), {
                                  type: "submit",
                                  form: "reservation-message-form",
                                  disabled: isProcessing.value
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Je confirme ma demande ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$9), { class: "sm:max-w-[600px]" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$a), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$b), null, {
                                default: withCtx(() => [
                                  createTextVNode("Confirmation de votre demande")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$c), null, {
                                default: withCtx(() => [
                                  createTextVNode(" Veuillez prendre connaissance des informations importantes avant de confirmer votre demande. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "space-y-4 py-4" }, [
                            createVNode("div", { class: "flex gap-3" }, [
                              createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center text-destructive" }, [
                                createVNode(unref(AlertTriangle), { class: "h-4 w-4" })
                              ]),
                              createVNode("p", { class: "text-sm text-destructive" }, "Les demandes de réservation de plus d'une semaine restées sans réponse seront automatiquement annulées.")
                            ]),
                            createVNode("div", { class: "flex gap-3" }, [
                              createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary" }, [
                                createVNode(unref(Users), { class: "h-4 w-4" })
                              ]),
                              createVNode("p", { class: "text-sm" }, "Chaque demande faite à une organisation différente est traitée comme une réservation distincte.")
                            ]),
                            createVNode("div", { class: "flex gap-3" }, [
                              createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary" }, [
                                createVNode(unref(Shield), { class: "h-4 w-4" })
                              ]),
                              createVNode("p", { class: "text-sm" }, "La plateforme agit uniquement comme intermédiaire et ne peut être tenue responsable des litiges entre les parties.")
                            ]),
                            createVNode("div", { class: "flex gap-3" }, [
                              createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary" }, [
                                createVNode(unref(FileText), { class: "h-4 w-4" })
                              ]),
                              createVNode("p", { class: "text-sm" }, "Il est de la responsabilité des utilisateurs de vérifier l'état et la conformité du matériel avant la location.")
                            ]),
                            createVNode("div", { class: "flex gap-3" }, [
                              createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary" }, [
                                createVNode(unref(AlertCircle), { class: "h-4 w-4" })
                              ]),
                              createVNode("p", { class: "text-sm" }, "La plateforme ne garantit pas la disponibilité des équipements et ne peut être tenue responsable des annulations.")
                            ]),
                            createVNode("div", { class: "flex gap-3" }, [
                              createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary" }, [
                                createVNode(unref(CreditCard), { class: "h-4 w-4" })
                              ]),
                              createVNode("p", { class: "text-sm" }, "Les paiements et arrangements financiers se font directement avec les propriétaires des équipements, en dehors de la plateforme.")
                            ])
                          ]),
                          createVNode("form", {
                            class: "space-y-2",
                            id: "reservation-message-form",
                            onSubmit: withModifiers(confirmReservation, ["prevent"])
                          }, [
                            createVNode("p", { class: "text-sm font-bold" }, "Laissez un message pour présenter votre projet :"),
                            createVNode(unref(_sfc_main$d), {
                              modelValue: unref(form).message,
                              "onUpdate:modelValue": ($event) => unref(form).message = $event,
                              rows: "6",
                              placeholder: "Présentez-vous, donnez du contexte, etc.",
                              error: unref(form).errors.message,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error"])
                          ], 32),
                          createVNode(unref(_sfc_main$e), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2), {
                                variant: "outline",
                                onClick: ($event) => showConfirmationModal.value = false
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Annuler ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(unref(_sfc_main$2), {
                                type: "submit",
                                form: "reservation-message-form",
                                disabled: isProcessing.value
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Je confirme ma demande ")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ]),
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
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto py-6" }, [
                items.value.length === 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-col items-center justify-center py-12"
                }, [
                  createVNode(unref(Truck), { class: "h-16 w-16 text-muted-foreground mb-4" }),
                  createVNode("h2", { class: "text-2xl font-semibold mb-2" }, "Votre camion est vide"),
                  createVNode("p", { class: "text-muted-foreground mb-6" }, "Ajoutez du matériel à votre camion pour commencer"),
                  createVNode(unref(_sfc_main$2), { asChild: "" }, {
                    default: withCtx(() => [
                      createVNode(unref(Link), {
                        href: _ctx.route("home")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Parcourir le matériel disponible ")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ]),
                    _: 1
                  })
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "grid grid-cols-1 lg:grid-cols-3 gap-6"
                }, [
                  createVNode("div", { class: "lg:col-span-2 space-y-6" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(items.value, (group) => {
                      return openBlock(), createBlock("div", {
                        key: group.organization.id,
                        class: "space-y-4"
                      }, [
                        createVNode(unref(_sfc_main$3), { class: "bg-secondary/50" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$5), null, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "uppercase font-medium" }, toDisplayString(group.organization.name), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$6), { class: "space-y-4" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(group.items, (item) => {
                                  return openBlock(), createBlock(unref(_sfc_main$3), {
                                    key: item.equipment.id,
                                    class: "group"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$6), { class: "px-4" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex flex-wrap gap-6" }, [
                                            createVNode("div", { class: "relative" }, [
                                              item.image ? (openBlock(), createBlock("img", {
                                                key: 0,
                                                src: item.image,
                                                alt: item.equipment.name,
                                                class: "w-12 h-12 lg:w-32 lg:h-32 object-cover rounded-lg"
                                              }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                                                key: 1,
                                                class: "w-12 h-12 lg:w-32 lg:h-32 bg-muted rounded-lg flex items-center justify-center"
                                              }, [
                                                createVNode(unref(Camera), { class: "h-10 w-10 text-muted-foreground" })
                                              ]))
                                            ]),
                                            createVNode("div", { class: "flex-1" }, [
                                              createVNode("h3", { class: "text-lg font-semibold mb-2" }, toDisplayString(item.equipment.name), 1),
                                              createVNode("div", { class: "space-y-2 text-sm text-muted-foreground" }, [
                                                createVNode("p", null, " du " + toDisplayString(formatDate(item.rental_start)) + " au " + toDisplayString(formatDate(item.rental_end)), 1),
                                                createVNode("div", { class: "space-y-1" }, [
                                                  createVNode("span", { class: "font-medium" }, "Quantité:"),
                                                  createVNode("div", { class: "flex items-center gap-2 mt-1" }, [
                                                    createVNode(unref(_sfc_main$2), {
                                                      variant: "outline",
                                                      size: "icon",
                                                      onClick: ($event) => updateQuantity(item, item.quantity - 1),
                                                      disabled: item.quantity <= 1,
                                                      class: "transition-opacity"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(unref(Minus), { class: "h-4 w-4" })
                                                      ]),
                                                      _: 1
                                                    }, 8, ["onClick", "disabled"]),
                                                    createVNode("span", { class: "w-8 text-center" }, toDisplayString(item.quantity), 1),
                                                    createVNode(unref(_sfc_main$2), {
                                                      variant: "outline",
                                                      size: "icon",
                                                      onClick: ($event) => updateQuantity(item, item.quantity + 1),
                                                      class: "transition-opacity",
                                                      disabled: item.quantity >= item.quantityAvailable
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(unref(Plus), { class: "h-4 w-4" })
                                                      ]),
                                                      _: 1
                                                    }, 8, ["onClick", "disabled"])
                                                  ])
                                                ]),
                                                item.notes ? (openBlock(), createBlock("p", { key: 0 }, [
                                                  createVNode("span", { class: "font-medium" }, "Notes:"),
                                                  createVNode("br"),
                                                  createTextVNode(" " + toDisplayString(item.notes), 1)
                                                ])) : createCommentVNode("", true)
                                              ])
                                            ]),
                                            createVNode("div", { class: "lg:text-right space-y-2" }, [
                                              createVNode("p", { class: "text-lg font-semibold" }, toDisplayString(formatPrice(item.total)), 1),
                                              createVNode("p", { class: "text-sm" }, toDisplayString(formatPrice(item.price)) + " x " + toDisplayString(item.days) + " jours ", 1),
                                              item.equipment.requires_deposit ? (openBlock(), createBlock("p", {
                                                key: 0,
                                                class: "text-sm text-muted-foreground"
                                              }, " Caution: " + toDisplayString(formatPrice(item.equipment.deposit_amount * item.quantity)), 1)) : createCommentVNode("", true),
                                              createVNode(unref(_sfc_main$2), {
                                                variant: "ghost",
                                                class: "text-destructive",
                                                size: "sm",
                                                onClick: ($event) => removeItem(item)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Trash), { class: "h-4 w-4" }),
                                                  createTextVNode(" Retirer ")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128)),
                                createVNode("div", { class: "flex justify-between pt-4 border-t" }, [
                                  createVNode("span", { class: "font-medium" }, "Total pour " + toDisplayString(group.organization.name), 1),
                                  createVNode("div", { class: "text-right" }, [
                                    createVNode("p", { class: "font-semibold" }, toDisplayString(formatPrice(group.total)), 1),
                                    group.deposit > 0 ? (openBlock(), createBlock("p", {
                                      key: 0,
                                      class: "text-sm text-muted-foreground"
                                    }, " Caution: " + toDisplayString(formatPrice(group.deposit)), 1)) : createCommentVNode("", true)
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "lg:col-span-1 space-y-6" }, [
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$5), null, {
                              default: withCtx(() => [
                                createTextVNode("Récapitulatif de la réservation")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$6), { class: "space-y-4" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode("div", { class: "flex justify-between" }, [
                                createVNode("span", null, "Coût de location"),
                                createVNode("span", null, toDisplayString(formatPrice(totalPrice.value)), 1)
                              ]),
                              createVNode("div", { class: "flex justify-between" }, [
                                createVNode("span", null, "Caution totale"),
                                createVNode("span", null, toDisplayString(formatPrice(totalDeposit.value)), 1)
                              ]),
                              createVNode(unref(_sfc_main$7)),
                              createVNode("p", { class: "text-sm text-muted-foreground" }, " La caution sera à régler directement avec le propriétaire lors de la remise du matériel. ")
                            ]),
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode("div", { class: "mt-4 p-4 bg-muted/50 rounded-lg border border-border" }, [
                                createVNode("h4", { class: "font-medium mb-3 flex items-center gap-2" }, " Comment fonctionne la réservation ? "),
                                createVNode("div", { class: "space-y-3 text-sm" }, [
                                  createVNode("div", { class: "flex gap-3" }, [
                                    createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium" }, "1"),
                                    createVNode("p", null, 'Vous notifiez les organisations propriétaires des équipements sélectionnés en cliquant sur le bouton "Confirmer ma demande".')
                                  ]),
                                  createVNode("div", { class: "flex gap-3" }, [
                                    createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium" }, "2"),
                                    createVNode("p", null, "Les propriétaires valident ou refusent votre demande. Laissez-leur un peu de temps pour répondre.")
                                  ]),
                                  createVNode("div", { class: "flex gap-3" }, [
                                    createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium" }, "3"),
                                    createVNode("p", null, "Vous recevez un email de chaque propriétaire avec leurs coordonnées pour finaliser la réservation si elle est acceptée. Vous recevez également un email si la réservation est refusée.")
                                  ])
                                ])
                              ])
                            ]),
                            createVNode(unref(_sfc_main$2), {
                              class: "w-full",
                              disabled: isProcessing.value,
                              onClick: ($event) => showConfirmationModal.value = true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Confirmer ma demande ")
                              ]),
                              _: 1
                            }, 8, ["disabled", "onClick"]),
                            createVNode(unref(_sfc_main$2), {
                              variant: "destructive",
                              onClick: clearCart,
                              class: "w-full",
                              disabled: isProcessing.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Vider le camion ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), {
                      open: showConfirmationModal.value,
                      "onUpdate:open": ($event) => showConfirmationModal.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$9), { class: "sm:max-w-[600px]" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$a), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$b), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Confirmation de votre demande")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$c), null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Veuillez prendre connaissance des informations importantes avant de confirmer votre demande. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "space-y-4 py-4" }, [
                              createVNode("div", { class: "flex gap-3" }, [
                                createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center text-destructive" }, [
                                  createVNode(unref(AlertTriangle), { class: "h-4 w-4" })
                                ]),
                                createVNode("p", { class: "text-sm text-destructive" }, "Les demandes de réservation de plus d'une semaine restées sans réponse seront automatiquement annulées.")
                              ]),
                              createVNode("div", { class: "flex gap-3" }, [
                                createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary" }, [
                                  createVNode(unref(Users), { class: "h-4 w-4" })
                                ]),
                                createVNode("p", { class: "text-sm" }, "Chaque demande faite à une organisation différente est traitée comme une réservation distincte.")
                              ]),
                              createVNode("div", { class: "flex gap-3" }, [
                                createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary" }, [
                                  createVNode(unref(Shield), { class: "h-4 w-4" })
                                ]),
                                createVNode("p", { class: "text-sm" }, "La plateforme agit uniquement comme intermédiaire et ne peut être tenue responsable des litiges entre les parties.")
                              ]),
                              createVNode("div", { class: "flex gap-3" }, [
                                createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary" }, [
                                  createVNode(unref(FileText), { class: "h-4 w-4" })
                                ]),
                                createVNode("p", { class: "text-sm" }, "Il est de la responsabilité des utilisateurs de vérifier l'état et la conformité du matériel avant la location.")
                              ]),
                              createVNode("div", { class: "flex gap-3" }, [
                                createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary" }, [
                                  createVNode(unref(AlertCircle), { class: "h-4 w-4" })
                                ]),
                                createVNode("p", { class: "text-sm" }, "La plateforme ne garantit pas la disponibilité des équipements et ne peut être tenue responsable des annulations.")
                              ]),
                              createVNode("div", { class: "flex gap-3" }, [
                                createVNode("div", { class: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary" }, [
                                  createVNode(unref(CreditCard), { class: "h-4 w-4" })
                                ]),
                                createVNode("p", { class: "text-sm" }, "Les paiements et arrangements financiers se font directement avec les propriétaires des équipements, en dehors de la plateforme.")
                              ])
                            ]),
                            createVNode("form", {
                              class: "space-y-2",
                              id: "reservation-message-form",
                              onSubmit: withModifiers(confirmReservation, ["prevent"])
                            }, [
                              createVNode("p", { class: "text-sm font-bold" }, "Laissez un message pour présenter votre projet :"),
                              createVNode(unref(_sfc_main$d), {
                                modelValue: unref(form).message,
                                "onUpdate:modelValue": ($event) => unref(form).message = $event,
                                rows: "6",
                                placeholder: "Présentez-vous, donnez du contexte, etc.",
                                error: unref(form).errors.message,
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error"])
                            ], 32),
                            createVNode(unref(_sfc_main$e), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), {
                                  variant: "outline",
                                  onClick: ($event) => showConfirmationModal.value = false
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Annuler ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(unref(_sfc_main$2), {
                                  type: "submit",
                                  form: "reservation-message-form",
                                  disabled: isProcessing.value
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Je confirme ma demande ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["open", "onUpdate:open"])
                  ])
                ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Public/Carts/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
