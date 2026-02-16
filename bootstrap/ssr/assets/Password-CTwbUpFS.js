import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, withModifiers, Transition, withDirectives, vShow, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$6 } from "./InputError-BhTWS2NZ.js";
import { _ as _sfc_main$1 } from "./AppLayout-B3jJCr1A.js";
import { _ as _sfc_main$2 } from "./Layout-C4o8p68d.js";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./HeadingSmall-B1yfmTIh.js";
import { _ as _sfc_main$7 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$5 } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$4 } from "./Label-DLRZNtyA.js";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "reka-ui";
import "@vueuse/core";
import "lucide-vue-next";
import "@heroicons/vue/24/outline";
import "./index-9VOASAGY.js";
import "class-variance-authority";
import "vue-sonner";
import "./Heading-Dsj-VTAa.js";
import "./Separator-C0fcDgz2.js";
import "clsx";
import "tailwind-merge";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Password",
  __ssrInlineRender: true,
  setup(__props) {
    const breadcrumbItems = [
      {
        title: "Paramètres du mot de passe",
        href: "/settings/password"
      }
    ];
    const passwordInput = ref(null);
    const currentPasswordInput = ref(null);
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    const updatePassword = () => {
      form.put(route("password.update"), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: (errors) => {
          if (errors.password) {
            form.reset("password", "password_confirmation");
            if (passwordInput.value instanceof HTMLInputElement) {
              passwordInput.value.focus();
            }
          }
          if (errors.current_password) {
            form.reset("current_password");
            if (currentPasswordInput.value instanceof HTMLInputElement) {
              currentPasswordInput.value.focus();
            }
          }
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ breadcrumbs: breadcrumbItems }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Paramètres du mot de passe" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    title: "Modifier le mot de passe",
                    description: "Assurez-vous que votre compte utilise un mot de passe long et aléatoire pour rester sécurisé"
                  }, null, _parent3, _scopeId2));
                  _push3(`<form class="space-y-6"${_scopeId2}><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { for: "current_password" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Mot de passe actuel`);
                      } else {
                        return [
                          createTextVNode("Mot de passe actuel")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5), {
                    id: "current_password",
                    ref_key: "currentPasswordInput",
                    ref: currentPasswordInput,
                    modelValue: unref(form).current_password,
                    "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    autocomplete: "current-password",
                    placeholder: "Mot de passe actuel"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    message: unref(form).errors.current_password
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { for: "password" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Nouveau mot de passe`);
                      } else {
                        return [
                          createTextVNode("Nouveau mot de passe")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5), {
                    id: "password",
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    autocomplete: "new-password",
                    placeholder: "Nouveau mot de passe"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    message: unref(form).errors.password
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { for: "password_confirmation" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Confirmer le mot de passe`);
                      } else {
                        return [
                          createTextVNode("Confirmer le mot de passe")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5), {
                    id: "password_confirmation",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    autocomplete: "new-password",
                    placeholder: "Confirmer le mot de passe"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    message: unref(form).errors.password_confirmation
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$7), {
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Enregistrer le mot de passe`);
                      } else {
                        return [
                          createTextVNode("Enregistrer le mot de passe")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="text-sm text-neutral-600" style="${ssrRenderStyle(unref(form).recentlySuccessful ? null : { display: "none" })}"${_scopeId2}>Enregistré.</p></div></form></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode(_sfc_main$3, {
                        title: "Modifier le mot de passe",
                        description: "Assurez-vous que votre compte utilise un mot de passe long et aléatoire pour rester sécurisé"
                      }),
                      createVNode("form", {
                        onSubmit: withModifiers(updatePassword, ["prevent"]),
                        class: "space-y-6"
                      }, [
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode(unref(_sfc_main$4), { for: "current_password" }, {
                            default: withCtx(() => [
                              createTextVNode("Mot de passe actuel")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$5), {
                            id: "current_password",
                            ref_key: "currentPasswordInput",
                            ref: currentPasswordInput,
                            modelValue: unref(form).current_password,
                            "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
                            type: "password",
                            class: "mt-1 block w-full",
                            autocomplete: "current-password",
                            placeholder: "Mot de passe actuel"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$6, {
                            message: unref(form).errors.current_password
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode(unref(_sfc_main$4), { for: "password" }, {
                            default: withCtx(() => [
                              createTextVNode("Nouveau mot de passe")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$5), {
                            id: "password",
                            ref_key: "passwordInput",
                            ref: passwordInput,
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            type: "password",
                            class: "mt-1 block w-full",
                            autocomplete: "new-password",
                            placeholder: "Nouveau mot de passe"
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
                            modelValue: unref(form).password_confirmation,
                            "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                            type: "password",
                            class: "mt-1 block w-full",
                            autocomplete: "new-password",
                            placeholder: "Confirmer le mot de passe"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$6, {
                            message: unref(form).errors.password_confirmation
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "flex items-center gap-4" }, [
                          createVNode(unref(_sfc_main$7), {
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Enregistrer le mot de passe")
                            ]),
                            _: 1
                          }, 8, ["disabled"]),
                          createVNode(Transition, {
                            "enter-active-class": "transition ease-in-out",
                            "enter-from-class": "opacity-0",
                            "leave-active-class": "transition ease-in-out",
                            "leave-to-class": "opacity-0"
                          }, {
                            default: withCtx(() => [
                              withDirectives(createVNode("p", { class: "text-sm text-neutral-600" }, "Enregistré.", 512), [
                                [vShow, unref(form).recentlySuccessful]
                              ])
                            ]),
                            _: 1
                          })
                        ])
                      ], 32)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Head), { title: "Paramètres du mot de passe" }),
              createVNode(_sfc_main$2, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-6" }, [
                    createVNode(_sfc_main$3, {
                      title: "Modifier le mot de passe",
                      description: "Assurez-vous que votre compte utilise un mot de passe long et aléatoire pour rester sécurisé"
                    }),
                    createVNode("form", {
                      onSubmit: withModifiers(updatePassword, ["prevent"]),
                      class: "space-y-6"
                    }, [
                      createVNode("div", { class: "grid gap-2" }, [
                        createVNode(unref(_sfc_main$4), { for: "current_password" }, {
                          default: withCtx(() => [
                            createTextVNode("Mot de passe actuel")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), {
                          id: "current_password",
                          ref_key: "currentPasswordInput",
                          ref: currentPasswordInput,
                          modelValue: unref(form).current_password,
                          "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
                          type: "password",
                          class: "mt-1 block w-full",
                          autocomplete: "current-password",
                          placeholder: "Mot de passe actuel"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$6, {
                          message: unref(form).errors.current_password
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "grid gap-2" }, [
                        createVNode(unref(_sfc_main$4), { for: "password" }, {
                          default: withCtx(() => [
                            createTextVNode("Nouveau mot de passe")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), {
                          id: "password",
                          ref_key: "passwordInput",
                          ref: passwordInput,
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          type: "password",
                          class: "mt-1 block w-full",
                          autocomplete: "new-password",
                          placeholder: "Nouveau mot de passe"
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
                          modelValue: unref(form).password_confirmation,
                          "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                          type: "password",
                          class: "mt-1 block w-full",
                          autocomplete: "new-password",
                          placeholder: "Confirmer le mot de passe"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$6, {
                          message: unref(form).errors.password_confirmation
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "flex items-center gap-4" }, [
                        createVNode(unref(_sfc_main$7), {
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Enregistrer le mot de passe")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        createVNode(Transition, {
                          "enter-active-class": "transition ease-in-out",
                          "enter-from-class": "opacity-0",
                          "leave-active-class": "transition ease-in-out",
                          "leave-to-class": "opacity-0"
                        }, {
                          default: withCtx(() => [
                            withDirectives(createVNode("p", { class: "text-sm text-neutral-600" }, "Enregistré.", 512), [
                              [vShow, unref(form).recentlySuccessful]
                            ])
                          ]),
                          _: 1
                        })
                      ])
                    ], 32)
                  ])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/settings/Password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
