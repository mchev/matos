import { ref, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./HeadingSmall-B1yfmTIh.js";
import { _ as _sfc_main$b } from "./InputError-BhTWS2NZ.js";
import { _ as _sfc_main$4 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$2, f as _sfc_main$3, a as _sfc_main$5, b as _sfc_main$6, c as _sfc_main$7, d as _sfc_main$8, e as _sfc_main$c, g as _sfc_main$d } from "./DialogTrigger-CSFZvrzo.js";
import { _ as _sfc_main$a } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$9 } from "./Label-DLRZNtyA.js";
import "class-variance-authority";
import "reka-ui";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
import "lucide-vue-next";
const _sfc_main = {
  __name: "DeleteOrganization",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordInput = ref(null);
    const form = useForm({
      password: ""
    });
    const deleteOrganization = (e) => {
      e.preventDefault();
      form.delete(route("organizations.destroy"), {
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
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Supprimer l'organisation",
        description: "Supprimez définitivement votre organisation et toutes ses ressources"
      }, null, _parent));
      _push(`<div class="space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10"><div class="relative space-y-0.5 text-red-600 dark:text-red-100"><p class="font-medium">Attention</p><p class="text-sm">Veuillez procéder avec prudence, cette action est irréversible.</p></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), { asChild: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { variant: "destructive" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Supprimer l&#39;organisation`);
                      } else {
                        return [
                          createTextVNode("Supprimer l'organisation")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { variant: "destructive" }, {
                      default: withCtx(() => [
                        createTextVNode("Supprimer l'organisation")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form class="space-y-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "space-y-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Êtes-vous sûr de vouloir supprimer cette organisation ?`);
                            } else {
                              return [
                                createTextVNode("Êtes-vous sûr de vouloir supprimer cette organisation ?")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Une fois l&#39;organisation supprimée, toutes ses ressources et données seront définitivement effacées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement l&#39;organisation. `);
                            } else {
                              return [
                                createTextVNode(" Une fois l'organisation supprimée, toutes ses ressources et données seront définitivement effacées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement l'organisation. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createTextVNode("Êtes-vous sûr de vouloir supprimer cette organisation ?")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$8), null, {
                            default: withCtx(() => [
                              createTextVNode(" Une fois l'organisation supprimée, toutes ses ressources et données seront définitivement effacées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement l'organisation. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$9), {
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
                  _push3(ssrRenderComponent(unref(_sfc_main$a), {
                    id: "password",
                    type: "password",
                    name: "password",
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    placeholder: "Mot de passe"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    message: unref(form).errors.password
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$c), { class: "gap-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$d), { asChild: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$4), {
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
                                createVNode(unref(_sfc_main$4), {
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
                        _push4(ssrRenderComponent(unref(_sfc_main$4), {
                          variant: "destructive",
                          disabled: unref(form).processing
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<button type="submit"${_scopeId4}>Supprimer l&#39;organisation</button>`);
                            } else {
                              return [
                                createVNode("button", { type: "submit" }, "Supprimer l'organisation")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$d), { asChild: "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$4), {
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
                          createVNode(unref(_sfc_main$4), {
                            variant: "destructive",
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createVNode("button", { type: "submit" }, "Supprimer l'organisation")
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
                      onSubmit: deleteOrganization
                    }, [
                      createVNode(unref(_sfc_main$6), { class: "space-y-3" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createTextVNode("Êtes-vous sûr de vouloir supprimer cette organisation ?")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$8), null, {
                            default: withCtx(() => [
                              createTextVNode(" Une fois l'organisation supprimée, toutes ses ressources et données seront définitivement effacées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement l'organisation. ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "grid gap-2" }, [
                        createVNode(unref(_sfc_main$9), {
                          for: "password",
                          class: "sr-only"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Mot de passe")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$a), {
                          id: "password",
                          type: "password",
                          name: "password",
                          ref_key: "passwordInput",
                          ref: passwordInput,
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          placeholder: "Mot de passe"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$b, {
                          message: unref(form).errors.password
                        }, null, 8, ["message"])
                      ]),
                      createVNode(unref(_sfc_main$c), { class: "gap-2" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$d), { asChild: "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$4), {
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
                          createVNode(unref(_sfc_main$4), {
                            variant: "destructive",
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createVNode("button", { type: "submit" }, "Supprimer l'organisation")
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
              createVNode(unref(_sfc_main$3), { asChild: "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), { variant: "destructive" }, {
                    default: withCtx(() => [
                      createTextVNode("Supprimer l'organisation")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode("form", {
                    class: "space-y-6",
                    onSubmit: deleteOrganization
                  }, [
                    createVNode(unref(_sfc_main$6), { class: "space-y-3" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            createTextVNode("Êtes-vous sûr de vouloir supprimer cette organisation ?")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$8), null, {
                          default: withCtx(() => [
                            createTextVNode(" Une fois l'organisation supprimée, toutes ses ressources et données seront définitivement effacées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement l'organisation. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid gap-2" }, [
                      createVNode(unref(_sfc_main$9), {
                        for: "password",
                        class: "sr-only"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Mot de passe")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$a), {
                        id: "password",
                        type: "password",
                        name: "password",
                        ref_key: "passwordInput",
                        ref: passwordInput,
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        placeholder: "Mot de passe"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$b, {
                        message: unref(form).errors.password
                      }, null, 8, ["message"])
                    ]),
                    createVNode(unref(_sfc_main$c), { class: "gap-2" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$d), { asChild: "" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), {
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
                        createVNode(unref(_sfc_main$4), {
                          variant: "destructive",
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            createVNode("button", { type: "submit" }, "Supprimer l'organisation")
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
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Settings/Partials/DeleteOrganization.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
