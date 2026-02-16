import { mergeProps, withCtx, unref, createVNode, resolveDynamicComponent, createTextVNode, toDisplayString, createBlock, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderVNode, ssrInterpolate } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AppLayout-B3jJCr1A.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5 } from "./AccordionTrigger-BTZ3R1Gp.js";
import { _ as _sfc_main$9 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$6, a as _sfc_main$7, b as _sfc_main$8 } from "./index-Don7oRVo.js";
import { InfoIcon, AlertTriangleIcon, MailIcon, HelpCircleIcon } from "lucide-vue-next";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "reka-ui";
import "@vueuse/core";
import "@heroicons/vue/24/outline";
import "./index-9VOASAGY.js";
import "class-variance-authority";
import "vue-sonner";
import "./Input-BNuRmWJk.js";
import "clsx";
import "tailwind-merge";
const _sfc_main = {
  __name: "Faq",
  __ssrInlineRender: true,
  setup(__props) {
    const schemaMarkup = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Comment fonctionne la réservation de matériel sur la plateforme ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La plateforme facilite la mise en relation entre associations. Vous consultez les annonces, sélectionnez le matériel souhaité et envoyez une demande de réservation. Une fois la demande envoyée, vous échangez directement avec le propriétaire pour organiser les détails pratiques (dates, lieu de récupération, paiement, etc.)."
          }
        },
        {
          "@type": "Question",
          "name": "Y a-t-il des frais d'inscription ou d'utilisation de la plateforme ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, l'inscription et l'utilisation de la plateforme sont totalement gratuites. Notre objectif est simplement de faciliter l'entraide entre associations et de promouvoir le partage de ressources."
          }
        },
        {
          "@type": "Question",
          "name": "Comment se passe la location et le paiement ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Une fois votre demande acceptée, vous convenez directement avec le propriétaire des modalités de la location (dates, lieu de récupération, paiement, etc.). Les paiements et arrangements financiers se font directement avec les propriétaires des équipements, en dehors de la plateforme."
          }
        },
        {
          "@type": "Question",
          "name": "Comment protéger mon matériel en tant que propriétaire ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nous vous recommandons d'établir un contrat de location simple entre les parties et de bien définir les conditions de location. Vous pouvez également demander un chèque de caution si nécessaire. La plateforme facilite la mise en relation mais la responsabilité de la protection du matériel incombe aux parties prenantes."
          }
        },
        {
          "@type": "Question",
          "name": "Quels types de matériel peuvent être loués sur la plateforme ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La plateforme accepte tous types de matériel événementiel : tables, chaises, tentes, sono, éclairage, vaisselle, décoration, etc. L'important est que le matériel soit en bon état et adapté à un usage événementiel."
          }
        },
        {
          "@type": "Question",
          "name": "Comment annuler une réservation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vous pouvez annuler une réservation depuis votre espace personnel tant qu'elle n'a pas été confirmée par le propriétaire. Une fois confirmée, il est recommandé de contacter directement le propriétaire pour discuter des modalités d'annulation."
          }
        },
        {
          "@type": "Question",
          "name": "Que faire en cas de problème avec le matériel loué ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En cas de problème, contactez directement le propriétaire du matériel. Nous vous recommandons de documenter l'état du matériel avant et après utilisation, et de communiquer rapidement en cas de souci."
          }
        },
        {
          "@type": "Question",
          "name": "Comment signaler un utilisateur problématique ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Si vous rencontrez un utilisateur problématique, vous pouvez nous contacter à contact@assocation.fr. Nous examinerons la situation et prendrons les mesures appropriées pour maintenir la qualité de la communauté."
          }
        },
        {
          "@type": "Question",
          "name": "La plateforme est-elle disponible dans toute la France ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, la plateforme est accessible dans toute la France. Les associations et particuliers de toutes les régions peuvent s'inscrire et proposer ou rechercher du matériel événementiel."
          }
        },
        {
          "@type": "Question",
          "name": "Comment optimiser mes annonces pour attirer plus de demandes ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pour optimiser vos annonces : ajoutez des photos de qualité, décrivez précisément le matériel et ses caractéristiques, indiquez clairement les tarifs et conditions, et répondez rapidement aux demandes de réservation."
          }
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "FAQ - Questions fréquentes | Location de matériel événementiel",
        description: "Trouvez toutes les réponses à vos questions sur la location et le prêt de matériel événementiel entre associations. Comment ça marche, tarifs, sécurité et plus encore."
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.script), { type: "application/ld+json" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(schemaMarkup))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(schemaMarkup)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }), _parent3, _scopeId2);
                } else {
                  return [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.script), { type: "application/ld+json" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(schemaMarkup)), 1)
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"${_scopeId}><div class="text-center mb-12"${_scopeId}><h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4"${_scopeId}> Questions fréquentes </h1><p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"${_scopeId}> Trouvez toutes les réponses à vos questions sur la location et le prêt de matériel événementiel entre associations. </p></div><div class="grid gap-8"${_scopeId}><div class="space-y-6"${_scopeId}><h2 class="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2"${_scopeId}> Général </h2>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              type: "single",
              collapsible: "",
              class: "w-full space-y-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { value: "general-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Comment fonctionne la réservation de matériel sur la plateforme ? `);
                            } else {
                              return [
                                createTextVNode(" Comment fonctionne la réservation de matériel sur la plateforme ? ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="space-y-4"${_scopeId4}><p${_scopeId4}>La plateforme facilite la mise en relation entre associations. Voici comment cela fonctionne :</p><ol class="list-decimal list-inside space-y-2 ml-4"${_scopeId4}><li${_scopeId4}><strong${_scopeId4}>Recherche :</strong> Consultez les annonces de matériel disponible dans votre région</li><li${_scopeId4}><strong${_scopeId4}>Sélection :</strong> Choisissez le matériel qui vous intéresse et les dates souhaitées</li><li${_scopeId4}><strong${_scopeId4}>Demande :</strong> Envoyez une demande de réservation au propriétaire</li><li${_scopeId4}><strong${_scopeId4}>Échange :</strong> Une fois la demande envoyée, vous échangez directement avec le propriétaire pour organiser les détails pratiques (dates, lieu de récupération, paiement, etc.)</li></ol><p class="text-sm text-gray-600 dark:text-gray-400"${_scopeId4}><strong${_scopeId4}>Note :</strong> La plateforme facilite uniquement la mise en relation. Les arrangements financiers et logistiques se font directement entre les parties. </p></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "space-y-4" }, [
                                  createVNode("p", null, "La plateforme facilite la mise en relation entre associations. Voici comment cela fonctionne :"),
                                  createVNode("ol", { class: "list-decimal list-inside space-y-2 ml-4" }, [
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Recherche :"),
                                      createTextVNode(" Consultez les annonces de matériel disponible dans votre région")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Sélection :"),
                                      createTextVNode(" Choisissez le matériel qui vous intéresse et les dates souhaitées")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Demande :"),
                                      createTextVNode(" Envoyez une demande de réservation au propriétaire")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Échange :"),
                                      createTextVNode(" Une fois la demande envoyée, vous échangez directement avec le propriétaire pour organiser les détails pratiques (dates, lieu de récupération, paiement, etc.)")
                                    ])
                                  ]),
                                  createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, [
                                    createVNode("strong", null, "Note :"),
                                    createTextVNode(" La plateforme facilite uniquement la mise en relation. Les arrangements financiers et logistiques se font directement entre les parties. ")
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" Comment fonctionne la réservation de matériel sur la plateforme ? ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "space-y-4" }, [
                                createVNode("p", null, "La plateforme facilite la mise en relation entre associations. Voici comment cela fonctionne :"),
                                createVNode("ol", { class: "list-decimal list-inside space-y-2 ml-4" }, [
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Recherche :"),
                                    createTextVNode(" Consultez les annonces de matériel disponible dans votre région")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Sélection :"),
                                    createTextVNode(" Choisissez le matériel qui vous intéresse et les dates souhaitées")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Demande :"),
                                    createTextVNode(" Envoyez une demande de réservation au propriétaire")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Échange :"),
                                    createTextVNode(" Une fois la demande envoyée, vous échangez directement avec le propriétaire pour organiser les détails pratiques (dates, lieu de récupération, paiement, etc.)")
                                  ])
                                ]),
                                createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, [
                                  createVNode("strong", null, "Note :"),
                                  createTextVNode(" La plateforme facilite uniquement la mise en relation. Les arrangements financiers et logistiques se font directement entre les parties. ")
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { value: "general-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Y a-t-il des frais d&#39;inscription ou d&#39;utilisation de la plateforme ? `);
                            } else {
                              return [
                                createTextVNode(" Y a-t-il des frais d'inscription ou d'utilisation de la plateforme ? ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}>Non, l&#39;inscription et l&#39;utilisation de la plateforme sont <strong${_scopeId4}>totalement gratuites</strong>. Notre objectif est simplement de faciliter l&#39;entraide entre associations et de promouvoir le partage de ressources.</p><p class="mt-2 text-sm text-gray-600 dark:text-gray-400"${_scopeId4}> Les seuls coûts potentiels sont ceux liés à la location elle-même, qui sont définis directement avec le propriétaire du matériel. </p>`);
                            } else {
                              return [
                                createVNode("p", null, [
                                  createTextVNode("Non, l'inscription et l'utilisation de la plateforme sont "),
                                  createVNode("strong", null, "totalement gratuites"),
                                  createTextVNode(". Notre objectif est simplement de faciliter l'entraide entre associations et de promouvoir le partage de ressources.")
                                ]),
                                createVNode("p", { class: "mt-2 text-sm text-gray-600 dark:text-gray-400" }, " Les seuls coûts potentiels sont ceux liés à la location elle-même, qui sont définis directement avec le propriétaire du matériel. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" Y a-t-il des frais d'inscription ou d'utilisation de la plateforme ? ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode("Non, l'inscription et l'utilisation de la plateforme sont "),
                                createVNode("strong", null, "totalement gratuites"),
                                createTextVNode(". Notre objectif est simplement de faciliter l'entraide entre associations et de promouvoir le partage de ressources.")
                              ]),
                              createVNode("p", { class: "mt-2 text-sm text-gray-600 dark:text-gray-400" }, " Les seuls coûts potentiels sont ceux liés à la location elle-même, qui sont définis directement avec le propriétaire du matériel. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { value: "general-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` La plateforme est-elle disponible dans toute la France ? `);
                            } else {
                              return [
                                createTextVNode(" La plateforme est-elle disponible dans toute la France ? ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}>Oui, la plateforme est accessible dans toute la France. Les associations et particuliers de toutes les régions peuvent s&#39;inscrire et proposer ou rechercher du matériel événementiel.</p><p class="mt-2 text-sm text-gray-600 dark:text-gray-400"${_scopeId4}> Nous encourageons particulièrement les échanges locaux pour faciliter la logistique et réduire les coûts de transport. </p>`);
                            } else {
                              return [
                                createVNode("p", null, "Oui, la plateforme est accessible dans toute la France. Les associations et particuliers de toutes les régions peuvent s'inscrire et proposer ou rechercher du matériel événementiel."),
                                createVNode("p", { class: "mt-2 text-sm text-gray-600 dark:text-gray-400" }, " Nous encourageons particulièrement les échanges locaux pour faciliter la logistique et réduire les coûts de transport. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" La plateforme est-elle disponible dans toute la France ? ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createVNode("p", null, "Oui, la plateforme est accessible dans toute la France. Les associations et particuliers de toutes les régions peuvent s'inscrire et proposer ou rechercher du matériel événementiel."),
                              createVNode("p", { class: "mt-2 text-sm text-gray-600 dark:text-gray-400" }, " Nous encourageons particulièrement les échanges locaux pour faciliter la logistique et réduire les coûts de transport. ")
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
                    createVNode(unref(_sfc_main$3), { value: "general-1" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" Comment fonctionne la réservation de matériel sur la plateforme ? ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "space-y-4" }, [
                              createVNode("p", null, "La plateforme facilite la mise en relation entre associations. Voici comment cela fonctionne :"),
                              createVNode("ol", { class: "list-decimal list-inside space-y-2 ml-4" }, [
                                createVNode("li", null, [
                                  createVNode("strong", null, "Recherche :"),
                                  createTextVNode(" Consultez les annonces de matériel disponible dans votre région")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Sélection :"),
                                  createTextVNode(" Choisissez le matériel qui vous intéresse et les dates souhaitées")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Demande :"),
                                  createTextVNode(" Envoyez une demande de réservation au propriétaire")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Échange :"),
                                  createTextVNode(" Une fois la demande envoyée, vous échangez directement avec le propriétaire pour organiser les détails pratiques (dates, lieu de récupération, paiement, etc.)")
                                ])
                              ]),
                              createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, [
                                createVNode("strong", null, "Note :"),
                                createTextVNode(" La plateforme facilite uniquement la mise en relation. Les arrangements financiers et logistiques se font directement entre les parties. ")
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3), { value: "general-2" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" Y a-t-il des frais d'inscription ou d'utilisation de la plateforme ? ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createTextVNode("Non, l'inscription et l'utilisation de la plateforme sont "),
                              createVNode("strong", null, "totalement gratuites"),
                              createTextVNode(". Notre objectif est simplement de faciliter l'entraide entre associations et de promouvoir le partage de ressources.")
                            ]),
                            createVNode("p", { class: "mt-2 text-sm text-gray-600 dark:text-gray-400" }, " Les seuls coûts potentiels sont ceux liés à la location elle-même, qui sont définis directement avec le propriétaire du matériel. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3), { value: "general-3" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" La plateforme est-elle disponible dans toute la France ? ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createVNode("p", null, "Oui, la plateforme est accessible dans toute la France. Les associations et particuliers de toutes les régions peuvent s'inscrire et proposer ou rechercher du matériel événementiel."),
                            createVNode("p", { class: "mt-2 text-sm text-gray-600 dark:text-gray-400" }, " Nous encourageons particulièrement les échanges locaux pour faciliter la logistique et réduire les coûts de transport. ")
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
            _push2(`</div><div class="space-y-6"${_scopeId}><h2 class="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2"${_scopeId}> Réservations et paiements </h2>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              type: "single",
              collapsible: "",
              class: "w-full space-y-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { value: "reservation-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Comment se passe la location et le paiement ? `);
                            } else {
                              return [
                                createTextVNode(" Comment se passe la location et le paiement ? ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="space-y-4"${_scopeId4}><p${_scopeId4}>Une fois votre demande acceptée, voici comment procéder :</p><ul class="list-disc list-inside space-y-2 ml-4"${_scopeId4}><li${_scopeId4}><strong${_scopeId4}>Contact direct :</strong> Vous échangez directement avec le propriétaire</li><li${_scopeId4}><strong${_scopeId4}>Organisation :</strong> Vous convenez des modalités (dates, lieu de récupération, etc.)</li><li${_scopeId4}><strong${_scopeId4}>Paiement :</strong> Les paiements se font directement avec les propriétaires, en dehors de la plateforme</li><li${_scopeId4}><strong${_scopeId4}>Récupération :</strong> Vous récupérez le matériel selon les arrangements convenus</li></ul>`);
                              _push5(ssrRenderComponent(unref(_sfc_main$6), {
                                variant: "info",
                                class: "mt-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(InfoIcon), { class: "h-4 w-4" }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(_sfc_main$7), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Important`);
                                        } else {
                                          return [
                                            createTextVNode("Important")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(_sfc_main$8), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` La plateforme ne prend pas de commission et n&#39;intervient pas dans les transactions financières. `);
                                        } else {
                                          return [
                                            createTextVNode(" La plateforme ne prend pas de commission et n'intervient pas dans les transactions financières. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(InfoIcon), { class: "h-4 w-4" }),
                                      createVNode(unref(_sfc_main$7), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Important")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$8), null, {
                                        default: withCtx(() => [
                                          createTextVNode(" La plateforme ne prend pas de commission et n'intervient pas dans les transactions financières. ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "space-y-4" }, [
                                  createVNode("p", null, "Une fois votre demande acceptée, voici comment procéder :"),
                                  createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Contact direct :"),
                                      createTextVNode(" Vous échangez directement avec le propriétaire")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Organisation :"),
                                      createTextVNode(" Vous convenez des modalités (dates, lieu de récupération, etc.)")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Paiement :"),
                                      createTextVNode(" Les paiements se font directement avec les propriétaires, en dehors de la plateforme")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Récupération :"),
                                      createTextVNode(" Vous récupérez le matériel selon les arrangements convenus")
                                    ])
                                  ]),
                                  createVNode(unref(_sfc_main$6), {
                                    variant: "info",
                                    class: "mt-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(InfoIcon), { class: "h-4 w-4" }),
                                      createVNode(unref(_sfc_main$7), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Important")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$8), null, {
                                        default: withCtx(() => [
                                          createTextVNode(" La plateforme ne prend pas de commission et n'intervient pas dans les transactions financières. ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" Comment se passe la location et le paiement ? ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "space-y-4" }, [
                                createVNode("p", null, "Une fois votre demande acceptée, voici comment procéder :"),
                                createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Contact direct :"),
                                    createTextVNode(" Vous échangez directement avec le propriétaire")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Organisation :"),
                                    createTextVNode(" Vous convenez des modalités (dates, lieu de récupération, etc.)")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Paiement :"),
                                    createTextVNode(" Les paiements se font directement avec les propriétaires, en dehors de la plateforme")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Récupération :"),
                                    createTextVNode(" Vous récupérez le matériel selon les arrangements convenus")
                                  ])
                                ]),
                                createVNode(unref(_sfc_main$6), {
                                  variant: "info",
                                  class: "mt-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(InfoIcon), { class: "h-4 w-4" }),
                                    createVNode(unref(_sfc_main$7), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Important")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$8), null, {
                                      default: withCtx(() => [
                                        createTextVNode(" La plateforme ne prend pas de commission et n'intervient pas dans les transactions financières. ")
                                      ]),
                                      _: 1
                                    })
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { value: "reservation-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Comment annuler une réservation ? `);
                            } else {
                              return [
                                createTextVNode(" Comment annuler une réservation ? ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="space-y-4"${_scopeId4}><p${_scopeId4}>Les modalités d&#39;annulation dépendent du statut de votre réservation :</p><ul class="list-disc list-inside space-y-2 ml-4"${_scopeId4}><li${_scopeId4}><strong${_scopeId4}>Demande en attente :</strong> Vous pouvez annuler depuis votre espace personnel</li><li${_scopeId4}><strong${_scopeId4}>Demande confirmée :</strong> Contactez directement le propriétaire pour discuter des modalités d&#39;annulation</li></ul><p class="text-sm text-gray-600 dark:text-gray-400"${_scopeId4}> Nous recommandons d&#39;annuler le plus tôt possible pour permettre au propriétaire de proposer le matériel à d&#39;autres utilisateurs. </p></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "space-y-4" }, [
                                  createVNode("p", null, "Les modalités d'annulation dépendent du statut de votre réservation :"),
                                  createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Demande en attente :"),
                                      createTextVNode(" Vous pouvez annuler depuis votre espace personnel")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Demande confirmée :"),
                                      createTextVNode(" Contactez directement le propriétaire pour discuter des modalités d'annulation")
                                    ])
                                  ]),
                                  createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, " Nous recommandons d'annuler le plus tôt possible pour permettre au propriétaire de proposer le matériel à d'autres utilisateurs. ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" Comment annuler une réservation ? ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "space-y-4" }, [
                                createVNode("p", null, "Les modalités d'annulation dépendent du statut de votre réservation :"),
                                createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Demande en attente :"),
                                    createTextVNode(" Vous pouvez annuler depuis votre espace personnel")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Demande confirmée :"),
                                    createTextVNode(" Contactez directement le propriétaire pour discuter des modalités d'annulation")
                                  ])
                                ]),
                                createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, " Nous recommandons d'annuler le plus tôt possible pour permettre au propriétaire de proposer le matériel à d'autres utilisateurs. ")
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { value: "reservation-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Quels types de matériel peuvent être loués sur la plateforme ? `);
                            } else {
                              return [
                                createTextVNode(" Quels types de matériel peuvent être loués sur la plateforme ? ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}>La plateforme accepte tous types de matériel événementiel :</p><div class="grid grid-cols-2 gap-2 mt-4"${_scopeId4}><ul class="list-disc list-inside space-y-1"${_scopeId4}><li${_scopeId4}>Tables et chaises</li><li${_scopeId4}>Tentes et chapiteaux</li><li${_scopeId4}>Systèmes de sonorisation</li><li${_scopeId4}>Éclairage d&#39;événement</li></ul><ul class="list-disc list-inside space-y-1"${_scopeId4}><li${_scopeId4}>Vaisselle et couverts</li><li${_scopeId4}>Décoration</li><li${_scopeId4}>Matériel de cuisine</li><li${_scopeId4}>Équipements sportifs</li></ul></div><p class="mt-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId4}> L&#39;important est que le matériel soit en bon état et adapté à un usage événementiel. </p>`);
                            } else {
                              return [
                                createVNode("p", null, "La plateforme accepte tous types de matériel événementiel :"),
                                createVNode("div", { class: "grid grid-cols-2 gap-2 mt-4" }, [
                                  createVNode("ul", { class: "list-disc list-inside space-y-1" }, [
                                    createVNode("li", null, "Tables et chaises"),
                                    createVNode("li", null, "Tentes et chapiteaux"),
                                    createVNode("li", null, "Systèmes de sonorisation"),
                                    createVNode("li", null, "Éclairage d'événement")
                                  ]),
                                  createVNode("ul", { class: "list-disc list-inside space-y-1" }, [
                                    createVNode("li", null, "Vaisselle et couverts"),
                                    createVNode("li", null, "Décoration"),
                                    createVNode("li", null, "Matériel de cuisine"),
                                    createVNode("li", null, "Équipements sportifs")
                                  ])
                                ]),
                                createVNode("p", { class: "mt-4 text-sm text-gray-600 dark:text-gray-400" }, " L'important est que le matériel soit en bon état et adapté à un usage événementiel. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" Quels types de matériel peuvent être loués sur la plateforme ? ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createVNode("p", null, "La plateforme accepte tous types de matériel événementiel :"),
                              createVNode("div", { class: "grid grid-cols-2 gap-2 mt-4" }, [
                                createVNode("ul", { class: "list-disc list-inside space-y-1" }, [
                                  createVNode("li", null, "Tables et chaises"),
                                  createVNode("li", null, "Tentes et chapiteaux"),
                                  createVNode("li", null, "Systèmes de sonorisation"),
                                  createVNode("li", null, "Éclairage d'événement")
                                ]),
                                createVNode("ul", { class: "list-disc list-inside space-y-1" }, [
                                  createVNode("li", null, "Vaisselle et couverts"),
                                  createVNode("li", null, "Décoration"),
                                  createVNode("li", null, "Matériel de cuisine"),
                                  createVNode("li", null, "Équipements sportifs")
                                ])
                              ]),
                              createVNode("p", { class: "mt-4 text-sm text-gray-600 dark:text-gray-400" }, " L'important est que le matériel soit en bon état et adapté à un usage événementiel. ")
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
                    createVNode(unref(_sfc_main$3), { value: "reservation-1" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" Comment se passe la location et le paiement ? ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "space-y-4" }, [
                              createVNode("p", null, "Une fois votre demande acceptée, voici comment procéder :"),
                              createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                createVNode("li", null, [
                                  createVNode("strong", null, "Contact direct :"),
                                  createTextVNode(" Vous échangez directement avec le propriétaire")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Organisation :"),
                                  createTextVNode(" Vous convenez des modalités (dates, lieu de récupération, etc.)")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Paiement :"),
                                  createTextVNode(" Les paiements se font directement avec les propriétaires, en dehors de la plateforme")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Récupération :"),
                                  createTextVNode(" Vous récupérez le matériel selon les arrangements convenus")
                                ])
                              ]),
                              createVNode(unref(_sfc_main$6), {
                                variant: "info",
                                class: "mt-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(InfoIcon), { class: "h-4 w-4" }),
                                  createVNode(unref(_sfc_main$7), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Important")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$8), null, {
                                    default: withCtx(() => [
                                      createTextVNode(" La plateforme ne prend pas de commission et n'intervient pas dans les transactions financières. ")
                                    ]),
                                    _: 1
                                  })
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
                    createVNode(unref(_sfc_main$3), { value: "reservation-2" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" Comment annuler une réservation ? ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "space-y-4" }, [
                              createVNode("p", null, "Les modalités d'annulation dépendent du statut de votre réservation :"),
                              createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                createVNode("li", null, [
                                  createVNode("strong", null, "Demande en attente :"),
                                  createTextVNode(" Vous pouvez annuler depuis votre espace personnel")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Demande confirmée :"),
                                  createTextVNode(" Contactez directement le propriétaire pour discuter des modalités d'annulation")
                                ])
                              ]),
                              createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, " Nous recommandons d'annuler le plus tôt possible pour permettre au propriétaire de proposer le matériel à d'autres utilisateurs. ")
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3), { value: "reservation-3" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" Quels types de matériel peuvent être loués sur la plateforme ? ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createVNode("p", null, "La plateforme accepte tous types de matériel événementiel :"),
                            createVNode("div", { class: "grid grid-cols-2 gap-2 mt-4" }, [
                              createVNode("ul", { class: "list-disc list-inside space-y-1" }, [
                                createVNode("li", null, "Tables et chaises"),
                                createVNode("li", null, "Tentes et chapiteaux"),
                                createVNode("li", null, "Systèmes de sonorisation"),
                                createVNode("li", null, "Éclairage d'événement")
                              ]),
                              createVNode("ul", { class: "list-disc list-inside space-y-1" }, [
                                createVNode("li", null, "Vaisselle et couverts"),
                                createVNode("li", null, "Décoration"),
                                createVNode("li", null, "Matériel de cuisine"),
                                createVNode("li", null, "Équipements sportifs")
                              ])
                            ]),
                            createVNode("p", { class: "mt-4 text-sm text-gray-600 dark:text-gray-400" }, " L'important est que le matériel soit en bon état et adapté à un usage événementiel. ")
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
            _push2(`</div><div class="space-y-6"${_scopeId}><h2 class="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2"${_scopeId}> Sécurité et protection </h2>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              type: "single",
              collapsible: "",
              class: "w-full space-y-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { value: "security-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Comment protéger mon matériel en tant que propriétaire ? `);
                            } else {
                              return [
                                createTextVNode(" Comment protéger mon matériel en tant que propriétaire ? ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="space-y-4"${_scopeId4}><p${_scopeId4}>Voici nos recommandations pour protéger votre matériel :</p><ul class="list-disc list-inside space-y-2 ml-4"${_scopeId4}><li${_scopeId4}><strong${_scopeId4}>Contrat de location :</strong> Établissez un contrat simple entre les parties</li><li${_scopeId4}><strong${_scopeId4}>Conditions claires :</strong> Définissez bien les conditions d&#39;utilisation</li><li${_scopeId4}><strong${_scopeId4}>Caution :</strong> Demandez un chèque de caution si nécessaire</li><li${_scopeId4}><strong${_scopeId4}>État du matériel :</strong> Documentez l&#39;état avant et après utilisation</li><li${_scopeId4}><strong${_scopeId4}>Communication :</strong> Échangez les coordonnées et restez en contact</li></ul>`);
                              _push5(ssrRenderComponent(unref(_sfc_main$6), {
                                variant: "warning",
                                class: "mt-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(AlertTriangleIcon), { class: "h-4 w-4" }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(_sfc_main$7), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Responsabilité`);
                                        } else {
                                          return [
                                            createTextVNode("Responsabilité")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(_sfc_main$8), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` La plateforme facilite la mise en relation mais la responsabilité de la protection du matériel incombe aux parties prenantes. `);
                                        } else {
                                          return [
                                            createTextVNode(" La plateforme facilite la mise en relation mais la responsabilité de la protection du matériel incombe aux parties prenantes. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(AlertTriangleIcon), { class: "h-4 w-4" }),
                                      createVNode(unref(_sfc_main$7), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Responsabilité")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$8), null, {
                                        default: withCtx(() => [
                                          createTextVNode(" La plateforme facilite la mise en relation mais la responsabilité de la protection du matériel incombe aux parties prenantes. ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "space-y-4" }, [
                                  createVNode("p", null, "Voici nos recommandations pour protéger votre matériel :"),
                                  createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Contrat de location :"),
                                      createTextVNode(" Établissez un contrat simple entre les parties")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Conditions claires :"),
                                      createTextVNode(" Définissez bien les conditions d'utilisation")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Caution :"),
                                      createTextVNode(" Demandez un chèque de caution si nécessaire")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "État du matériel :"),
                                      createTextVNode(" Documentez l'état avant et après utilisation")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Communication :"),
                                      createTextVNode(" Échangez les coordonnées et restez en contact")
                                    ])
                                  ]),
                                  createVNode(unref(_sfc_main$6), {
                                    variant: "warning",
                                    class: "mt-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(AlertTriangleIcon), { class: "h-4 w-4" }),
                                      createVNode(unref(_sfc_main$7), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Responsabilité")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$8), null, {
                                        default: withCtx(() => [
                                          createTextVNode(" La plateforme facilite la mise en relation mais la responsabilité de la protection du matériel incombe aux parties prenantes. ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" Comment protéger mon matériel en tant que propriétaire ? ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "space-y-4" }, [
                                createVNode("p", null, "Voici nos recommandations pour protéger votre matériel :"),
                                createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Contrat de location :"),
                                    createTextVNode(" Établissez un contrat simple entre les parties")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Conditions claires :"),
                                    createTextVNode(" Définissez bien les conditions d'utilisation")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Caution :"),
                                    createTextVNode(" Demandez un chèque de caution si nécessaire")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "État du matériel :"),
                                    createTextVNode(" Documentez l'état avant et après utilisation")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Communication :"),
                                    createTextVNode(" Échangez les coordonnées et restez en contact")
                                  ])
                                ]),
                                createVNode(unref(_sfc_main$6), {
                                  variant: "warning",
                                  class: "mt-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(AlertTriangleIcon), { class: "h-4 w-4" }),
                                    createVNode(unref(_sfc_main$7), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Responsabilité")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$8), null, {
                                      default: withCtx(() => [
                                        createTextVNode(" La plateforme facilite la mise en relation mais la responsabilité de la protection du matériel incombe aux parties prenantes. ")
                                      ]),
                                      _: 1
                                    })
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { value: "security-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Que faire en cas de problème avec le matériel loué ? `);
                            } else {
                              return [
                                createTextVNode(" Que faire en cas de problème avec le matériel loué ? ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="space-y-4"${_scopeId4}><p${_scopeId4}>En cas de problème, voici les étapes à suivre :</p><ol class="list-decimal list-inside space-y-2 ml-4"${_scopeId4}><li${_scopeId4}><strong${_scopeId4}>Contact immédiat :</strong> Contactez directement le propriétaire du matériel</li><li${_scopeId4}><strong${_scopeId4}>Documentation :</strong> Prenez des photos et documentez le problème</li><li${_scopeId4}><strong${_scopeId4}>Communication :</strong> Expliquez clairement la situation</li><li${_scopeId4}><strong${_scopeId4}>Solution :</strong> Trouvez ensemble une solution équitable</li></ol><p class="text-sm text-gray-600 dark:text-gray-400"${_scopeId4}> Nous recommandons de documenter l&#39;état du matériel avant et après utilisation pour éviter les litiges. </p></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "space-y-4" }, [
                                  createVNode("p", null, "En cas de problème, voici les étapes à suivre :"),
                                  createVNode("ol", { class: "list-decimal list-inside space-y-2 ml-4" }, [
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Contact immédiat :"),
                                      createTextVNode(" Contactez directement le propriétaire du matériel")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Documentation :"),
                                      createTextVNode(" Prenez des photos et documentez le problème")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Communication :"),
                                      createTextVNode(" Expliquez clairement la situation")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Solution :"),
                                      createTextVNode(" Trouvez ensemble une solution équitable")
                                    ])
                                  ]),
                                  createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, " Nous recommandons de documenter l'état du matériel avant et après utilisation pour éviter les litiges. ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" Que faire en cas de problème avec le matériel loué ? ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "space-y-4" }, [
                                createVNode("p", null, "En cas de problème, voici les étapes à suivre :"),
                                createVNode("ol", { class: "list-decimal list-inside space-y-2 ml-4" }, [
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Contact immédiat :"),
                                    createTextVNode(" Contactez directement le propriétaire du matériel")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Documentation :"),
                                    createTextVNode(" Prenez des photos et documentez le problème")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Communication :"),
                                    createTextVNode(" Expliquez clairement la situation")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Solution :"),
                                    createTextVNode(" Trouvez ensemble une solution équitable")
                                  ])
                                ]),
                                createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, " Nous recommandons de documenter l'état du matériel avant et après utilisation pour éviter les litiges. ")
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { value: "security-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Comment signaler un utilisateur problématique ? `);
                            } else {
                              return [
                                createTextVNode(" Comment signaler un utilisateur problématique ? ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}>Si vous rencontrez un utilisateur problématique, vous pouvez nous contacter à <a href="mailto:contact@assocation.fr" class="text-primary hover:underline"${_scopeId4}>contact@assocation.fr</a>.</p><p class="mt-2"${_scopeId4}>Nous examinerons la situation et prendrons les mesures appropriées pour maintenir la qualité de la communauté.</p><p class="mt-2 text-sm text-gray-600 dark:text-gray-400"${_scopeId4}> N&#39;hésitez pas à nous fournir tous les détails utiles pour nous aider à traiter votre signalement. </p>`);
                            } else {
                              return [
                                createVNode("p", null, [
                                  createTextVNode("Si vous rencontrez un utilisateur problématique, vous pouvez nous contacter à "),
                                  createVNode("a", {
                                    href: "mailto:contact@assocation.fr",
                                    class: "text-primary hover:underline"
                                  }, "contact@assocation.fr"),
                                  createTextVNode(".")
                                ]),
                                createVNode("p", { class: "mt-2" }, "Nous examinerons la situation et prendrons les mesures appropriées pour maintenir la qualité de la communauté."),
                                createVNode("p", { class: "mt-2 text-sm text-gray-600 dark:text-gray-400" }, " N'hésitez pas à nous fournir tous les détails utiles pour nous aider à traiter votre signalement. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" Comment signaler un utilisateur problématique ? ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode("Si vous rencontrez un utilisateur problématique, vous pouvez nous contacter à "),
                                createVNode("a", {
                                  href: "mailto:contact@assocation.fr",
                                  class: "text-primary hover:underline"
                                }, "contact@assocation.fr"),
                                createTextVNode(".")
                              ]),
                              createVNode("p", { class: "mt-2" }, "Nous examinerons la situation et prendrons les mesures appropriées pour maintenir la qualité de la communauté."),
                              createVNode("p", { class: "mt-2 text-sm text-gray-600 dark:text-gray-400" }, " N'hésitez pas à nous fournir tous les détails utiles pour nous aider à traiter votre signalement. ")
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
                    createVNode(unref(_sfc_main$3), { value: "security-1" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" Comment protéger mon matériel en tant que propriétaire ? ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "space-y-4" }, [
                              createVNode("p", null, "Voici nos recommandations pour protéger votre matériel :"),
                              createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                createVNode("li", null, [
                                  createVNode("strong", null, "Contrat de location :"),
                                  createTextVNode(" Établissez un contrat simple entre les parties")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Conditions claires :"),
                                  createTextVNode(" Définissez bien les conditions d'utilisation")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Caution :"),
                                  createTextVNode(" Demandez un chèque de caution si nécessaire")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "État du matériel :"),
                                  createTextVNode(" Documentez l'état avant et après utilisation")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Communication :"),
                                  createTextVNode(" Échangez les coordonnées et restez en contact")
                                ])
                              ]),
                              createVNode(unref(_sfc_main$6), {
                                variant: "warning",
                                class: "mt-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(AlertTriangleIcon), { class: "h-4 w-4" }),
                                  createVNode(unref(_sfc_main$7), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Responsabilité")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$8), null, {
                                    default: withCtx(() => [
                                      createTextVNode(" La plateforme facilite la mise en relation mais la responsabilité de la protection du matériel incombe aux parties prenantes. ")
                                    ]),
                                    _: 1
                                  })
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
                    createVNode(unref(_sfc_main$3), { value: "security-2" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" Que faire en cas de problème avec le matériel loué ? ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "space-y-4" }, [
                              createVNode("p", null, "En cas de problème, voici les étapes à suivre :"),
                              createVNode("ol", { class: "list-decimal list-inside space-y-2 ml-4" }, [
                                createVNode("li", null, [
                                  createVNode("strong", null, "Contact immédiat :"),
                                  createTextVNode(" Contactez directement le propriétaire du matériel")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Documentation :"),
                                  createTextVNode(" Prenez des photos et documentez le problème")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Communication :"),
                                  createTextVNode(" Expliquez clairement la situation")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Solution :"),
                                  createTextVNode(" Trouvez ensemble une solution équitable")
                                ])
                              ]),
                              createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, " Nous recommandons de documenter l'état du matériel avant et après utilisation pour éviter les litiges. ")
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3), { value: "security-3" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" Comment signaler un utilisateur problématique ? ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createTextVNode("Si vous rencontrez un utilisateur problématique, vous pouvez nous contacter à "),
                              createVNode("a", {
                                href: "mailto:contact@assocation.fr",
                                class: "text-primary hover:underline"
                              }, "contact@assocation.fr"),
                              createTextVNode(".")
                            ]),
                            createVNode("p", { class: "mt-2" }, "Nous examinerons la situation et prendrons les mesures appropriées pour maintenir la qualité de la communauté."),
                            createVNode("p", { class: "mt-2 text-sm text-gray-600 dark:text-gray-400" }, " N'hésitez pas à nous fournir tous les détails utiles pour nous aider à traiter votre signalement. ")
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
            _push2(`</div><div class="space-y-6"${_scopeId}><h2 class="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2"${_scopeId}> Conseils et optimisation </h2>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              type: "single",
              collapsible: "",
              class: "w-full space-y-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { value: "tips-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Comment optimiser mes annonces pour attirer plus de demandes ? `);
                            } else {
                              return [
                                createTextVNode(" Comment optimiser mes annonces pour attirer plus de demandes ? ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="space-y-4"${_scopeId4}><p${_scopeId4}>Voici nos conseils pour optimiser vos annonces :</p><ul class="list-disc list-inside space-y-2 ml-4"${_scopeId4}><li${_scopeId4}><strong${_scopeId4}>Photos de qualité :</strong> Ajoutez des photos claires et représentatives</li><li${_scopeId4}><strong${_scopeId4}>Description détaillée :</strong> Décrivez précisément le matériel et ses caractéristiques</li><li${_scopeId4}><strong${_scopeId4}>Tarifs clairs :</strong> Indiquez clairement les prix et conditions</li><li${_scopeId4}><strong${_scopeId4}>Réactivité :</strong> Répondez rapidement aux demandes de réservation</li><li${_scopeId4}><strong${_scopeId4}>Disponibilité :</strong> Mettez à jour régulièrement vos disponibilités</li><li${_scopeId4}><strong${_scopeId4}>Localisation :</strong> Précisez bien votre zone géographique</li></ul></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "space-y-4" }, [
                                  createVNode("p", null, "Voici nos conseils pour optimiser vos annonces :"),
                                  createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Photos de qualité :"),
                                      createTextVNode(" Ajoutez des photos claires et représentatives")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Description détaillée :"),
                                      createTextVNode(" Décrivez précisément le matériel et ses caractéristiques")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Tarifs clairs :"),
                                      createTextVNode(" Indiquez clairement les prix et conditions")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Réactivité :"),
                                      createTextVNode(" Répondez rapidement aux demandes de réservation")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Disponibilité :"),
                                      createTextVNode(" Mettez à jour régulièrement vos disponibilités")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Localisation :"),
                                      createTextVNode(" Précisez bien votre zone géographique")
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" Comment optimiser mes annonces pour attirer plus de demandes ? ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "space-y-4" }, [
                                createVNode("p", null, "Voici nos conseils pour optimiser vos annonces :"),
                                createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Photos de qualité :"),
                                    createTextVNode(" Ajoutez des photos claires et représentatives")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Description détaillée :"),
                                    createTextVNode(" Décrivez précisément le matériel et ses caractéristiques")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Tarifs clairs :"),
                                    createTextVNode(" Indiquez clairement les prix et conditions")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Réactivité :"),
                                    createTextVNode(" Répondez rapidement aux demandes de réservation")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Disponibilité :"),
                                    createTextVNode(" Mettez à jour régulièrement vos disponibilités")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Localisation :"),
                                    createTextVNode(" Précisez bien votre zone géographique")
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { value: "tips-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Comment bien préparer ma demande de réservation ? `);
                            } else {
                              return [
                                createTextVNode(" Comment bien préparer ma demande de réservation ? ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="space-y-4"${_scopeId4}><p${_scopeId4}>Pour maximiser vos chances d&#39;acceptation :</p><ul class="list-disc list-inside space-y-2 ml-4"${_scopeId4}><li${_scopeId4}><strong${_scopeId4}>Présentez-vous :</strong> Expliquez brièvement votre association et votre projet</li><li${_scopeId4}><strong${_scopeId4}>Dates précises :</strong> Indiquez clairement vos besoins en dates</li><li${_scopeId4}><strong${_scopeId4}>Usage détaillé :</strong> Décrivez l&#39;usage prévu du matériel</li><li${_scopeId4}><strong${_scopeId4}>Contact :</strong> Assurez-vous que vos coordonnées sont à jour</li><li${_scopeId4}><strong${_scopeId4}>Flexibilité :</strong> Soyez flexible sur les modalités de récupération</li></ul></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "space-y-4" }, [
                                  createVNode("p", null, "Pour maximiser vos chances d'acceptation :"),
                                  createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Présentez-vous :"),
                                      createTextVNode(" Expliquez brièvement votre association et votre projet")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Dates précises :"),
                                      createTextVNode(" Indiquez clairement vos besoins en dates")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Usage détaillé :"),
                                      createTextVNode(" Décrivez l'usage prévu du matériel")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Contact :"),
                                      createTextVNode(" Assurez-vous que vos coordonnées sont à jour")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Flexibilité :"),
                                      createTextVNode(" Soyez flexible sur les modalités de récupération")
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" Comment bien préparer ma demande de réservation ? ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "space-y-4" }, [
                                createVNode("p", null, "Pour maximiser vos chances d'acceptation :"),
                                createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Présentez-vous :"),
                                    createTextVNode(" Expliquez brièvement votre association et votre projet")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Dates précises :"),
                                    createTextVNode(" Indiquez clairement vos besoins en dates")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Usage détaillé :"),
                                    createTextVNode(" Décrivez l'usage prévu du matériel")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Contact :"),
                                    createTextVNode(" Assurez-vous que vos coordonnées sont à jour")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("strong", null, "Flexibilité :"),
                                    createTextVNode(" Soyez flexible sur les modalités de récupération")
                                  ])
                                ])
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
                    createVNode(unref(_sfc_main$3), { value: "tips-1" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" Comment optimiser mes annonces pour attirer plus de demandes ? ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "space-y-4" }, [
                              createVNode("p", null, "Voici nos conseils pour optimiser vos annonces :"),
                              createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                createVNode("li", null, [
                                  createVNode("strong", null, "Photos de qualité :"),
                                  createTextVNode(" Ajoutez des photos claires et représentatives")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Description détaillée :"),
                                  createTextVNode(" Décrivez précisément le matériel et ses caractéristiques")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Tarifs clairs :"),
                                  createTextVNode(" Indiquez clairement les prix et conditions")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Réactivité :"),
                                  createTextVNode(" Répondez rapidement aux demandes de réservation")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Disponibilité :"),
                                  createTextVNode(" Mettez à jour régulièrement vos disponibilités")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Localisation :"),
                                  createTextVNode(" Précisez bien votre zone géographique")
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3), { value: "tips-2" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" Comment bien préparer ma demande de réservation ? ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "space-y-4" }, [
                              createVNode("p", null, "Pour maximiser vos chances d'acceptation :"),
                              createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                createVNode("li", null, [
                                  createVNode("strong", null, "Présentez-vous :"),
                                  createTextVNode(" Expliquez brièvement votre association et votre projet")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Dates précises :"),
                                  createTextVNode(" Indiquez clairement vos besoins en dates")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Usage détaillé :"),
                                  createTextVNode(" Décrivez l'usage prévu du matériel")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Contact :"),
                                  createTextVNode(" Assurez-vous que vos coordonnées sont à jour")
                                ]),
                                createVNode("li", null, [
                                  createVNode("strong", null, "Flexibilité :"),
                                  createTextVNode(" Soyez flexible sur les modalités de récupération")
                                ])
                              ])
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
            _push2(`</div></div><div class="mt-16 bg-gradient-to-r from-violet-50 to-blue-50 dark:from-violet-950 dark:to-blue-950 rounded-2xl p-8 text-center"${_scopeId}><h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4"${_scopeId}> Vous ne trouvez pas votre réponse ? </h2><p class="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto"${_scopeId}> Notre équipe est là pour vous aider. N&#39;hésitez pas à nous contacter pour toute question supplémentaire. </p><div class="flex flex-col sm:flex-row gap-4 justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$9), {
              as: "a",
              href: "mailto:contact@assocation.fr",
              class: "font-semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(MailIcon), { class: "mr-2 h-4 w-4" }, null, _parent3, _scopeId2));
                  _push3(` Nous contacter `);
                } else {
                  return [
                    createVNode(unref(MailIcon), { class: "mr-2 h-4 w-4" }),
                    createTextVNode(" Nous contacter ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$9), {
              variant: "outline",
              as: "a",
              href: _ctx.route("how-it-works"),
              class: "font-semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(HelpCircleIcon), { class: "mr-2 h-4 w-4" }, null, _parent3, _scopeId2));
                  _push3(` Comment ça marche ? `);
                } else {
                  return [
                    createVNode(unref(HelpCircleIcon), { class: "mr-2 h-4 w-4" }),
                    createTextVNode(" Comment ça marche ? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode(unref(Head), null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.script), { type: "application/ld+json" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(schemaMarkup)), 1)
                    ]),
                    _: 1
                  }))
                ]),
                _: 1
              }),
              createVNode("div", { class: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" }, [
                createVNode("div", { class: "text-center mb-12" }, [
                  createVNode("h1", { class: "text-4xl font-bold text-gray-900 dark:text-white mb-4" }, " Questions fréquentes "),
                  createVNode("p", { class: "text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" }, " Trouvez toutes les réponses à vos questions sur la location et le prêt de matériel événementiel entre associations. ")
                ]),
                createVNode("div", { class: "grid gap-8" }, [
                  createVNode("div", { class: "space-y-6" }, [
                    createVNode("h2", { class: "text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2" }, " Général "),
                    createVNode(unref(_sfc_main$2), {
                      type: "single",
                      collapsible: "",
                      class: "w-full space-y-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$3), { value: "general-1" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                              default: withCtx(() => [
                                createTextVNode(" Comment fonctionne la réservation de matériel sur la plateforme ? ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$5), null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "space-y-4" }, [
                                  createVNode("p", null, "La plateforme facilite la mise en relation entre associations. Voici comment cela fonctionne :"),
                                  createVNode("ol", { class: "list-decimal list-inside space-y-2 ml-4" }, [
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Recherche :"),
                                      createTextVNode(" Consultez les annonces de matériel disponible dans votre région")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Sélection :"),
                                      createTextVNode(" Choisissez le matériel qui vous intéresse et les dates souhaitées")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Demande :"),
                                      createTextVNode(" Envoyez une demande de réservation au propriétaire")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Échange :"),
                                      createTextVNode(" Une fois la demande envoyée, vous échangez directement avec le propriétaire pour organiser les détails pratiques (dates, lieu de récupération, paiement, etc.)")
                                    ])
                                  ]),
                                  createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, [
                                    createVNode("strong", null, "Note :"),
                                    createTextVNode(" La plateforme facilite uniquement la mise en relation. Les arrangements financiers et logistiques se font directement entre les parties. ")
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "general-2" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                              default: withCtx(() => [
                                createTextVNode(" Y a-t-il des frais d'inscription ou d'utilisation de la plateforme ? ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$5), null, {
                              default: withCtx(() => [
                                createVNode("p", null, [
                                  createTextVNode("Non, l'inscription et l'utilisation de la plateforme sont "),
                                  createVNode("strong", null, "totalement gratuites"),
                                  createTextVNode(". Notre objectif est simplement de faciliter l'entraide entre associations et de promouvoir le partage de ressources.")
                                ]),
                                createVNode("p", { class: "mt-2 text-sm text-gray-600 dark:text-gray-400" }, " Les seuls coûts potentiels sont ceux liés à la location elle-même, qui sont définis directement avec le propriétaire du matériel. ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "general-3" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                              default: withCtx(() => [
                                createTextVNode(" La plateforme est-elle disponible dans toute la France ? ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$5), null, {
                              default: withCtx(() => [
                                createVNode("p", null, "Oui, la plateforme est accessible dans toute la France. Les associations et particuliers de toutes les régions peuvent s'inscrire et proposer ou rechercher du matériel événementiel."),
                                createVNode("p", { class: "mt-2 text-sm text-gray-600 dark:text-gray-400" }, " Nous encourageons particulièrement les échanges locaux pour faciliter la logistique et réduire les coûts de transport. ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "space-y-6" }, [
                    createVNode("h2", { class: "text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2" }, " Réservations et paiements "),
                    createVNode(unref(_sfc_main$2), {
                      type: "single",
                      collapsible: "",
                      class: "w-full space-y-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$3), { value: "reservation-1" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                              default: withCtx(() => [
                                createTextVNode(" Comment se passe la location et le paiement ? ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$5), null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "space-y-4" }, [
                                  createVNode("p", null, "Une fois votre demande acceptée, voici comment procéder :"),
                                  createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Contact direct :"),
                                      createTextVNode(" Vous échangez directement avec le propriétaire")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Organisation :"),
                                      createTextVNode(" Vous convenez des modalités (dates, lieu de récupération, etc.)")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Paiement :"),
                                      createTextVNode(" Les paiements se font directement avec les propriétaires, en dehors de la plateforme")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Récupération :"),
                                      createTextVNode(" Vous récupérez le matériel selon les arrangements convenus")
                                    ])
                                  ]),
                                  createVNode(unref(_sfc_main$6), {
                                    variant: "info",
                                    class: "mt-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(InfoIcon), { class: "h-4 w-4" }),
                                      createVNode(unref(_sfc_main$7), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Important")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$8), null, {
                                        default: withCtx(() => [
                                          createTextVNode(" La plateforme ne prend pas de commission et n'intervient pas dans les transactions financières. ")
                                        ]),
                                        _: 1
                                      })
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
                        createVNode(unref(_sfc_main$3), { value: "reservation-2" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                              default: withCtx(() => [
                                createTextVNode(" Comment annuler une réservation ? ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$5), null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "space-y-4" }, [
                                  createVNode("p", null, "Les modalités d'annulation dépendent du statut de votre réservation :"),
                                  createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Demande en attente :"),
                                      createTextVNode(" Vous pouvez annuler depuis votre espace personnel")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Demande confirmée :"),
                                      createTextVNode(" Contactez directement le propriétaire pour discuter des modalités d'annulation")
                                    ])
                                  ]),
                                  createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, " Nous recommandons d'annuler le plus tôt possible pour permettre au propriétaire de proposer le matériel à d'autres utilisateurs. ")
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "reservation-3" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                              default: withCtx(() => [
                                createTextVNode(" Quels types de matériel peuvent être loués sur la plateforme ? ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$5), null, {
                              default: withCtx(() => [
                                createVNode("p", null, "La plateforme accepte tous types de matériel événementiel :"),
                                createVNode("div", { class: "grid grid-cols-2 gap-2 mt-4" }, [
                                  createVNode("ul", { class: "list-disc list-inside space-y-1" }, [
                                    createVNode("li", null, "Tables et chaises"),
                                    createVNode("li", null, "Tentes et chapiteaux"),
                                    createVNode("li", null, "Systèmes de sonorisation"),
                                    createVNode("li", null, "Éclairage d'événement")
                                  ]),
                                  createVNode("ul", { class: "list-disc list-inside space-y-1" }, [
                                    createVNode("li", null, "Vaisselle et couverts"),
                                    createVNode("li", null, "Décoration"),
                                    createVNode("li", null, "Matériel de cuisine"),
                                    createVNode("li", null, "Équipements sportifs")
                                  ])
                                ]),
                                createVNode("p", { class: "mt-4 text-sm text-gray-600 dark:text-gray-400" }, " L'important est que le matériel soit en bon état et adapté à un usage événementiel. ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "space-y-6" }, [
                    createVNode("h2", { class: "text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2" }, " Sécurité et protection "),
                    createVNode(unref(_sfc_main$2), {
                      type: "single",
                      collapsible: "",
                      class: "w-full space-y-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$3), { value: "security-1" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                              default: withCtx(() => [
                                createTextVNode(" Comment protéger mon matériel en tant que propriétaire ? ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$5), null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "space-y-4" }, [
                                  createVNode("p", null, "Voici nos recommandations pour protéger votre matériel :"),
                                  createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Contrat de location :"),
                                      createTextVNode(" Établissez un contrat simple entre les parties")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Conditions claires :"),
                                      createTextVNode(" Définissez bien les conditions d'utilisation")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Caution :"),
                                      createTextVNode(" Demandez un chèque de caution si nécessaire")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "État du matériel :"),
                                      createTextVNode(" Documentez l'état avant et après utilisation")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Communication :"),
                                      createTextVNode(" Échangez les coordonnées et restez en contact")
                                    ])
                                  ]),
                                  createVNode(unref(_sfc_main$6), {
                                    variant: "warning",
                                    class: "mt-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(AlertTriangleIcon), { class: "h-4 w-4" }),
                                      createVNode(unref(_sfc_main$7), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Responsabilité")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$8), null, {
                                        default: withCtx(() => [
                                          createTextVNode(" La plateforme facilite la mise en relation mais la responsabilité de la protection du matériel incombe aux parties prenantes. ")
                                        ]),
                                        _: 1
                                      })
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
                        createVNode(unref(_sfc_main$3), { value: "security-2" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                              default: withCtx(() => [
                                createTextVNode(" Que faire en cas de problème avec le matériel loué ? ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$5), null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "space-y-4" }, [
                                  createVNode("p", null, "En cas de problème, voici les étapes à suivre :"),
                                  createVNode("ol", { class: "list-decimal list-inside space-y-2 ml-4" }, [
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Contact immédiat :"),
                                      createTextVNode(" Contactez directement le propriétaire du matériel")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Documentation :"),
                                      createTextVNode(" Prenez des photos et documentez le problème")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Communication :"),
                                      createTextVNode(" Expliquez clairement la situation")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Solution :"),
                                      createTextVNode(" Trouvez ensemble une solution équitable")
                                    ])
                                  ]),
                                  createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, " Nous recommandons de documenter l'état du matériel avant et après utilisation pour éviter les litiges. ")
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "security-3" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                              default: withCtx(() => [
                                createTextVNode(" Comment signaler un utilisateur problématique ? ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$5), null, {
                              default: withCtx(() => [
                                createVNode("p", null, [
                                  createTextVNode("Si vous rencontrez un utilisateur problématique, vous pouvez nous contacter à "),
                                  createVNode("a", {
                                    href: "mailto:contact@assocation.fr",
                                    class: "text-primary hover:underline"
                                  }, "contact@assocation.fr"),
                                  createTextVNode(".")
                                ]),
                                createVNode("p", { class: "mt-2" }, "Nous examinerons la situation et prendrons les mesures appropriées pour maintenir la qualité de la communauté."),
                                createVNode("p", { class: "mt-2 text-sm text-gray-600 dark:text-gray-400" }, " N'hésitez pas à nous fournir tous les détails utiles pour nous aider à traiter votre signalement. ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "space-y-6" }, [
                    createVNode("h2", { class: "text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2" }, " Conseils et optimisation "),
                    createVNode(unref(_sfc_main$2), {
                      type: "single",
                      collapsible: "",
                      class: "w-full space-y-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$3), { value: "tips-1" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                              default: withCtx(() => [
                                createTextVNode(" Comment optimiser mes annonces pour attirer plus de demandes ? ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$5), null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "space-y-4" }, [
                                  createVNode("p", null, "Voici nos conseils pour optimiser vos annonces :"),
                                  createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Photos de qualité :"),
                                      createTextVNode(" Ajoutez des photos claires et représentatives")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Description détaillée :"),
                                      createTextVNode(" Décrivez précisément le matériel et ses caractéristiques")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Tarifs clairs :"),
                                      createTextVNode(" Indiquez clairement les prix et conditions")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Réactivité :"),
                                      createTextVNode(" Répondez rapidement aux demandes de réservation")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Disponibilité :"),
                                      createTextVNode(" Mettez à jour régulièrement vos disponibilités")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Localisation :"),
                                      createTextVNode(" Précisez bien votre zone géographique")
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), { value: "tips-2" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), { class: "text-left" }, {
                              default: withCtx(() => [
                                createTextVNode(" Comment bien préparer ma demande de réservation ? ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$5), null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "space-y-4" }, [
                                  createVNode("p", null, "Pour maximiser vos chances d'acceptation :"),
                                  createVNode("ul", { class: "list-disc list-inside space-y-2 ml-4" }, [
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Présentez-vous :"),
                                      createTextVNode(" Expliquez brièvement votre association et votre projet")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Dates précises :"),
                                      createTextVNode(" Indiquez clairement vos besoins en dates")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Usage détaillé :"),
                                      createTextVNode(" Décrivez l'usage prévu du matériel")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Contact :"),
                                      createTextVNode(" Assurez-vous que vos coordonnées sont à jour")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", null, "Flexibilité :"),
                                      createTextVNode(" Soyez flexible sur les modalités de récupération")
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "mt-16 bg-gradient-to-r from-violet-50 to-blue-50 dark:from-violet-950 dark:to-blue-950 rounded-2xl p-8 text-center" }, [
                  createVNode("h2", { class: "text-2xl font-semibold text-gray-900 dark:text-white mb-4" }, " Vous ne trouvez pas votre réponse ? "),
                  createVNode("p", { class: "text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto" }, " Notre équipe est là pour vous aider. N'hésitez pas à nous contacter pour toute question supplémentaire. "),
                  createVNode("div", { class: "flex flex-col sm:flex-row gap-4 justify-center" }, [
                    createVNode(unref(_sfc_main$9), {
                      as: "a",
                      href: "mailto:contact@assocation.fr",
                      class: "font-semibold"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(MailIcon), { class: "mr-2 h-4 w-4" }),
                        createTextVNode(" Nous contacter ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$9), {
                      variant: "outline",
                      as: "a",
                      href: _ctx.route("how-it-works"),
                      class: "font-semibold"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(HelpCircleIcon), { class: "mr-2 h-4 w-4" }),
                        createTextVNode(" Comment ça marche ? ")
                      ]),
                      _: 1
                    }, 8, ["href"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
