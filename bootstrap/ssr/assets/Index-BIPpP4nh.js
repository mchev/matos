import { computed, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$b } from "./AppLayout-B3jJCr1A.js";
import { useForm, usePage } from "@inertiajs/vue3";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import frLocale from "@fullcalendar/core/locales/fr";
import { _ as _sfc_main$c, a as _sfc_main$d, b as _sfc_main$e, c as _sfc_main$f } from "./DialogTrigger-CSFZvrzo.js";
import { _ as _sfc_main$g } from "./index-9VOASAGY.js";
import { _ as _sfc_main$5 } from "./index-53Kg4F4g.js";
import { X, Plus, CalendarDays, Building2, Phone, Mail, User, Package } from "lucide-vue-next";
import { _ as _sfc_main$3 } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$4 } from "./Textarea-DxMXW1ER.js";
import { _ as _sfc_main$6, a as _sfc_main$7, b as _sfc_main$8, c as _sfc_main$9, d as _sfc_main$a } from "./SelectValue-BSiknP0M.js";
import { _ as _sfc_main$2 } from "./Label-DLRZNtyA.js";
import { S as Spinner } from "./spinner-C4dsHuCt.js";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "reka-ui";
import "@vueuse/core";
import "@heroicons/vue/24/outline";
import "vue-sonner";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const _sfc_main$1 = {
  __name: "ManualReservationForm",
  __ssrInlineRender: true,
  props: {
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true
    },
    equipments: {
      type: Array,
      required: true
    }
  },
  emits: ["cancel"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const form = useForm({
      title: "",
      start_date: props.startDate,
      end_date: props.endDate,
      recipient: "",
      notes: "",
      items: [
        {
          equipment_id: "",
          quantity: 1,
          notes: ""
        }
      ]
    });
    const availableEquipments = computed(() => {
      return props.equipments.filter((equipment) => equipment.is_available);
    });
    const addItem = () => {
      form.items.push({
        equipment_id: "",
        quantity: 1,
        notes: ""
      });
    };
    const removeItem = (index) => {
      form.items.splice(index, 1);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), {
        for: "title",
        required: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Titre de la réservation`);
          } else {
            return [
              createTextVNode("Titre de la réservation")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        id: "title",
        modelValue: unref(form).title,
        "onUpdate:modelValue": ($event) => unref(form).title = $event,
        type: "text",
        placeholder: "Ex: Événement externe, Maintenance, etc.",
        required: "",
        class: "mt-2"
      }, null, _parent));
      if (unref(form).errors.title) {
        _push(`<p class="mt-2 text-sm text-destructive">${ssrInterpolate(unref(form).errors.title)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="grid gap-4 sm:grid-cols-2"><div>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), {
        for: "start_date",
        required: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Date de début`);
          } else {
            return [
              createTextVNode("Date de début")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        id: "start_date",
        modelValue: unref(form).start_date,
        "onUpdate:modelValue": ($event) => unref(form).start_date = $event,
        type: "date",
        required: "",
        class: "mt-2"
      }, null, _parent));
      if (unref(form).errors.start_date) {
        _push(`<p class="mt-2 text-sm text-destructive">${ssrInterpolate(unref(form).errors.start_date)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), {
        for: "end_date",
        required: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Date de fin`);
          } else {
            return [
              createTextVNode("Date de fin")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        id: "end_date",
        modelValue: unref(form).end_date,
        "onUpdate:modelValue": ($event) => unref(form).end_date = $event,
        type: "date",
        required: "",
        class: "mt-2"
      }, null, _parent));
      if (unref(form).errors.end_date) {
        _push(`<p class="mt-2 text-sm text-destructive">${ssrInterpolate(unref(form).errors.end_date)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), { for: "recipient" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Destinataire (optionnel)`);
          } else {
            return [
              createTextVNode("Destinataire (optionnel)")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        id: "recipient",
        modelValue: unref(form).recipient,
        "onUpdate:modelValue": ($event) => unref(form).recipient = $event,
        type: "text",
        placeholder: "Ex: Jean Dupont, Service technique, etc.",
        class: "mt-2"
      }, null, _parent));
      if (unref(form).errors.recipient) {
        _push(`<p class="mt-2 text-sm text-destructive">${ssrInterpolate(unref(form).errors.recipient)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), { for: "notes" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Notes (optionnel)`);
          } else {
            return [
              createTextVNode("Notes (optionnel)")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), {
        id: "notes",
        modelValue: unref(form).notes,
        "onUpdate:modelValue": ($event) => unref(form).notes = $event,
        rows: "3",
        placeholder: "Informations supplémentaires sur cette réservation...",
        class: "mt-2"
      }, null, _parent));
      if (unref(form).errors.notes) {
        _push(`<p class="mt-2 text-sm text-destructive">${ssrInterpolate(unref(form).errors.notes)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), { required: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Équipements à bloquer`);
          } else {
            return [
              createTextVNode("Équipements à bloquer")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm text-muted-foreground mt-1">Sélectionnez les équipements à bloquer pour cette période</p><div class="mt-4 space-y-4"><!--[-->`);
      ssrRenderList(unref(form).items, (item, index) => {
        _push(`<div class="p-4 border rounded-lg"><div class="flex items-center justify-between mb-3"><h4 class="font-medium">Équipement ${ssrInterpolate(index + 1)}</h4>`);
        if (unref(form).items.length > 1) {
          _push(ssrRenderComponent(unref(_sfc_main$5), {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: ($event) => removeItem(index)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(X), { class: "w-4 h-4" })
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="grid gap-4 sm:grid-cols-2"><div>`);
        _push(ssrRenderComponent(unref(_sfc_main$2), {
          for: `equipment_${index}`,
          required: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Équipement`);
            } else {
              return [
                createTextVNode("Équipement")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(unref(_sfc_main$6), {
          modelValue: item.equipment_id,
          "onUpdate:modelValue": ($event) => item.equipment_id = $event,
          required: "",
          class: "mt-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$7), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$8), { placeholder: "Sélectionnez un équipement" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$8), { placeholder: "Sélectionnez un équipement" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$9), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(availableEquipments.value, (equipment) => {
                      _push3(ssrRenderComponent(unref(_sfc_main$a), {
                        key: equipment.id,
                        value: equipment.id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(equipment.name)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(equipment.name), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(availableEquipments.value, (equipment) => {
                        return openBlock(), createBlock(unref(_sfc_main$a), {
                          key: equipment.id,
                          value: equipment.id
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(equipment.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$7), null, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$8), { placeholder: "Sélectionnez un équipement" })
                  ]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$9), null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(availableEquipments.value, (equipment) => {
                      return openBlock(), createBlock(unref(_sfc_main$a), {
                        key: equipment.id,
                        value: equipment.id
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(equipment.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(unref(_sfc_main$2), {
          for: `quantity_${index}`,
          required: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Quantité`);
            } else {
              return [
                createTextVNode("Quantité")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(unref(_sfc_main$3), {
          id: `quantity_${index}`,
          modelValue: item.quantity,
          "onUpdate:modelValue": ($event) => item.quantity = $event,
          modelModifiers: { number: true },
          type: "number",
          min: "1",
          required: "",
          class: "mt-2"
        }, null, _parent));
        _push(`</div></div><div class="mt-3">`);
        _push(ssrRenderComponent(unref(_sfc_main$2), {
          for: `notes_${index}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Notes pour cet équipement`);
            } else {
              return [
                createTextVNode("Notes pour cet équipement")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(unref(_sfc_main$3), {
          id: `notes_${index}`,
          modelValue: item.notes,
          "onUpdate:modelValue": ($event) => item.notes = $event,
          type: "text",
          placeholder: "Notes spécifiques...",
          class: "mt-2"
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$5), {
        type: "button",
        variant: "outline",
        onClick: addItem,
        class: "mt-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Plus), { class: "w-4 h-4 mr-2" }, null, _parent2, _scopeId));
            _push2(` Ajouter un équipement `);
          } else {
            return [
              createVNode(unref(Plus), { class: "w-4 h-4 mr-2" }),
              createTextVNode(" Ajouter un équipement ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex justify-end gap-3">`);
      _push(ssrRenderComponent(unref(_sfc_main$5), {
        type: "button",
        variant: "outline",
        onClick: ($event) => _ctx.$emit("cancel")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Annuler `);
          } else {
            return [
              createTextVNode(" Annuler ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), {
        type: "submit",
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(form).processing) {
              _push2(ssrRenderComponent(Spinner, { class: "w-4 h-4 mr-2" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(unref(form).processing ? "Création..." : "Créer la réservation")}`);
          } else {
            return [
              unref(form).processing ? (openBlock(), createBlock(Spinner, {
                key: 0,
                class: "w-4 h-4 mr-2"
              })) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString(unref(form).processing ? "Création..." : "Créer la réservation"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ManualReservationForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    reservations: {
      type: Array,
      required: true
    },
    equipments: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const organization = computed(() => usePage().props.auth.user.current_organization);
    const selectedReservation = ref(null);
    const isModalOpen = ref(false);
    const isNewReservationModalOpen = ref(false);
    const selectedDates = ref({ start: null, end: null });
    const getStatusColors = (status) => {
      const colors = {
        "bg-yellow-100": "#fef9c3",
        "bg-green-100": "#dcfce7",
        "bg-red-100": "#fee2e2",
        "bg-gray-100": "#f3f4f6",
        "bg-blue-100": "#dbeafe",
        "text-yellow-800": "#854d0e",
        "text-green-800": "#166534",
        "text-red-800": "#991b1b",
        "text-gray-800": "#1f2937",
        "text-blue-800": "#1e3a8a"
      };
      const [bgClass, textClass] = status.color.split(" ");
      return {
        backgroundColor: colors[bgClass],
        textColor: colors[textClass]
      };
    };
    const calendarEvents = computed(() => {
      return props.reservations.map((reservation) => {
        const colors = getStatusColors(reservation.status);
        return {
          id: reservation.id,
          title: reservation.title,
          start: reservation.start,
          end: reservation.end,
          allDay: true,
          backgroundColor: colors.backgroundColor,
          textColor: colors.textColor,
          borderColor: colors.backgroundColor,
          extendedProps: reservation
        };
      });
    });
    const handleEventClick = (info) => {
      selectedReservation.value = info.event.extendedProps;
      isModalOpen.value = true;
    };
    const closeModal = () => {
      isModalOpen.value = false;
      selectedReservation.value = null;
    };
    const handleDateSelect = (selectInfo) => {
      selectedDates.value = {
        start: selectInfo.startStr,
        end: selectInfo.endStr
      };
      isNewReservationModalOpen.value = true;
    };
    const closeManualReservationModal = () => {
      isNewReservationModalOpen.value = false;
      selectedDates.value = { start: null, end: null };
    };
    const showManualReservationModal = () => {
      const today = /* @__PURE__ */ new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      selectedDates.value = {
        start: today.toISOString().split("T")[0],
        end: tomorrow.toISOString().split("T")[0]
      };
      isNewReservationModalOpen.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$b, mergeProps({ title: "Calendrier" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center"${_scopeId}><h2 class="font-semibold text-xl leading-tight"${_scopeId}> Calendrier des locations de ${ssrInterpolate(organization.value.name)}</h2>`);
            _push2(ssrRenderComponent(unref(_sfc_main$5), { onClick: showManualReservationModal }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CalendarDays), { class: "w-4 h-4 mr-2" }, null, _parent3, _scopeId2));
                  _push3(` Réservation manuelle `);
                } else {
                  return [
                    createVNode(unref(CalendarDays), { class: "w-4 h-4 mr-2" }),
                    createTextVNode(" Réservation manuelle ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center" }, [
                createVNode("h2", { class: "font-semibold text-xl leading-tight" }, " Calendrier des locations de " + toDisplayString(organization.value.name), 1),
                createVNode(unref(_sfc_main$5), { onClick: showManualReservationModal }, {
                  default: withCtx(() => [
                    createVNode(unref(CalendarDays), { class: "w-4 h-4 mr-2" }),
                    createTextVNode(" Réservation manuelle ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 py-8"${_scopeId}><div class="calendar-wrapper"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(FullCalendar), {
              options: {
                plugins: [unref(dayGridPlugin), unref(timeGridPlugin), unref(interactionPlugin)],
                initialView: "dayGridMonth",
                headerToolbar: {
                  left: "prev today",
                  center: "title",
                  right: "next"
                },
                events: calendarEvents.value,
                eventClick: handleEventClick,
                locale: unref(frLocale),
                height: "auto",
                editable: false,
                selectable: true,
                select: handleDateSelect,
                selectMirror: true,
                nowIndicator: true,
                displayEventTime: false,
                dayMaxEvents: true,
                views: {
                  dayGrid: {
                    dayMaxEvents: 4
                  }
                }
              }
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$c), {
              open: isModalOpen.value,
              "onUpdate:open": closeModal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$d), { class: "sm:max-w-[500px]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$e), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$f), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Détails de la location`);
                                  } else {
                                    return [
                                      createTextVNode("Détails de la location")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$f), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Détails de la location")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (selectedReservation.value) {
                          _push4(`<div class="space-y-6"${_scopeId3}><div class="flex items-start gap-4"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$g), {
                            class: selectedReservation.value.status.color
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(selectedReservation.value.status.label)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(selectedReservation.value.status.label), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><div class="grid gap-4"${_scopeId3}><div class="flex items-center gap-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(CalendarDays), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                          _push4(`<span${_scopeId3}>Du ${ssrInterpolate(new Date(selectedReservation.value.start).toLocaleDateString())} au ${ssrInterpolate(new Date(selectedReservation.value.end).toLocaleDateString())}</span></div><div class="rounded-lg bg-muted p-4"${_scopeId3}><div class="flex items-center gap-2 mb-3"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(Building2), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                          _push4(`<span class="font-medium"${_scopeId3}>${ssrInterpolate(selectedReservation.value.borrower.name)}</span></div><div class="space-y-2 text-sm text-muted-foreground"${_scopeId3}>`);
                          if (selectedReservation.value.borrower.phone) {
                            _push4(`<div class="flex items-center gap-2"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Phone), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                            _push4(`<a${ssrRenderAttr("href", "tel:" + selectedReservation.value.borrower.phone)} class="hover:underline"${_scopeId3}>${ssrInterpolate(selectedReservation.value.borrower.phone)}</a></div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (selectedReservation.value.borrower.email) {
                            _push4(`<div class="flex items-center gap-2"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Mail), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                            _push4(`<a${ssrRenderAttr("href", "mailto:" + selectedReservation.value.borrower.email)} class="hover:underline"${_scopeId3}>${ssrInterpolate(selectedReservation.value.borrower.email)}</a></div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div><div class="mt-4 pt-4 border-t border-border"${_scopeId3}><div class="flex items-center gap-2 mb-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(User), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                          _push4(`<span class="font-medium"${_scopeId3}>${ssrInterpolate(selectedReservation.value.borrower.contact.name)}</span></div><div class="space-y-2 text-sm text-muted-foreground"${_scopeId3}>`);
                          if (selectedReservation.value.borrower.contact.phone) {
                            _push4(`<div class="flex items-center gap-2"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Phone), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                            _push4(`<a${ssrRenderAttr("href", "tel:" + selectedReservation.value.borrower.contact.phone)} class="hover:underline"${_scopeId3}>${ssrInterpolate(selectedReservation.value.borrower.contact.phone)}</a></div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (selectedReservation.value.borrower.contact.email) {
                            _push4(`<div class="flex items-center gap-2"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Mail), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                            _push4(`<a${ssrRenderAttr("href", "mailto:" + selectedReservation.value.borrower.contact.email)} class="hover:underline"${_scopeId3}>${ssrInterpolate(selectedReservation.value.borrower.contact.email)}</a></div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div></div></div><div class="flex items-start gap-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(Package), { class: "h-4 w-4 mt-1" }, null, _parent4, _scopeId3));
                          _push4(`<div class="flex-1"${_scopeId3}><h4 class="font-medium mb-2"${_scopeId3}>Équipements</h4><ul class="space-y-2"${_scopeId3}><!--[-->`);
                          ssrRenderList(selectedReservation.value.items, (item) => {
                            _push4(`<li class="flex items-center gap-2 text-sm"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(_sfc_main$g), null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.quantity)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.quantity), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`<span${_scopeId3}>${ssrInterpolate(item.equipment)}</span></li>`);
                          });
                          _push4(`<!--]--></ul></div></div><div class="flex items-center justify-end gap-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$5), {
                            as: "a",
                            href: _ctx.route("app.organizations.reservations.out.edit", selectedReservation.value)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Gérer la réservation `);
                              } else {
                                return [
                                  createTextVNode(" Gérer la réservation ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(unref(_sfc_main$e), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$f), null, {
                                default: withCtx(() => [
                                  createTextVNode("Détails de la location")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          selectedReservation.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "space-y-6"
                          }, [
                            createVNode("div", { class: "flex items-start gap-4" }, [
                              createVNode(unref(_sfc_main$g), {
                                class: selectedReservation.value.status.color
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(selectedReservation.value.status.label), 1)
                                ]),
                                _: 1
                              }, 8, ["class"])
                            ]),
                            createVNode("div", { class: "grid gap-4" }, [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode(unref(CalendarDays), { class: "h-4 w-4" }),
                                createVNode("span", null, "Du " + toDisplayString(new Date(selectedReservation.value.start).toLocaleDateString()) + " au " + toDisplayString(new Date(selectedReservation.value.end).toLocaleDateString()), 1)
                              ]),
                              createVNode("div", { class: "rounded-lg bg-muted p-4" }, [
                                createVNode("div", { class: "flex items-center gap-2 mb-3" }, [
                                  createVNode(unref(Building2), { class: "h-4 w-4" }),
                                  createVNode("span", { class: "font-medium" }, toDisplayString(selectedReservation.value.borrower.name), 1)
                                ]),
                                createVNode("div", { class: "space-y-2 text-sm text-muted-foreground" }, [
                                  selectedReservation.value.borrower.phone ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "flex items-center gap-2"
                                  }, [
                                    createVNode(unref(Phone), { class: "h-4 w-4" }),
                                    createVNode("a", {
                                      href: "tel:" + selectedReservation.value.borrower.phone,
                                      class: "hover:underline"
                                    }, toDisplayString(selectedReservation.value.borrower.phone), 9, ["href"])
                                  ])) : createCommentVNode("", true),
                                  selectedReservation.value.borrower.email ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "flex items-center gap-2"
                                  }, [
                                    createVNode(unref(Mail), { class: "h-4 w-4" }),
                                    createVNode("a", {
                                      href: "mailto:" + selectedReservation.value.borrower.email,
                                      class: "hover:underline"
                                    }, toDisplayString(selectedReservation.value.borrower.email), 9, ["href"])
                                  ])) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "mt-4 pt-4 border-t border-border" }, [
                                  createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                                    createVNode(unref(User), { class: "h-4 w-4" }),
                                    createVNode("span", { class: "font-medium" }, toDisplayString(selectedReservation.value.borrower.contact.name), 1)
                                  ]),
                                  createVNode("div", { class: "space-y-2 text-sm text-muted-foreground" }, [
                                    selectedReservation.value.borrower.contact.phone ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "flex items-center gap-2"
                                    }, [
                                      createVNode(unref(Phone), { class: "h-4 w-4" }),
                                      createVNode("a", {
                                        href: "tel:" + selectedReservation.value.borrower.contact.phone,
                                        class: "hover:underline"
                                      }, toDisplayString(selectedReservation.value.borrower.contact.phone), 9, ["href"])
                                    ])) : createCommentVNode("", true),
                                    selectedReservation.value.borrower.contact.email ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "flex items-center gap-2"
                                    }, [
                                      createVNode(unref(Mail), { class: "h-4 w-4" }),
                                      createVNode("a", {
                                        href: "mailto:" + selectedReservation.value.borrower.contact.email,
                                        class: "hover:underline"
                                      }, toDisplayString(selectedReservation.value.borrower.contact.email), 9, ["href"])
                                    ])) : createCommentVNode("", true)
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "flex items-start gap-2" }, [
                                createVNode(unref(Package), { class: "h-4 w-4 mt-1" }),
                                createVNode("div", { class: "flex-1" }, [
                                  createVNode("h4", { class: "font-medium mb-2" }, "Équipements"),
                                  createVNode("ul", { class: "space-y-2" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(selectedReservation.value.items, (item) => {
                                      return openBlock(), createBlock("li", {
                                        key: item.equipment,
                                        class: "flex items-center gap-2 text-sm"
                                      }, [
                                        createVNode(unref(_sfc_main$g), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.quantity), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode("span", null, toDisplayString(item.equipment), 1)
                                      ]);
                                    }), 128))
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                                createVNode(unref(_sfc_main$5), {
                                  as: "a",
                                  href: _ctx.route("app.organizations.reservations.out.edit", selectedReservation.value)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Gérer la réservation ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ])
                            ])
                          ])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$d), { class: "sm:max-w-[500px]" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$e), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$f), null, {
                              default: withCtx(() => [
                                createTextVNode("Détails de la location")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        selectedReservation.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "space-y-6"
                        }, [
                          createVNode("div", { class: "flex items-start gap-4" }, [
                            createVNode(unref(_sfc_main$g), {
                              class: selectedReservation.value.status.color
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(selectedReservation.value.status.label), 1)
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ]),
                          createVNode("div", { class: "grid gap-4" }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode(unref(CalendarDays), { class: "h-4 w-4" }),
                              createVNode("span", null, "Du " + toDisplayString(new Date(selectedReservation.value.start).toLocaleDateString()) + " au " + toDisplayString(new Date(selectedReservation.value.end).toLocaleDateString()), 1)
                            ]),
                            createVNode("div", { class: "rounded-lg bg-muted p-4" }, [
                              createVNode("div", { class: "flex items-center gap-2 mb-3" }, [
                                createVNode(unref(Building2), { class: "h-4 w-4" }),
                                createVNode("span", { class: "font-medium" }, toDisplayString(selectedReservation.value.borrower.name), 1)
                              ]),
                              createVNode("div", { class: "space-y-2 text-sm text-muted-foreground" }, [
                                selectedReservation.value.borrower.phone ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "flex items-center gap-2"
                                }, [
                                  createVNode(unref(Phone), { class: "h-4 w-4" }),
                                  createVNode("a", {
                                    href: "tel:" + selectedReservation.value.borrower.phone,
                                    class: "hover:underline"
                                  }, toDisplayString(selectedReservation.value.borrower.phone), 9, ["href"])
                                ])) : createCommentVNode("", true),
                                selectedReservation.value.borrower.email ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex items-center gap-2"
                                }, [
                                  createVNode(unref(Mail), { class: "h-4 w-4" }),
                                  createVNode("a", {
                                    href: "mailto:" + selectedReservation.value.borrower.email,
                                    class: "hover:underline"
                                  }, toDisplayString(selectedReservation.value.borrower.email), 9, ["href"])
                                ])) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "mt-4 pt-4 border-t border-border" }, [
                                createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                                  createVNode(unref(User), { class: "h-4 w-4" }),
                                  createVNode("span", { class: "font-medium" }, toDisplayString(selectedReservation.value.borrower.contact.name), 1)
                                ]),
                                createVNode("div", { class: "space-y-2 text-sm text-muted-foreground" }, [
                                  selectedReservation.value.borrower.contact.phone ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "flex items-center gap-2"
                                  }, [
                                    createVNode(unref(Phone), { class: "h-4 w-4" }),
                                    createVNode("a", {
                                      href: "tel:" + selectedReservation.value.borrower.contact.phone,
                                      class: "hover:underline"
                                    }, toDisplayString(selectedReservation.value.borrower.contact.phone), 9, ["href"])
                                  ])) : createCommentVNode("", true),
                                  selectedReservation.value.borrower.contact.email ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "flex items-center gap-2"
                                  }, [
                                    createVNode(unref(Mail), { class: "h-4 w-4" }),
                                    createVNode("a", {
                                      href: "mailto:" + selectedReservation.value.borrower.contact.email,
                                      class: "hover:underline"
                                    }, toDisplayString(selectedReservation.value.borrower.contact.email), 9, ["href"])
                                  ])) : createCommentVNode("", true)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "flex items-start gap-2" }, [
                              createVNode(unref(Package), { class: "h-4 w-4 mt-1" }),
                              createVNode("div", { class: "flex-1" }, [
                                createVNode("h4", { class: "font-medium mb-2" }, "Équipements"),
                                createVNode("ul", { class: "space-y-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(selectedReservation.value.items, (item) => {
                                    return openBlock(), createBlock("li", {
                                      key: item.equipment,
                                      class: "flex items-center gap-2 text-sm"
                                    }, [
                                      createVNode(unref(_sfc_main$g), null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.quantity), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("span", null, toDisplayString(item.equipment), 1)
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                              createVNode(unref(_sfc_main$5), {
                                as: "a",
                                href: _ctx.route("app.organizations.reservations.out.edit", selectedReservation.value)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Gérer la réservation ")
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$c), {
              open: isNewReservationModalOpen.value,
              "onUpdate:open": closeManualReservationModal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$d), { class: "sm:max-w-[600px]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$e), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$f), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Nouvelle réservation manuelle`);
                                  } else {
                                    return [
                                      createTextVNode("Nouvelle réservation manuelle")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$f), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Nouvelle réservation manuelle")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (selectedDates.value.start && selectedDates.value.end) {
                          _push4(`<div${_scopeId3}>`);
                          _push4(ssrRenderComponent(_sfc_main$1, {
                            "start-date": selectedDates.value.start,
                            "end-date": selectedDates.value.end,
                            equipments: __props.equipments,
                            onCancel: closeManualReservationModal
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(unref(_sfc_main$e), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$f), null, {
                                default: withCtx(() => [
                                  createTextVNode("Nouvelle réservation manuelle")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          selectedDates.value.start && selectedDates.value.end ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode(_sfc_main$1, {
                              "start-date": selectedDates.value.start,
                              "end-date": selectedDates.value.end,
                              equipments: __props.equipments,
                              onCancel: closeManualReservationModal
                            }, null, 8, ["start-date", "end-date", "equipments"])
                          ])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$d), { class: "sm:max-w-[600px]" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$e), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$f), null, {
                              default: withCtx(() => [
                                createTextVNode("Nouvelle réservation manuelle")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        selectedDates.value.start && selectedDates.value.end ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode(_sfc_main$1, {
                            "start-date": selectedDates.value.start,
                            "end-date": selectedDates.value.end,
                            equipments: __props.equipments,
                            onCancel: closeManualReservationModal
                          }, null, 8, ["start-date", "end-date", "equipments"])
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 py-8" }, [
                createVNode("div", { class: "calendar-wrapper" }, [
                  createVNode(unref(FullCalendar), {
                    options: {
                      plugins: [unref(dayGridPlugin), unref(timeGridPlugin), unref(interactionPlugin)],
                      initialView: "dayGridMonth",
                      headerToolbar: {
                        left: "prev today",
                        center: "title",
                        right: "next"
                      },
                      events: calendarEvents.value,
                      eventClick: handleEventClick,
                      locale: unref(frLocale),
                      height: "auto",
                      editable: false,
                      selectable: true,
                      select: handleDateSelect,
                      selectMirror: true,
                      nowIndicator: true,
                      displayEventTime: false,
                      dayMaxEvents: true,
                      views: {
                        dayGrid: {
                          dayMaxEvents: 4
                        }
                      }
                    }
                  }, null, 8, ["options"])
                ]),
                createVNode(unref(_sfc_main$c), {
                  open: isModalOpen.value,
                  "onUpdate:open": closeModal
                }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$d), { class: "sm:max-w-[500px]" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$e), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$f), null, {
                              default: withCtx(() => [
                                createTextVNode("Détails de la location")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        selectedReservation.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "space-y-6"
                        }, [
                          createVNode("div", { class: "flex items-start gap-4" }, [
                            createVNode(unref(_sfc_main$g), {
                              class: selectedReservation.value.status.color
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(selectedReservation.value.status.label), 1)
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ]),
                          createVNode("div", { class: "grid gap-4" }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode(unref(CalendarDays), { class: "h-4 w-4" }),
                              createVNode("span", null, "Du " + toDisplayString(new Date(selectedReservation.value.start).toLocaleDateString()) + " au " + toDisplayString(new Date(selectedReservation.value.end).toLocaleDateString()), 1)
                            ]),
                            createVNode("div", { class: "rounded-lg bg-muted p-4" }, [
                              createVNode("div", { class: "flex items-center gap-2 mb-3" }, [
                                createVNode(unref(Building2), { class: "h-4 w-4" }),
                                createVNode("span", { class: "font-medium" }, toDisplayString(selectedReservation.value.borrower.name), 1)
                              ]),
                              createVNode("div", { class: "space-y-2 text-sm text-muted-foreground" }, [
                                selectedReservation.value.borrower.phone ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "flex items-center gap-2"
                                }, [
                                  createVNode(unref(Phone), { class: "h-4 w-4" }),
                                  createVNode("a", {
                                    href: "tel:" + selectedReservation.value.borrower.phone,
                                    class: "hover:underline"
                                  }, toDisplayString(selectedReservation.value.borrower.phone), 9, ["href"])
                                ])) : createCommentVNode("", true),
                                selectedReservation.value.borrower.email ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex items-center gap-2"
                                }, [
                                  createVNode(unref(Mail), { class: "h-4 w-4" }),
                                  createVNode("a", {
                                    href: "mailto:" + selectedReservation.value.borrower.email,
                                    class: "hover:underline"
                                  }, toDisplayString(selectedReservation.value.borrower.email), 9, ["href"])
                                ])) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "mt-4 pt-4 border-t border-border" }, [
                                createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                                  createVNode(unref(User), { class: "h-4 w-4" }),
                                  createVNode("span", { class: "font-medium" }, toDisplayString(selectedReservation.value.borrower.contact.name), 1)
                                ]),
                                createVNode("div", { class: "space-y-2 text-sm text-muted-foreground" }, [
                                  selectedReservation.value.borrower.contact.phone ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "flex items-center gap-2"
                                  }, [
                                    createVNode(unref(Phone), { class: "h-4 w-4" }),
                                    createVNode("a", {
                                      href: "tel:" + selectedReservation.value.borrower.contact.phone,
                                      class: "hover:underline"
                                    }, toDisplayString(selectedReservation.value.borrower.contact.phone), 9, ["href"])
                                  ])) : createCommentVNode("", true),
                                  selectedReservation.value.borrower.contact.email ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "flex items-center gap-2"
                                  }, [
                                    createVNode(unref(Mail), { class: "h-4 w-4" }),
                                    createVNode("a", {
                                      href: "mailto:" + selectedReservation.value.borrower.contact.email,
                                      class: "hover:underline"
                                    }, toDisplayString(selectedReservation.value.borrower.contact.email), 9, ["href"])
                                  ])) : createCommentVNode("", true)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "flex items-start gap-2" }, [
                              createVNode(unref(Package), { class: "h-4 w-4 mt-1" }),
                              createVNode("div", { class: "flex-1" }, [
                                createVNode("h4", { class: "font-medium mb-2" }, "Équipements"),
                                createVNode("ul", { class: "space-y-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(selectedReservation.value.items, (item) => {
                                    return openBlock(), createBlock("li", {
                                      key: item.equipment,
                                      class: "flex items-center gap-2 text-sm"
                                    }, [
                                      createVNode(unref(_sfc_main$g), null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.quantity), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("span", null, toDisplayString(item.equipment), 1)
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                              createVNode(unref(_sfc_main$5), {
                                as: "a",
                                href: _ctx.route("app.organizations.reservations.out.edit", selectedReservation.value)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Gérer la réservation ")
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["open"]),
                createVNode(unref(_sfc_main$c), {
                  open: isNewReservationModalOpen.value,
                  "onUpdate:open": closeManualReservationModal
                }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$d), { class: "sm:max-w-[600px]" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$e), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$f), null, {
                              default: withCtx(() => [
                                createTextVNode("Nouvelle réservation manuelle")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        selectedDates.value.start && selectedDates.value.end ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode(_sfc_main$1, {
                            "start-date": selectedDates.value.start,
                            "end-date": selectedDates.value.end,
                            equipments: __props.equipments,
                            onCancel: closeManualReservationModal
                          }, null, 8, ["start-date", "end-date", "equipments"])
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["open"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Calendar/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
