import { computed, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, withModifiers, resolveDynamicComponent, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import { usePage, useForm, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AppLayout-B3jJCr1A.js";
import { _ as _sfc_main$i } from "./Pagination-BMNtxIMF.js";
import { _ as _sfc_main$b } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$2, d as _sfc_main$3 } from "./CardTitle-rMLiyiHU.js";
import { _ as _sfc_main$5 } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$4 } from "./Label-DLRZNtyA.js";
import { _ as _sfc_main$c, a as _sfc_main$d, b as _sfc_main$e, c as _sfc_main$f, d as _sfc_main$g, e as _sfc_main$h } from "./TableHeader-B4NNsC_2.js";
import { _ as _sfc_main$6, a as _sfc_main$7, b as _sfc_main$8, c as _sfc_main$9, d as _sfc_main$a } from "./SelectValue-BSiknP0M.js";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-vue-next";
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
    equipments: {
      type: Object,
      required: true
    },
    filters: {
      type: Object,
      required: true
    },
    allCategories: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f;
    const props = __props;
    const can = computed(() => usePage().props.auth.user.can);
    const filters = useForm({
      search: ((_a = props.filters) == null ? void 0 : _a.search) ?? "",
      category: ((_b = props.filters) == null ? void 0 : _b.category) ?? null,
      condition: ((_c = props.filters) == null ? void 0 : _c.condition) ?? null,
      availability: ((_d = props.filters) == null ? void 0 : _d.availability) ?? null,
      sort: ((_e = props.filters) == null ? void 0 : _e.sort) ?? "name",
      direction: ((_f = props.filters) == null ? void 0 : _f.direction) ?? "asc"
    });
    const filter = () => {
      filters.get(route("app.organizations.equipments.index"), {
        preserveState: true,
        preserveScroll: true
      });
    };
    const resetFilters = () => {
      filters.search = "";
      filters.category = null;
      filters.condition = null;
      filters.availability = null;
      filters.sort = "name";
      filters.direction = "asc";
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Matériel",
        description: "Liste du matériel de l'organisation"
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center"${_scopeId}><h2 class="font-semibold text-xl leading-tight"${_scopeId}> Inventaire du matériel de ${ssrInterpolate(__props.organization.name)} (${ssrInterpolate(__props.equipments.total)}) </h2>`);
            if (can.value.equipments.create) {
              _push2(ssrRenderComponent(unref(_sfc_main$b), { asChild: "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("app.organizations.equipments.create")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Ajouter du matériel `);
                        } else {
                          return [
                            createTextVNode(" Ajouter du matériel ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Link), {
                        href: _ctx.route("app.organizations.equipments.create")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Ajouter du matériel ")
                        ]),
                        _: 1
                      }, 8, ["href"])
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
                createVNode("h2", { class: "font-semibold text-xl leading-tight" }, " Inventaire du matériel de " + toDisplayString(__props.organization.name) + " (" + toDisplayString(__props.equipments.total) + ") ", 1),
                can.value.equipments.create ? (openBlock(), createBlock(unref(_sfc_main$b), {
                  key: 0,
                  asChild: ""
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Link), {
                      href: _ctx.route("app.organizations.equipments.create")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Ajouter du matériel ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
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
                          placeholder: "Nom, catégorie...",
                          onInput: filter
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$4), {
                          for: "category",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Catégorie`);
                            } else {
                              return [
                                createTextVNode("Catégorie")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), {
                          modelValue: unref(filters).category,
                          "onUpdate:modelValue": [($event) => unref(filters).category = $event, filter]
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$7), { class: "h-9" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$8), { placeholder: "Toutes" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$8), { placeholder: "Toutes" })
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
                                          _push7(`Toutes les catégories`);
                                        } else {
                                          return [
                                            createTextVNode("Toutes les catégories")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(__props.allCategories, (category) => {
                                      _push6(ssrRenderComponent(unref(_sfc_main$a), {
                                        key: category.id,
                                        value: category.name
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(category.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(category.name), 1)
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
                                          createTextVNode("Toutes les catégories")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.allCategories, (category) => {
                                        return openBlock(), createBlock(unref(_sfc_main$a), {
                                          key: category.id,
                                          value: category.name
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(category.name), 1)
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
                                    createVNode(unref(_sfc_main$8), { placeholder: "Toutes" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$9), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$a), { value: null }, {
                                      default: withCtx(() => [
                                        createTextVNode("Toutes les catégories")
                                      ]),
                                      _: 1
                                    }),
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.allCategories, (category) => {
                                      return openBlock(), createBlock(unref(_sfc_main$a), {
                                        key: category.id,
                                        value: category.name
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(category.name), 1)
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
                          for: "condition",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`État`);
                            } else {
                              return [
                                createTextVNode("État")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), {
                          modelValue: unref(filters).condition,
                          "onUpdate:modelValue": [($event) => unref(filters).condition = $event, filter]
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
                                          _push7(`Tous les états`);
                                        } else {
                                          return [
                                            createTextVNode("Tous les états")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(_sfc_main$a), { value: "new" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Neuf`);
                                        } else {
                                          return [
                                            createTextVNode("Neuf")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(_sfc_main$a), { value: "good" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Bon`);
                                        } else {
                                          return [
                                            createTextVNode("Bon")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(_sfc_main$a), { value: "fair" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Moyen`);
                                        } else {
                                          return [
                                            createTextVNode("Moyen")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(_sfc_main$a), { value: "poor" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Mauvais`);
                                        } else {
                                          return [
                                            createTextVNode("Mauvais")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$a), { value: null }, {
                                        default: withCtx(() => [
                                          createTextVNode("Tous les états")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$a), { value: "new" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Neuf")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$a), { value: "good" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Bon")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$a), { value: "fair" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Moyen")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$a), { value: "poor" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Mauvais")
                                        ]),
                                        _: 1
                                      })
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
                                        createTextVNode("Tous les états")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$a), { value: "new" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Neuf")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$a), { value: "good" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Bon")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$a), { value: "fair" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Moyen")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$a), { value: "poor" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Mauvais")
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
                        }, _parent4, _scopeId3));
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
                                  placeholder: "Nom, catégorie...",
                                  onInput: filter
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", null, [
                                createVNode(unref(_sfc_main$4), {
                                  for: "category",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Catégorie")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$6), {
                                  modelValue: unref(filters).category,
                                  "onUpdate:modelValue": [($event) => unref(filters).category = $event, filter]
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), { class: "h-9" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$8), { placeholder: "Toutes" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$9), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$a), { value: null }, {
                                          default: withCtx(() => [
                                            createTextVNode("Toutes les catégories")
                                          ]),
                                          _: 1
                                        }),
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.allCategories, (category) => {
                                          return openBlock(), createBlock(unref(_sfc_main$a), {
                                            key: category.id,
                                            value: category.name
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(category.name), 1)
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
                                  for: "condition",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("État")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$6), {
                                  modelValue: unref(filters).condition,
                                  "onUpdate:modelValue": [($event) => unref(filters).condition = $event, filter]
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
                                            createTextVNode("Tous les états")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$a), { value: "new" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Neuf")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$a), { value: "good" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Bon")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$a), { value: "fair" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Moyen")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$a), { value: "poor" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Mauvais")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
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
                                placeholder: "Nom, catégorie...",
                                onInput: filter
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", null, [
                              createVNode(unref(_sfc_main$4), {
                                for: "category",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Catégorie")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$6), {
                                modelValue: unref(filters).category,
                                "onUpdate:modelValue": [($event) => unref(filters).category = $event, filter]
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), { class: "h-9" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$8), { placeholder: "Toutes" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$9), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), { value: null }, {
                                        default: withCtx(() => [
                                          createTextVNode("Toutes les catégories")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.allCategories, (category) => {
                                        return openBlock(), createBlock(unref(_sfc_main$a), {
                                          key: category.id,
                                          value: category.name
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(category.name), 1)
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
                                for: "condition",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("État")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$6), {
                                modelValue: unref(filters).condition,
                                "onUpdate:modelValue": [($event) => unref(filters).condition = $event, filter]
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
                                          createTextVNode("Tous les états")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$a), { value: "new" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Neuf")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$a), { value: "good" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Bon")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$a), { value: "fair" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Moyen")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$a), { value: "poor" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Mauvais")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
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
                        if (__props.equipments.data.length === 0) {
                          _push4(`<div class="text-center py-12"${_scopeId3}><p class="text-muted-foreground text-lg"${_scopeId3}> Aucun matériel trouvé </p>`);
                          if (can.value.equipments.create) {
                            _push4(ssrRenderComponent(unref(_sfc_main$b), {
                              as: "a",
                              href: _ctx.route("app.organizations.equipments.create", __props.organization),
                              variant: "default",
                              class: "mt-4"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` Ajouter du matériel `);
                                } else {
                                  return [
                                    createTextVNode(" Ajouter du matériel ")
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
                                              onClick: ($event) => sort("name")
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="flex items-center space-x-2"${_scopeId7}><span${_scopeId7}>Nom</span>`);
                                                  ssrRenderVNode(_push8, createVNode(resolveDynamicComponent(getSortIcon("name")), { class: "w-4 h-4" }, null), _parent8, _scopeId7);
                                                  _push8(`</div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "flex items-center space-x-2" }, [
                                                      createVNode("span", null, "Nom"),
                                                      (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("name")), { class: "w-4 h-4" }))
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$f), {
                                              class: "cursor-pointer hover:bg-muted/50",
                                              onClick: ($event) => sort("category")
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="flex items-center space-x-2"${_scopeId7}><span${_scopeId7}>Catégorie</span>`);
                                                  ssrRenderVNode(_push8, createVNode(resolveDynamicComponent(getSortIcon("category")), { class: "w-4 h-4" }, null), _parent8, _scopeId7);
                                                  _push8(`</div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "flex items-center space-x-2" }, [
                                                      createVNode("span", null, "Catégorie"),
                                                      (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("category")), { class: "w-4 h-4" }))
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$f), {
                                              class: "cursor-pointer hover:bg-muted/50",
                                              onClick: ($event) => sort("depot")
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="flex items-center space-x-2"${_scopeId7}><span${_scopeId7}>Emplacement</span>`);
                                                  ssrRenderVNode(_push8, createVNode(resolveDynamicComponent(getSortIcon("depot")), { class: "w-4 h-4" }, null), _parent8, _scopeId7);
                                                  _push8(`</div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "flex items-center space-x-2" }, [
                                                      createVNode("span", null, "Emplacement"),
                                                      (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("depot")), { class: "w-4 h-4" }))
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$f), {
                                              class: "cursor-pointer hover:bg-muted/50",
                                              onClick: ($event) => sort("rental_price")
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="flex items-center space-x-2"${_scopeId7}><span${_scopeId7}>Prix/jour</span>`);
                                                  ssrRenderVNode(_push8, createVNode(resolveDynamicComponent(getSortIcon("rental_price")), { class: "w-4 h-4" }, null), _parent8, _scopeId7);
                                                  _push8(`</div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "flex items-center space-x-2" }, [
                                                      createVNode("span", null, "Prix/jour"),
                                                      (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("rental_price")), { class: "w-4 h-4" }))
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(_sfc_main$f), {
                                                class: "cursor-pointer hover:bg-muted/50",
                                                onClick: ($event) => sort("name")
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "flex items-center space-x-2" }, [
                                                    createVNode("span", null, "Nom"),
                                                    (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("name")), { class: "w-4 h-4" }))
                                                  ])
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"]),
                                              createVNode(unref(_sfc_main$f), {
                                                class: "cursor-pointer hover:bg-muted/50",
                                                onClick: ($event) => sort("category")
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "flex items-center space-x-2" }, [
                                                    createVNode("span", null, "Catégorie"),
                                                    (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("category")), { class: "w-4 h-4" }))
                                                  ])
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"]),
                                              createVNode(unref(_sfc_main$f), {
                                                class: "cursor-pointer hover:bg-muted/50",
                                                onClick: ($event) => sort("depot")
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "flex items-center space-x-2" }, [
                                                    createVNode("span", null, "Emplacement"),
                                                    (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("depot")), { class: "w-4 h-4" }))
                                                  ])
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"]),
                                              createVNode(unref(_sfc_main$f), {
                                                class: "cursor-pointer hover:bg-muted/50",
                                                onClick: ($event) => sort("rental_price")
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "flex items-center space-x-2" }, [
                                                    createVNode("span", null, "Prix/jour"),
                                                    (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("rental_price")), { class: "w-4 h-4" }))
                                                  ])
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
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
                                              onClick: ($event) => sort("name")
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "flex items-center space-x-2" }, [
                                                  createVNode("span", null, "Nom"),
                                                  (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("name")), { class: "w-4 h-4" }))
                                                ])
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"]),
                                            createVNode(unref(_sfc_main$f), {
                                              class: "cursor-pointer hover:bg-muted/50",
                                              onClick: ($event) => sort("category")
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "flex items-center space-x-2" }, [
                                                  createVNode("span", null, "Catégorie"),
                                                  (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("category")), { class: "w-4 h-4" }))
                                                ])
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"]),
                                            createVNode(unref(_sfc_main$f), {
                                              class: "cursor-pointer hover:bg-muted/50",
                                              onClick: ($event) => sort("depot")
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "flex items-center space-x-2" }, [
                                                  createVNode("span", null, "Emplacement"),
                                                  (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("depot")), { class: "w-4 h-4" }))
                                                ])
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"]),
                                            createVNode(unref(_sfc_main$f), {
                                              class: "cursor-pointer hover:bg-muted/50",
                                              onClick: ($event) => sort("rental_price")
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "flex items-center space-x-2" }, [
                                                  createVNode("span", null, "Prix/jour"),
                                                  (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("rental_price")), { class: "w-4 h-4" }))
                                                ])
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
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
                                      ssrRenderList(__props.equipments.data, (item) => {
                                        _push6(ssrRenderComponent(unref(_sfc_main$e), {
                                          key: item.id,
                                          class: "group cursor-pointer hover:bg-muted/50",
                                          onClick: ($event) => _ctx.$inertia.visit(_ctx.route("app.organizations.equipments.edit", item))
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(unref(_sfc_main$h), { class: "font-medium" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<div${_scopeId7}>${ssrInterpolate(item.name)} <p class="text-sm text-muted-foreground truncate max-w-40 lg:max-w-96"${_scopeId7}>${ssrInterpolate(item.description)}</p></div>`);
                                                  } else {
                                                    return [
                                                      createVNode("div", null, [
                                                        createTextVNode(toDisplayString(item.name) + " ", 1),
                                                        createVNode("p", { class: "text-sm text-muted-foreground truncate max-w-40 lg:max-w-96" }, toDisplayString(item.description), 1)
                                                      ])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(unref(_sfc_main$h), null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(item.category.name)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(item.category.name), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(unref(_sfc_main$h), null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<div class="max-w-40 flex flex-col"${_scopeId7}><span class="truncate font-medium"${_scopeId7}>${ssrInterpolate(item.depot.name)}</span><span class="text-xs text-muted-foreground"${_scopeId7}>${ssrInterpolate(item.depot.city)}</span></div>`);
                                                  } else {
                                                    return [
                                                      createVNode("div", { class: "max-w-40 flex flex-col" }, [
                                                        createVNode("span", { class: "truncate font-medium" }, toDisplayString(item.depot.name), 1),
                                                        createVNode("span", { class: "text-xs text-muted-foreground" }, toDisplayString(item.depot.city), 1)
                                                      ])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(unref(_sfc_main$h), null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(item.rental_price)}€`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(item.rental_price) + "€", 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(unref(_sfc_main$h), { class: "font-medium" }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", null, [
                                                      createTextVNode(toDisplayString(item.name) + " ", 1),
                                                      createVNode("p", { class: "text-sm text-muted-foreground truncate max-w-40 lg:max-w-96" }, toDisplayString(item.description), 1)
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(unref(_sfc_main$h), null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.category.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(unref(_sfc_main$h), null, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "max-w-40 flex flex-col" }, [
                                                      createVNode("span", { class: "truncate font-medium" }, toDisplayString(item.depot.name), 1),
                                                      createVNode("span", { class: "text-xs text-muted-foreground" }, toDisplayString(item.depot.city), 1)
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(unref(_sfc_main$h), null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.rental_price) + "€", 1)
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
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.equipments.data, (item) => {
                                          return openBlock(), createBlock(unref(_sfc_main$e), {
                                            key: item.id,
                                            class: "group cursor-pointer hover:bg-muted/50",
                                            onClick: ($event) => _ctx.$inertia.visit(_ctx.route("app.organizations.equipments.edit", item))
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$h), { class: "font-medium" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", null, [
                                                    createTextVNode(toDisplayString(item.name) + " ", 1),
                                                    createVNode("p", { class: "text-sm text-muted-foreground truncate max-w-40 lg:max-w-96" }, toDisplayString(item.description), 1)
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$h), null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.category.name), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$h), null, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "max-w-40 flex flex-col" }, [
                                                    createVNode("span", { class: "truncate font-medium" }, toDisplayString(item.depot.name), 1),
                                                    createVNode("span", { class: "text-xs text-muted-foreground" }, toDisplayString(item.depot.city), 1)
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$h), null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.rental_price) + "€", 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]);
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
                                            onClick: ($event) => sort("name")
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                                createVNode("span", null, "Nom"),
                                                (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("name")), { class: "w-4 h-4" }))
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode(unref(_sfc_main$f), {
                                            class: "cursor-pointer hover:bg-muted/50",
                                            onClick: ($event) => sort("category")
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                                createVNode("span", null, "Catégorie"),
                                                (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("category")), { class: "w-4 h-4" }))
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode(unref(_sfc_main$f), {
                                            class: "cursor-pointer hover:bg-muted/50",
                                            onClick: ($event) => sort("depot")
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                                createVNode("span", null, "Emplacement"),
                                                (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("depot")), { class: "w-4 h-4" }))
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode(unref(_sfc_main$f), {
                                            class: "cursor-pointer hover:bg-muted/50",
                                            onClick: ($event) => sort("rental_price")
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                                createVNode("span", null, "Prix/jour"),
                                                (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("rental_price")), { class: "w-4 h-4" }))
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$g), null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.equipments.data, (item) => {
                                        return openBlock(), createBlock(unref(_sfc_main$e), {
                                          key: item.id,
                                          class: "group cursor-pointer hover:bg-muted/50",
                                          onClick: ($event) => _ctx.$inertia.visit(_ctx.route("app.organizations.equipments.edit", item))
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$h), { class: "font-medium" }, {
                                              default: withCtx(() => [
                                                createVNode("div", null, [
                                                  createTextVNode(toDisplayString(item.name) + " ", 1),
                                                  createVNode("p", { class: "text-sm text-muted-foreground truncate max-w-40 lg:max-w-96" }, toDisplayString(item.description), 1)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$h), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.category.name), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$h), null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "max-w-40 flex flex-col" }, [
                                                  createVNode("span", { class: "truncate font-medium" }, toDisplayString(item.depot.name), 1),
                                                  createVNode("span", { class: "text-xs text-muted-foreground" }, toDisplayString(item.depot.city), 1)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$h), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.rental_price) + "€", 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        }
                      } else {
                        return [
                          __props.equipments.data.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-center py-12"
                          }, [
                            createVNode("p", { class: "text-muted-foreground text-lg" }, " Aucun matériel trouvé "),
                            can.value.equipments.create ? (openBlock(), createBlock(unref(_sfc_main$b), {
                              key: 0,
                              as: "a",
                              href: _ctx.route("app.organizations.equipments.create", __props.organization),
                              variant: "default",
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Ajouter du matériel ")
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
                                          onClick: ($event) => sort("name")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Nom"),
                                              (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("name")), { class: "w-4 h-4" }))
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(unref(_sfc_main$f), {
                                          class: "cursor-pointer hover:bg-muted/50",
                                          onClick: ($event) => sort("category")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Catégorie"),
                                              (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("category")), { class: "w-4 h-4" }))
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(unref(_sfc_main$f), {
                                          class: "cursor-pointer hover:bg-muted/50",
                                          onClick: ($event) => sort("depot")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Emplacement"),
                                              (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("depot")), { class: "w-4 h-4" }))
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(unref(_sfc_main$f), {
                                          class: "cursor-pointer hover:bg-muted/50",
                                          onClick: ($event) => sort("rental_price")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Prix/jour"),
                                              (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("rental_price")), { class: "w-4 h-4" }))
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$g), null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.equipments.data, (item) => {
                                      return openBlock(), createBlock(unref(_sfc_main$e), {
                                        key: item.id,
                                        class: "group cursor-pointer hover:bg-muted/50",
                                        onClick: ($event) => _ctx.$inertia.visit(_ctx.route("app.organizations.equipments.edit", item))
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$h), { class: "font-medium" }, {
                                            default: withCtx(() => [
                                              createVNode("div", null, [
                                                createTextVNode(toDisplayString(item.name) + " ", 1),
                                                createVNode("p", { class: "text-sm text-muted-foreground truncate max-w-40 lg:max-w-96" }, toDisplayString(item.description), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$h), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.category.name), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$h), null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "max-w-40 flex flex-col" }, [
                                                createVNode("span", { class: "truncate font-medium" }, toDisplayString(item.depot.name), 1),
                                                createVNode("span", { class: "text-xs text-muted-foreground" }, toDisplayString(item.depot.city), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$h), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.rental_price) + "€", 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
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
                        __props.equipments.data.length === 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-center py-12"
                        }, [
                          createVNode("p", { class: "text-muted-foreground text-lg" }, " Aucun matériel trouvé "),
                          can.value.equipments.create ? (openBlock(), createBlock(unref(_sfc_main$b), {
                            key: 0,
                            as: "a",
                            href: _ctx.route("app.organizations.equipments.create", __props.organization),
                            variant: "default",
                            class: "mt-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Ajouter du matériel ")
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
                                        onClick: ($event) => sort("name")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex items-center space-x-2" }, [
                                            createVNode("span", null, "Nom"),
                                            (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("name")), { class: "w-4 h-4" }))
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(unref(_sfc_main$f), {
                                        class: "cursor-pointer hover:bg-muted/50",
                                        onClick: ($event) => sort("category")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex items-center space-x-2" }, [
                                            createVNode("span", null, "Catégorie"),
                                            (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("category")), { class: "w-4 h-4" }))
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(unref(_sfc_main$f), {
                                        class: "cursor-pointer hover:bg-muted/50",
                                        onClick: ($event) => sort("depot")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex items-center space-x-2" }, [
                                            createVNode("span", null, "Emplacement"),
                                            (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("depot")), { class: "w-4 h-4" }))
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(unref(_sfc_main$f), {
                                        class: "cursor-pointer hover:bg-muted/50",
                                        onClick: ($event) => sort("rental_price")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex items-center space-x-2" }, [
                                            createVNode("span", null, "Prix/jour"),
                                            (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("rental_price")), { class: "w-4 h-4" }))
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$g), null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.equipments.data, (item) => {
                                    return openBlock(), createBlock(unref(_sfc_main$e), {
                                      key: item.id,
                                      class: "group cursor-pointer hover:bg-muted/50",
                                      onClick: ($event) => _ctx.$inertia.visit(_ctx.route("app.organizations.equipments.edit", item))
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$h), { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createVNode("div", null, [
                                              createTextVNode(toDisplayString(item.name) + " ", 1),
                                              createVNode("p", { class: "text-sm text-muted-foreground truncate max-w-40 lg:max-w-96" }, toDisplayString(item.description), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$h), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.category.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$h), null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "max-w-40 flex flex-col" }, [
                                              createVNode("span", { class: "truncate font-medium" }, toDisplayString(item.depot.name), 1),
                                              createVNode("span", { class: "text-xs text-muted-foreground" }, toDisplayString(item.depot.city), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$h), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.rental_price) + "€", 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.equipments.links && __props.equipments.links.length > 3) {
              _push2(`<div class="mt-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="flex items-center space-x-2"${_scopeId}><span class="text-sm text-muted-foreground"${_scopeId}> Affichage de ${ssrInterpolate(__props.equipments.from)} à ${ssrInterpolate(__props.equipments.to)} sur ${ssrInterpolate(__props.equipments.total)} résultats </span></div>`);
              _push2(ssrRenderComponent(_sfc_main$i, {
                links: __props.equipments.links
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
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
                                  placeholder: "Nom, catégorie...",
                                  onInput: filter
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", null, [
                                createVNode(unref(_sfc_main$4), {
                                  for: "category",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Catégorie")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$6), {
                                  modelValue: unref(filters).category,
                                  "onUpdate:modelValue": [($event) => unref(filters).category = $event, filter]
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), { class: "h-9" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$8), { placeholder: "Toutes" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$9), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$a), { value: null }, {
                                          default: withCtx(() => [
                                            createTextVNode("Toutes les catégories")
                                          ]),
                                          _: 1
                                        }),
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.allCategories, (category) => {
                                          return openBlock(), createBlock(unref(_sfc_main$a), {
                                            key: category.id,
                                            value: category.name
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(category.name), 1)
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
                                  for: "condition",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("État")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$6), {
                                  modelValue: unref(filters).condition,
                                  "onUpdate:modelValue": [($event) => unref(filters).condition = $event, filter]
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
                                            createTextVNode("Tous les états")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$a), { value: "new" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Neuf")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$a), { value: "good" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Bon")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$a), { value: "fair" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Moyen")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$a), { value: "poor" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Mauvais")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
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
                          __props.equipments.data.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-center py-12"
                          }, [
                            createVNode("p", { class: "text-muted-foreground text-lg" }, " Aucun matériel trouvé "),
                            can.value.equipments.create ? (openBlock(), createBlock(unref(_sfc_main$b), {
                              key: 0,
                              as: "a",
                              href: _ctx.route("app.organizations.equipments.create", __props.organization),
                              variant: "default",
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Ajouter du matériel ")
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
                                          onClick: ($event) => sort("name")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Nom"),
                                              (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("name")), { class: "w-4 h-4" }))
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(unref(_sfc_main$f), {
                                          class: "cursor-pointer hover:bg-muted/50",
                                          onClick: ($event) => sort("category")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Catégorie"),
                                              (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("category")), { class: "w-4 h-4" }))
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(unref(_sfc_main$f), {
                                          class: "cursor-pointer hover:bg-muted/50",
                                          onClick: ($event) => sort("depot")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Emplacement"),
                                              (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("depot")), { class: "w-4 h-4" }))
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(unref(_sfc_main$f), {
                                          class: "cursor-pointer hover:bg-muted/50",
                                          onClick: ($event) => sort("rental_price")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Prix/jour"),
                                              (openBlock(), createBlock(resolveDynamicComponent(getSortIcon("rental_price")), { class: "w-4 h-4" }))
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$g), null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.equipments.data, (item) => {
                                      return openBlock(), createBlock(unref(_sfc_main$e), {
                                        key: item.id,
                                        class: "group cursor-pointer hover:bg-muted/50",
                                        onClick: ($event) => _ctx.$inertia.visit(_ctx.route("app.organizations.equipments.edit", item))
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$h), { class: "font-medium" }, {
                                            default: withCtx(() => [
                                              createVNode("div", null, [
                                                createTextVNode(toDisplayString(item.name) + " ", 1),
                                                createVNode("p", { class: "text-sm text-muted-foreground truncate max-w-40 lg:max-w-96" }, toDisplayString(item.description), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$h), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.category.name), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$h), null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "max-w-40 flex flex-col" }, [
                                                createVNode("span", { class: "truncate font-medium" }, toDisplayString(item.depot.name), 1),
                                                createVNode("span", { class: "text-xs text-muted-foreground" }, toDisplayString(item.depot.city), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$h), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.rental_price) + "€", 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  __props.equipments.links && __props.equipments.links.length > 3 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-6"
                  }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", { class: "flex items-center space-x-2" }, [
                        createVNode("span", { class: "text-sm text-muted-foreground" }, " Affichage de " + toDisplayString(__props.equipments.from) + " à " + toDisplayString(__props.equipments.to) + " sur " + toDisplayString(__props.equipments.total) + " résultats ", 1)
                      ]),
                      createVNode(_sfc_main$i, {
                        links: __props.equipments.links
                      }, null, 8, ["links"])
                    ])
                  ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Equipments/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
