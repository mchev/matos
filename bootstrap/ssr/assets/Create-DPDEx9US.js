import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-B3jJCr1A.js";
import "@inertiajs/vue3";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "reka-ui";
import "./index-53Kg4F4g.js";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
import "lucide-vue-next";
import "@heroicons/vue/24/outline";
import "./index-9VOASAGY.js";
import "vue-sonner";
import "./Input-BNuRmWJk.js";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    organization: Object,
    equipment: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto px-4 py-8"${_scopeId}><h1 class="text-2xl font-bold"${_scopeId}>Créer une réservation</h1><p class="text-muted-foreground"${_scopeId}> La fonctionnalité de réservation n&#39;est pas encore disponible. Vous pouvez d&#39;ores et déjà créer vos matériels pour commencer votre inventaire. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto px-4 py-8" }, [
                createVNode("h1", { class: "text-2xl font-bold" }, "Créer une réservation"),
                createVNode("p", { class: "text-muted-foreground" }, " La fonctionnalité de réservation n'est pas encore disponible. Vous pouvez d'ores et déjà créer vos matériels pour commencer votre inventaire. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Reservations/Out/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
