import { ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import _sfc_main$1 from "./Layout-cWP1qhTp.js";
import { _ as _sfc_main$6 } from "./index-9VOASAGY.js";
import { _ as _sfc_main$2 } from "./index-53Kg4F4g.js";
import { ArrowLeftIcon, BuildingIcon, ClockIcon, CheckIcon, XIcon, CheckCircleIcon, XCircleIcon, Trash2Icon, CalendarIcon, PlusIcon, PencilIcon, UserIcon, MailIcon, PhoneIcon } from "lucide-vue-next";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$8, a as _sfc_main$9, b as _sfc_main$a, c as _sfc_main$b, d as _sfc_main$c, e as _sfc_main$d } from "./TableHeader-B4NNsC_2.js";
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5, d as _sfc_main$7 } from "./CardTitle-rMLiyiHU.js";
import { _ as _sfc_main$e, a as _sfc_main$f, b as _sfc_main$g, c as _sfc_main$h, d as _sfc_main$i, e as _sfc_main$j } from "./DialogTrigger-CSFZvrzo.js";
import "./AppLayout-B3jJCr1A.js";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "reka-ui";
import "@vueuse/core";
import "@heroicons/vue/24/outline";
import "vue-sonner";
import "./Input-BNuRmWJk.js";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    reservation: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const isProcessing = ref(false);
    const showConfirmDialog = ref(false);
    const showRejectDialog = ref(false);
    const showCompleteDialog = ref(false);
    const showCancelDialog = ref(false);
    const confirmReservation = () => {
      showConfirmDialog.value = true;
    };
    const rejectReservation = () => {
      showRejectDialog.value = true;
    };
    const completeReservation = () => {
      showCompleteDialog.value = true;
    };
    const cancelReservation = () => {
      showCancelDialog.value = true;
    };
    const handleConfirmReservation = () => {
      isProcessing.value = true;
      showConfirmDialog.value = false;
      router.put(route("app.organizations.reservations.out.confirm", { reservation: props.reservation.id }), {}, {
        onFinish: () => {
          isProcessing.value = false;
        }
      });
    };
    const handleRejectReservation = () => {
      isProcessing.value = true;
      showRejectDialog.value = false;
      router.put(route("app.organizations.reservations.out.reject", { reservation: props.reservation.id }), {}, {
        onFinish: () => {
          isProcessing.value = false;
        }
      });
    };
    const handleCompleteReservation = () => {
      isProcessing.value = true;
      showCompleteDialog.value = false;
      router.put(route("app.organizations.reservations.out.complete", { reservation: props.reservation.id }), {}, {
        onFinish: () => {
          isProcessing.value = false;
        }
      });
    };
    const handleCancelReservation = () => {
      isProcessing.value = true;
      showCancelDialog.value = false;
      router.delete(route("app.organizations.reservations.out.destroy", { reservation: props.reservation.id }), {
        onFinish: () => {
          isProcessing.value = false;
        }
      });
    };
    const removeItem = (itemId) => {
      if (!confirm("Voulez-vous vraiment retirer cet équipement de la réservation ?")) return;
      router.delete(route("app.organizations.reservations.out.items.destroy", {
        reservation: props.reservation.id,
        item: itemId
      }));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Réservation du " + __props.reservation.start_date + " au " + __props.reservation.end_date
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8"${_scopeId}><div class="bg-white rounded-lg shadow-sm p-6"${_scopeId}><div class="mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              variant: "ghost",
              class: "gap-2",
              onClick: ($event) => unref(router).visit(_ctx.route("app.organizations.reservations.out.index"))
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ArrowLeftIcon), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                  _push3(` Retour aux réservations `);
                } else {
                  return [
                    createVNode(unref(ArrowLeftIcon), { class: "h-4 w-4" }),
                    createTextVNode(" Retour aux réservations ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"${_scopeId}><div class="lg:col-span-2 space-y-6"${_scopeId}><div class="mb-6"${_scopeId}><h1 class="text-2xl sm:text-3xl font-bold text-gray-900"${_scopeId}> Réservation du ${ssrInterpolate(__props.reservation.start_date)} au ${ssrInterpolate(__props.reservation.end_date)}</h1><div class="flex items-center gap-2 mt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(BuildingIcon), { class: "h-4 w-4 text-gray-500" }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-lg sm:text-xl font-semibold text-gray-600"${_scopeId}>${ssrInterpolate(__props.reservation.to_organization.name)}</h2></div></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "flex items-center justify-between" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), { class: "text-lg" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Gestion de la réservation`);
                            } else {
                              return [
                                createTextVNode("Gestion de la réservation")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), {
                          class: `${__props.reservation.status_color}`
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(__props.reservation.status_label)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(__props.reservation.status_label), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), { class: "text-lg" }, {
                            default: withCtx(() => [
                              createTextVNode("Gestion de la réservation")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$6), {
                            class: `${__props.reservation.status_color}`
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.reservation.status_label), 1)
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$7), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-4"${_scopeId3}>`);
                        if (__props.reservation.status === "pending") {
                          _push4(`<div class="space-y-4"${_scopeId3}><div class="flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(ClockIcon), { class: "h-5 w-5 text-yellow-600" }, null, _parent4, _scopeId3));
                          _push4(`<div class="flex-1"${_scopeId3}><h3 class="font-medium text-yellow-800"${_scopeId3}>Réservation en attente</h3><p class="text-sm text-yellow-700"${_scopeId3}>Cette réservation attend votre validation</p><p class="text-sm text-yellow-700"${_scopeId3}>Vous avez ${ssrInterpolate(__props.reservation.deadline_for_human)} pour valider ou refuser la réservation. Au delà de ce délai, la réservation sera automatiquement annulée.</p></div></div><div class="flex flex-col sm:flex-row gap-3"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$2), {
                            onClick: confirmReservation,
                            class: "flex-1 bg-green-600 hover:bg-green-700 text-white",
                            disabled: isProcessing.value
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(CheckIcon), { class: "h-4 w-4 mr-2" }, null, _parent5, _scopeId4));
                                if (isProcessing.value) {
                                  _push5(`<span${_scopeId4}>Traitement...</span>`);
                                } else {
                                  _push5(`<span${_scopeId4}>Accepter la réservation</span>`);
                                }
                              } else {
                                return [
                                  createVNode(unref(CheckIcon), { class: "h-4 w-4 mr-2" }),
                                  isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Accepter la réservation"))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2), {
                            onClick: rejectReservation,
                            variant: "destructive",
                            class: "flex-1",
                            disabled: isProcessing.value
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(XIcon), { class: "h-4 w-4 mr-2" }, null, _parent5, _scopeId4));
                                if (isProcessing.value) {
                                  _push5(`<span${_scopeId4}>Traitement...</span>`);
                                } else {
                                  _push5(`<span${_scopeId4}>Refuser la réservation</span>`);
                                }
                              } else {
                                return [
                                  createVNode(unref(XIcon), { class: "h-4 w-4 mr-2" }),
                                  isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Refuser la réservation"))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        } else if (__props.reservation.status === "confirmed") {
                          _push4(`<div class="space-y-4"${_scopeId3}><div class="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-green-600" }, null, _parent4, _scopeId3));
                          _push4(`<div class="flex-1"${_scopeId3}><h3 class="font-medium text-green-800"${_scopeId3}>Réservation confirmée</h3><p class="text-sm text-green-700"${_scopeId3}>Cette réservation a été acceptée</p></div></div><div class="flex flex-col sm:flex-row gap-3"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$2), {
                            onClick: completeReservation,
                            class: "flex-1 bg-blue-600 hover:bg-blue-700 text-white",
                            disabled: isProcessing.value
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-4 w-4 mr-2" }, null, _parent5, _scopeId4));
                                if (isProcessing.value) {
                                  _push5(`<span${_scopeId4}>Traitement...</span>`);
                                } else {
                                  _push5(`<span${_scopeId4}>Marquer comme terminée</span>`);
                                }
                              } else {
                                return [
                                  createVNode(unref(CheckCircleIcon), { class: "h-4 w-4 mr-2" }),
                                  isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Marquer comme terminée"))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2), {
                            onClick: cancelReservation,
                            variant: "outline",
                            class: "flex-1 border-red-300 text-red-700 hover:bg-red-50",
                            disabled: isProcessing.value
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(XIcon), { class: "h-4 w-4 mr-2" }, null, _parent5, _scopeId4));
                                if (isProcessing.value) {
                                  _push5(`<span${_scopeId4}>Traitement...</span>`);
                                } else {
                                  _push5(`<span${_scopeId4}>Annuler la réservation</span>`);
                                }
                              } else {
                                return [
                                  createVNode(unref(XIcon), { class: "h-4 w-4 mr-2" }),
                                  isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Annuler la réservation"))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        } else if (__props.reservation.status === "completed") {
                          _push4(`<div class="space-y-4"${_scopeId3}><div class="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-blue-600" }, null, _parent4, _scopeId3));
                          _push4(`<div class="flex-1"${_scopeId3}><h3 class="font-medium text-blue-800"${_scopeId3}>Réservation terminée</h3><p class="text-sm text-blue-700"${_scopeId3}>Cette réservation a été complétée avec succès</p></div></div></div>`);
                        } else if (__props.reservation.status === "cancelled") {
                          _push4(`<div class="space-y-4"${_scopeId3}><div class="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(XCircleIcon), { class: "h-5 w-5 text-red-600" }, null, _parent4, _scopeId3));
                          _push4(`<div class="flex-1"${_scopeId3}><h3 class="font-medium text-red-800"${_scopeId3}>Réservation annulée</h3><p class="text-sm text-red-700"${_scopeId3}>Cette réservation a été annulée</p></div></div></div>`);
                        } else if (__props.reservation.status === "rejected") {
                          _push4(`<div class="space-y-4"${_scopeId3}><div class="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(XCircleIcon), { class: "h-5 w-5 text-red-600" }, null, _parent4, _scopeId3));
                          _push4(`<div class="flex-1"${_scopeId3}><h3 class="font-medium text-red-800"${_scopeId3}>Réservation refusée</h3><p class="text-sm text-red-700"${_scopeId3}>Cette réservation a été refusée</p></div></div></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-4" }, [
                            __props.reservation.status === "pending" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "space-y-4"
                            }, [
                              createVNode("div", { class: "flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg" }, [
                                createVNode(unref(ClockIcon), { class: "h-5 w-5 text-yellow-600" }),
                                createVNode("div", { class: "flex-1" }, [
                                  createVNode("h3", { class: "font-medium text-yellow-800" }, "Réservation en attente"),
                                  createVNode("p", { class: "text-sm text-yellow-700" }, "Cette réservation attend votre validation"),
                                  createVNode("p", { class: "text-sm text-yellow-700" }, "Vous avez " + toDisplayString(__props.reservation.deadline_for_human) + " pour valider ou refuser la réservation. Au delà de ce délai, la réservation sera automatiquement annulée.", 1)
                                ])
                              ]),
                              createVNode("div", { class: "flex flex-col sm:flex-row gap-3" }, [
                                createVNode(unref(_sfc_main$2), {
                                  onClick: confirmReservation,
                                  class: "flex-1 bg-green-600 hover:bg-green-700 text-white",
                                  disabled: isProcessing.value
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(CheckIcon), { class: "h-4 w-4 mr-2" }),
                                    isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Accepter la réservation"))
                                  ]),
                                  _: 1
                                }, 8, ["disabled"]),
                                createVNode(unref(_sfc_main$2), {
                                  onClick: rejectReservation,
                                  variant: "destructive",
                                  class: "flex-1",
                                  disabled: isProcessing.value
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(XIcon), { class: "h-4 w-4 mr-2" }),
                                    isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Refuser la réservation"))
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ])
                            ])) : __props.reservation.status === "confirmed" ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "space-y-4"
                            }, [
                              createVNode("div", { class: "flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg" }, [
                                createVNode(unref(CheckCircleIcon), { class: "h-5 w-5 text-green-600" }),
                                createVNode("div", { class: "flex-1" }, [
                                  createVNode("h3", { class: "font-medium text-green-800" }, "Réservation confirmée"),
                                  createVNode("p", { class: "text-sm text-green-700" }, "Cette réservation a été acceptée")
                                ])
                              ]),
                              createVNode("div", { class: "flex flex-col sm:flex-row gap-3" }, [
                                createVNode(unref(_sfc_main$2), {
                                  onClick: completeReservation,
                                  class: "flex-1 bg-blue-600 hover:bg-blue-700 text-white",
                                  disabled: isProcessing.value
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(CheckCircleIcon), { class: "h-4 w-4 mr-2" }),
                                    isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Marquer comme terminée"))
                                  ]),
                                  _: 1
                                }, 8, ["disabled"]),
                                createVNode(unref(_sfc_main$2), {
                                  onClick: cancelReservation,
                                  variant: "outline",
                                  class: "flex-1 border-red-300 text-red-700 hover:bg-red-50",
                                  disabled: isProcessing.value
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(XIcon), { class: "h-4 w-4 mr-2" }),
                                    isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Annuler la réservation"))
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ])
                            ])) : __props.reservation.status === "completed" ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "space-y-4"
                            }, [
                              createVNode("div", { class: "flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg" }, [
                                createVNode(unref(CheckCircleIcon), { class: "h-5 w-5 text-blue-600" }),
                                createVNode("div", { class: "flex-1" }, [
                                  createVNode("h3", { class: "font-medium text-blue-800" }, "Réservation terminée"),
                                  createVNode("p", { class: "text-sm text-blue-700" }, "Cette réservation a été complétée avec succès")
                                ])
                              ])
                            ])) : __props.reservation.status === "cancelled" ? (openBlock(), createBlock("div", {
                              key: 3,
                              class: "space-y-4"
                            }, [
                              createVNode("div", { class: "flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg" }, [
                                createVNode(unref(XCircleIcon), { class: "h-5 w-5 text-red-600" }),
                                createVNode("div", { class: "flex-1" }, [
                                  createVNode("h3", { class: "font-medium text-red-800" }, "Réservation annulée"),
                                  createVNode("p", { class: "text-sm text-red-700" }, "Cette réservation a été annulée")
                                ])
                              ])
                            ])) : __props.reservation.status === "rejected" ? (openBlock(), createBlock("div", {
                              key: 4,
                              class: "space-y-4"
                            }, [
                              createVNode("div", { class: "flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg" }, [
                                createVNode(unref(XCircleIcon), { class: "h-5 w-5 text-red-600" }),
                                createVNode("div", { class: "flex-1" }, [
                                  createVNode("h3", { class: "font-medium text-red-800" }, "Réservation refusée"),
                                  createVNode("p", { class: "text-sm text-red-700" }, "Cette réservation a été refusée")
                                ])
                              ])
                            ])) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { class: "flex items-center justify-between" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), { class: "text-lg" }, {
                          default: withCtx(() => [
                            createTextVNode("Gestion de la réservation")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$6), {
                          class: `${__props.reservation.status_color}`
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.reservation.status_label), 1)
                          ]),
                          _: 1
                        }, 8, ["class"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$7), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-4" }, [
                          __props.reservation.status === "pending" ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "space-y-4"
                          }, [
                            createVNode("div", { class: "flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg" }, [
                              createVNode(unref(ClockIcon), { class: "h-5 w-5 text-yellow-600" }),
                              createVNode("div", { class: "flex-1" }, [
                                createVNode("h3", { class: "font-medium text-yellow-800" }, "Réservation en attente"),
                                createVNode("p", { class: "text-sm text-yellow-700" }, "Cette réservation attend votre validation"),
                                createVNode("p", { class: "text-sm text-yellow-700" }, "Vous avez " + toDisplayString(__props.reservation.deadline_for_human) + " pour valider ou refuser la réservation. Au delà de ce délai, la réservation sera automatiquement annulée.", 1)
                              ])
                            ]),
                            createVNode("div", { class: "flex flex-col sm:flex-row gap-3" }, [
                              createVNode(unref(_sfc_main$2), {
                                onClick: confirmReservation,
                                class: "flex-1 bg-green-600 hover:bg-green-700 text-white",
                                disabled: isProcessing.value
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(CheckIcon), { class: "h-4 w-4 mr-2" }),
                                  isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Accepter la réservation"))
                                ]),
                                _: 1
                              }, 8, ["disabled"]),
                              createVNode(unref(_sfc_main$2), {
                                onClick: rejectReservation,
                                variant: "destructive",
                                class: "flex-1",
                                disabled: isProcessing.value
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(XIcon), { class: "h-4 w-4 mr-2" }),
                                  isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Refuser la réservation"))
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ])
                          ])) : __props.reservation.status === "confirmed" ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "space-y-4"
                          }, [
                            createVNode("div", { class: "flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg" }, [
                              createVNode(unref(CheckCircleIcon), { class: "h-5 w-5 text-green-600" }),
                              createVNode("div", { class: "flex-1" }, [
                                createVNode("h3", { class: "font-medium text-green-800" }, "Réservation confirmée"),
                                createVNode("p", { class: "text-sm text-green-700" }, "Cette réservation a été acceptée")
                              ])
                            ]),
                            createVNode("div", { class: "flex flex-col sm:flex-row gap-3" }, [
                              createVNode(unref(_sfc_main$2), {
                                onClick: completeReservation,
                                class: "flex-1 bg-blue-600 hover:bg-blue-700 text-white",
                                disabled: isProcessing.value
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(CheckCircleIcon), { class: "h-4 w-4 mr-2" }),
                                  isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Marquer comme terminée"))
                                ]),
                                _: 1
                              }, 8, ["disabled"]),
                              createVNode(unref(_sfc_main$2), {
                                onClick: cancelReservation,
                                variant: "outline",
                                class: "flex-1 border-red-300 text-red-700 hover:bg-red-50",
                                disabled: isProcessing.value
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(XIcon), { class: "h-4 w-4 mr-2" }),
                                  isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Annuler la réservation"))
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ])
                          ])) : __props.reservation.status === "completed" ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "space-y-4"
                          }, [
                            createVNode("div", { class: "flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg" }, [
                              createVNode(unref(CheckCircleIcon), { class: "h-5 w-5 text-blue-600" }),
                              createVNode("div", { class: "flex-1" }, [
                                createVNode("h3", { class: "font-medium text-blue-800" }, "Réservation terminée"),
                                createVNode("p", { class: "text-sm text-blue-700" }, "Cette réservation a été complétée avec succès")
                              ])
                            ])
                          ])) : __props.reservation.status === "cancelled" ? (openBlock(), createBlock("div", {
                            key: 3,
                            class: "space-y-4"
                          }, [
                            createVNode("div", { class: "flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg" }, [
                              createVNode(unref(XCircleIcon), { class: "h-5 w-5 text-red-600" }),
                              createVNode("div", { class: "flex-1" }, [
                                createVNode("h3", { class: "font-medium text-red-800" }, "Réservation annulée"),
                                createVNode("p", { class: "text-sm text-red-700" }, "Cette réservation a été annulée")
                              ])
                            ])
                          ])) : __props.reservation.status === "rejected" ? (openBlock(), createBlock("div", {
                            key: 4,
                            class: "space-y-4"
                          }, [
                            createVNode("div", { class: "flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg" }, [
                              createVNode(unref(XCircleIcon), { class: "h-5 w-5 text-red-600" }),
                              createVNode("div", { class: "flex-1" }, [
                                createVNode("h3", { class: "font-medium text-red-800" }, "Réservation refusée"),
                                createVNode("p", { class: "text-sm text-red-700" }, "Cette réservation a été refusée")
                              ])
                            ])
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "mb-6 lg:col-span-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Message de ${ssrInterpolate(__props.reservation.from_organization.name)}`);
                            } else {
                              return [
                                createTextVNode("Message de " + toDisplayString(__props.reservation.from_organization.name), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createTextVNode("Message de " + toDisplayString(__props.reservation.from_organization.name), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$7), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-sm whitespace-pre-wrap"${_scopeId3}>${ssrInterpolate(__props.reservation.notes)}</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-sm whitespace-pre-wrap" }, toDisplayString(__props.reservation.notes), 1)
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
                            createTextVNode("Message de " + toDisplayString(__props.reservation.from_organization.name), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$7), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-sm whitespace-pre-wrap" }, toDisplayString(__props.reservation.notes), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "lg:col-span-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-between items-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Liste des équipements demandés`);
                            } else {
                              return [
                                createTextVNode("Liste des équipements demandés")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="text-right"${_scopeId3}><p class="text-sm text-gray-600"${_scopeId3}>Prix total</p><p class="text-xl font-bold text-gray-900"${_scopeId3}>${ssrInterpolate(__props.reservation.total)} €</p></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex justify-between items-center" }, [
                            createVNode(unref(_sfc_main$5), null, {
                              default: withCtx(() => [
                                createTextVNode("Liste des équipements demandés")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "text-right" }, [
                              createVNode("p", { class: "text-sm text-gray-600" }, "Prix total"),
                              createVNode("p", { class: "text-xl font-bold text-gray-900" }, toDisplayString(__props.reservation.total) + " €", 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$7), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$8), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$9), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$a), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(_sfc_main$b), null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Équipement`);
                                              } else {
                                                return [
                                                  createTextVNode("Équipement")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$b), null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Quantité`);
                                              } else {
                                                return [
                                                  createTextVNode("Quantité")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$b), null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Prix/jour`);
                                              } else {
                                                return [
                                                  createTextVNode("Prix/jour")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$b), null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Caution`);
                                              } else {
                                                return [
                                                  createTextVNode("Caution")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$b), null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Emplacement`);
                                              } else {
                                                return [
                                                  createTextVNode("Emplacement")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          if (__props.reservation.status === "pending") {
                                            _push7(ssrRenderComponent(unref(_sfc_main$b), { class: "w-[100px]" }, null, _parent7, _scopeId6));
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$b), null, {
                                              default: withCtx(() => [
                                                createTextVNode("Équipement")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$b), null, {
                                              default: withCtx(() => [
                                                createTextVNode("Quantité")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$b), null, {
                                              default: withCtx(() => [
                                                createTextVNode("Prix/jour")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$b), null, {
                                              default: withCtx(() => [
                                                createTextVNode("Caution")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$b), null, {
                                              default: withCtx(() => [
                                                createTextVNode("Emplacement")
                                              ]),
                                              _: 1
                                            }),
                                            __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$b), {
                                              key: 0,
                                              class: "w-[100px]"
                                            })) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$a), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$b), null, {
                                            default: withCtx(() => [
                                              createTextVNode("Équipement")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$b), null, {
                                            default: withCtx(() => [
                                              createTextVNode("Quantité")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$b), null, {
                                            default: withCtx(() => [
                                              createTextVNode("Prix/jour")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$b), null, {
                                            default: withCtx(() => [
                                              createTextVNode("Caution")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$b), null, {
                                            default: withCtx(() => [
                                              createTextVNode("Emplacement")
                                            ]),
                                            _: 1
                                          }),
                                          __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$b), {
                                            key: 0,
                                            class: "w-[100px]"
                                          })) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$c), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(__props.reservation.items, (item) => {
                                      _push6(ssrRenderComponent(unref(_sfc_main$a), {
                                        key: item.id
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(_sfc_main$d), { class: "font-medium" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(item.equipment.name)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(item.equipment.name), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$d), null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(unref(_sfc_main$6), {
                                                    variant: "outline",
                                                    class: "text-sm font-medium"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(item.quantity)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(item.quantity), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(unref(_sfc_main$6), {
                                                      variant: "outline",
                                                      class: "text-sm font-medium"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.quantity), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$d), null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(item.price)} €`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(item.price) + " €", 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$d), null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(item.equipment.deposit_amount)} €`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(item.equipment.deposit_amount) + " €", 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$d), null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(item.city)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(item.city), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            if (__props.reservation.status === "pending") {
                                              _push7(ssrRenderComponent(unref(_sfc_main$d), null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(unref(_sfc_main$2), {
                                                      variant: "ghost",
                                                      size: "icon",
                                                      class: "text-destructive hover:text-destructive/90",
                                                      onClick: ($event) => removeItem(item.id)
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(unref(Trash2Icon), { class: "h-4 w-4" }, null, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(unref(Trash2Icon), { class: "h-4 w-4" })
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(unref(_sfc_main$2), {
                                                        variant: "ghost",
                                                        size: "icon",
                                                        class: "text-destructive hover:text-destructive/90",
                                                        onClick: ($event) => removeItem(item.id)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(unref(Trash2Icon), { class: "h-4 w-4" })
                                                        ]),
                                                        _: 1
                                                      }, 8, ["onClick"])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createVNode(unref(_sfc_main$d), { class: "font-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.equipment.name), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$d), null, {
                                                default: withCtx(() => [
                                                  createVNode(unref(_sfc_main$6), {
                                                    variant: "outline",
                                                    class: "text-sm font-medium"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.quantity), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$d), null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.price) + " €", 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$d), null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.equipment.deposit_amount) + " €", 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$d), null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.city), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$d), { key: 0 }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(_sfc_main$2), {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    class: "text-destructive hover:text-destructive/90",
                                                    onClick: ($event) => removeItem(item.id)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(Trash2Icon), { class: "h-4 w-4" })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick"])
                                                ]),
                                                _: 2
                                              }, 1024)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.reservation.items, (item) => {
                                        return openBlock(), createBlock(unref(_sfc_main$a), {
                                          key: item.id
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$d), { class: "font-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.equipment.name), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$d), null, {
                                              default: withCtx(() => [
                                                createVNode(unref(_sfc_main$6), {
                                                  variant: "outline",
                                                  class: "text-sm font-medium"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.quantity), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$d), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.price) + " €", 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$d), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.equipment.deposit_amount) + " €", 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$d), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.city), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$d), { key: 0 }, {
                                              default: withCtx(() => [
                                                createVNode(unref(_sfc_main$2), {
                                                  variant: "ghost",
                                                  size: "icon",
                                                  class: "text-destructive hover:text-destructive/90",
                                                  onClick: ($event) => removeItem(item.id)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Trash2Icon), { class: "h-4 w-4" })
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])
                                              ]),
                                              _: 2
                                            }, 1024)) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$9), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$a), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$b), null, {
                                          default: withCtx(() => [
                                            createTextVNode("Équipement")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$b), null, {
                                          default: withCtx(() => [
                                            createTextVNode("Quantité")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$b), null, {
                                          default: withCtx(() => [
                                            createTextVNode("Prix/jour")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$b), null, {
                                          default: withCtx(() => [
                                            createTextVNode("Caution")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$b), null, {
                                          default: withCtx(() => [
                                            createTextVNode("Emplacement")
                                          ]),
                                          _: 1
                                        }),
                                        __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$b), {
                                          key: 0,
                                          class: "w-[100px]"
                                        })) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$c), null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.reservation.items, (item) => {
                                      return openBlock(), createBlock(unref(_sfc_main$a), {
                                        key: item.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$d), { class: "font-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.equipment.name), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$d), null, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$6), {
                                                variant: "outline",
                                                class: "text-sm font-medium"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.quantity), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$d), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.price) + " €", 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$d), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.equipment.deposit_amount) + " €", 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$d), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.city), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$d), { key: 0 }, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$2), {
                                                variant: "ghost",
                                                size: "icon",
                                                class: "text-destructive hover:text-destructive/90",
                                                onClick: ($event) => removeItem(item.id)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Trash2Icon), { class: "h-4 w-4" })
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024)) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$8), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$9), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$a), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$b), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Équipement")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$b), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Quantité")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$b), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Prix/jour")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$b), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Caution")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$b), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Emplacement")
                                        ]),
                                        _: 1
                                      }),
                                      __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$b), {
                                        key: 0,
                                        class: "w-[100px]"
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$c), null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.reservation.items, (item) => {
                                    return openBlock(), createBlock(unref(_sfc_main$a), {
                                      key: item.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$d), { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.equipment.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$d), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$6), {
                                              variant: "outline",
                                              class: "text-sm font-medium"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.quantity), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$d), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.price) + " €", 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$d), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.equipment.deposit_amount) + " €", 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$d), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.city), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$d), { key: 0 }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$2), {
                                              variant: "ghost",
                                              size: "icon",
                                              class: "text-destructive hover:text-destructive/90",
                                              onClick: ($event) => removeItem(item.id)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Trash2Icon), { class: "h-4 w-4" })
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between items-center" }, [
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createTextVNode("Liste des équipements demandés")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "text-right" }, [
                            createVNode("p", { class: "text-sm text-gray-600" }, "Prix total"),
                            createVNode("p", { class: "text-xl font-bold text-gray-900" }, toDisplayString(__props.reservation.total) + " €", 1)
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$7), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$8), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$9), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$a), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$b), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Équipement")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$b), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Quantité")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$b), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Prix/jour")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$b), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Caution")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$b), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Emplacement")
                                      ]),
                                      _: 1
                                    }),
                                    __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$b), {
                                      key: 0,
                                      class: "w-[100px]"
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$c), null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.reservation.items, (item) => {
                                  return openBlock(), createBlock(unref(_sfc_main$a), {
                                    key: item.id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$d), { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.equipment.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(unref(_sfc_main$d), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$6), {
                                            variant: "outline",
                                            class: "text-sm font-medium"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.quantity), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(unref(_sfc_main$d), null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.price) + " €", 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(unref(_sfc_main$d), null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.equipment.deposit_amount) + " €", 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(unref(_sfc_main$d), null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.city), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$d), { key: 0 }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$2), {
                                            variant: "ghost",
                                            size: "icon",
                                            class: "text-destructive hover:text-destructive/90",
                                            onClick: ($event) => removeItem(item.id)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Trash2Icon), { class: "h-4 w-4" })
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
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
            _push2(`</div><div class="lg:col-span-1 space-y-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), { class: "text-lg flex items-center gap-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(CalendarIcon), { class: "h-5 w-5 text-primary" }, null, _parent5, _scopeId4));
                              _push5(` Détails de la réservation `);
                            } else {
                              return [
                                createVNode(unref(CalendarIcon), { class: "h-5 w-5 text-primary" }),
                                createTextVNode(" Détails de la réservation ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), { class: "text-lg flex items-center gap-2" }, {
                            default: withCtx(() => [
                              createVNode(unref(CalendarIcon), { class: "h-5 w-5 text-primary" }),
                              createTextVNode(" Détails de la réservation ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$7), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<ul class="divide-y divide-gray-100"${_scopeId3}><li class="py-3 flex items-center gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(CalendarIcon), { class: "h-5 w-5 text-gray-500" }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><span class="block text-xs text-gray-500"${_scopeId3}>Récupération</span><span class="font-medium text-gray-900"${_scopeId3}>${ssrInterpolate(__props.reservation.start_date)}</span></div></li><li class="py-3 flex items-center gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(CalendarIcon), { class: "h-5 w-5 text-gray-500" }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><span class="block text-xs text-gray-500"${_scopeId3}>Retour</span><span class="font-medium text-gray-900"${_scopeId3}>${ssrInterpolate(__props.reservation.end_date)}</span></div></li><li class="py-3 flex items-center gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(ClockIcon), { class: "h-5 w-5 text-gray-500" }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><span class="block text-xs text-gray-500"${_scopeId3}>Durée</span><span class="font-medium text-gray-900"${_scopeId3}>${ssrInterpolate(__props.reservation.duration)} ${ssrInterpolate(__props.reservation.duration > 1 ? "jours" : "jour")}</span></div></li><li class="py-3 flex items-center gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(BuildingIcon), { class: "h-5 w-5 text-gray-500" }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><span class="block text-xs text-gray-500"${_scopeId3}>Organisation prêteuse</span><span class="font-medium text-gray-900"${_scopeId3}>${ssrInterpolate(__props.reservation.from_organization.name)}</span></div></li><li class="py-3 flex items-center gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(PlusIcon), { class: "h-5 w-5 text-gray-500" }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><span class="block text-xs text-gray-500"${_scopeId3}>Créée le</span><span class="font-medium text-gray-900"${_scopeId3}>${ssrInterpolate(__props.reservation.created_at)}</span></div></li><li class="py-3 flex items-center gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(PencilIcon), { class: "h-5 w-5 text-gray-500" }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><span class="block text-xs text-gray-500"${_scopeId3}>Dernière mise à jour</span><span class="font-medium text-gray-900"${_scopeId3}>${ssrInterpolate(__props.reservation.updated_at)}</span></div></li></ul>`);
                      } else {
                        return [
                          createVNode("ul", { class: "divide-y divide-gray-100" }, [
                            createVNode("li", { class: "py-3 flex items-center gap-3" }, [
                              createVNode(unref(CalendarIcon), { class: "h-5 w-5 text-gray-500" }),
                              createVNode("div", null, [
                                createVNode("span", { class: "block text-xs text-gray-500" }, "Récupération"),
                                createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(__props.reservation.start_date), 1)
                              ])
                            ]),
                            createVNode("li", { class: "py-3 flex items-center gap-3" }, [
                              createVNode(unref(CalendarIcon), { class: "h-5 w-5 text-gray-500" }),
                              createVNode("div", null, [
                                createVNode("span", { class: "block text-xs text-gray-500" }, "Retour"),
                                createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(__props.reservation.end_date), 1)
                              ])
                            ]),
                            createVNode("li", { class: "py-3 flex items-center gap-3" }, [
                              createVNode(unref(ClockIcon), { class: "h-5 w-5 text-gray-500" }),
                              createVNode("div", null, [
                                createVNode("span", { class: "block text-xs text-gray-500" }, "Durée"),
                                createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(__props.reservation.duration) + " " + toDisplayString(__props.reservation.duration > 1 ? "jours" : "jour"), 1)
                              ])
                            ]),
                            createVNode("li", { class: "py-3 flex items-center gap-3" }, [
                              createVNode(unref(BuildingIcon), { class: "h-5 w-5 text-gray-500" }),
                              createVNode("div", null, [
                                createVNode("span", { class: "block text-xs text-gray-500" }, "Organisation prêteuse"),
                                createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(__props.reservation.from_organization.name), 1)
                              ])
                            ]),
                            createVNode("li", { class: "py-3 flex items-center gap-3" }, [
                              createVNode(unref(PlusIcon), { class: "h-5 w-5 text-gray-500" }),
                              createVNode("div", null, [
                                createVNode("span", { class: "block text-xs text-gray-500" }, "Créée le"),
                                createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(__props.reservation.created_at), 1)
                              ])
                            ]),
                            createVNode("li", { class: "py-3 flex items-center gap-3" }, [
                              createVNode(unref(PencilIcon), { class: "h-5 w-5 text-gray-500" }),
                              createVNode("div", null, [
                                createVNode("span", { class: "block text-xs text-gray-500" }, "Dernière mise à jour"),
                                createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(__props.reservation.updated_at), 1)
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), { class: "text-lg flex items-center gap-2" }, {
                          default: withCtx(() => [
                            createVNode(unref(CalendarIcon), { class: "h-5 w-5 text-primary" }),
                            createTextVNode(" Détails de la réservation ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$7), null, {
                      default: withCtx(() => [
                        createVNode("ul", { class: "divide-y divide-gray-100" }, [
                          createVNode("li", { class: "py-3 flex items-center gap-3" }, [
                            createVNode(unref(CalendarIcon), { class: "h-5 w-5 text-gray-500" }),
                            createVNode("div", null, [
                              createVNode("span", { class: "block text-xs text-gray-500" }, "Récupération"),
                              createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(__props.reservation.start_date), 1)
                            ])
                          ]),
                          createVNode("li", { class: "py-3 flex items-center gap-3" }, [
                            createVNode(unref(CalendarIcon), { class: "h-5 w-5 text-gray-500" }),
                            createVNode("div", null, [
                              createVNode("span", { class: "block text-xs text-gray-500" }, "Retour"),
                              createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(__props.reservation.end_date), 1)
                            ])
                          ]),
                          createVNode("li", { class: "py-3 flex items-center gap-3" }, [
                            createVNode(unref(ClockIcon), { class: "h-5 w-5 text-gray-500" }),
                            createVNode("div", null, [
                              createVNode("span", { class: "block text-xs text-gray-500" }, "Durée"),
                              createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(__props.reservation.duration) + " " + toDisplayString(__props.reservation.duration > 1 ? "jours" : "jour"), 1)
                            ])
                          ]),
                          createVNode("li", { class: "py-3 flex items-center gap-3" }, [
                            createVNode(unref(BuildingIcon), { class: "h-5 w-5 text-gray-500" }),
                            createVNode("div", null, [
                              createVNode("span", { class: "block text-xs text-gray-500" }, "Organisation prêteuse"),
                              createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(__props.reservation.from_organization.name), 1)
                            ])
                          ]),
                          createVNode("li", { class: "py-3 flex items-center gap-3" }, [
                            createVNode(unref(PlusIcon), { class: "h-5 w-5 text-gray-500" }),
                            createVNode("div", null, [
                              createVNode("span", { class: "block text-xs text-gray-500" }, "Créée le"),
                              createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(__props.reservation.created_at), 1)
                            ])
                          ]),
                          createVNode("li", { class: "py-3 flex items-center gap-3" }, [
                            createVNode(unref(PencilIcon), { class: "h-5 w-5 text-gray-500" }),
                            createVNode("div", null, [
                              createVNode("span", { class: "block text-xs text-gray-500" }, "Dernière mise à jour"),
                              createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(__props.reservation.updated_at), 1)
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), { class: "text-lg" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Contact emprunteur`);
                            } else {
                              return [
                                createTextVNode("Contact emprunteur")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), { class: "text-lg" }, {
                            default: withCtx(() => [
                              createTextVNode("Contact emprunteur")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$7), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="grid grid-cols-1 gap-6"${_scopeId3}><div class="flex items-start gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(UserIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><h3 class="text-sm font-medium text-gray-500"${_scopeId3}>Nom</h3><p class="text-gray-900"${_scopeId3}>${ssrInterpolate(__props.reservation.user.name)}</p></div></div><div class="flex items-start gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(MailIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><h3 class="text-sm font-medium text-gray-500"${_scopeId3}>Email</h3><p class="text-gray-900"${_scopeId3}>${ssrInterpolate(__props.reservation.user.email)}</p></div></div><div class="flex items-start gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(PhoneIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><h3 class="text-sm font-medium text-gray-500"${_scopeId3}>Téléphone</h3><p class="text-gray-900"${_scopeId3}>${ssrInterpolate(__props.reservation.user.phone || "Non renseigné")}</p></div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "grid grid-cols-1 gap-6" }, [
                            createVNode("div", { class: "flex items-start gap-3" }, [
                              createVNode(unref(UserIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                              createVNode("div", null, [
                                createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Nom"),
                                createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.user.name), 1)
                              ])
                            ]),
                            createVNode("div", { class: "flex items-start gap-3" }, [
                              createVNode(unref(MailIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                              createVNode("div", null, [
                                createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Email"),
                                createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.user.email), 1)
                              ])
                            ]),
                            createVNode("div", { class: "flex items-start gap-3" }, [
                              createVNode(unref(PhoneIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                              createVNode("div", null, [
                                createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Téléphone"),
                                createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.user.phone || "Non renseigné"), 1)
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), { class: "text-lg" }, {
                          default: withCtx(() => [
                            createTextVNode("Contact emprunteur")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$7), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "grid grid-cols-1 gap-6" }, [
                          createVNode("div", { class: "flex items-start gap-3" }, [
                            createVNode(unref(UserIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                            createVNode("div", null, [
                              createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Nom"),
                              createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.user.name), 1)
                            ])
                          ]),
                          createVNode("div", { class: "flex items-start gap-3" }, [
                            createVNode(unref(MailIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                            createVNode("div", null, [
                              createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Email"),
                              createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.user.email), 1)
                            ])
                          ]),
                          createVNode("div", { class: "flex items-start gap-3" }, [
                            createVNode(unref(PhoneIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                            createVNode("div", null, [
                              createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Téléphone"),
                              createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.user.phone || "Non renseigné"), 1)
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$e), {
              open: showConfirmDialog.value,
              "onUpdate:open": ($event) => showConfirmDialog.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$f), { class: "sm:max-w-md" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$g), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(CheckIcon), { class: "h-5 w-5 text-green-600" }, null, _parent6, _scopeId5));
                                    _push6(` Confirmer la réservation `);
                                  } else {
                                    return [
                                      createVNode(unref(CheckIcon), { class: "h-5 w-5 text-green-600" }),
                                      createTextVNode(" Confirmer la réservation ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$i), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Vous êtes sur le point d&#39;accepter cette réservation. Voici ce qui va se passer : `);
                                  } else {
                                    return [
                                      createTextVNode(" Vous êtes sur le point d'accepter cette réservation. Voici ce qui va se passer : ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(CheckIcon), { class: "h-5 w-5 text-green-600" }),
                                    createTextVNode(" Confirmer la réservation ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$i), null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Vous êtes sur le point d'accepter cette réservation. Voici ce qui va se passer : ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="space-y-4"${_scopeId3}><div class="bg-green-50 border border-green-200 rounded-lg p-4"${_scopeId3}><h4 class="font-medium text-green-800 mb-2"${_scopeId3}>Prochaines étapes :</h4><ul class="text-sm text-green-700 space-y-1"${_scopeId3}><li${_scopeId3}>• Un email de confirmation sera envoyé à l&#39;emprunteur</li><li${_scopeId3}>• Vous devez prendre contact pour organiser les retraits</li><li${_scopeId3}>• Coordonner les modalités de paiement et de caution</li><li${_scopeId3}>• Définir les conditions de retour du matériel</li></ul></div><div class="bg-blue-50 border border-blue-200 rounded-lg p-4"${_scopeId3}><h4 class="font-medium text-blue-800 mb-2"${_scopeId3}>Informations importantes :</h4><p class="text-sm text-blue-700"${_scopeId3}> La réservation sera marquée comme &quot;confirmée&quot; et vous pourrez ensuite la marquer comme &quot;terminée&quot; une fois le matériel retourné. </p></div></div>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$j), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$2), {
                                variant: "outline",
                                onClick: ($event) => showConfirmDialog.value = false,
                                disabled: isProcessing.value
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
                                onClick: handleConfirmReservation,
                                disabled: isProcessing.value,
                                class: "bg-green-600 hover:bg-green-700"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(CheckIcon), { class: "h-4 w-4 mr-2" }, null, _parent6, _scopeId5));
                                    if (isProcessing.value) {
                                      _push6(`<span${_scopeId5}>Traitement...</span>`);
                                    } else {
                                      _push6(`<span${_scopeId5}>Confirmer la réservation</span>`);
                                    }
                                  } else {
                                    return [
                                      createVNode(unref(CheckIcon), { class: "h-4 w-4 mr-2" }),
                                      isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Confirmer la réservation"))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$2), {
                                  variant: "outline",
                                  onClick: ($event) => showConfirmDialog.value = false,
                                  disabled: isProcessing.value
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Annuler ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled"]),
                                createVNode(unref(_sfc_main$2), {
                                  onClick: handleConfirmReservation,
                                  disabled: isProcessing.value,
                                  class: "bg-green-600 hover:bg-green-700"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(CheckIcon), { class: "h-4 w-4 mr-2" }),
                                    isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Confirmer la réservation"))
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
                          createVNode(unref(_sfc_main$g), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                                default: withCtx(() => [
                                  createVNode(unref(CheckIcon), { class: "h-5 w-5 text-green-600" }),
                                  createTextVNode(" Confirmer la réservation ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$i), null, {
                                default: withCtx(() => [
                                  createTextVNode(" Vous êtes sur le point d'accepter cette réservation. Voici ce qui va se passer : ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode("div", { class: "bg-green-50 border border-green-200 rounded-lg p-4" }, [
                              createVNode("h4", { class: "font-medium text-green-800 mb-2" }, "Prochaines étapes :"),
                              createVNode("ul", { class: "text-sm text-green-700 space-y-1" }, [
                                createVNode("li", null, "• Un email de confirmation sera envoyé à l'emprunteur"),
                                createVNode("li", null, "• Vous devez prendre contact pour organiser les retraits"),
                                createVNode("li", null, "• Coordonner les modalités de paiement et de caution"),
                                createVNode("li", null, "• Définir les conditions de retour du matériel")
                              ])
                            ]),
                            createVNode("div", { class: "bg-blue-50 border border-blue-200 rounded-lg p-4" }, [
                              createVNode("h4", { class: "font-medium text-blue-800 mb-2" }, "Informations importantes :"),
                              createVNode("p", { class: "text-sm text-blue-700" }, ' La réservation sera marquée comme "confirmée" et vous pourrez ensuite la marquer comme "terminée" une fois le matériel retourné. ')
                            ])
                          ]),
                          createVNode(unref(_sfc_main$j), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2), {
                                variant: "outline",
                                onClick: ($event) => showConfirmDialog.value = false,
                                disabled: isProcessing.value
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Annuler ")
                                ]),
                                _: 1
                              }, 8, ["onClick", "disabled"]),
                              createVNode(unref(_sfc_main$2), {
                                onClick: handleConfirmReservation,
                                disabled: isProcessing.value,
                                class: "bg-green-600 hover:bg-green-700"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(CheckIcon), { class: "h-4 w-4 mr-2" }),
                                  isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Confirmer la réservation"))
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
                    createVNode(unref(_sfc_main$f), { class: "sm:max-w-md" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$g), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                              default: withCtx(() => [
                                createVNode(unref(CheckIcon), { class: "h-5 w-5 text-green-600" }),
                                createTextVNode(" Confirmer la réservation ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$i), null, {
                              default: withCtx(() => [
                                createTextVNode(" Vous êtes sur le point d'accepter cette réservation. Voici ce qui va se passer : ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", { class: "bg-green-50 border border-green-200 rounded-lg p-4" }, [
                            createVNode("h4", { class: "font-medium text-green-800 mb-2" }, "Prochaines étapes :"),
                            createVNode("ul", { class: "text-sm text-green-700 space-y-1" }, [
                              createVNode("li", null, "• Un email de confirmation sera envoyé à l'emprunteur"),
                              createVNode("li", null, "• Vous devez prendre contact pour organiser les retraits"),
                              createVNode("li", null, "• Coordonner les modalités de paiement et de caution"),
                              createVNode("li", null, "• Définir les conditions de retour du matériel")
                            ])
                          ]),
                          createVNode("div", { class: "bg-blue-50 border border-blue-200 rounded-lg p-4" }, [
                            createVNode("h4", { class: "font-medium text-blue-800 mb-2" }, "Informations importantes :"),
                            createVNode("p", { class: "text-sm text-blue-700" }, ' La réservation sera marquée comme "confirmée" et vous pourrez ensuite la marquer comme "terminée" une fois le matériel retourné. ')
                          ])
                        ]),
                        createVNode(unref(_sfc_main$j), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$2), {
                              variant: "outline",
                              onClick: ($event) => showConfirmDialog.value = false,
                              disabled: isProcessing.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Annuler ")
                              ]),
                              _: 1
                            }, 8, ["onClick", "disabled"]),
                            createVNode(unref(_sfc_main$2), {
                              onClick: handleConfirmReservation,
                              disabled: isProcessing.value,
                              class: "bg-green-600 hover:bg-green-700"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(CheckIcon), { class: "h-4 w-4 mr-2" }),
                                isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Confirmer la réservation"))
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
            _push2(ssrRenderComponent(unref(_sfc_main$e), {
              open: showRejectDialog.value,
              "onUpdate:open": ($event) => showRejectDialog.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$f), { class: "sm:max-w-md" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$g), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(XIcon), { class: "h-5 w-5 text-red-600" }, null, _parent6, _scopeId5));
                                    _push6(` Refuser la réservation `);
                                  } else {
                                    return [
                                      createVNode(unref(XIcon), { class: "h-5 w-5 text-red-600" }),
                                      createTextVNode(" Refuser la réservation ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$i), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Vous êtes sur le point de refuser cette réservation. Voici ce qui va se passer : `);
                                  } else {
                                    return [
                                      createTextVNode(" Vous êtes sur le point de refuser cette réservation. Voici ce qui va se passer : ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(XIcon), { class: "h-5 w-5 text-red-600" }),
                                    createTextVNode(" Refuser la réservation ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$i), null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Vous êtes sur le point de refuser cette réservation. Voici ce qui va se passer : ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="space-y-4"${_scopeId3}><div class="bg-red-50 border border-red-200 rounded-lg p-4"${_scopeId3}><h4 class="font-medium text-red-800 mb-2"${_scopeId3}>Conséquences :</h4><ul class="text-sm text-red-700 space-y-1"${_scopeId3}><li${_scopeId3}>• Un email de refus sera envoyé à l&#39;emprunteur</li><li${_scopeId3}>• La réservation sera marquée comme &quot;refusée&quot;</li><li${_scopeId3}>• L&#39;emprunteur pourra chercher d&#39;autres options</li></ul></div><div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4"${_scopeId3}><h4 class="font-medium text-yellow-800 mb-2"${_scopeId3}>Recommandation :</h4><p class="text-sm text-yellow-700"${_scopeId3}> Si possible, contactez l&#39;emprunteur pour expliquer les raisons du refus et proposer des alternatives. </p></div></div>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$j), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$2), {
                                variant: "outline",
                                onClick: ($event) => showRejectDialog.value = false,
                                disabled: isProcessing.value
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
                                onClick: handleRejectReservation,
                                variant: "destructive",
                                disabled: isProcessing.value
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(XIcon), { class: "h-4 w-4 mr-2" }, null, _parent6, _scopeId5));
                                    if (isProcessing.value) {
                                      _push6(`<span${_scopeId5}>Traitement...</span>`);
                                    } else {
                                      _push6(`<span${_scopeId5}>Refuser la réservation</span>`);
                                    }
                                  } else {
                                    return [
                                      createVNode(unref(XIcon), { class: "h-4 w-4 mr-2" }),
                                      isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Refuser la réservation"))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$2), {
                                  variant: "outline",
                                  onClick: ($event) => showRejectDialog.value = false,
                                  disabled: isProcessing.value
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Annuler ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled"]),
                                createVNode(unref(_sfc_main$2), {
                                  onClick: handleRejectReservation,
                                  variant: "destructive",
                                  disabled: isProcessing.value
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(XIcon), { class: "h-4 w-4 mr-2" }),
                                    isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Refuser la réservation"))
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
                          createVNode(unref(_sfc_main$g), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                                default: withCtx(() => [
                                  createVNode(unref(XIcon), { class: "h-5 w-5 text-red-600" }),
                                  createTextVNode(" Refuser la réservation ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$i), null, {
                                default: withCtx(() => [
                                  createTextVNode(" Vous êtes sur le point de refuser cette réservation. Voici ce qui va se passer : ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode("div", { class: "bg-red-50 border border-red-200 rounded-lg p-4" }, [
                              createVNode("h4", { class: "font-medium text-red-800 mb-2" }, "Conséquences :"),
                              createVNode("ul", { class: "text-sm text-red-700 space-y-1" }, [
                                createVNode("li", null, "• Un email de refus sera envoyé à l'emprunteur"),
                                createVNode("li", null, '• La réservation sera marquée comme "refusée"'),
                                createVNode("li", null, "• L'emprunteur pourra chercher d'autres options")
                              ])
                            ]),
                            createVNode("div", { class: "bg-yellow-50 border border-yellow-200 rounded-lg p-4" }, [
                              createVNode("h4", { class: "font-medium text-yellow-800 mb-2" }, "Recommandation :"),
                              createVNode("p", { class: "text-sm text-yellow-700" }, " Si possible, contactez l'emprunteur pour expliquer les raisons du refus et proposer des alternatives. ")
                            ])
                          ]),
                          createVNode(unref(_sfc_main$j), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2), {
                                variant: "outline",
                                onClick: ($event) => showRejectDialog.value = false,
                                disabled: isProcessing.value
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Annuler ")
                                ]),
                                _: 1
                              }, 8, ["onClick", "disabled"]),
                              createVNode(unref(_sfc_main$2), {
                                onClick: handleRejectReservation,
                                variant: "destructive",
                                disabled: isProcessing.value
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(XIcon), { class: "h-4 w-4 mr-2" }),
                                  isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Refuser la réservation"))
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
                    createVNode(unref(_sfc_main$f), { class: "sm:max-w-md" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$g), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                              default: withCtx(() => [
                                createVNode(unref(XIcon), { class: "h-5 w-5 text-red-600" }),
                                createTextVNode(" Refuser la réservation ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$i), null, {
                              default: withCtx(() => [
                                createTextVNode(" Vous êtes sur le point de refuser cette réservation. Voici ce qui va se passer : ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", { class: "bg-red-50 border border-red-200 rounded-lg p-4" }, [
                            createVNode("h4", { class: "font-medium text-red-800 mb-2" }, "Conséquences :"),
                            createVNode("ul", { class: "text-sm text-red-700 space-y-1" }, [
                              createVNode("li", null, "• Un email de refus sera envoyé à l'emprunteur"),
                              createVNode("li", null, '• La réservation sera marquée comme "refusée"'),
                              createVNode("li", null, "• L'emprunteur pourra chercher d'autres options")
                            ])
                          ]),
                          createVNode("div", { class: "bg-yellow-50 border border-yellow-200 rounded-lg p-4" }, [
                            createVNode("h4", { class: "font-medium text-yellow-800 mb-2" }, "Recommandation :"),
                            createVNode("p", { class: "text-sm text-yellow-700" }, " Si possible, contactez l'emprunteur pour expliquer les raisons du refus et proposer des alternatives. ")
                          ])
                        ]),
                        createVNode(unref(_sfc_main$j), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$2), {
                              variant: "outline",
                              onClick: ($event) => showRejectDialog.value = false,
                              disabled: isProcessing.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Annuler ")
                              ]),
                              _: 1
                            }, 8, ["onClick", "disabled"]),
                            createVNode(unref(_sfc_main$2), {
                              onClick: handleRejectReservation,
                              variant: "destructive",
                              disabled: isProcessing.value
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(XIcon), { class: "h-4 w-4 mr-2" }),
                                isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Refuser la réservation"))
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
            _push2(ssrRenderComponent(unref(_sfc_main$e), {
              open: showCompleteDialog.value,
              "onUpdate:open": ($event) => showCompleteDialog.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$f), { class: "sm:max-w-md" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$g), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-blue-600" }, null, _parent6, _scopeId5));
                                    _push6(` Marquer comme terminée `);
                                  } else {
                                    return [
                                      createVNode(unref(CheckCircleIcon), { class: "h-5 w-5 text-blue-600" }),
                                      createTextVNode(" Marquer comme terminée ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$i), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Vous êtes sur le point de marquer cette réservation comme terminée. Voici ce qui va se passer : `);
                                  } else {
                                    return [
                                      createTextVNode(" Vous êtes sur le point de marquer cette réservation comme terminée. Voici ce qui va se passer : ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(CheckCircleIcon), { class: "h-5 w-5 text-blue-600" }),
                                    createTextVNode(" Marquer comme terminée ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$i), null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Vous êtes sur le point de marquer cette réservation comme terminée. Voici ce qui va se passer : ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="space-y-4"${_scopeId3}><div class="bg-blue-50 border border-blue-200 rounded-lg p-4"${_scopeId3}><h4 class="font-medium text-blue-800 mb-2"${_scopeId3}>Confirmation :</h4><ul class="text-sm text-blue-700 space-y-1"${_scopeId3}><li${_scopeId3}>• Le matériel a été retourné en bon état</li><li${_scopeId3}>• Les paiements ont été finalisés</li><li${_scopeId3}>• Un email de confirmation sera envoyé aux deux parties</li><li${_scopeId3}>• La réservation sera archivée</li></ul></div><div class="bg-green-50 border border-green-200 rounded-lg p-4"${_scopeId3}><h4 class="font-medium text-green-800 mb-2"${_scopeId3}>Important :</h4><p class="text-sm text-green-700"${_scopeId3}> Cette action ne peut être annulée. Assurez-vous que tous les aspects de la réservation sont bien finalisés. </p></div></div>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$j), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$2), {
                                variant: "outline",
                                onClick: ($event) => showCompleteDialog.value = false,
                                disabled: isProcessing.value
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
                                onClick: handleCompleteReservation,
                                disabled: isProcessing.value,
                                class: "bg-blue-600 hover:bg-blue-700"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-4 w-4 mr-2" }, null, _parent6, _scopeId5));
                                    if (isProcessing.value) {
                                      _push6(`<span${_scopeId5}>Traitement...</span>`);
                                    } else {
                                      _push6(`<span${_scopeId5}>Marquer comme terminée</span>`);
                                    }
                                  } else {
                                    return [
                                      createVNode(unref(CheckCircleIcon), { class: "h-4 w-4 mr-2" }),
                                      isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Marquer comme terminée"))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$2), {
                                  variant: "outline",
                                  onClick: ($event) => showCompleteDialog.value = false,
                                  disabled: isProcessing.value
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Annuler ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled"]),
                                createVNode(unref(_sfc_main$2), {
                                  onClick: handleCompleteReservation,
                                  disabled: isProcessing.value,
                                  class: "bg-blue-600 hover:bg-blue-700"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(CheckCircleIcon), { class: "h-4 w-4 mr-2" }),
                                    isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Marquer comme terminée"))
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
                          createVNode(unref(_sfc_main$g), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                                default: withCtx(() => [
                                  createVNode(unref(CheckCircleIcon), { class: "h-5 w-5 text-blue-600" }),
                                  createTextVNode(" Marquer comme terminée ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$i), null, {
                                default: withCtx(() => [
                                  createTextVNode(" Vous êtes sur le point de marquer cette réservation comme terminée. Voici ce qui va se passer : ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode("div", { class: "bg-blue-50 border border-blue-200 rounded-lg p-4" }, [
                              createVNode("h4", { class: "font-medium text-blue-800 mb-2" }, "Confirmation :"),
                              createVNode("ul", { class: "text-sm text-blue-700 space-y-1" }, [
                                createVNode("li", null, "• Le matériel a été retourné en bon état"),
                                createVNode("li", null, "• Les paiements ont été finalisés"),
                                createVNode("li", null, "• Un email de confirmation sera envoyé aux deux parties"),
                                createVNode("li", null, "• La réservation sera archivée")
                              ])
                            ]),
                            createVNode("div", { class: "bg-green-50 border border-green-200 rounded-lg p-4" }, [
                              createVNode("h4", { class: "font-medium text-green-800 mb-2" }, "Important :"),
                              createVNode("p", { class: "text-sm text-green-700" }, " Cette action ne peut être annulée. Assurez-vous que tous les aspects de la réservation sont bien finalisés. ")
                            ])
                          ]),
                          createVNode(unref(_sfc_main$j), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2), {
                                variant: "outline",
                                onClick: ($event) => showCompleteDialog.value = false,
                                disabled: isProcessing.value
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Annuler ")
                                ]),
                                _: 1
                              }, 8, ["onClick", "disabled"]),
                              createVNode(unref(_sfc_main$2), {
                                onClick: handleCompleteReservation,
                                disabled: isProcessing.value,
                                class: "bg-blue-600 hover:bg-blue-700"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(CheckCircleIcon), { class: "h-4 w-4 mr-2" }),
                                  isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Marquer comme terminée"))
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
                    createVNode(unref(_sfc_main$f), { class: "sm:max-w-md" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$g), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                              default: withCtx(() => [
                                createVNode(unref(CheckCircleIcon), { class: "h-5 w-5 text-blue-600" }),
                                createTextVNode(" Marquer comme terminée ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$i), null, {
                              default: withCtx(() => [
                                createTextVNode(" Vous êtes sur le point de marquer cette réservation comme terminée. Voici ce qui va se passer : ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", { class: "bg-blue-50 border border-blue-200 rounded-lg p-4" }, [
                            createVNode("h4", { class: "font-medium text-blue-800 mb-2" }, "Confirmation :"),
                            createVNode("ul", { class: "text-sm text-blue-700 space-y-1" }, [
                              createVNode("li", null, "• Le matériel a été retourné en bon état"),
                              createVNode("li", null, "• Les paiements ont été finalisés"),
                              createVNode("li", null, "• Un email de confirmation sera envoyé aux deux parties"),
                              createVNode("li", null, "• La réservation sera archivée")
                            ])
                          ]),
                          createVNode("div", { class: "bg-green-50 border border-green-200 rounded-lg p-4" }, [
                            createVNode("h4", { class: "font-medium text-green-800 mb-2" }, "Important :"),
                            createVNode("p", { class: "text-sm text-green-700" }, " Cette action ne peut être annulée. Assurez-vous que tous les aspects de la réservation sont bien finalisés. ")
                          ])
                        ]),
                        createVNode(unref(_sfc_main$j), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$2), {
                              variant: "outline",
                              onClick: ($event) => showCompleteDialog.value = false,
                              disabled: isProcessing.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Annuler ")
                              ]),
                              _: 1
                            }, 8, ["onClick", "disabled"]),
                            createVNode(unref(_sfc_main$2), {
                              onClick: handleCompleteReservation,
                              disabled: isProcessing.value,
                              class: "bg-blue-600 hover:bg-blue-700"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(CheckCircleIcon), { class: "h-4 w-4 mr-2" }),
                                isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Marquer comme terminée"))
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
            _push2(ssrRenderComponent(unref(_sfc_main$e), {
              open: showCancelDialog.value,
              "onUpdate:open": ($event) => showCancelDialog.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$f), { class: "sm:max-w-md" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$g), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(XCircleIcon), { class: "h-5 w-5 text-red-600" }, null, _parent6, _scopeId5));
                                    _push6(` Annuler la réservation `);
                                  } else {
                                    return [
                                      createVNode(unref(XCircleIcon), { class: "h-5 w-5 text-red-600" }),
                                      createTextVNode(" Annuler la réservation ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$i), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Vous êtes sur le point d&#39;annuler cette réservation. Voici ce qui va se passer : `);
                                  } else {
                                    return [
                                      createTextVNode(" Vous êtes sur le point d'annuler cette réservation. Voici ce qui va se passer : ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(XCircleIcon), { class: "h-5 w-5 text-red-600" }),
                                    createTextVNode(" Annuler la réservation ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$i), null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Vous êtes sur le point d'annuler cette réservation. Voici ce qui va se passer : ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="space-y-4"${_scopeId3}><div class="bg-red-50 border border-red-200 rounded-lg p-4"${_scopeId3}><h4 class="font-medium text-red-800 mb-2"${_scopeId3}>Conséquences :</h4><ul class="text-sm text-red-700 space-y-1"${_scopeId3}><li${_scopeId3}>• Un email d&#39;annulation sera envoyé à l&#39;emprunteur</li><li${_scopeId3}>• La réservation sera marquée comme &quot;annulée&quot;</li><li${_scopeId3}>• Le matériel sera remis à disposition</li></ul></div><div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4"${_scopeId3}><h4 class="font-medium text-yellow-800 mb-2"${_scopeId3}>Recommandation :</h4><p class="text-sm text-yellow-700"${_scopeId3}> Contactez l&#39;emprunteur pour expliquer les raisons de l&#39;annulation et proposer des solutions alternatives si possible. </p></div></div>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$j), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$2), {
                                variant: "outline",
                                onClick: ($event) => showCancelDialog.value = false,
                                disabled: isProcessing.value
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Garder la réservation `);
                                  } else {
                                    return [
                                      createTextVNode(" Garder la réservation ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$2), {
                                onClick: handleCancelReservation,
                                variant: "destructive",
                                disabled: isProcessing.value
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(XCircleIcon), { class: "h-4 w-4 mr-2" }, null, _parent6, _scopeId5));
                                    if (isProcessing.value) {
                                      _push6(`<span${_scopeId5}>Traitement...</span>`);
                                    } else {
                                      _push6(`<span${_scopeId5}>Annuler la réservation</span>`);
                                    }
                                  } else {
                                    return [
                                      createVNode(unref(XCircleIcon), { class: "h-4 w-4 mr-2" }),
                                      isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Annuler la réservation"))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$2), {
                                  variant: "outline",
                                  onClick: ($event) => showCancelDialog.value = false,
                                  disabled: isProcessing.value
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Garder la réservation ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled"]),
                                createVNode(unref(_sfc_main$2), {
                                  onClick: handleCancelReservation,
                                  variant: "destructive",
                                  disabled: isProcessing.value
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(XCircleIcon), { class: "h-4 w-4 mr-2" }),
                                    isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Annuler la réservation"))
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
                          createVNode(unref(_sfc_main$g), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                                default: withCtx(() => [
                                  createVNode(unref(XCircleIcon), { class: "h-5 w-5 text-red-600" }),
                                  createTextVNode(" Annuler la réservation ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$i), null, {
                                default: withCtx(() => [
                                  createTextVNode(" Vous êtes sur le point d'annuler cette réservation. Voici ce qui va se passer : ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode("div", { class: "bg-red-50 border border-red-200 rounded-lg p-4" }, [
                              createVNode("h4", { class: "font-medium text-red-800 mb-2" }, "Conséquences :"),
                              createVNode("ul", { class: "text-sm text-red-700 space-y-1" }, [
                                createVNode("li", null, "• Un email d'annulation sera envoyé à l'emprunteur"),
                                createVNode("li", null, '• La réservation sera marquée comme "annulée"'),
                                createVNode("li", null, "• Le matériel sera remis à disposition")
                              ])
                            ]),
                            createVNode("div", { class: "bg-yellow-50 border border-yellow-200 rounded-lg p-4" }, [
                              createVNode("h4", { class: "font-medium text-yellow-800 mb-2" }, "Recommandation :"),
                              createVNode("p", { class: "text-sm text-yellow-700" }, " Contactez l'emprunteur pour expliquer les raisons de l'annulation et proposer des solutions alternatives si possible. ")
                            ])
                          ]),
                          createVNode(unref(_sfc_main$j), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2), {
                                variant: "outline",
                                onClick: ($event) => showCancelDialog.value = false,
                                disabled: isProcessing.value
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Garder la réservation ")
                                ]),
                                _: 1
                              }, 8, ["onClick", "disabled"]),
                              createVNode(unref(_sfc_main$2), {
                                onClick: handleCancelReservation,
                                variant: "destructive",
                                disabled: isProcessing.value
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(XCircleIcon), { class: "h-4 w-4 mr-2" }),
                                  isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Annuler la réservation"))
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
                    createVNode(unref(_sfc_main$f), { class: "sm:max-w-md" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$g), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                              default: withCtx(() => [
                                createVNode(unref(XCircleIcon), { class: "h-5 w-5 text-red-600" }),
                                createTextVNode(" Annuler la réservation ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$i), null, {
                              default: withCtx(() => [
                                createTextVNode(" Vous êtes sur le point d'annuler cette réservation. Voici ce qui va se passer : ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", { class: "bg-red-50 border border-red-200 rounded-lg p-4" }, [
                            createVNode("h4", { class: "font-medium text-red-800 mb-2" }, "Conséquences :"),
                            createVNode("ul", { class: "text-sm text-red-700 space-y-1" }, [
                              createVNode("li", null, "• Un email d'annulation sera envoyé à l'emprunteur"),
                              createVNode("li", null, '• La réservation sera marquée comme "annulée"'),
                              createVNode("li", null, "• Le matériel sera remis à disposition")
                            ])
                          ]),
                          createVNode("div", { class: "bg-yellow-50 border border-yellow-200 rounded-lg p-4" }, [
                            createVNode("h4", { class: "font-medium text-yellow-800 mb-2" }, "Recommandation :"),
                            createVNode("p", { class: "text-sm text-yellow-700" }, " Contactez l'emprunteur pour expliquer les raisons de l'annulation et proposer des solutions alternatives si possible. ")
                          ])
                        ]),
                        createVNode(unref(_sfc_main$j), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$2), {
                              variant: "outline",
                              onClick: ($event) => showCancelDialog.value = false,
                              disabled: isProcessing.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Garder la réservation ")
                              ]),
                              _: 1
                            }, 8, ["onClick", "disabled"]),
                            createVNode(unref(_sfc_main$2), {
                              onClick: handleCancelReservation,
                              variant: "destructive",
                              disabled: isProcessing.value
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(XCircleIcon), { class: "h-4 w-4 mr-2" }),
                                isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Annuler la réservation"))
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
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8 py-8" }, [
                createVNode("div", { class: "bg-white rounded-lg shadow-sm p-6" }, [
                  createVNode("div", { class: "mb-6" }, [
                    createVNode(unref(_sfc_main$2), {
                      variant: "ghost",
                      class: "gap-2",
                      onClick: ($event) => unref(router).visit(_ctx.route("app.organizations.reservations.out.index"))
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ArrowLeftIcon), { class: "h-4 w-4" }),
                        createTextVNode(" Retour aux réservations ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, [
                    createVNode("div", { class: "lg:col-span-2 space-y-6" }, [
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("h1", { class: "text-2xl sm:text-3xl font-bold text-gray-900" }, " Réservation du " + toDisplayString(__props.reservation.start_date) + " au " + toDisplayString(__props.reservation.end_date), 1),
                        createVNode("div", { class: "flex items-center gap-2 mt-2" }, [
                          createVNode(unref(BuildingIcon), { class: "h-4 w-4 text-gray-500" }),
                          createVNode("h2", { class: "text-lg sm:text-xl font-semibold text-gray-600" }, toDisplayString(__props.reservation.to_organization.name), 1)
                        ])
                      ]),
                      createVNode(unref(_sfc_main$3), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), { class: "flex items-center justify-between" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$5), { class: "text-lg" }, {
                                default: withCtx(() => [
                                  createTextVNode("Gestion de la réservation")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$6), {
                                class: `${__props.reservation.status_color}`
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__props.reservation.status_label), 1)
                                ]),
                                _: 1
                              }, 8, ["class"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "space-y-4" }, [
                                __props.reservation.status === "pending" ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "space-y-4"
                                }, [
                                  createVNode("div", { class: "flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg" }, [
                                    createVNode(unref(ClockIcon), { class: "h-5 w-5 text-yellow-600" }),
                                    createVNode("div", { class: "flex-1" }, [
                                      createVNode("h3", { class: "font-medium text-yellow-800" }, "Réservation en attente"),
                                      createVNode("p", { class: "text-sm text-yellow-700" }, "Cette réservation attend votre validation"),
                                      createVNode("p", { class: "text-sm text-yellow-700" }, "Vous avez " + toDisplayString(__props.reservation.deadline_for_human) + " pour valider ou refuser la réservation. Au delà de ce délai, la réservation sera automatiquement annulée.", 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex flex-col sm:flex-row gap-3" }, [
                                    createVNode(unref(_sfc_main$2), {
                                      onClick: confirmReservation,
                                      class: "flex-1 bg-green-600 hover:bg-green-700 text-white",
                                      disabled: isProcessing.value
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(CheckIcon), { class: "h-4 w-4 mr-2" }),
                                        isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Accepter la réservation"))
                                      ]),
                                      _: 1
                                    }, 8, ["disabled"]),
                                    createVNode(unref(_sfc_main$2), {
                                      onClick: rejectReservation,
                                      variant: "destructive",
                                      class: "flex-1",
                                      disabled: isProcessing.value
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(XIcon), { class: "h-4 w-4 mr-2" }),
                                        isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Refuser la réservation"))
                                      ]),
                                      _: 1
                                    }, 8, ["disabled"])
                                  ])
                                ])) : __props.reservation.status === "confirmed" ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "space-y-4"
                                }, [
                                  createVNode("div", { class: "flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg" }, [
                                    createVNode(unref(CheckCircleIcon), { class: "h-5 w-5 text-green-600" }),
                                    createVNode("div", { class: "flex-1" }, [
                                      createVNode("h3", { class: "font-medium text-green-800" }, "Réservation confirmée"),
                                      createVNode("p", { class: "text-sm text-green-700" }, "Cette réservation a été acceptée")
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex flex-col sm:flex-row gap-3" }, [
                                    createVNode(unref(_sfc_main$2), {
                                      onClick: completeReservation,
                                      class: "flex-1 bg-blue-600 hover:bg-blue-700 text-white",
                                      disabled: isProcessing.value
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(CheckCircleIcon), { class: "h-4 w-4 mr-2" }),
                                        isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Marquer comme terminée"))
                                      ]),
                                      _: 1
                                    }, 8, ["disabled"]),
                                    createVNode(unref(_sfc_main$2), {
                                      onClick: cancelReservation,
                                      variant: "outline",
                                      class: "flex-1 border-red-300 text-red-700 hover:bg-red-50",
                                      disabled: isProcessing.value
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(XIcon), { class: "h-4 w-4 mr-2" }),
                                        isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Annuler la réservation"))
                                      ]),
                                      _: 1
                                    }, 8, ["disabled"])
                                  ])
                                ])) : __props.reservation.status === "completed" ? (openBlock(), createBlock("div", {
                                  key: 2,
                                  class: "space-y-4"
                                }, [
                                  createVNode("div", { class: "flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg" }, [
                                    createVNode(unref(CheckCircleIcon), { class: "h-5 w-5 text-blue-600" }),
                                    createVNode("div", { class: "flex-1" }, [
                                      createVNode("h3", { class: "font-medium text-blue-800" }, "Réservation terminée"),
                                      createVNode("p", { class: "text-sm text-blue-700" }, "Cette réservation a été complétée avec succès")
                                    ])
                                  ])
                                ])) : __props.reservation.status === "cancelled" ? (openBlock(), createBlock("div", {
                                  key: 3,
                                  class: "space-y-4"
                                }, [
                                  createVNode("div", { class: "flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg" }, [
                                    createVNode(unref(XCircleIcon), { class: "h-5 w-5 text-red-600" }),
                                    createVNode("div", { class: "flex-1" }, [
                                      createVNode("h3", { class: "font-medium text-red-800" }, "Réservation annulée"),
                                      createVNode("p", { class: "text-sm text-red-700" }, "Cette réservation a été annulée")
                                    ])
                                  ])
                                ])) : __props.reservation.status === "rejected" ? (openBlock(), createBlock("div", {
                                  key: 4,
                                  class: "space-y-4"
                                }, [
                                  createVNode("div", { class: "flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg" }, [
                                    createVNode(unref(XCircleIcon), { class: "h-5 w-5 text-red-600" }),
                                    createVNode("div", { class: "flex-1" }, [
                                      createVNode("h3", { class: "font-medium text-red-800" }, "Réservation refusée"),
                                      createVNode("p", { class: "text-sm text-red-700" }, "Cette réservation a été refusée")
                                    ])
                                  ])
                                ])) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { class: "mb-6 lg:col-span-2" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$5), null, {
                                default: withCtx(() => [
                                  createTextVNode("Message de " + toDisplayString(__props.reservation.from_organization.name), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-sm whitespace-pre-wrap" }, toDisplayString(__props.reservation.notes), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { class: "lg:col-span-2" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex justify-between items-center" }, [
                                createVNode(unref(_sfc_main$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Liste des équipements demandés")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "text-right" }, [
                                  createVNode("p", { class: "text-sm text-gray-600" }, "Prix total"),
                                  createVNode("p", { class: "text-xl font-bold text-gray-900" }, toDisplayString(__props.reservation.total) + " €", 1)
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$8), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$9), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$b), null, {
                                            default: withCtx(() => [
                                              createTextVNode("Équipement")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$b), null, {
                                            default: withCtx(() => [
                                              createTextVNode("Quantité")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$b), null, {
                                            default: withCtx(() => [
                                              createTextVNode("Prix/jour")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$b), null, {
                                            default: withCtx(() => [
                                              createTextVNode("Caution")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$b), null, {
                                            default: withCtx(() => [
                                              createTextVNode("Emplacement")
                                            ]),
                                            _: 1
                                          }),
                                          __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$b), {
                                            key: 0,
                                            class: "w-[100px]"
                                          })) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$c), null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.reservation.items, (item) => {
                                        return openBlock(), createBlock(unref(_sfc_main$a), {
                                          key: item.id
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$d), { class: "font-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.equipment.name), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$d), null, {
                                              default: withCtx(() => [
                                                createVNode(unref(_sfc_main$6), {
                                                  variant: "outline",
                                                  class: "text-sm font-medium"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.quantity), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$d), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.price) + " €", 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$d), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.equipment.deposit_amount) + " €", 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$d), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.city), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$d), { key: 0 }, {
                                              default: withCtx(() => [
                                                createVNode(unref(_sfc_main$2), {
                                                  variant: "ghost",
                                                  size: "icon",
                                                  class: "text-destructive hover:text-destructive/90",
                                                  onClick: ($event) => removeItem(item.id)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Trash2Icon), { class: "h-4 w-4" })
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])
                                              ]),
                                              _: 2
                                            }, 1024)) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "lg:col-span-1 space-y-6" }, [
                      createVNode(unref(_sfc_main$3), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$5), { class: "text-lg flex items-center gap-2" }, {
                                default: withCtx(() => [
                                  createVNode(unref(CalendarIcon), { class: "h-5 w-5 text-primary" }),
                                  createTextVNode(" Détails de la réservation ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createVNode("ul", { class: "divide-y divide-gray-100" }, [
                                createVNode("li", { class: "py-3 flex items-center gap-3" }, [
                                  createVNode(unref(CalendarIcon), { class: "h-5 w-5 text-gray-500" }),
                                  createVNode("div", null, [
                                    createVNode("span", { class: "block text-xs text-gray-500" }, "Récupération"),
                                    createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(__props.reservation.start_date), 1)
                                  ])
                                ]),
                                createVNode("li", { class: "py-3 flex items-center gap-3" }, [
                                  createVNode(unref(CalendarIcon), { class: "h-5 w-5 text-gray-500" }),
                                  createVNode("div", null, [
                                    createVNode("span", { class: "block text-xs text-gray-500" }, "Retour"),
                                    createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(__props.reservation.end_date), 1)
                                  ])
                                ]),
                                createVNode("li", { class: "py-3 flex items-center gap-3" }, [
                                  createVNode(unref(ClockIcon), { class: "h-5 w-5 text-gray-500" }),
                                  createVNode("div", null, [
                                    createVNode("span", { class: "block text-xs text-gray-500" }, "Durée"),
                                    createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(__props.reservation.duration) + " " + toDisplayString(__props.reservation.duration > 1 ? "jours" : "jour"), 1)
                                  ])
                                ]),
                                createVNode("li", { class: "py-3 flex items-center gap-3" }, [
                                  createVNode(unref(BuildingIcon), { class: "h-5 w-5 text-gray-500" }),
                                  createVNode("div", null, [
                                    createVNode("span", { class: "block text-xs text-gray-500" }, "Organisation prêteuse"),
                                    createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(__props.reservation.from_organization.name), 1)
                                  ])
                                ]),
                                createVNode("li", { class: "py-3 flex items-center gap-3" }, [
                                  createVNode(unref(PlusIcon), { class: "h-5 w-5 text-gray-500" }),
                                  createVNode("div", null, [
                                    createVNode("span", { class: "block text-xs text-gray-500" }, "Créée le"),
                                    createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(__props.reservation.created_at), 1)
                                  ])
                                ]),
                                createVNode("li", { class: "py-3 flex items-center gap-3" }, [
                                  createVNode(unref(PencilIcon), { class: "h-5 w-5 text-gray-500" }),
                                  createVNode("div", null, [
                                    createVNode("span", { class: "block text-xs text-gray-500" }, "Dernière mise à jour"),
                                    createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(__props.reservation.updated_at), 1)
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$5), { class: "text-lg" }, {
                                default: withCtx(() => [
                                  createTextVNode("Contact emprunteur")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "grid grid-cols-1 gap-6" }, [
                                createVNode("div", { class: "flex items-start gap-3" }, [
                                  createVNode(unref(UserIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                                  createVNode("div", null, [
                                    createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Nom"),
                                    createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.user.name), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "flex items-start gap-3" }, [
                                  createVNode(unref(MailIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                                  createVNode("div", null, [
                                    createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Email"),
                                    createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.user.email), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "flex items-start gap-3" }, [
                                  createVNode(unref(PhoneIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                                  createVNode("div", null, [
                                    createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Téléphone"),
                                    createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.user.phone || "Non renseigné"), 1)
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode(unref(_sfc_main$e), {
                open: showConfirmDialog.value,
                "onUpdate:open": ($event) => showConfirmDialog.value = $event
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$f), { class: "sm:max-w-md" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$g), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                            default: withCtx(() => [
                              createVNode(unref(CheckIcon), { class: "h-5 w-5 text-green-600" }),
                              createTextVNode(" Confirmer la réservation ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$i), null, {
                            default: withCtx(() => [
                              createTextVNode(" Vous êtes sur le point d'accepter cette réservation. Voici ce qui va se passer : ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "space-y-4" }, [
                        createVNode("div", { class: "bg-green-50 border border-green-200 rounded-lg p-4" }, [
                          createVNode("h4", { class: "font-medium text-green-800 mb-2" }, "Prochaines étapes :"),
                          createVNode("ul", { class: "text-sm text-green-700 space-y-1" }, [
                            createVNode("li", null, "• Un email de confirmation sera envoyé à l'emprunteur"),
                            createVNode("li", null, "• Vous devez prendre contact pour organiser les retraits"),
                            createVNode("li", null, "• Coordonner les modalités de paiement et de caution"),
                            createVNode("li", null, "• Définir les conditions de retour du matériel")
                          ])
                        ]),
                        createVNode("div", { class: "bg-blue-50 border border-blue-200 rounded-lg p-4" }, [
                          createVNode("h4", { class: "font-medium text-blue-800 mb-2" }, "Informations importantes :"),
                          createVNode("p", { class: "text-sm text-blue-700" }, ' La réservation sera marquée comme "confirmée" et vous pourrez ensuite la marquer comme "terminée" une fois le matériel retourné. ')
                        ])
                      ]),
                      createVNode(unref(_sfc_main$j), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2), {
                            variant: "outline",
                            onClick: ($event) => showConfirmDialog.value = false,
                            disabled: isProcessing.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Annuler ")
                            ]),
                            _: 1
                          }, 8, ["onClick", "disabled"]),
                          createVNode(unref(_sfc_main$2), {
                            onClick: handleConfirmReservation,
                            disabled: isProcessing.value,
                            class: "bg-green-600 hover:bg-green-700"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(CheckIcon), { class: "h-4 w-4 mr-2" }),
                              isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Confirmer la réservation"))
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
              }, 8, ["open", "onUpdate:open"]),
              createVNode(unref(_sfc_main$e), {
                open: showRejectDialog.value,
                "onUpdate:open": ($event) => showRejectDialog.value = $event
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$f), { class: "sm:max-w-md" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$g), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                            default: withCtx(() => [
                              createVNode(unref(XIcon), { class: "h-5 w-5 text-red-600" }),
                              createTextVNode(" Refuser la réservation ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$i), null, {
                            default: withCtx(() => [
                              createTextVNode(" Vous êtes sur le point de refuser cette réservation. Voici ce qui va se passer : ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "space-y-4" }, [
                        createVNode("div", { class: "bg-red-50 border border-red-200 rounded-lg p-4" }, [
                          createVNode("h4", { class: "font-medium text-red-800 mb-2" }, "Conséquences :"),
                          createVNode("ul", { class: "text-sm text-red-700 space-y-1" }, [
                            createVNode("li", null, "• Un email de refus sera envoyé à l'emprunteur"),
                            createVNode("li", null, '• La réservation sera marquée comme "refusée"'),
                            createVNode("li", null, "• L'emprunteur pourra chercher d'autres options")
                          ])
                        ]),
                        createVNode("div", { class: "bg-yellow-50 border border-yellow-200 rounded-lg p-4" }, [
                          createVNode("h4", { class: "font-medium text-yellow-800 mb-2" }, "Recommandation :"),
                          createVNode("p", { class: "text-sm text-yellow-700" }, " Si possible, contactez l'emprunteur pour expliquer les raisons du refus et proposer des alternatives. ")
                        ])
                      ]),
                      createVNode(unref(_sfc_main$j), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2), {
                            variant: "outline",
                            onClick: ($event) => showRejectDialog.value = false,
                            disabled: isProcessing.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Annuler ")
                            ]),
                            _: 1
                          }, 8, ["onClick", "disabled"]),
                          createVNode(unref(_sfc_main$2), {
                            onClick: handleRejectReservation,
                            variant: "destructive",
                            disabled: isProcessing.value
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(XIcon), { class: "h-4 w-4 mr-2" }),
                              isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Refuser la réservation"))
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
              }, 8, ["open", "onUpdate:open"]),
              createVNode(unref(_sfc_main$e), {
                open: showCompleteDialog.value,
                "onUpdate:open": ($event) => showCompleteDialog.value = $event
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$f), { class: "sm:max-w-md" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$g), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                            default: withCtx(() => [
                              createVNode(unref(CheckCircleIcon), { class: "h-5 w-5 text-blue-600" }),
                              createTextVNode(" Marquer comme terminée ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$i), null, {
                            default: withCtx(() => [
                              createTextVNode(" Vous êtes sur le point de marquer cette réservation comme terminée. Voici ce qui va se passer : ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "space-y-4" }, [
                        createVNode("div", { class: "bg-blue-50 border border-blue-200 rounded-lg p-4" }, [
                          createVNode("h4", { class: "font-medium text-blue-800 mb-2" }, "Confirmation :"),
                          createVNode("ul", { class: "text-sm text-blue-700 space-y-1" }, [
                            createVNode("li", null, "• Le matériel a été retourné en bon état"),
                            createVNode("li", null, "• Les paiements ont été finalisés"),
                            createVNode("li", null, "• Un email de confirmation sera envoyé aux deux parties"),
                            createVNode("li", null, "• La réservation sera archivée")
                          ])
                        ]),
                        createVNode("div", { class: "bg-green-50 border border-green-200 rounded-lg p-4" }, [
                          createVNode("h4", { class: "font-medium text-green-800 mb-2" }, "Important :"),
                          createVNode("p", { class: "text-sm text-green-700" }, " Cette action ne peut être annulée. Assurez-vous que tous les aspects de la réservation sont bien finalisés. ")
                        ])
                      ]),
                      createVNode(unref(_sfc_main$j), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2), {
                            variant: "outline",
                            onClick: ($event) => showCompleteDialog.value = false,
                            disabled: isProcessing.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Annuler ")
                            ]),
                            _: 1
                          }, 8, ["onClick", "disabled"]),
                          createVNode(unref(_sfc_main$2), {
                            onClick: handleCompleteReservation,
                            disabled: isProcessing.value,
                            class: "bg-blue-600 hover:bg-blue-700"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(CheckCircleIcon), { class: "h-4 w-4 mr-2" }),
                              isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Marquer comme terminée"))
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
              }, 8, ["open", "onUpdate:open"]),
              createVNode(unref(_sfc_main$e), {
                open: showCancelDialog.value,
                "onUpdate:open": ($event) => showCancelDialog.value = $event
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$f), { class: "sm:max-w-md" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$g), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$h), { class: "flex items-center gap-2" }, {
                            default: withCtx(() => [
                              createVNode(unref(XCircleIcon), { class: "h-5 w-5 text-red-600" }),
                              createTextVNode(" Annuler la réservation ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$i), null, {
                            default: withCtx(() => [
                              createTextVNode(" Vous êtes sur le point d'annuler cette réservation. Voici ce qui va se passer : ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "space-y-4" }, [
                        createVNode("div", { class: "bg-red-50 border border-red-200 rounded-lg p-4" }, [
                          createVNode("h4", { class: "font-medium text-red-800 mb-2" }, "Conséquences :"),
                          createVNode("ul", { class: "text-sm text-red-700 space-y-1" }, [
                            createVNode("li", null, "• Un email d'annulation sera envoyé à l'emprunteur"),
                            createVNode("li", null, '• La réservation sera marquée comme "annulée"'),
                            createVNode("li", null, "• Le matériel sera remis à disposition")
                          ])
                        ]),
                        createVNode("div", { class: "bg-yellow-50 border border-yellow-200 rounded-lg p-4" }, [
                          createVNode("h4", { class: "font-medium text-yellow-800 mb-2" }, "Recommandation :"),
                          createVNode("p", { class: "text-sm text-yellow-700" }, " Contactez l'emprunteur pour expliquer les raisons de l'annulation et proposer des solutions alternatives si possible. ")
                        ])
                      ]),
                      createVNode(unref(_sfc_main$j), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2), {
                            variant: "outline",
                            onClick: ($event) => showCancelDialog.value = false,
                            disabled: isProcessing.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Garder la réservation ")
                            ]),
                            _: 1
                          }, 8, ["onClick", "disabled"]),
                          createVNode(unref(_sfc_main$2), {
                            onClick: handleCancelReservation,
                            variant: "destructive",
                            disabled: isProcessing.value
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(XCircleIcon), { class: "h-4 w-4 mr-2" }),
                              isProcessing.value ? (openBlock(), createBlock("span", { key: 0 }, "Traitement...")) : (openBlock(), createBlock("span", { key: 1 }, "Annuler la réservation"))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Reservations/Out/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
