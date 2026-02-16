import { mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { a as _sfc_main$1, b as _sfc_main$2, c as _sfc_main$3 } from "./FlashMessage-DoovtZWd.js";
const _sfc_main = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: false,
      default: "/screenshot.png"
    }
  },
  setup(__props) {
    const page = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(__props.title)}</title>`);
            if (__props.description) {
              _push2(`<meta head-key="description" name="description"${ssrRenderAttr("content", __props.description)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.title) {
              _push2(`<meta head-key="og:title" property="og:title"${ssrRenderAttr("content", __props.title)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<link rel="canonical" head-key="canonical"${ssrRenderAttr("href", unref(page).props.canonical)}${_scopeId}>`);
            if (__props.description) {
              _push2(`<meta head-key="og:description" property="og:description"${ssrRenderAttr("content", __props.description)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<meta head-key="og:image" property="og:image"${ssrRenderAttr("content", __props.image)}${_scopeId}><meta head-key="og:url" property="og:url"${ssrRenderAttr("content", unref(page).props.canonical)}${_scopeId}><meta head-key="og:type" property="og:type" content="website"${_scopeId}><meta head-key="og:site_name" property="og:site_name"${ssrRenderAttr("content", unref(page).props.name)}${_scopeId}><meta head-key="og:locale" property="og:locale" content="fr_FR"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(__props.title), 1),
              __props.description ? (openBlock(), createBlock("meta", {
                key: 0,
                "head-key": "description",
                name: "description",
                content: __props.description
              }, null, 8, ["content"])) : createCommentVNode("", true),
              __props.title ? (openBlock(), createBlock("meta", {
                key: 1,
                "head-key": "og:title",
                property: "og:title",
                content: __props.title
              }, null, 8, ["content"])) : createCommentVNode("", true),
              createVNode("link", {
                rel: "canonical",
                "head-key": "canonical",
                href: unref(page).props.canonical
              }, null, 8, ["href"]),
              __props.description ? (openBlock(), createBlock("meta", {
                key: 2,
                "head-key": "og:description",
                property: "og:description",
                content: __props.description
              }, null, 8, ["content"])) : createCommentVNode("", true),
              createVNode("meta", {
                "head-key": "og:image",
                property: "og:image",
                content: __props.image
              }, null, 8, ["content"]),
              createVNode("meta", {
                "head-key": "og:url",
                property: "og:url",
                content: unref(page).props.canonical
              }, null, 8, ["content"]),
              createVNode("meta", {
                "head-key": "og:type",
                property: "og:type",
                content: "website"
              }),
              createVNode("meta", {
                "head-key": "og:site_name",
                property: "og:site_name",
                content: unref(page).props.name
              }, null, 8, ["content"]),
              createVNode("meta", {
                "head-key": "og:locale",
                property: "og:locale",
                content: "fr_FR"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      if (_ctx.$slots.header) {
        _push(`<header class="dark:bg-muted/50 shadow"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 font-title">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
