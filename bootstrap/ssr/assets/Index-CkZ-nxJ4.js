import { ref, mergeProps, withCtx, unref, createTextVNode, createVNode, withModifiers, withDirectives, createBlock, openBlock, Fragment, renderList, toDisplayString, vModelSelect, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-B3jJCr1A.js";
import { _ as _sfc_main$2 } from "./OrganisationLayout-Gv4mqYIW.js";
import { useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$6 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$c } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$b } from "./Label-DLRZNtyA.js";
import { _ as _sfc_main$d } from "./InputError-BhTWS2NZ.js";
import { _ as _sfc_main$3 } from "./HeadingSmall-B1yfmTIh.js";
import { _ as _sfc_main$4, f as _sfc_main$5, a as _sfc_main$7, b as _sfc_main$8, c as _sfc_main$9, d as _sfc_main$a, e as _sfc_main$e } from "./DialogTrigger-CSFZvrzo.js";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
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
const _sfc_main = {
  __name: "Index",
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
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Gestion des membres" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<section class="space-y-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    title: "Gestion des membres",
                    description: "Invitez et gérez les membres de votre organisation."
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="space-y-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4), {
                    open: isModalOpen.value,
                    "onUpdate:open": ($event) => isModalOpen.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), { asChild: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$6), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Inviter un membre`);
                                  } else {
                                    return [
                                      createTextVNode("Inviter un membre")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$6), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Inviter un membre")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$7), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<form${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(_sfc_main$8), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$9), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Inviter un nouveau membre`);
                                        } else {
                                          return [
                                            createTextVNode("Inviter un nouveau membre")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(_sfc_main$a), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Envoyez une invitation par email pour rejoindre votre organisation. `);
                                        } else {
                                          return [
                                            createTextVNode(" Envoyez une invitation par email pour rejoindre votre organisation. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$9), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Inviter un nouveau membre")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$a), null, {
                                        default: withCtx(() => [
                                          createTextVNode(" Envoyez une invitation par email pour rejoindre votre organisation. ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="grid gap-4 py-4"${_scopeId4}><div class="grid gap-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(_sfc_main$b), { for: "email" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Adresse email`);
                                  } else {
                                    return [
                                      createTextVNode("Adresse email")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$c), {
                                id: "email",
                                type: "email",
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                placeholder: "email@example.com",
                                required: ""
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_sfc_main$d, {
                                message: unref(form).errors.email
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="grid gap-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(_sfc_main$b), { for: "role" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Rôle`);
                                  } else {
                                    return [
                                      createTextVNode("Rôle")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<select id="role" class="rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-gray-950 dark:text-gray-100 dark:ring-gray-800 sm:text-sm sm:leading-6" required${_scopeId4}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "") : ssrLooseEqual(unref(form).role, "")) ? " selected" : ""}${_scopeId4}>Sélectionnez un rôle</option><!--[-->`);
                              ssrRenderList(__props.roles, (role) => {
                                _push5(`<option${ssrRenderAttr("value", role.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, role.id) : ssrLooseEqual(unref(form).role, role.id)) ? " selected" : ""}${_scopeId4}>${ssrInterpolate(role.name)}</option>`);
                              });
                              _push5(`<!--]--></select>`);
                              _push5(ssrRenderComponent(_sfc_main$d, {
                                message: unref(form).errors.role
                              }, null, _parent5, _scopeId4));
                              _push5(`</div></div>`);
                              _push5(ssrRenderComponent(unref(_sfc_main$e), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$6), {
                                      type: "submit",
                                      disabled: unref(form).processing
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Envoyer l&#39;invitation `);
                                        } else {
                                          return [
                                            createTextVNode(" Envoyer l'invitation ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$6), {
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
                              }, _parent5, _scopeId4));
                              _push5(`</form>`);
                            } else {
                              return [
                                createVNode("form", {
                                  onSubmit: withModifiers(inviteMember, ["prevent"])
                                }, [
                                  createVNode(unref(_sfc_main$8), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$9), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Inviter un nouveau membre")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$a), null, {
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
                                      createVNode(unref(_sfc_main$b), { for: "email" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Adresse email")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$c), {
                                        id: "email",
                                        type: "email",
                                        modelValue: unref(form).email,
                                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                        placeholder: "email@example.com",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_sfc_main$d, {
                                        message: unref(form).errors.email
                                      }, null, 8, ["message"])
                                    ]),
                                    createVNode("div", { class: "grid gap-2" }, [
                                      createVNode(unref(_sfc_main$b), { for: "role" }, {
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
                                      createVNode(_sfc_main$d, {
                                        message: unref(form).errors.role
                                      }, null, 8, ["message"])
                                    ])
                                  ]),
                                  createVNode(unref(_sfc_main$e), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$6), {
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), { asChild: "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$6), null, {
                                default: withCtx(() => [
                                  createTextVNode("Inviter un membre")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createVNode("form", {
                                onSubmit: withModifiers(inviteMember, ["prevent"])
                              }, [
                                createVNode(unref(_sfc_main$8), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$9), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Inviter un nouveau membre")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$a), null, {
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
                                    createVNode(unref(_sfc_main$b), { for: "email" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Adresse email")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$c), {
                                      id: "email",
                                      type: "email",
                                      modelValue: unref(form).email,
                                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                      placeholder: "email@example.com",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_sfc_main$d, {
                                      message: unref(form).errors.email
                                    }, null, 8, ["message"])
                                  ]),
                                  createVNode("div", { class: "grid gap-2" }, [
                                    createVNode(unref(_sfc_main$b), { for: "role" }, {
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
                                    createVNode(_sfc_main$d, {
                                      message: unref(form).errors.role
                                    }, null, 8, ["message"])
                                  ])
                                ]),
                                createVNode(unref(_sfc_main$e), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$6), {
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
                  }, _parent3, _scopeId2));
                  _push3(`<div class="rounded-md border"${_scopeId2}><div class="px-4 py-3 sm:px-6"${_scopeId2}><h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"${_scopeId2}> Membres actifs </h3></div><div class="border-t"${_scopeId2}><ul role="list" class="divide-y divide-gray-200 dark:divide-gray-800"${_scopeId2}><!--[-->`);
                  ssrRenderList(__props.members, (member) => {
                    _push3(`<li class="flex items-center justify-between gap-x-6 px-4 py-5 sm:px-6"${_scopeId2}><div class="min-w-0"${_scopeId2}><div class="flex items-start gap-x-3"${_scopeId2}><p class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"${_scopeId2}>${ssrInterpolate(member.name)}</p><p class="${ssrRenderClass([member.role === "admin" ? "text-green-700 bg-green-50 ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20" : "text-gray-600 bg-gray-50 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20", "rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"])}"${_scopeId2}>${ssrInterpolate(member.role === "admin" ? "Administrateur" : "Membre")}</p></div><div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 dark:text-gray-400"${_scopeId2}><p class="whitespace-nowrap"${_scopeId2}>${ssrInterpolate(member.email)}</p></div></div><div class="flex flex-none items-center gap-x-4"${_scopeId2}>`);
                    if (member.id !== __props.organization.owner_id) {
                      _push3(ssrRenderComponent(unref(_sfc_main$6), {
                        variant: "ghost",
                        onClick: ($event) => removeMember(member)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Retirer `);
                          } else {
                            return [
                              createTextVNode(" Retirer ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></li>`);
                  });
                  _push3(`<!--]--></ul></div></div>`);
                  if (__props.pendingInvitations.length > 0) {
                    _push3(`<div class="rounded-md border"${_scopeId2}><div class="px-4 py-3 sm:px-6"${_scopeId2}><h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"${_scopeId2}> Invitations en attente </h3></div><div class="border-t"${_scopeId2}><ul role="list" class="divide-y divide-gray-200 dark:divide-gray-800"${_scopeId2}><!--[-->`);
                    ssrRenderList(__props.pendingInvitations, (invitation) => {
                      _push3(`<li class="flex items-center justify-between gap-x-6 px-4 py-5 sm:px-6"${_scopeId2}><div class="min-w-0"${_scopeId2}><div class="flex items-start gap-x-3"${_scopeId2}><p class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"${_scopeId2}>${ssrInterpolate(invitation.email)}</p><p class="${ssrRenderClass([invitation.role === "admin" ? "text-green-700 bg-green-50 ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20" : "text-gray-600 bg-gray-50 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20", "rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"])}"${_scopeId2}>${ssrInterpolate(invitation.role === "admin" ? "Administrateur" : "Membre")}</p></div><div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 dark:text-gray-400"${_scopeId2}><p class="whitespace-nowrap"${_scopeId2}>Invité le ${ssrInterpolate(formatDate(invitation.created_at))}</p></div></div><div class="flex flex-none items-center gap-x-4"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(_sfc_main$6), {
                        variant: "ghost",
                        onClick: ($event) => cancelInvitation(invitation)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Annuler `);
                          } else {
                            return [
                              createTextVNode(" Annuler ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></li>`);
                    });
                    _push3(`<!--]--></ul></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></section>`);
                } else {
                  return [
                    createVNode("section", { class: "space-y-6" }, [
                      createVNode(_sfc_main$3, {
                        title: "Gestion des membres",
                        description: "Invitez et gérez les membres de votre organisation."
                      }),
                      createVNode("div", { class: "space-y-4" }, [
                        createVNode(unref(_sfc_main$4), {
                          open: isModalOpen.value,
                          "onUpdate:open": ($event) => isModalOpen.value = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$5), { asChild: "" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$6), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Inviter un membre")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$7), null, {
                              default: withCtx(() => [
                                createVNode("form", {
                                  onSubmit: withModifiers(inviteMember, ["prevent"])
                                }, [
                                  createVNode(unref(_sfc_main$8), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$9), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Inviter un nouveau membre")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$a), null, {
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
                                      createVNode(unref(_sfc_main$b), { for: "email" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Adresse email")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$c), {
                                        id: "email",
                                        type: "email",
                                        modelValue: unref(form).email,
                                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                        placeholder: "email@example.com",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_sfc_main$d, {
                                        message: unref(form).errors.email
                                      }, null, 8, ["message"])
                                    ]),
                                    createVNode("div", { class: "grid gap-2" }, [
                                      createVNode(unref(_sfc_main$b), { for: "role" }, {
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
                                      createVNode(_sfc_main$d, {
                                        message: unref(form).errors.role
                                      }, null, 8, ["message"])
                                    ])
                                  ]),
                                  createVNode(unref(_sfc_main$e), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$6), {
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
                          ]),
                          _: 1
                        }, 8, ["open", "onUpdate:open"]),
                        createVNode("div", { class: "rounded-md border" }, [
                          createVNode("div", { class: "px-4 py-3 sm:px-6" }, [
                            createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-gray-100" }, " Membres actifs ")
                          ]),
                          createVNode("div", { class: "border-t" }, [
                            createVNode("ul", {
                              role: "list",
                              class: "divide-y divide-gray-200 dark:divide-gray-800"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.members, (member) => {
                                return openBlock(), createBlock("li", {
                                  key: member.id,
                                  class: "flex items-center justify-between gap-x-6 px-4 py-5 sm:px-6"
                                }, [
                                  createVNode("div", { class: "min-w-0" }, [
                                    createVNode("div", { class: "flex items-start gap-x-3" }, [
                                      createVNode("p", { class: "text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100" }, toDisplayString(member.name), 1),
                                      createVNode("p", {
                                        class: ["rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset", member.role === "admin" ? "text-green-700 bg-green-50 ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20" : "text-gray-600 bg-gray-50 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20"]
                                      }, toDisplayString(member.role === "admin" ? "Administrateur" : "Membre"), 3)
                                    ]),
                                    createVNode("div", { class: "mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 dark:text-gray-400" }, [
                                      createVNode("p", { class: "whitespace-nowrap" }, toDisplayString(member.email), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex flex-none items-center gap-x-4" }, [
                                    member.id !== __props.organization.owner_id ? (openBlock(), createBlock(unref(_sfc_main$6), {
                                      key: 0,
                                      variant: "ghost",
                                      onClick: ($event) => removeMember(member)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Retirer ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])) : createCommentVNode("", true)
                                  ])
                                ]);
                              }), 128))
                            ])
                          ])
                        ]),
                        __props.pendingInvitations.length > 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "rounded-md border"
                        }, [
                          createVNode("div", { class: "px-4 py-3 sm:px-6" }, [
                            createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-gray-100" }, " Invitations en attente ")
                          ]),
                          createVNode("div", { class: "border-t" }, [
                            createVNode("ul", {
                              role: "list",
                              class: "divide-y divide-gray-200 dark:divide-gray-800"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.pendingInvitations, (invitation) => {
                                return openBlock(), createBlock("li", {
                                  key: invitation.id,
                                  class: "flex items-center justify-between gap-x-6 px-4 py-5 sm:px-6"
                                }, [
                                  createVNode("div", { class: "min-w-0" }, [
                                    createVNode("div", { class: "flex items-start gap-x-3" }, [
                                      createVNode("p", { class: "text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100" }, toDisplayString(invitation.email), 1),
                                      createVNode("p", {
                                        class: ["rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset", invitation.role === "admin" ? "text-green-700 bg-green-50 ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20" : "text-gray-600 bg-gray-50 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20"]
                                      }, toDisplayString(invitation.role === "admin" ? "Administrateur" : "Membre"), 3)
                                    ]),
                                    createVNode("div", { class: "mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 dark:text-gray-400" }, [
                                      createVNode("p", { class: "whitespace-nowrap" }, "Invité le " + toDisplayString(formatDate(invitation.created_at)), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex flex-none items-center gap-x-4" }, [
                                    createVNode(unref(_sfc_main$6), {
                                      variant: "ghost",
                                      onClick: ($event) => cancelInvitation(invitation)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Annuler ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ]);
                              }), 128))
                            ])
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, null, {
                default: withCtx(() => [
                  createVNode("section", { class: "space-y-6" }, [
                    createVNode(_sfc_main$3, {
                      title: "Gestion des membres",
                      description: "Invitez et gérez les membres de votre organisation."
                    }),
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode(unref(_sfc_main$4), {
                        open: isModalOpen.value,
                        "onUpdate:open": ($event) => isModalOpen.value = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$5), { asChild: "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$6), null, {
                                default: withCtx(() => [
                                  createTextVNode("Inviter un membre")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createVNode("form", {
                                onSubmit: withModifiers(inviteMember, ["prevent"])
                              }, [
                                createVNode(unref(_sfc_main$8), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$9), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Inviter un nouveau membre")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$a), null, {
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
                                    createVNode(unref(_sfc_main$b), { for: "email" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Adresse email")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$c), {
                                      id: "email",
                                      type: "email",
                                      modelValue: unref(form).email,
                                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                      placeholder: "email@example.com",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_sfc_main$d, {
                                      message: unref(form).errors.email
                                    }, null, 8, ["message"])
                                  ]),
                                  createVNode("div", { class: "grid gap-2" }, [
                                    createVNode(unref(_sfc_main$b), { for: "role" }, {
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
                                    createVNode(_sfc_main$d, {
                                      message: unref(form).errors.role
                                    }, null, 8, ["message"])
                                  ])
                                ]),
                                createVNode(unref(_sfc_main$e), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$6), {
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
                        ]),
                        _: 1
                      }, 8, ["open", "onUpdate:open"]),
                      createVNode("div", { class: "rounded-md border" }, [
                        createVNode("div", { class: "px-4 py-3 sm:px-6" }, [
                          createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-gray-100" }, " Membres actifs ")
                        ]),
                        createVNode("div", { class: "border-t" }, [
                          createVNode("ul", {
                            role: "list",
                            class: "divide-y divide-gray-200 dark:divide-gray-800"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.members, (member) => {
                              return openBlock(), createBlock("li", {
                                key: member.id,
                                class: "flex items-center justify-between gap-x-6 px-4 py-5 sm:px-6"
                              }, [
                                createVNode("div", { class: "min-w-0" }, [
                                  createVNode("div", { class: "flex items-start gap-x-3" }, [
                                    createVNode("p", { class: "text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100" }, toDisplayString(member.name), 1),
                                    createVNode("p", {
                                      class: ["rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset", member.role === "admin" ? "text-green-700 bg-green-50 ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20" : "text-gray-600 bg-gray-50 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20"]
                                    }, toDisplayString(member.role === "admin" ? "Administrateur" : "Membre"), 3)
                                  ]),
                                  createVNode("div", { class: "mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 dark:text-gray-400" }, [
                                    createVNode("p", { class: "whitespace-nowrap" }, toDisplayString(member.email), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "flex flex-none items-center gap-x-4" }, [
                                  member.id !== __props.organization.owner_id ? (openBlock(), createBlock(unref(_sfc_main$6), {
                                    key: 0,
                                    variant: "ghost",
                                    onClick: ($event) => removeMember(member)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Retirer ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])) : createCommentVNode("", true)
                                ])
                              ]);
                            }), 128))
                          ])
                        ])
                      ]),
                      __props.pendingInvitations.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "rounded-md border"
                      }, [
                        createVNode("div", { class: "px-4 py-3 sm:px-6" }, [
                          createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-gray-100" }, " Invitations en attente ")
                        ]),
                        createVNode("div", { class: "border-t" }, [
                          createVNode("ul", {
                            role: "list",
                            class: "divide-y divide-gray-200 dark:divide-gray-800"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.pendingInvitations, (invitation) => {
                              return openBlock(), createBlock("li", {
                                key: invitation.id,
                                class: "flex items-center justify-between gap-x-6 px-4 py-5 sm:px-6"
                              }, [
                                createVNode("div", { class: "min-w-0" }, [
                                  createVNode("div", { class: "flex items-start gap-x-3" }, [
                                    createVNode("p", { class: "text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100" }, toDisplayString(invitation.email), 1),
                                    createVNode("p", {
                                      class: ["rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset", invitation.role === "admin" ? "text-green-700 bg-green-50 ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20" : "text-gray-600 bg-gray-50 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20"]
                                    }, toDisplayString(invitation.role === "admin" ? "Administrateur" : "Membre"), 3)
                                  ]),
                                  createVNode("div", { class: "mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 dark:text-gray-400" }, [
                                    createVNode("p", { class: "whitespace-nowrap" }, "Invité le " + toDisplayString(formatDate(invitation.created_at)), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "flex flex-none items-center gap-x-4" }, [
                                  createVNode(unref(_sfc_main$6), {
                                    variant: "ghost",
                                    onClick: ($event) => cancelInvitation(invitation)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Annuler ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ])
                              ]);
                            }), 128))
                          ])
                        ])
                      ])) : createCommentVNode("", true)
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
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Settings/Members/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
