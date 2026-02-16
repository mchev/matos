import { ref, watch, mergeProps, withCtx, unref, createTextVNode, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-B3jJCr1A.js";
import { _ as _sfc_main$2 } from "./OrganisationLayout-Gv4mqYIW.js";
import { useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$9 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$5 } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$4 } from "./Label-DLRZNtyA.js";
import { _ as _sfc_main$7 } from "./Textarea-DxMXW1ER.js";
import { _ as _sfc_main$8 } from "./AddressInput-BAPtZaKK.js";
import { _ as _sfc_main$6 } from "./InputError-BhTWS2NZ.js";
import { _ as _sfc_main$3 } from "./HeadingSmall-B1yfmTIh.js";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "reka-ui";
import "@vueuse/core";
import "lucide-vue-next";
import "@heroicons/vue/24/outline";
import "./index-9VOASAGY.js";
import "class-variance-authority";
import "vue-sonner";
import "./Heading-Dsj-VTAa.js";
import "./Separator-C0fcDgz2.js";
import "clsx";
import "tailwind-merge";
import "lodash/debounce.js";
import "axios";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const location = ref(null);
    const form = useForm({
      name: "",
      description: "",
      address: "",
      city: "",
      latitude: "",
      longitude: "",
      postal_code: "",
      country: "FR"
    });
    watch(location, (value) => {
      if (!value) {
        form.address = "";
        form.city = "";
        form.postal_code = "";
        form.latitude = "";
        form.longitude = "";
        return;
      }
      const addressParts = [];
      if (value.housenumber) addressParts.push(value.housenumber);
      if (value.street) addressParts.push(value.street);
      form.address = addressParts.join(" ");
      form.city = value.city;
      form.postal_code = value.postcode;
      form.latitude = value.lat;
      form.longitude = value.lng;
    });
    const createDepot = () => {
      form.post(route("app.organizations.depots.store"), {
        onSuccess: () => {
          router.visit(route("app.organizations.depots.index"));
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Créer un dépôt" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<section class="space-y-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    title: "Créer un dépôt",
                    description: "Ajoutez un nouveau lieu de stockage à votre organisation."
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="max-w-2xl"${_scopeId2}><form class="space-y-8"${_scopeId2}><div class="space-y-4"${_scopeId2}><div class="flex items-center gap-2 pb-2 border-b"${_scopeId2}><span class="text-lg font-semibold"${_scopeId2}>Informations générales</span></div><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { for: "name" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Nom du dépôt`);
                      } else {
                        return [
                          createTextVNode("Nom du dépôt")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="text-sm text-muted-foreground"${_scopeId2}> Évitez d&#39;inclure des informations précises de localisation dans le nom car il sera affiché publiquement avec la ville. </p>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$5), {
                    id: "name",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    placeholder: "Ex: Dépôt principal, Entrepôt sud...",
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    message: unref(form).errors.name
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { for: "description" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Description`);
                      } else {
                        return [
                          createTextVNode("Description")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="text-sm text-muted-foreground"${_scopeId2}> Décrivez brièvement ce dépôt et ses caractéristiques principales. </p>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$7), {
                    id: "description",
                    modelValue: unref(form).description,
                    "onUpdate:modelValue": ($event) => unref(form).description = $event,
                    placeholder: "Ex: Grand entrepôt avec accès poids lourds...",
                    rows: "3"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    message: unref(form).errors.description
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="space-y-4"${_scopeId2}><div class="flex items-center gap-2 pb-2 border-b"${_scopeId2}><span class="text-lg font-semibold"${_scopeId2}>Localisation</span></div><div class="space-y-4"${_scopeId2}><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { for: "location" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Adresse`);
                      } else {
                        return [
                          createTextVNode("Adresse")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="text-sm text-muted-foreground"${_scopeId2}> Une adresse précise nous permet de géolocaliser votre dépôt et d&#39;améliorer les résultats de recherche d&#39;équipements en fonction de la distance. Pour des raisons de sécurité, seule la ville sera visible publiquement sur le site. </p>`);
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    id: "location",
                    modelValue: location.value,
                    "onUpdate:modelValue": ($event) => location.value = $event,
                    placeholder: "Rechercher une adresse",
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    message: unref(form).errors.address
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid gap-4 p-4 bg-muted/50 rounded-lg border"${_scopeId2}><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { for: "address" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Adresse complète`);
                      } else {
                        return [
                          createTextVNode("Adresse complète")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5), {
                    id: "address",
                    modelValue: unref(form).address,
                    "onUpdate:modelValue": ($event) => unref(form).address = $event,
                    readonly: "",
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-2 gap-4"${_scopeId2}><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { for: "city" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ville`);
                      } else {
                        return [
                          createTextVNode("Ville")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5), {
                    id: "city",
                    modelValue: unref(form).city,
                    "onUpdate:modelValue": ($event) => unref(form).city = $event,
                    readonly: "",
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { for: "postal_code" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Code postal`);
                      } else {
                        return [
                          createTextVNode("Code postal")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5), {
                    id: "postal_code",
                    modelValue: unref(form).postal_code,
                    "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
                    readonly: "",
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div></div></div><div class="flex justify-end gap-4 pt-4 border-t"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$9), {
                    type: "button",
                    variant: "outline",
                    onClick: ($event) => unref(router).visit(_ctx.route("app.organizations.depots.index"))
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Annuler `);
                      } else {
                        return [
                          createTextVNode(" Annuler ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$9), {
                    type: "submit",
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Créer le dépôt `);
                      } else {
                        return [
                          createTextVNode(" Créer le dépôt ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></form></div></section>`);
                } else {
                  return [
                    createVNode("section", { class: "space-y-6" }, [
                      createVNode(_sfc_main$3, {
                        title: "Créer un dépôt",
                        description: "Ajoutez un nouveau lieu de stockage à votre organisation."
                      }),
                      createVNode("div", { class: "max-w-2xl" }, [
                        createVNode("form", {
                          onSubmit: withModifiers(createDepot, ["prevent"]),
                          class: "space-y-8"
                        }, [
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode("div", { class: "flex items-center gap-2 pb-2 border-b" }, [
                              createVNode("span", { class: "text-lg font-semibold" }, "Informations générales")
                            ]),
                            createVNode("div", { class: "grid gap-2" }, [
                              createVNode(unref(_sfc_main$4), { for: "name" }, {
                                default: withCtx(() => [
                                  createTextVNode("Nom du dépôt")
                                ]),
                                _: 1
                              }),
                              createVNode("p", { class: "text-sm text-muted-foreground" }, " Évitez d'inclure des informations précises de localisation dans le nom car il sera affiché publiquement avec la ville. "),
                              createVNode(unref(_sfc_main$5), {
                                id: "name",
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                placeholder: "Ex: Dépôt principal, Entrepôt sud...",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_sfc_main$6, {
                                message: unref(form).errors.name
                              }, null, 8, ["message"])
                            ]),
                            createVNode("div", { class: "grid gap-2" }, [
                              createVNode(unref(_sfc_main$4), { for: "description" }, {
                                default: withCtx(() => [
                                  createTextVNode("Description")
                                ]),
                                _: 1
                              }),
                              createVNode("p", { class: "text-sm text-muted-foreground" }, " Décrivez brièvement ce dépôt et ses caractéristiques principales. "),
                              createVNode(unref(_sfc_main$7), {
                                id: "description",
                                modelValue: unref(form).description,
                                "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                placeholder: "Ex: Grand entrepôt avec accès poids lourds...",
                                rows: "3"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_sfc_main$6, {
                                message: unref(form).errors.description
                              }, null, 8, ["message"])
                            ])
                          ]),
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode("div", { class: "flex items-center gap-2 pb-2 border-b" }, [
                              createVNode("span", { class: "text-lg font-semibold" }, "Localisation")
                            ]),
                            createVNode("div", { class: "space-y-4" }, [
                              createVNode("div", { class: "grid gap-2" }, [
                                createVNode(unref(_sfc_main$4), { for: "location" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Adresse")
                                  ]),
                                  _: 1
                                }),
                                createVNode("p", { class: "text-sm text-muted-foreground" }, " Une adresse précise nous permet de géolocaliser votre dépôt et d'améliorer les résultats de recherche d'équipements en fonction de la distance. Pour des raisons de sécurité, seule la ville sera visible publiquement sur le site. "),
                                createVNode(_sfc_main$8, {
                                  id: "location",
                                  modelValue: location.value,
                                  "onUpdate:modelValue": ($event) => location.value = $event,
                                  placeholder: "Rechercher une adresse",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_sfc_main$6, {
                                  message: unref(form).errors.address
                                }, null, 8, ["message"])
                              ]),
                              createVNode("div", { class: "grid gap-4 p-4 bg-muted/50 rounded-lg border" }, [
                                createVNode("div", { class: "grid gap-2" }, [
                                  createVNode(unref(_sfc_main$4), { for: "address" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Adresse complète")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$5), {
                                    id: "address",
                                    modelValue: unref(form).address,
                                    "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                    readonly: "",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                  createVNode("div", { class: "grid gap-2" }, [
                                    createVNode(unref(_sfc_main$4), { for: "city" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Ville")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$5), {
                                      id: "city",
                                      modelValue: unref(form).city,
                                      "onUpdate:modelValue": ($event) => unref(form).city = $event,
                                      readonly: "",
                                      disabled: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "grid gap-2" }, [
                                    createVNode(unref(_sfc_main$4), { for: "postal_code" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Code postal")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$5), {
                                      id: "postal_code",
                                      modelValue: unref(form).postal_code,
                                      "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
                                      readonly: "",
                                      disabled: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "flex justify-end gap-4 pt-4 border-t" }, [
                            createVNode(unref(_sfc_main$9), {
                              type: "button",
                              variant: "outline",
                              onClick: ($event) => unref(router).visit(_ctx.route("app.organizations.depots.index"))
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Annuler ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(unref(_sfc_main$9), {
                              type: "submit",
                              disabled: unref(form).processing
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Créer le dépôt ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ])
                        ], 32)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, null, {
                default: withCtx(() => [
                  createVNode("section", { class: "space-y-6" }, [
                    createVNode(_sfc_main$3, {
                      title: "Créer un dépôt",
                      description: "Ajoutez un nouveau lieu de stockage à votre organisation."
                    }),
                    createVNode("div", { class: "max-w-2xl" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(createDepot, ["prevent"]),
                        class: "space-y-8"
                      }, [
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", { class: "flex items-center gap-2 pb-2 border-b" }, [
                            createVNode("span", { class: "text-lg font-semibold" }, "Informations générales")
                          ]),
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode(unref(_sfc_main$4), { for: "name" }, {
                              default: withCtx(() => [
                                createTextVNode("Nom du dépôt")
                              ]),
                              _: 1
                            }),
                            createVNode("p", { class: "text-sm text-muted-foreground" }, " Évitez d'inclure des informations précises de localisation dans le nom car il sera affiché publiquement avec la ville. "),
                            createVNode(unref(_sfc_main$5), {
                              id: "name",
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              placeholder: "Ex: Dépôt principal, Entrepôt sud...",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$6, {
                              message: unref(form).errors.name
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode(unref(_sfc_main$4), { for: "description" }, {
                              default: withCtx(() => [
                                createTextVNode("Description")
                              ]),
                              _: 1
                            }),
                            createVNode("p", { class: "text-sm text-muted-foreground" }, " Décrivez brièvement ce dépôt et ses caractéristiques principales. "),
                            createVNode(unref(_sfc_main$7), {
                              id: "description",
                              modelValue: unref(form).description,
                              "onUpdate:modelValue": ($event) => unref(form).description = $event,
                              placeholder: "Ex: Grand entrepôt avec accès poids lourds...",
                              rows: "3"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$6, {
                              message: unref(form).errors.description
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", { class: "flex items-center gap-2 pb-2 border-b" }, [
                            createVNode("span", { class: "text-lg font-semibold" }, "Localisation")
                          ]),
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode("div", { class: "grid gap-2" }, [
                              createVNode(unref(_sfc_main$4), { for: "location" }, {
                                default: withCtx(() => [
                                  createTextVNode("Adresse")
                                ]),
                                _: 1
                              }),
                              createVNode("p", { class: "text-sm text-muted-foreground" }, " Une adresse précise nous permet de géolocaliser votre dépôt et d'améliorer les résultats de recherche d'équipements en fonction de la distance. Pour des raisons de sécurité, seule la ville sera visible publiquement sur le site. "),
                              createVNode(_sfc_main$8, {
                                id: "location",
                                modelValue: location.value,
                                "onUpdate:modelValue": ($event) => location.value = $event,
                                placeholder: "Rechercher une adresse",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_sfc_main$6, {
                                message: unref(form).errors.address
                              }, null, 8, ["message"])
                            ]),
                            createVNode("div", { class: "grid gap-4 p-4 bg-muted/50 rounded-lg border" }, [
                              createVNode("div", { class: "grid gap-2" }, [
                                createVNode(unref(_sfc_main$4), { for: "address" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Adresse complète")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$5), {
                                  id: "address",
                                  modelValue: unref(form).address,
                                  "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                  readonly: "",
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                createVNode("div", { class: "grid gap-2" }, [
                                  createVNode(unref(_sfc_main$4), { for: "city" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Ville")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$5), {
                                    id: "city",
                                    modelValue: unref(form).city,
                                    "onUpdate:modelValue": ($event) => unref(form).city = $event,
                                    readonly: "",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "grid gap-2" }, [
                                  createVNode(unref(_sfc_main$4), { for: "postal_code" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Code postal")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$5), {
                                    id: "postal_code",
                                    modelValue: unref(form).postal_code,
                                    "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
                                    readonly: "",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "flex justify-end gap-4 pt-4 border-t" }, [
                          createVNode(unref(_sfc_main$9), {
                            type: "button",
                            variant: "outline",
                            onClick: ($event) => unref(router).visit(_ctx.route("app.organizations.depots.index"))
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Annuler ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(unref(_sfc_main$9), {
                            type: "submit",
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Créer le dépôt ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ])
                      ], 32)
                    ])
                  ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Settings/Depots/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
