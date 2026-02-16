import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext, withModifiers, createBlock, createCommentVNode, withDirectives, vModelSelect, openBlock, Transition, vShow } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle } from "vue/server-renderer";
import { useForm, usePage, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./HeadingSmall-B1yfmTIh.js";
import { _ as _sfc_main$c } from "./InputError-BhTWS2NZ.js";
import { _ as _sfc_main$5 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$3, f as _sfc_main$4, a as _sfc_main$6, b as _sfc_main$7, c as _sfc_main$8, d as _sfc_main$9, e as _sfc_main$d, g as _sfc_main$e } from "./DialogTrigger-CSFZvrzo.js";
import { _ as _sfc_main$b } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$a } from "./Label-DLRZNtyA.js";
import { _ as _sfc_main$f } from "./AppLayout-B3jJCr1A.js";
import { _ as _sfc_main$g } from "./Layout-C4o8p68d.js";
import "class-variance-authority";
import "reka-ui";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
import "lucide-vue-next";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "@heroicons/vue/24/outline";
import "./index-9VOASAGY.js";
import "vue-sonner";
import "./Heading-Dsj-VTAa.js";
import "./Separator-C0fcDgz2.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DeleteUser",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordInput = ref(null);
    const form = useForm({
      password: ""
    });
    const deleteUser = (e) => {
      e.preventDefault();
      form.delete(route("profile.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => {
          var _a;
          return (_a = passwordInput.value) == null ? void 0 : _a.focus();
        },
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      form.clearErrors();
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        title: "Supprimer le compte",
        description: "Supprimez votre compte et toutes ses ressources"
      }, null, _parent));
      _push(`<div class="space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10"><div class="relative space-y-0.5 text-red-600 dark:text-red-100"><p class="font-medium">Attention</p><p class="text-sm">Veuillez procéder avec prudence, cette action est irréversible.</p></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$3), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$4), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { variant: "destructive" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Supprimer le compte`);
                      } else {
                        return [
                          createTextVNode("Supprimer le compte")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$5), { variant: "destructive" }, {
                      default: withCtx(() => [
                        createTextVNode("Supprimer le compte")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$6), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form class="space-y-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "space-y-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$8), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Êtes-vous sûr de vouloir supprimer votre compte ?`);
                            } else {
                              return [
                                createTextVNode("Êtes-vous sûr de vouloir supprimer votre compte ?")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$9), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Une fois votre compte supprimé, toutes ses ressources et données seront définitivement effacées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte. `);
                            } else {
                              return [
                                createTextVNode(" Une fois votre compte supprimé, toutes ses ressources et données seront définitivement effacées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$8), null, {
                            default: withCtx(() => [
                              createTextVNode("Êtes-vous sûr de vouloir supprimer votre compte ?")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), null, {
                            default: withCtx(() => [
                              createTextVNode(" Une fois votre compte supprimé, toutes ses ressources et données seront définitivement effacées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$a), {
                    for: "password",
                    class: "sr-only"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Mot de passe`);
                      } else {
                        return [
                          createTextVNode("Mot de passe")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$b), {
                    id: "password",
                    type: "password",
                    name: "password",
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    placeholder: "Mot de passe"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    message: unref(form).errors.password
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$d), { class: "gap-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$e), { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$5), {
                                variant: "secondary",
                                onClick: closeModal
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Annuler`);
                                  } else {
                                    return [
                                      createTextVNode("Annuler")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$5), {
                                  variant: "secondary",
                                  onClick: closeModal
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Annuler")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$5), {
                          variant: "destructive",
                          disabled: unref(form).processing
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<button type="submit"${_scopeId4}>Supprimer le compte</button>`);
                            } else {
                              return [
                                createVNode("button", { type: "submit" }, "Supprimer le compte")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$e), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$5), {
                                variant: "secondary",
                                onClick: closeModal
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Annuler")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$5), {
                            variant: "destructive",
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createVNode("button", { type: "submit" }, "Supprimer le compte")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form>`);
                } else {
                  return [
                    createVNode("form", {
                      class: "space-y-6",
                      onSubmit: deleteUser
                    }, [
                      createVNode(unref(_sfc_main$7), { class: "space-y-3" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$8), null, {
                            default: withCtx(() => [
                              createTextVNode("Êtes-vous sûr de vouloir supprimer votre compte ?")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), null, {
                            default: withCtx(() => [
                              createTextVNode(" Une fois votre compte supprimé, toutes ses ressources et données seront définitivement effacées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte. ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "grid gap-2" }, [
                        createVNode(unref(_sfc_main$a), {
                          for: "password",
                          class: "sr-only"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Mot de passe")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$b), {
                          id: "password",
                          type: "password",
                          name: "password",
                          ref_key: "passwordInput",
                          ref: passwordInput,
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          placeholder: "Mot de passe"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$c, {
                          message: unref(form).errors.password
                        }, null, 8, ["message"])
                      ]),
                      createVNode(unref(_sfc_main$d), { class: "gap-2" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$e), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$5), {
                                variant: "secondary",
                                onClick: closeModal
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Annuler")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$5), {
                            variant: "destructive",
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createVNode("button", { type: "submit" }, "Supprimer le compte")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ]),
                        _: 1
                      })
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$4), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$5), { variant: "destructive" }, {
                    default: withCtx(() => [
                      createTextVNode("Supprimer le compte")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$6), null, {
                default: withCtx(() => [
                  createVNode("form", {
                    class: "space-y-6",
                    onSubmit: deleteUser
                  }, [
                    createVNode(unref(_sfc_main$7), { class: "space-y-3" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$8), null, {
                          default: withCtx(() => [
                            createTextVNode("Êtes-vous sûr de vouloir supprimer votre compte ?")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$9), null, {
                          default: withCtx(() => [
                            createTextVNode(" Une fois votre compte supprimé, toutes ses ressources et données seront définitivement effacées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid gap-2" }, [
                      createVNode(unref(_sfc_main$a), {
                        for: "password",
                        class: "sr-only"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Mot de passe")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$b), {
                        id: "password",
                        type: "password",
                        name: "password",
                        ref_key: "passwordInput",
                        ref: passwordInput,
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        placeholder: "Mot de passe"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$c, {
                        message: unref(form).errors.password
                      }, null, 8, ["message"])
                    ]),
                    createVNode(unref(_sfc_main$d), { class: "gap-2" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$e), { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$5), {
                              variant: "secondary",
                              onClick: closeModal
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Annuler")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), {
                          variant: "destructive",
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            createVNode("button", { type: "submit" }, "Supprimer le compte")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    })
                  ], 32)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/DeleteUser.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Profile",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: { type: Boolean },
    status: {}
  },
  setup(__props) {
    const breadcrumbs = [
      {
        title: "Paramètres du profil",
        href: "/settings/profile"
      }
    ];
    const page = usePage();
    const user = page.props.auth.user;
    const form = useForm({
      name: user.name,
      email: user.email,
      phone: user.phone || "",
      address: user.address || "",
      city: user.city || "",
      postal_code: user.postal_code || "",
      country: user.country || "FR",
      preferred_language: user.preferred_language || "fr"
    });
    const submit = () => {
      form.patch(route("profile.update"), {
        preserveScroll: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$f, mergeProps({ breadcrumbs }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Paramètres du profil" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$g, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col space-y-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    title: "Informations du profil",
                    description: "Mettez à jour vos informations personnelles"
                  }, null, _parent3, _scopeId2));
                  _push3(`<form class="space-y-6"${_scopeId2}><div class="grid gap-6 sm:grid-cols-2"${_scopeId2}><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$a), { for: "name" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Nom`);
                      } else {
                        return [
                          createTextVNode("Nom")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$b), {
                    id: "name",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    required: "",
                    autocomplete: "name",
                    placeholder: "Nom complet"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    message: unref(form).errors.name
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$a), { for: "email" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Adresse e-mail`);
                      } else {
                        return [
                          createTextVNode("Adresse e-mail")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$b), {
                    id: "email",
                    type: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autocomplete: "username",
                    placeholder: "Adresse e-mail"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    message: unref(form).errors.email
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$a), { for: "phone" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Téléphone`);
                      } else {
                        return [
                          createTextVNode("Téléphone")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$b), {
                    id: "phone",
                    type: "tel",
                    modelValue: unref(form).phone,
                    "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                    autocomplete: "tel",
                    placeholder: "Numéro de téléphone"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    message: unref(form).errors.phone
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$a), { for: "preferred_language" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Langue préférée`);
                      } else {
                        return [
                          createTextVNode("Langue préférée")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<select id="preferred_language" class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:border-neutral-700 dark:bg-neutral-900"${_scopeId2}><option value="fr"${ssrIncludeBooleanAttr(Array.isArray(unref(form).preferred_language) ? ssrLooseContain(unref(form).preferred_language, "fr") : ssrLooseEqual(unref(form).preferred_language, "fr")) ? " selected" : ""}${_scopeId2}>Français</option><option value="en"${ssrIncludeBooleanAttr(Array.isArray(unref(form).preferred_language) ? ssrLooseContain(unref(form).preferred_language, "en") : ssrLooseEqual(unref(form).preferred_language, "en")) ? " selected" : ""}${_scopeId2}>English</option></select>`);
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    message: unref(form).errors.preferred_language
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$a), { for: "address" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Adresse`);
                      } else {
                        return [
                          createTextVNode("Adresse")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$b), {
                    id: "address",
                    modelValue: unref(form).address,
                    "onUpdate:modelValue": ($event) => unref(form).address = $event,
                    autocomplete: "street-address",
                    placeholder: "Adresse postale"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    message: unref(form).errors.address
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid gap-6 sm:grid-cols-3"${_scopeId2}><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$a), { for: "postal_code" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Code postal`);
                      } else {
                        return [
                          createTextVNode("Code postal")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$b), {
                    id: "postal_code",
                    modelValue: unref(form).postal_code,
                    "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
                    autocomplete: "postal-code",
                    placeholder: "Code postal"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    message: unref(form).errors.postal_code
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$a), { for: "city" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ville`);
                      } else {
                        return [
                          createTextVNode("Ville")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$b), {
                    id: "city",
                    modelValue: unref(form).city,
                    "onUpdate:modelValue": ($event) => unref(form).city = $event,
                    autocomplete: "address-level2",
                    placeholder: "Ville"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    message: unref(form).errors.city
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$a), { for: "country" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Pays`);
                      } else {
                        return [
                          createTextVNode("Pays")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$b), {
                    id: "country",
                    modelValue: unref(form).country,
                    "onUpdate:modelValue": ($event) => unref(form).country = $event,
                    autocomplete: "country",
                    placeholder: "Pays"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    message: unref(form).errors.country
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  if (__props.mustVerifyEmail && !unref(user).email_verified_at) {
                    _push3(`<div${_scopeId2}><p class="-mt-4 text-sm text-muted-foreground"${_scopeId2}> Votre adresse e-mail n&#39;est pas vérifiée. `);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("verification.send"),
                      method: "post",
                      as: "button",
                      class: "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Cliquez ici pour renvoyer l&#39;e-mail de vérification. `);
                        } else {
                          return [
                            createTextVNode(" Cliquez ici pour renvoyer l'e-mail de vérification. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</p>`);
                    if (__props.status === "verification-link-sent") {
                      _push3(`<div class="mt-2 text-sm font-medium text-green-600"${_scopeId2}> Un nouveau lien de vérification a été envoyé à votre adresse e-mail. </div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="flex items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$5), {
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Enregistrer`);
                      } else {
                        return [
                          createTextVNode("Enregistrer")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="text-sm text-neutral-600" style="${ssrRenderStyle(unref(form).recentlySuccessful ? null : { display: "none" })}"${_scopeId2}>Enregistré.</p></div></form></div>`);
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col space-y-6" }, [
                      createVNode(_sfc_main$2, {
                        title: "Informations du profil",
                        description: "Mettez à jour vos informations personnelles"
                      }),
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        class: "space-y-6"
                      }, [
                        createVNode("div", { class: "grid gap-6 sm:grid-cols-2" }, [
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode(unref(_sfc_main$a), { for: "name" }, {
                              default: withCtx(() => [
                                createTextVNode("Nom")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), {
                              id: "name",
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              required: "",
                              autocomplete: "name",
                              placeholder: "Nom complet"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$c, {
                              message: unref(form).errors.name
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode(unref(_sfc_main$a), { for: "email" }, {
                              default: withCtx(() => [
                                createTextVNode("Adresse e-mail")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), {
                              id: "email",
                              type: "email",
                              modelValue: unref(form).email,
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              required: "",
                              autocomplete: "username",
                              placeholder: "Adresse e-mail"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$c, {
                              message: unref(form).errors.email
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode(unref(_sfc_main$a), { for: "phone" }, {
                              default: withCtx(() => [
                                createTextVNode("Téléphone")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), {
                              id: "phone",
                              type: "tel",
                              modelValue: unref(form).phone,
                              "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                              autocomplete: "tel",
                              placeholder: "Numéro de téléphone"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$c, {
                              message: unref(form).errors.phone
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode(unref(_sfc_main$a), { for: "preferred_language" }, {
                              default: withCtx(() => [
                                createTextVNode("Langue préférée")
                              ]),
                              _: 1
                            }),
                            withDirectives(createVNode("select", {
                              id: "preferred_language",
                              "onUpdate:modelValue": ($event) => unref(form).preferred_language = $event,
                              class: "mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:border-neutral-700 dark:bg-neutral-900"
                            }, [
                              createVNode("option", { value: "fr" }, "Français"),
                              createVNode("option", { value: "en" }, "English")
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).preferred_language]
                            ]),
                            createVNode(_sfc_main$c, {
                              message: unref(form).errors.preferred_language
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode(unref(_sfc_main$a), { for: "address" }, {
                            default: withCtx(() => [
                              createTextVNode("Adresse")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$b), {
                            id: "address",
                            modelValue: unref(form).address,
                            "onUpdate:modelValue": ($event) => unref(form).address = $event,
                            autocomplete: "street-address",
                            placeholder: "Adresse postale"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$c, {
                            message: unref(form).errors.address
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "grid gap-6 sm:grid-cols-3" }, [
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode(unref(_sfc_main$a), { for: "postal_code" }, {
                              default: withCtx(() => [
                                createTextVNode("Code postal")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), {
                              id: "postal_code",
                              modelValue: unref(form).postal_code,
                              "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
                              autocomplete: "postal-code",
                              placeholder: "Code postal"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$c, {
                              message: unref(form).errors.postal_code
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode(unref(_sfc_main$a), { for: "city" }, {
                              default: withCtx(() => [
                                createTextVNode("Ville")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), {
                              id: "city",
                              modelValue: unref(form).city,
                              "onUpdate:modelValue": ($event) => unref(form).city = $event,
                              autocomplete: "address-level2",
                              placeholder: "Ville"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$c, {
                              message: unref(form).errors.city
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode(unref(_sfc_main$a), { for: "country" }, {
                              default: withCtx(() => [
                                createTextVNode("Pays")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), {
                              id: "country",
                              modelValue: unref(form).country,
                              "onUpdate:modelValue": ($event) => unref(form).country = $event,
                              autocomplete: "country",
                              placeholder: "Pays"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$c, {
                              message: unref(form).errors.country
                            }, null, 8, ["message"])
                          ])
                        ]),
                        __props.mustVerifyEmail && !unref(user).email_verified_at ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("p", { class: "-mt-4 text-sm text-muted-foreground" }, [
                            createTextVNode(" Votre adresse e-mail n'est pas vérifiée. "),
                            createVNode(unref(Link), {
                              href: _ctx.route("verification.send"),
                              method: "post",
                              as: "button",
                              class: "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Cliquez ici pour renvoyer l'e-mail de vérification. ")
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ]),
                          __props.status === "verification-link-sent" ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mt-2 text-sm font-medium text-green-600"
                          }, " Un nouveau lien de vérification a été envoyé à votre adresse e-mail. ")) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "flex items-center gap-4" }, [
                          createVNode(unref(_sfc_main$5), {
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Enregistrer")
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
                    ]),
                    createVNode(_sfc_main$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Head), { title: "Paramètres du profil" }),
              createVNode(_sfc_main$g, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col space-y-6" }, [
                    createVNode(_sfc_main$2, {
                      title: "Informations du profil",
                      description: "Mettez à jour vos informations personnelles"
                    }),
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      class: "space-y-6"
                    }, [
                      createVNode("div", { class: "grid gap-6 sm:grid-cols-2" }, [
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode(unref(_sfc_main$a), { for: "name" }, {
                            default: withCtx(() => [
                              createTextVNode("Nom")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$b), {
                            id: "name",
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            required: "",
                            autocomplete: "name",
                            placeholder: "Nom complet"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$c, {
                            message: unref(form).errors.name
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode(unref(_sfc_main$a), { for: "email" }, {
                            default: withCtx(() => [
                              createTextVNode("Adresse e-mail")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$b), {
                            id: "email",
                            type: "email",
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            required: "",
                            autocomplete: "username",
                            placeholder: "Adresse e-mail"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$c, {
                            message: unref(form).errors.email
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode(unref(_sfc_main$a), { for: "phone" }, {
                            default: withCtx(() => [
                              createTextVNode("Téléphone")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$b), {
                            id: "phone",
                            type: "tel",
                            modelValue: unref(form).phone,
                            "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                            autocomplete: "tel",
                            placeholder: "Numéro de téléphone"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$c, {
                            message: unref(form).errors.phone
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode(unref(_sfc_main$a), { for: "preferred_language" }, {
                            default: withCtx(() => [
                              createTextVNode("Langue préférée")
                            ]),
                            _: 1
                          }),
                          withDirectives(createVNode("select", {
                            id: "preferred_language",
                            "onUpdate:modelValue": ($event) => unref(form).preferred_language = $event,
                            class: "mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:border-neutral-700 dark:bg-neutral-900"
                          }, [
                            createVNode("option", { value: "fr" }, "Français"),
                            createVNode("option", { value: "en" }, "English")
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(form).preferred_language]
                          ]),
                          createVNode(_sfc_main$c, {
                            message: unref(form).errors.preferred_language
                          }, null, 8, ["message"])
                        ])
                      ]),
                      createVNode("div", { class: "grid gap-2" }, [
                        createVNode(unref(_sfc_main$a), { for: "address" }, {
                          default: withCtx(() => [
                            createTextVNode("Adresse")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$b), {
                          id: "address",
                          modelValue: unref(form).address,
                          "onUpdate:modelValue": ($event) => unref(form).address = $event,
                          autocomplete: "street-address",
                          placeholder: "Adresse postale"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$c, {
                          message: unref(form).errors.address
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "grid gap-6 sm:grid-cols-3" }, [
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode(unref(_sfc_main$a), { for: "postal_code" }, {
                            default: withCtx(() => [
                              createTextVNode("Code postal")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$b), {
                            id: "postal_code",
                            modelValue: unref(form).postal_code,
                            "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
                            autocomplete: "postal-code",
                            placeholder: "Code postal"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$c, {
                            message: unref(form).errors.postal_code
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode(unref(_sfc_main$a), { for: "city" }, {
                            default: withCtx(() => [
                              createTextVNode("Ville")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$b), {
                            id: "city",
                            modelValue: unref(form).city,
                            "onUpdate:modelValue": ($event) => unref(form).city = $event,
                            autocomplete: "address-level2",
                            placeholder: "Ville"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$c, {
                            message: unref(form).errors.city
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode(unref(_sfc_main$a), { for: "country" }, {
                            default: withCtx(() => [
                              createTextVNode("Pays")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$b), {
                            id: "country",
                            modelValue: unref(form).country,
                            "onUpdate:modelValue": ($event) => unref(form).country = $event,
                            autocomplete: "country",
                            placeholder: "Pays"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$c, {
                            message: unref(form).errors.country
                          }, null, 8, ["message"])
                        ])
                      ]),
                      __props.mustVerifyEmail && !unref(user).email_verified_at ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("p", { class: "-mt-4 text-sm text-muted-foreground" }, [
                          createTextVNode(" Votre adresse e-mail n'est pas vérifiée. "),
                          createVNode(unref(Link), {
                            href: _ctx.route("verification.send"),
                            method: "post",
                            as: "button",
                            class: "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cliquez ici pour renvoyer l'e-mail de vérification. ")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        __props.status === "verification-link-sent" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mt-2 text-sm font-medium text-green-600"
                        }, " Un nouveau lien de vérification a été envoyé à votre adresse e-mail. ")) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "flex items-center gap-4" }, [
                        createVNode(unref(_sfc_main$5), {
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Enregistrer")
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
                  ]),
                  createVNode(_sfc_main$1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/settings/Profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
