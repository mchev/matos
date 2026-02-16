import { mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, withModifiers, resolveDynamicComponent, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderVNode, ssrRenderClass } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import _sfc_main$1 from "./Layout-cWP1qhTp.js";
import { _ as _sfc_main$b } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$2, d as _sfc_main$3 } from "./CardTitle-rMLiyiHU.js";
import { _ as _sfc_main$5 } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$4 } from "./Label-DLRZNtyA.js";
import { _ as _sfc_main$c, a as _sfc_main$d, b as _sfc_main$e, c as _sfc_main$f, d as _sfc_main$g, e as _sfc_main$h } from "./TableHeader-B4NNsC_2.js";
import { _ as _sfc_main$6, a as _sfc_main$7, b as _sfc_main$8, c as _sfc_main$9, d as _sfc_main$a } from "./SelectValue-BSiknP0M.js";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-vue-next";
import { _ as _sfc_main$i } from "./Pagination-BMNtxIMF.js";
import "./AppLayout-B3jJCr1A.js";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "reka-ui";
import "@vueuse/core";
import "@heroicons/vue/24/outline";
import "./index-9VOASAGY.js";
import "class-variance-authority";
import "vue-sonner";
import "clsx";
import "tailwind-merge";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    organization: {
      type: Object,
      required: true
    },
    reservations: {
      type: Object,
      required: true
    },
    filters: {
      type: Object,
      required: true
    },
    can: {
      type: Object,
      required: true
    },
    statuses: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f;
    const props = __props;
    const filters = useForm({
      search: ((_a = props.filters) == null ? void 0 : _a.search) ?? "",
      status: ((_b = props.filters) == null ? void 0 : _b.status) ?? null,
      start_date: ((_c = props.filters) == null ? void 0 : _c.start_date) ?? "",
      end_date: ((_d = props.filters) == null ? void 0 : _d.end_date) ?? "",
      sort: ((_e = props.filters) == null ? void 0 : _e.sort) ?? "start_date",
      direction: ((_f = props.filters) == null ? void 0 : _f.direction) ?? "desc"
    });
    const filter = () => {
      filters.get(route("app.organizations.reservations.out.index", props.organization), {
        preserveState: true,
        preserveScroll: true
      });
    };
    const resetFilters = () => {
      filters.search = "";
      filters.status = null;
      filters.start_date = "";
      filters.end_date = "";
      filters.sort = "start_date";
      filters.direction = "desc";
      filter();
    };
    const sort = (column) => {
      if (filters.sort === column) {
        filters.direction = filters.direction === "asc" ? "desc" : "asc";
      } else {
        filters.sort = column;
        filters.direction = "asc";
      }
      filter();
    };
    const getSortIcon = (column) => {
      if (filters.sort !== column) return ArrowUpDown;
      return filters.direction === "asc" ? ArrowUp : ArrowDown;
    };
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Réservations - " + __props.organization.name
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center"${_scopeId}><div${_scopeId}><h2 class="font-semibold text-xl leading-tight"${_scopeId}> Réservations (${ssrInterpolate(__props.reservations.total)}) </h2><p class="text-sm text-muted-foreground"${_scopeId}>Matériel que vous louez ou prêtez à d&#39;autres organisations</p></div>`);
            if (__props.can.create) {
              _push2(ssrRenderComponent(unref(_sfc_main$b), {
                as: "a",
                href: _ctx.route("app.organizations.reservations.out.create", __props.organization),
                variant: "default",
                size: "default"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Nouvelle réservation `);
                  } else {
                    return [
                      createTextVNode(" Nouvelle réservation ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center" }, [
                createVNode("div", null, [
                  createVNode("h2", { class: "font-semibold text-xl leading-tight" }, " Réservations (" + toDisplayString(__props.reservations.total) + ") ", 1),
                  createVNode("p", { class: "text-sm text-muted-foreground" }, "Matériel que vous louez ou prêtez à d'autres organisations")
                ]),
                __props.can.create ? (openBlock(), createBlock(unref(_sfc_main$b), {
                  key: 0,
                  as: "a",
                  href: _ctx.route("app.organizations.reservations.out.create", __props.organization),
                  variant: "default",
                  size: "default"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Nouvelle réservation ")
                  ]),
                  _: 1
                }, 8, ["href"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Réservations" }, null, _parent2, _scopeId));
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "mb-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { class: "p-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<form${_scopeId3}><div class="flex flex-wrap items-end gap-6"${_scopeId3}><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$4), {
                          for: "search",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Rechercher`);
                            } else {
                              return [
                                createTextVNode("Rechercher")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$5), {
                          id: "search",
                          modelValue: unref(filters).search,
                          "onUpdate:modelValue": ($event) => unref(filters).search = $event,
                          type: "text",
                          placeholder: "Matériel, utilisateur...",
                          onInput: filter
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$4), {
                          for: "status",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Statut`);
                            } else {
                              return [
                                createTextVNode("Statut")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), {
                          modelValue: unref(filters).status,
                          "onUpdate:modelValue": [($event) => unref(filters).status = $event, filter]
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$7), { class: "h-9" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$8), { placeholder: "Tous" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$8), { placeholder: "Tous" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$9), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$a), { value: null }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Tous les statuts`);
                                        } else {
                                          return [
                                            createTextVNode("Tous les statuts")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(__props.statuses, (status) => {
                                      _push6(ssrRenderComponent(unref(_sfc_main$a), {
                                        key: status.value,
                                        value: status.value
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(status.label)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(status.label), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$a), { value: null }, {
                                        default: withCtx(() => [
                                          createTextVNode("Tous les statuts")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.statuses, (status) => {
                                        return openBlock(), createBlock(unref(_sfc_main$a), {
                                          key: status.value,
                                          value: status.value
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(status.label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$7), { class: "h-9" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$8), { placeholder: "Tous" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$9), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$a), { value: null }, {
                                      default: withCtx(() => [
                                        createTextVNode("Tous les statuts")
                                      ]),
                                      _: 1
                                    }),
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.statuses, (status) => {
                                      return openBlock(), createBlock(unref(_sfc_main$a), {
                                        key: status.value,
                                        value: status.value
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(status.label), 1)
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
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$4), {
                          for: "start_date",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Date de début`);
                            } else {
                              return [
                                createTextVNode("Date de début")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$5), {
                          id: "start_date",
                          modelValue: unref(filters).start_date,
                          "onUpdate:modelValue": ($event) => unref(filters).start_date = $event,
                          type: "date",
                          class: "h-9"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$4), {
                          for: "end_date",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Date de fin`);
                            } else {
                              return [
                                createTextVNode("Date de fin")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$5), {
                          id: "end_date",
                          modelValue: unref(filters).end_date,
                          "onUpdate:modelValue": ($event) => unref(filters).end_date = $event,
                          type: "date",
                          class: "h-9"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="flex gap-2 ml-auto"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$b), {
                          type: "button",
                          variant: "outline",
                          onClick: resetFilters,
                          size: "sm",
                          class: "h-9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Réinitialiser `);
                            } else {
                              return [
                                createTextVNode(" Réinitialiser ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$b), {
                          type: "submit",
                          variant: "default",
                          size: "sm",
                          class: "h-9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Filtrer `);
                            } else {
                              return [
                                createTextVNode(" Filtrer ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div></form>`);
                      } else {
                        return [
                          createVNode("form", {
                            onSubmit: withModifiers(filter, ["prevent"])
                          }, [
                            createVNode("div", { class: "flex flex-wrap items-end gap-6" }, [
                              createVNode("div", null, [
                                createVNode(unref(_sfc_main$4), {
                                  for: "search",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Rechercher")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$5), {
                                  id: "search",
                                  modelValue: unref(filters).search,
                                  "onUpdate:modelValue": ($event) => unref(filters).search = $event,
                                  type: "text",
                                  placeholder: "Matériel, utilisateur...",
                                  onInput: filter
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", null, [
                                createVNode(unref(_sfc_main$4), {
                                  for: "status",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Statut")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$6), {
                                  modelValue: unref(filters).status,
                                  "onUpdate:modelValue": [($event) => unref(filters).status = $event, filter]
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), { class: "h-9" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$8), { placeholder: "Tous" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$9), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$a), { value: null }, {
                                          default: withCtx(() => [
                                            createTextVNode("Tous les statuts")
                                          ]),
                                          _: 1
                                        }),
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.statuses, (status) => {
                                          return openBlock(), createBlock(unref(_sfc_main$a), {
                                            key: status.value,
                                            value: status.value
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(status.label), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", null, [
                                createVNode(unref(_sfc_main$4), {
                                  for: "start_date",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Date de début")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$5), {
                                  id: "start_date",
                                  modelValue: unref(filters).start_date,
                                  "onUpdate:modelValue": ($event) => unref(filters).start_date = $event,
                                  type: "date",
                                  class: "h-9"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", null, [
                                createVNode(unref(_sfc_main$4), {
                                  for: "end_date",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Date de fin")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$5), {
                                  id: "end_date",
                                  modelValue: unref(filters).end_date,
                                  "onUpdate:modelValue": ($event) => unref(filters).end_date = $event,
                                  type: "date",
                                  class: "h-9"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "flex gap-2 ml-auto" }, [
                                createVNode(unref(_sfc_main$b), {
                                  type: "button",
                                  variant: "outline",
                                  onClick: resetFilters,
                                  size: "sm",
                                  class: "h-9"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Réinitialiser ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), {
                                  type: "submit",
                                  variant: "default",
                                  size: "sm",
                                  class: "h-9"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Filtrer ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ], 32)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), { class: "p-4" }, {
                      default: withCtx(() => [
                        createVNode("form", {
                          onSubmit: withModifiers(filter, ["prevent"])
                        }, [
                          createVNode("div", { class: "flex flex-wrap items-end gap-6" }, [
                            createVNode("div", null, [
                              createVNode(unref(_sfc_main$4), {
                                for: "search",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Rechercher")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$5), {
                                id: "search",
                                modelValue: unref(filters).search,
                                "onUpdate:modelValue": ($event) => unref(filters).search = $event,
                                type: "text",
                                placeholder: "Matériel, utilisateur...",
                                onInput: filter
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", null, [
                              createVNode(unref(_sfc_main$4), {
                                for: "status",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Statut")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$6), {
                                modelValue: unref(filters).status,
                                "onUpdate:modelValue": [($event) => unref(filters).status = $event, filter]
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), { class: "h-9" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$8), { placeholder: "Tous" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$9), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), { value: null }, {
                                        default: withCtx(() => [
                                          createTextVNode("Tous les statuts")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.statuses, (status) => {
                                        return openBlock(), createBlock(unref(_sfc_main$a), {
                                          key: status.value,
                                          value: status.value
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(status.label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", null, [
                              createVNode(unref(_sfc_main$4), {
                                for: "start_date",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Date de début")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$5), {
                                id: "start_date",
                                modelValue: unref(filters).start_date,
                                "onUpdate:modelValue": ($event) => unref(filters).start_date = $event,
                                type: "date",
                                class: "h-9"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", null, [
                              createVNode(unref(_sfc_main$4), {
                                for: "end_date",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Date de fin")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$5), {
                                id: "end_date",
                                modelValue: unref(filters).end_date,
                                "onUpdate:modelValue": ($event) => unref(filters).end_date = $event,
                                type: "date",
                                class: "h-9"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "flex gap-2 ml-auto" }, [
                              createVNode(unref(_sfc_main$b), {
                                type: "button",
                                variant: "outline",
                                onClick: resetFilters,
                                size: "sm",
                                class: "h-9"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Réinitialiser ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$b), {
                                type: "submit",
                                variant: "default",
                                size: "sm",
                                class: "h-9"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Filtrer ")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ], 32)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$2), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { class: "p-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (__props.reservations.data.length === 0) {
                          _push4(`<div class="text-center py-12"${_scopeId3}><p class="text-muted-foreground text-lg"${_scopeId3}> Aucune réservation trouvée </p>`);
                          if (__props.can.create) {
                            _push4(ssrRenderComponent(unref(_sfc_main$b), {
                              as: "a",
                              href: _ctx.route("app.organizations.reservations.out.create", __props.organization),
                              variant: "default",
                              class: "mt-4"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` Nouvelle réservation `);
                                } else {
                                  return [
                                    createTextVNode(" Nouvelle réservation ")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        } else {
                          _push4(`<div${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$c), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$d), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(_sfc_main$e), null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(_sfc_main$f), {
                                              class: "cursor-pointer hover:bg-muted/50",
                                              onClick: ($event) => sort("borrower_organization.name")
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="flex items-center space-x-2"${_scopeId7}><span${_scopeId7}>Destinataire</span>`);
                                                  ssrRenderVNode(_push8, createVNode(resolveDynamicComponent(getSortIcon("borrower_organization.name")), { class: "w-4 h-4" }, null), _parent8, _scopeId7);
                                                  _push8(`</div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "flex items-center space-x-2" }, [
                                                      createVNode("span", null, "Destinataire"),
                                                      (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("borrower_organization.name")), { class: "w-4 h-4" }))
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$f), {
                                              class: "cursor-pointer hover:bg-muted/50",
                                              onClick: ($event) => sort("user.name")
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="flex items-center space-x-2"${_scopeId7}><span${_scopeId7}>Contact</span>`);
                                                  ssrRenderVNode(_push8, createVNode(resolveDynamicComponent(getSortIcon("user.name")), { class: "w-4 h-4" }, null), _parent8, _scopeId7);
                                                  _push8(`</div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "flex items-center space-x-2" }, [
                                                      createVNode("span", null, "Contact"),
                                                      (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("user.name")), { class: "w-4 h-4" }))
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$f), {
                                              class: "cursor-pointer hover:bg-muted/50",
                                              onClick: ($event) => sort("start_date")
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="flex items-center space-x-2"${_scopeId7}><span${_scopeId7}>Période</span>`);
                                                  ssrRenderVNode(_push8, createVNode(resolveDynamicComponent(getSortIcon("start_date")), { class: "w-4 h-4" }, null), _parent8, _scopeId7);
                                                  _push8(`</div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "flex items-center space-x-2" }, [
                                                      createVNode("span", null, "Période"),
                                                      (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("start_date")), { class: "w-4 h-4" }))
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$f), {
                                              class: "cursor-pointer hover:bg-muted/50",
                                              onClick: ($event) => sort("status")
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="flex items-center space-x-2"${_scopeId7}><span${_scopeId7}>Statut</span>`);
                                                  ssrRenderVNode(_push8, createVNode(resolveDynamicComponent(getSortIcon("status")), { class: "w-4 h-4" }, null), _parent8, _scopeId7);
                                                  _push8(`</div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "flex items-center space-x-2" }, [
                                                      createVNode("span", null, "Statut"),
                                                      (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("status")), { class: "w-4 h-4" }))
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$f), { class: "text-right" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Actions`);
                                                } else {
                                                  return [
                                                    createTextVNode("Actions")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(_sfc_main$f), {
                                                class: "cursor-pointer hover:bg-muted/50",
                                                onClick: ($event) => sort("borrower_organization.name")
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "flex items-center space-x-2" }, [
                                                    createVNode("span", null, "Destinataire"),
                                                    (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("borrower_organization.name")), { class: "w-4 h-4" }))
                                                  ])
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"]),
                                              createVNode(unref(_sfc_main$f), {
                                                class: "cursor-pointer hover:bg-muted/50",
                                                onClick: ($event) => sort("user.name")
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "flex items-center space-x-2" }, [
                                                    createVNode("span", null, "Contact"),
                                                    (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("user.name")), { class: "w-4 h-4" }))
                                                  ])
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"]),
                                              createVNode(unref(_sfc_main$f), {
                                                class: "cursor-pointer hover:bg-muted/50",
                                                onClick: ($event) => sort("start_date")
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "flex items-center space-x-2" }, [
                                                    createVNode("span", null, "Période"),
                                                    (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("start_date")), { class: "w-4 h-4" }))
                                                  ])
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"]),
                                              createVNode(unref(_sfc_main$f), {
                                                class: "cursor-pointer hover:bg-muted/50",
                                                onClick: ($event) => sort("status")
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "flex items-center space-x-2" }, [
                                                    createVNode("span", null, "Statut"),
                                                    (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("status")), { class: "w-4 h-4" }))
                                                  ])
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"]),
                                              createVNode(unref(_sfc_main$f), { class: "text-right" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Actions")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(_sfc_main$e), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$f), {
                                              class: "cursor-pointer hover:bg-muted/50",
                                              onClick: ($event) => sort("borrower_organization.name")
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "flex items-center space-x-2" }, [
                                                  createVNode("span", null, "Destinataire"),
                                                  (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("borrower_organization.name")), { class: "w-4 h-4" }))
                                                ])
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"]),
                                            createVNode(unref(_sfc_main$f), {
                                              class: "cursor-pointer hover:bg-muted/50",
                                              onClick: ($event) => sort("user.name")
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "flex items-center space-x-2" }, [
                                                  createVNode("span", null, "Contact"),
                                                  (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("user.name")), { class: "w-4 h-4" }))
                                                ])
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"]),
                                            createVNode(unref(_sfc_main$f), {
                                              class: "cursor-pointer hover:bg-muted/50",
                                              onClick: ($event) => sort("start_date")
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "flex items-center space-x-2" }, [
                                                  createVNode("span", null, "Période"),
                                                  (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("start_date")), { class: "w-4 h-4" }))
                                                ])
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"]),
                                            createVNode(unref(_sfc_main$f), {
                                              class: "cursor-pointer hover:bg-muted/50",
                                              onClick: ($event) => sort("status")
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "flex items-center space-x-2" }, [
                                                  createVNode("span", null, "Statut"),
                                                  (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("status")), { class: "w-4 h-4" }))
                                                ])
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"]),
                                            createVNode(unref(_sfc_main$f), { class: "text-right" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Actions")
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
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$g), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(__props.reservations.data, (reservation) => {
                                        _push6(ssrRenderComponent(unref(_sfc_main$e), {
                                          key: reservation.id
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(unref(_sfc_main$h), { class: "font-medium" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(unref(Link), {
                                                      href: _ctx.route("app.organizations.reservations.out.edit", reservation)
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(reservation.borrower_organization.name)}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(reservation.borrower_organization.name), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(unref(Link), {
                                                        href: _ctx.route("app.organizations.reservations.out.edit", reservation)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(reservation.borrower_organization.name), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["href"])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(unref(_sfc_main$h), null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(reservation.user.name)}<br${_scopeId7}><span class="text-xs text-gray-500"${_scopeId7}>${ssrInterpolate(reservation.user.phone)}</span>`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(reservation.user.name), 1),
                                                      createVNode("br"),
                                                      createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(reservation.user.phone), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(unref(_sfc_main$h), null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(` Du ${ssrInterpolate(formatDate(reservation.start_date))}<br${_scopeId7}> au ${ssrInterpolate(formatDate(reservation.end_date))}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(" Du " + toDisplayString(formatDate(reservation.start_date)), 1),
                                                      createVNode("br"),
                                                      createTextVNode(" au " + toDisplayString(formatDate(reservation.end_date)), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(unref(_sfc_main$h), null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<span class="${ssrRenderClass([
                                                      reservation.status_color,
                                                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                                    ])}"${_scopeId7}>${ssrInterpolate(reservation.status_label)}</span>`);
                                                  } else {
                                                    return [
                                                      createVNode("span", {
                                                        class: [
                                                          reservation.status_color,
                                                          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                                        ]
                                                      }, toDisplayString(reservation.status_label), 3)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(unref(_sfc_main$h), { class: "text-right" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<div class="flex items-center justify-end space-x-2"${_scopeId7}>`);
                                                    _push8(ssrRenderComponent(unref(_sfc_main$b), { asChild: "" }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(unref(Link), {
                                                            href: _ctx.route("app.organizations.reservations.out.edit", reservation)
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(` Gérer `);
                                                              } else {
                                                                return [
                                                                  createTextVNode(" Gérer ")
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(unref(Link), {
                                                              href: _ctx.route("app.organizations.reservations.out.edit", reservation)
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Gérer ")
                                                              ]),
                                                              _: 1
                                                            }, 8, ["href"])
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    if (__props.can.update) {
                                                      _push8(ssrRenderComponent(unref(_sfc_main$b), {
                                                        as: "a",
                                                        href: _ctx.route("app.organizations.reservations.out.edit", reservation),
                                                        size: "sm"
                                                      }, {
                                                        default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                          if (_push9) {
                                                            _push9(` Modifier `);
                                                          } else {
                                                            return [
                                                              createTextVNode(" Modifier ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 2
                                                      }, _parent8, _scopeId7));
                                                    } else {
                                                      _push8(`<!---->`);
                                                    }
                                                    _push8(`</div>`);
                                                  } else {
                                                    return [
                                                      createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                                                        createVNode(unref(_sfc_main$b), { asChild: "" }, {
                                                          default: withCtx(() => [
                                                            createVNode(unref(Link), {
                                                              href: _ctx.route("app.organizations.reservations.out.edit", reservation)
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Gérer ")
                                                              ]),
                                                              _: 1
                                                            }, 8, ["href"])
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        __props.can.update ? (openBlock(), createBlock(unref(_sfc_main$b), {
                                                          key: 0,
                                                          as: "a",
                                                          href: _ctx.route("app.organizations.reservations.out.edit", reservation),
                                                          size: "sm"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Modifier ")
                                                          ]),
                                                          _: 1
                                                        }, 8, ["href"])) : createCommentVNode("", true)
                                                      ])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(unref(_sfc_main$h), { class: "font-medium" }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Link), {
                                                      href: _ctx.route("app.organizations.reservations.out.edit", reservation)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(reservation.borrower_organization.name), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["href"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(unref(_sfc_main$h), null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(reservation.user.name), 1),
                                                    createVNode("br"),
                                                    createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(reservation.user.phone), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(unref(_sfc_main$h), null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Du " + toDisplayString(formatDate(reservation.start_date)), 1),
                                                    createVNode("br"),
                                                    createTextVNode(" au " + toDisplayString(formatDate(reservation.end_date)), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(unref(_sfc_main$h), null, {
                                                  default: withCtx(() => [
                                                    createVNode("span", {
                                                      class: [
                                                        reservation.status_color,
                                                        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                                      ]
                                                    }, toDisplayString(reservation.status_label), 3)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(unref(_sfc_main$h), { class: "text-right" }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                                                      createVNode(unref(_sfc_main$b), { asChild: "" }, {
                                                        default: withCtx(() => [
                                                          createVNode(unref(Link), {
                                                            href: _ctx.route("app.organizations.reservations.out.edit", reservation)
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Gérer ")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["href"])
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      __props.can.update ? (openBlock(), createBlock(unref(_sfc_main$b), {
                                                        key: 0,
                                                        as: "a",
                                                        href: _ctx.route("app.organizations.reservations.out.edit", reservation),
                                                        size: "sm"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Modifier ")
                                                        ]),
                                                        _: 1
                                                      }, 8, ["href"])) : createCommentVNode("", true)
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.reservations.data, (reservation) => {
                                          return openBlock(), createBlock(unref(_sfc_main$e), {
                                            key: reservation.id
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$h), { class: "font-medium" }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Link), {
                                                    href: _ctx.route("app.organizations.reservations.out.edit", reservation)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(reservation.borrower_organization.name), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["href"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$h), null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(reservation.user.name), 1),
                                                  createVNode("br"),
                                                  createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(reservation.user.phone), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$h), null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Du " + toDisplayString(formatDate(reservation.start_date)), 1),
                                                  createVNode("br"),
                                                  createTextVNode(" au " + toDisplayString(formatDate(reservation.end_date)), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$h), null, {
                                                default: withCtx(() => [
                                                  createVNode("span", {
                                                    class: [
                                                      reservation.status_color,
                                                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                                    ]
                                                  }, toDisplayString(reservation.status_label), 3)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$h), { class: "text-right" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                                                    createVNode(unref(_sfc_main$b), { asChild: "" }, {
                                                      default: withCtx(() => [
                                                        createVNode(unref(Link), {
                                                          href: _ctx.route("app.organizations.reservations.out.edit", reservation)
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Gérer ")
                                                          ]),
                                                          _: 1
                                                        }, 8, ["href"])
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    __props.can.update ? (openBlock(), createBlock(unref(_sfc_main$b), {
                                                      key: 0,
                                                      as: "a",
                                                      href: _ctx.route("app.organizations.reservations.out.edit", reservation),
                                                      size: "sm"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Modifier ")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["href"])) : createCommentVNode("", true)
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024)
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
                                  createVNode(unref(_sfc_main$d), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$e), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$f), {
                                            class: "cursor-pointer hover:bg-muted/50",
                                            onClick: ($event) => sort("borrower_organization.name")
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                                createVNode("span", null, "Destinataire"),
                                                (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("borrower_organization.name")), { class: "w-4 h-4" }))
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode(unref(_sfc_main$f), {
                                            class: "cursor-pointer hover:bg-muted/50",
                                            onClick: ($event) => sort("user.name")
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                                createVNode("span", null, "Contact"),
                                                (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("user.name")), { class: "w-4 h-4" }))
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode(unref(_sfc_main$f), {
                                            class: "cursor-pointer hover:bg-muted/50",
                                            onClick: ($event) => sort("start_date")
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                                createVNode("span", null, "Période"),
                                                (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("start_date")), { class: "w-4 h-4" }))
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode(unref(_sfc_main$f), {
                                            class: "cursor-pointer hover:bg-muted/50",
                                            onClick: ($event) => sort("status")
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                                createVNode("span", null, "Statut"),
                                                (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("status")), { class: "w-4 h-4" }))
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode(unref(_sfc_main$f), { class: "text-right" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Actions")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$g), null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.reservations.data, (reservation) => {
                                        return openBlock(), createBlock(unref(_sfc_main$e), {
                                          key: reservation.id
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$h), { class: "font-medium" }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Link), {
                                                  href: _ctx.route("app.organizations.reservations.out.edit", reservation)
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(reservation.borrower_organization.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["href"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$h), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(reservation.user.name), 1),
                                                createVNode("br"),
                                                createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(reservation.user.phone), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$h), null, {
                                              default: withCtx(() => [
                                                createTextVNode(" Du " + toDisplayString(formatDate(reservation.start_date)), 1),
                                                createVNode("br"),
                                                createTextVNode(" au " + toDisplayString(formatDate(reservation.end_date)), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$h), null, {
                                              default: withCtx(() => [
                                                createVNode("span", {
                                                  class: [
                                                    reservation.status_color,
                                                    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                                  ]
                                                }, toDisplayString(reservation.status_label), 3)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$h), { class: "text-right" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                                                  createVNode(unref(_sfc_main$b), { asChild: "" }, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(Link), {
                                                        href: _ctx.route("app.organizations.reservations.out.edit", reservation)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Gérer ")
                                                        ]),
                                                        _: 1
                                                      }, 8, ["href"])
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  __props.can.update ? (openBlock(), createBlock(unref(_sfc_main$b), {
                                                    key: 0,
                                                    as: "a",
                                                    href: _ctx.route("app.organizations.reservations.out.edit", reservation),
                                                    size: "sm"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Modifier ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["href"])) : createCommentVNode("", true)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024)
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
                          _push4(`<div class="mt-4"${_scopeId3}>`);
                          if (__props.reservations.links.length > 3) {
                            _push4(ssrRenderComponent(_sfc_main$i, {
                              links: __props.reservations.links
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div></div>`);
                        }
                      } else {
                        return [
                          __props.reservations.data.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-center py-12"
                          }, [
                            createVNode("p", { class: "text-muted-foreground text-lg" }, " Aucune réservation trouvée "),
                            __props.can.create ? (openBlock(), createBlock(unref(_sfc_main$b), {
                              key: 0,
                              as: "a",
                              href: _ctx.route("app.organizations.reservations.out.create", __props.organization),
                              variant: "default",
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Nouvelle réservation ")
                              ]),
                              _: 1
                            }, 8, ["href"])) : createCommentVNode("", true)
                          ])) : (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode(unref(_sfc_main$c), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$d), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$e), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$f), {
                                          class: "cursor-pointer hover:bg-muted/50",
                                          onClick: ($event) => sort("borrower_organization.name")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Destinataire"),
                                              (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("borrower_organization.name")), { class: "w-4 h-4" }))
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(unref(_sfc_main$f), {
                                          class: "cursor-pointer hover:bg-muted/50",
                                          onClick: ($event) => sort("user.name")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Contact"),
                                              (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("user.name")), { class: "w-4 h-4" }))
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(unref(_sfc_main$f), {
                                          class: "cursor-pointer hover:bg-muted/50",
                                          onClick: ($event) => sort("start_date")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Période"),
                                              (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("start_date")), { class: "w-4 h-4" }))
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(unref(_sfc_main$f), {
                                          class: "cursor-pointer hover:bg-muted/50",
                                          onClick: ($event) => sort("status")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Statut"),
                                              (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("status")), { class: "w-4 h-4" }))
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(unref(_sfc_main$f), { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Actions")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$g), null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.reservations.data, (reservation) => {
                                      return openBlock(), createBlock(unref(_sfc_main$e), {
                                        key: reservation.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$h), { class: "font-medium" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Link), {
                                                href: _ctx.route("app.organizations.reservations.out.edit", reservation)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(reservation.borrower_organization.name), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["href"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$h), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(reservation.user.name), 1),
                                              createVNode("br"),
                                              createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(reservation.user.phone), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$h), null, {
                                            default: withCtx(() => [
                                              createTextVNode(" Du " + toDisplayString(formatDate(reservation.start_date)), 1),
                                              createVNode("br"),
                                              createTextVNode(" au " + toDisplayString(formatDate(reservation.end_date)), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$h), null, {
                                            default: withCtx(() => [
                                              createVNode("span", {
                                                class: [
                                                  reservation.status_color,
                                                  "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                                ]
                                              }, toDisplayString(reservation.status_label), 3)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$h), { class: "text-right" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                                                createVNode(unref(_sfc_main$b), { asChild: "" }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Link), {
                                                      href: _ctx.route("app.organizations.reservations.out.edit", reservation)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Gérer ")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["href"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                __props.can.update ? (openBlock(), createBlock(unref(_sfc_main$b), {
                                                  key: 0,
                                                  as: "a",
                                                  href: _ctx.route("app.organizations.reservations.out.edit", reservation),
                                                  size: "sm"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Modifier ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["href"])) : createCommentVNode("", true)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "mt-4" }, [
                              __props.reservations.links.length > 3 ? (openBlock(), createBlock(_sfc_main$i, {
                                key: 0,
                                links: __props.reservations.links
                              }, null, 8, ["links"])) : createCommentVNode("", true)
                            ])
                          ]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), { class: "p-6" }, {
                      default: withCtx(() => [
                        __props.reservations.data.length === 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-center py-12"
                        }, [
                          createVNode("p", { class: "text-muted-foreground text-lg" }, " Aucune réservation trouvée "),
                          __props.can.create ? (openBlock(), createBlock(unref(_sfc_main$b), {
                            key: 0,
                            as: "a",
                            href: _ctx.route("app.organizations.reservations.out.create", __props.organization),
                            variant: "default",
                            class: "mt-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Nouvelle réservation ")
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true)
                        ])) : (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode(unref(_sfc_main$c), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$d), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$e), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$f), {
                                        class: "cursor-pointer hover:bg-muted/50",
                                        onClick: ($event) => sort("borrower_organization.name")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex items-center space-x-2" }, [
                                            createVNode("span", null, "Destinataire"),
                                            (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("borrower_organization.name")), { class: "w-4 h-4" }))
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(unref(_sfc_main$f), {
                                        class: "cursor-pointer hover:bg-muted/50",
                                        onClick: ($event) => sort("user.name")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex items-center space-x-2" }, [
                                            createVNode("span", null, "Contact"),
                                            (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("user.name")), { class: "w-4 h-4" }))
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(unref(_sfc_main$f), {
                                        class: "cursor-pointer hover:bg-muted/50",
                                        onClick: ($event) => sort("start_date")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex items-center space-x-2" }, [
                                            createVNode("span", null, "Période"),
                                            (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("start_date")), { class: "w-4 h-4" }))
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(unref(_sfc_main$f), {
                                        class: "cursor-pointer hover:bg-muted/50",
                                        onClick: ($event) => sort("status")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex items-center space-x-2" }, [
                                            createVNode("span", null, "Statut"),
                                            (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("status")), { class: "w-4 h-4" }))
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(unref(_sfc_main$f), { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Actions")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$g), null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.reservations.data, (reservation) => {
                                    return openBlock(), createBlock(unref(_sfc_main$e), {
                                      key: reservation.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$h), { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Link), {
                                              href: _ctx.route("app.organizations.reservations.out.edit", reservation)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(reservation.borrower_organization.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["href"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$h), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(reservation.user.name), 1),
                                            createVNode("br"),
                                            createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(reservation.user.phone), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$h), null, {
                                          default: withCtx(() => [
                                            createTextVNode(" Du " + toDisplayString(formatDate(reservation.start_date)), 1),
                                            createVNode("br"),
                                            createTextVNode(" au " + toDisplayString(formatDate(reservation.end_date)), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$h), null, {
                                          default: withCtx(() => [
                                            createVNode("span", {
                                              class: [
                                                reservation.status_color,
                                                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                              ]
                                            }, toDisplayString(reservation.status_label), 3)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$h), { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                                              createVNode(unref(_sfc_main$b), { asChild: "" }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Link), {
                                                    href: _ctx.route("app.organizations.reservations.out.edit", reservation)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Gérer ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["href"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              __props.can.update ? (openBlock(), createBlock(unref(_sfc_main$b), {
                                                key: 0,
                                                as: "a",
                                                href: _ctx.route("app.organizations.reservations.out.edit", reservation),
                                                size: "sm"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Modifier ")
                                                ]),
                                                _: 1
                                              }, 8, ["href"])) : createCommentVNode("", true)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "mt-4" }, [
                            __props.reservations.links.length > 3 ? (openBlock(), createBlock(_sfc_main$i, {
                              key: 0,
                              links: __props.reservations.links
                            }, null, 8, ["links"])) : createCommentVNode("", true)
                          ])
                        ]))
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
              createVNode(unref(Head), { title: "Réservations" }),
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode(unref(_sfc_main$2), { class: "mb-6" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$3), { class: "p-4" }, {
                        default: withCtx(() => [
                          createVNode("form", {
                            onSubmit: withModifiers(filter, ["prevent"])
                          }, [
                            createVNode("div", { class: "flex flex-wrap items-end gap-6" }, [
                              createVNode("div", null, [
                                createVNode(unref(_sfc_main$4), {
                                  for: "search",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Rechercher")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$5), {
                                  id: "search",
                                  modelValue: unref(filters).search,
                                  "onUpdate:modelValue": ($event) => unref(filters).search = $event,
                                  type: "text",
                                  placeholder: "Matériel, utilisateur...",
                                  onInput: filter
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", null, [
                                createVNode(unref(_sfc_main$4), {
                                  for: "status",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Statut")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$6), {
                                  modelValue: unref(filters).status,
                                  "onUpdate:modelValue": [($event) => unref(filters).status = $event, filter]
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), { class: "h-9" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$8), { placeholder: "Tous" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$9), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$a), { value: null }, {
                                          default: withCtx(() => [
                                            createTextVNode("Tous les statuts")
                                          ]),
                                          _: 1
                                        }),
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.statuses, (status) => {
                                          return openBlock(), createBlock(unref(_sfc_main$a), {
                                            key: status.value,
                                            value: status.value
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(status.label), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", null, [
                                createVNode(unref(_sfc_main$4), {
                                  for: "start_date",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Date de début")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$5), {
                                  id: "start_date",
                                  modelValue: unref(filters).start_date,
                                  "onUpdate:modelValue": ($event) => unref(filters).start_date = $event,
                                  type: "date",
                                  class: "h-9"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", null, [
                                createVNode(unref(_sfc_main$4), {
                                  for: "end_date",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Date de fin")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$5), {
                                  id: "end_date",
                                  modelValue: unref(filters).end_date,
                                  "onUpdate:modelValue": ($event) => unref(filters).end_date = $event,
                                  type: "date",
                                  class: "h-9"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "flex gap-2 ml-auto" }, [
                                createVNode(unref(_sfc_main$b), {
                                  type: "button",
                                  variant: "outline",
                                  onClick: resetFilters,
                                  size: "sm",
                                  class: "h-9"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Réinitialiser ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), {
                                  type: "submit",
                                  variant: "default",
                                  size: "sm",
                                  class: "h-9"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Filtrer ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ], 32)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$2), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$3), { class: "p-6" }, {
                        default: withCtx(() => [
                          __props.reservations.data.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-center py-12"
                          }, [
                            createVNode("p", { class: "text-muted-foreground text-lg" }, " Aucune réservation trouvée "),
                            __props.can.create ? (openBlock(), createBlock(unref(_sfc_main$b), {
                              key: 0,
                              as: "a",
                              href: _ctx.route("app.organizations.reservations.out.create", __props.organization),
                              variant: "default",
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Nouvelle réservation ")
                              ]),
                              _: 1
                            }, 8, ["href"])) : createCommentVNode("", true)
                          ])) : (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode(unref(_sfc_main$c), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$d), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$e), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$f), {
                                          class: "cursor-pointer hover:bg-muted/50",
                                          onClick: ($event) => sort("borrower_organization.name")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Destinataire"),
                                              (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("borrower_organization.name")), { class: "w-4 h-4" }))
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(unref(_sfc_main$f), {
                                          class: "cursor-pointer hover:bg-muted/50",
                                          onClick: ($event) => sort("user.name")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Contact"),
                                              (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("user.name")), { class: "w-4 h-4" }))
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(unref(_sfc_main$f), {
                                          class: "cursor-pointer hover:bg-muted/50",
                                          onClick: ($event) => sort("start_date")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Période"),
                                              (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("start_date")), { class: "w-4 h-4" }))
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(unref(_sfc_main$f), {
                                          class: "cursor-pointer hover:bg-muted/50",
                                          onClick: ($event) => sort("status")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Statut"),
                                              (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("status")), { class: "w-4 h-4" }))
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(unref(_sfc_main$f), { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Actions")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$g), null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.reservations.data, (reservation) => {
                                      return openBlock(), createBlock(unref(_sfc_main$e), {
                                        key: reservation.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$h), { class: "font-medium" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Link), {
                                                href: _ctx.route("app.organizations.reservations.out.edit", reservation)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(reservation.borrower_organization.name), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["href"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$h), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(reservation.user.name), 1),
                                              createVNode("br"),
                                              createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(reservation.user.phone), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$h), null, {
                                            default: withCtx(() => [
                                              createTextVNode(" Du " + toDisplayString(formatDate(reservation.start_date)), 1),
                                              createVNode("br"),
                                              createTextVNode(" au " + toDisplayString(formatDate(reservation.end_date)), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$h), null, {
                                            default: withCtx(() => [
                                              createVNode("span", {
                                                class: [
                                                  reservation.status_color,
                                                  "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                                ]
                                              }, toDisplayString(reservation.status_label), 3)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$h), { class: "text-right" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                                                createVNode(unref(_sfc_main$b), { asChild: "" }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Link), {
                                                      href: _ctx.route("app.organizations.reservations.out.edit", reservation)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Gérer ")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["href"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                __props.can.update ? (openBlock(), createBlock(unref(_sfc_main$b), {
                                                  key: 0,
                                                  as: "a",
                                                  href: _ctx.route("app.organizations.reservations.out.edit", reservation),
                                                  size: "sm"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Modifier ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["href"])) : createCommentVNode("", true)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "mt-4" }, [
                              __props.reservations.links.length > 3 ? (openBlock(), createBlock(_sfc_main$i, {
                                key: 0,
                                links: __props.reservations.links
                              }, null, 8, ["links"])) : createCommentVNode("", true)
                            ])
                          ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Reservations/Out/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
