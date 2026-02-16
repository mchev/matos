import { withCtx, unref, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useForm, Link } from "@inertiajs/vue3";
import { ArrowLeft, Loader2 } from "lucide-vue-next";
import { _ as _sfc_main$1 } from "./AdminLayout-CyOOAtqH.js";
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$6, d as _sfc_main$7 } from "./CardTitle-rMLiyiHU.js";
import { _ as _sfc_main$2 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$9 } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$8 } from "./Label-DLRZNtyA.js";
import { _ as _sfc_main$f } from "./Textarea-DxMXW1ER.js";
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
    category: {
      type: Object,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const availableParents = props.categories.filter((cat) => {
      return cat.id !== props.category.id && !isDescendant(cat, props.category);
    });
    function isDescendant(category, targetCategory) {
      if (!category.children) return false;
      return category.children.some(
        (child) => child.id === targetCategory.id || isDescendant(child, targetCategory)
      );
    }
    const form = useForm({
      name: props.category.name,
      description: props.category.description || "",
      parent_id: props.category.parent_id || null,
      order: props.category.order || ""
    });
    const submit = () => {
      form.put(route("admin.categories.update", props.category.id));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-3xl font-bold tracking-tight"${_scopeId}>Edit Category</h1><p class="text-muted-foreground"${_scopeId}> Update category information and settings </p></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              variant: "outline",
              "as-child": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("admin.categories.index")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ArrowLeft), { class: "h-4 w-4 mr-2" }, null, _parent4, _scopeId3));
                        _push4(` Back to Categories `);
                      } else {
                        return [
                          createVNode(unref(ArrowLeft), { class: "h-4 w-4 mr-2" }),
                          createTextVNode(" Back to Categories ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), {
                      href: _ctx.route("admin.categories.index")
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ArrowLeft), { class: "h-4 w-4 mr-2" }),
                        createTextVNode(" Back to Categories ")
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
                              _push5(`Category Information`);
                            } else {
                              return [
                                createTextVNode("Category Information")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Update the category&#39;s details and hierarchy `);
                            } else {
                              return [
                                createTextVNode(" Update the category's details and hierarchy ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createTextVNode("Category Information")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$6), null, {
                            default: withCtx(() => [
                              createTextVNode(" Update the category's details and hierarchy ")
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
                          placeholder: "Enter category name",
                          class: { "border-destructive": unref(form).errors.name }
                        }, null, _parent4, _scopeId3));
                        if (unref(form).errors.name) {
                          _push4(`<p class="text-sm text-destructive"${_scopeId3}>${ssrInterpolate(unref(form).errors.name)}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div class="space-y-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), { for: "parent_id" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Parent Category (Optional)`);
                            } else {
                              return [
                                createTextVNode("Parent Category (Optional)")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$a), {
                          modelValue: unref(form).parent_id,
                          "onUpdate:modelValue": ($event) => unref(form).parent_id = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$b), {
                                class: { "border-destructive": unref(form).errors.parent_id }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$c), { placeholder: "Select parent category" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$c), { placeholder: "Select parent category" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$d), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$e), { value: null }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`No parent (Top level)`);
                                        } else {
                                          return [
                                            createTextVNode("No parent (Top level)")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(availableParents), (category) => {
                                      _push6(ssrRenderComponent(unref(_sfc_main$e), {
                                        key: category.id,
                                        value: category.id
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(category.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(category.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$e), { value: null }, {
                                        default: withCtx(() => [
                                          createTextVNode("No parent (Top level)")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(availableParents), (category) => {
                                        return openBlock(), createBlock(unref(_sfc_main$e), {
                                          key: category.id,
                                          value: category.id
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(category.name), 1)
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
                                  class: { "border-destructive": unref(form).errors.parent_id }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$c), { placeholder: "Select parent category" })
                                  ]),
                                  _: 1
                                }, 8, ["class"]),
                                createVNode(unref(_sfc_main$d), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$e), { value: null }, {
                                      default: withCtx(() => [
                                        createTextVNode("No parent (Top level)")
                                      ]),
                                      _: 1
                                    }),
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(availableParents), (category) => {
                                      return openBlock(), createBlock(unref(_sfc_main$e), {
                                        key: category.id,
                                        value: category.id
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(category.name), 1)
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
                        if (unref(form).errors.parent_id) {
                          _push4(`<p class="text-sm text-destructive"${_scopeId3}>${ssrInterpolate(unref(form).errors.parent_id)}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div></div><div class="space-y-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), { for: "description" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Description`);
                            } else {
                              return [
                                createTextVNode("Description")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$f), {
                          id: "description",
                          modelValue: unref(form).description,
                          "onUpdate:modelValue": ($event) => unref(form).description = $event,
                          placeholder: "Enter category description",
                          class: { "border-destructive": unref(form).errors.description },
                          rows: "3"
                        }, null, _parent4, _scopeId3));
                        if (unref(form).errors.description) {
                          _push4(`<p class="text-sm text-destructive"${_scopeId3}>${ssrInterpolate(unref(form).errors.description)}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div class="space-y-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), { for: "order" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Display Order`);
                            } else {
                              return [
                                createTextVNode("Display Order")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$9), {
                          id: "order",
                          modelValue: unref(form).order,
                          "onUpdate:modelValue": ($event) => unref(form).order = $event,
                          type: "number",
                          placeholder: "Enter display order",
                          class: { "border-destructive": unref(form).errors.order }
                        }, null, _parent4, _scopeId3));
                        if (unref(form).errors.order) {
                          _push4(`<p class="text-sm text-destructive"${_scopeId3}>${ssrInterpolate(unref(form).errors.order)}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div class="flex justify-end space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$2), {
                          type: "button",
                          variant: "outline",
                          "as-child": ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Link), {
                                href: _ctx.route("admin.categories.index")
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
                                  href: _ctx.route("admin.categories.index")
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
                              _push5(` Update Category `);
                            } else {
                              return [
                                unref(form).processing ? (openBlock(), createBlock(unref(Loader2), {
                                  key: 0,
                                  class: "h-4 w-4 mr-2 animate-spin"
                                })) : createCommentVNode("", true),
                                createTextVNode(" Update Category ")
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
                                  placeholder: "Enter category name",
                                  class: { "border-destructive": unref(form).errors.name }
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                unref(form).errors.name ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-sm text-destructive"
                                }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "space-y-2" }, [
                                createVNode(unref(_sfc_main$8), { for: "parent_id" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Parent Category (Optional)")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$a), {
                                  modelValue: unref(form).parent_id,
                                  "onUpdate:modelValue": ($event) => unref(form).parent_id = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$b), {
                                      class: { "border-destructive": unref(form).errors.parent_id }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$c), { placeholder: "Select parent category" })
                                      ]),
                                      _: 1
                                    }, 8, ["class"]),
                                    createVNode(unref(_sfc_main$d), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$e), { value: null }, {
                                          default: withCtx(() => [
                                            createTextVNode("No parent (Top level)")
                                          ]),
                                          _: 1
                                        }),
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(availableParents), (category) => {
                                          return openBlock(), createBlock(unref(_sfc_main$e), {
                                            key: category.id,
                                            value: category.id
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(category.name), 1)
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
                                unref(form).errors.parent_id ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-sm text-destructive"
                                }, toDisplayString(unref(form).errors.parent_id), 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode(unref(_sfc_main$8), { for: "description" }, {
                                default: withCtx(() => [
                                  createTextVNode("Description")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$f), {
                                id: "description",
                                modelValue: unref(form).description,
                                "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                placeholder: "Enter category description",
                                class: { "border-destructive": unref(form).errors.description },
                                rows: "3"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              unref(form).errors.description ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.description), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode(unref(_sfc_main$8), { for: "order" }, {
                                default: withCtx(() => [
                                  createTextVNode("Display Order")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$9), {
                                id: "order",
                                modelValue: unref(form).order,
                                "onUpdate:modelValue": ($event) => unref(form).order = $event,
                                type: "number",
                                placeholder: "Enter display order",
                                class: { "border-destructive": unref(form).errors.order }
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              unref(form).errors.order ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.order), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "flex justify-end space-x-2" }, [
                              createVNode(unref(_sfc_main$2), {
                                type: "button",
                                variant: "outline",
                                "as-child": ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Link), {
                                    href: _ctx.route("admin.categories.index")
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
                                  createTextVNode(" Update Category ")
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
                            createTextVNode("Category Information")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$6), null, {
                          default: withCtx(() => [
                            createTextVNode(" Update the category's details and hierarchy ")
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
                                placeholder: "Enter category name",
                                class: { "border-destructive": unref(form).errors.name }
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              unref(form).errors.name ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode(unref(_sfc_main$8), { for: "parent_id" }, {
                                default: withCtx(() => [
                                  createTextVNode("Parent Category (Optional)")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$a), {
                                modelValue: unref(form).parent_id,
                                "onUpdate:modelValue": ($event) => unref(form).parent_id = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$b), {
                                    class: { "border-destructive": unref(form).errors.parent_id }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$c), { placeholder: "Select parent category" })
                                    ]),
                                    _: 1
                                  }, 8, ["class"]),
                                  createVNode(unref(_sfc_main$d), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$e), { value: null }, {
                                        default: withCtx(() => [
                                          createTextVNode("No parent (Top level)")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(availableParents), (category) => {
                                        return openBlock(), createBlock(unref(_sfc_main$e), {
                                          key: category.id,
                                          value: category.id
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(category.name), 1)
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
                              unref(form).errors.parent_id ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.parent_id), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode(unref(_sfc_main$8), { for: "description" }, {
                              default: withCtx(() => [
                                createTextVNode("Description")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$f), {
                              id: "description",
                              modelValue: unref(form).description,
                              "onUpdate:modelValue": ($event) => unref(form).description = $event,
                              placeholder: "Enter category description",
                              class: { "border-destructive": unref(form).errors.description },
                              rows: "3"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                            unref(form).errors.description ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-sm text-destructive"
                            }, toDisplayString(unref(form).errors.description), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode(unref(_sfc_main$8), { for: "order" }, {
                              default: withCtx(() => [
                                createTextVNode("Display Order")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$9), {
                              id: "order",
                              modelValue: unref(form).order,
                              "onUpdate:modelValue": ($event) => unref(form).order = $event,
                              type: "number",
                              placeholder: "Enter display order",
                              class: { "border-destructive": unref(form).errors.order }
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                            unref(form).errors.order ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-sm text-destructive"
                            }, toDisplayString(unref(form).errors.order), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "flex justify-end space-x-2" }, [
                            createVNode(unref(_sfc_main$2), {
                              type: "button",
                              variant: "outline",
                              "as-child": ""
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Link), {
                                  href: _ctx.route("admin.categories.index")
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
                                createTextVNode(" Update Category ")
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
                    createVNode("h1", { class: "text-3xl font-bold tracking-tight" }, "Edit Category"),
                    createVNode("p", { class: "text-muted-foreground" }, " Update category information and settings ")
                  ]),
                  createVNode(unref(_sfc_main$2), {
                    variant: "outline",
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Link), {
                        href: _ctx.route("admin.categories.index")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ArrowLeft), { class: "h-4 w-4 mr-2" }),
                          createTextVNode(" Back to Categories ")
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
                            createTextVNode("Category Information")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$6), null, {
                          default: withCtx(() => [
                            createTextVNode(" Update the category's details and hierarchy ")
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
                                placeholder: "Enter category name",
                                class: { "border-destructive": unref(form).errors.name }
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              unref(form).errors.name ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode(unref(_sfc_main$8), { for: "parent_id" }, {
                                default: withCtx(() => [
                                  createTextVNode("Parent Category (Optional)")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$a), {
                                modelValue: unref(form).parent_id,
                                "onUpdate:modelValue": ($event) => unref(form).parent_id = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$b), {
                                    class: { "border-destructive": unref(form).errors.parent_id }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$c), { placeholder: "Select parent category" })
                                    ]),
                                    _: 1
                                  }, 8, ["class"]),
                                  createVNode(unref(_sfc_main$d), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$e), { value: null }, {
                                        default: withCtx(() => [
                                          createTextVNode("No parent (Top level)")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(availableParents), (category) => {
                                        return openBlock(), createBlock(unref(_sfc_main$e), {
                                          key: category.id,
                                          value: category.id
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(category.name), 1)
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
                              unref(form).errors.parent_id ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.parent_id), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode(unref(_sfc_main$8), { for: "description" }, {
                              default: withCtx(() => [
                                createTextVNode("Description")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$f), {
                              id: "description",
                              modelValue: unref(form).description,
                              "onUpdate:modelValue": ($event) => unref(form).description = $event,
                              placeholder: "Enter category description",
                              class: { "border-destructive": unref(form).errors.description },
                              rows: "3"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                            unref(form).errors.description ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-sm text-destructive"
                            }, toDisplayString(unref(form).errors.description), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode(unref(_sfc_main$8), { for: "order" }, {
                              default: withCtx(() => [
                                createTextVNode("Display Order")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$9), {
                              id: "order",
                              modelValue: unref(form).order,
                              "onUpdate:modelValue": ($event) => unref(form).order = $event,
                              type: "number",
                              placeholder: "Enter display order",
                              class: { "border-destructive": unref(form).errors.order }
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                            unref(form).errors.order ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-sm text-destructive"
                            }, toDisplayString(unref(form).errors.order), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "flex justify-end space-x-2" }, [
                            createVNode(unref(_sfc_main$2), {
                              type: "button",
                              variant: "outline",
                              "as-child": ""
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Link), {
                                  href: _ctx.route("admin.categories.index")
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
                                createTextVNode(" Update Category ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Admin/Categories/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
