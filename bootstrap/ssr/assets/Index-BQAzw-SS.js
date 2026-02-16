import { mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import _sfc_main$1 from "./Layout-cWP1qhTp.js";
import { _ as _sfc_main$4 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$2, d as _sfc_main$3 } from "./CardTitle-rMLiyiHU.js";
import { _ as _sfc_main$5, a as _sfc_main$6, b as _sfc_main$7, c as _sfc_main$8, d as _sfc_main$9, e as _sfc_main$a } from "./TableHeader-B4NNsC_2.js";
import { _ as _sfc_main$b } from "./Pagination-BMNtxIMF.js";
import "./AppLayout-B3jJCr1A.js";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "reka-ui";
import "@vueuse/core";
import "lucide-vue-next";
import "@heroicons/vue/24/outline";
import "./index-9VOASAGY.js";
import "class-variance-authority";
import "vue-sonner";
import "./Input-BNuRmWJk.js";
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
    can: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
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
              _push2(ssrRenderComponent(unref(_sfc_main$4), {
                as: "a",
                href: _ctx.route("app.organizations.reservations.in.create", __props.organization),
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
                __props.can.create ? (openBlock(), createBlock(unref(_sfc_main$4), {
                  key: 0,
                  as: "a",
                  href: _ctx.route("app.organizations.reservations.in.create", __props.organization),
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
            _push2(ssrRenderComponent(unref(_sfc_main$2), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (__props.reservations.data.length === 0) {
                          _push4(`<div class="text-center py-12"${_scopeId3}><p class="text-muted-foreground text-lg"${_scopeId3}> Aucune réservation trouvée </p>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$4), {
                            as: "a",
                            href: _ctx.route("home"),
                            variant: "default",
                            class: "mt-4"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Parcourir le matériel disponible `);
                              } else {
                                return [
                                  createTextVNode(" Parcourir le matériel disponible ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<div${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$6), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(_sfc_main$7), null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(_sfc_main$8), null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="flex items-center space-x-2"${_scopeId7}><span${_scopeId7}>Provenance</span></div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "flex items-center space-x-2" }, [
                                                      createVNode("span", null, "Provenance")
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$8), null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="flex items-center space-x-2"${_scopeId7}><span${_scopeId7}>Contact</span></div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "flex items-center space-x-2" }, [
                                                      createVNode("span", null, "Contact")
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$8), null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="flex items-center space-x-2"${_scopeId7}><span${_scopeId7}>Période</span></div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "flex items-center space-x-2" }, [
                                                      createVNode("span", null, "Période")
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$8), null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="flex items-center space-x-2"${_scopeId7}><span${_scopeId7}>Statut</span></div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "flex items-center space-x-2" }, [
                                                      createVNode("span", null, "Statut")
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$8), { class: "text-right" }, {
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
                                              createVNode(unref(_sfc_main$8), null, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "flex items-center space-x-2" }, [
                                                    createVNode("span", null, "Provenance")
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(_sfc_main$8), null, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "flex items-center space-x-2" }, [
                                                    createVNode("span", null, "Contact")
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(_sfc_main$8), null, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "flex items-center space-x-2" }, [
                                                    createVNode("span", null, "Période")
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(_sfc_main$8), null, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "flex items-center space-x-2" }, [
                                                    createVNode("span", null, "Statut")
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(_sfc_main$8), { class: "text-right" }, {
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
                                        createVNode(unref(_sfc_main$7), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$8), null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "flex items-center space-x-2" }, [
                                                  createVNode("span", null, "Provenance")
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$8), null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "flex items-center space-x-2" }, [
                                                  createVNode("span", null, "Contact")
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$8), null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "flex items-center space-x-2" }, [
                                                  createVNode("span", null, "Période")
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$8), null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "flex items-center space-x-2" }, [
                                                  createVNode("span", null, "Statut")
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$8), { class: "text-right" }, {
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
                                _push5(ssrRenderComponent(unref(_sfc_main$9), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(__props.reservations.data, (reservation) => {
                                        _push6(ssrRenderComponent(unref(_sfc_main$7), {
                                          key: reservation.id
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(unref(_sfc_main$a), { class: "font-medium" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(unref(Link), {
                                                      href: _ctx.route("app.organizations.reservations.in.edit", reservation)
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(reservation.lender_organization.name)}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(reservation.lender_organization.name), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(unref(Link), {
                                                        href: _ctx.route("app.organizations.reservations.in.edit", reservation)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(reservation.lender_organization.name), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["href"])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(unref(_sfc_main$a), null, {
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
                                              _push7(ssrRenderComponent(unref(_sfc_main$a), null, {
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
                                              _push7(ssrRenderComponent(unref(_sfc_main$a), null, {
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
                                              _push7(ssrRenderComponent(unref(_sfc_main$a), { class: "text-right" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<div class="flex items-center justify-end space-x-2"${_scopeId7}>`);
                                                    _push8(ssrRenderComponent(unref(_sfc_main$4), { asChild: "" }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(unref(Link), {
                                                            href: _ctx.route("app.organizations.reservations.in.edit", reservation)
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
                                                              href: _ctx.route("app.organizations.reservations.in.edit", reservation)
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
                                                    _push8(`</div>`);
                                                  } else {
                                                    return [
                                                      createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                                                        createVNode(unref(_sfc_main$4), { asChild: "" }, {
                                                          default: withCtx(() => [
                                                            createVNode(unref(Link), {
                                                              href: _ctx.route("app.organizations.reservations.in.edit", reservation)
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Gérer ")
                                                              ]),
                                                              _: 1
                                                            }, 8, ["href"])
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(unref(_sfc_main$a), { class: "font-medium" }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Link), {
                                                      href: _ctx.route("app.organizations.reservations.in.edit", reservation)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(reservation.lender_organization.name), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["href"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(unref(_sfc_main$a), null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(reservation.user.name), 1),
                                                    createVNode("br"),
                                                    createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(reservation.user.phone), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(unref(_sfc_main$a), null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Du " + toDisplayString(formatDate(reservation.start_date)), 1),
                                                    createVNode("br"),
                                                    createTextVNode(" au " + toDisplayString(formatDate(reservation.end_date)), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(unref(_sfc_main$a), null, {
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
                                                createVNode(unref(_sfc_main$a), { class: "text-right" }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                                                      createVNode(unref(_sfc_main$4), { asChild: "" }, {
                                                        default: withCtx(() => [
                                                          createVNode(unref(Link), {
                                                            href: _ctx.route("app.organizations.reservations.in.edit", reservation)
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Gérer ")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["href"])
                                                        ]),
                                                        _: 2
                                                      }, 1024)
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
                                          return openBlock(), createBlock(unref(_sfc_main$7), {
                                            key: reservation.id
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$a), { class: "font-medium" }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Link), {
                                                    href: _ctx.route("app.organizations.reservations.in.edit", reservation)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(reservation.lender_organization.name), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["href"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$a), null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(reservation.user.name), 1),
                                                  createVNode("br"),
                                                  createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(reservation.user.phone), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$a), null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Du " + toDisplayString(formatDate(reservation.start_date)), 1),
                                                  createVNode("br"),
                                                  createTextVNode(" au " + toDisplayString(formatDate(reservation.end_date)), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$a), null, {
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
                                              createVNode(unref(_sfc_main$a), { class: "text-right" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                                                    createVNode(unref(_sfc_main$4), { asChild: "" }, {
                                                      default: withCtx(() => [
                                                        createVNode(unref(Link), {
                                                          href: _ctx.route("app.organizations.reservations.in.edit", reservation)
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Gérer ")
                                                          ]),
                                                          _: 1
                                                        }, 8, ["href"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
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
                                  createVNode(unref(_sfc_main$6), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$7), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$8), null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                                createVNode("span", null, "Provenance")
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$8), null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                                createVNode("span", null, "Contact")
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$8), null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                                createVNode("span", null, "Période")
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$8), null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                                createVNode("span", null, "Statut")
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$8), { class: "text-right" }, {
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
                                  createVNode(unref(_sfc_main$9), null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.reservations.data, (reservation) => {
                                        return openBlock(), createBlock(unref(_sfc_main$7), {
                                          key: reservation.id
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$a), { class: "font-medium" }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Link), {
                                                  href: _ctx.route("app.organizations.reservations.in.edit", reservation)
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(reservation.lender_organization.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["href"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$a), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(reservation.user.name), 1),
                                                createVNode("br"),
                                                createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(reservation.user.phone), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$a), null, {
                                              default: withCtx(() => [
                                                createTextVNode(" Du " + toDisplayString(formatDate(reservation.start_date)), 1),
                                                createVNode("br"),
                                                createTextVNode(" au " + toDisplayString(formatDate(reservation.end_date)), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$a), null, {
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
                                            createVNode(unref(_sfc_main$a), { class: "text-right" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                                                  createVNode(unref(_sfc_main$4), { asChild: "" }, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(Link), {
                                                        href: _ctx.route("app.organizations.reservations.in.edit", reservation)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Gérer ")
                                                        ]),
                                                        _: 1
                                                      }, 8, ["href"])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
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
                          _push4(ssrRenderComponent(_sfc_main$b, {
                            links: __props.reservations.links
                          }, null, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        }
                      } else {
                        return [
                          __props.reservations.data.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-center py-12"
                          }, [
                            createVNode("p", { class: "text-muted-foreground text-lg" }, " Aucune réservation trouvée "),
                            createVNode(unref(_sfc_main$4), {
                              as: "a",
                              href: _ctx.route("home"),
                              variant: "default",
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Parcourir le matériel disponible ")
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ])) : (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode(unref(_sfc_main$5), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$6), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$8), null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Provenance")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$8), null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Contact")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$8), null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Période")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$8), null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Statut")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$8), { class: "text-right" }, {
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
                                createVNode(unref(_sfc_main$9), null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.reservations.data, (reservation) => {
                                      return openBlock(), createBlock(unref(_sfc_main$7), {
                                        key: reservation.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$a), { class: "font-medium" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Link), {
                                                href: _ctx.route("app.organizations.reservations.in.edit", reservation)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(reservation.lender_organization.name), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["href"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$a), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(reservation.user.name), 1),
                                              createVNode("br"),
                                              createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(reservation.user.phone), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$a), null, {
                                            default: withCtx(() => [
                                              createTextVNode(" Du " + toDisplayString(formatDate(reservation.start_date)), 1),
                                              createVNode("br"),
                                              createTextVNode(" au " + toDisplayString(formatDate(reservation.end_date)), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$a), null, {
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
                                          createVNode(unref(_sfc_main$a), { class: "text-right" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                                                createVNode(unref(_sfc_main$4), { asChild: "" }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Link), {
                                                      href: _ctx.route("app.organizations.reservations.in.edit", reservation)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Gérer ")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["href"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
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
                              createVNode(_sfc_main$b, {
                                links: __props.reservations.links
                              }, null, 8, ["links"])
                            ])
                          ]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        __props.reservations.data.length === 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-center py-12"
                        }, [
                          createVNode("p", { class: "text-muted-foreground text-lg" }, " Aucune réservation trouvée "),
                          createVNode(unref(_sfc_main$4), {
                            as: "a",
                            href: _ctx.route("home"),
                            variant: "default",
                            class: "mt-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Parcourir le matériel disponible ")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])) : (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$6), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$8), null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex items-center space-x-2" }, [
                                            createVNode("span", null, "Provenance")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$8), null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex items-center space-x-2" }, [
                                            createVNode("span", null, "Contact")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$8), null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex items-center space-x-2" }, [
                                            createVNode("span", null, "Période")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$8), null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex items-center space-x-2" }, [
                                            createVNode("span", null, "Statut")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$8), { class: "text-right" }, {
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
                              createVNode(unref(_sfc_main$9), null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.reservations.data, (reservation) => {
                                    return openBlock(), createBlock(unref(_sfc_main$7), {
                                      key: reservation.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$a), { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Link), {
                                              href: _ctx.route("app.organizations.reservations.in.edit", reservation)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(reservation.lender_organization.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["href"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$a), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(reservation.user.name), 1),
                                            createVNode("br"),
                                            createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(reservation.user.phone), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$a), null, {
                                          default: withCtx(() => [
                                            createTextVNode(" Du " + toDisplayString(formatDate(reservation.start_date)), 1),
                                            createVNode("br"),
                                            createTextVNode(" au " + toDisplayString(formatDate(reservation.end_date)), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$a), null, {
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
                                        createVNode(unref(_sfc_main$a), { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                                              createVNode(unref(_sfc_main$4), { asChild: "" }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Link), {
                                                    href: _ctx.route("app.organizations.reservations.in.edit", reservation)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Gérer ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["href"])
                                                ]),
                                                _: 2
                                              }, 1024)
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
                            createVNode(_sfc_main$b, {
                              links: __props.reservations.links
                            }, null, 8, ["links"])
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
                  createVNode(unref(_sfc_main$2), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$3), null, {
                        default: withCtx(() => [
                          __props.reservations.data.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-center py-12"
                          }, [
                            createVNode("p", { class: "text-muted-foreground text-lg" }, " Aucune réservation trouvée "),
                            createVNode(unref(_sfc_main$4), {
                              as: "a",
                              href: _ctx.route("home"),
                              variant: "default",
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Parcourir le matériel disponible ")
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ])) : (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode(unref(_sfc_main$5), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$6), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$8), null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Provenance")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$8), null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Contact")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$8), null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Période")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$8), null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center space-x-2" }, [
                                              createVNode("span", null, "Statut")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$8), { class: "text-right" }, {
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
                                createVNode(unref(_sfc_main$9), null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.reservations.data, (reservation) => {
                                      return openBlock(), createBlock(unref(_sfc_main$7), {
                                        key: reservation.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$a), { class: "font-medium" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Link), {
                                                href: _ctx.route("app.organizations.reservations.in.edit", reservation)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(reservation.lender_organization.name), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["href"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$a), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(reservation.user.name), 1),
                                              createVNode("br"),
                                              createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(reservation.user.phone), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$a), null, {
                                            default: withCtx(() => [
                                              createTextVNode(" Du " + toDisplayString(formatDate(reservation.start_date)), 1),
                                              createVNode("br"),
                                              createTextVNode(" au " + toDisplayString(formatDate(reservation.end_date)), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$a), null, {
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
                                          createVNode(unref(_sfc_main$a), { class: "text-right" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                                                createVNode(unref(_sfc_main$4), { asChild: "" }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Link), {
                                                      href: _ctx.route("app.organizations.reservations.in.edit", reservation)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Gérer ")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["href"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
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
                              createVNode(_sfc_main$b, {
                                links: __props.reservations.links
                              }, null, 8, ["links"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Reservations/In/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
