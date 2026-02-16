import { unref, withCtx, createVNode, toDisplayString, resolveDynamicComponent, createBlock, openBlock, Fragment, renderList, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./PublicLayout-Dy_cSdNa.js";
import { usePage, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$2, d as _sfc_main$3 } from "./CardTitle-rMLiyiHU.js";
import { SearchIcon, CalendarIcon, MessageSquareIcon, UsersIcon, PackageIcon, ShieldCheckIcon, ClockIcon, HeartIcon, ListIcon, CheckCircleIcon } from "lucide-vue-next";
import { _ as _sfc_main$8 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$6, c as _sfc_main$7 } from "./AccordionTrigger-BTZ3R1Gp.js";
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
  __name: "HowItWorks",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const appName = page.props.name;
    const steps = [
      {
        icon: SearchIcon,
        title: "Créez votre compte",
        description: "Inscrivez-vous gratuitement en quelques clics pour accéder à la plateforme."
      },
      {
        icon: CalendarIcon,
        title: "Trouvez votre matériel",
        description: "Parcourez les annonces et trouvez le matériel dont vous avez besoin pour votre événement."
      },
      {
        icon: MessageSquareIcon,
        title: "Envoyez votre demande",
        description: "Sélectionnez vos dates souhaitées et envoyez une demande de réservation."
      },
      {
        icon: UsersIcon,
        title: "Échangez avec le propriétaire",
        description: "Discutez directement avec le propriétaire pour organiser les détails pratiques de la location."
      },
      {
        icon: PackageIcon,
        title: "Profitez de votre location",
        description: "Récupérez le matériel aux dates convenues et profitez de votre événement."
      }
    ];
    const features = [
      {
        icon: ListIcon,
        title: "Pour les propriétaires",
        items: [
          "Créez votre inventaire de matériel",
          "Gérez vos disponibilités",
          "Validez les demandes de réservation",
          "Contribuez à l'économie collaborative"
        ]
      },
      {
        icon: UsersIcon,
        title: "Pour les associations",
        items: [
          "Trouvez du matériel à proximité",
          "Économisez sur vos événements",
          "Réservation simple et rapide",
          "Accédez à du matériel professionnel"
        ]
      }
    ];
    const benefits = [
      {
        icon: ShieldCheckIcon,
        title: "Simple et gratuit",
        value: "100%",
        description: "Une plateforme gratuite et facile à utiliser"
      },
      {
        icon: ClockIcon,
        title: "Disponibilité",
        value: "24/7",
        description: "Consultez les annonces à tout moment"
      },
      {
        icon: UsersIcon,
        title: "Communauté",
        value: "Local",
        description: "Trouvez du matériel près de chez vous"
      },
      {
        icon: HeartIcon,
        title: "Entraide",
        value: "∞",
        description: "L'esprit associatif avant tout"
      }
    ];
    const faqs = [
      {
        question: "Comment fonctionne la réservation ?",
        answer: "La plateforme permet simplement de consulter les annonces et d'envoyer des demandes de réservation. Une fois la demande envoyée, vous pouvez échanger directement avec le propriétaire pour organiser les détails pratiques."
      },
      {
        question: "Comment se passe la location ?",
        answer: "Une fois que vous avez trouvé le matériel qui vous intéresse, vous convenez directement avec le propriétaire des modalités de la location (dates, lieu de récupération, paiement, etc.). La plateforme facilite uniquement la mise en relation."
      },
      {
        question: "Y a-t-il des frais d'inscription ou d'utilisation ?",
        answer: "Non, l'inscription et l'utilisation de la plateforme sont totalement gratuites. Notre objectif est simplement de faciliter l'entraide entre associations."
      },
      {
        question: "Comment protéger mon matériel en tant que propriétaire ?",
        answer: "Nous vous recommandons d'établir un contrat de location simple entre les parties et de bien définir les conditions de location. Vous pouvez également demander un chèque de caution si nécessaire."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Comment ça marche ? - ${ssrInterpolate(unref(appName))}</title><meta name="description"${ssrRenderAttr("content", `Découvrez comment fonctionne ${unref(appName)}, la plateforme de location de matériel événementiel entre associations et particuliers.`)}${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Comment ça marche ? - " + toDisplayString(unref(appName)), 1),
              createVNode("meta", {
                name: "description",
                content: `Découvrez comment fonctionne ${unref(appName)}, la plateforme de location de matériel événementiel entre associations et particuliers.`
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12 space-y-24"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="text-center"${_scopeId}><h1 class="text-4xl font-bold text-foreground"${_scopeId}>Comment ça marche ?</h1><p class="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"${_scopeId}><strong${_scopeId}>${ssrInterpolate(unref(appName))}</strong> est une plateforme de mise en relation qui simplifie la recherche et la réservation de matériel événementiel entre associations et particuliers. </p></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><h2 class="text-2xl font-semibold text-center mb-12"${_scopeId}>En 5 étapes simples</h2><div class="relative"${_scopeId}><div class="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -translate-y-1/2"${_scopeId}></div><div class="grid gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-5"${_scopeId}><!--[-->`);
            ssrRenderList(steps, (step, index) => {
              _push2(`<div class="relative flex flex-col items-center text-center group"${_scopeId}><div class="relative mb-4"${_scopeId}><div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 relative z-10"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(step.icon), { class: "w-8 h-8 text-primary" }, null), _parent2, _scopeId);
              _push2(`</div><div class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium"${_scopeId}>${ssrInterpolate(index + 1)}</div></div><div class="space-y-2"${_scopeId}><h3 class="font-semibold text-foreground"${_scopeId}>${ssrInterpolate(step.title)}</h3><p class="text-sm text-muted-foreground"${_scopeId}>${ssrInterpolate(step.description)}</p></div></div>`);
            });
            _push2(`<!--]--></div></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><h2 class="text-2xl font-semibold text-center mb-8"${_scopeId}>Pourquoi choisir ${ssrInterpolate(unref(appName))} ?</h2><div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4"${_scopeId}><!--[-->`);
            ssrRenderList(benefits, (benefit) => {
              _push2(ssrRenderComponent(unref(_sfc_main$2), {
                key: benefit.title,
                class: "text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$3), { class: "pt-6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex flex-col items-center gap-4"${_scopeId3}><div class="rounded-full bg-primary/10 p-3"${_scopeId3}>`);
                          ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(benefit.icon), { class: "w-6 h-6 text-primary" }, null), _parent4, _scopeId3);
                          _push4(`</div><div${_scopeId3}><span class="block text-2xl font-bold text-primary"${_scopeId3}>${ssrInterpolate(benefit.value)}</span><h3 class="font-semibold text-foreground"${_scopeId3}>${ssrInterpolate(benefit.title)}</h3><p class="mt-1 text-sm text-muted-foreground"${_scopeId3}>${ssrInterpolate(benefit.description)}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex flex-col items-center gap-4" }, [
                              createVNode("div", { class: "rounded-full bg-primary/10 p-3" }, [
                                (openBlock(), createBlock(resolveDynamicComponent(benefit.icon), { class: "w-6 h-6 text-primary" }))
                              ]),
                              createVNode("div", null, [
                                createVNode("span", { class: "block text-2xl font-bold text-primary" }, toDisplayString(benefit.value), 1),
                                createVNode("h3", { class: "font-semibold text-foreground" }, toDisplayString(benefit.title), 1),
                                createVNode("p", { class: "mt-1 text-sm text-muted-foreground" }, toDisplayString(benefit.description), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$3), { class: "pt-6" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-col items-center gap-4" }, [
                            createVNode("div", { class: "rounded-full bg-primary/10 p-3" }, [
                              (openBlock(), createBlock(resolveDynamicComponent(benefit.icon), { class: "w-6 h-6 text-primary" }))
                            ]),
                            createVNode("div", null, [
                              createVNode("span", { class: "block text-2xl font-bold text-primary" }, toDisplayString(benefit.value), 1),
                              createVNode("h3", { class: "font-semibold text-foreground" }, toDisplayString(benefit.title), 1),
                              createVNode("p", { class: "mt-1 text-sm text-muted-foreground" }, toDisplayString(benefit.description), 1)
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
            });
            _push2(`<!--]--></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><h2 class="text-2xl font-semibold text-center mb-8"${_scopeId}>Une solution adaptée à chacun</h2><div class="grid gap-8 md:grid-cols-2"${_scopeId}><!--[-->`);
            ssrRenderList(features, (feature) => {
              _push2(ssrRenderComponent(unref(_sfc_main$2), {
                key: feature.title,
                class: "hover:shadow-lg transition-shadow duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$3), { class: "p-6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center gap-3 mb-4"${_scopeId3}><div class="rounded-lg bg-primary/10 p-2.5"${_scopeId3}>`);
                          ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(feature.icon), { class: "w-5 h-5 text-primary" }, null), _parent4, _scopeId3);
                          _push4(`</div><h2 class="text-xl font-semibold text-foreground"${_scopeId3}>${ssrInterpolate(feature.title)}</h2></div><ul class="space-y-2"${_scopeId3}><!--[-->`);
                          ssrRenderList(feature.items, (item) => {
                            _push4(`<li class="flex items-center gap-2 text-muted-foreground"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(CheckCircleIcon), { class: "w-4 h-4 text-primary" }, null, _parent4, _scopeId3));
                            _push4(`<span${_scopeId3}>${ssrInterpolate(item)}</span></li>`);
                          });
                          _push4(`<!--]--></ul>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center gap-3 mb-4" }, [
                              createVNode("div", { class: "rounded-lg bg-primary/10 p-2.5" }, [
                                (openBlock(), createBlock(resolveDynamicComponent(feature.icon), { class: "w-5 h-5 text-primary" }))
                              ]),
                              createVNode("h2", { class: "text-xl font-semibold text-foreground" }, toDisplayString(feature.title), 1)
                            ]),
                            createVNode("ul", { class: "space-y-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(feature.items, (item) => {
                                return openBlock(), createBlock("li", {
                                  key: item,
                                  class: "flex items-center gap-2 text-muted-foreground"
                                }, [
                                  createVNode(unref(CheckCircleIcon), { class: "w-4 h-4 text-primary" }),
                                  createVNode("span", null, toDisplayString(item), 1)
                                ]);
                              }), 128))
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$3), { class: "p-6" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-3 mb-4" }, [
                            createVNode("div", { class: "rounded-lg bg-primary/10 p-2.5" }, [
                              (openBlock(), createBlock(resolveDynamicComponent(feature.icon), { class: "w-5 h-5 text-primary" }))
                            ]),
                            createVNode("h2", { class: "text-xl font-semibold text-foreground" }, toDisplayString(feature.title), 1)
                          ]),
                          createVNode("ul", { class: "space-y-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(feature.items, (item) => {
                              return openBlock(), createBlock("li", {
                                key: item,
                                class: "flex items-center gap-2 text-muted-foreground"
                              }, [
                                createVNode(unref(CheckCircleIcon), { class: "w-4 h-4 text-primary" }),
                                createVNode("span", null, toDisplayString(item), 1)
                              ]);
                            }), 128))
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
            _push2(`<!--]--></div></div><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><h2 class="text-2xl font-semibold text-center mb-8"${_scopeId}>Questions fréquentes</h2>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              type: "single",
              collapsible: "",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(faqs, (faq, index) => {
                    _push3(ssrRenderComponent(unref(_sfc_main$5), {
                      key: index,
                      value: "item-" + index
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$6), { class: "text-left" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(faq.question)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(faq.question), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$7), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(faq.answer)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(faq.answer), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$6), { class: "text-left" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(faq.question), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$7), null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(faq.answer), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(faqs, (faq, index) => {
                      return createVNode(unref(_sfc_main$5), {
                        key: index,
                        value: "item-" + index
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$6), { class: "text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(faq.question), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(faq.answer), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="bg-primary/5 rounded-2xl p-8 text-center"${_scopeId}><h2 class="text-2xl font-semibold mb-4"${_scopeId}>Prêt à commencer ?</h2><p class="text-muted-foreground mb-6"${_scopeId}> Rejoignez notre communauté et facilitez l&#39;organisation de vos événements grâce au partage de matériel. </p><div class="flex gap-4 justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$8), {
              size: "lg",
              class: "font-semibold",
              onClick: ($event) => _ctx.$inertia.visit(_ctx.route("register"))
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Créer un compte gratuitement `);
                } else {
                  return [
                    createTextVNode(" Créer un compte gratuitement ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$8), {
              size: "lg",
              variant: "outline",
              class: "font-semibold",
              onClick: ($event) => _ctx.$inertia.visit(_ctx.route("login"))
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Se connecter `);
                } else {
                  return [
                    createTextVNode(" Se connecter ")
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
                  createVNode("div", { class: "text-center" }, [
                    createVNode("h1", { class: "text-4xl font-bold text-foreground" }, "Comment ça marche ?"),
                    createVNode("p", { class: "mt-4 text-lg text-muted-foreground max-w-2xl mx-auto" }, [
                      createVNode("strong", null, toDisplayString(unref(appName)), 1),
                      createTextVNode(" est une plateforme de mise en relation qui simplifie la recherche et la réservation de matériel événementiel entre associations et particuliers. ")
                    ])
                  ])
                ]),
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("h2", { class: "text-2xl font-semibold text-center mb-12" }, "En 5 étapes simples"),
                  createVNode("div", { class: "relative" }, [
                    createVNode("div", { class: "hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -translate-y-1/2" }),
                    createVNode("div", { class: "grid gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-5" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(steps, (step, index) => {
                        return createVNode("div", {
                          key: index,
                          class: "relative flex flex-col items-center text-center group"
                        }, [
                          createVNode("div", { class: "relative mb-4" }, [
                            createVNode("div", { class: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 relative z-10" }, [
                              (openBlock(), createBlock(resolveDynamicComponent(step.icon), { class: "w-8 h-8 text-primary" }))
                            ]),
                            createVNode("div", { class: "absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium" }, toDisplayString(index + 1), 1)
                          ]),
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode("h3", { class: "font-semibold text-foreground" }, toDisplayString(step.title), 1),
                            createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(step.description), 1)
                          ])
                        ]);
                      }), 64))
                    ])
                  ])
                ]),
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("h2", { class: "text-2xl font-semibold text-center mb-8" }, "Pourquoi choisir " + toDisplayString(unref(appName)) + " ?", 1),
                  createVNode("div", { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-4" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(benefits, (benefit) => {
                      return createVNode(unref(_sfc_main$2), {
                        key: benefit.title,
                        class: "text-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$3), { class: "pt-6" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col items-center gap-4" }, [
                                createVNode("div", { class: "rounded-full bg-primary/10 p-3" }, [
                                  (openBlock(), createBlock(resolveDynamicComponent(benefit.icon), { class: "w-6 h-6 text-primary" }))
                                ]),
                                createVNode("div", null, [
                                  createVNode("span", { class: "block text-2xl font-bold text-primary" }, toDisplayString(benefit.value), 1),
                                  createVNode("h3", { class: "font-semibold text-foreground" }, toDisplayString(benefit.title), 1),
                                  createVNode("p", { class: "mt-1 text-sm text-muted-foreground" }, toDisplayString(benefit.description), 1)
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ])
                ]),
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("h2", { class: "text-2xl font-semibold text-center mb-8" }, "Une solution adaptée à chacun"),
                  createVNode("div", { class: "grid gap-8 md:grid-cols-2" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(features, (feature) => {
                      return createVNode(unref(_sfc_main$2), {
                        key: feature.title,
                        class: "hover:shadow-lg transition-shadow duration-300"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$3), { class: "p-6" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-3 mb-4" }, [
                                createVNode("div", { class: "rounded-lg bg-primary/10 p-2.5" }, [
                                  (openBlock(), createBlock(resolveDynamicComponent(feature.icon), { class: "w-5 h-5 text-primary" }))
                                ]),
                                createVNode("h2", { class: "text-xl font-semibold text-foreground" }, toDisplayString(feature.title), 1)
                              ]),
                              createVNode("ul", { class: "space-y-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(feature.items, (item) => {
                                  return openBlock(), createBlock("li", {
                                    key: item,
                                    class: "flex items-center gap-2 text-muted-foreground"
                                  }, [
                                    createVNode(unref(CheckCircleIcon), { class: "w-4 h-4 text-primary" }),
                                    createVNode("span", null, toDisplayString(item), 1)
                                  ]);
                                }), 128))
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ])
                ]),
                createVNode("div", { class: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("h2", { class: "text-2xl font-semibold text-center mb-8" }, "Questions fréquentes"),
                  createVNode(unref(_sfc_main$4), {
                    type: "single",
                    collapsible: "",
                    class: "w-full"
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(faqs, (faq, index) => {
                        return createVNode(unref(_sfc_main$5), {
                          key: index,
                          value: "item-" + index
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$6), { class: "text-left" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(faq.question), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$7), null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(faq.answer), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 64))
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-primary/5 rounded-2xl p-8 text-center" }, [
                    createVNode("h2", { class: "text-2xl font-semibold mb-4" }, "Prêt à commencer ?"),
                    createVNode("p", { class: "text-muted-foreground mb-6" }, " Rejoignez notre communauté et facilitez l'organisation de vos événements grâce au partage de matériel. "),
                    createVNode("div", { class: "flex gap-4 justify-center" }, [
                      createVNode(unref(_sfc_main$8), {
                        size: "lg",
                        class: "font-semibold",
                        onClick: ($event) => _ctx.$inertia.visit(_ctx.route("register"))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Créer un compte gratuitement ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(unref(_sfc_main$8), {
                        size: "lg",
                        variant: "outline",
                        class: "font-semibold",
                        onClick: ($event) => _ctx.$inertia.visit(_ctx.route("login"))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Se connecter ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/HowItWorks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
