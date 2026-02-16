import { defineComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext, ref, computed, createVNode, resolveDynamicComponent, createBlock, openBlock, createTextVNode, toDisplayString, createCommentVNode, Fragment, renderList, withModifiers, withDirectives, vShow } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { useForm, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$8 } from "./AppLayout-B3jJCr1A.js";
import { _ as _sfc_main$a } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$c } from "./Textarea-DxMXW1ER.js";
import { _ as _sfc_main$d, a as _sfc_main$e, b as _sfc_main$f, c as _sfc_main$g, d as _sfc_main$h } from "./SelectValue-BSiknP0M.js";
import { _ as _sfc_main$b, a as _sfc_main$i } from "./CategorySelect-BOFqdaRy.js";
import { c as cn, _ as _sfc_main$j } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$9 } from "./Label-DLRZNtyA.js";
import { reactiveOmit } from "@vueuse/core";
import { useForwardPropsEmits, StepperRoot, useForwardProps, StepperDescription, StepperIndicator, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from "reka-ui";
import { ClipboardList, Settings, Image, Euro, Sparkles, CheckCircle, AlertCircle, XCircle, Plus, ArrowLeft, ArrowRight } from "lucide-vue-next";
import { S as Spinner } from "./spinner-C4dsHuCt.js";
import vueFilePond from "vue-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js";
import FilePondPluginImagePreview from "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.esm.js";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "@heroicons/vue/24/outline";
import "./index-9VOASAGY.js";
import "class-variance-authority";
import "vue-sonner";
import "axios";
import "clsx";
import "tailwind-merge";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Stepper",
  __ssrInlineRender: true,
  props: {
    defaultValue: {},
    orientation: {},
    dir: {},
    modelValue: {},
    linear: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(StepperRoot), mergeProps({
        class: unref(cn)(
          "flex gap-2",
          props.class
        )
      }, unref(forwarded), _attrs), {
        default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", slotProps, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", slotProps)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/stepper/Stepper.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "StepperDescription",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(StepperDescription), mergeProps(unref(forwarded), {
        class: unref(cn)("text-xs text-muted-foreground", props.class)
      }, _attrs), {
        default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", slotProps, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", slotProps)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/stepper/StepperDescription.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "StepperIndicator",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(StepperIndicator), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "inline-flex items-center justify-center rounded-full text-muted-foreground/50 w-8 h-8",
          // Disabled
          "group-data-[disabled]:text-muted-foreground group-data-[disabled]:opacity-50",
          // Active
          "group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground",
          // Completed
          "group-data-[state=completed]:bg-accent group-data-[state=completed]:text-accent-foreground",
          props.class
        )
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/stepper/StepperIndicator.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "StepperItem",
  __ssrInlineRender: true,
  props: {
    step: {},
    disabled: { type: Boolean },
    completed: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(StepperItem), mergeProps(unref(forwarded), {
        class: unref(cn)("flex items-center gap-2 group data-[disabled]:pointer-events-none", props.class)
      }, _attrs), {
        default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", slotProps, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", slotProps)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/stepper/StepperItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "StepperSeparator",
  __ssrInlineRender: true,
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(StepperSeparator), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "bg-muted",
          // Disabled
          "group-data-[disabled]:bg-muted group-data-[disabled]:opacity-50",
          // Completed
          "group-data-[state=completed]:bg-accent-foreground",
          props.class
        )
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/stepper/StepperSeparator.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "StepperTitle",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(StepperTitle), mergeProps(unref(forwarded), {
        class: unref(cn)("text-md font-semibold whitespace-nowrap", props.class)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/stepper/StepperTitle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "StepperTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(StepperTrigger), mergeProps(unref(forwarded), {
        class: unref(cn)("p-1 flex flex-col items-center text-center gap-1 rounded-md", props.class)
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/stepper/StepperTrigger.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    organization: {
      type: Object,
      required: true
    },
    depots: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const FilePond = vueFilePond(
      FilePondPluginFileValidateType,
      FilePondPluginImagePreview,
      FilePondPluginImageExifOrientation
    );
    const steps = [
      {
        value: 0,
        name: "general",
        label: "Informations générales",
        icon: ClipboardList,
        description: "Description du matériel"
      },
      {
        value: 1,
        name: "storage",
        label: "État et stockage",
        icon: Settings,
        description: "Quantité et lieu de stockage"
      },
      {
        value: 2,
        name: "images",
        label: "Photos",
        icon: Image,
        description: "Ajoutez des photos"
      },
      {
        value: 3,
        name: "pricing",
        label: "Tarification",
        icon: Euro,
        description: "Conditions de location"
      }
    ];
    const currentStep = ref(0);
    const currentStepName = computed(() => steps[currentStep.value].name);
    const canGoPrevious = computed(() => currentStep.value > 0);
    const canGoNext = computed(() => currentStep.value < steps.length - 1);
    const isLastStep = computed(() => currentStep.value === steps.length - 1);
    const isFirstStep = computed(() => currentStep.value === 0);
    const previousStep = () => {
      if (canGoPrevious.value) {
        currentStep.value--;
      }
    };
    const nextStep = () => {
      if (canGoNext.value) {
        currentStep.value++;
      }
    };
    const form = useForm({
      name: "",
      description: "",
      brand: "",
      category_id: null,
      depot_id: null,
      condition: "good",
      quantity: 1,
      purchase_price: 0,
      rental_price: 0,
      deposit_amount: 0,
      is_available: true,
      requires_deposit: true,
      is_rentable: true,
      specifications: {},
      images: []
    });
    const handleFilePondInit = () => {
      console.log("FilePond initialized");
    };
    const handleFilePondAddFile = (error, file) => {
      if (error) {
        console.error("Error adding file:", error);
        return;
      }
      form.images.push(file.file);
    };
    const handleFilePondRemoveFile = (error, file) => {
      if (error) {
        console.error("Error removing file:", error);
        return;
      }
      const index = form.images.findIndex((f) => f === file.file);
      if (index !== -1) {
        form.images.splice(index, 1);
      }
    };
    const handleFilePondReorderFiles = (files) => {
      form.images = files.map((file) => file.file);
    };
    const handlePriceInput = (e, field) => {
      let value = e.target.value;
      value = value.replace(",", ".").replace(/[^\d.]/g, "");
      const parts = value.split(".");
      if (parts.length > 2) {
        value = parts[0] + "." + parts.slice(1).join("");
      }
      form[field] = value;
      e.target.value = value.replace(".", ",");
    };
    const submit = () => {
      const data = { ...form };
      Object.keys(data).forEach((key) => {
        if (key.endsWith("_price") || key.endsWith("_amount")) {
          if (data[key] === "" || data[key] === null) {
            data[key] = "0.00";
          } else {
            data[key] = String(data[key]).replace(",", ".");
          }
        }
      });
      form.transform(() => data).post(route("app.organizations.equipments.store", props.organization));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$8, mergeProps({
        title: "Ajouter du matériel - " + __props.organization.name
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center"${_scopeId}><div${_scopeId}><h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Ajouter du matériel </h2></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("app.organizations.equipments.index", __props.organization),
              class: "inline-flex items-center bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ArrowLeft), { class: "w-4 h-4 mr-2" }, null, _parent3, _scopeId2));
                  _push3(` Retour à la liste `);
                } else {
                  return [
                    createVNode(unref(ArrowLeft), { class: "w-4 h-4 mr-2" }),
                    createTextVNode(" Retour à la liste ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center" }, [
                createVNode("div", null, [
                  createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Ajouter du matériel ")
                ]),
                createVNode(unref(Link), {
                  href: _ctx.route("app.organizations.equipments.index", __props.organization),
                  class: "inline-flex items-center bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 transition-colors"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(ArrowLeft), { class: "w-4 h-4 mr-2" }),
                    createTextVNode(" Retour à la liste ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-6xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-card text-card-foreground rounded-lg border shadow-sm overflow-hidden"${_scopeId}><div class="w-full bg-muted/10"${_scopeId}><div class="h-1 bg-primary transition-all duration-300 ease-in-out" style="${ssrRenderStyle({ width: (currentStep.value + 1) / steps.length * 100 + "%" })}"${_scopeId}></div></div><div class="px-2 py-3 sm:px-6 sm:py-4 bg-muted/5 border-b overflow-x-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$7), {
              modelValue: currentStep.value,
              "onUpdate:modelValue": ($event) => currentStep.value = $event,
              class: "w-full min-w-[720px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between w-full"${_scopeId2}><!--[-->`);
                  ssrRenderList(steps, (step, index) => {
                    _push3(ssrRenderComponent(unref(_sfc_main$4), {
                      key: step.value,
                      step: index,
                      class: "flex-1 px-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$1), {
                            class: "w-full group",
                            onClick: ($event) => currentStep.value = step.value
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex items-start gap-3"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(_sfc_main$5), {
                                  class: [
                                    "mt-0.5 size-7 flex items-center justify-center rounded-full border transition-colors shrink-0",
                                    currentStep.value === step.value ? "bg-primary border-primary text-white" : "bg-background border-muted-foreground/30"
                                  ]
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      ssrRenderVNode(_push6, createVNode(resolveDynamicComponent(step.icon), { class: "w-4 h-4" }, null), _parent6, _scopeId5);
                                    } else {
                                      return [
                                        (openBlock(), createBlock(resolveDynamicComponent(step.icon), { class: "w-4 h-4" }))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<div class="flex flex-col items-start gap-0.5 min-w-0"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(_sfc_main$2), {
                                  class: [
                                    "text-sm font-medium transition-colors",
                                    currentStep.value === step.value ? "text-primary" : "text-foreground/80"
                                  ]
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(step.label)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(step.label), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$6), { class: "text-xs text-left text-muted-foreground/75" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(step.description)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(step.description), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-start gap-3" }, [
                                    createVNode(unref(_sfc_main$5), {
                                      class: [
                                        "mt-0.5 size-7 flex items-center justify-center rounded-full border transition-colors shrink-0",
                                        currentStep.value === step.value ? "bg-primary border-primary text-white" : "bg-background border-muted-foreground/30"
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(resolveDynamicComponent(step.icon), { class: "w-4 h-4" }))
                                      ]),
                                      _: 2
                                    }, 1032, ["class"]),
                                    createVNode("div", { class: "flex flex-col items-start gap-0.5 min-w-0" }, [
                                      createVNode(unref(_sfc_main$2), {
                                        class: [
                                          "text-sm font-medium transition-colors",
                                          currentStep.value === step.value ? "text-primary" : "text-foreground/80"
                                        ]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(step.label), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["class"]),
                                      createVNode(unref(_sfc_main$6), { class: "text-xs text-left text-muted-foreground/75" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(step.description), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          if (index < steps.length - 1) {
                            _push4(ssrRenderComponent(unref(_sfc_main$3), { class: "bg-muted-foreground/20" }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode(unref(_sfc_main$1), {
                              class: "w-full group",
                              onClick: ($event) => currentStep.value = step.value
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-start gap-3" }, [
                                  createVNode(unref(_sfc_main$5), {
                                    class: [
                                      "mt-0.5 size-7 flex items-center justify-center rounded-full border transition-colors shrink-0",
                                      currentStep.value === step.value ? "bg-primary border-primary text-white" : "bg-background border-muted-foreground/30"
                                    ]
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(resolveDynamicComponent(step.icon), { class: "w-4 h-4" }))
                                    ]),
                                    _: 2
                                  }, 1032, ["class"]),
                                  createVNode("div", { class: "flex flex-col items-start gap-0.5 min-w-0" }, [
                                    createVNode(unref(_sfc_main$2), {
                                      class: [
                                        "text-sm font-medium transition-colors",
                                        currentStep.value === step.value ? "text-primary" : "text-foreground/80"
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(step.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"]),
                                    createVNode(unref(_sfc_main$6), { class: "text-xs text-left text-muted-foreground/75" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(step.description), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            index < steps.length - 1 ? (openBlock(), createBlock(unref(_sfc_main$3), {
                              key: 0,
                              class: "bg-muted-foreground/20"
                            })) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between w-full" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(steps, (step, index) => {
                        return createVNode(unref(_sfc_main$4), {
                          key: step.value,
                          step: index,
                          class: "flex-1 px-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$1), {
                              class: "w-full group",
                              onClick: ($event) => currentStep.value = step.value
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-start gap-3" }, [
                                  createVNode(unref(_sfc_main$5), {
                                    class: [
                                      "mt-0.5 size-7 flex items-center justify-center rounded-full border transition-colors shrink-0",
                                      currentStep.value === step.value ? "bg-primary border-primary text-white" : "bg-background border-muted-foreground/30"
                                    ]
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(resolveDynamicComponent(step.icon), { class: "w-4 h-4" }))
                                    ]),
                                    _: 2
                                  }, 1032, ["class"]),
                                  createVNode("div", { class: "flex flex-col items-start gap-0.5 min-w-0" }, [
                                    createVNode(unref(_sfc_main$2), {
                                      class: [
                                        "text-sm font-medium transition-colors",
                                        currentStep.value === step.value ? "text-primary" : "text-foreground/80"
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(step.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"]),
                                    createVNode(unref(_sfc_main$6), { class: "text-xs text-left text-muted-foreground/75" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(step.description), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            index < steps.length - 1 ? (openBlock(), createBlock(unref(_sfc_main$3), {
                              key: 0,
                              class: "bg-muted-foreground/20"
                            })) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1032, ["step"]);
                      }), 64))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><form class="p-4 sm:p-6"${_scopeId}><p class="text-sm text-muted-foreground/75 mb-8"${_scopeId}>Les champs marqués d&#39;un <span class="text-destructive"${_scopeId}>*</span> sont obligatoires</p><div class="space-y-8 animate-in fade-in-50" role="tabpanel" id="step-general-content"${ssrRenderAttr("aria-labelledby", `step-${currentStepName.value}-trigger`)} style="${ssrRenderStyle(currentStepName.value === "general" ? null : { display: "none" })}"${_scopeId}><div class="grid gap-8 sm:grid-cols-2"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$9), {
              required: "",
              class: "text-base flex items-center gap-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Nom <span class="text-destructive" aria-hidden="true"${_scopeId2}>*</span><span class="sr-only"${_scopeId2}>obligatoire</span>`);
                } else {
                  return [
                    createTextVNode(" Nom "),
                    createVNode("span", {
                      class: "text-destructive",
                      "aria-hidden": "true"
                    }, "*"),
                    createVNode("span", { class: "sr-only" }, "obligatoire")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$a), {
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              type: "text",
              required: "",
              autofocus: "",
              placeholder: "Ex: Perceuse Bosch Professional",
              class: "mt-2",
              "aria-required": "true"
            }, null, _parent2, _scopeId));
            if (unref(form).errors.name) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$9), {
              required: "",
              class: "text-base flex items-center gap-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Marque `);
                } else {
                  return [
                    createTextVNode(" Marque ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$a), {
              modelValue: unref(form).brand,
              "onUpdate:modelValue": ($event) => unref(form).brand = $event,
              type: "text",
              placeholder: "Ex: Bosch",
              class: "mt-2"
            }, null, _parent2, _scopeId));
            if (unref(form).errors.brand) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.brand)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$9), {
              required: "",
              class: "text-base flex items-center gap-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Catégorie <span class="text-destructive" aria-hidden="true"${_scopeId2}>*</span><span class="sr-only"${_scopeId2}>obligatoire</span>`);
                } else {
                  return [
                    createTextVNode(" Catégorie "),
                    createVNode("span", {
                      class: "text-destructive",
                      "aria-hidden": "true"
                    }, "*"),
                    createVNode("span", { class: "sr-only" }, "obligatoire")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$b, {
              modelValue: unref(form).category_id,
              "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
              required: ""
            }, null, _parent2, _scopeId));
            if (unref(form).errors.category_id) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.category_id)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$9), { class: "text-base" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Description`);
                } else {
                  return [
                    createTextVNode("Description")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$c), {
              modelValue: unref(form).description,
              "onUpdate:modelValue": ($event) => unref(form).description = $event,
              rows: "3",
              placeholder: "Décrivez les caractéristiques principales du matériel...",
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`<p class="mt-1.5 text-xs text-muted-foreground/75"${_scopeId}>Une description détaillée aidera les utilisateurs à mieux comprendre le matériel</p>`);
            if (unref(form).errors.description) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="space-y-8 animate-in fade-in-50" role="tabpanel" id="step-storage-content"${ssrRenderAttr("aria-labelledby", `step-${currentStepName.value}-trigger`)} style="${ssrRenderStyle(currentStepName.value === "storage" ? null : { display: "none" })}"${_scopeId}><div class="grid gap-8"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$9), {
              required: "",
              class: "text-base flex items-center gap-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` État <span class="text-destructive" aria-hidden="true"${_scopeId2}>*</span><span class="sr-only"${_scopeId2}>obligatoire</span>`);
                } else {
                  return [
                    createTextVNode(" État "),
                    createVNode("span", {
                      class: "text-destructive",
                      "aria-hidden": "true"
                    }, "*"),
                    createVNode("span", { class: "sr-only" }, "obligatoire")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$d), {
              modelValue: unref(form).condition,
              "onUpdate:modelValue": ($event) => unref(form).condition = $event,
              class: "mt-2",
              required: "",
              "aria-required": "true"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$e), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$f), { placeholder: "Sélectionnez l'état" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$f), { placeholder: "Sélectionnez l'état" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$g), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$h), { value: "new" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(Sparkles), { class: "w-4 h-4 mr-2 text-green-500" }, null, _parent5, _scopeId4));
                              _push5(`<span${_scopeId4}>Neuf</span></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(unref(Sparkles), { class: "w-4 h-4 mr-2 text-green-500" }),
                                  createVNode("span", null, "Neuf")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$h), { value: "good" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(CheckCircle), { class: "w-4 h-4 mr-2 text-blue-500" }, null, _parent5, _scopeId4));
                              _push5(`<span${_scopeId4}>Bon</span></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(unref(CheckCircle), { class: "w-4 h-4 mr-2 text-blue-500" }),
                                  createVNode("span", null, "Bon")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$h), { value: "fair" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(AlertCircle), { class: "w-4 h-4 mr-2 text-yellow-500" }, null, _parent5, _scopeId4));
                              _push5(`<span${_scopeId4}>Moyen</span></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(unref(AlertCircle), { class: "w-4 h-4 mr-2 text-yellow-500" }),
                                  createVNode("span", null, "Moyen")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$h), { value: "poor" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(XCircle), { class: "w-4 h-4 mr-2 text-red-500" }, null, _parent5, _scopeId4));
                              _push5(`<span${_scopeId4}>Mauvais</span></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(unref(XCircle), { class: "w-4 h-4 mr-2 text-red-500" }),
                                  createVNode("span", null, "Mauvais")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$h), { value: "new" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(unref(Sparkles), { class: "w-4 h-4 mr-2 text-green-500" }),
                                createVNode("span", null, "Neuf")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$h), { value: "good" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(unref(CheckCircle), { class: "w-4 h-4 mr-2 text-blue-500" }),
                                createVNode("span", null, "Bon")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$h), { value: "fair" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(unref(AlertCircle), { class: "w-4 h-4 mr-2 text-yellow-500" }),
                                createVNode("span", null, "Moyen")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$h), { value: "poor" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(unref(XCircle), { class: "w-4 h-4 mr-2 text-red-500" }),
                                createVNode("span", null, "Mauvais")
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$e), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$f), { placeholder: "Sélectionnez l'état" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$g), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$h), { value: "new" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(unref(Sparkles), { class: "w-4 h-4 mr-2 text-green-500" }),
                              createVNode("span", null, "Neuf")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$h), { value: "good" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(unref(CheckCircle), { class: "w-4 h-4 mr-2 text-blue-500" }),
                              createVNode("span", null, "Bon")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$h), { value: "fair" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(unref(AlertCircle), { class: "w-4 h-4 mr-2 text-yellow-500" }),
                              createVNode("span", null, "Moyen")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$h), { value: "poor" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(unref(XCircle), { class: "w-4 h-4 mr-2 text-red-500" }),
                              createVNode("span", null, "Mauvais")
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(form).errors.condition) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.condition)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$9), {
              required: "",
              class: "text-base flex items-center gap-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Quantité disponible <span class="text-destructive" aria-hidden="true"${_scopeId2}>*</span><span class="sr-only"${_scopeId2}>obligatoire</span>`);
                } else {
                  return [
                    createTextVNode(" Quantité disponible "),
                    createVNode("span", {
                      class: "text-destructive",
                      "aria-hidden": "true"
                    }, "*"),
                    createVNode("span", { class: "sr-only" }, "obligatoire")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$a), {
              modelValue: unref(form).quantity,
              "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
              type: "number",
              min: "1",
              required: "",
              placeholder: "Ex: 1",
              class: "mt-2",
              "aria-required": "true"
            }, null, _parent2, _scopeId));
            _push2(`<p class="mt-1.5 text-xs text-muted-foreground/75"${_scopeId}>Nombre d&#39;unités disponibles de ce matériel</p>`);
            if (unref(form).errors.quantity) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.quantity)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$9), {
              required: "",
              class: "text-base flex items-center gap-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Lieu de stockage <span class="text-destructive" aria-hidden="true"${_scopeId2}>*</span><span class="sr-only"${_scopeId2}>obligatoire</span>`);
                } else {
                  return [
                    createTextVNode(" Lieu de stockage "),
                    createVNode("span", {
                      class: "text-destructive",
                      "aria-hidden": "true"
                    }, "*"),
                    createVNode("span", { class: "sr-only" }, "obligatoire")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$d), {
              modelValue: unref(form).depot_id,
              "onUpdate:modelValue": ($event) => unref(form).depot_id = $event,
              required: "",
              class: "mt-2",
              "aria-required": "true"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$e), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$f), { placeholder: "Sélectionnez un lieu de stockage" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$f), { placeholder: "Sélectionnez un lieu de stockage" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$g), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(__props.depots, (depot) => {
                          _push4(ssrRenderComponent(unref(_sfc_main$h), {
                            key: depot.id,
                            value: depot.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(depot.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(depot.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.depots, (depot) => {
                            return openBlock(), createBlock(unref(_sfc_main$h), {
                              key: depot.id,
                              value: depot.id
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(depot.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$e), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$f), { placeholder: "Sélectionnez un lieu de stockage" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$g), null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.depots, (depot) => {
                          return openBlock(), createBlock(unref(_sfc_main$h), {
                            key: depot.id,
                            value: depot.id
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(depot.name), 1)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("app.organizations.depots.index", __props.organization),
              class: "inline-flex items-center text-xs text-primary/80 hover:text-primary mt-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Plus), { class: "w-3 h-3 mr-1" }, null, _parent3, _scopeId2));
                  _push3(` Ajouter un lieu de stockage `);
                } else {
                  return [
                    createVNode(unref(Plus), { class: "w-3 h-3 mr-1" }),
                    createTextVNode(" Ajouter un lieu de stockage ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(form).errors.depot_id) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.depot_id)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="space-y-8 animate-in fade-in-50" role="tabpanel" id="step-images-content"${ssrRenderAttr("aria-labelledby", `step-${currentStepName.value}-trigger`)} style="${ssrRenderStyle(currentStepName.value === "images" ? null : { display: "none" })}"${_scopeId}><div class="space-y-4"${_scopeId}><div class="flex items-start p-4 text-sm bg-muted/20 rounded-lg border border-muted"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Image), { class: "w-5 h-5 mr-3 flex-shrink-0 text-muted-foreground/75" }, null, _parent2, _scopeId));
            _push2(`<div class="space-y-1"${_scopeId}><p class="text-muted-foreground/75"${_scopeId}> Ajoutez jusqu&#39;à 3 photos de votre matériel. La première photo sera l&#39;image principale. </p><ul class="text-xs text-muted-foreground/75 list-disc list-inside"${_scopeId}><li${_scopeId}>Formats acceptés : JPG, JPEG, PNG</li><li${_scopeId}>Taille maximale par image : 10 MB</li><li${_scopeId}>Glissez-déposez pour réorganiser les photos</li></ul></div></div>`);
            if (unref(form).errors.images) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.images)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(FilePond), {
              name: "images",
              ref: "pond",
              "class-name": "file-pond-custom",
              "allow-multiple": true,
              "allow-reorder": true,
              "instant-upload": false,
              "allow-image-preview": true,
              "image-preview-height": 170,
              "label-idle": "Glissez vos photos ici ou <span class='filepond--label-action'>parcourez</span>",
              "accepted-file-types": ["image/png", "image/jpeg", "image/jpg"],
              "max-files": 10,
              files: unref(form).images,
              onInit: handleFilePondInit,
              onAddfile: handleFilePondAddFile,
              onRemovefile: handleFilePondRemoveFile,
              onReorderfiles: handleFilePondReorderFiles
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="space-y-8 animate-in fade-in-50" role="tabpanel" id="step-pricing-content"${ssrRenderAttr("aria-labelledby", `step-${currentStepName.value}-trigger`)} style="${ssrRenderStyle(currentStepName.value === "pricing" ? null : { display: "none" })}"${_scopeId}><div class="space-y-6"${_scopeId}><div class="grid gap-8 sm:grid-cols-3"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$9), { class: "text-base" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Prix d&#39;achat`);
                } else {
                  return [
                    createTextVNode("Prix d'achat")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="relative mt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$a), {
              value: unref(form).purchase_price,
              type: "text",
              inputmode: "decimal",
              class: "pl-7",
              onInput: (e) => handlePriceInput(e, "purchase_price")
            }, null, _parent2, _scopeId));
            _push2(`<span class="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"${_scopeId}>€</span></div>`);
            if (unref(form).errors.purchase_price) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.purchase_price)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$9), { class: "text-base" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Prix de location`);
                } else {
                  return [
                    createTextVNode("Prix de location")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="relative mt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$a), {
              value: unref(form).rental_price,
              type: "text",
              inputmode: "decimal",
              class: "pl-7",
              onInput: (e) => handlePriceInput(e, "rental_price")
            }, null, _parent2, _scopeId));
            _push2(`<span class="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"${_scopeId}>€</span></div><p class="mt-1.5 text-xs text-muted-foreground/75"${_scopeId}>Prix par jour</p>`);
            if (unref(form).errors.rental_price) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.rental_price)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$9), { class: "text-base" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Montant de la caution`);
                } else {
                  return [
                    createTextVNode("Montant de la caution")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="relative mt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$a), {
              value: unref(form).deposit_amount,
              type: "text",
              inputmode: "decimal",
              class: "pl-7",
              disabled: !unref(form).requires_deposit,
              onInput: (e) => handlePriceInput(e, "deposit_amount")
            }, null, _parent2, _scopeId));
            _push2(`<span class="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"${_scopeId}>€</span></div><p class="mt-1.5 text-xs text-muted-foreground/75"${_scopeId}>0 = pas de caution</p>`);
            if (unref(form).errors.deposit_amount) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.deposit_amount)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="grid gap-4 pt-4"${_scopeId}><label class="flex items-center p-4 bg-muted/20 rounded-lg border border-muted cursor-pointer hover:bg-muted/30 transition-colors"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$i), {
              modelValue: unref(form).is_available,
              "onUpdate:modelValue": ($event) => unref(form).is_available = $event,
              class: "data-[state=checked]:bg-primary"
            }, null, _parent2, _scopeId));
            _push2(`<div class="ml-3"${_scopeId}><span class="text-sm font-medium"${_scopeId}>Disponible immédiatement</span><p class="text-xs text-muted-foreground/75 mt-0.5"${_scopeId}>Le matériel peut être réservé dès maintenant</p></div></label><label class="flex items-center p-4 bg-muted/20 rounded-lg border border-muted cursor-pointer hover:bg-muted/30 transition-colors"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$i), {
              modelValue: unref(form).requires_deposit,
              "onUpdate:modelValue": ($event) => unref(form).requires_deposit = $event,
              class: "data-[state=checked]:bg-primary"
            }, null, _parent2, _scopeId));
            _push2(`<div class="ml-3"${_scopeId}><span class="text-sm font-medium"${_scopeId}>Caution requise</span><p class="text-xs text-muted-foreground/75 mt-0.5"${_scopeId}>Une caution sera demandée pour la location</p></div></label><label class="flex items-center p-4 bg-muted/20 rounded-lg border border-muted cursor-pointer hover:bg-muted/30 transition-colors"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$i), {
              modelValue: unref(form).is_rentable,
              "onUpdate:modelValue": ($event) => unref(form).is_rentable = $event,
              class: "data-[state=checked]:bg-primary"
            }, null, _parent2, _scopeId));
            _push2(`<div class="ml-3"${_scopeId}><span class="text-sm font-medium"${_scopeId}>Disponible à la location</span><p class="text-xs text-muted-foreground/75 mt-0.5"${_scopeId}>Le matériel peut être loué par d&#39;autres utilisateurs</p></div></label></div></div></div><div class="flex items-center justify-between gap-x-6 mt-8 pt-6 border-t"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("app.organizations.equipments.index", __props.organization),
              class: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Annuler `);
                } else {
                  return [
                    createTextVNode(" Annuler ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center flex-wrap gap-x-2"${_scopeId}>`);
            if (!isFirstStep.value) {
              _push2(ssrRenderComponent(unref(_sfc_main$j), {
                type: "button",
                variant: "outline",
                disabled: !canGoPrevious.value,
                onClick: previousStep,
                class: "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(ArrowLeft), {
                      class: "w-4 h-4 mr-2",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                    _push3(` Précédent `);
                  } else {
                    return [
                      createVNode(unref(ArrowLeft), {
                        class: "w-4 h-4 mr-2",
                        "aria-hidden": "true"
                      }),
                      createTextVNode(" Précédent ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!isLastStep.value) {
              _push2(ssrRenderComponent(unref(_sfc_main$j), {
                type: "button",
                disabled: !canGoNext.value,
                onClick: nextStep,
                class: "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Suivant `);
                    _push3(ssrRenderComponent(unref(ArrowRight), {
                      class: "w-4 h-4 ml-2",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createTextVNode(" Suivant "),
                      createVNode(unref(ArrowRight), {
                        class: "w-4 h-4 ml-2",
                        "aria-hidden": "true"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(_sfc_main$j), {
                type: "submit",
                disabled: unref(form).processing,
                class: [{ "opacity-25": unref(form).processing }, "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"],
                size: "lg"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (!unref(form).processing) {
                      _push3(ssrRenderComponent(unref(Plus), {
                        class: "w-4 h-4 mr-2",
                        "aria-hidden": "true"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(Spinner, {
                        class: "w-4 h-4 mr-2",
                        "aria-hidden": "true"
                      }, null, _parent3, _scopeId2));
                    }
                    _push3(` ${ssrInterpolate(unref(form).processing ? "Création en cours..." : "Ajouter le matériel")}`);
                  } else {
                    return [
                      !unref(form).processing ? (openBlock(), createBlock(unref(Plus), {
                        key: 0,
                        class: "w-4 h-4 mr-2",
                        "aria-hidden": "true"
                      })) : (openBlock(), createBlock(Spinner, {
                        key: 1,
                        class: "w-4 h-4 mr-2",
                        "aria-hidden": "true"
                      })),
                      createTextVNode(" " + toDisplayString(unref(form).processing ? "Création en cours..." : "Ajouter le matériel"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(`</div></div></form></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-6xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-card text-card-foreground rounded-lg border shadow-sm overflow-hidden" }, [
                    createVNode("div", { class: "w-full bg-muted/10" }, [
                      createVNode("div", {
                        class: "h-1 bg-primary transition-all duration-300 ease-in-out",
                        style: { width: (currentStep.value + 1) / steps.length * 100 + "%" }
                      }, null, 4)
                    ]),
                    createVNode("div", { class: "px-2 py-3 sm:px-6 sm:py-4 bg-muted/5 border-b overflow-x-auto" }, [
                      createVNode(unref(_sfc_main$7), {
                        modelValue: currentStep.value,
                        "onUpdate:modelValue": ($event) => currentStep.value = $event,
                        class: "w-full min-w-[720px]"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center justify-between w-full" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(steps, (step, index) => {
                              return createVNode(unref(_sfc_main$4), {
                                key: step.value,
                                step: index,
                                class: "flex-1 px-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$1), {
                                    class: "w-full group",
                                    onClick: ($event) => currentStep.value = step.value
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-start gap-3" }, [
                                        createVNode(unref(_sfc_main$5), {
                                          class: [
                                            "mt-0.5 size-7 flex items-center justify-center rounded-full border transition-colors shrink-0",
                                            currentStep.value === step.value ? "bg-primary border-primary text-white" : "bg-background border-muted-foreground/30"
                                          ]
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(resolveDynamicComponent(step.icon), { class: "w-4 h-4" }))
                                          ]),
                                          _: 2
                                        }, 1032, ["class"]),
                                        createVNode("div", { class: "flex flex-col items-start gap-0.5 min-w-0" }, [
                                          createVNode(unref(_sfc_main$2), {
                                            class: [
                                              "text-sm font-medium transition-colors",
                                              currentStep.value === step.value ? "text-primary" : "text-foreground/80"
                                            ]
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(step.label), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["class"]),
                                          createVNode(unref(_sfc_main$6), { class: "text-xs text-left text-muted-foreground/75" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(step.description), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  index < steps.length - 1 ? (openBlock(), createBlock(unref(_sfc_main$3), {
                                    key: 0,
                                    class: "bg-muted-foreground/20"
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1032, ["step"]);
                            }), 64))
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      class: "p-4 sm:p-6"
                    }, [
                      createVNode("p", { class: "text-sm text-muted-foreground/75 mb-8" }, [
                        createTextVNode("Les champs marqués d'un "),
                        createVNode("span", { class: "text-destructive" }, "*"),
                        createTextVNode(" sont obligatoires")
                      ]),
                      withDirectives(createVNode("div", {
                        class: "space-y-8 animate-in fade-in-50",
                        role: "tabpanel",
                        id: "step-general-content",
                        "aria-labelledby": `step-${currentStepName.value}-trigger`
                      }, [
                        createVNode("div", { class: "grid gap-8 sm:grid-cols-2" }, [
                          createVNode("div", null, [
                            createVNode(unref(_sfc_main$9), {
                              required: "",
                              class: "text-base flex items-center gap-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Nom "),
                                createVNode("span", {
                                  class: "text-destructive",
                                  "aria-hidden": "true"
                                }, "*"),
                                createVNode("span", { class: "sr-only" }, "obligatoire")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$a), {
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              type: "text",
                              required: "",
                              autofocus: "",
                              placeholder: "Ex: Perceuse Bosch Professional",
                              class: "mt-2",
                              "aria-required": "true"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            unref(form).errors.name ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-2 text-sm text-destructive"
                            }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode(unref(_sfc_main$9), {
                              required: "",
                              class: "text-base flex items-center gap-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Marque ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$a), {
                              modelValue: unref(form).brand,
                              "onUpdate:modelValue": ($event) => unref(form).brand = $event,
                              type: "text",
                              placeholder: "Ex: Bosch",
                              class: "mt-2"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            unref(form).errors.brand ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-2 text-sm text-destructive"
                            }, toDisplayString(unref(form).errors.brand), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode(unref(_sfc_main$9), {
                            required: "",
                            class: "text-base flex items-center gap-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Catégorie "),
                              createVNode("span", {
                                class: "text-destructive",
                                "aria-hidden": "true"
                              }, "*"),
                              createVNode("span", { class: "sr-only" }, "obligatoire")
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$b, {
                            modelValue: unref(form).category_id,
                            "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(form).errors.category_id ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-2 text-sm text-destructive"
                          }, toDisplayString(unref(form).errors.category_id), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode(unref(_sfc_main$9), { class: "text-base" }, {
                            default: withCtx(() => [
                              createTextVNode("Description")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$c), {
                            modelValue: unref(form).description,
                            "onUpdate:modelValue": ($event) => unref(form).description = $event,
                            rows: "3",
                            placeholder: "Décrivez les caractéristiques principales du matériel...",
                            class: "mt-2"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("p", { class: "mt-1.5 text-xs text-muted-foreground/75" }, "Une description détaillée aidera les utilisateurs à mieux comprendre le matériel"),
                          unref(form).errors.description ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-2 text-sm text-destructive"
                          }, toDisplayString(unref(form).errors.description), 1)) : createCommentVNode("", true)
                        ])
                      ], 8, ["aria-labelledby"]), [
                        [vShow, currentStepName.value === "general"]
                      ]),
                      withDirectives(createVNode("div", {
                        class: "space-y-8 animate-in fade-in-50",
                        role: "tabpanel",
                        id: "step-storage-content",
                        "aria-labelledby": `step-${currentStepName.value}-trigger`
                      }, [
                        createVNode("div", { class: "grid gap-8" }, [
                          createVNode("div", null, [
                            createVNode(unref(_sfc_main$9), {
                              required: "",
                              class: "text-base flex items-center gap-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" État "),
                                createVNode("span", {
                                  class: "text-destructive",
                                  "aria-hidden": "true"
                                }, "*"),
                                createVNode("span", { class: "sr-only" }, "obligatoire")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$d), {
                              modelValue: unref(form).condition,
                              "onUpdate:modelValue": ($event) => unref(form).condition = $event,
                              class: "mt-2",
                              required: "",
                              "aria-required": "true"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$e), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$f), { placeholder: "Sélectionnez l'état" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$g), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$h), { value: "new" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center" }, [
                                          createVNode(unref(Sparkles), { class: "w-4 h-4 mr-2 text-green-500" }),
                                          createVNode("span", null, "Neuf")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$h), { value: "good" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center" }, [
                                          createVNode(unref(CheckCircle), { class: "w-4 h-4 mr-2 text-blue-500" }),
                                          createVNode("span", null, "Bon")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$h), { value: "fair" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center" }, [
                                          createVNode(unref(AlertCircle), { class: "w-4 h-4 mr-2 text-yellow-500" }),
                                          createVNode("span", null, "Moyen")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$h), { value: "poor" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center" }, [
                                          createVNode(unref(XCircle), { class: "w-4 h-4 mr-2 text-red-500" }),
                                          createVNode("span", null, "Mauvais")
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            unref(form).errors.condition ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-2 text-sm text-destructive"
                            }, toDisplayString(unref(form).errors.condition), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode(unref(_sfc_main$9), {
                              required: "",
                              class: "text-base flex items-center gap-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Quantité disponible "),
                                createVNode("span", {
                                  class: "text-destructive",
                                  "aria-hidden": "true"
                                }, "*"),
                                createVNode("span", { class: "sr-only" }, "obligatoire")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$a), {
                              modelValue: unref(form).quantity,
                              "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
                              type: "number",
                              min: "1",
                              required: "",
                              placeholder: "Ex: 1",
                              class: "mt-2",
                              "aria-required": "true"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("p", { class: "mt-1.5 text-xs text-muted-foreground/75" }, "Nombre d'unités disponibles de ce matériel"),
                            unref(form).errors.quantity ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-2 text-sm text-destructive"
                            }, toDisplayString(unref(form).errors.quantity), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode(unref(_sfc_main$9), {
                              required: "",
                              class: "text-base flex items-center gap-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Lieu de stockage "),
                                createVNode("span", {
                                  class: "text-destructive",
                                  "aria-hidden": "true"
                                }, "*"),
                                createVNode("span", { class: "sr-only" }, "obligatoire")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$d), {
                              modelValue: unref(form).depot_id,
                              "onUpdate:modelValue": ($event) => unref(form).depot_id = $event,
                              required: "",
                              class: "mt-2",
                              "aria-required": "true"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$e), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$f), { placeholder: "Sélectionnez un lieu de stockage" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$g), null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.depots, (depot) => {
                                      return openBlock(), createBlock(unref(_sfc_main$h), {
                                        key: depot.id,
                                        value: depot.id
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(depot.name), 1)
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
                            createVNode(unref(Link), {
                              href: _ctx.route("app.organizations.depots.index", __props.organization),
                              class: "inline-flex items-center text-xs text-primary/80 hover:text-primary mt-2"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Plus), { class: "w-3 h-3 mr-1" }),
                                createTextVNode(" Ajouter un lieu de stockage ")
                              ]),
                              _: 1
                            }, 8, ["href"]),
                            unref(form).errors.depot_id ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-2 text-sm text-destructive"
                            }, toDisplayString(unref(form).errors.depot_id), 1)) : createCommentVNode("", true)
                          ])
                        ])
                      ], 8, ["aria-labelledby"]), [
                        [vShow, currentStepName.value === "storage"]
                      ]),
                      withDirectives(createVNode("div", {
                        class: "space-y-8 animate-in fade-in-50",
                        role: "tabpanel",
                        id: "step-images-content",
                        "aria-labelledby": `step-${currentStepName.value}-trigger`
                      }, [
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", { class: "flex items-start p-4 text-sm bg-muted/20 rounded-lg border border-muted" }, [
                            createVNode(unref(Image), { class: "w-5 h-5 mr-3 flex-shrink-0 text-muted-foreground/75" }),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("p", { class: "text-muted-foreground/75" }, " Ajoutez jusqu'à 3 photos de votre matériel. La première photo sera l'image principale. "),
                              createVNode("ul", { class: "text-xs text-muted-foreground/75 list-disc list-inside" }, [
                                createVNode("li", null, "Formats acceptés : JPG, JPEG, PNG"),
                                createVNode("li", null, "Taille maximale par image : 10 MB"),
                                createVNode("li", null, "Glissez-déposez pour réorganiser les photos")
                              ])
                            ])
                          ]),
                          unref(form).errors.images ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-2 text-sm text-destructive"
                          }, toDisplayString(unref(form).errors.images), 1)) : createCommentVNode("", true),
                          createVNode(unref(FilePond), {
                            name: "images",
                            ref: "pond",
                            "class-name": "file-pond-custom",
                            "allow-multiple": true,
                            "allow-reorder": true,
                            "instant-upload": false,
                            "allow-image-preview": true,
                            "image-preview-height": 170,
                            "label-idle": "Glissez vos photos ici ou <span class='filepond--label-action'>parcourez</span>",
                            "accepted-file-types": ["image/png", "image/jpeg", "image/jpg"],
                            "max-files": 10,
                            files: unref(form).images,
                            onInit: handleFilePondInit,
                            onAddfile: handleFilePondAddFile,
                            onRemovefile: handleFilePondRemoveFile,
                            onReorderfiles: handleFilePondReorderFiles
                          }, null, 8, ["files"])
                        ])
                      ], 8, ["aria-labelledby"]), [
                        [vShow, currentStepName.value === "images"]
                      ]),
                      withDirectives(createVNode("div", {
                        class: "space-y-8 animate-in fade-in-50",
                        role: "tabpanel",
                        id: "step-pricing-content",
                        "aria-labelledby": `step-${currentStepName.value}-trigger`
                      }, [
                        createVNode("div", { class: "space-y-6" }, [
                          createVNode("div", { class: "grid gap-8 sm:grid-cols-3" }, [
                            createVNode("div", null, [
                              createVNode(unref(_sfc_main$9), { class: "text-base" }, {
                                default: withCtx(() => [
                                  createTextVNode("Prix d'achat")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "relative mt-2" }, [
                                createVNode(unref(_sfc_main$a), {
                                  value: unref(form).purchase_price,
                                  type: "text",
                                  inputmode: "decimal",
                                  class: "pl-7",
                                  onInput: (e) => handlePriceInput(e, "purchase_price")
                                }, null, 8, ["value", "onInput"]),
                                createVNode("span", { class: "absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" }, "€")
                              ]),
                              unref(form).errors.purchase_price ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-2 text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.purchase_price), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode(unref(_sfc_main$9), { class: "text-base" }, {
                                default: withCtx(() => [
                                  createTextVNode("Prix de location")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "relative mt-2" }, [
                                createVNode(unref(_sfc_main$a), {
                                  value: unref(form).rental_price,
                                  type: "text",
                                  inputmode: "decimal",
                                  class: "pl-7",
                                  onInput: (e) => handlePriceInput(e, "rental_price")
                                }, null, 8, ["value", "onInput"]),
                                createVNode("span", { class: "absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" }, "€")
                              ]),
                              createVNode("p", { class: "mt-1.5 text-xs text-muted-foreground/75" }, "Prix par jour"),
                              unref(form).errors.rental_price ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-2 text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.rental_price), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode(unref(_sfc_main$9), { class: "text-base" }, {
                                default: withCtx(() => [
                                  createTextVNode("Montant de la caution")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "relative mt-2" }, [
                                createVNode(unref(_sfc_main$a), {
                                  value: unref(form).deposit_amount,
                                  type: "text",
                                  inputmode: "decimal",
                                  class: "pl-7",
                                  disabled: !unref(form).requires_deposit,
                                  onInput: (e) => handlePriceInput(e, "deposit_amount")
                                }, null, 8, ["value", "disabled", "onInput"]),
                                createVNode("span", { class: "absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" }, "€")
                              ]),
                              createVNode("p", { class: "mt-1.5 text-xs text-muted-foreground/75" }, "0 = pas de caution"),
                              unref(form).errors.deposit_amount ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-2 text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.deposit_amount), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "grid gap-4 pt-4" }, [
                            createVNode("label", { class: "flex items-center p-4 bg-muted/20 rounded-lg border border-muted cursor-pointer hover:bg-muted/30 transition-colors" }, [
                              createVNode(unref(_sfc_main$i), {
                                modelValue: unref(form).is_available,
                                "onUpdate:modelValue": ($event) => unref(form).is_available = $event,
                                class: "data-[state=checked]:bg-primary"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", { class: "ml-3" }, [
                                createVNode("span", { class: "text-sm font-medium" }, "Disponible immédiatement"),
                                createVNode("p", { class: "text-xs text-muted-foreground/75 mt-0.5" }, "Le matériel peut être réservé dès maintenant")
                              ])
                            ]),
                            createVNode("label", { class: "flex items-center p-4 bg-muted/20 rounded-lg border border-muted cursor-pointer hover:bg-muted/30 transition-colors" }, [
                              createVNode(unref(_sfc_main$i), {
                                modelValue: unref(form).requires_deposit,
                                "onUpdate:modelValue": ($event) => unref(form).requires_deposit = $event,
                                class: "data-[state=checked]:bg-primary"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", { class: "ml-3" }, [
                                createVNode("span", { class: "text-sm font-medium" }, "Caution requise"),
                                createVNode("p", { class: "text-xs text-muted-foreground/75 mt-0.5" }, "Une caution sera demandée pour la location")
                              ])
                            ]),
                            createVNode("label", { class: "flex items-center p-4 bg-muted/20 rounded-lg border border-muted cursor-pointer hover:bg-muted/30 transition-colors" }, [
                              createVNode(unref(_sfc_main$i), {
                                modelValue: unref(form).is_rentable,
                                "onUpdate:modelValue": ($event) => unref(form).is_rentable = $event,
                                class: "data-[state=checked]:bg-primary"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", { class: "ml-3" }, [
                                createVNode("span", { class: "text-sm font-medium" }, "Disponible à la location"),
                                createVNode("p", { class: "text-xs text-muted-foreground/75 mt-0.5" }, "Le matériel peut être loué par d'autres utilisateurs")
                              ])
                            ])
                          ])
                        ])
                      ], 8, ["aria-labelledby"]), [
                        [vShow, currentStepName.value === "pricing"]
                      ]),
                      createVNode("div", { class: "flex items-center justify-between gap-x-6 mt-8 pt-6 border-t" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("app.organizations.equipments.index", __props.organization),
                          class: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Annuler ")
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode("div", { class: "flex items-center flex-wrap gap-x-2" }, [
                          !isFirstStep.value ? (openBlock(), createBlock(unref(_sfc_main$j), {
                            key: 0,
                            type: "button",
                            variant: "outline",
                            disabled: !canGoPrevious.value,
                            onClick: previousStep,
                            class: "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ArrowLeft), {
                                class: "w-4 h-4 mr-2",
                                "aria-hidden": "true"
                              }),
                              createTextVNode(" Précédent ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])) : createCommentVNode("", true),
                          !isLastStep.value ? (openBlock(), createBlock(unref(_sfc_main$j), {
                            key: 1,
                            type: "button",
                            disabled: !canGoNext.value,
                            onClick: nextStep,
                            class: "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Suivant "),
                              createVNode(unref(ArrowRight), {
                                class: "w-4 h-4 ml-2",
                                "aria-hidden": "true"
                              })
                            ]),
                            _: 1
                          }, 8, ["disabled"])) : (openBlock(), createBlock(unref(_sfc_main$j), {
                            key: 2,
                            type: "submit",
                            disabled: unref(form).processing,
                            class: [{ "opacity-25": unref(form).processing }, "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"],
                            size: "lg"
                          }, {
                            default: withCtx(() => [
                              !unref(form).processing ? (openBlock(), createBlock(unref(Plus), {
                                key: 0,
                                class: "w-4 h-4 mr-2",
                                "aria-hidden": "true"
                              })) : (openBlock(), createBlock(Spinner, {
                                key: 1,
                                class: "w-4 h-4 mr-2",
                                "aria-hidden": "true"
                              })),
                              createTextVNode(" " + toDisplayString(unref(form).processing ? "Création en cours..." : "Ajouter le matériel"), 1)
                            ]),
                            _: 1
                          }, 8, ["disabled", "class"]))
                        ])
                      ])
                    ], 32)
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Equipments/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
