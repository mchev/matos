import { mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-B3jJCr1A.js";
import { usePage, Link } from "@inertiajs/vue3";
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
  __name: "Terms",
  __ssrInlineRender: true,
  setup(__props) {
    const name = usePage().props.name;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Mentions légales",
        description: `Mentions légales de ${unref(name)}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto px-4 py-8 prose prose-slate"${_scopeId}><h1 class="text-2xl font-bold mb-6"${_scopeId}>Mentions légales</h1><p class="mb-4"${_scopeId}> Dernière mise à jour : 10 juin 2025 </p><h2 class="text-xl font-semibold mt-6 mb-3"${_scopeId}>1. Éditeur du site</h2><p class="mb-4"${_scopeId}> Ce site web est édité à titre personnel par Martin Chevignard<br${_scopeId}> Adresse email : martin@pegase.io </p><h2 class="text-xl font-semibold mt-6 mb-3"${_scopeId}>2. Hébergement</h2><p class="mb-4"${_scopeId}> Ce site est hébergé par :<br${_scopeId}> Hetzner Online GmbH<br${_scopeId}> Industriestr. 25<br${_scopeId}> 91710 Gunzenhausen<br${_scopeId}> Allemagne<br${_scopeId}><br${_scopeId}> Le nom de domaine est géré par :<br${_scopeId}> OVH SAS<br${_scopeId}> 2 rue Kellermann<br${_scopeId}> 59100 Roubaix<br${_scopeId}> France </p><h2 class="text-xl font-semibold mt-6 mb-3"${_scopeId}>3. Propriété intellectuelle</h2><p class="mb-4"${_scopeId}> L&#39;ensemble de ce site relève de la législation française et internationale sur le droit d&#39;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. </p><h2 class="text-xl font-semibold mt-6 mb-3"${_scopeId}>4. Liens hypertextes</h2><p class="mb-4"${_scopeId}> Le site peut contenir des liens hypertextes vers d&#39;autres sites internet. La responsabilité de l&#39;éditeur du site ne saurait être engagée au titre d&#39;un site tiers auquel l&#39;utilisateur aurait eu accès via le site. </p><h2 class="text-xl font-semibold mt-6 mb-3"${_scopeId}>5. Protection des données personnelles</h2><p class="mb-4"${_scopeId}> Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez de droits concernant vos données personnelles. Pour plus d&#39;informations, veuillez consulter notre `);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/confidentialite",
              class: "text-primary-600 hover:text-primary-800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`politique de confidentialité`);
                } else {
                  return [
                    createTextVNode("politique de confidentialité")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`. </p><h2 class="text-xl font-semibold mt-6 mb-3"${_scopeId}>6. Cookies</h2><p class="mb-4"${_scopeId}> Le site utilise des cookies techniques nécessaires à son bon fonctionnement. Ces cookies ne collectent aucune donnée personnelle. </p><h2 class="text-xl font-semibold mt-6 mb-3"${_scopeId}>7. Droit applicable</h2><p class="mb-4"${_scopeId}> Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents. </p><h2 class="text-xl font-semibold mt-6 mb-3"${_scopeId}>8. Crédits</h2><p class="mb-4"${_scopeId}> Site développé avec Laravel, Vue.js et Tailwind CSS.<br${_scopeId}> Icons by Lucide.<br${_scopeId}> Components by shadcn. </p><h2 class="text-xl font-semibold mt-6 mb-3"${_scopeId}>9. Contact</h2><p class="mb-4"${_scopeId}> Pour toute question concernant le site, vous pouvez nous contacter par email à l&#39;adresse suivante : martin@pegase.io </p></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto px-4 py-8 prose prose-slate" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-6" }, "Mentions légales"),
                createVNode("p", { class: "mb-4" }, " Dernière mise à jour : 10 juin 2025 "),
                createVNode("h2", { class: "text-xl font-semibold mt-6 mb-3" }, "1. Éditeur du site"),
                createVNode("p", { class: "mb-4" }, [
                  createTextVNode(" Ce site web est édité à titre personnel par Martin Chevignard"),
                  createVNode("br"),
                  createTextVNode(" Adresse email : martin@pegase.io ")
                ]),
                createVNode("h2", { class: "text-xl font-semibold mt-6 mb-3" }, "2. Hébergement"),
                createVNode("p", { class: "mb-4" }, [
                  createTextVNode(" Ce site est hébergé par :"),
                  createVNode("br"),
                  createTextVNode(" Hetzner Online GmbH"),
                  createVNode("br"),
                  createTextVNode(" Industriestr. 25"),
                  createVNode("br"),
                  createTextVNode(" 91710 Gunzenhausen"),
                  createVNode("br"),
                  createTextVNode(" Allemagne"),
                  createVNode("br"),
                  createVNode("br"),
                  createTextVNode(" Le nom de domaine est géré par :"),
                  createVNode("br"),
                  createTextVNode(" OVH SAS"),
                  createVNode("br"),
                  createTextVNode(" 2 rue Kellermann"),
                  createVNode("br"),
                  createTextVNode(" 59100 Roubaix"),
                  createVNode("br"),
                  createTextVNode(" France ")
                ]),
                createVNode("h2", { class: "text-xl font-semibold mt-6 mb-3" }, "3. Propriété intellectuelle"),
                createVNode("p", { class: "mb-4" }, " L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. "),
                createVNode("h2", { class: "text-xl font-semibold mt-6 mb-3" }, "4. Liens hypertextes"),
                createVNode("p", { class: "mb-4" }, " Le site peut contenir des liens hypertextes vers d'autres sites internet. La responsabilité de l'éditeur du site ne saurait être engagée au titre d'un site tiers auquel l'utilisateur aurait eu accès via le site. "),
                createVNode("h2", { class: "text-xl font-semibold mt-6 mb-3" }, "5. Protection des données personnelles"),
                createVNode("p", { class: "mb-4" }, [
                  createTextVNode(" Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez de droits concernant vos données personnelles. Pour plus d'informations, veuillez consulter notre "),
                  createVNode(unref(Link), {
                    href: "/confidentialite",
                    class: "text-primary-600 hover:text-primary-800"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("politique de confidentialité")
                    ]),
                    _: 1
                  }),
                  createTextVNode(". ")
                ]),
                createVNode("h2", { class: "text-xl font-semibold mt-6 mb-3" }, "6. Cookies"),
                createVNode("p", { class: "mb-4" }, " Le site utilise des cookies techniques nécessaires à son bon fonctionnement. Ces cookies ne collectent aucune donnée personnelle. "),
                createVNode("h2", { class: "text-xl font-semibold mt-6 mb-3" }, "7. Droit applicable"),
                createVNode("p", { class: "mb-4" }, " Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents. "),
                createVNode("h2", { class: "text-xl font-semibold mt-6 mb-3" }, "8. Crédits"),
                createVNode("p", { class: "mb-4" }, [
                  createTextVNode(" Site développé avec Laravel, Vue.js et Tailwind CSS."),
                  createVNode("br"),
                  createTextVNode(" Icons by Lucide."),
                  createVNode("br"),
                  createTextVNode(" Components by shadcn. ")
                ]),
                createVNode("h2", { class: "text-xl font-semibold mt-6 mb-3" }, "9. Contact"),
                createVNode("p", { class: "mb-4" }, " Pour toute question concernant le site, vous pouvez nous contacter par email à l'adresse suivante : martin@pegase.io ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
