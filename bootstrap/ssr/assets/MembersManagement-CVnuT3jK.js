import { ref, mergeProps, unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, createBlock, openBlock, Fragment, renderList, toDisplayString, vModelSelect, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$4 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$a } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$9 } from "./Label-DLRZNtyA.js";
import { _ as _sfc_main$b } from "./InputError-BhTWS2NZ.js";
import { _ as _sfc_main$1 } from "./HeadingSmall-B1yfmTIh.js";
import { _ as _sfc_main$2, f as _sfc_main$3, a as _sfc_main$5, b as _sfc_main$6, c as _sfc_main$7, d as _sfc_main$8, e as _sfc_main$c } from "./DialogTrigger-CSFZvrzo.js";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import "class-variance-authority";
import "reka-ui";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
import "lucide-vue-next";
const _sfc_main = {
  __name: "MembersManagement",
  __ssrInlineRender: true,
  props: {
    organization: {
      type: Object,
      required: true
    },
    members: {
      type: Array,
      required: true
    },
    pendingInvitations: {
      type: Array,
      required: true
    },
    roles: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const isModalOpen = ref(false);
    const form = useForm({
      email: "",
      role: ""
    });
    const formatDate = (date) => {
      return format(new Date(date), "PPP", { locale: fr });
    };
    const inviteMember = () => {
      form.post(route("app.organizations.members.invite"), {
        preserveScroll: true,
        onSuccess: () => {
          form.reset();
          isModalOpen.value = false;
        }
      });
    };
    const removeMember = (member) => {
      if (!confirm(`Êtes-vous sûr de vouloir retirer ${member.name} de l'organisation ?`)) {
        return;
      }
      router.delete(route("app.organizations.members.remove", member.id), {
        preserveScroll: true
      });
    };
    const cancelInvitation = (invitation) => {
      if (!confirm(`Êtes-vous sûr de vouloir annuler l'invitation de ${invitation.email} ?`)) {
        return;
      }
      router.delete(route("app.organizations.invitations.cancel", invitation.id), {
        preserveScroll: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Gestion des membres",
        description: "Invitez et gérez les membres de votre organisation."
      }, null, _parent));
      _push(`<div class="space-y-4">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), {
        open: isModalOpen.value,
        "onUpdate:open": ($event) => isModalOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), { asChild: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Inviter un membre`);
                      } else {
                        return [
                          createTextVNode("Inviter un membre")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), null, {
                      default: withCtx(() => [
                        createTextVNode("Inviter un membre")
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
                  _push3(`<form${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$6), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Inviter un nouveau membre`);
                            } else {
                              return [
                                createTextVNode("Inviter un nouveau membre")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Envoyez une invitation par email pour rejoindre votre organisation. `);
                            } else {
                              return [
                                createTextVNode(" Envoyez une invitation par email pour rejoindre votre organisation. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createTextVNode("Inviter un nouveau membre")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$8), null, {
                            default: withCtx(() => [
                              createTextVNode(" Envoyez une invitation par email pour rejoindre votre organisation. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="grid gap-4 py-4"${_scopeId2}><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$9), { for: "email" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Adresse email`);
                      } else {
                        return [
                          createTextVNode("Adresse email")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$a), {
                    id: "email",
                    type: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    placeholder: "email@example.com",
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    message: unref(form).errors.email
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$9), { for: "role" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Rôle`);
                      } else {
                        return [
                          createTextVNode("Rôle")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<select id="role" class="rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-gray-950 dark:text-gray-100 dark:ring-gray-800 sm:text-sm sm:leading-6" required${_scopeId2}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "") : ssrLooseEqual(unref(form).role, "")) ? " selected" : ""}${_scopeId2}>Sélectionnez un rôle</option><!--[-->`);
                  ssrRenderList(__props.roles, (role) => {
                    _push3(`<option${ssrRenderAttr("value", role.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, role.id) : ssrLooseEqual(unref(form).role, role.id)) ? " selected" : ""}${_scopeId2}>${ssrInterpolate(role.name)}</option>`);
                  });
                  _push3(`<!--]--></select>`);
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    message: unref(form).errors.role
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$c), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), {
                          type: "submit",
                          disabled: unref(form).processing
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Envoyer l&#39;invitation `);
                            } else {
                              return [
                                createTextVNode(" Envoyer l'invitation ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), {
                            type: "submit",
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Envoyer l'invitation ")
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
                      onSubmit: withModifiers(inviteMember, ["prevent"])
                    }, [
                      createVNode(unref(_sfc_main$6), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createTextVNode("Inviter un nouveau membre")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$8), null, {
                            default: withCtx(() => [
                              createTextVNode(" Envoyez une invitation par email pour rejoindre votre organisation. ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "grid gap-4 py-4" }, [
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode(unref(_sfc_main$9), { for: "email" }, {
                            default: withCtx(() => [
                              createTextVNode("Adresse email")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$a), {
                            id: "email",
                            type: "email",
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            placeholder: "email@example.com",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$b, {
                            message: unref(form).errors.email
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode(unref(_sfc_main$9), { for: "role" }, {
                            default: withCtx(() => [
                              createTextVNode("Rôle")
                            ]),
                            _: 1
                          }),
                          withDirectives(createVNode("select", {
                            id: "role",
                            "onUpdate:modelValue": ($event) => unref(form).role = $event,
                            class: "rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-gray-950 dark:text-gray-100 dark:ring-gray-800 sm:text-sm sm:leading-6",
                            required: ""
                          }, [
                            createVNode("option", { value: "" }, "Sélectionnez un rôle"),
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (role) => {
                              return openBlock(), createBlock("option", {
                                key: role.id,
                                value: role.id
                              }, toDisplayString(role.name), 9, ["value"]);
                            }), 128))
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(form).role]
                          ]),
                          createVNode(_sfc_main$b, {
                            message: unref(form).errors.role
                          }, null, 8, ["message"])
                        ])
                      ]),
                      createVNode(unref(_sfc_main$c), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), {
                            type: "submit",
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Envoyer l'invitation ")
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
                  createVNode(unref(_sfc_main$4), null, {
                    default: withCtx(() => [
                      createTextVNode("Inviter un membre")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode("form", {
                    onSubmit: withModifiers(inviteMember, ["prevent"])
                  }, [
                    createVNode(unref(_sfc_main$6), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            createTextVNode("Inviter un nouveau membre")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$8), null, {
                          default: withCtx(() => [
                            createTextVNode(" Envoyez une invitation par email pour rejoindre votre organisation. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid gap-4 py-4" }, [
                      createVNode("div", { class: "grid gap-2" }, [
                        createVNode(unref(_sfc_main$9), { for: "email" }, {
                          default: withCtx(() => [
                            createTextVNode("Adresse email")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$a), {
                          id: "email",
                          type: "email",
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          placeholder: "email@example.com",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$b, {
                          message: unref(form).errors.email
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "grid gap-2" }, [
                        createVNode(unref(_sfc_main$9), { for: "role" }, {
                          default: withCtx(() => [
                            createTextVNode("Rôle")
                          ]),
                          _: 1
                        }),
                        withDirectives(createVNode("select", {
                          id: "role",
                          "onUpdate:modelValue": ($event) => unref(form).role = $event,
                          class: "rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-gray-950 dark:text-gray-100 dark:ring-gray-800 sm:text-sm sm:leading-6",
                          required: ""
                        }, [
                          createVNode("option", { value: "" }, "Sélectionnez un rôle"),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (role) => {
                            return openBlock(), createBlock("option", {
                              key: role.id,
                              value: role.id
                            }, toDisplayString(role.name), 9, ["value"]);
                          }), 128))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(form).role]
                        ]),
                        createVNode(_sfc_main$b, {
                          message: unref(form).errors.role
                        }, null, 8, ["message"])
                      ])
                    ]),
                    createVNode(unref(_sfc_main$c), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), {
                          type: "submit",
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Envoyer l'invitation ")
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
      _push(`<div class="rounded-md border"><div class="px-4 py-3 sm:px-6"><h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"> Membres actifs </h3></div><div class="border-t"><ul role="list" class="divide-y divide-gray-200 dark:divide-gray-800"><!--[-->`);
      ssrRenderList(__props.members, (member) => {
        _push(`<li class="flex items-center justify-between gap-x-6 px-4 py-5 sm:px-6"><div class="min-w-0"><div class="flex items-start gap-x-3"><p class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">${ssrInterpolate(member.name)}</p><p class="${ssrRenderClass([member.role === "admin" ? "text-green-700 bg-green-50 ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20" : "text-gray-600 bg-gray-50 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20", "rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"])}">${ssrInterpolate(member.role === "admin" ? "Administrateur" : "Membre")}</p></div><div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 dark:text-gray-400"><p class="whitespace-nowrap">${ssrInterpolate(member.email)}</p></div></div><div class="flex flex-none items-center gap-x-4">`);
        if (member.id !== __props.organization.owner_id) {
          _push(ssrRenderComponent(unref(_sfc_main$4), {
            variant: "ghost",
            onClick: ($event) => removeMember(member)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Retirer `);
              } else {
                return [
                  createTextVNode(" Retirer ")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
      if (__props.pendingInvitations.length > 0) {
        _push(`<div class="rounded-md border"><div class="px-4 py-3 sm:px-6"><h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"> Invitations en attente </h3></div><div class="border-t"><ul role="list" class="divide-y divide-gray-200 dark:divide-gray-800"><!--[-->`);
        ssrRenderList(__props.pendingInvitations, (invitation) => {
          _push(`<li class="flex items-center justify-between gap-x-6 px-4 py-5 sm:px-6"><div class="min-w-0"><div class="flex items-start gap-x-3"><p class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">${ssrInterpolate(invitation.email)}</p><p class="${ssrRenderClass([invitation.role === "admin" ? "text-green-700 bg-green-50 ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20" : "text-gray-600 bg-gray-50 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20", "rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"])}">${ssrInterpolate(invitation.role === "admin" ? "Administrateur" : "Membre")}</p></div><div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 dark:text-gray-400"><p class="whitespace-nowrap">Invité le ${ssrInterpolate(formatDate(invitation.created_at))}</p></div></div><div class="flex flex-none items-center gap-x-4">`);
          _push(ssrRenderComponent(unref(_sfc_main$4), {
            variant: "ghost",
            onClick: ($event) => cancelInvitation(invitation)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Annuler `);
              } else {
                return [
                  createTextVNode(" Annuler ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Settings/Partials/MembersManagement.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
