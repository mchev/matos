import { withCtx, unref, createVNode, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Link, router } from "@inertiajs/vue3";
import { Plus, Tags, MoreHorizontal, Pencil, Trash2 } from "lucide-vue-next";
import { _ as _sfc_main$1 } from "./AdminLayout-CyOOAtqH.js";
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$6, d as _sfc_main$7 } from "./CardTitle-rMLiyiHU.js";
import { _ as _sfc_main$2 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$8 } from "./index-9VOASAGY.js";
import { _ as _sfc_main$9, a as _sfc_main$a, b as _sfc_main$b, c as _sfc_main$c, d as _sfc_main$d } from "./UserDropdown-C5kfPJJO.js";
import "class-variance-authority";
import "reka-ui";
import "@vueuse/core";
import "./Input-BNuRmWJk.js";
import "./Separator-C0fcDgz2.js";
import "clsx";
import "tailwind-merge";
import "@heroicons/vue/24/outline";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const deleteCategory = (categoryId) => {
      if (confirm("Are you sure you want to delete this category?")) {
        router.delete(route("admin.categories.destroy", categoryId));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-3xl font-bold tracking-tight"${_scopeId}>Categories</h1><p class="text-muted-foreground"${_scopeId}> Manage equipment categories and subcategories </p></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("admin.categories.create")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Plus), { class: "h-4 w-4 mr-2" }, null, _parent4, _scopeId3));
                        _push4(` Add Category `);
                      } else {
                        return [
                          createVNode(unref(Plus), { class: "h-4 w-4 mr-2" }),
                          createTextVNode(" Add Category ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), {
                      href: _ctx.route("admin.categories.create")
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Plus), { class: "h-4 w-4 mr-2" }),
                        createTextVNode(" Add Category ")
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
                              _push5(`All Categories`);
                            } else {
                              return [
                                createTextVNode("All Categories")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` A hierarchical list of all equipment categories `);
                            } else {
                              return [
                                createTextVNode(" A hierarchical list of all equipment categories ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createTextVNode("All Categories")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$6), null, {
                            default: withCtx(() => [
                              createTextVNode(" A hierarchical list of all equipment categories ")
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
                        _push4(`<div class="space-y-4"${_scopeId3}><!--[-->`);
                        ssrRenderList(__props.categories, (category) => {
                          _push4(`<div class="space-y-2"${_scopeId3}><div class="flex items-center space-x-4 p-3 rounded-lg border"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(Tags), { class: "h-5 w-5 text-muted-foreground" }, null, _parent4, _scopeId3));
                          _push4(`<div class="space-y-1 flex-1"${_scopeId3}><p class="text-sm font-medium leading-none"${_scopeId3}>${ssrInterpolate(category.name)}</p>`);
                          if (category.description) {
                            _push4(`<p class="text-sm text-muted-foreground"${_scopeId3}>${ssrInterpolate(category.description)}</p>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div><div class="flex items-center gap-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$8), { variant: "outline" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a, _b;
                              if (_push5) {
                                _push5(`${ssrInterpolate(((_a = category.children) == null ? void 0 : _a.length) || 0)} subcategories `);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(((_b = category.children) == null ? void 0 : _b.length) || 0) + " subcategories ", 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$9), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$a), { "as-child": "" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(_sfc_main$2), {
                                        variant: "ghost",
                                        class: "h-8 w-8 p-0"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(MoreHorizontal), { class: "h-4 w-4" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(MoreHorizontal), { class: "h-4 w-4" })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(_sfc_main$2), {
                                          variant: "ghost",
                                          class: "h-8 w-8 p-0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(MoreHorizontal), { class: "h-4 w-4" })
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$b), { align: "end" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(_sfc_main$c), { "as-child": "" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(Link), {
                                              href: _ctx.route("admin.categories.edit", category.id)
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(unref(Pencil), { class: "h-4 w-4 mr-2" }, null, _parent8, _scopeId7));
                                                  _push8(` Edit `);
                                                } else {
                                                  return [
                                                    createVNode(unref(Pencil), { class: "h-4 w-4 mr-2" }),
                                                    createTextVNode(" Edit ")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(Link), {
                                                href: _ctx.route("admin.categories.edit", category.id)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Pencil), { class: "h-4 w-4 mr-2" }),
                                                  createTextVNode(" Edit ")
                                                ]),
                                                _: 1
                                              }, 8, ["href"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(unref(_sfc_main$d), null, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(unref(_sfc_main$c), {
                                        onClick: ($event) => deleteCategory(category.id),
                                        class: "text-destructive focus:text-destructive"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(Trash2), { class: "h-4 w-4 mr-2" }, null, _parent7, _scopeId6));
                                            _push7(` Delete `);
                                          } else {
                                            return [
                                              createVNode(unref(Trash2), { class: "h-4 w-4 mr-2" }),
                                              createTextVNode(" Delete ")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(_sfc_main$c), { "as-child": "" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Link), {
                                              href: _ctx.route("admin.categories.edit", category.id)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Pencil), { class: "h-4 w-4 mr-2" }),
                                                createTextVNode(" Edit ")
                                              ]),
                                              _: 1
                                            }, 8, ["href"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$d)),
                                        createVNode(unref(_sfc_main$c), {
                                          onClick: ($event) => deleteCategory(category.id),
                                          class: "text-destructive focus:text-destructive"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Trash2), { class: "h-4 w-4 mr-2" }),
                                            createTextVNode(" Delete ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$a), { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$2), {
                                        variant: "ghost",
                                        class: "h-8 w-8 p-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(MoreHorizontal), { class: "h-4 w-4" })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$b), { align: "end" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$c), { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Link), {
                                            href: _ctx.route("admin.categories.edit", category.id)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Pencil), { class: "h-4 w-4 mr-2" }),
                                              createTextVNode(" Edit ")
                                            ]),
                                            _: 1
                                          }, 8, ["href"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(unref(_sfc_main$d)),
                                      createVNode(unref(_sfc_main$c), {
                                        onClick: ($event) => deleteCategory(category.id),
                                        class: "text-destructive focus:text-destructive"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Trash2), { class: "h-4 w-4 mr-2" }),
                                          createTextVNode(" Delete ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                          if (category.children && category.children.length > 0) {
                            _push4(`<div class="ml-8 space-y-2"${_scopeId3}><!--[-->`);
                            ssrRenderList(category.children, (subcategory) => {
                              _push4(`<div class="flex items-center space-x-4 p-3 rounded-lg border bg-muted/50"${_scopeId3}>`);
                              _push4(ssrRenderComponent(unref(Tags), { class: "h-4 w-4 text-muted-foreground" }, null, _parent4, _scopeId3));
                              _push4(`<div class="space-y-1 flex-1"${_scopeId3}><p class="text-sm font-medium leading-none"${_scopeId3}>${ssrInterpolate(subcategory.name)}</p>`);
                              if (subcategory.description) {
                                _push4(`<p class="text-sm text-muted-foreground"${_scopeId3}>${ssrInterpolate(subcategory.description)}</p>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div><div class="flex items-center gap-2"${_scopeId3}>`);
                              _push4(ssrRenderComponent(unref(_sfc_main$9), null, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(unref(_sfc_main$a), { "as-child": "" }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(unref(_sfc_main$2), {
                                            variant: "ghost",
                                            class: "h-8 w-8 p-0"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(unref(MoreHorizontal), { class: "h-4 w-4" }, null, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(unref(MoreHorizontal), { class: "h-4 w-4" })
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$2), {
                                              variant: "ghost",
                                              class: "h-8 w-8 p-0"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(MoreHorizontal), { class: "h-4 w-4" })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    _push5(ssrRenderComponent(unref(_sfc_main$b), { align: "end" }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(unref(_sfc_main$c), { "as-child": "" }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(unref(Link), {
                                                  href: _ctx.route("admin.categories.edit", subcategory.id)
                                                }, {
                                                  default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      _push8(ssrRenderComponent(unref(Pencil), { class: "h-4 w-4 mr-2" }, null, _parent8, _scopeId7));
                                                      _push8(` Edit `);
                                                    } else {
                                                      return [
                                                        createVNode(unref(Pencil), { class: "h-4 w-4 mr-2" }),
                                                        createTextVNode(" Edit ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(unref(Link), {
                                                    href: _ctx.route("admin.categories.edit", subcategory.id)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(Pencil), { class: "h-4 w-4 mr-2" }),
                                                      createTextVNode(" Edit ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["href"])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                          _push6(ssrRenderComponent(unref(_sfc_main$d), null, null, _parent6, _scopeId5));
                                          _push6(ssrRenderComponent(unref(_sfc_main$c), {
                                            onClick: ($event) => deleteCategory(subcategory.id),
                                            class: "text-destructive focus:text-destructive"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(unref(Trash2), { class: "h-4 w-4 mr-2" }, null, _parent7, _scopeId6));
                                                _push7(` Delete `);
                                              } else {
                                                return [
                                                  createVNode(unref(Trash2), { class: "h-4 w-4 mr-2" }),
                                                  createTextVNode(" Delete ")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$c), { "as-child": "" }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Link), {
                                                  href: _ctx.route("admin.categories.edit", subcategory.id)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Pencil), { class: "h-4 w-4 mr-2" }),
                                                    createTextVNode(" Edit ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["href"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$d)),
                                            createVNode(unref(_sfc_main$c), {
                                              onClick: ($event) => deleteCategory(subcategory.id),
                                              class: "text-destructive focus:text-destructive"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Trash2), { class: "h-4 w-4 mr-2" }),
                                                createTextVNode(" Delete ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$a), { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$2), {
                                            variant: "ghost",
                                            class: "h-8 w-8 p-0"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(MoreHorizontal), { class: "h-4 w-4" })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$b), { align: "end" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$c), { "as-child": "" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Link), {
                                                href: _ctx.route("admin.categories.edit", subcategory.id)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Pencil), { class: "h-4 w-4 mr-2" }),
                                                  createTextVNode(" Edit ")
                                                ]),
                                                _: 1
                                              }, 8, ["href"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$d)),
                                          createVNode(unref(_sfc_main$c), {
                                            onClick: ($event) => deleteCategory(subcategory.id),
                                            class: "text-destructive focus:text-destructive"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Trash2), { class: "h-4 w-4 mr-2" }),
                                              createTextVNode(" Delete ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</div></div>`);
                            });
                            _push4(`<!--]--></div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        });
                        _push4(`<!--]-->`);
                        if (__props.categories.length === 0) {
                          _push4(`<div class="text-center py-6"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(Tags), { class: "h-8 w-8 text-muted-foreground mx-auto mb-2" }, null, _parent4, _scopeId3));
                          _push4(`<p class="text-sm text-muted-foreground"${_scopeId3}>No categories found</p></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                              return openBlock(), createBlock("div", {
                                key: category.id,
                                class: "space-y-2"
                              }, [
                                createVNode("div", { class: "flex items-center space-x-4 p-3 rounded-lg border" }, [
                                  createVNode(unref(Tags), { class: "h-5 w-5 text-muted-foreground" }),
                                  createVNode("div", { class: "space-y-1 flex-1" }, [
                                    createVNode("p", { class: "text-sm font-medium leading-none" }, toDisplayString(category.name), 1),
                                    category.description ? (openBlock(), createBlock("p", {
                                      key: 0,
                                      class: "text-sm text-muted-foreground"
                                    }, toDisplayString(category.description), 1)) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode(unref(_sfc_main$8), { variant: "outline" }, {
                                      default: withCtx(() => {
                                        var _a;
                                        return [
                                          createTextVNode(toDisplayString(((_a = category.children) == null ? void 0 : _a.length) || 0) + " subcategories ", 1)
                                        ];
                                      }),
                                      _: 2
                                    }, 1024),
                                    createVNode(unref(_sfc_main$9), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$a), { "as-child": "" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$2), {
                                              variant: "ghost",
                                              class: "h-8 w-8 p-0"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(MoreHorizontal), { class: "h-4 w-4" })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$b), { align: "end" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$c), { "as-child": "" }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Link), {
                                                  href: _ctx.route("admin.categories.edit", category.id)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Pencil), { class: "h-4 w-4 mr-2" }),
                                                    createTextVNode(" Edit ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["href"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$d)),
                                            createVNode(unref(_sfc_main$c), {
                                              onClick: ($event) => deleteCategory(category.id),
                                              class: "text-destructive focus:text-destructive"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Trash2), { class: "h-4 w-4 mr-2" }),
                                                createTextVNode(" Delete ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ]),
                                category.children && category.children.length > 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "ml-8 space-y-2"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(category.children, (subcategory) => {
                                    return openBlock(), createBlock("div", {
                                      key: subcategory.id,
                                      class: "flex items-center space-x-4 p-3 rounded-lg border bg-muted/50"
                                    }, [
                                      createVNode(unref(Tags), { class: "h-4 w-4 text-muted-foreground" }),
                                      createVNode("div", { class: "space-y-1 flex-1" }, [
                                        createVNode("p", { class: "text-sm font-medium leading-none" }, toDisplayString(subcategory.name), 1),
                                        subcategory.description ? (openBlock(), createBlock("p", {
                                          key: 0,
                                          class: "text-sm text-muted-foreground"
                                        }, toDisplayString(subcategory.description), 1)) : createCommentVNode("", true)
                                      ]),
                                      createVNode("div", { class: "flex items-center gap-2" }, [
                                        createVNode(unref(_sfc_main$9), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$a), { "as-child": "" }, {
                                              default: withCtx(() => [
                                                createVNode(unref(_sfc_main$2), {
                                                  variant: "ghost",
                                                  class: "h-8 w-8 p-0"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(MoreHorizontal), { class: "h-4 w-4" })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$b), { align: "end" }, {
                                              default: withCtx(() => [
                                                createVNode(unref(_sfc_main$c), { "as-child": "" }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Link), {
                                                      href: _ctx.route("admin.categories.edit", subcategory.id)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(unref(Pencil), { class: "h-4 w-4 mr-2" }),
                                                        createTextVNode(" Edit ")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["href"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(unref(_sfc_main$d)),
                                                createVNode(unref(_sfc_main$c), {
                                                  onClick: ($event) => deleteCategory(subcategory.id),
                                                  class: "text-destructive focus:text-destructive"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Trash2), { class: "h-4 w-4 mr-2" }),
                                                    createTextVNode(" Delete ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ]);
                                  }), 128))
                                ])) : createCommentVNode("", true)
                              ]);
                            }), 128)),
                            __props.categories.length === 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-center py-6"
                            }, [
                              createVNode(unref(Tags), { class: "h-8 w-8 text-muted-foreground mx-auto mb-2" }),
                              createVNode("p", { class: "text-sm text-muted-foreground" }, "No categories found")
                            ])) : createCommentVNode("", true)
                          ])
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
                            createTextVNode("All Categories")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$6), null, {
                          default: withCtx(() => [
                            createTextVNode(" A hierarchical list of all equipment categories ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$7), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.id,
                              class: "space-y-2"
                            }, [
                              createVNode("div", { class: "flex items-center space-x-4 p-3 rounded-lg border" }, [
                                createVNode(unref(Tags), { class: "h-5 w-5 text-muted-foreground" }),
                                createVNode("div", { class: "space-y-1 flex-1" }, [
                                  createVNode("p", { class: "text-sm font-medium leading-none" }, toDisplayString(category.name), 1),
                                  category.description ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "text-sm text-muted-foreground"
                                  }, toDisplayString(category.description), 1)) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(unref(_sfc_main$8), { variant: "outline" }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createTextVNode(toDisplayString(((_a = category.children) == null ? void 0 : _a.length) || 0) + " subcategories ", 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$9), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$2), {
                                            variant: "ghost",
                                            class: "h-8 w-8 p-0"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(MoreHorizontal), { class: "h-4 w-4" })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$b), { align: "end" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$c), { "as-child": "" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Link), {
                                                href: _ctx.route("admin.categories.edit", category.id)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Pencil), { class: "h-4 w-4 mr-2" }),
                                                  createTextVNode(" Edit ")
                                                ]),
                                                _: 1
                                              }, 8, ["href"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$d)),
                                          createVNode(unref(_sfc_main$c), {
                                            onClick: ($event) => deleteCategory(category.id),
                                            class: "text-destructive focus:text-destructive"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Trash2), { class: "h-4 w-4 mr-2" }),
                                              createTextVNode(" Delete ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              category.children && category.children.length > 0 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "ml-8 space-y-2"
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(category.children, (subcategory) => {
                                  return openBlock(), createBlock("div", {
                                    key: subcategory.id,
                                    class: "flex items-center space-x-4 p-3 rounded-lg border bg-muted/50"
                                  }, [
                                    createVNode(unref(Tags), { class: "h-4 w-4 text-muted-foreground" }),
                                    createVNode("div", { class: "space-y-1 flex-1" }, [
                                      createVNode("p", { class: "text-sm font-medium leading-none" }, toDisplayString(subcategory.name), 1),
                                      subcategory.description ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "text-sm text-muted-foreground"
                                      }, toDisplayString(subcategory.description), 1)) : createCommentVNode("", true)
                                    ]),
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode(unref(_sfc_main$9), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$a), { "as-child": "" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$2), {
                                                variant: "ghost",
                                                class: "h-8 w-8 p-0"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(MoreHorizontal), { class: "h-4 w-4" })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$b), { align: "end" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$c), { "as-child": "" }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Link), {
                                                    href: _ctx.route("admin.categories.edit", subcategory.id)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(Pencil), { class: "h-4 w-4 mr-2" }),
                                                      createTextVNode(" Edit ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["href"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$d)),
                                              createVNode(unref(_sfc_main$c), {
                                                onClick: ($event) => deleteCategory(subcategory.id),
                                                class: "text-destructive focus:text-destructive"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Trash2), { class: "h-4 w-4 mr-2" }),
                                                  createTextVNode(" Delete ")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ]);
                                }), 128))
                              ])) : createCommentVNode("", true)
                            ]);
                          }), 128)),
                          __props.categories.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-center py-6"
                          }, [
                            createVNode(unref(Tags), { class: "h-8 w-8 text-muted-foreground mx-auto mb-2" }),
                            createVNode("p", { class: "text-sm text-muted-foreground" }, "No categories found")
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
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("h1", { class: "text-3xl font-bold tracking-tight" }, "Categories"),
                    createVNode("p", { class: "text-muted-foreground" }, " Manage equipment categories and subcategories ")
                  ]),
                  createVNode(unref(_sfc_main$2), { "as-child": "" }, {
                    default: withCtx(() => [
                      createVNode(unref(Link), {
                        href: _ctx.route("admin.categories.create")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Plus), { class: "h-4 w-4 mr-2" }),
                          createTextVNode(" Add Category ")
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
                            createTextVNode("All Categories")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$6), null, {
                          default: withCtx(() => [
                            createTextVNode(" A hierarchical list of all equipment categories ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$7), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.id,
                              class: "space-y-2"
                            }, [
                              createVNode("div", { class: "flex items-center space-x-4 p-3 rounded-lg border" }, [
                                createVNode(unref(Tags), { class: "h-5 w-5 text-muted-foreground" }),
                                createVNode("div", { class: "space-y-1 flex-1" }, [
                                  createVNode("p", { class: "text-sm font-medium leading-none" }, toDisplayString(category.name), 1),
                                  category.description ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "text-sm text-muted-foreground"
                                  }, toDisplayString(category.description), 1)) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(unref(_sfc_main$8), { variant: "outline" }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createTextVNode(toDisplayString(((_a = category.children) == null ? void 0 : _a.length) || 0) + " subcategories ", 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$9), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$2), {
                                            variant: "ghost",
                                            class: "h-8 w-8 p-0"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(MoreHorizontal), { class: "h-4 w-4" })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$b), { align: "end" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$c), { "as-child": "" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Link), {
                                                href: _ctx.route("admin.categories.edit", category.id)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Pencil), { class: "h-4 w-4 mr-2" }),
                                                  createTextVNode(" Edit ")
                                                ]),
                                                _: 1
                                              }, 8, ["href"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$d)),
                                          createVNode(unref(_sfc_main$c), {
                                            onClick: ($event) => deleteCategory(category.id),
                                            class: "text-destructive focus:text-destructive"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Trash2), { class: "h-4 w-4 mr-2" }),
                                              createTextVNode(" Delete ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              category.children && category.children.length > 0 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "ml-8 space-y-2"
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(category.children, (subcategory) => {
                                  return openBlock(), createBlock("div", {
                                    key: subcategory.id,
                                    class: "flex items-center space-x-4 p-3 rounded-lg border bg-muted/50"
                                  }, [
                                    createVNode(unref(Tags), { class: "h-4 w-4 text-muted-foreground" }),
                                    createVNode("div", { class: "space-y-1 flex-1" }, [
                                      createVNode("p", { class: "text-sm font-medium leading-none" }, toDisplayString(subcategory.name), 1),
                                      subcategory.description ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "text-sm text-muted-foreground"
                                      }, toDisplayString(subcategory.description), 1)) : createCommentVNode("", true)
                                    ]),
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode(unref(_sfc_main$9), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$a), { "as-child": "" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$2), {
                                                variant: "ghost",
                                                class: "h-8 w-8 p-0"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(MoreHorizontal), { class: "h-4 w-4" })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$b), { align: "end" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$c), { "as-child": "" }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Link), {
                                                    href: _ctx.route("admin.categories.edit", subcategory.id)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(Pencil), { class: "h-4 w-4 mr-2" }),
                                                      createTextVNode(" Edit ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["href"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(unref(_sfc_main$d)),
                                              createVNode(unref(_sfc_main$c), {
                                                onClick: ($event) => deleteCategory(subcategory.id),
                                                class: "text-destructive focus:text-destructive"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Trash2), { class: "h-4 w-4 mr-2" }),
                                                  createTextVNode(" Delete ")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ]);
                                }), 128))
                              ])) : createCommentVNode("", true)
                            ]);
                          }), 128)),
                          __props.categories.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-center py-6"
                          }, [
                            createVNode(unref(Tags), { class: "h-8 w-8 text-muted-foreground mx-auto mb-2" }),
                            createVNode("p", { class: "text-sm text-muted-foreground" }, "No categories found")
                          ])) : createCommentVNode("", true)
                        ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Admin/Categories/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
