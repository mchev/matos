import { defineComponent, unref, mergeProps, withCtx, renderSlot, createVNode, useSSRContext, ref, computed, watch, onMounted, createBlock, openBlock, toDisplayString, createTextVNode, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { reactiveOmit } from "@vueuse/core";
import { useForwardPropsEmits, SwitchRoot, SwitchThumb } from "reka-ui";
import { c as cn } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$2, a as _sfc_main$3, c as _sfc_main$4, e as _sfc_main$5, f as _sfc_main$6, d as _sfc_main$7 } from "./SelectValue-BSiknP0M.js";
import axios from "axios";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Switch",
  __ssrInlineRender: true,
  props: {
    defaultValue: { type: Boolean },
    modelValue: { type: [Boolean, null] },
    disabled: { type: Boolean },
    id: {},
    value: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SwitchRoot), mergeProps({ "data-slot": "switch" }, unref(forwarded), {
        class: unref(cn)(
          "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwitchThumb), {
              "data-slot": "switch-thumb",
              class: unref(cn)("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "thumb", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "thumb")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwitchThumb), {
                "data-slot": "switch-thumb",
                class: unref(cn)("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "thumb")
                ]),
                _: 3
              }, 8, ["class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/switch/Switch.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "CategorySelect",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: [String, Number, null],
      default: null
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const categories = ref([]);
    const flatCategories = computed(() => categories.value.flatMap((c) => [c, ...c.children || []]));
    const selectedCategory = computed(() => {
      return flatCategories.value.find((cat) => cat.id === internalValue.value) || null;
    });
    const internalValue = ref(props.modelValue);
    watch(() => props.modelValue, (v) => {
      internalValue.value = v;
    });
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        categories.value = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    onMounted(fetchCategories);
    const onSelect = (value) => {
      emit("update:modelValue", value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), {
        modelValue: internalValue.value,
        "onUpdate:modelValue": [($event) => internalValue.value = $event, onSelect]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (selectedCategory.value) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(selectedCategory.value.name)}</span>`);
                  } else {
                    _push3(`<span class="text-muted-foreground"${_scopeId2}>Sélectionner une catégorie</span>`);
                  }
                } else {
                  return [
                    selectedCategory.value ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(selectedCategory.value.name), 1)) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-muted-foreground"
                    }, "Sélectionner une catégorie"))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4), { class: "w-full max-h-72 overflow-y-auto" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(categories.value, (category) => {
                    _push3(ssrRenderComponent(unref(_sfc_main$5), {
                      key: category.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$6), { class: "uppercase font-bold" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(category.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(category.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(category.children, (child) => {
                            _push4(ssrRenderComponent(unref(_sfc_main$7), {
                              key: child.id,
                              value: child.id,
                              class: "pl-8"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(child.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(child.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(unref(_sfc_main$6), { class: "uppercase font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(category.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            (openBlock(true), createBlock(Fragment, null, renderList(category.children, (child) => {
                              return openBlock(), createBlock(unref(_sfc_main$7), {
                                key: child.id,
                                value: child.id,
                                class: "pl-8"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(child.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category) => {
                      return openBlock(), createBlock(unref(_sfc_main$5), {
                        key: category.id
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$6), { class: "uppercase font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(category.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          (openBlock(true), createBlock(Fragment, null, renderList(category.children, (child) => {
                            return openBlock(), createBlock(unref(_sfc_main$7), {
                              key: child.id,
                              value: child.id,
                              class: "pl-8"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(child.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$3), null, {
                default: withCtx(() => [
                  selectedCategory.value ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(selectedCategory.value.name), 1)) : (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-muted-foreground"
                  }, "Sélectionner une catégorie"))
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4), { class: "w-full max-h-72 overflow-y-auto" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category) => {
                    return openBlock(), createBlock(unref(_sfc_main$5), {
                      key: category.id
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6), { class: "uppercase font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(category.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        (openBlock(true), createBlock(Fragment, null, renderList(category.children, (child) => {
                          return openBlock(), createBlock(unref(_sfc_main$7), {
                            key: child.id,
                            value: child.id,
                            class: "pl-8"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(child.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/CategorySelect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
