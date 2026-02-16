import { unref, withCtx, createVNode, toDisplayString, createTextVNode, resolveDynamicComponent, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./PublicLayout-Dy_cSdNa.js";
import { usePage, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5, d as _sfc_main$6 } from "./CardTitle-rMLiyiHU.js";
import { _ as _sfc_main$7 } from "./index-53Kg4F4g.js";
import { StarIcon, ShieldCheckIcon, MapPinIcon, CalendarIcon, UsersIcon } from "lucide-vue-next";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "reka-ui";
import "@vueuse/core";
import "@heroicons/vue/24/outline";
import "./index-9VOASAGY.js";
import "class-variance-authority";
import "vue-sonner";
import "./Input-BNuRmWJk.js";
import "clsx";
import "tailwind-merge";
const _sfc_main = {
  __name: "Discover",
  __ssrInlineRender: true,
  props: {
    popularCategories: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const page = usePage();
    const appName = page.props.name;
    const features = [
      {
        icon: ShieldCheckIcon,
        title: "Reservation simplifiée",
        description: "Sélectionnez vos dates souhaitées et envoyez une demande de réservation."
      },
      {
        icon: MapPinIcon,
        title: "Proximité",
        description: "Trouvez du matériel près de chez vous et réduisez les coûts de transport."
      },
      {
        icon: CalendarIcon,
        title: "Disponibilité en temps réel",
        description: "Consultez les calendriers et réservez aux dates qui vous conviennent."
      },
      {
        icon: UsersIcon,
        title: "Communauté associative",
        description: "Rejoignez un réseau d'associations partageant les mêmes valeurs."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Découvrir la plateforme - ${ssrInterpolate(unref(appName))}</title><meta name="description"${ssrRenderAttr("content", `Découvrez ${unref(appName)}, la plateforme de location de matériel événementiel qui connecte les associations et les particuliers.`)}${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Découvrir la plateforme - " + toDisplayString(unref(appName)), 1),
              createVNode("meta", {
                name: "description",
                content: `Découvrez ${unref(appName)}, la plateforme de location de matériel événementiel qui connecte les associations et les particuliers.`
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12 space-y-24"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="text-center max-w-3xl mx-auto"${_scopeId}><h1 class="text-4xl font-bold text-foreground"${_scopeId}> Trouvez le matériel idéal pour votre événement </h1><p class="mt-4 text-lg text-muted-foreground"${_scopeId}>${ssrInterpolate(unref(appName))} vous connecte avec une communauté d&#39;associations et de particuliers pour partager du matériel événementiel de qualité. </p></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><h2 class="text-2xl font-semibold text-foreground text-center mb-8"${_scopeId}> Catégories populaires </h2><div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4"${_scopeId}><!--[-->`);
            ssrRenderList(__props.popularCategories, (category) => {
              _push2(ssrRenderComponent(unref(_sfc_main$2), {
                key: category.name,
                class: "hover:shadow-lg transition-shadow duration-300 group"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "group-hover:text-primary transition-colors duration-300" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(category.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(category.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(category.description)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(category.description), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$4), { class: "group-hover:text-primary transition-colors duration-300" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(category.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$5), null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(category.description), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$6), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center gap-2"${_scopeId3}><div class="rounded-full bg-primary/10 p-1.5"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(StarIcon), { class: "w-4 h-4 text-primary" }, null, _parent4, _scopeId3));
                          _push4(`</div><p class="text-sm text-muted-foreground"${_scopeId3}>${ssrInterpolate(category.count)} annonces disponibles </p></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode("div", { class: "rounded-full bg-primary/10 p-1.5" }, [
                                createVNode(unref(StarIcon), { class: "w-4 h-4 text-primary" })
                              ]),
                              createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(category.count) + " annonces disponibles ", 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$3), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), { class: "group-hover:text-primary transition-colors duration-300" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(category.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(category.description), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(_sfc_main$6), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("div", { class: "rounded-full bg-primary/10 p-1.5" }, [
                              createVNode(unref(StarIcon), { class: "w-4 h-4 text-primary" })
                            ]),
                            createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(category.count) + " annonces disponibles ", 1)
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><h2 class="text-2xl font-bold text-center mb-12"${_scopeId}> Pourquoi choisir ${ssrInterpolate(unref(appName))} ? </h2><div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4"${_scopeId}><!--[-->`);
            ssrRenderList(features, (feature) => {
              _push2(`<div class="group hover:scale-105 transition-transform duration-300"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "h-full" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex flex-col items-center text-center gap-4"${_scopeId3}><div class="rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors duration-300"${_scopeId3}>`);
                          ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(feature.icon), { class: "w-8 h-8 text-primary" }, null), _parent4, _scopeId3);
                          _push4(`</div><div${_scopeId3}><h3 class="font-medium text-foreground mb-2"${_scopeId3}>${ssrInterpolate(feature.title)}</h3><p class="text-sm text-muted-foreground"${_scopeId3}>${ssrInterpolate(feature.description)}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex flex-col items-center text-center gap-4" }, [
                              createVNode("div", { class: "rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors duration-300" }, [
                                (openBlock(), createBlock(resolveDynamicComponent(feature.icon), { class: "w-8 h-8 text-primary" }))
                              ]),
                              createVNode("div", null, [
                                createVNode("h3", { class: "font-medium text-foreground mb-2" }, toDisplayString(feature.title), 1),
                                createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(feature.description), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$6), { class: "p-6" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-col items-center text-center gap-4" }, [
                            createVNode("div", { class: "rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors duration-300" }, [
                              (openBlock(), createBlock(resolveDynamicComponent(feature.icon), { class: "w-8 h-8 text-primary" }))
                            ]),
                            createVNode("div", null, [
                              createVNode("h3", { class: "font-medium text-foreground mb-2" }, toDisplayString(feature.title), 1),
                              createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(feature.description), 1)
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
            _push2(`<!--]--></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="bg-primary/5 rounded-2xl p-8 text-center"${_scopeId}><h2 class="text-2xl font-semibold mb-4"${_scopeId}> Prêt à rejoindre la communauté ? </h2><p class="text-muted-foreground mb-6 max-w-2xl mx-auto"${_scopeId}> Créez votre compte gratuitement et commencez à louer ou proposer du matériel dès aujourd&#39;hui. </p><div class="flex gap-4 justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$7), {
              asChild: "",
              size: "lg",
              class: "font-semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("register")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Créer un compte gratuitement `);
                      } else {
                        return [
                          createTextVNode(" Créer un compte gratuitement ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), {
                      href: _ctx.route("register")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Créer un compte gratuitement ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$7), {
              asChild: "",
              variant: "outline",
              size: "lg",
              class: "font-semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("how-it-works")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` En savoir plus `);
                      } else {
                        return [
                          createTextVNode(" En savoir plus ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), {
                      href: _ctx.route("how-it-works")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" En savoir plus ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12 space-y-24" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "text-center max-w-3xl mx-auto" }, [
                    createVNode("h1", { class: "text-4xl font-bold text-foreground" }, " Trouvez le matériel idéal pour votre événement "),
                    createVNode("p", { class: "mt-4 text-lg text-muted-foreground" }, toDisplayString(unref(appName)) + " vous connecte avec une communauté d'associations et de particuliers pour partager du matériel événementiel de qualité. ", 1)
                  ])
                ]),
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("h2", { class: "text-2xl font-semibold text-foreground text-center mb-8" }, " Catégories populaires "),
                  createVNode("div", { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.popularCategories, (category) => {
                      return openBlock(), createBlock(unref(_sfc_main$2), {
                        key: category.name,
                        class: "hover:shadow-lg transition-shadow duration-300 group"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$3), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$4), { class: "group-hover:text-primary transition-colors duration-300" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(category.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$5), null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(category.description), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$6), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode("div", { class: "rounded-full bg-primary/10 p-1.5" }, [
                                  createVNode(unref(StarIcon), { class: "w-4 h-4 text-primary" })
                                ]),
                                createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(category.count) + " annonces disponibles ", 1)
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("h2", { class: "text-2xl font-bold text-center mb-12" }, " Pourquoi choisir " + toDisplayString(unref(appName)) + " ? ", 1),
                  createVNode("div", { class: "grid gap-8 md:grid-cols-2 lg:grid-cols-4" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(features, (feature) => {
                      return createVNode("div", {
                        key: feature.title,
                        class: "group hover:scale-105 transition-transform duration-300"
                      }, [
                        createVNode(unref(_sfc_main$2), { class: "h-full" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$6), { class: "p-6" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-col items-center text-center gap-4" }, [
                                  createVNode("div", { class: "rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors duration-300" }, [
                                    (openBlock(), createBlock(resolveDynamicComponent(feature.icon), { class: "w-8 h-8 text-primary" }))
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("h3", { class: "font-medium text-foreground mb-2" }, toDisplayString(feature.title), 1),
                                    createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(feature.description), 1)
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]);
                    }), 64))
                  ])
                ]),
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-primary/5 rounded-2xl p-8 text-center" }, [
                    createVNode("h2", { class: "text-2xl font-semibold mb-4" }, " Prêt à rejoindre la communauté ? "),
                    createVNode("p", { class: "text-muted-foreground mb-6 max-w-2xl mx-auto" }, " Créez votre compte gratuitement et commencez à louer ou proposer du matériel dès aujourd'hui. "),
                    createVNode("div", { class: "flex gap-4 justify-center" }, [
                      createVNode(unref(_sfc_main$7), {
                        asChild: "",
                        size: "lg",
                        class: "font-semibold"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Link), {
                            href: _ctx.route("register")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Créer un compte gratuitement ")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$7), {
                        asChild: "",
                        variant: "outline",
                        size: "lg",
                        class: "font-semibold"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Link), {
                            href: _ctx.route("how-it-works")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" En savoir plus ")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Discover.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
