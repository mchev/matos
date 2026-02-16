import { mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AppLayout-B3jJCr1A.js";
import { PlusIcon } from "@heroicons/vue/24/outline";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "reka-ui";
import "./index-53Kg4F4g.js";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
import "lucide-vue-next";
import "./index-9VOASAGY.js";
import "vue-sonner";
import "./Input-BNuRmWJk.js";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    organization: {
      type: Object,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: __props.organization.name
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center"${_scopeId}><h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>${ssrInterpolate(__props.organization.name)}</h2><div class="flex items-center space-x-4"${_scopeId}>`);
            if (__props.isAdmin) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("organizations.edit", __props.organization),
                class: "inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Modifier `);
                  } else {
                    return [
                      createTextVNode(" Modifier ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("organizations.equipment.create", __props.organization),
              class: "inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 focus:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Ajouter du matériel `);
                } else {
                  return [
                    createTextVNode(" Ajouter du matériel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center" }, [
                createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, toDisplayString(__props.organization.name), 1),
                createVNode("div", { class: "flex items-center space-x-4" }, [
                  __props.isAdmin ? (openBlock(), createBlock(unref(Link), {
                    key: 0,
                    href: _ctx.route("organizations.edit", __props.organization),
                    class: "inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Modifier ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  createVNode(unref(Link), {
                    href: _ctx.route("organizations.equipment.create", __props.organization),
                    class: "inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 focus:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Ajouter du matériel ")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}><div class="p-6"${_scopeId}><div class="grid grid-cols-1 gap-6 sm:grid-cols-2"${_scopeId}><div${_scopeId}><h3 class="text-lg font-medium text-gray-900"${_scopeId}>Informations</h3><dl class="mt-4 space-y-4"${_scopeId}><div${_scopeId}><dt class="text-sm font-medium text-gray-500"${_scopeId}>Description</dt><dd class="mt-1 text-sm text-gray-900"${_scopeId}>${ssrInterpolate(__props.organization.description || "Non renseignée")}</dd></div><div${_scopeId}><dt class="text-sm font-medium text-gray-500"${_scopeId}>Adresse</dt><dd class="mt-1 text-sm text-gray-900"${_scopeId}>${ssrInterpolate(__props.organization.address)}<br${_scopeId}> ${ssrInterpolate(__props.organization.postal_code)} ${ssrInterpolate(__props.organization.city)}</dd></div><div${_scopeId}><dt class="text-sm font-medium text-gray-500"${_scopeId}>Contact</dt><dd class="mt-1 text-sm text-gray-900"${_scopeId}>`);
            if (__props.organization.phone) {
              _push2(`<div${_scopeId}>Tél: ${ssrInterpolate(__props.organization.phone)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.organization.email) {
              _push2(`<div${_scopeId}>Email: ${ssrInterpolate(__props.organization.email)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.organization.website) {
              _push2(`<div${_scopeId}> Site web: <a${ssrRenderAttr("href", __props.organization.website)} target="_blank" class="text-indigo-600 hover:text-indigo-500"${_scopeId}>${ssrInterpolate(__props.organization.website)}</a></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</dd></div></dl></div><div${_scopeId}><h3 class="text-lg font-medium text-gray-900"${_scopeId}>Statistiques</h3><dl class="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2"${_scopeId}><div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"${_scopeId}><dt class="truncate text-sm font-medium text-gray-500"${_scopeId}>Équipements</dt><dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900"${_scopeId}>${ssrInterpolate(__props.organization.equipment_count)}</dd></div><div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"${_scopeId}><dt class="truncate text-sm font-medium text-gray-500"${_scopeId}>Membres</dt><dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900"${_scopeId}>${ssrInterpolate(__props.organization.users_count)}</dd></div></dl></div></div><div class="mt-8"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><h3 class="text-lg font-medium text-gray-900"${_scopeId}>Matériel</h3>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("organizations.equipment.create", __props.organization),
              class: "inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(PlusIcon), {
                    class: "-ml-0.5 mr-1.5 h-5 w-5",
                    "aria-hidden": "true"
                  }, null, _parent3, _scopeId2));
                  _push3(` Ajouter du matériel `);
                } else {
                  return [
                    createVNode(unref(PlusIcon), {
                      class: "-ml-0.5 mr-1.5 h-5 w-5",
                      "aria-hidden": "true"
                    }),
                    createTextVNode(" Ajouter du matériel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList(__props.organization.equipment, (equipment) => {
              var _a;
              _push2(`<div class="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"${_scopeId}><div class="flex flex-1 flex-col p-6"${_scopeId}><div class="flex items-center"${_scopeId}><div class="h-12 w-12 flex-shrink-0"${_scopeId}><img${ssrRenderAttr("src", ((_a = equipment.images) == null ? void 0 : _a[0]) || "/images/default-equipment.png")}${ssrRenderAttr("alt", equipment.name)} class="h-12 w-12 rounded-lg object-cover"${_scopeId}></div><div class="ml-4"${_scopeId}><h4 class="text-sm font-medium text-gray-900"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("organizations.equipment.show", [__props.organization, equipment]),
                class: "hover:underline"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(equipment.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(equipment.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</h4><p class="text-sm text-gray-500"${_scopeId}>${ssrInterpolate(equipment.category)}</p></div></div><div class="mt-4 flex-1"${_scopeId}><p class="text-sm text-gray-500 line-clamp-2"${_scopeId}>${ssrInterpolate(equipment.description)}</p></div><div class="mt-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="${ssrRenderClass([{
                "bg-green-50 text-green-700 ring-green-600/20": equipment.is_available,
                "bg-red-50 text-red-700 ring-red-600/20": !equipment.is_available
              }, "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset"])}"${_scopeId}>${ssrInterpolate(equipment.is_available ? "Disponible" : "Indisponible")}</span>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("organizations.equipment.show", [__props.organization, equipment]),
                class: "text-sm font-medium text-indigo-600 hover:text-indigo-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Voir les détails <span aria-hidden="true"${_scopeId2}> →</span>`);
                  } else {
                    return [
                      createTextVNode(" Voir les détails "),
                      createVNode("span", { "aria-hidden": "true" }, " →")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div></div></div>`);
            });
            _push2(`<!--]--></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-xl sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6" }, [
                      createVNode("div", { class: "grid grid-cols-1 gap-6 sm:grid-cols-2" }, [
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Informations"),
                          createVNode("dl", { class: "mt-4 space-y-4" }, [
                            createVNode("div", null, [
                              createVNode("dt", { class: "text-sm font-medium text-gray-500" }, "Description"),
                              createVNode("dd", { class: "mt-1 text-sm text-gray-900" }, toDisplayString(__props.organization.description || "Non renseignée"), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("dt", { class: "text-sm font-medium text-gray-500" }, "Adresse"),
                              createVNode("dd", { class: "mt-1 text-sm text-gray-900" }, [
                                createTextVNode(toDisplayString(__props.organization.address), 1),
                                createVNode("br"),
                                createTextVNode(" " + toDisplayString(__props.organization.postal_code) + " " + toDisplayString(__props.organization.city), 1)
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("dt", { class: "text-sm font-medium text-gray-500" }, "Contact"),
                              createVNode("dd", { class: "mt-1 text-sm text-gray-900" }, [
                                __props.organization.phone ? (openBlock(), createBlock("div", { key: 0 }, "Tél: " + toDisplayString(__props.organization.phone), 1)) : createCommentVNode("", true),
                                __props.organization.email ? (openBlock(), createBlock("div", { key: 1 }, "Email: " + toDisplayString(__props.organization.email), 1)) : createCommentVNode("", true),
                                __props.organization.website ? (openBlock(), createBlock("div", { key: 2 }, [
                                  createTextVNode(" Site web: "),
                                  createVNode("a", {
                                    href: __props.organization.website,
                                    target: "_blank",
                                    class: "text-indigo-600 hover:text-indigo-500"
                                  }, toDisplayString(__props.organization.website), 9, ["href"])
                                ])) : createCommentVNode("", true)
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Statistiques"),
                          createVNode("dl", { class: "mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2" }, [
                            createVNode("div", { class: "overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6" }, [
                              createVNode("dt", { class: "truncate text-sm font-medium text-gray-500" }, "Équipements"),
                              createVNode("dd", { class: "mt-1 text-3xl font-semibold tracking-tight text-gray-900" }, toDisplayString(__props.organization.equipment_count), 1)
                            ]),
                            createVNode("div", { class: "overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6" }, [
                              createVNode("dt", { class: "truncate text-sm font-medium text-gray-500" }, "Membres"),
                              createVNode("dd", { class: "mt-1 text-3xl font-semibold tracking-tight text-gray-900" }, toDisplayString(__props.organization.users_count), 1)
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mt-8" }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Matériel"),
                          createVNode(unref(Link), {
                            href: _ctx.route("organizations.equipment.create", __props.organization),
                            class: "inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(PlusIcon), {
                                class: "-ml-0.5 mr-1.5 h-5 w-5",
                                "aria-hidden": "true"
                              }),
                              createTextVNode(" Ajouter du matériel ")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        createVNode("div", { class: "mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.organization.equipment, (equipment) => {
                            var _a;
                            return openBlock(), createBlock("div", {
                              key: equipment.id,
                              class: "relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                            }, [
                              createVNode("div", { class: "flex flex-1 flex-col p-6" }, [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode("div", { class: "h-12 w-12 flex-shrink-0" }, [
                                    createVNode("img", {
                                      src: ((_a = equipment.images) == null ? void 0 : _a[0]) || "/images/default-equipment.png",
                                      alt: equipment.name,
                                      class: "h-12 w-12 rounded-lg object-cover"
                                    }, null, 8, ["src", "alt"])
                                  ]),
                                  createVNode("div", { class: "ml-4" }, [
                                    createVNode("h4", { class: "text-sm font-medium text-gray-900" }, [
                                      createVNode(unref(Link), {
                                        href: _ctx.route("organizations.equipment.show", [__props.organization, equipment]),
                                        class: "hover:underline"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(equipment.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["href"])
                                    ]),
                                    createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(equipment.category), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 flex-1" }, [
                                  createVNode("p", { class: "text-sm text-gray-500 line-clamp-2" }, toDisplayString(equipment.description), 1)
                                ]),
                                createVNode("div", { class: "mt-6" }, [
                                  createVNode("div", { class: "flex items-center justify-between" }, [
                                    createVNode("span", {
                                      class: [{
                                        "bg-green-50 text-green-700 ring-green-600/20": equipment.is_available,
                                        "bg-red-50 text-red-700 ring-red-600/20": !equipment.is_available
                                      }, "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset"]
                                    }, toDisplayString(equipment.is_available ? "Disponible" : "Indisponible"), 3),
                                    createVNode(unref(Link), {
                                      href: _ctx.route("organizations.equipment.show", [__props.organization, equipment]),
                                      class: "text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Voir les détails "),
                                        createVNode("span", { "aria-hidden": "true" }, " →")
                                      ]),
                                      _: 1
                                    }, 8, ["href"])
                                  ])
                                ])
                              ])
                            ]);
                          }), 128))
                        ])
                      ])
                    ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
