import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
const _sfc_main = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const translateLabel = (label) => {
      const translations = {
        "&laquo; Previous": "&laquo; Précédent",
        "Next &raquo;": "Suivant &raquo;",
        "Previous": "Précédent",
        "Next": "Suivant",
        "First": "Premier",
        "Last": "Dernier",
        "« Previous": "« Précédent",
        "Next »": "Suivant »",
        "‹ Previous": "‹ Précédent",
        "Next ›": "Suivant ›"
      };
      return translations[label] || label;
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.links.length > 3) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap -mb-1"><!--[-->`);
        ssrRenderList(__props.links, (link, key) => {
          _push(`<!--[-->`);
          if (link.url === null) {
            _push(`<div class="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded">${translateLabel(link.label) ?? ""}</div>`);
          } else {
            _push(`<a class="${ssrRenderClass([{ "bg-primary text-white hover:bg-primary/90": link.active }, "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-gray-100 focus:border-primary focus:text-primary transition-colors"])}"${ssrRenderAttr("href", link.url)}>${translateLabel(link.label) ?? ""}</a>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
