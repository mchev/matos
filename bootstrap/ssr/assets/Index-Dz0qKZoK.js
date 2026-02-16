import { ref, mergeProps, withCtx, unref, createTextVNode, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-B3jJCr1A.js";
import { _ as _sfc_main$2 } from "./OrganisationLayout-Gv4mqYIW.js";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$4 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$5, d as _sfc_main$6 } from "./CardTitle-rMLiyiHU.js";
import { Building2, MapPin, Pencil, Trash2, AlertTriangle } from "lucide-vue-next";
import { _ as _sfc_main$3 } from "./HeadingSmall-B1yfmTIh.js";
import { _ as _sfc_main$7, a as _sfc_main$8, b as _sfc_main$9, c as _sfc_main$a, d as _sfc_main$b, e as _sfc_main$c } from "./DialogTrigger-CSFZvrzo.js";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "reka-ui";
import "@vueuse/core";
import "@heroicons/vue/24/outline";
import "./index-9VOASAGY.js";
import "class-variance-authority";
import "vue-sonner";
import "./Input-BNuRmWJk.js";
import "./Heading-Dsj-VTAa.js";
import "./Separator-C0fcDgz2.js";
import "clsx";
import "tailwind-merge";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    depots: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const showDeleteDialog = ref(false);
    const selectedDepot = ref(null);
    const openDeleteDialog = (depot) => {
      selectedDepot.value = depot;
      showDeleteDialog.value = true;
    };
    const deleteDepot = () => {
      router.delete(route("app.organizations.depots.destroy", selectedDepot.value.id), {
        preserveScroll: true
      });
      showDeleteDialog.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Gestion des dépôts" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<section class="space-y-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    title: "Gestion des dépôts",
                    description: "Gérez les lieux de stockage de votre organisation."
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="space-y-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4), {
                    onClick: ($event) => unref(router).visit(_ctx.route("app.organizations.depots.create"))
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Ajouter un dépôt `);
                      } else {
                        return [
                          createTextVNode(" Ajouter un dépôt ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="space-y-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(__props.depots, (depot) => {
                    _push3(ssrRenderComponent(unref(_sfc_main$5), {
                      key: depot.id,
                      class: "group"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$6), { class: "p-6" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"${_scopeId4}><div class="space-y-3"${_scopeId4}><div class="flex items-center gap-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(Building2), { class: "h-5 w-5 text-primary-500 flex-shrink-0" }, null, _parent5, _scopeId4));
                                _push5(`<h3 class="text-base font-semibold text-foreground"${_scopeId4}>${ssrInterpolate(depot.name)}</h3></div>`);
                                if (depot.description) {
                                  _push5(`<p class="text-sm text-muted-foreground"${_scopeId4}>${ssrInterpolate(depot.description)}</p>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<div class="flex items-start gap-2 text-sm text-muted-foreground"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(MapPin), { class: "h-4 w-4 mt-0.5 flex-shrink-0" }, null, _parent5, _scopeId4));
                                _push5(`<div${_scopeId4}><div${_scopeId4}>${ssrInterpolate(depot.address)}</div><div${_scopeId4}>${ssrInterpolate(depot.postal_code)} ${ssrInterpolate(depot.city)}</div></div></div></div><div class="flex items-center gap-2 self-start sm:self-center"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(_sfc_main$4), {
                                  variant: "outline",
                                  size: "sm",
                                  onClick: ($event) => unref(router).visit(_ctx.route("app.organizations.depots.edit", depot.id))
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(Pencil), { class: "h-4 w-4 mr-2" }, null, _parent6, _scopeId5));
                                      _push6(` Modifier `);
                                    } else {
                                      return [
                                        createVNode(unref(Pencil), { class: "h-4 w-4 mr-2" }),
                                        createTextVNode(" Modifier ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$4), {
                                  variant: "destructive",
                                  size: "sm",
                                  onClick: ($event) => openDeleteDialog(depot)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(Trash2), { class: "h-4 w-4 mr-2" }, null, _parent6, _scopeId5));
                                      _push6(` Supprimer `);
                                    } else {
                                      return [
                                        createVNode(unref(Trash2), { class: "h-4 w-4 mr-2" }),
                                        createTextVNode(" Supprimer ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" }, [
                                    createVNode("div", { class: "space-y-3" }, [
                                      createVNode("div", { class: "flex items-center gap-2" }, [
                                        createVNode(unref(Building2), { class: "h-5 w-5 text-primary-500 flex-shrink-0" }),
                                        createVNode("h3", { class: "text-base font-semibold text-foreground" }, toDisplayString(depot.name), 1)
                                      ]),
                                      depot.description ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "text-sm text-muted-foreground"
                                      }, toDisplayString(depot.description), 1)) : createCommentVNode("", true),
                                      createVNode("div", { class: "flex items-start gap-2 text-sm text-muted-foreground" }, [
                                        createVNode(unref(MapPin), { class: "h-4 w-4 mt-0.5 flex-shrink-0" }),
                                        createVNode("div", null, [
                                          createVNode("div", null, toDisplayString(depot.address), 1),
                                          createVNode("div", null, toDisplayString(depot.postal_code) + " " + toDisplayString(depot.city), 1)
                                        ])
                                      ])
                                    ]),
                                    createVNode("div", { class: "flex items-center gap-2 self-start sm:self-center" }, [
                                      createVNode(unref(_sfc_main$4), {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: ($event) => unref(router).visit(_ctx.route("app.organizations.depots.edit", depot.id))
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Pencil), { class: "h-4 w-4 mr-2" }),
                                          createTextVNode(" Modifier ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(unref(_sfc_main$4), {
                                        variant: "destructive",
                                        size: "sm",
                                        onClick: ($event) => openDeleteDialog(depot)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Trash2), { class: "h-4 w-4 mr-2" }),
                                          createTextVNode(" Supprimer ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$6), { class: "p-6" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" }, [
                                  createVNode("div", { class: "space-y-3" }, [
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode(unref(Building2), { class: "h-5 w-5 text-primary-500 flex-shrink-0" }),
                                      createVNode("h3", { class: "text-base font-semibold text-foreground" }, toDisplayString(depot.name), 1)
                                    ]),
                                    depot.description ? (openBlock(), createBlock("p", {
                                      key: 0,
                                      class: "text-sm text-muted-foreground"
                                    }, toDisplayString(depot.description), 1)) : createCommentVNode("", true),
                                    createVNode("div", { class: "flex items-start gap-2 text-sm text-muted-foreground" }, [
                                      createVNode(unref(MapPin), { class: "h-4 w-4 mt-0.5 flex-shrink-0" }),
                                      createVNode("div", null, [
                                        createVNode("div", null, toDisplayString(depot.address), 1),
                                        createVNode("div", null, toDisplayString(depot.postal_code) + " " + toDisplayString(depot.city), 1)
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-2 self-start sm:self-center" }, [
                                    createVNode(unref(_sfc_main$4), {
                                      variant: "outline",
                                      size: "sm",
                                      onClick: ($event) => unref(router).visit(_ctx.route("app.organizations.depots.edit", depot.id))
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Pencil), { class: "h-4 w-4 mr-2" }),
                                        createTextVNode(" Modifier ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(unref(_sfc_main$4), {
                                      variant: "destructive",
                                      size: "sm",
                                      onClick: ($event) => openDeleteDialog(depot)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Trash2), { class: "h-4 w-4 mr-2" }),
                                        createTextVNode(" Supprimer ")
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
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div></div></section>`);
                } else {
                  return [
                    createVNode("section", { class: "space-y-6" }, [
                      createVNode(_sfc_main$3, {
                        title: "Gestion des dépôts",
                        description: "Gérez les lieux de stockage de votre organisation."
                      }),
                      createVNode("div", { class: "space-y-4" }, [
                        createVNode(unref(_sfc_main$4), {
                          onClick: ($event) => unref(router).visit(_ctx.route("app.organizations.depots.create"))
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Ajouter un dépôt ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode("div", { class: "space-y-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.depots, (depot) => {
                            return openBlock(), createBlock(unref(_sfc_main$5), {
                              key: depot.id,
                              class: "group"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$6), { class: "p-6" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" }, [
                                      createVNode("div", { class: "space-y-3" }, [
                                        createVNode("div", { class: "flex items-center gap-2" }, [
                                          createVNode(unref(Building2), { class: "h-5 w-5 text-primary-500 flex-shrink-0" }),
                                          createVNode("h3", { class: "text-base font-semibold text-foreground" }, toDisplayString(depot.name), 1)
                                        ]),
                                        depot.description ? (openBlock(), createBlock("p", {
                                          key: 0,
                                          class: "text-sm text-muted-foreground"
                                        }, toDisplayString(depot.description), 1)) : createCommentVNode("", true),
                                        createVNode("div", { class: "flex items-start gap-2 text-sm text-muted-foreground" }, [
                                          createVNode(unref(MapPin), { class: "h-4 w-4 mt-0.5 flex-shrink-0" }),
                                          createVNode("div", null, [
                                            createVNode("div", null, toDisplayString(depot.address), 1),
                                            createVNode("div", null, toDisplayString(depot.postal_code) + " " + toDisplayString(depot.city), 1)
                                          ])
                                        ])
                                      ]),
                                      createVNode("div", { class: "flex items-center gap-2 self-start sm:self-center" }, [
                                        createVNode(unref(_sfc_main$4), {
                                          variant: "outline",
                                          size: "sm",
                                          onClick: ($event) => unref(router).visit(_ctx.route("app.organizations.depots.edit", depot.id))
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Pencil), { class: "h-4 w-4 mr-2" }),
                                            createTextVNode(" Modifier ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(unref(_sfc_main$4), {
                                          variant: "destructive",
                                          size: "sm",
                                          onClick: ($event) => openDeleteDialog(depot)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Trash2), { class: "h-4 w-4 mr-2" }),
                                            createTextVNode(" Supprimer ")
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
                          }), 128))
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$7), {
              open: showDeleteDialog.value,
              "onUpdate:open": ($event) => showDeleteDialog.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$8), { class: "sm:max-w-[500px]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$9), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$a), { class: "flex items-center gap-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(AlertTriangle), { class: "h-5 w-5 text-destructive" }, null, _parent6, _scopeId5));
                                    _push6(` Confirmation de suppression `);
                                  } else {
                                    return [
                                      createVNode(unref(AlertTriangle), { class: "h-5 w-5 text-destructive" }),
                                      createTextVNode(" Confirmation de suppression ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$b), { class: "space-y-4" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  var _a, _b, _c, _d, _e, _f;
                                  if (_push6) {
                                    _push6(`<p${_scopeId5}> Vous êtes sur le point de supprimer le dépôt <span class="font-medium text-foreground"${_scopeId5}>${ssrInterpolate((_a = selectedDepot.value) == null ? void 0 : _a.name)}</span>. </p>`);
                                    if ((_c = (_b = selectedDepot.value) == null ? void 0 : _b.equipments) == null ? void 0 : _c.length) {
                                      _push6(`<div class="rounded-lg border p-4 space-y-2"${_scopeId5}><p class="font-medium text-foreground"${_scopeId5}> Ce dépôt contient les équipements suivants qui devront être réaffectés : </p><ul class="list-disc list-inside space-y-1"${_scopeId5}><!--[-->`);
                                      ssrRenderList(selectedDepot.value.equipments, (equipment) => {
                                        _push6(`<li class="text-sm"${_scopeId5}>${ssrInterpolate(equipment.name)}</li>`);
                                      });
                                      _push6(`<!--]--></ul></div>`);
                                    } else {
                                      _push6(`<p class="text-sm"${_scopeId5}> Ce dépôt ne contient aucun équipement. </p>`);
                                    }
                                  } else {
                                    return [
                                      createVNode("p", null, [
                                        createTextVNode(" Vous êtes sur le point de supprimer le dépôt "),
                                        createVNode("span", { class: "font-medium text-foreground" }, toDisplayString((_d = selectedDepot.value) == null ? void 0 : _d.name), 1),
                                        createTextVNode(". ")
                                      ]),
                                      ((_f = (_e = selectedDepot.value) == null ? void 0 : _e.equipments) == null ? void 0 : _f.length) ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "rounded-lg border p-4 space-y-2"
                                      }, [
                                        createVNode("p", { class: "font-medium text-foreground" }, " Ce dépôt contient les équipements suivants qui devront être réaffectés : "),
                                        createVNode("ul", { class: "list-disc list-inside space-y-1" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(selectedDepot.value.equipments, (equipment) => {
                                            return openBlock(), createBlock("li", {
                                              key: equipment.id,
                                              class: "text-sm"
                                            }, toDisplayString(equipment.name), 1);
                                          }), 128))
                                        ])
                                      ])) : (openBlock(), createBlock("p", {
                                        key: 1,
                                        class: "text-sm"
                                      }, " Ce dépôt ne contient aucun équipement. "))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$a), { class: "flex items-center gap-2" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(AlertTriangle), { class: "h-5 w-5 text-destructive" }),
                                    createTextVNode(" Confirmation de suppression ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), { class: "space-y-4" }, {
                                  default: withCtx(() => {
                                    var _a, _b, _c;
                                    return [
                                      createVNode("p", null, [
                                        createTextVNode(" Vous êtes sur le point de supprimer le dépôt "),
                                        createVNode("span", { class: "font-medium text-foreground" }, toDisplayString((_a = selectedDepot.value) == null ? void 0 : _a.name), 1),
                                        createTextVNode(". ")
                                      ]),
                                      ((_c = (_b = selectedDepot.value) == null ? void 0 : _b.equipments) == null ? void 0 : _c.length) ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "rounded-lg border p-4 space-y-2"
                                      }, [
                                        createVNode("p", { class: "font-medium text-foreground" }, " Ce dépôt contient les équipements suivants qui devront être réaffectés : "),
                                        createVNode("ul", { class: "list-disc list-inside space-y-1" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(selectedDepot.value.equipments, (equipment) => {
                                            return openBlock(), createBlock("li", {
                                              key: equipment.id,
                                              class: "text-sm"
                                            }, toDisplayString(equipment.name), 1);
                                          }), 128))
                                        ])
                                      ])) : (openBlock(), createBlock("p", {
                                        key: 1,
                                        class: "text-sm"
                                      }, " Ce dépôt ne contient aucun équipement. "))
                                    ];
                                  }),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$c), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$4), {
                                variant: "outline",
                                onClick: ($event) => showDeleteDialog.value = false
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
                              _push5(ssrRenderComponent(unref(_sfc_main$4), {
                                variant: "destructive",
                                onClick: deleteDepot
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Confirmer la suppression `);
                                  } else {
                                    return [
                                      createTextVNode(" Confirmer la suppression ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$4), {
                                  variant: "outline",
                                  onClick: ($event) => showDeleteDialog.value = false
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Annuler ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(unref(_sfc_main$4), {
                                  variant: "destructive",
                                  onClick: deleteDepot
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Confirmer la suppression ")
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
                          createVNode(unref(_sfc_main$9), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$a), { class: "flex items-center gap-2" }, {
                                default: withCtx(() => [
                                  createVNode(unref(AlertTriangle), { class: "h-5 w-5 text-destructive" }),
                                  createTextVNode(" Confirmation de suppression ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$b), { class: "space-y-4" }, {
                                default: withCtx(() => {
                                  var _a, _b, _c;
                                  return [
                                    createVNode("p", null, [
                                      createTextVNode(" Vous êtes sur le point de supprimer le dépôt "),
                                      createVNode("span", { class: "font-medium text-foreground" }, toDisplayString((_a = selectedDepot.value) == null ? void 0 : _a.name), 1),
                                      createTextVNode(". ")
                                    ]),
                                    ((_c = (_b = selectedDepot.value) == null ? void 0 : _b.equipments) == null ? void 0 : _c.length) ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "rounded-lg border p-4 space-y-2"
                                    }, [
                                      createVNode("p", { class: "font-medium text-foreground" }, " Ce dépôt contient les équipements suivants qui devront être réaffectés : "),
                                      createVNode("ul", { class: "list-disc list-inside space-y-1" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(selectedDepot.value.equipments, (equipment) => {
                                          return openBlock(), createBlock("li", {
                                            key: equipment.id,
                                            class: "text-sm"
                                          }, toDisplayString(equipment.name), 1);
                                        }), 128))
                                      ])
                                    ])) : (openBlock(), createBlock("p", {
                                      key: 1,
                                      class: "text-sm"
                                    }, " Ce dépôt ne contient aucun équipement. "))
                                  ];
                                }),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$c), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$4), {
                                variant: "outline",
                                onClick: ($event) => showDeleteDialog.value = false
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Annuler ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(unref(_sfc_main$4), {
                                variant: "destructive",
                                onClick: deleteDepot
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Confirmer la suppression ")
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
                    createVNode(unref(_sfc_main$8), { class: "sm:max-w-[500px]" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$9), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$a), { class: "flex items-center gap-2" }, {
                              default: withCtx(() => [
                                createVNode(unref(AlertTriangle), { class: "h-5 w-5 text-destructive" }),
                                createTextVNode(" Confirmation de suppression ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "space-y-4" }, {
                              default: withCtx(() => {
                                var _a, _b, _c;
                                return [
                                  createVNode("p", null, [
                                    createTextVNode(" Vous êtes sur le point de supprimer le dépôt "),
                                    createVNode("span", { class: "font-medium text-foreground" }, toDisplayString((_a = selectedDepot.value) == null ? void 0 : _a.name), 1),
                                    createTextVNode(". ")
                                  ]),
                                  ((_c = (_b = selectedDepot.value) == null ? void 0 : _b.equipments) == null ? void 0 : _c.length) ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "rounded-lg border p-4 space-y-2"
                                  }, [
                                    createVNode("p", { class: "font-medium text-foreground" }, " Ce dépôt contient les équipements suivants qui devront être réaffectés : "),
                                    createVNode("ul", { class: "list-disc list-inside space-y-1" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(selectedDepot.value.equipments, (equipment) => {
                                        return openBlock(), createBlock("li", {
                                          key: equipment.id,
                                          class: "text-sm"
                                        }, toDisplayString(equipment.name), 1);
                                      }), 128))
                                    ])
                                  ])) : (openBlock(), createBlock("p", {
                                    key: 1,
                                    class: "text-sm"
                                  }, " Ce dépôt ne contient aucun équipement. "))
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$c), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), {
                              variant: "outline",
                              onClick: ($event) => showDeleteDialog.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Annuler ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(unref(_sfc_main$4), {
                              variant: "destructive",
                              onClick: deleteDepot
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Confirmer la suppression ")
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
          } else {
            return [
              createVNode(_sfc_main$2, null, {
                default: withCtx(() => [
                  createVNode("section", { class: "space-y-6" }, [
                    createVNode(_sfc_main$3, {
                      title: "Gestion des dépôts",
                      description: "Gérez les lieux de stockage de votre organisation."
                    }),
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode(unref(_sfc_main$4), {
                        onClick: ($event) => unref(router).visit(_ctx.route("app.organizations.depots.create"))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Ajouter un dépôt ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode("div", { class: "space-y-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.depots, (depot) => {
                          return openBlock(), createBlock(unref(_sfc_main$5), {
                            key: depot.id,
                            class: "group"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$6), { class: "p-6" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" }, [
                                    createVNode("div", { class: "space-y-3" }, [
                                      createVNode("div", { class: "flex items-center gap-2" }, [
                                        createVNode(unref(Building2), { class: "h-5 w-5 text-primary-500 flex-shrink-0" }),
                                        createVNode("h3", { class: "text-base font-semibold text-foreground" }, toDisplayString(depot.name), 1)
                                      ]),
                                      depot.description ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "text-sm text-muted-foreground"
                                      }, toDisplayString(depot.description), 1)) : createCommentVNode("", true),
                                      createVNode("div", { class: "flex items-start gap-2 text-sm text-muted-foreground" }, [
                                        createVNode(unref(MapPin), { class: "h-4 w-4 mt-0.5 flex-shrink-0" }),
                                        createVNode("div", null, [
                                          createVNode("div", null, toDisplayString(depot.address), 1),
                                          createVNode("div", null, toDisplayString(depot.postal_code) + " " + toDisplayString(depot.city), 1)
                                        ])
                                      ])
                                    ]),
                                    createVNode("div", { class: "flex items-center gap-2 self-start sm:self-center" }, [
                                      createVNode(unref(_sfc_main$4), {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: ($event) => unref(router).visit(_ctx.route("app.organizations.depots.edit", depot.id))
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Pencil), { class: "h-4 w-4 mr-2" }),
                                          createTextVNode(" Modifier ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(unref(_sfc_main$4), {
                                        variant: "destructive",
                                        size: "sm",
                                        onClick: ($event) => openDeleteDialog(depot)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Trash2), { class: "h-4 w-4 mr-2" }),
                                          createTextVNode(" Supprimer ")
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
                        }), 128))
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$7), {
                open: showDeleteDialog.value,
                "onUpdate:open": ($event) => showDeleteDialog.value = $event
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$8), { class: "sm:max-w-[500px]" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$9), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$a), { class: "flex items-center gap-2" }, {
                            default: withCtx(() => [
                              createVNode(unref(AlertTriangle), { class: "h-5 w-5 text-destructive" }),
                              createTextVNode(" Confirmation de suppression ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$b), { class: "space-y-4" }, {
                            default: withCtx(() => {
                              var _a, _b, _c;
                              return [
                                createVNode("p", null, [
                                  createTextVNode(" Vous êtes sur le point de supprimer le dépôt "),
                                  createVNode("span", { class: "font-medium text-foreground" }, toDisplayString((_a = selectedDepot.value) == null ? void 0 : _a.name), 1),
                                  createTextVNode(". ")
                                ]),
                                ((_c = (_b = selectedDepot.value) == null ? void 0 : _b.equipments) == null ? void 0 : _c.length) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "rounded-lg border p-4 space-y-2"
                                }, [
                                  createVNode("p", { class: "font-medium text-foreground" }, " Ce dépôt contient les équipements suivants qui devront être réaffectés : "),
                                  createVNode("ul", { class: "list-disc list-inside space-y-1" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(selectedDepot.value.equipments, (equipment) => {
                                      return openBlock(), createBlock("li", {
                                        key: equipment.id,
                                        class: "text-sm"
                                      }, toDisplayString(equipment.name), 1);
                                    }), 128))
                                  ])
                                ])) : (openBlock(), createBlock("p", {
                                  key: 1,
                                  class: "text-sm"
                                }, " Ce dépôt ne contient aucun équipement. "))
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$c), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), {
                            variant: "outline",
                            onClick: ($event) => showDeleteDialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Annuler ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(unref(_sfc_main$4), {
                            variant: "destructive",
                            onClick: deleteDepot
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Confirmer la suppression ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Settings/Depots/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
