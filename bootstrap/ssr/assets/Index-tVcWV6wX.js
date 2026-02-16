import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./PublicLayout-Dy_cSdNa.js";
import "./FlashMessage-DoovtZWd.js";
import "@inertiajs/vue3";
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
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AlertCircle = resolveComponent("AlertCircle");
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container mx-auto px-4 py-8"${_scopeId}><div class="max-w-4xl mx-auto"${_scopeId}><h1 class="text-3xl font-bold mb-8"${_scopeId}>L&#39;application est en développement !</h1><div class="space-y-4"${_scopeId}><p class="text-muted-foreground"${_scopeId}> Notre plateforme est en cours de développement et nous travaillons activement pour vous offrir une expérience complète. Certaines fonctionnalités sont déjà disponibles et d&#39;autres arriveront très prochainement. </p><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AlertCircle, { class: "h-5 w-5 text-yellow-500" }, null, _parent2, _scopeId));
            _push2(`<p class="text-sm text-yellow-600"${_scopeId}> La fonctionnalité de réservation sera disponible dans les prochaines semaines. Nous finalisons les derniers détails pour vous garantir une expérience optimale. </p></div><p class="text-muted-foreground"${_scopeId}> En attendant, nous vous invitons à commencer à enrichir notre base de données en ajoutant vos matériels. Plus il y aura de matériels disponibles, plus la plateforme sera utile pour toute la communauté. Commencez dès maintenant à créer votre inventaire ! </p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "container mx-auto px-4 py-8" }, [
                createVNode("div", { class: "max-w-4xl mx-auto" }, [
                  createVNode("h1", { class: "text-3xl font-bold mb-8" }, "L'application est en développement !"),
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode("p", { class: "text-muted-foreground" }, " Notre plateforme est en cours de développement et nous travaillons activement pour vous offrir une expérience complète. Certaines fonctionnalités sont déjà disponibles et d'autres arriveront très prochainement. "),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_AlertCircle, { class: "h-5 w-5 text-yellow-500" }),
                      createVNode("p", { class: "text-sm text-yellow-600" }, " La fonctionnalité de réservation sera disponible dans les prochaines semaines. Nous finalisons les derniers détails pour vous garantir une expérience optimale. ")
                    ]),
                    createVNode("p", { class: "text-muted-foreground" }, " En attendant, nous vous invitons à commencer à enrichir notre base de données en ajoutant vos matériels. Plus il y aura de matériels disponibles, plus la plateforme sera utile pour toute la communauté. Commencez dès maintenant à créer votre inventaire ! ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Public/Checkout/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
