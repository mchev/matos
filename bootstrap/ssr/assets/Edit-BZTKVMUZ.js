import { withCtx, unref, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useForm, Link } from "@inertiajs/vue3";
import { ArrowLeft, Loader2 } from "lucide-vue-next";
import { _ as _sfc_main$1 } from "./AdminLayout-CyOOAtqH.js";
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$6, d as _sfc_main$7 } from "./CardTitle-rMLiyiHU.js";
import { _ as _sfc_main$2 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$9 } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$8 } from "./Label-DLRZNtyA.js";
import { _ as _sfc_main$f } from "./Checkbox-DGgTWiqd.js";
import { _ as _sfc_main$a, a as _sfc_main$b, b as _sfc_main$c, c as _sfc_main$d, d as _sfc_main$e } from "./SelectValue-BSiknP0M.js";
import "class-variance-authority";
import "reka-ui";
import "@vueuse/core";
import "./UserDropdown-C5kfPJJO.js";
import "@heroicons/vue/24/outline";
import "./Separator-C0fcDgz2.js";
import "clsx";
import "tailwind-merge";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      required: true
    },
    organizations: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    var _a, _b;
    const props = __props;
    const form = useForm({
      name: props.user.name,
      email: props.user.email,
      organization_id: ((_b = (_a = props.user.organizations) == null ? void 0 : _a[0]) == null ? void 0 : _b.id) || "",
      is_admin: props.user.is_admin || false
    });
    const submit = () => {
      form.put(route("admin.users.update", props.user.id));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-3xl font-bold tracking-tight"${_scopeId}>Edit User</h1><p class="text-muted-foreground"${_scopeId}> Update user information and settings </p></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              variant: "outline",
              "as-child": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("admin.users.index")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ArrowLeft), { class: "h-4 w-4 mr-2" }, null, _parent4, _scopeId3));
                        _push4(` Back to Users `);
                      } else {
                        return [
                          createVNode(unref(ArrowLeft), { class: "h-4 w-4 mr-2" }),
                          createTextVNode(" Back to Users ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), {
                      href: _ctx.route("admin.users.index")
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ArrowLeft), { class: "h-4 w-4 mr-2" }),
                        createTextVNode(" Back to Users ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`User Information`);
                            } else {
                              return [
                                createTextVNode("User Information")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Update the user&#39;s details and permissions `);
                            } else {
                              return [
                                createTextVNode(" Update the user's details and permissions ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createTextVNode("User Information")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$6), null, {
                            default: withCtx(() => [
                              createTextVNode(" Update the user's details and permissions ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$7), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<form class="space-y-6"${_scopeId3}><div class="grid gap-6 md:grid-cols-2"${_scopeId3}><div class="space-y-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), { for: "name" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Name`);
                            } else {
                              return [
                                createTextVNode("Name")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$9), {
                          id: "name",
                          modelValue: unref(form).name,
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          type: "text",
                          placeholder: "Enter full name",
                          class: { "border-destructive": unref(form).errors.name }
                        }, null, _parent4, _scopeId3));
                        if (unref(form).errors.name) {
                          _push4(`<p class="text-sm text-destructive"${_scopeId3}>${ssrInterpolate(unref(form).errors.name)}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div class="space-y-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), { for: "email" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Email`);
                            } else {
                              return [
                                createTextVNode("Email")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$9), {
                          id: "email",
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          type: "email",
                          placeholder: "Enter email address",
                          class: { "border-destructive": unref(form).errors.email }
                        }, null, _parent4, _scopeId3));
                        if (unref(form).errors.email) {
                          _push4(`<p class="text-sm text-destructive"${_scopeId3}>${ssrInterpolate(unref(form).errors.email)}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div class="space-y-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), { for: "organization" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Organization`);
                            } else {
                              return [
                                createTextVNode("Organization")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$a), {
                          modelValue: unref(form).organization_id,
                          "onUpdate:modelValue": ($event) => unref(form).organization_id = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$b), {
                                class: { "border-destructive": unref(form).errors.organization_id }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$c), { placeholder: "Select an organization" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$c), { placeholder: "Select an organization" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$d), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(__props.organizations, (org) => {
                                      _push6(ssrRenderComponent(unref(_sfc_main$e), {
                                        key: org.id,
                                        value: org.id
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(org.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(org.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.organizations, (org) => {
                                        return openBlock(), createBlock(unref(_sfc_main$e), {
                                          key: org.id,
                                          value: org.id
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(org.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$b), {
                                  class: { "border-destructive": unref(form).errors.organization_id }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$c), { placeholder: "Select an organization" })
                                  ]),
                                  _: 1
                                }, 8, ["class"]),
                                createVNode(unref(_sfc_main$d), null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.organizations, (org) => {
                                      return openBlock(), createBlock(unref(_sfc_main$e), {
                                        key: org.id,
                                        value: org.id
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(org.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(form).errors.organization_id) {
                          _push4(`<p class="text-sm text-destructive"${_scopeId3}>${ssrInterpolate(unref(form).errors.organization_id)}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div></div><div class="flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$f), {
                          id: "is_admin",
                          checked: unref(form).is_admin,
                          "onUpdate:checked": ($event) => unref(form).is_admin = $event
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), { for: "is_admin" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Admin privileges`);
                            } else {
                              return [
                                createTextVNode("Admin privileges")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="flex justify-end space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$2), {
                          type: "button",
                          variant: "outline",
                          "as-child": ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Link), {
                                href: _ctx.route("admin.users.index")
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Cancel `);
                                  } else {
                                    return [
                                      createTextVNode(" Cancel ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Link), {
                                  href: _ctx.route("admin.users.index")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Cancel ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$2), {
                          type: "submit",
                          disabled: unref(form).processing
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (unref(form).processing) {
                                _push5(ssrRenderComponent(unref(Loader2), { class: "h-4 w-4 mr-2 animate-spin" }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(` Update User `);
                            } else {
                              return [
                                unref(form).processing ? (openBlock(), createBlock(unref(Loader2), {
                                  key: 0,
                                  class: "h-4 w-4 mr-2 animate-spin"
                                })) : createCommentVNode("", true),
                                createTextVNode(" Update User ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></form>`);
                      } else {
                        return [
                          createVNode("form", {
                            onSubmit: withModifiers(submit, ["prevent"]),
                            class: "space-y-6"
                          }, [
                            createVNode("div", { class: "grid gap-6 md:grid-cols-2" }, [
                              createVNode("div", { class: "space-y-2" }, [
                                createVNode(unref(_sfc_main$8), { for: "name" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Name")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$9), {
                                  id: "name",
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  type: "text",
                                  placeholder: "Enter full name",
                                  class: { "border-destructive": unref(form).errors.name }
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                unref(form).errors.name ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-sm text-destructive"
                                }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "space-y-2" }, [
                                createVNode(unref(_sfc_main$8), { for: "email" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Email")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$9), {
                                  id: "email",
                                  modelValue: unref(form).email,
                                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                  type: "email",
                                  placeholder: "Enter email address",
                                  class: { "border-destructive": unref(form).errors.email }
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                unref(form).errors.email ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-sm text-destructive"
                                }, toDisplayString(unref(form).errors.email), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "space-y-2" }, [
                                createVNode(unref(_sfc_main$8), { for: "organization" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Organization")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$a), {
                                  modelValue: unref(form).organization_id,
                                  "onUpdate:modelValue": ($event) => unref(form).organization_id = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$b), {
                                      class: { "border-destructive": unref(form).errors.organization_id }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$c), { placeholder: "Select an organization" })
                                      ]),
                                      _: 1
                                    }, 8, ["class"]),
                                    createVNode(unref(_sfc_main$d), null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.organizations, (org) => {
                                          return openBlock(), createBlock(unref(_sfc_main$e), {
                                            key: org.id,
                                            value: org.id
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(org.name), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"]),
                                unref(form).errors.organization_id ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-sm text-destructive"
                                }, toDisplayString(unref(form).errors.organization_id), 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$f), {
                                id: "is_admin",
                                checked: unref(form).is_admin,
                                "onUpdate:checked": ($event) => unref(form).is_admin = $event
                              }, null, 8, ["checked", "onUpdate:checked"]),
                              createVNode(unref(_sfc_main$8), { for: "is_admin" }, {
                                default: withCtx(() => [
                                  createTextVNode("Admin privileges")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex justify-end space-x-2" }, [
                              createVNode(unref(_sfc_main$2), {
                                type: "button",
                                variant: "outline",
                                "as-child": ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Link), {
                                    href: _ctx.route("admin.users.index")
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Cancel ")
                                    ]),
                                    _: 1
                                  }, 8, ["href"])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$2), {
                                type: "submit",
                                disabled: unref(form).processing
                              }, {
                                default: withCtx(() => [
                                  unref(form).processing ? (openBlock(), createBlock(unref(Loader2), {
                                    key: 0,
                                    class: "h-4 w-4 mr-2 animate-spin"
                                  })) : createCommentVNode("", true),
                                  createTextVNode(" Update User ")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ])
                          ], 32)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createTextVNode("User Information")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$6), null, {
                          default: withCtx(() => [
                            createTextVNode(" Update the user's details and permissions ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$7), null, {
                      default: withCtx(() => [
                        createVNode("form", {
                          onSubmit: withModifiers(submit, ["prevent"]),
                          class: "space-y-6"
                        }, [
                          createVNode("div", { class: "grid gap-6 md:grid-cols-2" }, [
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode(unref(_sfc_main$8), { for: "name" }, {
                                default: withCtx(() => [
                                  createTextVNode("Name")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$9), {
                                id: "name",
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                type: "text",
                                placeholder: "Enter full name",
                                class: { "border-destructive": unref(form).errors.name }
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              unref(form).errors.name ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode(unref(_sfc_main$8), { for: "email" }, {
                                default: withCtx(() => [
                                  createTextVNode("Email")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$9), {
                                id: "email",
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                type: "email",
                                placeholder: "Enter email address",
                                class: { "border-destructive": unref(form).errors.email }
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              unref(form).errors.email ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.email), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode(unref(_sfc_main$8), { for: "organization" }, {
                                default: withCtx(() => [
                                  createTextVNode("Organization")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$a), {
                                modelValue: unref(form).organization_id,
                                "onUpdate:modelValue": ($event) => unref(form).organization_id = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$b), {
                                    class: { "border-destructive": unref(form).errors.organization_id }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$c), { placeholder: "Select an organization" })
                                    ]),
                                    _: 1
                                  }, 8, ["class"]),
                                  createVNode(unref(_sfc_main$d), null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.organizations, (org) => {
                                        return openBlock(), createBlock(unref(_sfc_main$e), {
                                          key: org.id,
                                          value: org.id
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(org.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              unref(form).errors.organization_id ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.organization_id), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$f), {
                              id: "is_admin",
                              checked: unref(form).is_admin,
                              "onUpdate:checked": ($event) => unref(form).is_admin = $event
                            }, null, 8, ["checked", "onUpdate:checked"]),
                            createVNode(unref(_sfc_main$8), { for: "is_admin" }, {
                              default: withCtx(() => [
                                createTextVNode("Admin privileges")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex justify-end space-x-2" }, [
                            createVNode(unref(_sfc_main$2), {
                              type: "button",
                              variant: "outline",
                              "as-child": ""
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Link), {
                                  href: _ctx.route("admin.users.index")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Cancel ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$2), {
                              type: "submit",
                              disabled: unref(form).processing
                            }, {
                              default: withCtx(() => [
                                unref(form).processing ? (openBlock(), createBlock(unref(Loader2), {
                                  key: 0,
                                  class: "h-4 w-4 mr-2 animate-spin"
                                })) : createCommentVNode("", true),
                                createTextVNode(" Update User ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ])
                        ], 32)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("h1", { class: "text-3xl font-bold tracking-tight" }, "Edit User"),
                    createVNode("p", { class: "text-muted-foreground" }, " Update user information and settings ")
                  ]),
                  createVNode(unref(_sfc_main$2), {
                    variant: "outline",
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Link), {
                        href: _ctx.route("admin.users.index")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ArrowLeft), { class: "h-4 w-4 mr-2" }),
                          createTextVNode(" Back to Users ")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(unref(_sfc_main$3), null, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$4), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createTextVNode("User Information")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$6), null, {
                          default: withCtx(() => [
                            createTextVNode(" Update the user's details and permissions ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$7), null, {
                      default: withCtx(() => [
                        createVNode("form", {
                          onSubmit: withModifiers(submit, ["prevent"]),
                          class: "space-y-6"
                        }, [
                          createVNode("div", { class: "grid gap-6 md:grid-cols-2" }, [
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode(unref(_sfc_main$8), { for: "name" }, {
                                default: withCtx(() => [
                                  createTextVNode("Name")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$9), {
                                id: "name",
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                type: "text",
                                placeholder: "Enter full name",
                                class: { "border-destructive": unref(form).errors.name }
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              unref(form).errors.name ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode(unref(_sfc_main$8), { for: "email" }, {
                                default: withCtx(() => [
                                  createTextVNode("Email")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$9), {
                                id: "email",
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                type: "email",
                                placeholder: "Enter email address",
                                class: { "border-destructive": unref(form).errors.email }
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              unref(form).errors.email ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.email), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode(unref(_sfc_main$8), { for: "organization" }, {
                                default: withCtx(() => [
                                  createTextVNode("Organization")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$a), {
                                modelValue: unref(form).organization_id,
                                "onUpdate:modelValue": ($event) => unref(form).organization_id = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$b), {
                                    class: { "border-destructive": unref(form).errors.organization_id }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$c), { placeholder: "Select an organization" })
                                    ]),
                                    _: 1
                                  }, 8, ["class"]),
                                  createVNode(unref(_sfc_main$d), null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.organizations, (org) => {
                                        return openBlock(), createBlock(unref(_sfc_main$e), {
                                          key: org.id,
                                          value: org.id
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(org.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              unref(form).errors.organization_id ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.organization_id), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$f), {
                              id: "is_admin",
                              checked: unref(form).is_admin,
                              "onUpdate:checked": ($event) => unref(form).is_admin = $event
                            }, null, 8, ["checked", "onUpdate:checked"]),
                            createVNode(unref(_sfc_main$8), { for: "is_admin" }, {
                              default: withCtx(() => [
                                createTextVNode("Admin privileges")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex justify-end space-x-2" }, [
                            createVNode(unref(_sfc_main$2), {
                              type: "button",
                              variant: "outline",
                              "as-child": ""
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Link), {
                                  href: _ctx.route("admin.users.index")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Cancel ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$2), {
                              type: "submit",
                              disabled: unref(form).processing
                            }, {
                              default: withCtx(() => [
                                unref(form).processing ? (openBlock(), createBlock(unref(Loader2), {
                                  key: 0,
                                  class: "h-4 w-4 mr-2 animate-spin"
                                })) : createCommentVNode("", true),
                                createTextVNode(" Update User ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ])
                        ], 32)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Admin/Users/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
