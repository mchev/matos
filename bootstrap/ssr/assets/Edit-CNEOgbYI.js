import { mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import _sfc_main$1 from "./Layout-cWP1qhTp.js";
import { _ as _sfc_main$3 } from "./index-9VOASAGY.js";
import { _ as _sfc_main$2 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$8, a as _sfc_main$9, b as _sfc_main$a } from "./index-Don7oRVo.js";
import { ArrowLeftIcon, BuildingIcon, XIcon, CalendarIcon, ClockIcon, PlusIcon, PencilIcon, UserIcon, MailIcon, PhoneIcon, MessageSquareQuote, AlertCircleIcon, Trash2Icon } from "lucide-vue-next";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$b, a as _sfc_main$c, b as _sfc_main$d, c as _sfc_main$e, d as _sfc_main$f, e as _sfc_main$g } from "./TableHeader-B4NNsC_2.js";
import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$6, d as _sfc_main$7 } from "./CardTitle-rMLiyiHU.js";
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
    const cancelReservation = () => {
      if (!confirm("Voulez-vous vraiment annuler cette réservation ?")) return;
      router.delete(route("app.organizations.reservations.in.destroy", { reservation: props.reservation.id }));
    };
    const removeItem = (itemId) => {
      if (!confirm("Voulez-vous vraiment retirer cet équipement de la réservation ?")) return;
      router.delete(route("organizations.reservations.in.items.destroy", {
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
              onClick: ($event) => unref(router).visit(_ctx.route("app.organizations.reservations.in.index"))
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
            _push2(`</div><div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6"${_scopeId}><div class="flex-1"${_scopeId}><h1 class="text-2xl sm:text-3xl font-bold text-gray-900"${_scopeId}> Réservation du ${ssrInterpolate(__props.reservation.start_date)} au ${ssrInterpolate(__props.reservation.end_date)}</h1><div class="flex items-center gap-2 mt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(BuildingIcon), { class: "h-4 w-4 text-gray-500" }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-lg sm:text-xl font-semibold text-gray-600"${_scopeId}>${ssrInterpolate(__props.reservation.from_organization.name)}</h2></div></div><div class="flex flex-col items-start sm:items-end gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              class: `${__props.reservation.status_color}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.reservation.status_label)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.reservation.status_label), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex gap-2"${_scopeId}>`);
            if (["pending", "confirmed"].includes(__props.reservation.status)) {
              _push2(ssrRenderComponent(unref(_sfc_main$2), {
                variant: "destructive",
                size: "sm",
                onClick: cancelReservation
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(XIcon), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                    _push3(` Annuler la réservation `);
                  } else {
                    return [
                      createVNode(unref(XIcon), { class: "h-4 w-4" }),
                      createTextVNode(" Annuler la réservation ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$5), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { class: "text-lg" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Détails de la réservation`);
                            } else {
                              return [
                                createTextVNode("Détails de la réservation")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$6), { class: "text-lg" }, {
                            default: withCtx(() => [
                              createTextVNode("Détails de la réservation")
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
                        _push4(`<div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId3}><div class="flex items-start gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(CalendarIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><h3 class="text-sm font-medium text-gray-500"${_scopeId3}>Récupération</h3><p class="text-gray-900"${_scopeId3}>${ssrInterpolate(__props.reservation.start_date)}</p></div></div><div class="flex items-start gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(CalendarIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><h3 class="text-sm font-medium text-gray-500"${_scopeId3}>Retour</h3><p class="text-gray-900"${_scopeId3}>${ssrInterpolate(__props.reservation.end_date)}</p></div></div><div class="flex items-start gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(ClockIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><h3 class="text-sm font-medium text-gray-500"${_scopeId3}>Durée</h3><p class="text-gray-900"${_scopeId3}>${ssrInterpolate(__props.reservation.duration)} jours</p></div></div><div class="flex items-start gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(BuildingIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><h3 class="text-sm font-medium text-gray-500"${_scopeId3}>Organisation emprunteuse</h3><p class="text-gray-900"${_scopeId3}>${ssrInterpolate(__props.reservation.to_organization.name)}</p></div></div><div class="flex items-start gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(PlusIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><h3 class="text-sm font-medium text-gray-500"${_scopeId3}>Créée le</h3><p class="text-gray-900"${_scopeId3}>${ssrInterpolate(__props.reservation.created_at)}</p></div></div><div class="flex items-start gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(PencilIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><h3 class="text-sm font-medium text-gray-500"${_scopeId3}>Dernière mise à jour</h3><p class="text-gray-900"${_scopeId3}>${ssrInterpolate(__props.reservation.updated_at)}</p></div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                            createVNode("div", { class: "flex items-start gap-3" }, [
                              createVNode(unref(CalendarIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                              createVNode("div", null, [
                                createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Récupération"),
                                createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.start_date), 1)
                              ])
                            ]),
                            createVNode("div", { class: "flex items-start gap-3" }, [
                              createVNode(unref(CalendarIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                              createVNode("div", null, [
                                createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Retour"),
                                createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.end_date), 1)
                              ])
                            ]),
                            createVNode("div", { class: "flex items-start gap-3" }, [
                              createVNode(unref(ClockIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                              createVNode("div", null, [
                                createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Durée"),
                                createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.duration) + " jours", 1)
                              ])
                            ]),
                            createVNode("div", { class: "flex items-start gap-3" }, [
                              createVNode(unref(BuildingIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                              createVNode("div", null, [
                                createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Organisation emprunteuse"),
                                createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.to_organization.name), 1)
                              ])
                            ]),
                            createVNode("div", { class: "flex items-start gap-3" }, [
                              createVNode(unref(PlusIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                              createVNode("div", null, [
                                createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Créée le"),
                                createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.created_at), 1)
                              ])
                            ]),
                            createVNode("div", { class: "flex items-start gap-3" }, [
                              createVNode(unref(PencilIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                              createVNode("div", null, [
                                createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Dernière mise à jour"),
                                createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.updated_at), 1)
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
                    createVNode(unref(_sfc_main$5), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6), { class: "text-lg" }, {
                          default: withCtx(() => [
                            createTextVNode("Détails de la réservation")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$7), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                          createVNode("div", { class: "flex items-start gap-3" }, [
                            createVNode(unref(CalendarIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                            createVNode("div", null, [
                              createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Récupération"),
                              createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.start_date), 1)
                            ])
                          ]),
                          createVNode("div", { class: "flex items-start gap-3" }, [
                            createVNode(unref(CalendarIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                            createVNode("div", null, [
                              createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Retour"),
                              createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.end_date), 1)
                            ])
                          ]),
                          createVNode("div", { class: "flex items-start gap-3" }, [
                            createVNode(unref(ClockIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                            createVNode("div", null, [
                              createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Durée"),
                              createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.duration) + " jours", 1)
                            ])
                          ]),
                          createVNode("div", { class: "flex items-start gap-3" }, [
                            createVNode(unref(BuildingIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                            createVNode("div", null, [
                              createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Organisation emprunteuse"),
                              createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.to_organization.name), 1)
                            ])
                          ]),
                          createVNode("div", { class: "flex items-start gap-3" }, [
                            createVNode(unref(PlusIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                            createVNode("div", null, [
                              createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Créée le"),
                              createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.created_at), 1)
                            ])
                          ]),
                          createVNode("div", { class: "flex items-start gap-3" }, [
                            createVNode(unref(PencilIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                            createVNode("div", null, [
                              createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Dernière mise à jour"),
                              createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.updated_at), 1)
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
            _push2(ssrRenderComponent(unref(_sfc_main$4), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$5), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { class: "text-lg" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Contact`);
                            } else {
                              return [
                                createTextVNode("Contact")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$6), { class: "text-lg" }, {
                            default: withCtx(() => [
                              createTextVNode("Contact")
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
                    createVNode(unref(_sfc_main$5), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6), { class: "text-lg" }, {
                          default: withCtx(() => [
                            createTextVNode("Contact")
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
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$8), { class: "mb-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(MessageSquareQuote), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$9), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Message de la demande`);
                      } else {
                        return [
                          createTextVNode("Message de la demande")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$a), null, {
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
                    createVNode(unref(MessageSquareQuote), { class: "h-4 w-4" }),
                    createVNode(unref(_sfc_main$9), null, {
                      default: withCtx(() => [
                        createTextVNode("Message de la demande")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$a), null, {
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
            _push2(ssrRenderComponent(unref(_sfc_main$8), {
              variant: "warning",
              class: "mb-6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(AlertCircleIcon), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$9), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Information importante`);
                      } else {
                        return [
                          createTextVNode("Information importante")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$a), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Pour garantir la sécurité du matériel, les informations de localisation ne sont pas visibles sur cette page.<br${_scopeId3}> Merci de contacter directement l&#39;organisation pour organiser la récupération. `);
                      } else {
                        return [
                          createTextVNode(" Pour garantir la sécurité du matériel, les informations de localisation ne sont pas visibles sur cette page."),
                          createVNode("br"),
                          createTextVNode(" Merci de contacter directement l'organisation pour organiser la récupération. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(AlertCircleIcon), { class: "h-4 w-4" }),
                    createVNode(unref(_sfc_main$9), null, {
                      default: withCtx(() => [
                        createTextVNode("Information importante")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$a), null, {
                      default: withCtx(() => [
                        createTextVNode(" Pour garantir la sécurité du matériel, les informations de localisation ne sont pas visibles sur cette page."),
                        createVNode("br"),
                        createTextVNode(" Merci de contacter directement l'organisation pour organiser la récupération. ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$5), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-between items-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { class: "text-lg" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Matériel réservé`);
                            } else {
                              return [
                                createTextVNode("Matériel réservé")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="text-right"${_scopeId3}><p class="text-sm text-gray-600"${_scopeId3}>Prix total</p><p class="text-xl font-bold text-gray-900"${_scopeId3}>${ssrInterpolate(__props.reservation.total)} €</p></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex justify-between items-center" }, [
                            createVNode(unref(_sfc_main$6), { class: "text-lg" }, {
                              default: withCtx(() => [
                                createTextVNode("Matériel réservé")
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
                        _push4(ssrRenderComponent(unref(_sfc_main$b), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$c), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$d), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(_sfc_main$e), null, {
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
                                          _push7(ssrRenderComponent(unref(_sfc_main$e), null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Qté`);
                                              } else {
                                                return [
                                                  createTextVNode("Qté")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$e), null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Jours`);
                                              } else {
                                                return [
                                                  createTextVNode("Jours")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$e), null, {
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
                                          _push7(ssrRenderComponent(unref(_sfc_main$e), null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Sous-total`);
                                              } else {
                                                return [
                                                  createTextVNode("Sous-total")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$e), null, {
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
                                          _push7(ssrRenderComponent(unref(_sfc_main$e), null, {
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
                                            _push7(ssrRenderComponent(unref(_sfc_main$e), { class: "w-[100px]" }, null, _parent7, _scopeId6));
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$e), null, {
                                              default: withCtx(() => [
                                                createTextVNode("Équipement")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$e), null, {
                                              default: withCtx(() => [
                                                createTextVNode("Qté")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$e), null, {
                                              default: withCtx(() => [
                                                createTextVNode("Jours")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$e), null, {
                                              default: withCtx(() => [
                                                createTextVNode("Prix/jour")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$e), null, {
                                              default: withCtx(() => [
                                                createTextVNode("Sous-total")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$e), null, {
                                              default: withCtx(() => [
                                                createTextVNode("Caution")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$e), null, {
                                              default: withCtx(() => [
                                                createTextVNode("Emplacement")
                                              ]),
                                              _: 1
                                            }),
                                            __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$e), {
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
                                      createVNode(unref(_sfc_main$d), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$e), null, {
                                            default: withCtx(() => [
                                              createTextVNode("Équipement")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$e), null, {
                                            default: withCtx(() => [
                                              createTextVNode("Qté")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$e), null, {
                                            default: withCtx(() => [
                                              createTextVNode("Jours")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$e), null, {
                                            default: withCtx(() => [
                                              createTextVNode("Prix/jour")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$e), null, {
                                            default: withCtx(() => [
                                              createTextVNode("Sous-total")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$e), null, {
                                            default: withCtx(() => [
                                              createTextVNode("Caution")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$e), null, {
                                            default: withCtx(() => [
                                              createTextVNode("Emplacement")
                                            ]),
                                            _: 1
                                          }),
                                          __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$e), {
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
                              _push5(ssrRenderComponent(unref(_sfc_main$f), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(__props.reservation.items, (item) => {
                                      _push6(ssrRenderComponent(unref(_sfc_main$d), {
                                        key: item.id
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(_sfc_main$g), { class: "font-medium" }, {
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
                                            _push7(ssrRenderComponent(unref(_sfc_main$g), null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(item.quantity)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(item.quantity), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$g), null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(__props.reservation.duration)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(__props.reservation.duration), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$g), null, {
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
                                            _push7(ssrRenderComponent(unref(_sfc_main$g), null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(item.total_price)} €`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(item.total_price) + " €", 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$g), null, {
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
                                            _push7(ssrRenderComponent(unref(_sfc_main$g), null, {
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
                                              _push7(ssrRenderComponent(unref(_sfc_main$g), null, {
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
                                              createVNode(unref(_sfc_main$g), { class: "font-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.equipment.name), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$g), null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.quantity), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$g), null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(__props.reservation.duration), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(_sfc_main$g), null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.price) + " €", 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$g), null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.total_price) + " €", 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$g), null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.equipment.deposit_amount) + " €", 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$g), null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.city), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$g), { key: 0 }, {
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
                                        return openBlock(), createBlock(unref(_sfc_main$d), {
                                          key: item.id
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$g), { class: "font-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.equipment.name), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$g), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.quantity), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$g), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(__props.reservation.duration), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$g), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.price) + " €", 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$g), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.total_price) + " €", 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$g), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.equipment.deposit_amount) + " €", 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$g), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.city), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$g), { key: 0 }, {
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
                                createVNode(unref(_sfc_main$c), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$d), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$e), null, {
                                          default: withCtx(() => [
                                            createTextVNode("Équipement")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$e), null, {
                                          default: withCtx(() => [
                                            createTextVNode("Qté")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$e), null, {
                                          default: withCtx(() => [
                                            createTextVNode("Jours")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$e), null, {
                                          default: withCtx(() => [
                                            createTextVNode("Prix/jour")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$e), null, {
                                          default: withCtx(() => [
                                            createTextVNode("Sous-total")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$e), null, {
                                          default: withCtx(() => [
                                            createTextVNode("Caution")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$e), null, {
                                          default: withCtx(() => [
                                            createTextVNode("Emplacement")
                                          ]),
                                          _: 1
                                        }),
                                        __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$e), {
                                          key: 0,
                                          class: "w-[100px]"
                                        })) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$f), null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.reservation.items, (item) => {
                                      return openBlock(), createBlock(unref(_sfc_main$d), {
                                        key: item.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$g), { class: "font-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.equipment.name), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$g), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.quantity), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$g), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(__props.reservation.duration), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$g), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.price) + " €", 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$g), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.total_price) + " €", 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$g), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.equipment.deposit_amount) + " €", 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$g), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.city), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$g), { key: 0 }, {
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
                          createVNode(unref(_sfc_main$b), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$c), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$d), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$e), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Équipement")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$e), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Qté")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$e), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Jours")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$e), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Prix/jour")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$e), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Sous-total")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$e), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Caution")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$e), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Emplacement")
                                        ]),
                                        _: 1
                                      }),
                                      __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$e), {
                                        key: 0,
                                        class: "w-[100px]"
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$f), null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.reservation.items, (item) => {
                                    return openBlock(), createBlock(unref(_sfc_main$d), {
                                      key: item.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$g), { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.equipment.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$g), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.quantity), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$g), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(__props.reservation.duration), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$g), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.price) + " €", 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$g), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.total_price) + " €", 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$g), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.equipment.deposit_amount) + " €", 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$g), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.city), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$g), { key: 0 }, {
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
                    createVNode(unref(_sfc_main$5), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between items-center" }, [
                          createVNode(unref(_sfc_main$6), { class: "text-lg" }, {
                            default: withCtx(() => [
                              createTextVNode("Matériel réservé")
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
                        createVNode(unref(_sfc_main$b), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$c), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$d), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$e), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Équipement")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$e), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Qté")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$e), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Jours")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$e), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Prix/jour")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$e), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Sous-total")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$e), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Caution")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$e), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Emplacement")
                                      ]),
                                      _: 1
                                    }),
                                    __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$e), {
                                      key: 0,
                                      class: "w-[100px]"
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$f), null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.reservation.items, (item) => {
                                  return openBlock(), createBlock(unref(_sfc_main$d), {
                                    key: item.id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$g), { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.equipment.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(unref(_sfc_main$g), null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.quantity), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(unref(_sfc_main$g), null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(__props.reservation.duration), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$g), null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.price) + " €", 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(unref(_sfc_main$g), null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.total_price) + " €", 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(unref(_sfc_main$g), null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.equipment.deposit_amount) + " €", 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(unref(_sfc_main$g), null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.city), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$g), { key: 0 }, {
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
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8 py-8" }, [
                createVNode("div", { class: "bg-white rounded-lg shadow-sm p-6" }, [
                  createVNode("div", { class: "mb-6" }, [
                    createVNode(unref(_sfc_main$2), {
                      variant: "ghost",
                      class: "gap-2",
                      onClick: ($event) => unref(router).visit(_ctx.route("app.organizations.reservations.in.index"))
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ArrowLeftIcon), { class: "h-4 w-4" }),
                        createTextVNode(" Retour aux réservations ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6" }, [
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("h1", { class: "text-2xl sm:text-3xl font-bold text-gray-900" }, " Réservation du " + toDisplayString(__props.reservation.start_date) + " au " + toDisplayString(__props.reservation.end_date), 1),
                      createVNode("div", { class: "flex items-center gap-2 mt-2" }, [
                        createVNode(unref(BuildingIcon), { class: "h-4 w-4 text-gray-500" }),
                        createVNode("h2", { class: "text-lg sm:text-xl font-semibold text-gray-600" }, toDisplayString(__props.reservation.from_organization.name), 1)
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col items-start sm:items-end gap-2" }, [
                      createVNode(unref(_sfc_main$3), {
                        class: `${__props.reservation.status_color}`
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(__props.reservation.status_label), 1)
                        ]),
                        _: 1
                      }, 8, ["class"]),
                      createVNode("div", { class: "flex gap-2" }, [
                        ["pending", "confirmed"].includes(__props.reservation.status) ? (openBlock(), createBlock(unref(_sfc_main$2), {
                          key: 0,
                          variant: "destructive",
                          size: "sm",
                          onClick: cancelReservation
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(XIcon), { class: "h-4 w-4" }),
                            createTextVNode(" Annuler la réservation ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6" }, [
                    createVNode(unref(_sfc_main$4), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$6), { class: "text-lg" }, {
                              default: withCtx(() => [
                                createTextVNode("Détails de la réservation")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                              createVNode("div", { class: "flex items-start gap-3" }, [
                                createVNode(unref(CalendarIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                                createVNode("div", null, [
                                  createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Récupération"),
                                  createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.start_date), 1)
                                ])
                              ]),
                              createVNode("div", { class: "flex items-start gap-3" }, [
                                createVNode(unref(CalendarIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                                createVNode("div", null, [
                                  createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Retour"),
                                  createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.end_date), 1)
                                ])
                              ]),
                              createVNode("div", { class: "flex items-start gap-3" }, [
                                createVNode(unref(ClockIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                                createVNode("div", null, [
                                  createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Durée"),
                                  createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.duration) + " jours", 1)
                                ])
                              ]),
                              createVNode("div", { class: "flex items-start gap-3" }, [
                                createVNode(unref(BuildingIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                                createVNode("div", null, [
                                  createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Organisation emprunteuse"),
                                  createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.to_organization.name), 1)
                                ])
                              ]),
                              createVNode("div", { class: "flex items-start gap-3" }, [
                                createVNode(unref(PlusIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                                createVNode("div", null, [
                                  createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Créée le"),
                                  createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.created_at), 1)
                                ])
                              ]),
                              createVNode("div", { class: "flex items-start gap-3" }, [
                                createVNode(unref(PencilIcon), { class: "h-5 w-5 text-gray-500 mt-0.5" }),
                                createVNode("div", null, [
                                  createVNode("h3", { class: "text-sm font-medium text-gray-500" }, "Dernière mise à jour"),
                                  createVNode("p", { class: "text-gray-900" }, toDisplayString(__props.reservation.updated_at), 1)
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$4), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$6), { class: "text-lg" }, {
                              default: withCtx(() => [
                                createTextVNode("Contact")
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
                  ]),
                  createVNode(unref(_sfc_main$8), { class: "mb-6" }, {
                    default: withCtx(() => [
                      createVNode(unref(MessageSquareQuote), { class: "h-4 w-4" }),
                      createVNode(unref(_sfc_main$9), null, {
                        default: withCtx(() => [
                          createTextVNode("Message de la demande")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$a), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-sm whitespace-pre-wrap" }, toDisplayString(__props.reservation.notes), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$8), {
                    variant: "warning",
                    class: "mb-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(AlertCircleIcon), { class: "h-4 w-4" }),
                      createVNode(unref(_sfc_main$9), null, {
                        default: withCtx(() => [
                          createTextVNode("Information importante")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$a), null, {
                        default: withCtx(() => [
                          createTextVNode(" Pour garantir la sécurité du matériel, les informations de localisation ne sont pas visibles sur cette page."),
                          createVNode("br"),
                          createTextVNode(" Merci de contacter directement l'organisation pour organiser la récupération. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$4), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$5), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex justify-between items-center" }, [
                            createVNode(unref(_sfc_main$6), { class: "text-lg" }, {
                              default: withCtx(() => [
                                createTextVNode("Matériel réservé")
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
                          createVNode(unref(_sfc_main$b), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$c), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$d), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$e), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Équipement")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$e), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Qté")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$e), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Jours")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$e), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Prix/jour")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$e), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Sous-total")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$e), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Caution")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$e), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Emplacement")
                                        ]),
                                        _: 1
                                      }),
                                      __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$e), {
                                        key: 0,
                                        class: "w-[100px]"
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$f), null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.reservation.items, (item) => {
                                    return openBlock(), createBlock(unref(_sfc_main$d), {
                                      key: item.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$g), { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.equipment.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$g), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.quantity), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$g), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(__props.reservation.duration), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$g), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.price) + " €", 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$g), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.total_price) + " €", 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$g), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.equipment.deposit_amount) + " €", 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$g), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.city), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        __props.reservation.status === "pending" ? (openBlock(), createBlock(unref(_sfc_main$g), { key: 0 }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Reservations/In/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
