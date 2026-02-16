import { defineComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext, ref, computed, onMounted, onUnmounted, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode, Fragment, renderList, watch, withModifiers } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderStyle, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$w } from "./AppLayout-B3jJCr1A.js";
import { _ as _sfc_main$j, d as _sfc_main$k, a as _sfc_main$r, b as _sfc_main$s, e as _sfc_main$v, c as _sfc_main$y } from "./CardTitle-rMLiyiHU.js";
import { _ as _sfc_main$x } from "./index-9VOASAGY.js";
import { AspectRatio, useForwardPropsEmits, RangeCalendarRoot, useForwardProps, RangeCalendarCell, RangeCalendarCellTrigger, RangeCalendarGrid, RangeCalendarGridBody, RangeCalendarGridHead, RangeCalendarGridRow, RangeCalendarHeadCell, RangeCalendarHeader, RangeCalendarHeading, RangeCalendarNext, RangeCalendarPrev } from "reka-ui";
import { _ as _sfc_main$l, a as _sfc_main$m } from "./DialogTrigger-CSFZvrzo.js";
import { ZoomIn, Image, X, ZoomOut, ChevronLeft, ChevronRight, Loader2, CalendarIcon, Truck, User } from "lucide-vue-next";
import axios from "axios";
import { useForm } from "@inertiajs/vue3";
import { toast } from "vue-sonner";
import { c as cn, b as buttonVariants, _ as _sfc_main$p } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$u } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$t } from "./Label-DLRZNtyA.js";
import { DateFormatter, getLocalTimeZone, CalendarDate, today } from "@internationalized/date";
import { _ as _sfc_main$n, a as _sfc_main$o, b as _sfc_main$q } from "./PopoverTrigger-DcNHEhqp.js";
import { reactiveOmit } from "@vueuse/core";
import L from "leaflet";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import frLocale from "@fullcalendar/core/locales/fr";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "@heroicons/vue/24/outline";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "AspectRatio",
  __ssrInlineRender: true,
  props: {
    ratio: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AspectRatio), mergeProps({ "data-slot": "aspect-ratio" }, props, _attrs), {
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
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/aspect-ratio/AspectRatio.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {
  __name: "ImageGallery",
  __ssrInlineRender: true,
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const selectedImage = ref(null);
    const isDialogOpen = ref(false);
    const currentImageIndex = ref(0);
    const isLoading = ref(false);
    const zoomLevel = ref(1);
    const allImages = computed(() => props.images);
    const placeholderCount = computed(() => {
      const count = allImages.value.length;
      if (count === 0) return 3;
      if (count === 1) return 2;
      if (count === 2) return 1;
      return 0;
    });
    const openImageDialog = (image) => {
      selectedImage.value = image;
      currentImageIndex.value = allImages.value.findIndex((img) => img.id === image.id);
      isDialogOpen.value = true;
      zoomLevel.value = 1;
    };
    const handleKeydown = (e) => {
      if (!isDialogOpen.value) return;
      switch (e.key) {
        case "ArrowLeft":
          navigateImage("prev");
          break;
        case "ArrowRight":
          navigateImage("next");
          break;
        case "Escape":
          isDialogOpen.value = false;
          break;
      }
    };
    const navigateImage = (direction) => {
      const totalImages = allImages.value.length;
      if (direction === "next") {
        currentImageIndex.value = (currentImageIndex.value + 1) % totalImages;
      } else {
        currentImageIndex.value = (currentImageIndex.value - 1 + totalImages) % totalImages;
      }
      selectedImage.value = allImages.value[currentImageIndex.value];
      zoomLevel.value = 1;
    };
    const handleImageLoad = () => {
      isLoading.value = false;
    };
    const handleZoom = (direction) => {
      if (direction === "in" && zoomLevel.value < 3) {
        zoomLevel.value += 0.5;
      } else if (direction === "out" && zoomLevel.value > 1) {
        zoomLevel.value -= 0.5;
      }
    };
    const touchStart = ref({ x: 0, y: 0 });
    const handleTouchStart = (e) => {
      touchStart.value = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    };
    const handleTouchEnd = (e) => {
      const touchEnd = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      };
      const deltaX = touchEnd.x - touchStart.value.x;
      const deltaY = touchEnd.y - touchStart.value.y;
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          navigateImage("prev");
        } else {
          navigateImage("next");
        }
      }
    };
    onMounted(() => {
      document.addEventListener("keydown", handleKeydown);
    });
    onUnmounted(() => {
      document.removeEventListener("keydown", handleKeydown);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="grid grid-cols-3 gap-2 sm:gap-4"><!--[-->`);
      ssrRenderList(allImages.value, (image) => {
        _push(ssrRenderComponent(unref(_sfc_main$j), {
          key: image.id,
          class: "overflow-hidden group cursor-pointer p-0",
          onClick: ($event) => openImageDialog(image)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$k), { class: "p-0 relative h-full w-full" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", image.url)}${ssrRenderAttr("alt", image.original_name)} class="object-cover group-hover:scale-105 transition-transform duration-300 h-full w-full" loading="lazy"${_scopeId2}><div class="absolute inset-0 bg-black/40 dark:bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(ZoomIn), { class: "w-4 h-4 sm:w-6 sm:h-6 text-white dark:text-black" }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: image.url,
                        alt: image.original_name,
                        class: "object-cover group-hover:scale-105 transition-transform duration-300 h-full w-full",
                        loading: "lazy"
                      }, null, 8, ["src", "alt"]),
                      createVNode("div", { class: "absolute inset-0 bg-black/40 dark:bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" }, [
                        createVNode(unref(ZoomIn), { class: "w-4 h-4 sm:w-6 sm:h-6 text-white dark:text-black" })
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$k), { class: "p-0 relative h-full w-full" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: image.url,
                      alt: image.original_name,
                      class: "object-cover group-hover:scale-105 transition-transform duration-300 h-full w-full",
                      loading: "lazy"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "absolute inset-0 bg-black/40 dark:bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" }, [
                      createVNode(unref(ZoomIn), { class: "w-4 h-4 sm:w-6 sm:h-6 text-white dark:text-black" })
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(placeholderCount.value, (i) => {
        _push(ssrRenderComponent(unref(_sfc_main$j), {
          key: `placeholder-${i}`,
          class: "overflow-hidden bg-gray-50/50 dark:bg-gray-900/50"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$k), { class: "p-0" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$i), { ratio: 4 / 3 }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="w-full h-full flex items-center justify-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(Image), { class: "w-4 h-4 sm:w-8 sm:h-8 text-gray-200 dark:text-gray-700" }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "w-full h-full flex items-center justify-center" }, [
                              createVNode(unref(Image), { class: "w-4 h-4 sm:w-8 sm:h-8 text-gray-200 dark:text-gray-700" })
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$i), { ratio: 4 / 3 }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "w-full h-full flex items-center justify-center" }, [
                            createVNode(unref(Image), { class: "w-4 h-4 sm:w-8 sm:h-8 text-gray-200 dark:text-gray-700" })
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$k), { class: "p-0" }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$i), { ratio: 4 / 3 }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-full h-full flex items-center justify-center" }, [
                          createVNode(unref(Image), { class: "w-4 h-4 sm:w-8 sm:h-8 text-gray-200 dark:text-gray-700" })
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
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$l), {
        open: isDialogOpen.value,
        "onUpdate:open": ($event) => isDialogOpen.value = $event,
        class: "z-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$m), {
              class: "max-w-screen-xl p-0",
              onTouchstart: handleTouchStart,
              onTouchend: handleTouchEnd
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative bg-black"${_scopeId2}><button class="absolute top-4 right-4 z-50 rounded-full bg-black/50 dark:bg-white/50 p-2 text-white dark:text-black hover:bg-black/75 dark:hover:bg-white/75 transition-colors" aria-label="Close dialog"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(X), { class: "w-6 h-6" }, null, _parent3, _scopeId2));
                  _push3(`</button><div class="absolute top-4 left-4 z-50 flex gap-2"${_scopeId2}><button class="rounded-full bg-black/50 dark:bg-white/50 p-2 text-white dark:text-black hover:bg-black/75 dark:hover:bg-white/75 transition-colors"${ssrIncludeBooleanAttr(zoomLevel.value <= 1) ? " disabled" : ""} aria-label="Zoom out"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(ZoomOut), { class: "w-6 h-6" }, null, _parent3, _scopeId2));
                  _push3(`</button><button class="rounded-full bg-black/50 dark:bg-white/50 p-2 text-white dark:text-black hover:bg-black/75 dark:hover:bg-white/75 transition-colors"${ssrIncludeBooleanAttr(zoomLevel.value >= 3) ? " disabled" : ""} aria-label="Zoom in"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(ZoomIn), { class: "w-6 h-6" }, null, _parent3, _scopeId2));
                  _push3(`</button></div>`);
                  if (currentImageIndex.value > 0) {
                    _push3(`<button class="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/50 dark:bg-white/50 p-2 text-white dark:text-black hover:bg-black/75 dark:hover:bg-white/75 transition-colors" aria-label="Previous image"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(ChevronLeft), { class: "w-8 h-8" }, null, _parent3, _scopeId2));
                    _push3(`</button>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (currentImageIndex.value < allImages.value.length - 1) {
                    _push3(`<button class="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/50 dark:bg-white/50 p-2 text-white dark:text-black hover:bg-black/75 dark:hover:bg-white/75 transition-colors" aria-label="Next image"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(ChevronRight), { class: "w-8 h-8" }, null, _parent3, _scopeId2));
                    _push3(`</button>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (isLoading.value) {
                    _push3(`<div class="absolute inset-0 flex items-center justify-center bg-black/50 dark:bg-white/50"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Loader2), { class: "w-8 h-8 text-white dark:text-black animate-spin" }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="overflow-auto max-h-[90vh] flex items-center justify-center bg-gray-50 dark:bg-gray-900" style="${ssrRenderStyle({ cursor: zoomLevel.value > 1 ? "move" : "default" })}"${_scopeId2}>`);
                  if (selectedImage.value) {
                    _push3(`<img${ssrRenderAttr("src", selectedImage.value.url)}${ssrRenderAttr("alt", selectedImage.value.original_name)} class="w-full h-auto object-contain transition-transform duration-300" style="${ssrRenderStyle({ transform: `scale(${zoomLevel.value})` })}" loading="lazy"${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 dark:bg-white/50 px-3 py-1 rounded-full text-white dark:text-black text-sm"${_scopeId2}>${ssrInterpolate(currentImageIndex.value + 1)} / ${ssrInterpolate(allImages.value.length)}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative bg-black" }, [
                      createVNode("button", {
                        onClick: ($event) => isDialogOpen.value = false,
                        class: "absolute top-4 right-4 z-50 rounded-full bg-black/50 dark:bg-white/50 p-2 text-white dark:text-black hover:bg-black/75 dark:hover:bg-white/75 transition-colors",
                        "aria-label": "Close dialog"
                      }, [
                        createVNode(unref(X), { class: "w-6 h-6" })
                      ], 8, ["onClick"]),
                      createVNode("div", { class: "absolute top-4 left-4 z-50 flex gap-2" }, [
                        createVNode("button", {
                          onClick: ($event) => handleZoom("out"),
                          class: "rounded-full bg-black/50 dark:bg-white/50 p-2 text-white dark:text-black hover:bg-black/75 dark:hover:bg-white/75 transition-colors",
                          disabled: zoomLevel.value <= 1,
                          "aria-label": "Zoom out"
                        }, [
                          createVNode(unref(ZoomOut), { class: "w-6 h-6" })
                        ], 8, ["onClick", "disabled"]),
                        createVNode("button", {
                          onClick: ($event) => handleZoom("in"),
                          class: "rounded-full bg-black/50 dark:bg-white/50 p-2 text-white dark:text-black hover:bg-black/75 dark:hover:bg-white/75 transition-colors",
                          disabled: zoomLevel.value >= 3,
                          "aria-label": "Zoom in"
                        }, [
                          createVNode(unref(ZoomIn), { class: "w-6 h-6" })
                        ], 8, ["onClick", "disabled"])
                      ]),
                      currentImageIndex.value > 0 ? (openBlock(), createBlock("button", {
                        key: 0,
                        onClick: ($event) => navigateImage("prev"),
                        class: "absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/50 dark:bg-white/50 p-2 text-white dark:text-black hover:bg-black/75 dark:hover:bg-white/75 transition-colors",
                        "aria-label": "Previous image"
                      }, [
                        createVNode(unref(ChevronLeft), { class: "w-8 h-8" })
                      ], 8, ["onClick"])) : createCommentVNode("", true),
                      currentImageIndex.value < allImages.value.length - 1 ? (openBlock(), createBlock("button", {
                        key: 1,
                        onClick: ($event) => navigateImage("next"),
                        class: "absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/50 dark:bg-white/50 p-2 text-white dark:text-black hover:bg-black/75 dark:hover:bg-white/75 transition-colors",
                        "aria-label": "Next image"
                      }, [
                        createVNode(unref(ChevronRight), { class: "w-8 h-8" })
                      ], 8, ["onClick"])) : createCommentVNode("", true),
                      isLoading.value ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "absolute inset-0 flex items-center justify-center bg-black/50 dark:bg-white/50"
                      }, [
                        createVNode(unref(Loader2), { class: "w-8 h-8 text-white dark:text-black animate-spin" })
                      ])) : createCommentVNode("", true),
                      createVNode("div", {
                        class: "overflow-auto max-h-[90vh] flex items-center justify-center bg-gray-50 dark:bg-gray-900",
                        style: { cursor: zoomLevel.value > 1 ? "move" : "default" }
                      }, [
                        selectedImage.value ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: selectedImage.value.url,
                          alt: selectedImage.value.original_name,
                          class: "w-full h-auto object-contain transition-transform duration-300",
                          style: { transform: `scale(${zoomLevel.value})` },
                          onLoad: handleImageLoad,
                          loading: "lazy"
                        }, null, 44, ["src", "alt"])) : createCommentVNode("", true)
                      ], 4),
                      createVNode("div", { class: "absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 dark:bg-white/50 px-3 py-1 rounded-full text-white dark:text-black text-sm" }, toDisplayString(currentImageIndex.value + 1) + " / " + toDisplayString(allImages.value.length), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$m), {
                class: "max-w-screen-xl p-0",
                onTouchstart: handleTouchStart,
                onTouchend: handleTouchEnd
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "relative bg-black" }, [
                    createVNode("button", {
                      onClick: ($event) => isDialogOpen.value = false,
                      class: "absolute top-4 right-4 z-50 rounded-full bg-black/50 dark:bg-white/50 p-2 text-white dark:text-black hover:bg-black/75 dark:hover:bg-white/75 transition-colors",
                      "aria-label": "Close dialog"
                    }, [
                      createVNode(unref(X), { class: "w-6 h-6" })
                    ], 8, ["onClick"]),
                    createVNode("div", { class: "absolute top-4 left-4 z-50 flex gap-2" }, [
                      createVNode("button", {
                        onClick: ($event) => handleZoom("out"),
                        class: "rounded-full bg-black/50 dark:bg-white/50 p-2 text-white dark:text-black hover:bg-black/75 dark:hover:bg-white/75 transition-colors",
                        disabled: zoomLevel.value <= 1,
                        "aria-label": "Zoom out"
                      }, [
                        createVNode(unref(ZoomOut), { class: "w-6 h-6" })
                      ], 8, ["onClick", "disabled"]),
                      createVNode("button", {
                        onClick: ($event) => handleZoom("in"),
                        class: "rounded-full bg-black/50 dark:bg-white/50 p-2 text-white dark:text-black hover:bg-black/75 dark:hover:bg-white/75 transition-colors",
                        disabled: zoomLevel.value >= 3,
                        "aria-label": "Zoom in"
                      }, [
                        createVNode(unref(ZoomIn), { class: "w-6 h-6" })
                      ], 8, ["onClick", "disabled"])
                    ]),
                    currentImageIndex.value > 0 ? (openBlock(), createBlock("button", {
                      key: 0,
                      onClick: ($event) => navigateImage("prev"),
                      class: "absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/50 dark:bg-white/50 p-2 text-white dark:text-black hover:bg-black/75 dark:hover:bg-white/75 transition-colors",
                      "aria-label": "Previous image"
                    }, [
                      createVNode(unref(ChevronLeft), { class: "w-8 h-8" })
                    ], 8, ["onClick"])) : createCommentVNode("", true),
                    currentImageIndex.value < allImages.value.length - 1 ? (openBlock(), createBlock("button", {
                      key: 1,
                      onClick: ($event) => navigateImage("next"),
                      class: "absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/50 dark:bg-white/50 p-2 text-white dark:text-black hover:bg-black/75 dark:hover:bg-white/75 transition-colors",
                      "aria-label": "Next image"
                    }, [
                      createVNode(unref(ChevronRight), { class: "w-8 h-8" })
                    ], 8, ["onClick"])) : createCommentVNode("", true),
                    isLoading.value ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "absolute inset-0 flex items-center justify-center bg-black/50 dark:bg-white/50"
                    }, [
                      createVNode(unref(Loader2), { class: "w-8 h-8 text-white dark:text-black animate-spin" })
                    ])) : createCommentVNode("", true),
                    createVNode("div", {
                      class: "overflow-auto max-h-[90vh] flex items-center justify-center bg-gray-50 dark:bg-gray-900",
                      style: { cursor: zoomLevel.value > 1 ? "move" : "default" }
                    }, [
                      selectedImage.value ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: selectedImage.value.url,
                        alt: selectedImage.value.original_name,
                        class: "w-full h-auto object-contain transition-transform duration-300",
                        style: { transform: `scale(${zoomLevel.value})` },
                        onLoad: handleImageLoad,
                        loading: "lazy"
                      }, null, 44, ["src", "alt"])) : createCommentVNode("", true)
                    ], 4),
                    createVNode("div", { class: "absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 dark:bg-white/50 px-3 py-1 rounded-full text-white dark:text-black text-sm" }, toDisplayString(currentImageIndex.value + 1) + " / " + toDisplayString(allImages.value.length), 1)
                  ])
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
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ImageGallery.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendar",
  __ssrInlineRender: true,
  props: {
    defaultPlaceholder: {},
    defaultValue: {},
    modelValue: {},
    placeholder: {},
    allowNonContiguousRanges: { type: Boolean },
    pagedNavigation: { type: Boolean },
    preventDeselect: { type: Boolean },
    maximumDays: {},
    weekStartsOn: {},
    weekdayFormat: {},
    calendarLabel: {},
    fixedWeeks: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: {},
    numberOfMonths: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    initialFocus: { type: Boolean },
    isDateDisabled: { type: Function },
    isDateUnavailable: { type: Function },
    isDateHighlightable: { type: Function },
    dir: {},
    nextPage: { type: Function },
    prevPage: { type: Function },
    disableDaysOutsideCurrentView: { type: Boolean },
    fixedDate: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue", "update:validModelValue", "update:placeholder", "update:startValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarRoot), mergeProps({
        "data-slot": "range-calendar",
        class: unref(cn)("p-3", props.class)
      }, unref(forwarded), _attrs), {
        default: withCtx(({ grid, weekDays }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$8), null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$7), null, null, _parent3, _scopeId2));
                  _push3(`<div class="flex items-center gap-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(unref(_sfc_main$7)),
                    createVNode("div", { class: "flex items-center gap-1" }, [
                      createVNode(unref(_sfc_main$5)),
                      createVNode(unref(_sfc_main$6))
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0"${_scopeId}><!--[-->`);
            ssrRenderList(grid, (month) => {
              _push2(ssrRenderComponent(unref(_sfc_main$d), {
                key: month.value.toString()
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$b), null, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$a), null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(weekDays, (day) => {
                                  _push5(ssrRenderComponent(unref(_sfc_main$9), { key: day }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(day)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(day), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                    return openBlock(), createBlock(unref(_sfc_main$9), { key: day }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(day), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$a), null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                  return openBlock(), createBlock(unref(_sfc_main$9), { key: day }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(day), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$c), null, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(month.rows, (weekDates, index) => {
                            _push4(ssrRenderComponent(unref(_sfc_main$a), {
                              key: `weekDate-${index}`,
                              class: "mt-2 w-full"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<!--[-->`);
                                  ssrRenderList(weekDates, (weekDate) => {
                                    _push5(ssrRenderComponent(unref(_sfc_main$f), {
                                      key: weekDate.toString(),
                                      date: weekDate
                                    }, {
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(unref(_sfc_main$e), {
                                            day: weekDate,
                                            month: month.value
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$e), {
                                              day: weekDate,
                                              month: month.value
                                            }, null, 8, ["day", "month"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                      return openBlock(), createBlock(unref(_sfc_main$f), {
                                        key: weekDate.toString(),
                                        date: weekDate
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$e), {
                                            day: weekDate,
                                            month: month.value
                                          }, null, 8, ["day", "month"])
                                        ]),
                                        _: 2
                                      }, 1032, ["date"]);
                                    }), 128))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                              return openBlock(), createBlock(unref(_sfc_main$a), {
                                key: `weekDate-${index}`,
                                class: "mt-2 w-full"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                    return openBlock(), createBlock(unref(_sfc_main$f), {
                                      key: weekDate.toString(),
                                      date: weekDate
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$e), {
                                          day: weekDate,
                                          month: month.value
                                        }, null, 8, ["day", "month"])
                                      ]),
                                      _: 2
                                    }, 1032, ["date"]);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$b), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$a), null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                return openBlock(), createBlock(unref(_sfc_main$9), { key: day }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(day), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(_sfc_main$c), null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                            return openBlock(), createBlock(unref(_sfc_main$a), {
                              key: `weekDate-${index}`,
                              class: "mt-2 w-full"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                  return openBlock(), createBlock(unref(_sfc_main$f), {
                                    key: weekDate.toString(),
                                    date: weekDate
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$e), {
                                        day: weekDate,
                                        month: month.value
                                      }, null, 8, ["day", "month"])
                                    ]),
                                    _: 2
                                  }, 1032, ["date"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(unref(_sfc_main$8), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$7)),
                  createVNode("div", { class: "flex items-center gap-1" }, [
                    createVNode(unref(_sfc_main$5)),
                    createVNode(unref(_sfc_main$6))
                  ])
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(grid, (month) => {
                  return openBlock(), createBlock(unref(_sfc_main$d), {
                    key: month.value.toString()
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$b), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$a), null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                return openBlock(), createBlock(unref(_sfc_main$9), { key: day }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(day), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(_sfc_main$c), null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                            return openBlock(), createBlock(unref(_sfc_main$a), {
                              key: `weekDate-${index}`,
                              class: "mt-2 w-full"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                  return openBlock(), createBlock(unref(_sfc_main$f), {
                                    key: weekDate.toString(),
                                    date: weekDate
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$e), {
                                        day: weekDate,
                                        month: month.value
                                      }, null, 8, ["day", "month"])
                                    ]),
                                    _: 2
                                  }, 1032, ["date"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendar.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarCell",
  __ssrInlineRender: true,
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarCell), mergeProps({
        "data-slot": "range-calendar-cell",
        class: unref(cn)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-accent first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md", props.class)
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarCell.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarCellTrigger",
  __ssrInlineRender: true,
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "button" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarCellTrigger), mergeProps({
        "data-slot": "range-calendar-trigger",
        class: unref(cn)(
          unref(buttonVariants)({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal data-[selected]:opacity-100",
          "[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground",
          // Selection Start
          "data-[selection-start]:bg-primary data-[selection-start]:text-primary-foreground data-[selection-start]:hover:bg-primary data-[selection-start]:hover:text-primary-foreground data-[selection-start]:focus:bg-primary data-[selection-start]:focus:text-primary-foreground",
          // Selection End
          "data-[selection-end]:bg-primary data-[selection-end]:text-primary-foreground data-[selection-end]:hover:bg-primary data-[selection-end]:hover:text-primary-foreground data-[selection-end]:focus:bg-primary data-[selection-end]:focus:text-primary-foreground",
          // Outside months
          "data-[outside-view]:text-muted-foreground",
          // Disabled
          "data-[disabled]:text-muted-foreground data-[disabled]:opacity-50",
          // Unavailable
          "data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through",
          props.class
        )
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarCellTrigger.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarGrid",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarGrid), mergeProps({
        "data-slot": "range-calendar-grid",
        class: unref(cn)("w-full border-collapse space-x-1", props.class)
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarGrid.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarGridBody",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarGridBody), mergeProps({ "data-slot": "range-calendar-grid-body" }, props, _attrs), {
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarGridBody.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarGridHead",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarGridHead), mergeProps({ "data-slot": "range-calendar-grid-head" }, props, _attrs), {
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarGridHead.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarGridRow",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarGridRow), mergeProps({
        "data-slot": "range-calendar-grid-row",
        class: unref(cn)("flex", props.class)
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarGridRow.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarHeadCell",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarHeadCell), mergeProps({
        "data-slot": "range-calendar-head-cell",
        class: unref(cn)("w-8 rounded-md text-[0.8rem] font-normal text-muted-foreground", props.class)
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarHeadCell.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarHeader",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarHeader), mergeProps({
        "data-slot": "range-calendar-header",
        class: unref(cn)("flex justify-center pt-1 relative items-center w-full", props.class)
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarHeader.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarHeading",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarHeading), mergeProps({
        "data-slot": "range-calendar-heading",
        class: unref(cn)("text-sm font-medium", props.class)
      }, unref(forwardedProps), _attrs), {
        default: withCtx(({ headingValue }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", { headingValue }, () => {
              _push2(`${ssrInterpolate(headingValue)}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", { headingValue }, () => [
                createTextVNode(toDisplayString(headingValue), 1)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarHeading.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarNextButton",
  __ssrInlineRender: true,
  props: {
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarNext), mergeProps({
        "data-slot": "range-calendar-next-button",
        class: unref(cn)(
          unref(buttonVariants)({ variant: "outline" }),
          "absolute right-1",
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          props.class
        )
      }, unref(forwardedProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ChevronRight), { class: "size-4" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ChevronRight), { class: "size-4" })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarNextButton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarPrevButton",
  __ssrInlineRender: true,
  props: {
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarPrev), mergeProps({
        "data-slot": "range-calendar-prev-button",
        class: unref(cn)(
          unref(buttonVariants)({ variant: "outline" }),
          "absolute left-1",
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          props.class
        )
      }, unref(forwardedProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ChevronLeft), { class: "size-4" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ChevronLeft), { class: "size-4" })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarPrevButton.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DateRangePicker",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Object,
      default: () => ({ from: null, to: null })
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const value = computed({
      get: () => ({
        start: props.modelValue.from,
        end: props.modelValue.to
      }),
      set: (newValue) => {
        emit("update:modelValue", {
          from: newValue.start,
          to: newValue.end
        });
      }
    });
    const df = new DateFormatter("fr-FR", {
      dateStyle: "medium"
    });
    const buttonClasses = computed(() => {
      return [
        "w-[280px] justify-start text-left font-normal",
        !value.value && "text-muted-foreground"
      ].filter(Boolean).join(" ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$n), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$o), { asChild: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$p), {
                    variant: "outline",
                    class: buttonClasses.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(CalendarIcon), { class: "mr-2 h-4 w-4" }, null, _parent4, _scopeId3));
                        if (value.value.start) {
                          _push4(`<!--[-->`);
                          if (value.value.end) {
                            _push4(`<!--[-->${ssrInterpolate(unref(df).format(value.value.start.toDate(unref(getLocalTimeZone)())))} - ${ssrInterpolate(unref(df).format(value.value.end.toDate(unref(getLocalTimeZone)())))}<!--]-->`);
                          } else {
                            _push4(`<!--[-->${ssrInterpolate(unref(df).format(value.value.start.toDate(unref(getLocalTimeZone)())))}<!--]-->`);
                          }
                          _push4(`<!--]-->`);
                        } else {
                          _push4(`<!--[--> Choisir une date <!--]-->`);
                        }
                      } else {
                        return [
                          createVNode(unref(CalendarIcon), { class: "mr-2 h-4 w-4" }),
                          value.value.start ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            value.value.end ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createTextVNode(toDisplayString(unref(df).format(value.value.start.toDate(unref(getLocalTimeZone)()))) + " - " + toDisplayString(unref(df).format(value.value.end.toDate(unref(getLocalTimeZone)()))), 1)
                            ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createTextVNode(toDisplayString(unref(df).format(value.value.start.toDate(unref(getLocalTimeZone)()))), 1)
                            ], 64))
                          ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createTextVNode(" Choisir une date ")
                          ], 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$p), {
                      variant: "outline",
                      class: buttonClasses.value
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(CalendarIcon), { class: "mr-2 h-4 w-4" }),
                        value.value.start ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          value.value.end ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createTextVNode(toDisplayString(unref(df).format(value.value.start.toDate(unref(getLocalTimeZone)()))) + " - " + toDisplayString(unref(df).format(value.value.end.toDate(unref(getLocalTimeZone)()))), 1)
                          ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createTextVNode(toDisplayString(unref(df).format(value.value.start.toDate(unref(getLocalTimeZone)()))), 1)
                          ], 64))
                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createTextVNode(" Choisir une date ")
                        ], 64))
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$q), {
              class: "w-auto p-0",
              align: "start"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$g), mergeProps(_ctx.$attrs, {
                    modelValue: value.value,
                    "onUpdate:modelValue": [($event) => value.value = $event, (newValue) => {
                      value.value.start = newValue.start;
                      value.value.end = newValue.end;
                    }]
                  }), null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$g), mergeProps(_ctx.$attrs, {
                      modelValue: value.value,
                      "onUpdate:modelValue": [($event) => value.value = $event, (newValue) => {
                        value.value.start = newValue.start;
                        value.value.end = newValue.end;
                      }]
                    }), null, 16, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$o), { asChild: "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$p), {
                    variant: "outline",
                    class: buttonClasses.value
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(CalendarIcon), { class: "mr-2 h-4 w-4" }),
                      value.value.start ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        value.value.end ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createTextVNode(toDisplayString(unref(df).format(value.value.start.toDate(unref(getLocalTimeZone)()))) + " - " + toDisplayString(unref(df).format(value.value.end.toDate(unref(getLocalTimeZone)()))), 1)
                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createTextVNode(toDisplayString(unref(df).format(value.value.start.toDate(unref(getLocalTimeZone)()))), 1)
                        ], 64))
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createTextVNode(" Choisir une date ")
                      ], 64))
                    ]),
                    _: 1
                  }, 8, ["class"])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$q), {
                class: "w-auto p-0",
                align: "start"
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$g), mergeProps(_ctx.$attrs, {
                    modelValue: value.value,
                    "onUpdate:modelValue": [($event) => value.value = $event, (newValue) => {
                      value.value.start = newValue.start;
                      value.value.end = newValue.end;
                    }]
                  }), null, 16, ["modelValue", "onUpdate:modelValue"])
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/DateRangePicker.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "ReservationForm",
  __ssrInlineRender: true,
  props: {
    equipment: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const disableQuantityField = ref(true);
    const availableQuantity = ref(0);
    const dateRange = ref({
      from: null,
      to: null
    });
    const form = useForm({
      rental_start: null,
      rental_end: null,
      quantity: 1
    });
    watch(dateRange, (newValue) => {
      disableQuantityField.value = true;
      if (!newValue.from || !newValue.to) return;
      const start = newValue.from instanceof CalendarDate ? newValue.from.toDate(getLocalTimeZone()).toDateString() : newValue.from.toDateString();
      const end = newValue.to instanceof CalendarDate ? newValue.to.toDate(getLocalTimeZone()).toDateString() : newValue.to.toDateString();
      axios.get(route("api.equipments.available-quantity", {
        equipment: props.equipment.id,
        start,
        end
      })).then((response) => {
        availableQuantity.value = response.data;
        if (availableQuantity.value > 0) {
          disableQuantityField.value = false;
          form.quantity = 1;
        }
        if (availableQuantity.value === 0) {
          form.quantity = 0;
        }
      });
      form.rental_start = start;
      form.rental_end = end;
    }, { deep: true });
    const handleReservation = () => {
      form.post(route("carts.add", props.equipment.id), {
        onSuccess: () => {
          toast.success("Article ajouté au camion");
          form.reset();
          dateRange.value = { from: null, to: null };
        },
        onError: (errors) => {
          toast.error("Erreur lors de l'ajout au camion", {
            description: Object.values(errors).join(", ")
          });
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$j), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$r), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$s), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Faire une demande de réservation`);
                      } else {
                        return [
                          createTextVNode("Faire une demande de réservation")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$s), null, {
                      default: withCtx(() => [
                        createTextVNode("Faire une demande de réservation")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$k), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form id="reservation-form"${_scopeId2}><div class="space-y-4"${_scopeId2}><div class="space-y-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$t), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Période de location`);
                      } else {
                        return [
                          createTextVNode("Période de location")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    modelValue: dateRange.value,
                    "onUpdate:modelValue": ($event) => dateRange.value = $event,
                    "start-day": "1",
                    "min-value": unref(today)(unref(getLocalTimeZone)()).add({ days: 2 }),
                    locale: "fr-FR",
                    disabled: false
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="space-y-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$t), { for: "quantity" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Quantité`);
                      } else {
                        return [
                          createTextVNode("Quantité")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$u), {
                    id: "quantity",
                    type: "number",
                    modelValue: unref(form).quantity,
                    "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
                    min: 0,
                    max: availableQuantity.value,
                    disabled: disableQuantityField.value
                  }, null, _parent3, _scopeId2));
                  if (availableQuantity.value > 0) {
                    _push3(`<p class="text-xs text-gray-500"${_scopeId2}>${ssrInterpolate(availableQuantity.value)} disponible${ssrInterpolate(availableQuantity.value > 1 ? "s" : "")} pour la période sélectionnée. </p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (availableQuantity.value === 0 && dateRange.value.from && dateRange.value.to) {
                    _push3(`<p class="text-xs text-red-500"${_scopeId2}> Aucune disponibilité pour la période sélectionnée. </p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div></form>`);
                } else {
                  return [
                    createVNode("form", {
                      id: "reservation-form",
                      onSubmit: withModifiers(handleReservation, ["prevent"])
                    }, [
                      createVNode("div", { class: "space-y-4" }, [
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode(unref(_sfc_main$t), null, {
                            default: withCtx(() => [
                              createTextVNode("Période de location")
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$4, {
                            modelValue: dateRange.value,
                            "onUpdate:modelValue": ($event) => dateRange.value = $event,
                            "start-day": "1",
                            "min-value": unref(today)(unref(getLocalTimeZone)()).add({ days: 2 }),
                            locale: "fr-FR",
                            disabled: false
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "min-value"])
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode(unref(_sfc_main$t), { for: "quantity" }, {
                            default: withCtx(() => [
                              createTextVNode("Quantité")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$u), {
                            id: "quantity",
                            type: "number",
                            modelValue: unref(form).quantity,
                            "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
                            min: 0,
                            max: availableQuantity.value,
                            disabled: disableQuantityField.value
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "max", "disabled"]),
                          availableQuantity.value > 0 ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-xs text-gray-500"
                          }, toDisplayString(availableQuantity.value) + " disponible" + toDisplayString(availableQuantity.value > 1 ? "s" : "") + " pour la période sélectionnée. ", 1)) : createCommentVNode("", true),
                          availableQuantity.value === 0 && dateRange.value.from && dateRange.value.to ? (openBlock(), createBlock("p", {
                            key: 1,
                            class: "text-xs text-red-500"
                          }, " Aucune disponibilité pour la période sélectionnée. ")) : createCommentVNode("", true)
                        ])
                      ])
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$v), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$p), {
                    type: "submit",
                    form: "reservation-form",
                    disabled: !unref(form).quantity || !unref(form).rental_start || !unref(form).rental_end || unref(form).quantity <= 0,
                    onClick: handleReservation
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Truck), { class: "mr-2 h-4 w-4" }, null, _parent4, _scopeId3));
                        _push4(` Charger dans mon camion `);
                      } else {
                        return [
                          createVNode(unref(Truck), { class: "mr-2 h-4 w-4" }),
                          createTextVNode(" Charger dans mon camion ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$p), {
                      type: "submit",
                      form: "reservation-form",
                      disabled: !unref(form).quantity || !unref(form).rental_start || !unref(form).rental_end || unref(form).quantity <= 0,
                      onClick: handleReservation
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Truck), { class: "mr-2 h-4 w-4" }),
                        createTextVNode(" Charger dans mon camion ")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$r), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$s), null, {
                    default: withCtx(() => [
                      createTextVNode("Faire une demande de réservation")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$k), null, {
                default: withCtx(() => [
                  createVNode("form", {
                    id: "reservation-form",
                    onSubmit: withModifiers(handleReservation, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode(unref(_sfc_main$t), null, {
                          default: withCtx(() => [
                            createTextVNode("Période de location")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$4, {
                          modelValue: dateRange.value,
                          "onUpdate:modelValue": ($event) => dateRange.value = $event,
                          "start-day": "1",
                          "min-value": unref(today)(unref(getLocalTimeZone)()).add({ days: 2 }),
                          locale: "fr-FR",
                          disabled: false
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "min-value"])
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode(unref(_sfc_main$t), { for: "quantity" }, {
                          default: withCtx(() => [
                            createTextVNode("Quantité")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$u), {
                          id: "quantity",
                          type: "number",
                          modelValue: unref(form).quantity,
                          "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
                          min: 0,
                          max: availableQuantity.value,
                          disabled: disableQuantityField.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "max", "disabled"]),
                        availableQuantity.value > 0 ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-gray-500"
                        }, toDisplayString(availableQuantity.value) + " disponible" + toDisplayString(availableQuantity.value > 1 ? "s" : "") + " pour la période sélectionnée. ", 1)) : createCommentVNode("", true),
                        availableQuantity.value === 0 && dateRange.value.from && dateRange.value.to ? (openBlock(), createBlock("p", {
                          key: 1,
                          class: "text-xs text-red-500"
                        }, " Aucune disponibilité pour la période sélectionnée. ")) : createCommentVNode("", true)
                      ])
                    ])
                  ], 32)
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$v), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$p), {
                    type: "submit",
                    form: "reservation-form",
                    disabled: !unref(form).quantity || !unref(form).rental_start || !unref(form).rental_end || unref(form).quantity <= 0,
                    onClick: handleReservation
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Truck), { class: "mr-2 h-4 w-4" }),
                      createTextVNode(" Charger dans mon camion ")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ReservationForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "EquipmentMiniMap",
  __ssrInlineRender: true,
  props: {
    city: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const mapContainer = ref(null);
    let map = null;
    let circle = null;
    const getCityCoordinates = async (city) => {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`);
      const data = await response.json();
      if (data && data[0]) {
        return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
      }
      return [48.8566, 2.3522];
    };
    const initializeMap = async () => {
      if (!mapContainer.value) return;
      const coordinates = await getCityCoordinates(props.city);
      map = L.map(mapContainer.value, {
        scrollWheelZoom: false
      }).setView(coordinates, 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
      const radius = 1e3;
      circle = L.circle(coordinates, {
        radius,
        color: "rgb(147, 51, 234)",
        fillColor: "rgb(147, 51, 234)",
        fillOpacity: 0.2,
        weight: 2
      }).addTo(map);
    };
    watch(() => props.city, async (newCity) => {
      if (map) {
        const coordinates = await getCityCoordinates(newCity);
        map.setView(coordinates, 13);
        if (circle) {
          circle.setLatLng(coordinates);
        }
      }
    });
    onMounted(() => {
      initializeMap();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-60 rounded-lg overflow-hidden" }, _attrs))}><div class="w-full h-full"></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/EquipmentMiniMap.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "EquipmentCalendar",
  __ssrInlineRender: true,
  props: {
    equipment: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const availabilities = ref([]);
    const availabilityStatuses = [
      { label: "Disponible", color: "bg-green-500" },
      { label: "Option posée", color: "bg-orange-500" },
      { label: "Réservé", color: "bg-red-500" }
    ];
    const calendarOptions = computed(() => ({
      plugins: [dayGridPlugin],
      initialView: "dayGridMonth",
      datesSet: (dateInfo) => {
        const year = dateInfo.view.currentStart.getFullYear();
        const month = dateInfo.view.currentStart.getMonth();
        fetchAvailabilities(year, month);
      },
      headerToolbar: {
        left: "prev",
        center: "title",
        right: "next"
      },
      events: availabilities.value,
      locale: frLocale,
      height: "auto",
      editable: false,
      selectable: false,
      selectMirror: false,
      nowIndicator: false,
      eventDisplay: "list-item",
      displayEventTime: false,
      displayEventEnd: false,
      eventClassNames: "availibilityEvent",
      showNonCurrentDates: true
      // validRange: {
      //     start: new Date().toISOString().split('T')[0],
      // }
    }));
    const fetchAvailabilities = async (year, month) => {
      loading.value = true;
      try {
        const response = await axios.get(route("api.equipments.reservations-dates-by-month", {
          equipment: props.equipment.id,
          month: month + 1,
          year
        }));
        const apiEvents = response.data.map((event) => ({
          start: event.date,
          display: "list-item",
          backgroundColor: event.color,
          borderColor: event.color,
          classNames: "availibilityEvent"
        }));
        const eventDates = new Map(apiEvents.map((event) => [event.start, event]));
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const allDates = Array.from({ length: daysInMonth }, (_, day) => {
          const d = new Date(Date.UTC(year, month, day + 1));
          const dateStr = d.toISOString().split("T")[0];
          return eventDates.has(dateStr) ? eventDates.get(dateStr) : {
            start: dateStr,
            display: "list-item",
            backgroundColor: "#22c55e",
            // Default green for available dates
            borderColor: "#22c55e",
            classNames: "availibilityEvent"
          };
        });
        availabilities.value = allDates;
      } catch (error) {
        console.error("Erreur lors du chargement des disponibilités:", error);
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4 availability-calendar-container" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FullCalendar), { options: calendarOptions.value }, null, _parent));
      _push(`<div class="flex justify-evenly gap-2 flex-wrap text-sm text-muted-foreground"><!--[-->`);
      ssrRenderList(availabilityStatuses, (status, index) => {
        _push(`<div class="flex items-center gap-1"><div class="${ssrRenderClass(`size-2 rounded-full ${status.color}`)}"></div><span>${ssrInterpolate(status.label)}</span></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/EquipmentCalendar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    equipment: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const formatPrice = (price) => {
      return new Intl.NumberFormat("fr-FR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(price);
    };
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const formatSpecificationKey = (key) => {
      return key.split("_").map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
      ).join(" ");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$w, mergeProps({
        title: __props.equipment.name,
        description: __props.equipment.description,
        image: __props.equipment.images && __props.equipment.images.length > 0 ? __props.equipment.images[0].url : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8"${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"${_scopeId}><div class="lg:col-span-2 space-y-8"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$j), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$r), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-2"${_scopeId3}><div class="flex items-center gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$x), { variant: "primary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a2, _b2;
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(User), { class: "w-4 h-4" }, null, _parent5, _scopeId4));
                              _push5(` ${ssrInterpolate((_a2 = __props.equipment.organization) == null ? void 0 : _a2.name)}`);
                            } else {
                              return [
                                createVNode(unref(User), { class: "w-4 h-4" }),
                                createTextVNode(" " + toDisplayString((_b2 = __props.equipment.organization) == null ? void 0 : _b2.name), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$x), { variant: "outline" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a2, _b2;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a2 = __props.equipment.category) == null ? void 0 : _a2.name)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b2 = __props.equipment.category) == null ? void 0 : _b2.name), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$s), { class: "text-3xl" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(__props.equipment.name)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(__props.equipment.name), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$y), { class: "text-lg" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(__props.equipment.description)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(__props.equipment.description), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode(unref(_sfc_main$x), { variant: "primary" }, {
                                default: withCtx(() => {
                                  var _a2;
                                  return [
                                    createVNode(unref(User), { class: "w-4 h-4" }),
                                    createTextVNode(" " + toDisplayString((_a2 = __props.equipment.organization) == null ? void 0 : _a2.name), 1)
                                  ];
                                }),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$x), { variant: "outline" }, {
                                default: withCtx(() => {
                                  var _a2;
                                  return [
                                    createTextVNode(toDisplayString((_a2 = __props.equipment.category) == null ? void 0 : _a2.name), 1)
                                  ];
                                }),
                                _: 1
                              })
                            ]),
                            createVNode(unref(_sfc_main$s), { class: "text-3xl" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(__props.equipment.name), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$y), { class: "text-lg" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(__props.equipment.description), 1)
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$r), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(unref(_sfc_main$x), { variant: "primary" }, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  createVNode(unref(User), { class: "w-4 h-4" }),
                                  createTextVNode(" " + toDisplayString((_a2 = __props.equipment.organization) == null ? void 0 : _a2.name), 1)
                                ];
                              }),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$x), { variant: "outline" }, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  createTextVNode(toDisplayString((_a2 = __props.equipment.category) == null ? void 0 : _a2.name), 1)
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          createVNode(unref(_sfc_main$s), { class: "text-3xl" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.equipment.name), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$y), { class: "text-lg" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.equipment.description), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.equipment.images && __props.equipment.images.length > 0) {
              _push2(ssrRenderComponent(_sfc_main$h, {
                images: __props.equipment.images
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.equipment.specifications || __props.equipment.last_maintenance_date || __props.equipment.next_maintenance_date) {
              _push2(ssrRenderComponent(unref(_sfc_main$j), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$k), { class: "space-y-6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (__props.equipment.specifications) {
                            _push4(`<div${_scopeId3}><h3 class="text-lg font-semibold mb-2"${_scopeId3}>Spécifications</h3><div class="grid grid-cols-2 gap-4"${_scopeId3}><!--[-->`);
                            ssrRenderList(__props.equipment.specifications, (value, key) => {
                              _push4(`<div${_scopeId3}><h4 class="text-sm font-medium text-muted-foreground"${_scopeId3}>${ssrInterpolate(formatSpecificationKey(key))}</h4><p class="mt-1"${_scopeId3}>${ssrInterpolate(value)}</p></div>`);
                            });
                            _push4(`<!--]--></div></div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (__props.equipment.last_maintenance_date || __props.equipment.next_maintenance_date) {
                            _push4(`<div${_scopeId3}><h3 class="text-lg font-semibold mb-2"${_scopeId3}>Informations de maintenance</h3><div class="grid grid-cols-2 gap-4"${_scopeId3}>`);
                            if (__props.equipment.last_maintenance_date) {
                              _push4(`<div${_scopeId3}><h4 class="text-sm font-medium text-muted-foreground"${_scopeId3}>Dernière maintenance</h4><p class="mt-1"${_scopeId3}>${ssrInterpolate(formatDate(__props.equipment.last_maintenance_date))}</p></div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            if (__props.equipment.next_maintenance_date) {
                              _push4(`<div${_scopeId3}><h4 class="text-sm font-medium text-muted-foreground"${_scopeId3}>Prochaine maintenance</h4><p class="mt-1"${_scopeId3}>${ssrInterpolate(formatDate(__props.equipment.next_maintenance_date))}</p></div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div></div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            __props.equipment.specifications ? (openBlock(), createBlock("div", { key: 0 }, [
                              createVNode("h3", { class: "text-lg font-semibold mb-2" }, "Spécifications"),
                              createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.equipment.specifications, (value, key) => {
                                  return openBlock(), createBlock("div", { key }, [
                                    createVNode("h4", { class: "text-sm font-medium text-muted-foreground" }, toDisplayString(formatSpecificationKey(key)), 1),
                                    createVNode("p", { class: "mt-1" }, toDisplayString(value), 1)
                                  ]);
                                }), 128))
                              ])
                            ])) : createCommentVNode("", true),
                            __props.equipment.last_maintenance_date || __props.equipment.next_maintenance_date ? (openBlock(), createBlock("div", { key: 1 }, [
                              createVNode("h3", { class: "text-lg font-semibold mb-2" }, "Informations de maintenance"),
                              createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                __props.equipment.last_maintenance_date ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode("h4", { class: "text-sm font-medium text-muted-foreground" }, "Dernière maintenance"),
                                  createVNode("p", { class: "mt-1" }, toDisplayString(formatDate(__props.equipment.last_maintenance_date)), 1)
                                ])) : createCommentVNode("", true),
                                __props.equipment.next_maintenance_date ? (openBlock(), createBlock("div", { key: 1 }, [
                                  createVNode("h4", { class: "text-sm font-medium text-muted-foreground" }, "Prochaine maintenance"),
                                  createVNode("p", { class: "mt-1" }, toDisplayString(formatDate(__props.equipment.next_maintenance_date)), 1)
                                ])) : createCommentVNode("", true)
                              ])
                            ])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$k), { class: "space-y-6" }, {
                        default: withCtx(() => [
                          __props.equipment.specifications ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode("h3", { class: "text-lg font-semibold mb-2" }, "Spécifications"),
                            createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.equipment.specifications, (value, key) => {
                                return openBlock(), createBlock("div", { key }, [
                                  createVNode("h4", { class: "text-sm font-medium text-muted-foreground" }, toDisplayString(formatSpecificationKey(key)), 1),
                                  createVNode("p", { class: "mt-1" }, toDisplayString(value), 1)
                                ]);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true),
                          __props.equipment.last_maintenance_date || __props.equipment.next_maintenance_date ? (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode("h3", { class: "text-lg font-semibold mb-2" }, "Informations de maintenance"),
                            createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                              __props.equipment.last_maintenance_date ? (openBlock(), createBlock("div", { key: 0 }, [
                                createVNode("h4", { class: "text-sm font-medium text-muted-foreground" }, "Dernière maintenance"),
                                createVNode("p", { class: "mt-1" }, toDisplayString(formatDate(__props.equipment.last_maintenance_date)), 1)
                              ])) : createCommentVNode("", true),
                              __props.equipment.next_maintenance_date ? (openBlock(), createBlock("div", { key: 1 }, [
                                createVNode("h4", { class: "text-sm font-medium text-muted-foreground" }, "Prochaine maintenance"),
                                createVNode("p", { class: "mt-1" }, toDisplayString(formatDate(__props.equipment.next_maintenance_date)), 1)
                              ])) : createCommentVNode("", true)
                            ])
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$2, {
              city: (_a = __props.equipment.depot) == null ? void 0 : _a.city
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-8"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$j), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$r), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$s), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Tarification`);
                            } else {
                              return [
                                createTextVNode("Tarification")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$s), null, {
                            default: withCtx(() => [
                              createTextVNode("Tarification")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$k), { class: "space-y-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center justify-between"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}>Prix de location</span><span class="text-2xl font-bold"${_scopeId3}>${ssrInterpolate(formatPrice(__props.equipment.rental_price))} € / jour</span></div>`);
                        if (__props.equipment.requires_deposit) {
                          _push4(`<div class="flex items-center justify-between"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}>Caution requise</span><span class="font-medium"${_scopeId3}>${ssrInterpolate(formatPrice(__props.equipment.deposit_amount))} €</span></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("span", { class: "text-muted-foreground" }, "Prix de location"),
                            createVNode("span", { class: "text-2xl font-bold" }, toDisplayString(formatPrice(__props.equipment.rental_price)) + " € / jour", 1)
                          ]),
                          __props.equipment.requires_deposit ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex items-center justify-between"
                          }, [
                            createVNode("span", { class: "text-muted-foreground" }, "Caution requise"),
                            createVNode("span", { class: "font-medium" }, toDisplayString(formatPrice(__props.equipment.deposit_amount)) + " €", 1)
                          ])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$r), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$s), null, {
                          default: withCtx(() => [
                            createTextVNode("Tarification")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$k), { class: "space-y-4" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("span", { class: "text-muted-foreground" }, "Prix de location"),
                          createVNode("span", { class: "text-2xl font-bold" }, toDisplayString(formatPrice(__props.equipment.rental_price)) + " € / jour", 1)
                        ]),
                        __props.equipment.requires_deposit ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex items-center justify-between"
                        }, [
                          createVNode("span", { class: "text-muted-foreground" }, "Caution requise"),
                          createVNode("span", { class: "font-medium" }, toDisplayString(formatPrice(__props.equipment.deposit_amount)) + " €", 1)
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="lg:col-span-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { equipment: __props.equipment }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$j), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$r), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$s), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Disponibilités`);
                            } else {
                              return [
                                createTextVNode("Disponibilités")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$s), null, {
                            default: withCtx(() => [
                              createTextVNode("Disponibilités")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$k), { class: "space-y-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$1, { equipment: __props.equipment }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$1, { equipment: __props.equipment }, null, 8, ["equipment"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$r), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$s), null, {
                          default: withCtx(() => [
                            createTextVNode("Disponibilités")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$k), { class: "space-y-4" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1, { equipment: __props.equipment }, null, 8, ["equipment"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8" }, [
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-8" }, [
                  createVNode("div", { class: "lg:col-span-2 space-y-8" }, [
                    createVNode(unref(_sfc_main$j), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$r), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode(unref(_sfc_main$x), { variant: "primary" }, {
                                  default: withCtx(() => {
                                    var _a2;
                                    return [
                                      createVNode(unref(User), { class: "w-4 h-4" }),
                                      createTextVNode(" " + toDisplayString((_a2 = __props.equipment.organization) == null ? void 0 : _a2.name), 1)
                                    ];
                                  }),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$x), { variant: "outline" }, {
                                  default: withCtx(() => {
                                    var _a2;
                                    return [
                                      createTextVNode(toDisplayString((_a2 = __props.equipment.category) == null ? void 0 : _a2.name), 1)
                                    ];
                                  }),
                                  _: 1
                                })
                              ]),
                              createVNode(unref(_sfc_main$s), { class: "text-3xl" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__props.equipment.name), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$y), { class: "text-lg" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__props.equipment.description), 1)
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    __props.equipment.images && __props.equipment.images.length > 0 ? (openBlock(), createBlock(_sfc_main$h, {
                      key: 0,
                      images: __props.equipment.images
                    }, null, 8, ["images"])) : createCommentVNode("", true),
                    __props.equipment.specifications || __props.equipment.last_maintenance_date || __props.equipment.next_maintenance_date ? (openBlock(), createBlock(unref(_sfc_main$j), { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$k), { class: "space-y-6" }, {
                          default: withCtx(() => [
                            __props.equipment.specifications ? (openBlock(), createBlock("div", { key: 0 }, [
                              createVNode("h3", { class: "text-lg font-semibold mb-2" }, "Spécifications"),
                              createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.equipment.specifications, (value, key) => {
                                  return openBlock(), createBlock("div", { key }, [
                                    createVNode("h4", { class: "text-sm font-medium text-muted-foreground" }, toDisplayString(formatSpecificationKey(key)), 1),
                                    createVNode("p", { class: "mt-1" }, toDisplayString(value), 1)
                                  ]);
                                }), 128))
                              ])
                            ])) : createCommentVNode("", true),
                            __props.equipment.last_maintenance_date || __props.equipment.next_maintenance_date ? (openBlock(), createBlock("div", { key: 1 }, [
                              createVNode("h3", { class: "text-lg font-semibold mb-2" }, "Informations de maintenance"),
                              createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                __props.equipment.last_maintenance_date ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode("h4", { class: "text-sm font-medium text-muted-foreground" }, "Dernière maintenance"),
                                  createVNode("p", { class: "mt-1" }, toDisplayString(formatDate(__props.equipment.last_maintenance_date)), 1)
                                ])) : createCommentVNode("", true),
                                __props.equipment.next_maintenance_date ? (openBlock(), createBlock("div", { key: 1 }, [
                                  createVNode("h4", { class: "text-sm font-medium text-muted-foreground" }, "Prochaine maintenance"),
                                  createVNode("p", { class: "mt-1" }, toDisplayString(formatDate(__props.equipment.next_maintenance_date)), 1)
                                ])) : createCommentVNode("", true)
                              ])
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_sfc_main$2, {
                      city: (_b = __props.equipment.depot) == null ? void 0 : _b.city
                    }, null, 8, ["city"])
                  ]),
                  createVNode("div", { class: "space-y-8" }, [
                    createVNode(unref(_sfc_main$j), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$r), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$s), null, {
                              default: withCtx(() => [
                                createTextVNode("Tarification")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$k), { class: "space-y-4" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("span", { class: "text-muted-foreground" }, "Prix de location"),
                              createVNode("span", { class: "text-2xl font-bold" }, toDisplayString(formatPrice(__props.equipment.rental_price)) + " € / jour", 1)
                            ]),
                            __props.equipment.requires_deposit ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex items-center justify-between"
                            }, [
                              createVNode("span", { class: "text-muted-foreground" }, "Caution requise"),
                              createVNode("span", { class: "font-medium" }, toDisplayString(formatPrice(__props.equipment.deposit_amount)) + " €", 1)
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "lg:col-span-1" }, [
                      createVNode(_sfc_main$3, { equipment: __props.equipment }, null, 8, ["equipment"])
                    ]),
                    createVNode(unref(_sfc_main$j), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$r), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$s), null, {
                              default: withCtx(() => [
                                createTextVNode("Disponibilités")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$k), { class: "space-y-4" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1, { equipment: __props.equipment }, null, 8, ["equipment"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Public/Equipments/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
