import { mergeProps, withCtx, unref, createTextVNode, createVNode, withModifiers, createBlock, createCommentVNode, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useForm, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AppLayout-B3jJCr1A.js";
import { _ as _sfc_main$2 } from "./Label-DLRZNtyA.js";
import { _ as _sfc_main$3 } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$4 } from "./Textarea-DxMXW1ER.js";
import { _ as _sfc_main$5 } from "./index-53Kg4F4g.js";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "reka-ui";
import "@vueuse/core";
import "lucide-vue-next";
import "@heroicons/vue/24/outline";
import "./index-9VOASAGY.js";
import "class-variance-authority";
import "vue-sonner";
import "clsx";
import "tailwind-merge";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      description: "",
      address: "",
      city: "",
      postal_code: "",
      phone: "",
      email: "",
      website: ""
    });
    const submit = () => {
      form.post(route("organizations.store"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Nouvelle organisation" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Nouvelle organisation </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Nouvelle organisation ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}><form class="p-6"${_scopeId}><div class="grid grid-cols-1 gap-6 sm:grid-cols-2"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { for: "name" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Nom`);
                } else {
                  return [
                    createTextVNode("Nom")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              id: "name",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              type: "text",
              class: "mt-1 block w-full",
              required: "",
              autofocus: ""
            }, null, _parent2, _scopeId));
            if (unref(form).errors.name) {
              _push2(`<p class="mt-2 text-sm text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="sm:col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { for: "description" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Description`);
                } else {
                  return [
                    createTextVNode("Description")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              id: "description",
              modelValue: unref(form).description,
              "onUpdate:modelValue": ($event) => unref(form).description = $event,
              class: "mt-1 block w-full",
              rows: "3"
            }, null, _parent2, _scopeId));
            if (unref(form).errors.description) {
              _push2(`<p class="mt-2 text-sm text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="sm:col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { for: "address" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Adresse`);
                } else {
                  return [
                    createTextVNode("Adresse")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              id: "address",
              modelValue: unref(form).address,
              "onUpdate:modelValue": ($event) => unref(form).address = $event,
              type: "text",
              class: "mt-1 block w-full"
            }, null, _parent2, _scopeId));
            if (unref(form).errors.address) {
              _push2(`<p class="mt-2 text-sm text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.address)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { for: "city" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Ville`);
                } else {
                  return [
                    createTextVNode("Ville")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              id: "city",
              modelValue: unref(form).city,
              "onUpdate:modelValue": ($event) => unref(form).city = $event,
              type: "text",
              class: "mt-1 block w-full"
            }, null, _parent2, _scopeId));
            if (unref(form).errors.city) {
              _push2(`<p class="mt-2 text-sm text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.city)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { for: "postal_code" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Code postal`);
                } else {
                  return [
                    createTextVNode("Code postal")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              id: "postal_code",
              modelValue: unref(form).postal_code,
              "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
              type: "text",
              class: "mt-1 block w-full"
            }, null, _parent2, _scopeId));
            if (unref(form).errors.postal_code) {
              _push2(`<p class="mt-2 text-sm text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.postal_code)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { for: "phone" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Téléphone`);
                } else {
                  return [
                    createTextVNode("Téléphone")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              id: "phone",
              modelValue: unref(form).phone,
              "onUpdate:modelValue": ($event) => unref(form).phone = $event,
              type: "tel",
              class: "mt-1 block w-full"
            }, null, _parent2, _scopeId));
            if (unref(form).errors.phone) {
              _push2(`<p class="mt-2 text-sm text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.phone)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { for: "email" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Email`);
                } else {
                  return [
                    createTextVNode("Email")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full"
            }, null, _parent2, _scopeId));
            if (unref(form).errors.email) {
              _push2(`<p class="mt-2 text-sm text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.email)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="sm:col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { for: "website" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Site web`);
                } else {
                  return [
                    createTextVNode("Site web")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              id: "website",
              modelValue: unref(form).website,
              "onUpdate:modelValue": ($event) => unref(form).website = $event,
              type: "url",
              class: "mt-1 block w-full"
            }, null, _parent2, _scopeId));
            if (unref(form).errors.website) {
              _push2(`<p class="mt-2 text-sm text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.website)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="mt-6 flex items-center justify-end gap-x-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("app.dashboard"),
              class: "text-sm font-semibold leading-6 text-gray-900"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Annuler `);
                } else {
                  return [
                    createTextVNode(" Annuler ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$5), {
              type: "submit",
              disabled: unref(form).processing,
              class: { "opacity-25": unref(form).processing }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Créer l&#39;organisation `);
                } else {
                  return [
                    createTextVNode(" Créer l'organisation ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-xl sm:rounded-lg" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      class: "p-6"
                    }, [
                      createVNode("div", { class: "grid grid-cols-1 gap-6 sm:grid-cols-2" }, [
                        createVNode("div", null, [
                          createVNode(unref(_sfc_main$2), { for: "name" }, {
                            default: withCtx(() => [
                              createTextVNode("Nom")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), {
                            id: "name",
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            type: "text",
                            class: "mt-1 block w-full",
                            required: "",
                            autofocus: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(form).errors.name ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-2 text-sm text-red-600"
                          }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "sm:col-span-2" }, [
                          createVNode(unref(_sfc_main$2), { for: "description" }, {
                            default: withCtx(() => [
                              createTextVNode("Description")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$4), {
                            id: "description",
                            modelValue: unref(form).description,
                            "onUpdate:modelValue": ($event) => unref(form).description = $event,
                            class: "mt-1 block w-full",
                            rows: "3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(form).errors.description ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-2 text-sm text-red-600"
                          }, toDisplayString(unref(form).errors.description), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "sm:col-span-2" }, [
                          createVNode(unref(_sfc_main$2), { for: "address" }, {
                            default: withCtx(() => [
                              createTextVNode("Adresse")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), {
                            id: "address",
                            modelValue: unref(form).address,
                            "onUpdate:modelValue": ($event) => unref(form).address = $event,
                            type: "text",
                            class: "mt-1 block w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(form).errors.address ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-2 text-sm text-red-600"
                          }, toDisplayString(unref(form).errors.address), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode(unref(_sfc_main$2), { for: "city" }, {
                            default: withCtx(() => [
                              createTextVNode("Ville")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), {
                            id: "city",
                            modelValue: unref(form).city,
                            "onUpdate:modelValue": ($event) => unref(form).city = $event,
                            type: "text",
                            class: "mt-1 block w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(form).errors.city ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-2 text-sm text-red-600"
                          }, toDisplayString(unref(form).errors.city), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode(unref(_sfc_main$2), { for: "postal_code" }, {
                            default: withCtx(() => [
                              createTextVNode("Code postal")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), {
                            id: "postal_code",
                            modelValue: unref(form).postal_code,
                            "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
                            type: "text",
                            class: "mt-1 block w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(form).errors.postal_code ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-2 text-sm text-red-600"
                          }, toDisplayString(unref(form).errors.postal_code), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode(unref(_sfc_main$2), { for: "phone" }, {
                            default: withCtx(() => [
                              createTextVNode("Téléphone")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), {
                            id: "phone",
                            modelValue: unref(form).phone,
                            "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                            type: "tel",
                            class: "mt-1 block w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(form).errors.phone ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-2 text-sm text-red-600"
                          }, toDisplayString(unref(form).errors.phone), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode(unref(_sfc_main$2), { for: "email" }, {
                            default: withCtx(() => [
                              createTextVNode("Email")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), {
                            id: "email",
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            type: "email",
                            class: "mt-1 block w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(form).errors.email ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-2 text-sm text-red-600"
                          }, toDisplayString(unref(form).errors.email), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "sm:col-span-2" }, [
                          createVNode(unref(_sfc_main$2), { for: "website" }, {
                            default: withCtx(() => [
                              createTextVNode("Site web")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), {
                            id: "website",
                            modelValue: unref(form).website,
                            "onUpdate:modelValue": ($event) => unref(form).website = $event,
                            type: "url",
                            class: "mt-1 block w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(form).errors.website ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-2 text-sm text-red-600"
                          }, toDisplayString(unref(form).errors.website), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "mt-6 flex items-center justify-end gap-x-6" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("app.dashboard"),
                          class: "text-sm font-semibold leading-6 text-gray-900"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Annuler ")
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode(unref(_sfc_main$5), {
                          type: "submit",
                          disabled: unref(form).processing,
                          class: { "opacity-25": unref(form).processing }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Créer l'organisation ")
                          ]),
                          _: 1
                        }, 8, ["disabled", "class"])
                      ])
                    ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
