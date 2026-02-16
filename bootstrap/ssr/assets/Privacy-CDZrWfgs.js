import { mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-B3jJCr1A.js";
import { usePage } from "@inertiajs/vue3";
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
  __name: "Privacy",
  __ssrInlineRender: true,
  setup(__props) {
    const name = usePage().props.name;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Politique de confidentialité",
        description: `Politique de confidentialité de ${unref(name)}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto px-4 py-8 prose prose-slate"${_scopeId}><h1 class="text-2xl font-bold mb-6"${_scopeId}>Politique de confidentialité</h1><p class="mb-4"${_scopeId}> Dernière mise à jour : 10 juin 2025 </p><h2 class="text-xl font-semibold mt-6 mb-3"${_scopeId}>1. Introduction</h2><p class="mb-4"${_scopeId}> Cette politique de confidentialité explique comment ${ssrInterpolate(unref(name))} (&quot;nous&quot;, &quot;notre&quot;, &quot;nos&quot;) collecte, utilise et protège vos données personnelles lorsque vous utilisez notre site web. Nous nous engageons à assurer la protection de votre vie privée et de vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et aux lois françaises applicables. </p><h2 class="text-xl font-semibold mt-6 mb-3"${_scopeId}>2. Collecte des données</h2><p class="mb-4"${_scopeId}> Nous collectons uniquement les données nécessaires au fonctionnement du site : </p><ul class="list-disc ml-6 mb-4"${_scopeId}><li${_scopeId}>Données de connexion (adresse IP, date et heure de connexion)</li><li${_scopeId}>Cookies techniques essentiels au fonctionnement du site</li></ul><h2 class="text-xl font-semibold mt-6 mb-3"${_scopeId}>3. Utilisation des données</h2><p class="mb-4"${_scopeId}> Les données collectées sont utilisées exclusivement pour : </p><ul class="list-disc ml-6 mb-4"${_scopeId}><li${_scopeId}>Assurer le bon fonctionnement technique du site</li><li${_scopeId}>Garantir la sécurité du site</li><li${_scopeId}>Améliorer l&#39;expérience utilisateur</li></ul><h2 class="text-xl font-semibold mt-6 mb-3"${_scopeId}>4. Conservation des données</h2><p class="mb-4"${_scopeId}> Les données sont conservées pendant une durée limitée strictement nécessaire aux finalités pour lesquelles elles sont collectées. Les logs de connexion sont automatiquement supprimés après 12 mois. </p><h2 class="text-xl font-semibold mt-6 mb-3"${_scopeId}>5. Partage des données</h2><p class="mb-4"${_scopeId}> Nous ne partageons, ne vendons, ni ne transmettons vos données personnelles à des tiers. Aucune donnée n&#39;est utilisée à des fins commerciales ou marketing. </p><h2 class="text-xl font-semibold mt-6 mb-3"${_scopeId}>6. Vos droits</h2><p class="mb-4"${_scopeId}> Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles : </p><ul class="list-disc ml-6 mb-4"${_scopeId}><li${_scopeId}>Droit d&#39;accès</li><li${_scopeId}>Droit de rectification</li><li${_scopeId}>Droit à l&#39;effacement</li><li${_scopeId}>Droit à la limitation du traitement</li><li${_scopeId}>Droit à la portabilité des données</li><li${_scopeId}>Droit d&#39;opposition</li></ul><h2 class="text-xl font-semibold mt-6 mb-3"${_scopeId}>7. Cookies</h2><p class="mb-4"${_scopeId}> Notre site utilise uniquement des cookies techniques essentiels au fonctionnement du site. Ces cookies ne collectent aucune donnée personnelle et sont automatiquement supprimés à la fermeture de votre navigateur. </p><h2 class="text-xl font-semibold mt-6 mb-3"${_scopeId}>8. Sécurité</h2><p class="mb-4"${_scopeId}> Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès, modification, divulgation ou destruction non autorisés. </p><h2 class="text-xl font-semibold mt-6 mb-3"${_scopeId}>9. Contact</h2><p class="mb-4"${_scopeId}> Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter par email. </p><h2 class="text-xl font-semibold mt-6 mb-3"${_scopeId}>10. Modifications</h2><p class="mb-4"${_scopeId}> Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prendront effet dès leur publication sur le site. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto px-4 py-8 prose prose-slate" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-6" }, "Politique de confidentialité"),
                createVNode("p", { class: "mb-4" }, " Dernière mise à jour : 10 juin 2025 "),
                createVNode("h2", { class: "text-xl font-semibold mt-6 mb-3" }, "1. Introduction"),
                createVNode("p", { class: "mb-4" }, " Cette politique de confidentialité explique comment " + toDisplayString(unref(name)) + ' ("nous", "notre", "nos") collecte, utilise et protège vos données personnelles lorsque vous utilisez notre site web. Nous nous engageons à assurer la protection de votre vie privée et de vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et aux lois françaises applicables. ', 1),
                createVNode("h2", { class: "text-xl font-semibold mt-6 mb-3" }, "2. Collecte des données"),
                createVNode("p", { class: "mb-4" }, " Nous collectons uniquement les données nécessaires au fonctionnement du site : "),
                createVNode("ul", { class: "list-disc ml-6 mb-4" }, [
                  createVNode("li", null, "Données de connexion (adresse IP, date et heure de connexion)"),
                  createVNode("li", null, "Cookies techniques essentiels au fonctionnement du site")
                ]),
                createVNode("h2", { class: "text-xl font-semibold mt-6 mb-3" }, "3. Utilisation des données"),
                createVNode("p", { class: "mb-4" }, " Les données collectées sont utilisées exclusivement pour : "),
                createVNode("ul", { class: "list-disc ml-6 mb-4" }, [
                  createVNode("li", null, "Assurer le bon fonctionnement technique du site"),
                  createVNode("li", null, "Garantir la sécurité du site"),
                  createVNode("li", null, "Améliorer l'expérience utilisateur")
                ]),
                createVNode("h2", { class: "text-xl font-semibold mt-6 mb-3" }, "4. Conservation des données"),
                createVNode("p", { class: "mb-4" }, " Les données sont conservées pendant une durée limitée strictement nécessaire aux finalités pour lesquelles elles sont collectées. Les logs de connexion sont automatiquement supprimés après 12 mois. "),
                createVNode("h2", { class: "text-xl font-semibold mt-6 mb-3" }, "5. Partage des données"),
                createVNode("p", { class: "mb-4" }, " Nous ne partageons, ne vendons, ni ne transmettons vos données personnelles à des tiers. Aucune donnée n'est utilisée à des fins commerciales ou marketing. "),
                createVNode("h2", { class: "text-xl font-semibold mt-6 mb-3" }, "6. Vos droits"),
                createVNode("p", { class: "mb-4" }, " Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles : "),
                createVNode("ul", { class: "list-disc ml-6 mb-4" }, [
                  createVNode("li", null, "Droit d'accès"),
                  createVNode("li", null, "Droit de rectification"),
                  createVNode("li", null, "Droit à l'effacement"),
                  createVNode("li", null, "Droit à la limitation du traitement"),
                  createVNode("li", null, "Droit à la portabilité des données"),
                  createVNode("li", null, "Droit d'opposition")
                ]),
                createVNode("h2", { class: "text-xl font-semibold mt-6 mb-3" }, "7. Cookies"),
                createVNode("p", { class: "mb-4" }, " Notre site utilise uniquement des cookies techniques essentiels au fonctionnement du site. Ces cookies ne collectent aucune donnée personnelle et sont automatiquement supprimés à la fermeture de votre navigateur. "),
                createVNode("h2", { class: "text-xl font-semibold mt-6 mb-3" }, "8. Sécurité"),
                createVNode("p", { class: "mb-4" }, " Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès, modification, divulgation ou destruction non autorisés. "),
                createVNode("h2", { class: "text-xl font-semibold mt-6 mb-3" }, "9. Contact"),
                createVNode("p", { class: "mb-4" }, " Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter par email. "),
                createVNode("h2", { class: "text-xl font-semibold mt-6 mb-3" }, "10. Modifications"),
                createVNode("p", { class: "mb-4" }, " Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prendront effet dès leur publication sur le site. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
