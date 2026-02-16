import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, toDisplayString, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$6 } from "./InputError-BhTWS2NZ.js";
import { _ as _sfc_main$7 } from "./TextLink-DTyK6a-s.js";
import { _ as _sfc_main$2 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$8 } from "./Checkbox-DGgTWiqd.js";
import { _ as _sfc_main$5 } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$4 } from "./Label-DLRZNtyA.js";
import { _ as _sfc_main$3 } from "./Separator-C0fcDgz2.js";
import { _ as _sfc_main$1 } from "./AppLayout-B3jJCr1A.js";
import { useForm, Head } from "@inertiajs/vue3";
import { LoaderCircle } from "lucide-vue-next";
import "class-variance-authority";
import "reka-ui";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "@heroicons/vue/24/outline";
import "./index-9VOASAGY.js";
import "vue-sonner";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    status: {},
    canResetPassword: { type: Boolean },
    error: {}
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Connexion à votre compte",
        description: "Entrez votre email et mot de passe ci-dessous pour vous connecter"
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-2xl font-bold"${_scopeId}>Connexion</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-2xl font-bold" }, "Connexion")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Connexion" }, null, _parent2, _scopeId));
            _push2(`<div class="max-w-xl mx-auto py-12 px-4 sm:px-6 lg:px-8"${_scopeId}>`);
            if (__props.status) {
              _push2(`<div class="mb-4 text-center text-sm font-medium text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.error) {
              _push2(`<div class="mb-4 text-center text-sm font-medium text-red-600"${_scopeId}>${ssrInterpolate(__props.error)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="space-y-6"${_scopeId}><div class="grid gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              variant: "outline",
              class: "w-full",
              asChild: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a href="/auth/google/redirect" rel="nofollow"${_scopeId2}><img src="https://www.google.com/favicon.ico" alt="Google" class="size-5 mr-2"${_scopeId2}> Continuer avec Google </a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: "/auth/google/redirect",
                      rel: "nofollow"
                    }, [
                      createVNode("img", {
                        src: "https://www.google.com/favicon.ico",
                        alt: "Google",
                        class: "size-5 mr-2"
                      }),
                      createTextVNode(" Continuer avec Google ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="relative"${_scopeId}><div class="absolute inset-0 flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "w-full" }, null, _parent2, _scopeId));
            _push2(`</div><div class="relative flex justify-center text-xs uppercase"${_scopeId}><span class="bg-background px-2 text-muted-foreground"${_scopeId}>Ou</span></div></div><form class="grid gap-6"${_scopeId}><div class="grid gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), { for: "email" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Adresse email`);
                } else {
                  return [
                    createTextVNode("Adresse email")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$5), {
              id: "email",
              type: "email",
              required: "",
              autofocus: "",
              tabindex: 1,
              autocomplete: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              placeholder: "email@exemple.com"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid gap-2"${_scopeId}><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), { for: "password" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mot de passe`);
                } else {
                  return [
                    createTextVNode("Mot de passe")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.canResetPassword) {
              _push2(ssrRenderComponent(_sfc_main$7, {
                href: _ctx.route("password.request"),
                class: "text-sm",
                tabindex: 5
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Mot de passe oublié ? `);
                  } else {
                    return [
                      createTextVNode(" Mot de passe oublié ? ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$5), {
              id: "password",
              type: "password",
              required: "",
              tabindex: 2,
              autocomplete: "current-password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              placeholder: "Mot de passe"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              for: "remember",
              class: "flex items-center space-x-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$8), {
                    id: "remember",
                    modelValue: unref(form).remember,
                    "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                    tabindex: 3
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Se souvenir de moi</span>`);
                } else {
                  return [
                    createVNode(unref(_sfc_main$8), {
                      id: "remember",
                      modelValue: unref(form).remember,
                      "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                      tabindex: 3
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("span", null, "Se souvenir de moi")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              type: "submit",
              class: "w-full",
              tabindex: 4,
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(form).processing) {
                    _push3(ssrRenderComponent(unref(LoaderCircle), { class: "h-4 w-4 animate-spin mr-2" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(` Se connecter `);
                } else {
                  return [
                    unref(form).processing ? (openBlock(), createBlock(unref(LoaderCircle), {
                      key: 0,
                      class: "h-4 w-4 animate-spin mr-2"
                    })) : createCommentVNode("", true),
                    createTextVNode(" Se connecter ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form><div class="text-center text-sm text-muted-foreground"${_scopeId}> Vous n&#39;avez pas de compte ? `);
            _push2(ssrRenderComponent(_sfc_main$7, {
              href: _ctx.route("register"),
              tabindex: 5
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`S&#39;inscrire`);
                } else {
                  return [
                    createTextVNode("S'inscrire")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Connexion" }),
              createVNode("div", { class: "max-w-xl mx-auto py-12 px-4 sm:px-6 lg:px-8" }, [
                __props.status ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mb-4 text-center text-sm font-medium text-green-600"
                }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
                __props.error ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "mb-4 text-center text-sm font-medium text-red-600"
                }, toDisplayString(__props.error), 1)) : createCommentVNode("", true),
                createVNode("div", { class: "space-y-6" }, [
                  createVNode("div", { class: "grid gap-4" }, [
                    createVNode(unref(_sfc_main$2), {
                      variant: "outline",
                      class: "w-full",
                      asChild: ""
                    }, {
                      default: withCtx(() => [
                        createVNode("a", {
                          href: "/auth/google/redirect",
                          rel: "nofollow"
                        }, [
                          createVNode("img", {
                            src: "https://www.google.com/favicon.ico",
                            alt: "Google",
                            class: "size-5 mr-2"
                          }),
                          createTextVNode(" Continuer avec Google ")
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "relative" }, [
                    createVNode("div", { class: "absolute inset-0 flex items-center" }, [
                      createVNode(unref(_sfc_main$3), { class: "w-full" })
                    ]),
                    createVNode("div", { class: "relative flex justify-center text-xs uppercase" }, [
                      createVNode("span", { class: "bg-background px-2 text-muted-foreground" }, "Ou")
                    ])
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "grid gap-6"
                  }, [
                    createVNode("div", { class: "grid gap-2" }, [
                      createVNode(unref(_sfc_main$4), { for: "email" }, {
                        default: withCtx(() => [
                          createTextVNode("Adresse email")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$5), {
                        id: "email",
                        type: "email",
                        required: "",
                        autofocus: "",
                        tabindex: 1,
                        autocomplete: "email",
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        placeholder: "email@exemple.com"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$6, {
                        message: unref(form).errors.email
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "grid gap-2" }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode(unref(_sfc_main$4), { for: "password" }, {
                          default: withCtx(() => [
                            createTextVNode("Mot de passe")
                          ]),
                          _: 1
                        }),
                        __props.canResetPassword ? (openBlock(), createBlock(_sfc_main$7, {
                          key: 0,
                          href: _ctx.route("password.request"),
                          class: "text-sm",
                          tabindex: 5
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Mot de passe oublié ? ")
                          ]),
                          _: 1
                        }, 8, ["href"])) : createCommentVNode("", true)
                      ]),
                      createVNode(unref(_sfc_main$5), {
                        id: "password",
                        type: "password",
                        required: "",
                        tabindex: 2,
                        autocomplete: "current-password",
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        placeholder: "Mot de passe"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$6, {
                        message: unref(form).errors.password
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode(unref(_sfc_main$4), {
                        for: "remember",
                        class: "flex items-center space-x-3"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$8), {
                            id: "remember",
                            modelValue: unref(form).remember,
                            "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                            tabindex: 3
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("span", null, "Se souvenir de moi")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(unref(_sfc_main$2), {
                      type: "submit",
                      class: "w-full",
                      tabindex: 4,
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        unref(form).processing ? (openBlock(), createBlock(unref(LoaderCircle), {
                          key: 0,
                          class: "h-4 w-4 animate-spin mr-2"
                        })) : createCommentVNode("", true),
                        createTextVNode(" Se connecter ")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ], 32),
                  createVNode("div", { class: "text-center text-sm text-muted-foreground" }, [
                    createTextVNode(" Vous n'avez pas de compte ? "),
                    createVNode(_sfc_main$7, {
                      href: _ctx.route("register"),
                      tabindex: 5
                    }, {
                      default: withCtx(() => [
                        createTextVNode("S'inscrire")
                      ]),
                      _: 1
                    }, 8, ["href"])
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
