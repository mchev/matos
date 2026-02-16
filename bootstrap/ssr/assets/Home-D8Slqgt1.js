import { ref, mergeProps, unref, withCtx, createVNode, createTextVNode, resolveDynamicComponent, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext, computed, watch, withDirectives, createCommentVNode, vModelText, withModifiers, defineComponent, reactive, renderSlot, onMounted, onUnmounted } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { usePage, Link, useForm, WhenVisible } from "@inertiajs/vue3";
import { _ as _sfc_main$F } from "./AppLayout-B3jJCr1A.js";
import { XIcon, ArrowRightIcon, SparklesIcon, ShieldCheckIcon, LayoutListIcon, UsersIcon, Search, X, MapPin, ChevronsUpDown, Check, HelpCircle, Image, Tag, SearchX, PackageSearch, ArrowUp } from "lucide-vue-next";
import { _ as _sfc_main$j, d as _sfc_main$l } from "./CardTitle-rMLiyiHU.js";
import { _ as _sfc_main$k, c as cn } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$A, a as _sfc_main$B, b as _sfc_main$C, c as _sfc_main$D, d as _sfc_main$E } from "./SelectValue-BSiknP0M.js";
import { _ as _sfc_main$v } from "./Label-DLRZNtyA.js";
import { j as _sfc_main$w, e as _sfc_main$x, f as _sfc_main$y, g as _sfc_main$z } from "./UserDropdown-C5kfPJJO.js";
import { _ as _sfc_main$m, a as _sfc_main$n, b as _sfc_main$o } from "./PopoverTrigger-DcNHEhqp.js";
import debounce from "lodash/debounce.js";
import axios from "axios";
import { useForwardPropsEmits, useFilter, ListboxRoot, Primitive, useId, ListboxGroup, ListboxGroupLabel, useForwardProps, ListboxFilter, ListboxItem, ListboxContent, Separator, createContext } from "reka-ui";
import { reactiveOmit, useCurrentElement } from "@vueuse/core";
import { _ as _sfc_main$p, a as _sfc_main$q, b as _sfc_main$r, c as _sfc_main$s, d as _sfc_main$t } from "./DialogTrigger-CSFZvrzo.js";
import { _ as _sfc_main$u } from "./index-9VOASAGY.js";
import { debounce as debounce$1 } from "lodash-es";
import "./FlashMessage-DoovtZWd.js";
import "vue-sonner";
import "./Input-BNuRmWJk.js";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@heroicons/vue/24/outline";
const _sfc_main$i = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const appName = page.props.name;
    const isVisible = ref(true);
    const closeHero = () => {
      isVisible.value = false;
      localStorage.setItem("heroCardDismissed", "true");
    };
    const advantages = [
      {
        icon: SparklesIcon,
        title: "Gratuit",
        description: "Pour une association ou un particulier"
      },
      {
        icon: ShieldCheckIcon,
        title: "Réservation sécurisée",
        description: "Processus simple et sûr"
      },
      {
        icon: LayoutListIcon,
        title: "Gestion d'inventaire",
        description: "Suivez votre matériel"
      },
      {
        icon: UsersIcon,
        title: "Communauté active",
        description: "Réseau associatif"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      if (isVisible.value) {
        _push(`<section${ssrRenderAttrs(mergeProps({
          "aria-labelledby": "hero-heading",
          class: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
        }, _attrs))}><div class="absolute inset-0 rounded-2xl"></div>`);
        _push(ssrRenderComponent(unref(_sfc_main$j), { class: "relative border-none bg-gradient-to-br from-violet-100 via-blue-50 to-background dark:from-violet-950 dark:via-blue-950 dark:to-background" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$k), {
                variant: "ghost",
                size: "icon",
                class: "absolute right-3 top-3 hover:bg-white/80",
                onClick: closeHero
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(XIcon), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                    _push3(`<span class="sr-only"${_scopeId2}>Fermer la bannière d&#39;accueil</span>`);
                  } else {
                    return [
                      createVNode(unref(XIcon), { class: "h-4 w-4" }),
                      createVNode("span", { class: "sr-only" }, "Fermer la bannière d'accueil")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$l), { class: "p-6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col lg:flex-row items-center gap-8"${_scopeId2}><div class="flex-1 text-center lg:text-left"${_scopeId2}><div class="space-y-4"${_scopeId2}><h1 id="hero-heading" class="text-2xl sm:text-3xl font-bold font-title text-gray-900 leading-tight dark:text-white"${_scopeId2}><span class="inline-block"${_scopeId2}> Location et prêt de matériel <span class="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent whitespace-nowrap dark:from-violet-400 dark:to-blue-400"${_scopeId2}>événementiel</span></span><span class="block text-lg sm:text-xl mt-2 text-gray-600 font-medium dark:text-gray-400"${_scopeId2}> entre associations et particuliers </span></h1><p class="text-base text-gray-500 max-w-xl mx-auto lg:mx-0 dark:text-gray-400"${_scopeId2}><strong class="text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(unref(appName))}</strong> facilite la location de matériel entre associations et particuliers. Trouvez et réservez en quelques clics le matériel dont vous avez besoin pour vos événements. La création de votre inventaire ne vous engage pas à rendre votre matériel disponible publiquement sur la plateforme. Si vous choisissez de le proposer à la location, vous gardez toujours la liberté d’accepter ou de refuser chaque demande de réservation, sans avoir à fournir de justification. </p></div><div class="mt-6 flex flex-wrap items-center gap-3 justify-center lg:justify-start"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("how-it-works"),
                      class: "inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-700 hover:to-blue-700 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500 dark:from-violet-500 dark:to-blue-500 dark:hover:from-violet-600 dark:hover:to-blue-600"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Comment ça marche ? `);
                          _push4(ssrRenderComponent(unref(ArrowRightIcon), { class: "ml-2 h-4 w-4" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createTextVNode(" Comment ça marche ? "),
                            createVNode(unref(ArrowRightIcon), { class: "ml-2 h-4 w-4" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$k), {
                      variant: "outline",
                      as: "a",
                      href: _ctx.route("discover"),
                      class: "text-sm border-violet-200 text-violet-700 hover:text-violet-500 hover:bg-violet-50 dark:border-violet-800 dark:text-violet-300 dark:hover:bg-violet-900"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Découvrir la plateforme `);
                        } else {
                          return [
                            createTextVNode(" Découvrir la plateforme ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div><div class="hidden lg:block w-px h-32 bg-gradient-to-b from-violet-200 to-blue-200 self-center dark:from-violet-800 dark:to-blue-800"${_scopeId2}></div><div class="flex-shrink-0 lg:w-80"${_scopeId2}><div class="rounded-lg p-4"${_scopeId2}><h2 class="text-sm font-medium text-gray-900 mb-4 dark:text-white"${_scopeId2}> Avantages de la plateforme </h2><ul class="grid gap-3" role="list"${_scopeId2}><!--[-->`);
                    ssrRenderList(advantages, (advantage) => {
                      _push3(`<li class="flex items-start gap-3 group"${_scopeId2}><div class="${ssrRenderClass([{ "from-violet-200 to-blue-200 dark:from-violet-800 dark:to-blue-800": advantage.title === "Gratuit" }, "rounded-md bg-gradient-to-br from-violet-100 to-blue-100 p-2 group-hover:from-violet-200 group-hover:to-blue-200 transition-colors duration-200 dark:from-violet-900 dark:to-blue-900"])}"${_scopeId2}>`);
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(advantage.icon), { class: "w-4 h-4 text-violet-600 dark:text-violet-400" }, null), _parent3, _scopeId2);
                      _push3(`</div><div${_scopeId2}><h3 class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(advantage.title)}</h3><p class="text-xs text-gray-500 mt-0.5 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(advantage.description)}</p></div></li>`);
                    });
                    _push3(`<!--]--></ul></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col lg:flex-row items-center gap-8" }, [
                        createVNode("div", { class: "flex-1 text-center lg:text-left" }, [
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode("h1", {
                              id: "hero-heading",
                              class: "text-2xl sm:text-3xl font-bold font-title text-gray-900 leading-tight dark:text-white"
                            }, [
                              createVNode("span", { class: "inline-block" }, [
                                createTextVNode(" Location et prêt de matériel "),
                                createVNode("span", { class: "bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent whitespace-nowrap dark:from-violet-400 dark:to-blue-400" }, "événementiel")
                              ]),
                              createVNode("span", { class: "block text-lg sm:text-xl mt-2 text-gray-600 font-medium dark:text-gray-400" }, " entre associations et particuliers ")
                            ]),
                            createVNode("p", { class: "text-base text-gray-500 max-w-xl mx-auto lg:mx-0 dark:text-gray-400" }, [
                              createVNode("strong", { class: "text-gray-900 dark:text-white" }, toDisplayString(unref(appName)), 1),
                              createTextVNode(" facilite la location de matériel entre associations et particuliers. Trouvez et réservez en quelques clics le matériel dont vous avez besoin pour vos événements. La création de votre inventaire ne vous engage pas à rendre votre matériel disponible publiquement sur la plateforme. Si vous choisissez de le proposer à la location, vous gardez toujours la liberté d’accepter ou de refuser chaque demande de réservation, sans avoir à fournir de justification. ")
                            ])
                          ]),
                          createVNode("div", { class: "mt-6 flex flex-wrap items-center gap-3 justify-center lg:justify-start" }, [
                            createVNode(unref(Link), {
                              href: _ctx.route("how-it-works"),
                              class: "inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-700 hover:to-blue-700 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500 dark:from-violet-500 dark:to-blue-500 dark:hover:from-violet-600 dark:hover:to-blue-600"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Comment ça marche ? "),
                                createVNode(unref(ArrowRightIcon), { class: "ml-2 h-4 w-4" })
                              ]),
                              _: 1
                            }, 8, ["href"]),
                            createVNode(unref(_sfc_main$k), {
                              variant: "outline",
                              as: "a",
                              href: _ctx.route("discover"),
                              class: "text-sm border-violet-200 text-violet-700 hover:text-violet-500 hover:bg-violet-50 dark:border-violet-800 dark:text-violet-300 dark:hover:bg-violet-900"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Découvrir la plateforme ")
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ])
                        ]),
                        createVNode("div", { class: "hidden lg:block w-px h-32 bg-gradient-to-b from-violet-200 to-blue-200 self-center dark:from-violet-800 dark:to-blue-800" }),
                        createVNode("div", { class: "flex-shrink-0 lg:w-80" }, [
                          createVNode("div", { class: "rounded-lg p-4" }, [
                            createVNode("h2", { class: "text-sm font-medium text-gray-900 mb-4 dark:text-white" }, " Avantages de la plateforme "),
                            createVNode("ul", {
                              class: "grid gap-3",
                              role: "list"
                            }, [
                              (openBlock(), createBlock(Fragment, null, renderList(advantages, (advantage) => {
                                return createVNode("li", {
                                  key: advantage.title,
                                  class: "flex items-start gap-3 group"
                                }, [
                                  createVNode("div", {
                                    class: ["rounded-md bg-gradient-to-br from-violet-100 to-blue-100 p-2 group-hover:from-violet-200 group-hover:to-blue-200 transition-colors duration-200 dark:from-violet-900 dark:to-blue-900", { "from-violet-200 to-blue-200 dark:from-violet-800 dark:to-blue-800": advantage.title === "Gratuit" }]
                                  }, [
                                    (openBlock(), createBlock(resolveDynamicComponent(advantage.icon), { class: "w-4 h-4 text-violet-600 dark:text-violet-400" }))
                                  ], 2),
                                  createVNode("div", null, [
                                    createVNode("h3", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(advantage.title), 1),
                                    createVNode("p", { class: "text-xs text-gray-500 mt-0.5 dark:text-gray-400" }, toDisplayString(advantage.description), 1)
                                  ])
                                ]);
                              }), 64))
                            ])
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$k), {
                  variant: "ghost",
                  size: "icon",
                  class: "absolute right-3 top-3 hover:bg-white/80",
                  onClick: closeHero
                }, {
                  default: withCtx(() => [
                    createVNode(unref(XIcon), { class: "h-4 w-4" }),
                    createVNode("span", { class: "sr-only" }, "Fermer la bannière d'accueil")
                  ]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$l), { class: "p-6" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-col lg:flex-row items-center gap-8" }, [
                      createVNode("div", { class: "flex-1 text-center lg:text-left" }, [
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("h1", {
                            id: "hero-heading",
                            class: "text-2xl sm:text-3xl font-bold font-title text-gray-900 leading-tight dark:text-white"
                          }, [
                            createVNode("span", { class: "inline-block" }, [
                              createTextVNode(" Location et prêt de matériel "),
                              createVNode("span", { class: "bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent whitespace-nowrap dark:from-violet-400 dark:to-blue-400" }, "événementiel")
                            ]),
                            createVNode("span", { class: "block text-lg sm:text-xl mt-2 text-gray-600 font-medium dark:text-gray-400" }, " entre associations et particuliers ")
                          ]),
                          createVNode("p", { class: "text-base text-gray-500 max-w-xl mx-auto lg:mx-0 dark:text-gray-400" }, [
                            createVNode("strong", { class: "text-gray-900 dark:text-white" }, toDisplayString(unref(appName)), 1),
                            createTextVNode(" facilite la location de matériel entre associations et particuliers. Trouvez et réservez en quelques clics le matériel dont vous avez besoin pour vos événements. La création de votre inventaire ne vous engage pas à rendre votre matériel disponible publiquement sur la plateforme. Si vous choisissez de le proposer à la location, vous gardez toujours la liberté d’accepter ou de refuser chaque demande de réservation, sans avoir à fournir de justification. ")
                          ])
                        ]),
                        createVNode("div", { class: "mt-6 flex flex-wrap items-center gap-3 justify-center lg:justify-start" }, [
                          createVNode(unref(Link), {
                            href: _ctx.route("how-it-works"),
                            class: "inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-700 hover:to-blue-700 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500 dark:from-violet-500 dark:to-blue-500 dark:hover:from-violet-600 dark:hover:to-blue-600"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Comment ça marche ? "),
                              createVNode(unref(ArrowRightIcon), { class: "ml-2 h-4 w-4" })
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          createVNode(unref(_sfc_main$k), {
                            variant: "outline",
                            as: "a",
                            href: _ctx.route("discover"),
                            class: "text-sm border-violet-200 text-violet-700 hover:text-violet-500 hover:bg-violet-50 dark:border-violet-800 dark:text-violet-300 dark:hover:bg-violet-900"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Découvrir la plateforme ")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ]),
                      createVNode("div", { class: "hidden lg:block w-px h-32 bg-gradient-to-b from-violet-200 to-blue-200 self-center dark:from-violet-800 dark:to-blue-800" }),
                      createVNode("div", { class: "flex-shrink-0 lg:w-80" }, [
                        createVNode("div", { class: "rounded-lg p-4" }, [
                          createVNode("h2", { class: "text-sm font-medium text-gray-900 mb-4 dark:text-white" }, " Avantages de la plateforme "),
                          createVNode("ul", {
                            class: "grid gap-3",
                            role: "list"
                          }, [
                            (openBlock(), createBlock(Fragment, null, renderList(advantages, (advantage) => {
                              return createVNode("li", {
                                key: advantage.title,
                                class: "flex items-start gap-3 group"
                              }, [
                                createVNode("div", {
                                  class: ["rounded-md bg-gradient-to-br from-violet-100 to-blue-100 p-2 group-hover:from-violet-200 group-hover:to-blue-200 transition-colors duration-200 dark:from-violet-900 dark:to-blue-900", { "from-violet-200 to-blue-200 dark:from-violet-800 dark:to-blue-800": advantage.title === "Gratuit" }]
                                }, [
                                  (openBlock(), createBlock(resolveDynamicComponent(advantage.icon), { class: "w-4 h-4 text-violet-600 dark:text-violet-400" }))
                                ], 2),
                                createVNode("div", null, [
                                  createVNode("h3", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(advantage.title), 1),
                                  createVNode("p", { class: "text-xs text-gray-500 mt-0.5 dark:text-gray-400" }, toDisplayString(advantage.description), 1)
                                ])
                              ]);
                            }), 64))
                          ])
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
        }, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Home/HeroSection.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {
  __name: "SearchInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "search:submit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    ref(null);
    const searchQuery = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center border rounded-lg shadow-md bg-background" }, _attrs))}><span class="pl-3 text-muted-foreground">`);
      _push(ssrRenderComponent(unref(Search), { class: "h-5 w-5" }, null, _parent));
      _push(`</span><input${ssrRenderAttr("value", searchQuery.value)} type="text" class="flex-1 h-12 px-3 bg-transparent focus:outline-none" placeholder="Que recherchez-vous ?" autocomplete="off">`);
      if (searchQuery.value) {
        _push(`<button class="pr-3 text-muted-foreground hover:text-foreground" tabindex="-1">`);
        _push(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Home/SearchInput.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {
  __name: "CityInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "selected"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const cityQuery = ref(props.modelValue);
    const suggestions = ref([]);
    const showSuggestions = ref(false);
    const isLoading = ref(false);
    const error = ref("");
    const selectedSuggestion = ref(null);
    const fetchCitySuggestions = debounce(async (query) => {
      if (query.length < 3) {
        suggestions.value = [];
        showSuggestions.value = false;
        error.value = "";
        return;
      }
      isLoading.value = true;
      showSuggestions.value = true;
      error.value = "";
      try {
        const response = await axios.get(
          `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(query)}&type=municipality&limit=5`
        );
        if (!response.data.features || response.data.features.length === 0) {
          suggestions.value = [];
          return;
        }
        suggestions.value = response.data.features.map((feature) => ({
          id: feature.properties.id,
          name: feature.properties.city,
          postcode: feature.properties.postcode,
          coordinates: {
            lat: feature.geometry.coordinates[1],
            lng: feature.geometry.coordinates[0]
          }
        }));
      } catch (error2) {
        console.error("Error fetching city suggestions:", error2);
        suggestions.value = [];
        error2.value = "Erreur lors de la recherche de villes. Veuillez réessayer.";
      } finally {
        isLoading.value = false;
      }
    }, 150);
    watch(cityQuery, (newValue) => {
      emit("update:modelValue", newValue);
      if (newValue.length >= 3 && newValue !== selectedSuggestion.value) {
        fetchCitySuggestions(newValue);
      } else {
        suggestions.value = [];
        showSuggestions.value = false;
      }
    });
    const selectSuggestion = (suggestion) => {
      selectedSuggestion.value = suggestion.name + " (" + suggestion.postcode + ")";
      cityQuery.value = selectedSuggestion.value;
      error.value = "";
      const cityInfos = {
        name: suggestion.name,
        lat: suggestion.coordinates.lat,
        lng: suggestion.coordinates.lng,
        postcode: suggestion.postcode,
        departement: suggestion.postcode.substring(0, 2)
      };
      emit("selected", cityInfos);
      showSuggestions.value = false;
    };
    const resetSearch = () => {
      cityQuery.value = "";
      suggestions.value = [];
      showSuggestions.value = false;
      error.value = "";
      selectedSuggestion.value = null;
      emit("update:modelValue", "");
      emit("selected", null);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$m), {
        open: showSuggestions.value,
        "onUpdate:open": ($event) => showSuggestions.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$n), { asChild: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center border rounded-lg shadow-md bg-background"${_scopeId2}><span class="pl-3 text-muted-foreground"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(MapPin), { class: "h-5 w-5" }, null, _parent3, _scopeId2));
                  _push3(`</span><input${ssrRenderAttr("value", cityQuery.value)} type="text" class="flex-1 h-12 px-3 bg-transparent focus:outline-none" placeholder="Ajouter une localisation"${_scopeId2}>`);
                  if (cityQuery.value) {
                    _push3(`<button class="pr-3 text-muted-foreground hover:text-foreground" tabindex="-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                    _push3(`</button>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center border rounded-lg shadow-md bg-background" }, [
                      createVNode("span", { class: "pl-3 text-muted-foreground" }, [
                        createVNode(unref(MapPin), { class: "h-5 w-5" })
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => cityQuery.value = $event,
                        type: "text",
                        class: "flex-1 h-12 px-3 bg-transparent focus:outline-none",
                        placeholder: "Ajouter une localisation"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, cityQuery.value]
                      ]),
                      cityQuery.value ? (openBlock(), createBlock("button", {
                        key: 0,
                        onMousedown: withModifiers(resetSearch, ["prevent"]),
                        class: "pr-3 text-muted-foreground hover:text-foreground",
                        tabindex: "-1"
                      }, [
                        createVNode(unref(X), { class: "h-4 w-4" })
                      ], 32)) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$o), {
              class: "w-full p-0",
              align: "start"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (isLoading.value) {
                    _push3(`<div class="py-6 text-center text-sm text-muted-foreground"${_scopeId2}><div class="flex items-center justify-center"${_scopeId2}><div class="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"${_scopeId2}></div><span class="ml-2"${_scopeId2}>Recherche en cours...</span></div></div>`);
                  } else if (error.value) {
                    _push3(`<div class="py-6 text-center text-sm text-destructive"${_scopeId2}>${ssrInterpolate(error.value)}</div>`);
                  } else if (suggestions.value.length === 0) {
                    _push3(`<div class="py-6 text-center text-sm text-muted-foreground"${_scopeId2}> Aucun résultat trouvé </div>`);
                  } else {
                    _push3(`<div class="max-h-[300px] overflow-y-auto"${_scopeId2}><!--[-->`);
                    ssrRenderList(suggestions.value, (suggestion) => {
                      _push3(`<div class="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-accent hover:text-accent-foreground"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(MapPin), { class: "h-4 w-4 text-muted-foreground" }, null, _parent3, _scopeId2));
                      _push3(`<div class="flex flex-col"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(suggestion.name)}</span><span class="text-xs text-muted-foreground"${_scopeId2}>${ssrInterpolate(suggestion.postcode)}</span></div></div>`);
                    });
                    _push3(`<!--]--></div>`);
                  }
                } else {
                  return [
                    isLoading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "py-6 text-center text-sm text-muted-foreground"
                    }, [
                      createVNode("div", { class: "flex items-center justify-center" }, [
                        createVNode("div", { class: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }),
                        createVNode("span", { class: "ml-2" }, "Recherche en cours...")
                      ])
                    ])) : error.value ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "py-6 text-center text-sm text-destructive"
                    }, toDisplayString(error.value), 1)) : suggestions.value.length === 0 ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "py-6 text-center text-sm text-muted-foreground"
                    }, " Aucun résultat trouvé ")) : (openBlock(), createBlock("div", {
                      key: 3,
                      class: "max-h-[300px] overflow-y-auto"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(suggestions.value, (suggestion) => {
                        return openBlock(), createBlock("div", {
                          key: suggestion.id,
                          class: "flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-accent hover:text-accent-foreground",
                          onClick: ($event) => selectSuggestion(suggestion)
                        }, [
                          createVNode(unref(MapPin), { class: "h-4 w-4 text-muted-foreground" }),
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("span", null, toDisplayString(suggestion.name), 1),
                            createVNode("span", { class: "text-xs text-muted-foreground" }, toDisplayString(suggestion.postcode), 1)
                          ])
                        ], 8, ["onClick"]);
                      }), 128))
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$n), { asChild: "" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center border rounded-lg shadow-md bg-background" }, [
                    createVNode("span", { class: "pl-3 text-muted-foreground" }, [
                      createVNode(unref(MapPin), { class: "h-5 w-5" })
                    ]),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => cityQuery.value = $event,
                      type: "text",
                      class: "flex-1 h-12 px-3 bg-transparent focus:outline-none",
                      placeholder: "Ajouter une localisation"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, cityQuery.value]
                    ]),
                    cityQuery.value ? (openBlock(), createBlock("button", {
                      key: 0,
                      onMousedown: withModifiers(resetSearch, ["prevent"]),
                      class: "pr-3 text-muted-foreground hover:text-foreground",
                      tabindex: "-1"
                    }, [
                      createVNode(unref(X), { class: "h-4 w-4" })
                    ], 32)) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$o), {
                class: "w-full p-0",
                align: "start"
              }, {
                default: withCtx(() => [
                  isLoading.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "py-6 text-center text-sm text-muted-foreground"
                  }, [
                    createVNode("div", { class: "flex items-center justify-center" }, [
                      createVNode("div", { class: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }),
                      createVNode("span", { class: "ml-2" }, "Recherche en cours...")
                    ])
                  ])) : error.value ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "py-6 text-center text-sm text-destructive"
                  }, toDisplayString(error.value), 1)) : suggestions.value.length === 0 ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "py-6 text-center text-sm text-muted-foreground"
                  }, " Aucun résultat trouvé ")) : (openBlock(), createBlock("div", {
                    key: 3,
                    class: "max-h-[300px] overflow-y-auto"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(suggestions.value, (suggestion) => {
                      return openBlock(), createBlock("div", {
                        key: suggestion.id,
                        class: "flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-accent hover:text-accent-foreground",
                        onClick: ($event) => selectSuggestion(suggestion)
                      }, [
                        createVNode(unref(MapPin), { class: "h-4 w-4 text-muted-foreground" }),
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("span", null, toDisplayString(suggestion.name), 1),
                          createVNode("span", { class: "text-xs text-muted-foreground" }, toDisplayString(suggestion.postcode), 1)
                        ])
                      ], 8, ["onClick"]);
                    }), 128))
                  ]))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Home/CityInput.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Command",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" },
    defaultValue: {},
    multiple: { type: Boolean },
    orientation: {},
    dir: {},
    disabled: { type: Boolean },
    selectionBehavior: {},
    highlightOnHover: { type: Boolean },
    by: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue", "highlight", "entryFocus", "leave"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    const allItems = ref(/* @__PURE__ */ new Map());
    const allGroups = ref(/* @__PURE__ */ new Map());
    const { contains } = useFilter({ sensitivity: "base" });
    const filterState = reactive({
      search: "",
      filtered: {
        /** The count of all visible items. */
        count: 0,
        /** Map from visible item id to its search score. */
        items: /* @__PURE__ */ new Map(),
        /** Set of groups with at least one visible item. */
        groups: /* @__PURE__ */ new Set()
      }
    });
    function filterItems() {
      if (!filterState.search) {
        filterState.filtered.count = allItems.value.size;
        return;
      }
      filterState.filtered.groups = /* @__PURE__ */ new Set();
      let itemCount = 0;
      for (const [id, value] of allItems.value) {
        const score = contains(value, filterState.search);
        filterState.filtered.items.set(id, score ? 1 : 0);
        if (score)
          itemCount++;
      }
      for (const [groupId, group] of allGroups.value) {
        for (const itemId of group) {
          if (filterState.filtered.items.get(itemId) > 0) {
            filterState.filtered.groups.add(groupId);
            break;
          }
        }
      }
      filterState.filtered.count = itemCount;
    }
    watch(() => filterState.search, () => {
      filterItems();
    });
    provideCommandContext({
      allItems,
      allGroups,
      filterState
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ListboxRoot), mergeProps({ "data-slot": "command" }, unref(forwarded), {
        class: unref(cn)("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/command/Command.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "CommandDialog",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    title: { default: "Command Palette" },
    description: { default: "Search for a command to run..." }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$p), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$q), { class: "overflow-hidden p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$r), { class: "sr-only" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$s), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(__props.title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(__props.title), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$t), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(__props.description)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(__props.description), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$s), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.title), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$t), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.description), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$f, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default")
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$r), { class: "sr-only" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$s), null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.title), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$t), null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.description), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$f, null, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$q), { class: "overflow-hidden p-0" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$r), { class: "sr-only" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$s), null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(__props.title), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$t), null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(__props.description), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$f, null, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/command/CommandDialog.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "CommandEmpty",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const { filterState } = useCommand();
    const isRender = computed(
      () => !!filterState.search && filterState.filtered.count === 0
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (isRender.value) {
        _push(ssrRenderComponent(unref(Primitive), mergeProps({ "data-slot": "command-empty" }, unref(delegatedProps), {
          class: unref(cn)("py-6 text-center text-sm", props.class)
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/command/CommandEmpty.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "CommandGroup",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const { allGroups, filterState } = useCommand();
    const id = useId();
    const isRender = computed(() => !filterState.search ? true : filterState.filtered.groups.has(id));
    provideCommandGroupContext({ id });
    onMounted(() => {
      if (!allGroups.value.has(id))
        allGroups.value.set(id, /* @__PURE__ */ new Set());
    });
    onUnmounted(() => {
      allGroups.value.delete(id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ListboxGroup), mergeProps(unref(delegatedProps), {
        id: unref(id),
        "data-slot": "command-group",
        class: unref(cn)("text-foreground overflow-hidden p-1", props.class),
        hidden: isRender.value ? void 0 : true
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.heading) {
              _push2(ssrRenderComponent(unref(ListboxGroupLabel), { class: "px-2 py-1.5 text-xs font-medium text-muted-foreground" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.heading)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.heading), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              __props.heading ? (openBlock(), createBlock(unref(ListboxGroupLabel), {
                key: 0,
                class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.heading), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/command/CommandGroup.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "CommandInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    autoFocus: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    const { filterState } = useCommand();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "command-input-wrapper",
        class: "flex h-12 items-center gap-2 border-b px-3"
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Search), { class: "size-4 shrink-0 opacity-50" }, null, _parent));
      _push(ssrRenderComponent(unref(ListboxFilter), mergeProps({ ...unref(forwardedProps), ..._ctx.$attrs }, {
        modelValue: unref(filterState).search,
        "onUpdate:modelValue": ($event) => unref(filterState).search = $event,
        "data-slot": "command-input",
        "auto-focus": "",
        class: unref(cn)("placeholder:text-muted-foreground flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", props.class)
      }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/command/CommandInput.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "CommandItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    const id = useId();
    const { filterState, allItems, allGroups } = useCommand();
    const groupContext = useCommandGroup();
    const isRender = computed(() => {
      if (!filterState.search) {
        return true;
      } else {
        const filteredCurrentItem = filterState.filtered.items.get(id);
        if (filteredCurrentItem === void 0) {
          return true;
        }
        return filteredCurrentItem > 0;
      }
    });
    const itemRef = ref();
    const currentElement = useCurrentElement(itemRef);
    onMounted(() => {
      var _a, _b;
      if (!(currentElement.value instanceof HTMLElement))
        return;
      allItems.value.set(id, currentElement.value.textContent ?? (((_a = props.value) == null ? void 0 : _a.toString()) ?? ""));
      const groupId = groupContext == null ? void 0 : groupContext.id;
      if (groupId) {
        if (!allGroups.value.has(groupId)) {
          allGroups.value.set(groupId, /* @__PURE__ */ new Set([id]));
        } else {
          (_b = allGroups.value.get(groupId)) == null ? void 0 : _b.add(id);
        }
      }
    });
    onUnmounted(() => {
      allItems.value.delete(id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (isRender.value) {
        _push(ssrRenderComponent(unref(ListboxItem), mergeProps(unref(forwarded), {
          id: unref(id),
          ref_key: "itemRef",
          ref: itemRef,
          "data-slot": "command-item",
          class: unref(cn)(`data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-3 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`, props.class),
          onSelect: () => {
            unref(filterState).search = "";
          }
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/command/CommandItem.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CommandList",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ListboxContent), mergeProps({ "data-slot": "command-list" }, unref(forwarded), {
        class: unref(cn)("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div role="presentation"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { role: "presentation" }, [
                renderSlot(_ctx.$slots, "default")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/command/CommandList.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CommandSeparator",
  __ssrInlineRender: true,
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Separator), mergeProps({ "data-slot": "command-separator" }, unref(delegatedProps), {
        class: unref(cn)("bg-border -mx-1 h-px", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/command/CommandSeparator.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CommandShortcut",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        "data-slot": "command-shortcut",
        class: unref(cn)("text-muted-foreground ml-auto text-xs tracking-widest", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/command/CommandShortcut.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const [useCommand, provideCommandContext] = createContext("Command");
const [useCommandGroup, provideCommandGroupContext] = createContext("CommandGroup");
const _sfc_main$6 = {
  __name: "OrganizationFilter",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const open = ref(false);
    const searchQuery = ref("");
    const searchedOrganizations = ref([]);
    const allKnownOrganizations = ref([]);
    const isLoading = ref(false);
    const selectedOrganizations = computed(() => {
      return props.modelValue.map((id) => allKnownOrganizations.value.find((org) => org.id === id)).filter(Boolean);
    });
    const fetchOrganizationsByIds = async (ids) => {
      if (ids.length === 0) return;
      const unknownIds = ids.filter((id) => !allKnownOrganizations.value.some((org) => org.id === id));
      if (unknownIds.length === 0) return;
      try {
        const response = await axios.get(route("api.organizations.index", { "ids[]": unknownIds }));
        allKnownOrganizations.value.push(...response.data.data);
      } catch (error) {
        console.error("Error fetching organizations by IDs:", error);
      }
    };
    onMounted(() => {
      searchOrganizations();
      fetchOrganizationsByIds(props.modelValue);
    });
    watch(() => props.modelValue, (newIds) => {
      fetchOrganizationsByIds(newIds);
    }, { deep: true });
    const isSelected = (organization) => {
      return props.modelValue.includes(organization.id);
    };
    const onSelect = (organization, event) => {
      if (event) {
        event.preventDefault();
      }
      const newSelectedIds = [...props.modelValue];
      const index = newSelectedIds.indexOf(organization.id);
      if (index > -1) {
        newSelectedIds.splice(index, 1);
      } else {
        newSelectedIds.push(organization.id);
      }
      emit("update:modelValue", newSelectedIds);
    };
    const toggleSelection = (organization) => {
      onSelect(organization, null);
    };
    const clearSelection = () => {
      emit("update:modelValue", []);
    };
    const searchOrganizations = debounce$1(async () => {
      isLoading.value = true;
      try {
        const response = await axios.get(route("api.organizations.index", { search: searchQuery.value }));
        searchedOrganizations.value = response.data.data;
        response.data.data.forEach((org) => {
          if (!allKnownOrganizations.value.some((o) => o.id === org.id)) {
            allKnownOrganizations.value.push(org);
          }
        });
      } catch (error) {
        console.error("Error searching organizations:", error);
      } finally {
        isLoading.value = false;
      }
    }, 300);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(_sfc_main$m), {
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$n), { asChild: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$k), {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": open.value,
                    class: "w-full justify-between"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(selectedOrganizations.value.length > 0 ? selectedOrganizations.value.map((org) => org.name).join(", ") : "Sélectionner une ou plusieurs organisations")}</span>`);
                        _push4(ssrRenderComponent(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { class: "truncate" }, toDisplayString(selectedOrganizations.value.length > 0 ? selectedOrganizations.value.map((org) => org.name).join(", ") : "Sélectionner une ou plusieurs organisations"), 1),
                          createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$k), {
                      variant: "outline",
                      role: "combobox",
                      "aria-expanded": open.value,
                      class: "w-full justify-between"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "truncate" }, toDisplayString(selectedOrganizations.value.length > 0 ? selectedOrganizations.value.map((org) => org.name).join(", ") : "Sélectionner une ou plusieurs organisations"), 1),
                        createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                      ]),
                      _: 1
                    }, 8, ["aria-expanded"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$o), { class: "w-[--radix-popover-trigger-width] p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$f), {
                    "filter-function": (list) => list
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center justify-between border-b p-2"${_scopeId3}><p class="text-sm text-muted-foreground"${_scopeId3}>${ssrInterpolate(selectedOrganizations.value.length)} sélectionnée(s) </p>`);
                        if (selectedOrganizations.value.length > 0) {
                          _push4(ssrRenderComponent(unref(_sfc_main$k), {
                            variant: "ghost",
                            size: "sm",
                            onClick: clearSelection
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Effacer `);
                              } else {
                                return [
                                  createTextVNode(" Effacer ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$b), {
                          modelValue: searchQuery.value,
                          "onUpdate:modelValue": [($event) => searchQuery.value = $event, unref(searchOrganizations)],
                          placeholder: "Rechercher une organisation..."
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$d), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (isLoading.value) {
                                _push5(`<span${_scopeId4}>Chargement...</span>`);
                              } else {
                                _push5(`<span${_scopeId4}>Aucune organisation trouvée.</span>`);
                              }
                            } else {
                              return [
                                isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "Chargement...")) : (openBlock(), createBlock("span", { key: 1 }, "Aucune organisation trouvée."))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$c), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(searchedOrganizations.value, (organization) => {
                                _push5(ssrRenderComponent(unref(_sfc_main$a), {
                                  key: organization.id,
                                  value: organization.name,
                                  onSelect: (event) => onSelect(organization, event)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(Check), {
                                        class: [
                                          "mr-2 h-4 w-4",
                                          isSelected(organization) ? "opacity-100" : "opacity-0"
                                        ]
                                      }, null, _parent6, _scopeId5));
                                      _push6(` ${ssrInterpolate(organization.name)}`);
                                    } else {
                                      return [
                                        createVNode(unref(Check), {
                                          class: [
                                            "mr-2 h-4 w-4",
                                            isSelected(organization) ? "opacity-100" : "opacity-0"
                                          ]
                                        }, null, 8, ["class"]),
                                        createTextVNode(" " + toDisplayString(organization.name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(searchedOrganizations.value, (organization) => {
                                  return openBlock(), createBlock(unref(_sfc_main$a), {
                                    key: organization.id,
                                    value: organization.name,
                                    onSelect: (event) => onSelect(organization, event)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Check), {
                                        class: [
                                          "mr-2 h-4 w-4",
                                          isSelected(organization) ? "opacity-100" : "opacity-0"
                                        ]
                                      }, null, 8, ["class"]),
                                      createTextVNode(" " + toDisplayString(organization.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "onSelect"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center justify-between border-b p-2" }, [
                            createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(selectedOrganizations.value.length) + " sélectionnée(s) ", 1),
                            selectedOrganizations.value.length > 0 ? (openBlock(), createBlock(unref(_sfc_main$k), {
                              key: 0,
                              variant: "ghost",
                              size: "sm",
                              onClick: clearSelection
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Effacer ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          createVNode(unref(_sfc_main$b), {
                            modelValue: searchQuery.value,
                            "onUpdate:modelValue": [($event) => searchQuery.value = $event, unref(searchOrganizations)],
                            placeholder: "Rechercher une organisation..."
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(_sfc_main$d), null, {
                            default: withCtx(() => [
                              isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "Chargement...")) : (openBlock(), createBlock("span", { key: 1 }, "Aucune organisation trouvée."))
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$c), null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(searchedOrganizations.value, (organization) => {
                                return openBlock(), createBlock(unref(_sfc_main$a), {
                                  key: organization.id,
                                  value: organization.name,
                                  onSelect: (event) => onSelect(organization, event)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Check), {
                                      class: [
                                        "mr-2 h-4 w-4",
                                        isSelected(organization) ? "opacity-100" : "opacity-0"
                                      ]
                                    }, null, 8, ["class"]),
                                    createTextVNode(" " + toDisplayString(organization.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "onSelect"]);
                              }), 128))
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
                    createVNode(unref(_sfc_main$f), {
                      "filter-function": (list) => list
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-between border-b p-2" }, [
                          createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(selectedOrganizations.value.length) + " sélectionnée(s) ", 1),
                          selectedOrganizations.value.length > 0 ? (openBlock(), createBlock(unref(_sfc_main$k), {
                            key: 0,
                            variant: "ghost",
                            size: "sm",
                            onClick: clearSelection
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Effacer ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        createVNode(unref(_sfc_main$b), {
                          modelValue: searchQuery.value,
                          "onUpdate:modelValue": [($event) => searchQuery.value = $event, unref(searchOrganizations)],
                          placeholder: "Rechercher une organisation..."
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(unref(_sfc_main$d), null, {
                          default: withCtx(() => [
                            isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "Chargement...")) : (openBlock(), createBlock("span", { key: 1 }, "Aucune organisation trouvée."))
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$c), null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(searchedOrganizations.value, (organization) => {
                              return openBlock(), createBlock(unref(_sfc_main$a), {
                                key: organization.id,
                                value: organization.name,
                                onSelect: (event) => onSelect(organization, event)
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Check), {
                                    class: [
                                      "mr-2 h-4 w-4",
                                      isSelected(organization) ? "opacity-100" : "opacity-0"
                                    ]
                                  }, null, 8, ["class"]),
                                  createTextVNode(" " + toDisplayString(organization.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["value", "onSelect"]);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["filter-function"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$n), { asChild: "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$k), {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": open.value,
                    class: "w-full justify-between"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "truncate" }, toDisplayString(selectedOrganizations.value.length > 0 ? selectedOrganizations.value.map((org) => org.name).join(", ") : "Sélectionner une ou plusieurs organisations"), 1),
                      createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                    ]),
                    _: 1
                  }, 8, ["aria-expanded"])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$o), { class: "w-[--radix-popover-trigger-width] p-0" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$f), {
                    "filter-function": (list) => list
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center justify-between border-b p-2" }, [
                        createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(selectedOrganizations.value.length) + " sélectionnée(s) ", 1),
                        selectedOrganizations.value.length > 0 ? (openBlock(), createBlock(unref(_sfc_main$k), {
                          key: 0,
                          variant: "ghost",
                          size: "sm",
                          onClick: clearSelection
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Effacer ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode(unref(_sfc_main$b), {
                        modelValue: searchQuery.value,
                        "onUpdate:modelValue": [($event) => searchQuery.value = $event, unref(searchOrganizations)],
                        placeholder: "Rechercher une organisation..."
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(unref(_sfc_main$d), null, {
                        default: withCtx(() => [
                          isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "Chargement...")) : (openBlock(), createBlock("span", { key: 1 }, "Aucune organisation trouvée."))
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$c), null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(searchedOrganizations.value, (organization) => {
                            return openBlock(), createBlock(unref(_sfc_main$a), {
                              key: organization.id,
                              value: organization.name,
                              onSelect: (event) => onSelect(organization, event)
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Check), {
                                  class: [
                                    "mr-2 h-4 w-4",
                                    isSelected(organization) ? "opacity-100" : "opacity-0"
                                  ]
                                }, null, 8, ["class"]),
                                createTextVNode(" " + toDisplayString(organization.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["value", "onSelect"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["filter-function"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (selectedOrganizations.value.length > 0) {
        _push(`<div class="mt-2 flex flex-wrap gap-1"><!--[-->`);
        ssrRenderList(selectedOrganizations.value, (organization) => {
          _push(ssrRenderComponent(unref(_sfc_main$u), {
            key: `selected-${organization.id}`,
            variant: "secondary"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(organization.name)} <button type="button" class="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(X), { class: "h-3 w-3 text-muted-foreground hover:text-foreground" }, null, _parent2, _scopeId));
                _push2(`</button>`);
              } else {
                return [
                  createTextVNode(toDisplayString(organization.name) + " ", 1),
                  createVNode("button", {
                    type: "button",
                    class: "ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    onClick: ($event) => toggleSelection(organization)
                  }, [
                    createVNode(unref(X), { class: "h-3 w-3 text-muted-foreground hover:text-foreground" })
                  ], 8, ["onClick"])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/OrganizationFilter.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "CategoryFilter",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const open = ref(false);
    const searchQuery = ref("");
    const categories = ref([]);
    const flatCategories = computed(() => categories.value.flatMap((c) => [c, ...c.children]));
    const isLoading = ref(false);
    const selectedCategories = computed(() => {
      return props.modelValue.map((id) => flatCategories.value.find((cat) => cat.id === id)).filter(Boolean);
    });
    const fetchCategories = async () => {
      isLoading.value = true;
      try {
        const response = await axios.get("/api/categories");
        categories.value = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        isLoading.value = false;
      }
    };
    onMounted(() => {
      fetchCategories();
    });
    const isSelected = (category) => {
      return props.modelValue.includes(category.id);
    };
    const onSelect = (category, event) => {
      if (event) {
        event.preventDefault();
      }
      const newSelectedIds = [...props.modelValue];
      const index = newSelectedIds.indexOf(category.id);
      if (index > -1) {
        newSelectedIds.splice(index, 1);
      } else {
        newSelectedIds.push(category.id);
      }
      emit("update:modelValue", newSelectedIds);
    };
    const toggleSelection = (category) => {
      onSelect(category, null);
    };
    const clearSelection = () => {
      emit("update:modelValue", []);
    };
    const filterFunction = (list, search) => {
      return list.filter((item) => {
        var _a;
        const childMatch = (_a = item.children) == null ? void 0 : _a.some((child) => child.name.toLowerCase().includes(search.toLowerCase()));
        return item.name.toLowerCase().includes(search.toLowerCase()) || childMatch;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(_sfc_main$m), {
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$n), { asChild: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$k), {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": open.value,
                    class: "w-full justify-between"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(selectedCategories.value.length > 0 ? selectedCategories.value.map((cat) => cat.name).join(", ") : "Sélectionner une ou plusieurs catégories")}</span>`);
                        _push4(ssrRenderComponent(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { class: "truncate" }, toDisplayString(selectedCategories.value.length > 0 ? selectedCategories.value.map((cat) => cat.name).join(", ") : "Sélectionner une ou plusieurs catégories"), 1),
                          createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$k), {
                      variant: "outline",
                      role: "combobox",
                      "aria-expanded": open.value,
                      class: "w-full justify-between"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "truncate" }, toDisplayString(selectedCategories.value.length > 0 ? selectedCategories.value.map((cat) => cat.name).join(", ") : "Sélectionner une ou plusieurs catégories"), 1),
                        createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                      ]),
                      _: 1
                    }, 8, ["aria-expanded"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$o), { class: "w-[--radix-popover-trigger-width] p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$f), { "filter-function": filterFunction }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center justify-between border-b p-2"${_scopeId3}><p class="text-sm text-muted-foreground"${_scopeId3}>${ssrInterpolate(selectedCategories.value.length)} sélectionnée(s) </p>`);
                        if (selectedCategories.value.length > 0) {
                          _push4(ssrRenderComponent(unref(_sfc_main$k), {
                            variant: "ghost",
                            size: "sm",
                            onClick: clearSelection
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Effacer `);
                              } else {
                                return [
                                  createTextVNode(" Effacer ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$b), {
                          modelValue: searchQuery.value,
                          "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                          placeholder: "Rechercher une catégorie..."
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$d), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (isLoading.value) {
                                _push5(`<span${_scopeId4}>Chargement...</span>`);
                              } else {
                                _push5(`<span${_scopeId4}>Aucune catégorie trouvée.</span>`);
                              }
                            } else {
                              return [
                                isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "Chargement...")) : (openBlock(), createBlock("span", { key: 1 }, "Aucune catégorie trouvée."))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$9), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(categories.value, (category) => {
                                _push5(ssrRenderComponent(unref(_sfc_main$c), {
                                  key: category.id,
                                  heading: category.name
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(_sfc_main$a), {
                                        value: category.name,
                                        onSelect: (event) => onSelect(category, event)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(Check), {
                                              class: [
                                                "mr-2 h-4 w-4",
                                                isSelected(category) ? "opacity-100" : "opacity-0"
                                              ]
                                            }, null, _parent7, _scopeId6));
                                            _push7(` ${ssrInterpolate(category.name)} (toute la catégorie) `);
                                          } else {
                                            return [
                                              createVNode(unref(Check), {
                                                class: [
                                                  "mr-2 h-4 w-4",
                                                  isSelected(category) ? "opacity-100" : "opacity-0"
                                                ]
                                              }, null, 8, ["class"]),
                                              createTextVNode(" " + toDisplayString(category.name) + " (toute la catégorie) ", 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<!--[-->`);
                                      ssrRenderList(category.children, (child) => {
                                        _push6(ssrRenderComponent(unref(_sfc_main$a), {
                                          key: child.id,
                                          value: child.name,
                                          onSelect: (event) => onSelect(child, event),
                                          class: "pl-8"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(unref(Check), {
                                                class: [
                                                  "mr-2 h-4 w-4",
                                                  isSelected(child) ? "opacity-100" : "opacity-0"
                                                ]
                                              }, null, _parent7, _scopeId6));
                                              _push7(` ${ssrInterpolate(child.name)}`);
                                            } else {
                                              return [
                                                createVNode(unref(Check), {
                                                  class: [
                                                    "mr-2 h-4 w-4",
                                                    isSelected(child) ? "opacity-100" : "opacity-0"
                                                  ]
                                                }, null, 8, ["class"]),
                                                createTextVNode(" " + toDisplayString(child.name), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        createVNode(unref(_sfc_main$a), {
                                          value: category.name,
                                          onSelect: (event) => onSelect(category, event)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Check), {
                                              class: [
                                                "mr-2 h-4 w-4",
                                                isSelected(category) ? "opacity-100" : "opacity-0"
                                              ]
                                            }, null, 8, ["class"]),
                                            createTextVNode(" " + toDisplayString(category.name) + " (toute la catégorie) ", 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onSelect"]),
                                        (openBlock(true), createBlock(Fragment, null, renderList(category.children, (child) => {
                                          return openBlock(), createBlock(unref(_sfc_main$a), {
                                            key: child.id,
                                            value: child.name,
                                            onSelect: (event) => onSelect(child, event),
                                            class: "pl-8"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Check), {
                                                class: [
                                                  "mr-2 h-4 w-4",
                                                  isSelected(child) ? "opacity-100" : "opacity-0"
                                                ]
                                              }, null, 8, ["class"]),
                                              createTextVNode(" " + toDisplayString(child.name), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "onSelect"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category) => {
                                  return openBlock(), createBlock(unref(_sfc_main$c), {
                                    key: category.id,
                                    heading: category.name
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), {
                                        value: category.name,
                                        onSelect: (event) => onSelect(category, event)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Check), {
                                            class: [
                                              "mr-2 h-4 w-4",
                                              isSelected(category) ? "opacity-100" : "opacity-0"
                                            ]
                                          }, null, 8, ["class"]),
                                          createTextVNode(" " + toDisplayString(category.name) + " (toute la catégorie) ", 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onSelect"]),
                                      (openBlock(true), createBlock(Fragment, null, renderList(category.children, (child) => {
                                        return openBlock(), createBlock(unref(_sfc_main$a), {
                                          key: child.id,
                                          value: child.name,
                                          onSelect: (event) => onSelect(child, event),
                                          class: "pl-8"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Check), {
                                              class: [
                                                "mr-2 h-4 w-4",
                                                isSelected(child) ? "opacity-100" : "opacity-0"
                                              ]
                                            }, null, 8, ["class"]),
                                            createTextVNode(" " + toDisplayString(child.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onSelect"]);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1032, ["heading"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center justify-between border-b p-2" }, [
                            createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(selectedCategories.value.length) + " sélectionnée(s) ", 1),
                            selectedCategories.value.length > 0 ? (openBlock(), createBlock(unref(_sfc_main$k), {
                              key: 0,
                              variant: "ghost",
                              size: "sm",
                              onClick: clearSelection
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Effacer ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          createVNode(unref(_sfc_main$b), {
                            modelValue: searchQuery.value,
                            "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                            placeholder: "Rechercher une catégorie..."
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(_sfc_main$d), null, {
                            default: withCtx(() => [
                              isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "Chargement...")) : (openBlock(), createBlock("span", { key: 1 }, "Aucune catégorie trouvée."))
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category) => {
                                return openBlock(), createBlock(unref(_sfc_main$c), {
                                  key: category.id,
                                  heading: category.name
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$a), {
                                      value: category.name,
                                      onSelect: (event) => onSelect(category, event)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Check), {
                                          class: [
                                            "mr-2 h-4 w-4",
                                            isSelected(category) ? "opacity-100" : "opacity-0"
                                          ]
                                        }, null, 8, ["class"]),
                                        createTextVNode(" " + toDisplayString(category.name) + " (toute la catégorie) ", 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "onSelect"]),
                                    (openBlock(true), createBlock(Fragment, null, renderList(category.children, (child) => {
                                      return openBlock(), createBlock(unref(_sfc_main$a), {
                                        key: child.id,
                                        value: child.name,
                                        onSelect: (event) => onSelect(child, event),
                                        class: "pl-8"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Check), {
                                            class: [
                                              "mr-2 h-4 w-4",
                                              isSelected(child) ? "opacity-100" : "opacity-0"
                                            ]
                                          }, null, 8, ["class"]),
                                          createTextVNode(" " + toDisplayString(child.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onSelect"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["heading"]);
                              }), 128))
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
                    createVNode(unref(_sfc_main$f), { "filter-function": filterFunction }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-between border-b p-2" }, [
                          createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(selectedCategories.value.length) + " sélectionnée(s) ", 1),
                          selectedCategories.value.length > 0 ? (openBlock(), createBlock(unref(_sfc_main$k), {
                            key: 0,
                            variant: "ghost",
                            size: "sm",
                            onClick: clearSelection
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Effacer ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        createVNode(unref(_sfc_main$b), {
                          modelValue: searchQuery.value,
                          "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                          placeholder: "Rechercher une catégorie..."
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(unref(_sfc_main$d), null, {
                          default: withCtx(() => [
                            isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "Chargement...")) : (openBlock(), createBlock("span", { key: 1 }, "Aucune catégorie trouvée."))
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$9), null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category) => {
                              return openBlock(), createBlock(unref(_sfc_main$c), {
                                key: category.id,
                                heading: category.name
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$a), {
                                    value: category.name,
                                    onSelect: (event) => onSelect(category, event)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Check), {
                                        class: [
                                          "mr-2 h-4 w-4",
                                          isSelected(category) ? "opacity-100" : "opacity-0"
                                        ]
                                      }, null, 8, ["class"]),
                                      createTextVNode(" " + toDisplayString(category.name) + " (toute la catégorie) ", 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "onSelect"]),
                                  (openBlock(true), createBlock(Fragment, null, renderList(category.children, (child) => {
                                    return openBlock(), createBlock(unref(_sfc_main$a), {
                                      key: child.id,
                                      value: child.name,
                                      onSelect: (event) => onSelect(child, event),
                                      class: "pl-8"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Check), {
                                          class: [
                                            "mr-2 h-4 w-4",
                                            isSelected(child) ? "opacity-100" : "opacity-0"
                                          ]
                                        }, null, 8, ["class"]),
                                        createTextVNode(" " + toDisplayString(child.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "onSelect"]);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1032, ["heading"]);
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$n), { asChild: "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$k), {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": open.value,
                    class: "w-full justify-between"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "truncate" }, toDisplayString(selectedCategories.value.length > 0 ? selectedCategories.value.map((cat) => cat.name).join(", ") : "Sélectionner une ou plusieurs catégories"), 1),
                      createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                    ]),
                    _: 1
                  }, 8, ["aria-expanded"])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$o), { class: "w-[--radix-popover-trigger-width] p-0" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$f), { "filter-function": filterFunction }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center justify-between border-b p-2" }, [
                        createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(selectedCategories.value.length) + " sélectionnée(s) ", 1),
                        selectedCategories.value.length > 0 ? (openBlock(), createBlock(unref(_sfc_main$k), {
                          key: 0,
                          variant: "ghost",
                          size: "sm",
                          onClick: clearSelection
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Effacer ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode(unref(_sfc_main$b), {
                        modelValue: searchQuery.value,
                        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                        placeholder: "Rechercher une catégorie..."
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(unref(_sfc_main$d), null, {
                        default: withCtx(() => [
                          isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "Chargement...")) : (openBlock(), createBlock("span", { key: 1 }, "Aucune catégorie trouvée."))
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$9), null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category) => {
                            return openBlock(), createBlock(unref(_sfc_main$c), {
                              key: category.id,
                              heading: category.name
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$a), {
                                  value: category.name,
                                  onSelect: (event) => onSelect(category, event)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Check), {
                                      class: [
                                        "mr-2 h-4 w-4",
                                        isSelected(category) ? "opacity-100" : "opacity-0"
                                      ]
                                    }, null, 8, ["class"]),
                                    createTextVNode(" " + toDisplayString(category.name) + " (toute la catégorie) ", 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "onSelect"]),
                                (openBlock(true), createBlock(Fragment, null, renderList(category.children, (child) => {
                                  return openBlock(), createBlock(unref(_sfc_main$a), {
                                    key: child.id,
                                    value: child.name,
                                    onSelect: (event) => onSelect(child, event),
                                    class: "pl-8"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Check), {
                                        class: [
                                          "mr-2 h-4 w-4",
                                          isSelected(child) ? "opacity-100" : "opacity-0"
                                        ]
                                      }, null, 8, ["class"]),
                                      createTextVNode(" " + toDisplayString(child.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "onSelect"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["heading"]);
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
      }, _parent));
      if (selectedCategories.value.length > 0) {
        _push(`<div class="mt-2 flex flex-wrap gap-1"><!--[-->`);
        ssrRenderList(selectedCategories.value, (category) => {
          _push(ssrRenderComponent(unref(_sfc_main$u), {
            key: `selected-${category.id}`,
            variant: "secondary"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(category.name)} <button type="button" class="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(X), { class: "h-3 w-3 text-muted-foreground hover:text-foreground" }, null, _parent2, _scopeId));
                _push2(`</button>`);
              } else {
                return [
                  createTextVNode(toDisplayString(category.name) + " ", 1),
                  createVNode("button", {
                    type: "button",
                    class: "ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    onClick: ($event) => toggleSelection(category)
                  }, [
                    createVNode(unref(X), { class: "h-3 w-3 text-muted-foreground hover:text-foreground" })
                  ], 8, ["onClick"])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/CategoryFilter.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "SearchSection",
  __ssrInlineRender: true,
  props: {
    filters: {
      type: Object,
      default: () => ({})
    },
    stats: {
      type: Object,
      required: true
    }
  },
  emits: ["searching"],
  setup(__props, { emit: __emit }) {
    const page = usePage();
    const user = page.props.auth.user;
    const props = __props;
    const emit = __emit;
    const isSearching = ref(false);
    const form = useForm({
      search: props.filters.search || "",
      radius: props.filters.radius || 50,
      categories: props.filters.categories || [],
      organizations: props.filters.organizations || [],
      coordinates: props.filters.coordinates || null,
      city: props.filters.city || null,
      postcode: props.filters.postcode || null
    });
    watch(
      [() => form.search, () => form.radius, () => form.categories, () => form.organizations],
      () => {
        handleSearch();
      },
      { deep: true }
    );
    const handleSearch = () => {
      isSearching.value = true;
      emit("searching", isSearching.value);
      form.get(route("home"), {
        only: ["filters", "equipments"],
        preserveScroll: true,
        preserveState: true,
        onFinish: () => {
          isSearching.value = false;
          emit("searching", isSearching.value);
        }
      });
    };
    const handleCity = (cityInfo) => {
      if (!cityInfo) {
        form.city = null;
        form.postcode = null;
        form.coordinates = null;
      } else {
        form.city = cityInfo.name;
        form.postcode = cityInfo.postcode;
        form.coordinates = {
          lat: cityInfo.lat,
          lng: cityInfo.lng
        };
        form.radius = form.radius || 5;
      }
      handleSearch();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: { "relative mt-8": unref(user) }
      }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="relative rounded-xl shadow-xl border border-gray-200/60">`);
      if (!unref(user)) {
        _push(`<div class="px-6 pt-6 pb-4"><h2 class="text-lg font-semibold text-gray-900 dark:text-white">Trouvez le matériel dont vous avez besoin</h2><p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Recherchez parmi des milliers d&#39;équipements disponibles près de chez vous.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="px-6 pb-6"><div class="flex flex-col md:flex-row gap-4 p-4"><div class="flex-1">`);
      _push(ssrRenderComponent(unref(_sfc_main$v), { class: "text-sm font-medium mb-2 text-gray-700 dark:text-white" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dans quel secteur ?`);
          } else {
            return [
              createTextVNode("Dans quel secteur ?")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$g, {
        modelValue: unref(form).city,
        "onUpdate:modelValue": ($event) => unref(form).city = $event,
        onSelected: handleCity,
        placeholder: "Entrez une ville ou un code postal"
      }, null, _parent));
      _push(`</div><div class="flex-1">`);
      _push(ssrRenderComponent(unref(_sfc_main$v), { class: "text-sm font-medium mb-2 text-gray-700 dark:text-white" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Que recherchez-vous ?`);
          } else {
            return [
              createTextVNode("Que recherchez-vous ?")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$h, {
        modelValue: unref(form).search,
        "onUpdate:modelValue": ($event) => unref(form).search = $event,
        placeholder: "Ex: Vidéoprojecteur, Enceinte, Table...",
        "onSearch:submit": handleSearch
      }, null, _parent));
      _push(`</div><div class="flex items-end">`);
      _push(ssrRenderComponent(unref(_sfc_main$k), {
        type: "submit",
        size: "lg",
        disabled: isSearching.value,
        class: "w-full md:w-auto min-w-[140px] bg-primary hover:bg-primary/90 shadow-sm dark:bg-primary dark:hover:bg-primary/90",
        onClick: handleSearch
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!isSearching.value) {
              _push2(ssrRenderComponent(unref(Search), { class: "h-5 w-5 mr-2" }, null, _parent2, _scopeId));
            } else {
              _push2(`<span class="h-5 w-5 mr-2"${_scopeId}><span class="animate-spin inline-block h-5 w-5 border-[3px] border-current border-t-transparent rounded-full"${_scopeId}></span></span>`);
            }
            _push2(` ${ssrInterpolate(isSearching.value ? "Recherche..." : "Rechercher")}`);
          } else {
            return [
              !isSearching.value ? (openBlock(), createBlock(unref(Search), {
                key: 0,
                class: "h-5 w-5 mr-2"
              })) : (openBlock(), createBlock("span", {
                key: 1,
                class: "h-5 w-5 mr-2"
              }, [
                createVNode("span", { class: "animate-spin inline-block h-5 w-5 border-[3px] border-current border-t-transparent rounded-full" })
              ])),
              createTextVNode(" " + toDisplayString(isSearching.value ? "Recherche..." : "Rechercher"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="px-6 pb-6"><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"><div class="space-y-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$v), {
        for: "radius",
        class: "flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Rayon de recherche `);
            _push2(ssrRenderComponent(unref(_sfc_main$w), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$x), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$y), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(HelpCircle), { class: "h-4 w-4 text-muted-foreground" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(HelpCircle), { class: "h-4 w-4 text-muted-foreground" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$z), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}>Distance maximale de recherche</p>`);
                            } else {
                              return [
                                createVNode("p", null, "Distance maximale de recherche")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$y), null, {
                            default: withCtx(() => [
                              createVNode(unref(HelpCircle), { class: "h-4 w-4 text-muted-foreground" })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$z), null, {
                            default: withCtx(() => [
                              createVNode("p", null, "Distance maximale de recherche")
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
                    createVNode(unref(_sfc_main$x), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$y), null, {
                          default: withCtx(() => [
                            createVNode(unref(HelpCircle), { class: "h-4 w-4 text-muted-foreground" })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$z), null, {
                          default: withCtx(() => [
                            createVNode("p", null, "Distance maximale de recherche")
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
              createTextVNode(" Rayon de recherche "),
              createVNode(unref(_sfc_main$w), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$x), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$y), null, {
                        default: withCtx(() => [
                          createVNode(unref(HelpCircle), { class: "h-4 w-4 text-muted-foreground" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$z), null, {
                        default: withCtx(() => [
                          createVNode("p", null, "Distance maximale de recherche")
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
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$A), {
        modelValue: unref(form).radius,
        "onUpdate:modelValue": [($event) => unref(form).radius = $event, handleSearch]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$B), {
              id: "radius",
              class: "w-full bg-white dark:bg-gray-800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$C), { placeholder: "Sélectionner un rayon" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$C), { placeholder: "Sélectionner un rayon" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$D), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$E), { value: "5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`5 km`);
                      } else {
                        return [
                          createTextVNode("5 km")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$E), { value: "10" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`10 km`);
                      } else {
                        return [
                          createTextVNode("10 km")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$E), { value: "25" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`25 km`);
                      } else {
                        return [
                          createTextVNode("25 km")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$E), { value: "50" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`50 km`);
                      } else {
                        return [
                          createTextVNode("50 km")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$E), { value: "100" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`100 km`);
                      } else {
                        return [
                          createTextVNode("100 km")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$E), { value: "5" }, {
                      default: withCtx(() => [
                        createTextVNode("5 km")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$E), { value: "10" }, {
                      default: withCtx(() => [
                        createTextVNode("10 km")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$E), { value: "25" }, {
                      default: withCtx(() => [
                        createTextVNode("25 km")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$E), { value: "50" }, {
                      default: withCtx(() => [
                        createTextVNode("50 km")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$E), { value: "100" }, {
                      default: withCtx(() => [
                        createTextVNode("100 km")
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
              createVNode(unref(_sfc_main$B), {
                id: "radius",
                class: "w-full bg-white dark:bg-gray-800"
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$C), { placeholder: "Sélectionner un rayon" })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$D), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$E), { value: "5" }, {
                    default: withCtx(() => [
                      createTextVNode("5 km")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$E), { value: "10" }, {
                    default: withCtx(() => [
                      createTextVNode("10 km")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$E), { value: "25" }, {
                    default: withCtx(() => [
                      createTextVNode("25 km")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$E), { value: "50" }, {
                    default: withCtx(() => [
                      createTextVNode("50 km")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$E), { value: "100" }, {
                    default: withCtx(() => [
                      createTextVNode("100 km")
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
      }, _parent));
      _push(`</div><div class="space-y-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$v), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Catégories`);
          } else {
            return [
              createTextVNode("Catégories")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        modelValue: unref(form).categories,
        "onUpdate:modelValue": [($event) => unref(form).categories = $event, handleSearch]
      }, null, _parent));
      _push(`</div><div class="space-y-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$v), { class: "flex items-center gap-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Filtrer par organisation `);
          } else {
            return [
              createTextVNode(" Filtrer par organisation ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: unref(form).organizations,
        "onUpdate:modelValue": [($event) => unref(form).organizations = $event, handleSearch]
      }, null, _parent));
      _push(`</div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Home/SearchSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "EquipmentCard",
  __ssrInlineRender: true,
  props: {
    equipment: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const imageLoaded = ref(false);
    const hasImage = computed(() => props.equipment.images && props.equipment.images.length > 0);
    const onImageLoad = () => {
      imageLoaded.value = true;
    };
    const formatPrice = (price) => {
      if (price === null || price === void 0)
        return "";
      return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR"
      }).format(price);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: _ctx.route("equipments.show", __props.equipment),
        class: "group relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm transition-all duration-200 hover:shadow-lg"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{ "shimmer": hasImage.value && !imageLoaded.value }, "relative block aspect-[4/3] overflow-hidden"])}"${_scopeId}>`);
            if (hasImage.value) {
              _push2(`<img${ssrRenderAttr("src", (_a = __props.equipment.images[0]) == null ? void 0 : _a.url)}${ssrRenderAttr("alt", __props.equipment.name)} loading="lazy" class="${ssrRenderClass([{ "opacity-0": !imageLoaded.value }, "h-full w-full object-cover transition-all duration-300 group-hover:scale-105"])}"${_scopeId}>`);
            } else {
              _push2(`<div class="flex h-full w-full items-center justify-center bg-accent/10 text-muted-foreground/30"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Image), { class: "h-12 w-12" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div><div class="flex flex-grow flex-col p-4"${_scopeId}><div class="flex-grow"${_scopeId}><h3 class="line-clamp-1 font-semibold text-foreground transition-colors duration-200 group-hover:text-primary"${_scopeId}>${ssrInterpolate(__props.equipment.name)}</h3><div class="text-sm"${_scopeId}><span class="font-semibold text-foreground"${_scopeId}>${ssrInterpolate(formatPrice(__props.equipment.rental_price))}</span><span class="text-sm text-muted-foreground"${_scopeId}> / jour</span></div><div class="mt-2 space-y-2 text-xs text-muted-foreground"${_scopeId}><span class="truncate"${_scopeId}>${ssrInterpolate(((_b = __props.equipment.organization) == null ? void 0 : _b.name) || "Particulier")} - ${ssrInterpolate(((_c = __props.equipment.depot) == null ? void 0 : _c.city) || "Non localisé")}</span></div><div class="mt-2 flex items-center text-xs text-muted-foreground"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Tag), { class: "mr-2 h-4 w-4" }, null, _parent2, _scopeId));
            _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(((_d = __props.equipment.category) == null ? void 0 : _d.name) || "Sans catégorie")}</span></div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: ["relative block aspect-[4/3] overflow-hidden", { "shimmer": hasImage.value && !imageLoaded.value }]
              }, [
                hasImage.value ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: (_e = __props.equipment.images[0]) == null ? void 0 : _e.url,
                  alt: __props.equipment.name,
                  loading: "lazy",
                  class: ["h-full w-full object-cover transition-all duration-300 group-hover:scale-105", { "opacity-0": !imageLoaded.value }],
                  onLoad: onImageLoad
                }, null, 42, ["src", "alt"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "flex h-full w-full items-center justify-center bg-accent/10 text-muted-foreground/30"
                }, [
                  createVNode(unref(Image), { class: "h-12 w-12" })
                ]))
              ], 2),
              createVNode("div", { class: "flex flex-grow flex-col p-4" }, [
                createVNode("div", { class: "flex-grow" }, [
                  createVNode("h3", { class: "line-clamp-1 font-semibold text-foreground transition-colors duration-200 group-hover:text-primary" }, toDisplayString(__props.equipment.name), 1),
                  createVNode("div", { class: "text-sm" }, [
                    createVNode("span", { class: "font-semibold text-foreground" }, toDisplayString(formatPrice(__props.equipment.rental_price)), 1),
                    createVNode("span", { class: "text-sm text-muted-foreground" }, " / jour")
                  ]),
                  createVNode("div", { class: "mt-2 space-y-2 text-xs text-muted-foreground" }, [
                    createVNode("span", { class: "truncate" }, toDisplayString(((_f = __props.equipment.organization) == null ? void 0 : _f.name) || "Particulier") + " - " + toDisplayString(((_g = __props.equipment.depot) == null ? void 0 : _g.city) || "Non localisé"), 1)
                  ]),
                  createVNode("div", { class: "mt-2 flex items-center text-xs text-muted-foreground" }, [
                    createVNode(unref(Tag), { class: "mr-2 h-4 w-4" }),
                    createVNode("span", { class: "truncate" }, toDisplayString(((_h = __props.equipment.category) == null ? void 0 : _h.name) || "Sans catégorie"), 1)
                  ])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Home/EquipmentCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "ResultsSection",
  __ssrInlineRender: true,
  props: {
    equipments: {
      type: Object,
      required: true
    },
    equipments_pagination: {
      type: Object,
      required: true
    },
    filters: {
      type: Object,
      default: () => ({})
    },
    startDate: {
      type: String,
      default: ""
    },
    endDate: {
      type: String,
      default: ""
    },
    isSearching: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const hasResults = computed(() => props.equipments.length > 0);
    const hasFilters = computed(() => {
      return props.filters.search || props.filters.categories && props.filters.categories.length > 0 || props.filters.organizations && props.filters.organizations.length > 0 || props.filters.radius || props.filters.city || props.filters.postcode;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, _attrs))}>`);
      if (__props.isSearching) {
        _push(`<div class="min-h-[400px] flex flex-col items-center justify-center"><div class="w-16 h-16 mb-4"><div class="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div></div><h3 class="text-lg font-medium text-foreground">Recherche en cours...</h3><p class="mt-2 text-sm text-muted-foreground"> Nous recherchons les meilleurs équipements pour vous </p></div>`);
      } else if (!hasResults.value) {
        _push(`<div class="min-h-[400px] flex flex-col items-center justify-center text-center"><div class="w-24 h-24 text-muted-foreground mb-6">`);
        if (hasFilters.value) {
          _push(ssrRenderComponent(unref(SearchX), { class: "w-full h-full" }, null, _parent));
        } else {
          _push(ssrRenderComponent(unref(PackageSearch), { class: "w-full h-full" }, null, _parent));
        }
        _push(`</div><h3 class="text-xl font-medium text-foreground">${ssrInterpolate(hasFilters.value ? "Aucun équipement trouvé" : "Commencez votre recherche")}</h3><p class="mt-2 text-base text-muted-foreground max-w-md">${ssrInterpolate(hasFilters.value ? "Essayez de modifier vos critères de recherche pour trouver plus de résultats." : "Utilisez la barre de recherche ci-dessus pour trouver l'équipement dont vous avez besoin.")}</p></div>`);
      } else {
        _push(`<div><div class="mb-6 flex items-center justify-between"><h2 class="text-lg font-medium text-foreground">${ssrInterpolate(__props.equipments_pagination.total)} équipement${ssrInterpolate(__props.equipments_pagination.total > 1 ? "s" : "")} trouvé${ssrInterpolate(__props.equipments_pagination.total > 1 ? "s" : "")}</h2><p class="text-sm text-muted-foreground">${ssrInterpolate(__props.equipments.length)} affiché${ssrInterpolate(__props.equipments.length > 1 ? "s" : "")} sur ${ssrInterpolate(__props.equipments_pagination.total)}</p></div><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"><!--[-->`);
        ssrRenderList(__props.equipments, (item, index) => {
          _push(ssrRenderComponent(_sfc_main$3, {
            key: `${item.id}-${item.updated_at}`,
            equipment: item,
            "start-date": __props.startDate,
            "end-date": __props.endDate,
            class: "transition-all duration-300 ease-in-out animate-fade-in",
            style: { animationDelay: `${index * 50}ms` }
          }, null, _parent));
        });
        _push(`<!--]--></div><div class="mt-12 flex justify-center">`);
        if (__props.equipments_pagination.last_page > __props.equipments_pagination.current_page) {
          _push(ssrRenderComponent(unref(WhenVisible), {
            always: "",
            params: {
              data: {
                page: __props.equipments_pagination.current_page + 1
              },
              only: ["equipments", "equipments_pagination"]
            }
          }, {
            fallback: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center space-x-2"${_scopeId}><div class="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"${_scopeId}></div><span class="text-sm text-muted-foreground"${_scopeId}>Chargement...</span></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center space-x-2" }, [
                    createVNode("div", { class: "w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" }),
                    createVNode("span", { class: "text-sm text-muted-foreground" }, "Chargement...")
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Home/ResultsSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const scrollThreshold = 300;
const _sfc_main$1 = {
  __name: "BackToTop",
  __ssrInlineRender: true,
  setup(__props) {
    const showBackToTop = ref(false);
    const handleScroll = () => {
      showBackToTop.value = window.scrollY > scrollThreshold;
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 hover:scale-110",
        "aria-label": "Retour en haut"
      }, _attrs, {
        style: showBackToTop.value ? null : { display: "none" }
      }))}>`);
      _push(ssrRenderComponent(unref(ArrowUp), { class: "h-5 w-5" }, null, _parent));
      _push(`</button>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/BackToTop.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    equipments: {
      type: Object,
      required: true
    },
    equipments_pagination: {
      type: Object,
      required: true
    },
    filters: {
      type: Object,
      default: () => ({})
    },
    stats: {
      type: Object,
      default: () => ({
        min_price: 0,
        max_price: 1e3,
        categories: []
      })
    }
  },
  setup(__props) {
    const isSearching = ref(false);
    const page = usePage();
    const appName = page.props.name;
    const user = page.props.auth.user;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$F, mergeProps({
        title: "Location et prêt de matériel événementiel",
        description: `${unref(appName)} facilite la location de matériel entre associations. Trouvez et réservez en quelques clics le matériel dont vous avez besoin pour vos événements.`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(user)) {
              _push2(`<section class="relative"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$i, null, null, _parent2, _scopeId));
              _push2(`</section>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<section${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              filters: __props.filters,
              stats: __props.stats,
              onSearching: ($event) => isSearching.value = $event
            }, null, _parent2, _scopeId));
            _push2(`</section><section class="${ssrRenderClass([{ "mt-8": __props.equipments.length > 0 }, "relative py-12 bg-gradient-to-b from-background via-background/50 to-background"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              equipments: __props.equipments,
              equipments_pagination: __props.equipments_pagination,
              filters: __props.filters,
              "start-date": __props.filters.start_date,
              "end-date": __props.filters.end_date,
              isSearching: isSearching.value
            }, null, _parent2, _scopeId));
            _push2(`</section>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
          } else {
            return [
              !unref(user) ? (openBlock(), createBlock("section", {
                key: 0,
                class: "relative"
              }, [
                createVNode(_sfc_main$i)
              ])) : createCommentVNode("", true),
              createVNode("section", null, [
                createVNode(_sfc_main$4, {
                  filters: __props.filters,
                  stats: __props.stats,
                  onSearching: ($event) => isSearching.value = $event
                }, null, 8, ["filters", "stats", "onSearching"])
              ]),
              createVNode("section", {
                class: ["relative py-12 bg-gradient-to-b from-background via-background/50 to-background", { "mt-8": __props.equipments.length > 0 }]
              }, [
                createVNode(_sfc_main$2, {
                  equipments: __props.equipments,
                  equipments_pagination: __props.equipments_pagination,
                  filters: __props.filters,
                  "start-date": __props.filters.start_date,
                  "end-date": __props.filters.end_date,
                  isSearching: isSearching.value
                }, null, 8, ["equipments", "equipments_pagination", "filters", "start-date", "end-date", "isSearching"])
              ], 2),
              createVNode(_sfc_main$1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Public/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
