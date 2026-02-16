import { defineComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext, computed, createTextVNode, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$4 } from "./AdminLayout-CyOOAtqH.js";
import { Users, Building2, Package } from "lucide-vue-next";
import { _ as _sfc_main$5, a as _sfc_main$6, b as _sfc_main$7, d as _sfc_main$8, c as _sfc_main$9 } from "./CardTitle-rMLiyiHU.js";
import { c as cn } from "./index-53Kg4F4g.js";
import { AvatarRoot, AvatarFallback, AvatarImage } from "reka-ui";
import { _ as _sfc_main$a } from "./index-9VOASAGY.js";
import "@inertiajs/vue3";
import "class-variance-authority";
import "@vueuse/core";
import "./Input-BNuRmWJk.js";
import "./UserDropdown-C5kfPJJO.js";
import "@heroicons/vue/24/outline";
import "./Separator-C0fcDgz2.js";
import "clsx";
import "tailwind-merge";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Avatar",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AvatarRoot), mergeProps({
        "data-slot": "avatar",
        class: unref(cn)("relative flex size-8 shrink-0 overflow-hidden rounded-full", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/avatar/Avatar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AvatarFallback",
  __ssrInlineRender: true,
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AvatarFallback), mergeProps({ "data-slot": "avatar-fallback" }, delegatedProps.value, {
        class: unref(cn)("bg-muted flex size-full items-center justify-center rounded-full", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/avatar/AvatarFallback.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AvatarImage",
  __ssrInlineRender: true,
  props: {
    src: {},
    referrerPolicy: {},
    crossOrigin: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AvatarImage), mergeProps({ "data-slot": "avatar-image" }, props, { class: "aspect-square size-full" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/avatar/AvatarImage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    stats: {
      type: Object,
      required: true
    },
    recent_users: {
      type: Array,
      required: true
    },
    recent_organizations: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const getInitials = (name) => {
      if (!name) return "?";
      return name.split(" ").map((word) => word.charAt(0)).join("").toUpperCase().slice(0, 2);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$4, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-3xl font-bold tracking-tight"${_scopeId}>Dashboard</h1><p class="text-muted-foreground"${_scopeId}> Welcome to your admin dashboard. Here&#39;s an overview of your platform. </p></div></div><div class="grid gap-4 md:grid-cols-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-sm font-medium" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Total Users`);
                            } else {
                              return [
                                createTextVNode("Total Users")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Users), { class: "h-4 w-4 text-muted-foreground" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7), { class: "text-sm font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode("Total Users")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Users), { class: "h-4 w-4 text-muted-foreground" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-2xl font-bold"${_scopeId3}>${ssrInterpolate(__props.stats.users_count)}</div><p class="text-xs text-muted-foreground"${_scopeId3}> Registered users on the platform </p>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(__props.stats.users_count), 1),
                          createVNode("p", { class: "text-xs text-muted-foreground" }, " Registered users on the platform ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), { class: "text-sm font-medium" }, {
                          default: withCtx(() => [
                            createTextVNode("Total Users")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Users), { class: "h-4 w-4 text-muted-foreground" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(__props.stats.users_count), 1),
                        createVNode("p", { class: "text-xs text-muted-foreground" }, " Registered users on the platform ")
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
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-sm font-medium" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Organizations`);
                            } else {
                              return [
                                createTextVNode("Organizations")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Building2), { class: "h-4 w-4 text-muted-foreground" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7), { class: "text-sm font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode("Organizations")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Building2), { class: "h-4 w-4 text-muted-foreground" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-2xl font-bold"${_scopeId3}>${ssrInterpolate(__props.stats.organizations_count)}</div><p class="text-xs text-muted-foreground"${_scopeId3}> Active organizations </p>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(__props.stats.organizations_count), 1),
                          createVNode("p", { class: "text-xs text-muted-foreground" }, " Active organizations ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), { class: "text-sm font-medium" }, {
                          default: withCtx(() => [
                            createTextVNode("Organizations")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Building2), { class: "h-4 w-4 text-muted-foreground" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(__props.stats.organizations_count), 1),
                        createVNode("p", { class: "text-xs text-muted-foreground" }, " Active organizations ")
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
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-sm font-medium" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Equipment`);
                            } else {
                              return [
                                createTextVNode("Equipment")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Package), { class: "h-4 w-4 text-muted-foreground" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7), { class: "text-sm font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode("Equipment")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Package), { class: "h-4 w-4 text-muted-foreground" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-2xl font-bold"${_scopeId3}>${ssrInterpolate(__props.stats.equipment_count)}</div><p class="text-xs text-muted-foreground"${_scopeId3}> Available equipment items </p>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(__props.stats.equipment_count), 1),
                          createVNode("p", { class: "text-xs text-muted-foreground" }, " Available equipment items ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), { class: "text-sm font-medium" }, {
                          default: withCtx(() => [
                            createTextVNode("Equipment")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Package), { class: "h-4 w-4 text-muted-foreground" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(__props.stats.equipment_count), 1),
                        createVNode("p", { class: "text-xs text-muted-foreground" }, " Available equipment items ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid gap-6 md:grid-cols-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Recent Users`);
                            } else {
                              return [
                                createTextVNode("Recent Users")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$9), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Latest registered users on the platform `);
                            } else {
                              return [
                                createTextVNode(" Latest registered users on the platform ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createTextVNode("Recent Users")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), null, {
                            default: withCtx(() => [
                              createTextVNode(" Latest registered users on the platform ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-4"${_scopeId3}><!--[-->`);
                        ssrRenderList(__props.recent_users, (user) => {
                          _push4(`<div class="flex items-center space-x-4"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$3), { class: "h-9 w-9" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (user.profile_photo_url) {
                                  _push5(ssrRenderComponent(unref(_sfc_main$1), {
                                    src: user.profile_photo_url,
                                    alt: user.name
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(ssrRenderComponent(unref(_sfc_main$2), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(getInitials(user.name))}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(getInitials(user.name)), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  user.profile_photo_url ? (openBlock(), createBlock(unref(_sfc_main$1), {
                                    key: 0,
                                    src: user.profile_photo_url,
                                    alt: user.name
                                  }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                  createVNode(unref(_sfc_main$2), null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(getInitials(user.name)), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<div class="space-y-1"${_scopeId3}><p class="text-sm font-medium leading-none"${_scopeId3}>${ssrInterpolate(user.name)}</p><p class="text-sm text-muted-foreground"${_scopeId3}>${ssrInterpolate(user.email)}</p></div><div class="ml-auto font-medium"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$a), { variant: "secondary" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a, _b;
                              if (_push5) {
                                _push5(`${ssrInterpolate(((_a = user.organizations) == null ? void 0 : _a.length) || 0)} orgs `);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(((_b = user.organizations) == null ? void 0 : _b.length) || 0) + " orgs ", 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        });
                        _push4(`<!--]-->`);
                        if (__props.recent_users.length === 0) {
                          _push4(`<div class="text-center py-6"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(Users), { class: "h-8 w-8 text-muted-foreground mx-auto mb-2" }, null, _parent4, _scopeId3));
                          _push4(`<p class="text-sm text-muted-foreground"${_scopeId3}>No users found</p></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.recent_users, (user) => {
                              return openBlock(), createBlock("div", {
                                key: user.id,
                                class: "flex items-center space-x-4"
                              }, [
                                createVNode(unref(_sfc_main$3), { class: "h-9 w-9" }, {
                                  default: withCtx(() => [
                                    user.profile_photo_url ? (openBlock(), createBlock(unref(_sfc_main$1), {
                                      key: 0,
                                      src: user.profile_photo_url,
                                      alt: user.name
                                    }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                    createVNode(unref(_sfc_main$2), null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(getInitials(user.name)), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "space-y-1" }, [
                                  createVNode("p", { class: "text-sm font-medium leading-none" }, toDisplayString(user.name), 1),
                                  createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(user.email), 1)
                                ]),
                                createVNode("div", { class: "ml-auto font-medium" }, [
                                  createVNode(unref(_sfc_main$a), { variant: "secondary" }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createTextVNode(toDisplayString(((_a = user.organizations) == null ? void 0 : _a.length) || 0) + " orgs ", 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024)
                                ])
                              ]);
                            }), 128)),
                            __props.recent_users.length === 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-center py-6"
                            }, [
                              createVNode(unref(Users), { class: "h-8 w-8 text-muted-foreground mx-auto mb-2" }),
                              createVNode("p", { class: "text-sm text-muted-foreground" }, "No users found")
                            ])) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            createTextVNode("Recent Users")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$9), null, {
                          default: withCtx(() => [
                            createTextVNode(" Latest registered users on the platform ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.recent_users, (user) => {
                            return openBlock(), createBlock("div", {
                              key: user.id,
                              class: "flex items-center space-x-4"
                            }, [
                              createVNode(unref(_sfc_main$3), { class: "h-9 w-9" }, {
                                default: withCtx(() => [
                                  user.profile_photo_url ? (openBlock(), createBlock(unref(_sfc_main$1), {
                                    key: 0,
                                    src: user.profile_photo_url,
                                    alt: user.name
                                  }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                  createVNode(unref(_sfc_main$2), null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(getInitials(user.name)), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("p", { class: "text-sm font-medium leading-none" }, toDisplayString(user.name), 1),
                                createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(user.email), 1)
                              ]),
                              createVNode("div", { class: "ml-auto font-medium" }, [
                                createVNode(unref(_sfc_main$a), { variant: "secondary" }, {
                                  default: withCtx(() => {
                                    var _a;
                                    return [
                                      createTextVNode(toDisplayString(((_a = user.organizations) == null ? void 0 : _a.length) || 0) + " orgs ", 1)
                                    ];
                                  }),
                                  _: 2
                                }, 1024)
                              ])
                            ]);
                          }), 128)),
                          __props.recent_users.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-center py-6"
                          }, [
                            createVNode(unref(Users), { class: "h-8 w-8 text-muted-foreground mx-auto mb-2" }),
                            createVNode("p", { class: "text-sm text-muted-foreground" }, "No users found")
                          ])) : createCommentVNode("", true)
                        ])
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
                  _push3(ssrRenderComponent(unref(_sfc_main$6), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Recent Organizations`);
                            } else {
                              return [
                                createTextVNode("Recent Organizations")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$9), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Latest organizations that joined the platform `);
                            } else {
                              return [
                                createTextVNode(" Latest organizations that joined the platform ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createTextVNode("Recent Organizations")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), null, {
                            default: withCtx(() => [
                              createTextVNode(" Latest organizations that joined the platform ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-4"${_scopeId3}><!--[-->`);
                        ssrRenderList(__props.recent_organizations, (org) => {
                          _push4(`<div class="flex items-center space-x-4"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$3), { class: "h-9 w-9" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (org.logo_url) {
                                  _push5(ssrRenderComponent(unref(_sfc_main$1), {
                                    src: org.logo_url,
                                    alt: org.name
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(ssrRenderComponent(unref(_sfc_main$2), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(getInitials(org.name))}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(getInitials(org.name)), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  org.logo_url ? (openBlock(), createBlock(unref(_sfc_main$1), {
                                    key: 0,
                                    src: org.logo_url,
                                    alt: org.name
                                  }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                  createVNode(unref(_sfc_main$2), null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(getInitials(org.name)), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<div class="space-y-1"${_scopeId3}><p class="text-sm font-medium leading-none"${_scopeId3}>${ssrInterpolate(org.name)}</p><p class="text-sm text-muted-foreground"${_scopeId3}>${ssrInterpolate(org.city)}, ${ssrInterpolate(org.state)}</p></div><div class="ml-auto font-medium"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$a), { variant: "outline" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(org.type || "Organization")}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(org.type || "Organization"), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        });
                        _push4(`<!--]-->`);
                        if (__props.recent_organizations.length === 0) {
                          _push4(`<div class="text-center py-6"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(Building2), { class: "h-8 w-8 text-muted-foreground mx-auto mb-2" }, null, _parent4, _scopeId3));
                          _push4(`<p class="text-sm text-muted-foreground"${_scopeId3}>No organizations found</p></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.recent_organizations, (org) => {
                              return openBlock(), createBlock("div", {
                                key: org.id,
                                class: "flex items-center space-x-4"
                              }, [
                                createVNode(unref(_sfc_main$3), { class: "h-9 w-9" }, {
                                  default: withCtx(() => [
                                    org.logo_url ? (openBlock(), createBlock(unref(_sfc_main$1), {
                                      key: 0,
                                      src: org.logo_url,
                                      alt: org.name
                                    }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                    createVNode(unref(_sfc_main$2), null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(getInitials(org.name)), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "space-y-1" }, [
                                  createVNode("p", { class: "text-sm font-medium leading-none" }, toDisplayString(org.name), 1),
                                  createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(org.city) + ", " + toDisplayString(org.state), 1)
                                ]),
                                createVNode("div", { class: "ml-auto font-medium" }, [
                                  createVNode(unref(_sfc_main$a), { variant: "outline" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(org.type || "Organization"), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]);
                            }), 128)),
                            __props.recent_organizations.length === 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-center py-6"
                            }, [
                              createVNode(unref(Building2), { class: "h-8 w-8 text-muted-foreground mx-auto mb-2" }),
                              createVNode("p", { class: "text-sm text-muted-foreground" }, "No organizations found")
                            ])) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            createTextVNode("Recent Organizations")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$9), null, {
                          default: withCtx(() => [
                            createTextVNode(" Latest organizations that joined the platform ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.recent_organizations, (org) => {
                            return openBlock(), createBlock("div", {
                              key: org.id,
                              class: "flex items-center space-x-4"
                            }, [
                              createVNode(unref(_sfc_main$3), { class: "h-9 w-9" }, {
                                default: withCtx(() => [
                                  org.logo_url ? (openBlock(), createBlock(unref(_sfc_main$1), {
                                    key: 0,
                                    src: org.logo_url,
                                    alt: org.name
                                  }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                  createVNode(unref(_sfc_main$2), null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(getInitials(org.name)), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("p", { class: "text-sm font-medium leading-none" }, toDisplayString(org.name), 1),
                                createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(org.city) + ", " + toDisplayString(org.state), 1)
                              ]),
                              createVNode("div", { class: "ml-auto font-medium" }, [
                                createVNode(unref(_sfc_main$a), { variant: "outline" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(org.type || "Organization"), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]);
                          }), 128)),
                          __props.recent_organizations.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-center py-6"
                          }, [
                            createVNode(unref(Building2), { class: "h-8 w-8 text-muted-foreground mx-auto mb-2" }),
                            createVNode("p", { class: "text-sm text-muted-foreground" }, "No organizations found")
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("h1", { class: "text-3xl font-bold tracking-tight" }, "Dashboard"),
                    createVNode("p", { class: "text-muted-foreground" }, " Welcome to your admin dashboard. Here's an overview of your platform. ")
                  ])
                ]),
                createVNode("div", { class: "grid gap-4 md:grid-cols-3" }, [
                  createVNode(unref(_sfc_main$5), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$6), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$7), { class: "text-sm font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode("Total Users")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Users), { class: "h-4 w-4 text-muted-foreground" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$8), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(__props.stats.users_count), 1),
                          createVNode("p", { class: "text-xs text-muted-foreground" }, " Registered users on the platform ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$5), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$6), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$7), { class: "text-sm font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode("Organizations")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Building2), { class: "h-4 w-4 text-muted-foreground" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$8), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(__props.stats.organizations_count), 1),
                          createVNode("p", { class: "text-xs text-muted-foreground" }, " Active organizations ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$5), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$6), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$7), { class: "text-sm font-medium" }, {
                            default: withCtx(() => [
                              createTextVNode("Equipment")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Package), { class: "h-4 w-4 text-muted-foreground" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$8), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(__props.stats.equipment_count), 1),
                          createVNode("p", { class: "text-xs text-muted-foreground" }, " Available equipment items ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid gap-6 md:grid-cols-2" }, [
                  createVNode(unref(_sfc_main$5), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$6), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createTextVNode("Recent Users")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), null, {
                            default: withCtx(() => [
                              createTextVNode(" Latest registered users on the platform ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$8), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "space-y-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.recent_users, (user) => {
                              return openBlock(), createBlock("div", {
                                key: user.id,
                                class: "flex items-center space-x-4"
                              }, [
                                createVNode(unref(_sfc_main$3), { class: "h-9 w-9" }, {
                                  default: withCtx(() => [
                                    user.profile_photo_url ? (openBlock(), createBlock(unref(_sfc_main$1), {
                                      key: 0,
                                      src: user.profile_photo_url,
                                      alt: user.name
                                    }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                    createVNode(unref(_sfc_main$2), null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(getInitials(user.name)), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "space-y-1" }, [
                                  createVNode("p", { class: "text-sm font-medium leading-none" }, toDisplayString(user.name), 1),
                                  createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(user.email), 1)
                                ]),
                                createVNode("div", { class: "ml-auto font-medium" }, [
                                  createVNode(unref(_sfc_main$a), { variant: "secondary" }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createTextVNode(toDisplayString(((_a = user.organizations) == null ? void 0 : _a.length) || 0) + " orgs ", 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024)
                                ])
                              ]);
                            }), 128)),
                            __props.recent_users.length === 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-center py-6"
                            }, [
                              createVNode(unref(Users), { class: "h-8 w-8 text-muted-foreground mx-auto mb-2" }),
                              createVNode("p", { class: "text-sm text-muted-foreground" }, "No users found")
                            ])) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$5), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$6), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createTextVNode("Recent Organizations")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), null, {
                            default: withCtx(() => [
                              createTextVNode(" Latest organizations that joined the platform ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$8), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "space-y-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.recent_organizations, (org) => {
                              return openBlock(), createBlock("div", {
                                key: org.id,
                                class: "flex items-center space-x-4"
                              }, [
                                createVNode(unref(_sfc_main$3), { class: "h-9 w-9" }, {
                                  default: withCtx(() => [
                                    org.logo_url ? (openBlock(), createBlock(unref(_sfc_main$1), {
                                      key: 0,
                                      src: org.logo_url,
                                      alt: org.name
                                    }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                    createVNode(unref(_sfc_main$2), null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(getInitials(org.name)), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "space-y-1" }, [
                                  createVNode("p", { class: "text-sm font-medium leading-none" }, toDisplayString(org.name), 1),
                                  createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(org.city) + ", " + toDisplayString(org.state), 1)
                                ]),
                                createVNode("div", { class: "ml-auto font-medium" }, [
                                  createVNode(unref(_sfc_main$a), { variant: "outline" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(org.type || "Organization"), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]);
                            }), 128)),
                            __props.recent_organizations.length === 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-center py-6"
                            }, [
                              createVNode(unref(Building2), { class: "h-8 w-8 text-muted-foreground mx-auto mb-2" }),
                              createVNode("p", { class: "text-sm text-muted-foreground" }, "No organizations found")
                            ])) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Admin/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
