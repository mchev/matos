import { ref, watch, mergeProps, unref, withCtx, createTextVNode, createVNode, withModifiers, toDisplayString, createBlock, openBlock, Fragment, renderList, nextTick, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$4 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$a } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$9 } from "./Label-DLRZNtyA.js";
import { _ as _sfc_main$c } from "./Textarea-DxMXW1ER.js";
import { _ as _sfc_main$d } from "./AddressInput-BAPtZaKK.js";
import { _ as _sfc_main$f, a as _sfc_main$g, b as _sfc_main$h, c as _sfc_main$i, d as _sfc_main$j, e as _sfc_main$k } from "./TableHeader-B4NNsC_2.js";
import { _ as _sfc_main$b } from "./InputError-BhTWS2NZ.js";
import { _ as _sfc_main$1 } from "./HeadingSmall-B1yfmTIh.js";
import { _ as _sfc_main$2, f as _sfc_main$3, a as _sfc_main$5, b as _sfc_main$6, c as _sfc_main$7, d as _sfc_main$8, e as _sfc_main$e } from "./DialogTrigger-CSFZvrzo.js";
import "class-variance-authority";
import "reka-ui";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
import "lucide-vue-next";
import "lodash/debounce.js";
import "axios";
const _sfc_main = {
  __name: "DepotsManagement",
  __ssrInlineRender: true,
  props: {
    depots: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const createDialogOpen = ref(false);
    const editDialogOpen = ref(false);
    const isInitializing = ref(false);
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
    const location = ref(null);
    const resetForm = () => {
      form.reset();
      form.clearErrors();
      location.value = null;
    };
    watch(location, (value) => {
      if (isInitializing.value) return;
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
        preserveScroll: true,
        onSuccess: () => {
          resetForm();
          createDialogOpen.value = false;
        }
      });
    };
    const initEditForm = (depot) => {
      isInitializing.value = true;
      form.name = depot.name;
      form.description = depot.description;
      form.address = depot.address;
      form.city = depot.city;
      form.latitude = depot.latitude;
      form.longitude = depot.longitude;
      form.postal_code = depot.postal_code;
      form.country = depot.country;
      nextTick(() => {
        location.value = {
          name: depot.address,
          street: depot.address,
          city: depot.city,
          postcode: depot.postal_code,
          lat: depot.latitude,
          lng: depot.longitude
        };
        isInitializing.value = false;
      });
    };
    const editDepot = (depot) => {
      form.put(route("app.organizations.depots.update", depot.id), {
        preserveScroll: true,
        onSuccess: () => {
          resetForm();
          editDialogOpen.value = false;
        }
      });
    };
    const deleteDepot = (depot) => {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce dépôt ?")) {
        router.delete(route("app.organizations.depots.destroy", depot.id), {
          preserveScroll: true
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Gestion des dépôts",
        description: "Gérez les lieux de stockage de votre organisation."
      }, null, _parent));
      _push(`<div class="space-y-4">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), {
        open: createDialogOpen.value,
        "onUpdate:open": ($event) => createDialogOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), { asChild: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { onClick: resetForm }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ajouter un dépôt`);
                      } else {
                        return [
                          createTextVNode("Ajouter un dépôt")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { onClick: resetForm }, {
                      default: withCtx(() => [
                        createTextVNode("Ajouter un dépôt")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$6), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Ajouter un nouveau dépôt`);
                            } else {
                              return [
                                createTextVNode("Ajouter un nouveau dépôt")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Créez un nouveau lieu de stockage pour votre organisation. `);
                            } else {
                              return [
                                createTextVNode(" Créez un nouveau lieu de stockage pour votre organisation. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createTextVNode("Ajouter un nouveau dépôt")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$8), null, {
                            default: withCtx(() => [
                              createTextVNode(" Créez un nouveau lieu de stockage pour votre organisation. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="grid gap-4 py-4"${_scopeId2}><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$9), { for: "name" }, {
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
                  _push3(ssrRenderComponent(unref(_sfc_main$a), {
                    id: "name",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    message: unref(form).errors.name
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$9), { for: "description" }, {
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
                  _push3(ssrRenderComponent(unref(_sfc_main$c), {
                    id: "description",
                    modelValue: unref(form).description,
                    "onUpdate:modelValue": ($event) => unref(form).description = $event,
                    rows: "3"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    message: unref(form).errors.description
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$9), { for: "address" }, {
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
                  _push3(ssrRenderComponent(_sfc_main$d, {
                    id: "location",
                    modelValue: location.value,
                    "onUpdate:modelValue": ($event) => location.value = $event,
                    placeholder: "Rechercher une adresse",
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    message: unref(form).errors.address
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-2 gap-4"${_scopeId2}><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$9), { for: "city" }, {
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
                  _push3(ssrRenderComponent(unref(_sfc_main$a), {
                    id: "city",
                    modelValue: unref(form).city,
                    "onUpdate:modelValue": ($event) => unref(form).city = $event,
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    message: unref(form).errors.city
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$9), { for: "postal_code" }, {
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
                  _push3(ssrRenderComponent(unref(_sfc_main$a), {
                    id: "postal_code",
                    modelValue: unref(form).postal_code,
                    "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    message: unref(form).errors.postal_code
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$e), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), {
                          type: "submit",
                          disabled: unref(form).processing
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Créer le dépôt `);
                            } else {
                              return [
                                createTextVNode(" Créer le dépôt ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), {
                            type: "submit",
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Créer le dépôt ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form>`);
                } else {
                  return [
                    createVNode("form", {
                      onSubmit: withModifiers(createDepot, ["prevent"])
                    }, [
                      createVNode(unref(_sfc_main$6), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createTextVNode("Ajouter un nouveau dépôt")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$8), null, {
                            default: withCtx(() => [
                              createTextVNode(" Créez un nouveau lieu de stockage pour votre organisation. ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "grid gap-4 py-4" }, [
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode(unref(_sfc_main$9), { for: "name" }, {
                            default: withCtx(() => [
                              createTextVNode("Nom du dépôt")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$a), {
                            id: "name",
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$b, {
                            message: unref(form).errors.name
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode(unref(_sfc_main$9), { for: "description" }, {
                            default: withCtx(() => [
                              createTextVNode("Description")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$c), {
                            id: "description",
                            modelValue: unref(form).description,
                            "onUpdate:modelValue": ($event) => unref(form).description = $event,
                            rows: "3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$b, {
                            message: unref(form).errors.description
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode(unref(_sfc_main$9), { for: "address" }, {
                            default: withCtx(() => [
                              createTextVNode("Adresse")
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$d, {
                            id: "location",
                            modelValue: location.value,
                            "onUpdate:modelValue": ($event) => location.value = $event,
                            placeholder: "Rechercher une adresse",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$b, {
                            message: unref(form).errors.address
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode(unref(_sfc_main$9), { for: "city" }, {
                              default: withCtx(() => [
                                createTextVNode("Ville")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$a), {
                              id: "city",
                              modelValue: unref(form).city,
                              "onUpdate:modelValue": ($event) => unref(form).city = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$b, {
                              message: unref(form).errors.city
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode(unref(_sfc_main$9), { for: "postal_code" }, {
                              default: withCtx(() => [
                                createTextVNode("Code postal")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$a), {
                              id: "postal_code",
                              modelValue: unref(form).postal_code,
                              "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$b, {
                              message: unref(form).errors.postal_code
                            }, null, 8, ["message"])
                          ])
                        ])
                      ]),
                      createVNode(unref(_sfc_main$e), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), {
                            type: "submit",
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Créer le dépôt ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ]),
                        _: 1
                      })
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$3), { asChild: "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), { onClick: resetForm }, {
                    default: withCtx(() => [
                      createTextVNode("Ajouter un dépôt")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode("form", {
                    onSubmit: withModifiers(createDepot, ["prevent"])
                  }, [
                    createVNode(unref(_sfc_main$6), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            createTextVNode("Ajouter un nouveau dépôt")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$8), null, {
                          default: withCtx(() => [
                            createTextVNode(" Créez un nouveau lieu de stockage pour votre organisation. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid gap-4 py-4" }, [
                      createVNode("div", { class: "grid gap-2" }, [
                        createVNode(unref(_sfc_main$9), { for: "name" }, {
                          default: withCtx(() => [
                            createTextVNode("Nom du dépôt")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$a), {
                          id: "name",
                          modelValue: unref(form).name,
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$b, {
                          message: unref(form).errors.name
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "grid gap-2" }, [
                        createVNode(unref(_sfc_main$9), { for: "description" }, {
                          default: withCtx(() => [
                            createTextVNode("Description")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$c), {
                          id: "description",
                          modelValue: unref(form).description,
                          "onUpdate:modelValue": ($event) => unref(form).description = $event,
                          rows: "3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$b, {
                          message: unref(form).errors.description
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "grid gap-2" }, [
                        createVNode(unref(_sfc_main$9), { for: "address" }, {
                          default: withCtx(() => [
                            createTextVNode("Adresse")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$d, {
                          id: "location",
                          modelValue: location.value,
                          "onUpdate:modelValue": ($event) => location.value = $event,
                          placeholder: "Rechercher une adresse",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$b, {
                          message: unref(form).errors.address
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode(unref(_sfc_main$9), { for: "city" }, {
                            default: withCtx(() => [
                              createTextVNode("Ville")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$a), {
                            id: "city",
                            modelValue: unref(form).city,
                            "onUpdate:modelValue": ($event) => unref(form).city = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$b, {
                            message: unref(form).errors.city
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode(unref(_sfc_main$9), { for: "postal_code" }, {
                            default: withCtx(() => [
                              createTextVNode("Code postal")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$a), {
                            id: "postal_code",
                            modelValue: unref(form).postal_code,
                            "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$b, {
                            message: unref(form).errors.postal_code
                          }, null, 8, ["message"])
                        ])
                      ])
                    ]),
                    createVNode(unref(_sfc_main$e), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), {
                          type: "submit",
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Créer le dépôt ")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    })
                  ], 32)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="rounded-md border dark:border-gray-800">`);
      _push(ssrRenderComponent(unref(_sfc_main$f), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$g), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$h), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$i), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Nom`);
                            } else {
                              return [
                                createTextVNode("Nom")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$i), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Adresse`);
                            } else {
                              return [
                                createTextVNode("Adresse")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$i), { class: "w-[100px]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Actions`);
                            } else {
                              return [
                                createTextVNode("Actions")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$i), null, {
                            default: withCtx(() => [
                              createTextVNode("Nom")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$i), null, {
                            default: withCtx(() => [
                              createTextVNode("Adresse")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$i), { class: "w-[100px]" }, {
                            default: withCtx(() => [
                              createTextVNode("Actions")
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
                    createVNode(unref(_sfc_main$h), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$i), null, {
                          default: withCtx(() => [
                            createTextVNode("Nom")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$i), null, {
                          default: withCtx(() => [
                            createTextVNode("Adresse")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$i), { class: "w-[100px]" }, {
                          default: withCtx(() => [
                            createTextVNode("Actions")
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
            _push2(ssrRenderComponent(unref(_sfc_main$j), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.depots, (depot) => {
                    _push3(ssrRenderComponent(unref(_sfc_main$h), {
                      key: depot.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$k), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="font-medium"${_scopeId4}>${ssrInterpolate(depot.name)}</div><div class="text-sm text-gray-500"${_scopeId4}>${ssrInterpolate(depot.description)}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "font-medium" }, toDisplayString(depot.name), 1),
                                  createVNode("div", { class: "text-sm text-gray-500" }, toDisplayString(depot.description), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$k), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div${_scopeId4}>${ssrInterpolate(depot.address)}</div><div${_scopeId4}>${ssrInterpolate(depot.postal_code)} ${ssrInterpolate(depot.city)}</div>`);
                              } else {
                                return [
                                  createVNode("div", null, toDisplayString(depot.address), 1),
                                  createVNode("div", null, toDisplayString(depot.postal_code) + " " + toDisplayString(depot.city), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$k), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex items-center gap-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(_sfc_main$2), {
                                  open: editDialogOpen.value,
                                  "onUpdate:open": ($event) => editDialogOpen.value = $event
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(_sfc_main$3), { asChild: "" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(_sfc_main$4), {
                                              variant: "outline",
                                              size: "sm",
                                              onClick: () => {
                                                editDialogOpen.value = true;
                                                initEditForm(depot);
                                              }
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` Modifier `);
                                                } else {
                                                  return [
                                                    createTextVNode(" Modifier ")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(_sfc_main$4), {
                                                variant: "outline",
                                                size: "sm",
                                                onClick: withModifiers(() => {
                                                  editDialogOpen.value = true;
                                                  initEditForm(depot);
                                                }, ["stop"])
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Modifier ")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(unref(_sfc_main$5), null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<form${_scopeId6}>`);
                                            _push7(ssrRenderComponent(unref(_sfc_main$6), null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(unref(_sfc_main$7), null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`Modifier le dépôt`);
                                                      } else {
                                                        return [
                                                          createTextVNode("Modifier le dépôt")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(unref(_sfc_main$7), null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Modifier le dépôt")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<div class="grid gap-4 py-4"${_scopeId6}><div class="grid gap-2"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(unref(_sfc_main$9), { for: "edit-name" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Nom du dépôt`);
                                                } else {
                                                  return [
                                                    createTextVNode("Nom du dépôt")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$a), {
                                              id: "edit-name",
                                              modelValue: unref(form).name,
                                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                              required: ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_sfc_main$b, {
                                              message: unref(form).errors.name
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="grid gap-2"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(unref(_sfc_main$9), { for: "edit-description" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Description`);
                                                } else {
                                                  return [
                                                    createTextVNode("Description")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$c), {
                                              id: "edit-description",
                                              modelValue: unref(form).description,
                                              "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                              rows: "3"
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_sfc_main$b, {
                                              message: unref(form).errors.description
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="grid gap-2"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(unref(_sfc_main$9), { for: "edit-address" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Adresse`);
                                                } else {
                                                  return [
                                                    createTextVNode("Adresse")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_sfc_main$d, {
                                              id: "edit-location",
                                              modelValue: location.value,
                                              "onUpdate:modelValue": ($event) => location.value = $event,
                                              placeholder: "Rechercher une adresse",
                                              required: ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_sfc_main$b, {
                                              message: unref(form).errors.address
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div></div>`);
                                            _push7(ssrRenderComponent(unref(_sfc_main$e), null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(unref(_sfc_main$4), {
                                                    type: "submit",
                                                    disabled: unref(form).processing
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(` Sauvegarder `);
                                                      } else {
                                                        return [
                                                          createTextVNode(" Sauvegarder ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(unref(_sfc_main$4), {
                                                      type: "submit",
                                                      disabled: unref(form).processing
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Sauvegarder ")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["disabled"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</form>`);
                                          } else {
                                            return [
                                              createVNode("form", {
                                                onSubmit: withModifiers(($event) => editDepot(depot), ["prevent"])
                                              }, [
                                                createVNode(unref(_sfc_main$6), null, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(_sfc_main$7), null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Modifier le dépôt")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("div", { class: "grid gap-4 py-4" }, [
                                                  createVNode("div", { class: "grid gap-2" }, [
                                                    createVNode(unref(_sfc_main$9), { for: "edit-name" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Nom du dépôt")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(unref(_sfc_main$a), {
                                                      id: "edit-name",
                                                      modelValue: unref(form).name,
                                                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                                      required: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_sfc_main$b, {
                                                      message: unref(form).errors.name
                                                    }, null, 8, ["message"])
                                                  ]),
                                                  createVNode("div", { class: "grid gap-2" }, [
                                                    createVNode(unref(_sfc_main$9), { for: "edit-description" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Description")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(unref(_sfc_main$c), {
                                                      id: "edit-description",
                                                      modelValue: unref(form).description,
                                                      "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                                      rows: "3"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_sfc_main$b, {
                                                      message: unref(form).errors.description
                                                    }, null, 8, ["message"])
                                                  ]),
                                                  createVNode("div", { class: "grid gap-2" }, [
                                                    createVNode(unref(_sfc_main$9), { for: "edit-address" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Adresse")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_sfc_main$d, {
                                                      id: "edit-location",
                                                      modelValue: location.value,
                                                      "onUpdate:modelValue": ($event) => location.value = $event,
                                                      placeholder: "Rechercher une adresse",
                                                      required: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_sfc_main$b, {
                                                      message: unref(form).errors.address
                                                    }, null, 8, ["message"])
                                                  ])
                                                ]),
                                                createVNode(unref(_sfc_main$e), null, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(_sfc_main$4), {
                                                      type: "submit",
                                                      disabled: unref(form).processing
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Sauvegarder ")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["disabled"])
                                                  ]),
                                                  _: 1
                                                })
                                              ], 40, ["onSubmit"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(_sfc_main$3), { asChild: "" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$4), {
                                              variant: "outline",
                                              size: "sm",
                                              onClick: withModifiers(() => {
                                                editDialogOpen.value = true;
                                                initEditForm(depot);
                                              }, ["stop"])
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Modifier ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$5), null, {
                                          default: withCtx(() => [
                                            createVNode("form", {
                                              onSubmit: withModifiers(($event) => editDepot(depot), ["prevent"])
                                            }, [
                                              createVNode(unref(_sfc_main$6), null, {
                                                default: withCtx(() => [
                                                  createVNode(unref(_sfc_main$7), null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Modifier le dépôt")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("div", { class: "grid gap-4 py-4" }, [
                                                createVNode("div", { class: "grid gap-2" }, [
                                                  createVNode(unref(_sfc_main$9), { for: "edit-name" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Nom du dépôt")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(unref(_sfc_main$a), {
                                                    id: "edit-name",
                                                    modelValue: unref(form).name,
                                                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                                    required: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_sfc_main$b, {
                                                    message: unref(form).errors.name
                                                  }, null, 8, ["message"])
                                                ]),
                                                createVNode("div", { class: "grid gap-2" }, [
                                                  createVNode(unref(_sfc_main$9), { for: "edit-description" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Description")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(unref(_sfc_main$c), {
                                                    id: "edit-description",
                                                    modelValue: unref(form).description,
                                                    "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                                    rows: "3"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_sfc_main$b, {
                                                    message: unref(form).errors.description
                                                  }, null, 8, ["message"])
                                                ]),
                                                createVNode("div", { class: "grid gap-2" }, [
                                                  createVNode(unref(_sfc_main$9), { for: "edit-address" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Adresse")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_sfc_main$d, {
                                                    id: "edit-location",
                                                    modelValue: location.value,
                                                    "onUpdate:modelValue": ($event) => location.value = $event,
                                                    placeholder: "Rechercher une adresse",
                                                    required: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_sfc_main$b, {
                                                    message: unref(form).errors.address
                                                  }, null, 8, ["message"])
                                                ])
                                              ]),
                                              createVNode(unref(_sfc_main$e), null, {
                                                default: withCtx(() => [
                                                  createVNode(unref(_sfc_main$4), {
                                                    type: "submit",
                                                    disabled: unref(form).processing
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Sauvegarder ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["disabled"])
                                                ]),
                                                _: 1
                                              })
                                            ], 40, ["onSubmit"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$4), {
                                  variant: "destructive",
                                  size: "sm",
                                  onClick: ($event) => deleteDepot(depot)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Supprimer `);
                                    } else {
                                      return [
                                        createTextVNode(" Supprimer ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode(unref(_sfc_main$2), {
                                      open: editDialogOpen.value,
                                      "onUpdate:open": ($event) => editDialogOpen.value = $event
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$3), { asChild: "" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$4), {
                                              variant: "outline",
                                              size: "sm",
                                              onClick: withModifiers(() => {
                                                editDialogOpen.value = true;
                                                initEditForm(depot);
                                              }, ["stop"])
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Modifier ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$5), null, {
                                          default: withCtx(() => [
                                            createVNode("form", {
                                              onSubmit: withModifiers(($event) => editDepot(depot), ["prevent"])
                                            }, [
                                              createVNode(unref(_sfc_main$6), null, {
                                                default: withCtx(() => [
                                                  createVNode(unref(_sfc_main$7), null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Modifier le dépôt")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("div", { class: "grid gap-4 py-4" }, [
                                                createVNode("div", { class: "grid gap-2" }, [
                                                  createVNode(unref(_sfc_main$9), { for: "edit-name" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Nom du dépôt")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(unref(_sfc_main$a), {
                                                    id: "edit-name",
                                                    modelValue: unref(form).name,
                                                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                                    required: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_sfc_main$b, {
                                                    message: unref(form).errors.name
                                                  }, null, 8, ["message"])
                                                ]),
                                                createVNode("div", { class: "grid gap-2" }, [
                                                  createVNode(unref(_sfc_main$9), { for: "edit-description" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Description")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(unref(_sfc_main$c), {
                                                    id: "edit-description",
                                                    modelValue: unref(form).description,
                                                    "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                                    rows: "3"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_sfc_main$b, {
                                                    message: unref(form).errors.description
                                                  }, null, 8, ["message"])
                                                ]),
                                                createVNode("div", { class: "grid gap-2" }, [
                                                  createVNode(unref(_sfc_main$9), { for: "edit-address" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Adresse")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_sfc_main$d, {
                                                    id: "edit-location",
                                                    modelValue: location.value,
                                                    "onUpdate:modelValue": ($event) => location.value = $event,
                                                    placeholder: "Rechercher une adresse",
                                                    required: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_sfc_main$b, {
                                                    message: unref(form).errors.address
                                                  }, null, 8, ["message"])
                                                ])
                                              ]),
                                              createVNode(unref(_sfc_main$e), null, {
                                                default: withCtx(() => [
                                                  createVNode(unref(_sfc_main$4), {
                                                    type: "submit",
                                                    disabled: unref(form).processing
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Sauvegarder ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["disabled"])
                                                ]),
                                                _: 1
                                              })
                                            ], 40, ["onSubmit"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["open", "onUpdate:open"]),
                                    createVNode(unref(_sfc_main$4), {
                                      variant: "destructive",
                                      size: "sm",
                                      onClick: ($event) => deleteDepot(depot)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Supprimer ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$k), null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "font-medium" }, toDisplayString(depot.name), 1),
                                createVNode("div", { class: "text-sm text-gray-500" }, toDisplayString(depot.description), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$k), null, {
                              default: withCtx(() => [
                                createVNode("div", null, toDisplayString(depot.address), 1),
                                createVNode("div", null, toDisplayString(depot.postal_code) + " " + toDisplayString(depot.city), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$k), null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(unref(_sfc_main$2), {
                                    open: editDialogOpen.value,
                                    "onUpdate:open": ($event) => editDialogOpen.value = $event
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$3), { asChild: "" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$4), {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: withModifiers(() => {
                                              editDialogOpen.value = true;
                                              initEditForm(depot);
                                            }, ["stop"])
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Modifier ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(unref(_sfc_main$5), null, {
                                        default: withCtx(() => [
                                          createVNode("form", {
                                            onSubmit: withModifiers(($event) => editDepot(depot), ["prevent"])
                                          }, [
                                            createVNode(unref(_sfc_main$6), null, {
                                              default: withCtx(() => [
                                                createVNode(unref(_sfc_main$7), null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Modifier le dépôt")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("div", { class: "grid gap-4 py-4" }, [
                                              createVNode("div", { class: "grid gap-2" }, [
                                                createVNode(unref(_sfc_main$9), { for: "edit-name" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Nom du dépôt")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(unref(_sfc_main$a), {
                                                  id: "edit-name",
                                                  modelValue: unref(form).name,
                                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                                  required: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_sfc_main$b, {
                                                  message: unref(form).errors.name
                                                }, null, 8, ["message"])
                                              ]),
                                              createVNode("div", { class: "grid gap-2" }, [
                                                createVNode(unref(_sfc_main$9), { for: "edit-description" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Description")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(unref(_sfc_main$c), {
                                                  id: "edit-description",
                                                  modelValue: unref(form).description,
                                                  "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                                  rows: "3"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_sfc_main$b, {
                                                  message: unref(form).errors.description
                                                }, null, 8, ["message"])
                                              ]),
                                              createVNode("div", { class: "grid gap-2" }, [
                                                createVNode(unref(_sfc_main$9), { for: "edit-address" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Adresse")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_sfc_main$d, {
                                                  id: "edit-location",
                                                  modelValue: location.value,
                                                  "onUpdate:modelValue": ($event) => location.value = $event,
                                                  placeholder: "Rechercher une adresse",
                                                  required: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_sfc_main$b, {
                                                  message: unref(form).errors.address
                                                }, null, 8, ["message"])
                                              ])
                                            ]),
                                            createVNode(unref(_sfc_main$e), null, {
                                              default: withCtx(() => [
                                                createVNode(unref(_sfc_main$4), {
                                                  type: "submit",
                                                  disabled: unref(form).processing
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Sauvegarder ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["disabled"])
                                              ]),
                                              _: 1
                                            })
                                          ], 40, ["onSubmit"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["open", "onUpdate:open"]),
                                  createVNode(unref(_sfc_main$4), {
                                    variant: "destructive",
                                    size: "sm",
                                    onClick: ($event) => deleteDepot(depot)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Supprimer ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.depots, (depot) => {
                      return openBlock(), createBlock(unref(_sfc_main$h), {
                        key: depot.id
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$k), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "font-medium" }, toDisplayString(depot.name), 1),
                              createVNode("div", { class: "text-sm text-gray-500" }, toDisplayString(depot.description), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$k), null, {
                            default: withCtx(() => [
                              createVNode("div", null, toDisplayString(depot.address), 1),
                              createVNode("div", null, toDisplayString(depot.postal_code) + " " + toDisplayString(depot.city), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$k), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode(unref(_sfc_main$2), {
                                  open: editDialogOpen.value,
                                  "onUpdate:open": ($event) => editDialogOpen.value = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$3), { asChild: "" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$4), {
                                          variant: "outline",
                                          size: "sm",
                                          onClick: withModifiers(() => {
                                            editDialogOpen.value = true;
                                            initEditForm(depot);
                                          }, ["stop"])
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Modifier ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(unref(_sfc_main$5), null, {
                                      default: withCtx(() => [
                                        createVNode("form", {
                                          onSubmit: withModifiers(($event) => editDepot(depot), ["prevent"])
                                        }, [
                                          createVNode(unref(_sfc_main$6), null, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$7), null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Modifier le dépôt")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", { class: "grid gap-4 py-4" }, [
                                            createVNode("div", { class: "grid gap-2" }, [
                                              createVNode(unref(_sfc_main$9), { for: "edit-name" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Nom du dépôt")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(_sfc_main$a), {
                                                id: "edit-name",
                                                modelValue: unref(form).name,
                                                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                                required: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_sfc_main$b, {
                                                message: unref(form).errors.name
                                              }, null, 8, ["message"])
                                            ]),
                                            createVNode("div", { class: "grid gap-2" }, [
                                              createVNode(unref(_sfc_main$9), { for: "edit-description" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Description")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(_sfc_main$c), {
                                                id: "edit-description",
                                                modelValue: unref(form).description,
                                                "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                                rows: "3"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_sfc_main$b, {
                                                message: unref(form).errors.description
                                              }, null, 8, ["message"])
                                            ]),
                                            createVNode("div", { class: "grid gap-2" }, [
                                              createVNode(unref(_sfc_main$9), { for: "edit-address" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Adresse")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_sfc_main$d, {
                                                id: "edit-location",
                                                modelValue: location.value,
                                                "onUpdate:modelValue": ($event) => location.value = $event,
                                                placeholder: "Rechercher une adresse",
                                                required: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_sfc_main$b, {
                                                message: unref(form).errors.address
                                              }, null, 8, ["message"])
                                            ])
                                          ]),
                                          createVNode(unref(_sfc_main$e), null, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$4), {
                                                type: "submit",
                                                disabled: unref(form).processing
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Sauvegarder ")
                                                ]),
                                                _: 1
                                              }, 8, ["disabled"])
                                            ]),
                                            _: 1
                                          })
                                        ], 40, ["onSubmit"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["open", "onUpdate:open"]),
                                createVNode(unref(_sfc_main$4), {
                                  variant: "destructive",
                                  size: "sm",
                                  onClick: ($event) => deleteDepot(depot)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Supprimer ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$g), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$h), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$i), null, {
                        default: withCtx(() => [
                          createTextVNode("Nom")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$i), null, {
                        default: withCtx(() => [
                          createTextVNode("Adresse")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$i), { class: "w-[100px]" }, {
                        default: withCtx(() => [
                          createTextVNode("Actions")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$j), null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.depots, (depot) => {
                    return openBlock(), createBlock(unref(_sfc_main$h), {
                      key: depot.id
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$k), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "font-medium" }, toDisplayString(depot.name), 1),
                            createVNode("div", { class: "text-sm text-gray-500" }, toDisplayString(depot.description), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(_sfc_main$k), null, {
                          default: withCtx(() => [
                            createVNode("div", null, toDisplayString(depot.address), 1),
                            createVNode("div", null, toDisplayString(depot.postal_code) + " " + toDisplayString(depot.city), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(_sfc_main$k), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode(unref(_sfc_main$2), {
                                open: editDialogOpen.value,
                                "onUpdate:open": ($event) => editDialogOpen.value = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$3), { asChild: "" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$4), {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: withModifiers(() => {
                                          editDialogOpen.value = true;
                                          initEditForm(depot);
                                        }, ["stop"])
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Modifier ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$5), null, {
                                    default: withCtx(() => [
                                      createVNode("form", {
                                        onSubmit: withModifiers(($event) => editDepot(depot), ["prevent"])
                                      }, [
                                        createVNode(unref(_sfc_main$6), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$7), null, {
                                              default: withCtx(() => [
                                                createTextVNode("Modifier le dépôt")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "grid gap-4 py-4" }, [
                                          createVNode("div", { class: "grid gap-2" }, [
                                            createVNode(unref(_sfc_main$9), { for: "edit-name" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Nom du dépôt")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$a), {
                                              id: "edit-name",
                                              modelValue: unref(form).name,
                                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_sfc_main$b, {
                                              message: unref(form).errors.name
                                            }, null, 8, ["message"])
                                          ]),
                                          createVNode("div", { class: "grid gap-2" }, [
                                            createVNode(unref(_sfc_main$9), { for: "edit-description" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Description")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$c), {
                                              id: "edit-description",
                                              modelValue: unref(form).description,
                                              "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                              rows: "3"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_sfc_main$b, {
                                              message: unref(form).errors.description
                                            }, null, 8, ["message"])
                                          ]),
                                          createVNode("div", { class: "grid gap-2" }, [
                                            createVNode(unref(_sfc_main$9), { for: "edit-address" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Adresse")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_sfc_main$d, {
                                              id: "edit-location",
                                              modelValue: location.value,
                                              "onUpdate:modelValue": ($event) => location.value = $event,
                                              placeholder: "Rechercher une adresse",
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_sfc_main$b, {
                                              message: unref(form).errors.address
                                            }, null, 8, ["message"])
                                          ])
                                        ]),
                                        createVNode(unref(_sfc_main$e), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$4), {
                                              type: "submit",
                                              disabled: unref(form).processing
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Sauvegarder ")
                                              ]),
                                              _: 1
                                            }, 8, ["disabled"])
                                          ]),
                                          _: 1
                                        })
                                      ], 40, ["onSubmit"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["open", "onUpdate:open"]),
                              createVNode(unref(_sfc_main$4), {
                                variant: "destructive",
                                size: "sm",
                                onClick: ($event) => deleteDepot(depot)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Supprimer ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Settings/Partials/DepotsManagement.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
