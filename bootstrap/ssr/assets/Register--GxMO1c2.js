import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, toDisplayString, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$6 } from "./InputError-BhTWS2NZ.js";
import { _ as _sfc_main$7 } from "./TextLink-DTyK6a-s.js";
import { _ as _sfc_main$2 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$5 } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$4 } from "./Label-DLRZNtyA.js";
import { _ as _sfc_main$3 } from "./Separator-C0fcDgz2.js";
import { _ as _sfc_main$1 } from "./AppLayout-B3jJCr1A.js";
import { useForm, Head } from "@inertiajs/vue3";
import { LoaderCircle, ShieldCheck } from "lucide-vue-next";
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
  __name: "Register",
  __ssrInlineRender: true,
  props: {
    error: {}
  },
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Créer un compte",
        description: "Entrez vos informations ci-dessous pour créer votre compte"
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-2xl font-bold"${_scopeId}>Créer un compte</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-2xl font-bold" }, "Créer un compte")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Inscription" }, null, _parent2, _scopeId));
            _push2(`<div class="max-w-xl mx-auto py-12 px-4 sm:px-6 lg:px-8"${_scopeId}>`);
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
            _push2(ssrRenderComponent(unref(_sfc_main$4), { for: "name" }, {
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
            _push2(ssrRenderComponent(unref(_sfc_main$5), {
              id: "name",
              type: "text",
              required: "",
              autofocus: "",
              tabindex: 1,
              autocomplete: "name",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              placeholder: "Nom complet"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid gap-2"${_scopeId}>`);
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
              tabindex: 2,
              autocomplete: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              placeholder: "email@exemple.com"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid gap-2"${_scopeId}>`);
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
            _push2(ssrRenderComponent(unref(_sfc_main$5), {
              id: "password",
              type: "password",
              required: "",
              tabindex: 3,
              autocomplete: "new-password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              placeholder: "Mot de passe"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), { for: "password_confirmation" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Confirmer le mot de passe`);
                } else {
                  return [
                    createTextVNode("Confirmer le mot de passe")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$5), {
              id: "password_confirmation",
              type: "password",
              required: "",
              tabindex: 4,
              autocomplete: "new-password",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              placeholder: "Confirmer le mot de passe"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              type: "submit",
              class: "w-full",
              tabindex: 5,
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(form).processing) {
                    _push3(ssrRenderComponent(unref(LoaderCircle), { class: "h-4 w-4 animate-spin mr-2" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(` Créer le compte `);
                } else {
                  return [
                    unref(form).processing ? (openBlock(), createBlock(unref(LoaderCircle), {
                      key: 0,
                      class: "h-4 w-4 animate-spin mr-2"
                    })) : createCommentVNode("", true),
                    createTextVNode(" Créer le compte ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form><div class="text-center text-sm text-muted-foreground"${_scopeId}> Vous avez déjà un compte ? `);
            _push2(ssrRenderComponent(_sfc_main$7, {
              href: _ctx.route("login"),
              tabindex: 6
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Se connecter`);
                } else {
                  return [
                    createTextVNode("Se connecter")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="text-center text-sm text-muted-foreground flex flex-col items-center gap-1 mt-4"${_scopeId}><span class="inline-flex items-center justify-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ShieldCheck), {
              class: "w-4 h-4 text-primary inline-block mr-1",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}><strong class="font-medium"${_scopeId}>Vos données sont confidentielles</strong> et ne seront jamais revendues. </span></span><span${_scopeId}><span class="font-medium"${_scopeId}>Créer un compte</span> vous permet de suivre votre matériel et vos réservations en toute sécurité. </span></div></div></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Inscription" }),
              createVNode("div", { class: "max-w-xl mx-auto py-12 px-4 sm:px-6 lg:px-8" }, [
                __props.error ? (openBlock(), createBlock("div", {
                  key: 0,
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
                      createVNode(unref(_sfc_main$4), { for: "name" }, {
                        default: withCtx(() => [
                          createTextVNode("Nom")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$5), {
                        id: "name",
                        type: "text",
                        required: "",
                        autofocus: "",
                        tabindex: 1,
                        autocomplete: "name",
                        modelValue: unref(form).name,
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        placeholder: "Nom complet"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$6, {
                        message: unref(form).errors.name
                      }, null, 8, ["message"])
                    ]),
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
                        tabindex: 2,
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
                      createVNode(unref(_sfc_main$4), { for: "password" }, {
                        default: withCtx(() => [
                          createTextVNode("Mot de passe")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$5), {
                        id: "password",
                        type: "password",
                        required: "",
                        tabindex: 3,
                        autocomplete: "new-password",
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        placeholder: "Mot de passe"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$6, {
                        message: unref(form).errors.password
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "grid gap-2" }, [
                      createVNode(unref(_sfc_main$4), { for: "password_confirmation" }, {
                        default: withCtx(() => [
                          createTextVNode("Confirmer le mot de passe")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$5), {
                        id: "password_confirmation",
                        type: "password",
                        required: "",
                        tabindex: 4,
                        autocomplete: "new-password",
                        modelValue: unref(form).password_confirmation,
                        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                        placeholder: "Confirmer le mot de passe"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$6, {
                        message: unref(form).errors.password_confirmation
                      }, null, 8, ["message"])
                    ]),
                    createVNode(unref(_sfc_main$2), {
                      type: "submit",
                      class: "w-full",
                      tabindex: 5,
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        unref(form).processing ? (openBlock(), createBlock(unref(LoaderCircle), {
                          key: 0,
                          class: "h-4 w-4 animate-spin mr-2"
                        })) : createCommentVNode("", true),
                        createTextVNode(" Créer le compte ")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ], 32),
                  createVNode("div", { class: "text-center text-sm text-muted-foreground" }, [
                    createTextVNode(" Vous avez déjà un compte ? "),
                    createVNode(_sfc_main$7, {
                      href: _ctx.route("login"),
                      tabindex: 6
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Se connecter")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  createVNode("div", { class: "text-center text-sm text-muted-foreground flex flex-col items-center gap-1 mt-4" }, [
                    createVNode("span", { class: "inline-flex items-center justify-center gap-1" }, [
                      createVNode(unref(ShieldCheck), {
                        class: "w-4 h-4 text-primary inline-block mr-1",
                        "aria-hidden": "true"
                      }),
                      createVNode("span", null, [
                        createVNode("strong", { class: "font-medium" }, "Vos données sont confidentielles"),
                        createTextVNode(" et ne seront jamais revendues. ")
                      ])
                    ]),
                    createVNode("span", null, [
                      createVNode("span", { class: "font-medium" }, "Créer un compte"),
                      createTextVNode(" vous permet de suivre votre matériel et vos réservations en toute sécurité. ")
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
