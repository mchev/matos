import { mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    organizations: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Organisations" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center"${_scopeId}><h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Organisations </h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("organizations.create"),
              class: "inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 focus:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Nouvelle organisation `);
                } else {
                  return [
                    createTextVNode(" Nouvelle organisation ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center" }, [
                createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Organisations "),
                createVNode(unref(Link), {
                  href: _ctx.route("organizations.create"),
                  class: "inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 focus:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Nouvelle organisation ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}><div class="p-6"${_scopeId}>`);
            if (__props.organizations.length === 0) {
              _push2(`<div class="text-center py-12"${_scopeId}><h3 class="mt-2 text-sm font-semibold text-gray-900"${_scopeId}>Aucune organisation</h3><p class="mt-1 text-sm text-gray-500"${_scopeId}>Commencez par créer une nouvelle organisation.</p><div class="mt-6"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("organizations.create"),
                class: "inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(PlusIcon), {
                      class: "-ml-0.5 mr-1.5 h-5 w-5",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                    _push3(` Nouvelle organisation `);
                  } else {
                    return [
                      createVNode(unref(PlusIcon), {
                        class: "-ml-0.5 mr-1.5 h-5 w-5",
                        "aria-hidden": "true"
                      }),
                      createTextVNode(" Nouvelle organisation ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
              ssrRenderList(__props.organizations, (organization) => {
                _push2(`<div class="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"${_scopeId}><div class="flex flex-1 flex-col p-6"${_scopeId}><div class="flex items-center"${_scopeId}><div class="h-12 w-12 flex-shrink-0"${_scopeId}><img${ssrRenderAttr("src", organization.logo_path || "/images/default-organization.png")}${ssrRenderAttr("alt", organization.name)} class="h-12 w-12 rounded-full object-cover"${_scopeId}></div><div class="ml-4"${_scopeId}><h3 class="text-sm font-medium text-gray-900"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("organizations.show", organization),
                  class: "hover:underline"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(organization.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(organization.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</h3><p class="text-sm text-gray-500"${_scopeId}>${ssrInterpolate(organization.city)}</p></div></div><div class="mt-4 flex-1"${_scopeId}><p class="text-sm text-gray-500 line-clamp-3"${_scopeId}>${ssrInterpolate(organization.description)}</p></div><div class="mt-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="flex items-center space-x-2"${_scopeId}><span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"${_scopeId}>${ssrInterpolate(organization.equipment_count)} équipements </span><span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20"${_scopeId}>${ssrInterpolate(organization.users_count)} membres </span></div>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("organizations.show", organization),
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
              _push2(`<!--]--></div>`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-xl sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6" }, [
                      __props.organizations.length === 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-center py-12"
                      }, [
                        createVNode("h3", { class: "mt-2 text-sm font-semibold text-gray-900" }, "Aucune organisation"),
                        createVNode("p", { class: "mt-1 text-sm text-gray-500" }, "Commencez par créer une nouvelle organisation."),
                        createVNode("div", { class: "mt-6" }, [
                          createVNode(unref(Link), {
                            href: _ctx.route("organizations.create"),
                            class: "inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(PlusIcon), {
                                class: "-ml-0.5 mr-1.5 h-5 w-5",
                                "aria-hidden": "true"
                              }),
                              createTextVNode(" Nouvelle organisation ")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.organizations, (organization) => {
                          return openBlock(), createBlock("div", {
                            key: organization.id,
                            class: "relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                          }, [
                            createVNode("div", { class: "flex flex-1 flex-col p-6" }, [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode("div", { class: "h-12 w-12 flex-shrink-0" }, [
                                  createVNode("img", {
                                    src: organization.logo_path || "/images/default-organization.png",
                                    alt: organization.name,
                                    class: "h-12 w-12 rounded-full object-cover"
                                  }, null, 8, ["src", "alt"])
                                ]),
                                createVNode("div", { class: "ml-4" }, [
                                  createVNode("h3", { class: "text-sm font-medium text-gray-900" }, [
                                    createVNode(unref(Link), {
                                      href: _ctx.route("organizations.show", organization),
                                      class: "hover:underline"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(organization.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["href"])
                                  ]),
                                  createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(organization.city), 1)
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 flex-1" }, [
                                createVNode("p", { class: "text-sm text-gray-500 line-clamp-3" }, toDisplayString(organization.description), 1)
                              ]),
                              createVNode("div", { class: "mt-6" }, [
                                createVNode("div", { class: "flex items-center justify-between" }, [
                                  createVNode("div", { class: "flex items-center space-x-2" }, [
                                    createVNode("span", { class: "inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20" }, toDisplayString(organization.equipment_count) + " équipements ", 1),
                                    createVNode("span", { class: "inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20" }, toDisplayString(organization.users_count) + " membres ", 1)
                                  ]),
                                  createVNode(unref(Link), {
                                    href: _ctx.route("organizations.show", organization),
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
                      ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
