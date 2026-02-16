import { ref, computed, mergeProps, withCtx, unref, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, toDisplayString, Fragment, renderList, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AppLayout-B3jJCr1A.js";
import { _ as _sfc_main$4 } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$6 } from "./Textarea-DxMXW1ER.js";
import { _ as _sfc_main$7, a as _sfc_main$8, b as _sfc_main$9, c as _sfc_main$a, d as _sfc_main$b } from "./SelectValue-BSiknP0M.js";
import { _ as _sfc_main$5, a as _sfc_main$c } from "./CategorySelect-BOFqdaRy.js";
import { _ as _sfc_main$2 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$3 } from "./Label-DLRZNtyA.js";
import { AlertCircle, CheckCircle, ClipboardList, Settings, Image, Euro, CalendarPlus, ExternalLink, ArrowUpRight, Sparkles, XCircle, Plus, X, Upload, Trash2, ArrowLeft } from "lucide-vue-next";
import { S as Spinner } from "./spinner-C4dsHuCt.js";
import "./FlashMessage-DoovtZWd.js";
import "./UserDropdown-C5kfPJJO.js";
import "reka-ui";
import "@vueuse/core";
import "@heroicons/vue/24/outline";
import "./index-9VOASAGY.js";
import "class-variance-authority";
import "vue-sonner";
import "axios";
import "clsx";
import "tailwind-merge";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    organization: {
      type: Object,
      required: true
    },
    equipment: {
      type: Object,
      required: true
    },
    depots: {
      type: Array,
      required: true
    },
    organizations: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    var _a, _b, _c;
    const props = __props;
    const form = useForm({
      _method: "PUT",
      name: props.equipment.name,
      brand: props.equipment.brand,
      description: props.equipment.description,
      category_id: props.equipment.category_id,
      organization_id: props.equipment.organization_id,
      condition: props.equipment.condition,
      quantity: props.equipment.quantity ?? 1,
      depot_id: props.equipment.depot_id,
      purchase_price: ((_a = props.equipment.purchase_price) == null ? void 0 : _a.toString().replace(".", ",")) || "0,00",
      rental_price: ((_b = props.equipment.rental_price) == null ? void 0 : _b.toString().replace(".", ",")) || "0,00",
      deposit_amount: ((_c = props.equipment.deposit_amount) == null ? void 0 : _c.toString().replace(".", ",")) || "0,00",
      is_available: props.equipment.is_available,
      requires_deposit: props.equipment.requires_deposit,
      is_rentable: props.equipment.is_rentable,
      last_maintenance_date: props.equipment.last_maintenance_date,
      next_maintenance_date: props.equipment.next_maintenance_date,
      images: [],
      removed_images: []
    });
    const imagePreviewUrls = ref([]);
    const showDeleteDialog = ref(false);
    const displayedExistingImages = computed(() => {
      var _a2;
      return ((_a2 = props.equipment.images) == null ? void 0 : _a2.filter((image) => !form.removed_images.includes(image.id))) || [];
    });
    const isUploadDisabled = computed(() => {
      const totalImages = displayedExistingImages.value.length + form.images.length;
      return totalImages >= 10;
    });
    const deleteForm = useForm({
      _method: "DELETE"
    });
    const selectedOrganization = computed(() => {
      return props.organizations.find((org) => org.id === form.organization_id) || props.organization;
    });
    const availableDepots = computed(() => {
      return props.depots.filter((depot) => depot.organization_id === form.organization_id);
    });
    const handleOrganizationChange = () => {
      form.depot_id = null;
    };
    const handleImageUpload = (e) => {
      const files = Array.from(e.target.files || []);
      const remainingSlots = 10 - (displayedExistingImages.value.length + form.images.length);
      const filesToProcess = files.slice(0, remainingSlots);
      filesToProcess.forEach((file) => {
        const url = URL.createObjectURL(file);
        imagePreviewUrls.value.push(url);
        form.images.push(file);
      });
      e.target.value = null;
    };
    const removeNewImage = (index) => {
      URL.revokeObjectURL(imagePreviewUrls.value[index]);
      imagePreviewUrls.value.splice(index, 1);
      form.images.splice(index, 1);
    };
    const removeExistingImage = (imageId) => {
      form.removed_images.push(imageId);
    };
    const handlePriceInput = (e, field) => {
      let value = e.target.value;
      value = value.replace(",", ".");
      value = value.replace(/[^\d.]/g, "");
      const parts = value.split(".");
      if (parts.length > 2) {
        value = parts[0] + "." + parts.slice(1).join("");
      }
      const displayValue = value ? value.replace(".", ",") : "0,00";
      form[field] = value || "0.00";
      e.target.value = displayValue;
    };
    const submit = () => {
      form.post(route("app.organizations.equipments.update", props.equipment.id), {
        preserveScroll: true,
        forceFormData: true
      });
    };
    const deleteEquipment = () => {
      deleteForm.delete(route("app.organizations.equipments.destroy", props.equipment), {
        onSuccess: () => {
          showDeleteDialog.value = false;
        },
        onError: (errors) => {
          console.error("Erreur lors de la suppression:", errors);
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Modifier " + __props.equipment.name
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center"${_scopeId}><div${_scopeId}><h2 class="font-semibold text-xl leading-tight"${_scopeId}>${ssrInterpolate(__props.equipment.name)}</h2></div><div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("app.organizations.equipments.index", __props.organization),
              class: "inline-flex items-center bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ArrowLeft), { class: "w-4 h-4 mr-2" }, null, _parent3, _scopeId2));
                  _push3(` Retour à la liste `);
                } else {
                  return [
                    createVNode(unref(ArrowLeft), { class: "w-4 h-4 mr-2" }),
                    createTextVNode(" Retour à la liste ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center" }, [
                createVNode("div", null, [
                  createVNode("h2", { class: "font-semibold text-xl leading-tight" }, toDisplayString(__props.equipment.name), 1)
                ]),
                createVNode("div", { class: "flex items-center gap-3" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("app.organizations.equipments.index", __props.organization),
                    class: "inline-flex items-center bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 transition-colors"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ArrowLeft), { class: "w-4 h-4 mr-2" }),
                      createTextVNode(" Retour à la liste ")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d;
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}>`);
            if ((_a2 = _ctx.$page.props.flash) == null ? void 0 : _a2.error) {
              _push2(`<div class="mb-6"${_scopeId}><div class="bg-destructive/15 border border-destructive/20 text-destructive px-4 py-3 rounded-lg flex items-center gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(AlertCircle), { class: "w-5 h-5 flex-shrink-0" }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}><p class="font-medium"${_scopeId}>Impossible de supprimer l&#39;équipement</p><p class="text-sm mt-1"${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.error)}</p></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if ((_b2 = _ctx.$page.props.flash) == null ? void 0 : _b2.success) {
              _push2(`<div class="mb-6"${_scopeId}><div class="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 flex-shrink-0" }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}><p class="font-medium"${_scopeId}>Succès</p><p class="text-sm mt-1"${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.success)}</p></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="hidden lg:block sticky top-4 z-30 float-right w-60 ml-8 bg-card rounded-lg border shadow-sm"${_scopeId}><nav class="p-4"${_scopeId}><p class="text-sm font-medium mb-3"${_scopeId}>Navigation rapide</p><ul class="space-y-2 text-sm"${_scopeId}><li${_scopeId}><a href="#general" class="flex items-center text-muted-foreground hover:text-foreground"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ClipboardList), { class: "w-4 h-4 mr-2" }, null, _parent2, _scopeId));
            _push2(` Informations </a></li><li${_scopeId}><a href="#storage" class="flex items-center text-muted-foreground hover:text-foreground"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Settings), { class: "w-4 h-4 mr-2" }, null, _parent2, _scopeId));
            _push2(` État et stockage </a></li><li${_scopeId}><a href="#images" class="flex items-center text-muted-foreground hover:text-foreground"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Image), { class: "w-4 h-4 mr-2" }, null, _parent2, _scopeId));
            _push2(` Photos </a></li><li${_scopeId}><a href="#pricing" class="flex items-center text-muted-foreground hover:text-foreground"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Euro), { class: "w-4 h-4 mr-2" }, null, _parent2, _scopeId));
            _push2(` Tarification </a></li><li${_scopeId}><a href="#reservations" class="flex items-center text-muted-foreground hover:text-foreground"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CalendarPlus), { class: "w-4 h-4 mr-2" }, null, _parent2, _scopeId));
            _push2(` Réservations </a></li></ul><div class="mt-6 pt-6 border-t"${_scopeId}><p class="text-sm font-medium mb-3"${_scopeId}>Actions</p><ul class="space-y-4 text-sm"${_scopeId}><li${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("equipments.show", __props.equipment.id),
              class: "flex items-center text-muted-foreground hover:text-foreground group",
              target: "_blank"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ExternalLink), { class: "w-4 h-4 mr-2" }, null, _parent3, _scopeId2));
                  _push3(` Voir la fiche publique `);
                  _push3(ssrRenderComponent(unref(ArrowUpRight), { class: "w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ExternalLink), { class: "w-4 h-4 mr-2" }),
                    createTextVNode(" Voir la fiche publique "),
                    createVNode(unref(ArrowUpRight), { class: "w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("app.organizations.reservations.out.create", { equipment: __props.equipment.id }),
              class: "flex items-center text-muted-foreground hover:text-foreground group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CalendarPlus), { class: "w-4 h-4 mr-2" }, null, _parent3, _scopeId2));
                  _push3(` Créer une réservation `);
                } else {
                  return [
                    createVNode(unref(CalendarPlus), { class: "w-4 h-4 mr-2" }),
                    createTextVNode(" Créer une réservation ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              type: "submit",
              form: "equipment-form",
              disabled: unref(form).processing,
              class: [{ "opacity-25": unref(form).processing }, "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(form).processing) {
                    _push3(ssrRenderComponent(Spinner, {
                      class: "w-4 h-4 mr-2",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(` ${ssrInterpolate(unref(form).processing ? "Modification en cours..." : "Mettre à jour")}`);
                } else {
                  return [
                    unref(form).processing ? (openBlock(), createBlock(Spinner, {
                      key: 0,
                      class: "w-4 h-4 mr-2",
                      "aria-hidden": "true"
                    })) : createCommentVNode("", true),
                    createTextVNode(" " + toDisplayString(unref(form).processing ? "Modification en cours..." : "Mettre à jour"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li></ul></div></nav></div><div class="bg-card text-card-foreground rounded-lg border shadow-sm overflow-hidden"${_scopeId}><form class="divide-y" id="equipment-form"${_scopeId}><p class="p-6 text-sm text-muted-foreground/75"${_scopeId}>Les champs marqués d&#39;un <span class="text-destructive"${_scopeId}>*</span> sont obligatoires</p><section id="general" class="p-6 space-y-8"${_scopeId}><div class="flex items-center gap-4 pb-4 border-b"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ClipboardList), { class: "w-5 h-5 text-muted-foreground" }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-lg font-medium"${_scopeId}>Informations générales</h3></div><div class="grid gap-8 sm:grid-cols-2"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              required: "",
              class: "text-base flex items-center gap-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Nom <span class="text-destructive" aria-hidden="true"${_scopeId2}>*</span>`);
                } else {
                  return [
                    createTextVNode(" Nom "),
                    createVNode("span", {
                      class: "text-destructive",
                      "aria-hidden": "true"
                    }, "*")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              type: "text",
              required: "",
              autofocus: "",
              placeholder: "Ex: Perceuse Bosch Professional",
              class: "mt-2"
            }, null, _parent2, _scopeId));
            if (unref(form).errors.name) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              required: "",
              class: "text-base flex items-center gap-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Marque `);
                } else {
                  return [
                    createTextVNode(" Marque ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              modelValue: unref(form).brand,
              "onUpdate:modelValue": ($event) => unref(form).brand = $event,
              type: "text",
              placeholder: "Ex: Bosch",
              class: "mt-2"
            }, null, _parent2, _scopeId));
            if (unref(form).errors.brand) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.brand)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="grid gap-8 sm:grid-cols-2"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              required: "",
              class: "text-base flex items-center gap-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Catégorie <span class="text-destructive" aria-hidden="true"${_scopeId2}>*</span>`);
                } else {
                  return [
                    createTextVNode(" Catégorie "),
                    createVNode("span", {
                      class: "text-destructive",
                      "aria-hidden": "true"
                    }, "*")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              modelValue: unref(form).category_id,
              "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
              required: ""
            }, null, _parent2, _scopeId));
            if (unref(form).errors.category_id) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.category_id)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "text-base" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Description`);
                } else {
                  return [
                    createTextVNode("Description")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$6), {
              modelValue: unref(form).description,
              "onUpdate:modelValue": ($event) => unref(form).description = $event,
              rows: "3",
              placeholder: "Décrivez les caractéristiques principales du matériel...",
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`<p class="mt-1.5 text-xs text-muted-foreground/75"${_scopeId}>Une description détaillée aidera les utilisateurs à mieux comprendre le matériel</p>`);
            if (unref(form).errors.description) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></section><section id="storage" class="p-6 space-y-8"${_scopeId}><div class="flex items-center gap-4 pb-4 border-b"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Settings), { class: "w-5 h-5 text-muted-foreground" }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-lg font-medium"${_scopeId}>État et stockage</h3></div><div class="grid gap-8"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              required: "",
              class: "text-base flex items-center gap-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` État <span class="text-destructive" aria-hidden="true"${_scopeId2}>*</span>`);
                } else {
                  return [
                    createTextVNode(" État "),
                    createVNode("span", {
                      class: "text-destructive",
                      "aria-hidden": "true"
                    }, "*")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$7), {
              modelValue: unref(form).condition,
              "onUpdate:modelValue": ($event) => unref(form).condition = $event,
              class: "mt-2",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$8), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$9), { placeholder: "Sélectionnez l'état" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$9), { placeholder: "Sélectionnez l'état" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$a), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$b), { value: "new" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(Sparkles), { class: "w-4 h-4 mr-2 text-green-500" }, null, _parent5, _scopeId4));
                              _push5(`<span${_scopeId4}>Neuf</span></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(unref(Sparkles), { class: "w-4 h-4 mr-2 text-green-500" }),
                                  createVNode("span", null, "Neuf")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$b), { value: "good" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(CheckCircle), { class: "w-4 h-4 mr-2 text-blue-500" }, null, _parent5, _scopeId4));
                              _push5(`<span${_scopeId4}>Bon</span></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(unref(CheckCircle), { class: "w-4 h-4 mr-2 text-blue-500" }),
                                  createVNode("span", null, "Bon")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$b), { value: "fair" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(AlertCircle), { class: "w-4 h-4 mr-2 text-yellow-500" }, null, _parent5, _scopeId4));
                              _push5(`<span${_scopeId4}>Moyen</span></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(unref(AlertCircle), { class: "w-4 h-4 mr-2 text-yellow-500" }),
                                  createVNode("span", null, "Moyen")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$b), { value: "poor" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(XCircle), { class: "w-4 h-4 mr-2 text-red-500" }, null, _parent5, _scopeId4));
                              _push5(`<span${_scopeId4}>Mauvais</span></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(unref(XCircle), { class: "w-4 h-4 mr-2 text-red-500" }),
                                  createVNode("span", null, "Mauvais")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$b), { value: "new" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(unref(Sparkles), { class: "w-4 h-4 mr-2 text-green-500" }),
                                createVNode("span", null, "Neuf")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$b), { value: "good" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(unref(CheckCircle), { class: "w-4 h-4 mr-2 text-blue-500" }),
                                createVNode("span", null, "Bon")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$b), { value: "fair" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(unref(AlertCircle), { class: "w-4 h-4 mr-2 text-yellow-500" }),
                                createVNode("span", null, "Moyen")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$b), { value: "poor" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(unref(XCircle), { class: "w-4 h-4 mr-2 text-red-500" }),
                                createVNode("span", null, "Mauvais")
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
                    createVNode(unref(_sfc_main$8), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$9), { placeholder: "Sélectionnez l'état" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$a), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$b), { value: "new" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(unref(Sparkles), { class: "w-4 h-4 mr-2 text-green-500" }),
                              createVNode("span", null, "Neuf")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$b), { value: "good" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(unref(CheckCircle), { class: "w-4 h-4 mr-2 text-blue-500" }),
                              createVNode("span", null, "Bon")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$b), { value: "fair" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(unref(AlertCircle), { class: "w-4 h-4 mr-2 text-yellow-500" }),
                              createVNode("span", null, "Moyen")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$b), { value: "poor" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(unref(XCircle), { class: "w-4 h-4 mr-2 text-red-500" }),
                              createVNode("span", null, "Mauvais")
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
            if (unref(form).errors.condition) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.condition)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              required: "",
              class: "text-base flex items-center gap-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Quantité disponible <span class="text-destructive" aria-hidden="true"${_scopeId2}>*</span>`);
                } else {
                  return [
                    createTextVNode(" Quantité disponible "),
                    createVNode("span", {
                      class: "text-destructive",
                      "aria-hidden": "true"
                    }, "*")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              modelValue: unref(form).quantity,
              "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
              type: "number",
              min: "1",
              required: "",
              placeholder: "Ex: 1",
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`<p class="mt-1.5 text-xs text-muted-foreground/75"${_scopeId}>Nombre d&#39;unités disponibles de ce matériel</p>`);
            if (unref(form).errors.quantity) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.quantity)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid gap-8 sm:grid-cols-2"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              required: "",
              class: "text-base flex items-center gap-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Organisation propriétaire <span class="text-destructive" aria-hidden="true"${_scopeId2}>*</span>`);
                } else {
                  return [
                    createTextVNode(" Organisation propriétaire "),
                    createVNode("span", {
                      class: "text-destructive",
                      "aria-hidden": "true"
                    }, "*")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$7), {
              modelValue: unref(form).organization_id,
              "onUpdate:modelValue": [($event) => unref(form).organization_id = $event, handleOrganizationChange],
              required: "",
              class: "mt-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$8), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$9), { placeholder: "Sélectionnez une organisation" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$9), { placeholder: "Sélectionnez une organisation" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$a), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(__props.organizations, (org) => {
                          _push4(ssrRenderComponent(unref(_sfc_main$b), {
                            key: org.id,
                            value: org.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(org.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(org.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.organizations, (org) => {
                            return openBlock(), createBlock(unref(_sfc_main$b), {
                              key: org.id,
                              value: org.id
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(org.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$8), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$9), { placeholder: "Sélectionnez une organisation" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$a), null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.organizations, (org) => {
                          return openBlock(), createBlock(unref(_sfc_main$b), {
                            key: org.id,
                            value: org.id
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(org.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(form).errors.organization_id) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.organization_id)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              required: "",
              class: "text-base flex items-center gap-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Lieu de stockage <span class="text-destructive" aria-hidden="true"${_scopeId2}>*</span>`);
                } else {
                  return [
                    createTextVNode(" Lieu de stockage "),
                    createVNode("span", {
                      class: "text-destructive",
                      "aria-hidden": "true"
                    }, "*")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$7), {
              modelValue: unref(form).depot_id,
              "onUpdate:modelValue": ($event) => unref(form).depot_id = $event,
              required: "",
              class: "mt-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$8), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$9), { placeholder: "Sélectionnez un lieu de stockage" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$9), { placeholder: "Sélectionnez un lieu de stockage" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$a), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(availableDepots.value, (depot) => {
                          _push4(ssrRenderComponent(unref(_sfc_main$b), {
                            key: depot.id,
                            value: depot.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(depot.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(depot.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(availableDepots.value, (depot) => {
                            return openBlock(), createBlock(unref(_sfc_main$b), {
                              key: depot.id,
                              value: depot.id
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(depot.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$8), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$9), { placeholder: "Sélectionnez un lieu de stockage" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$a), null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(availableDepots.value, (depot) => {
                          return openBlock(), createBlock(unref(_sfc_main$b), {
                            key: depot.id,
                            value: depot.id
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(depot.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("app.organizations.depots.index", selectedOrganization.value),
              class: "inline-flex items-center text-xs text-primary/80 hover:text-primary mt-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Plus), { class: "w-3 h-3 mr-1" }, null, _parent3, _scopeId2));
                  _push3(` Ajouter un lieu de stockage `);
                } else {
                  return [
                    createVNode(unref(Plus), { class: "w-3 h-3 mr-1" }),
                    createTextVNode(" Ajouter un lieu de stockage ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(form).errors.depot_id) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.depot_id)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></section><section id="images" class="p-6 space-y-8"${_scopeId}><div class="flex items-center gap-4 pb-4 border-b"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Image), { class: "w-5 h-5 text-muted-foreground" }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-lg font-medium"${_scopeId}>Photos</h3></div><div class="space-y-6"${_scopeId}><div class="flex items-start p-4 text-sm bg-muted/20 rounded-lg border border-muted"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Image), { class: "w-5 h-5 mr-3 flex-shrink-0 text-muted-foreground/75" }, null, _parent2, _scopeId));
            _push2(`<div class="space-y-1"${_scopeId}><p class="text-muted-foreground/75"${_scopeId}> Ajoutez jusqu&#39;à 3 photos de votre matériel. </p><ul class="text-xs text-muted-foreground/75 list-disc list-inside"${_scopeId}><li${_scopeId}>Formats acceptés : JPG, JPEG, PNG</li><li${_scopeId}>Taille maximale par image : 10 MB</li></ul></div></div>`);
            if (displayedExistingImages.value.length) {
              _push2(`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(displayedExistingImages.value, (image) => {
                _push2(`<div class="relative group aspect-square"${_scopeId}><img${ssrRenderAttr("src", image.url)}${ssrRenderAttr("alt", image.original_name)} class="w-full h-full object-cover rounded-lg"${_scopeId}><button type="button" class="absolute top-2 right-2 p-1 bg-destructive/90 hover:bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent2, _scopeId));
                _push2(`</button></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (imagePreviewUrls.value.length) {
              _push2(`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(imagePreviewUrls.value, (url, index) => {
                _push2(`<div class="relative group aspect-square"${_scopeId}><img${ssrRenderAttr("src", url)} class="w-full h-full object-cover rounded-lg"${_scopeId}><button type="button" class="absolute top-2 right-2 p-1 bg-destructive/90 hover:bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent2, _scopeId));
                _push2(`</button></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center justify-center w-full"${_scopeId}><label class="${ssrRenderClass([{ "opacity-50 cursor-not-allowed": isUploadDisabled.value }, "flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/20 border-muted hover:bg-muted/30 transition-colors"])}"${_scopeId}><div class="flex flex-col items-center justify-center pt-5 pb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Upload), { class: "w-8 h-8 mb-3 text-muted-foreground" }, null, _parent2, _scopeId));
            _push2(`<p class="mb-2 text-sm text-muted-foreground"${_scopeId}><span class="font-medium"${_scopeId}>Cliquez pour ajouter</span> vos photos ici </p></div><input type="file" class="hidden" accept="image/png,image/jpeg,image/jpg" multiple${ssrIncludeBooleanAttr(isUploadDisabled.value) ? " disabled" : ""}${_scopeId}></label></div></div></section><section id="pricing" class="p-6 space-y-8"${_scopeId}><div class="flex items-center gap-4 pb-4 border-b"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Euro), { class: "w-5 h-5 text-muted-foreground" }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-lg font-medium"${_scopeId}>Tarification</h3></div><div class="space-y-6"${_scopeId}><div class="grid gap-8 sm:grid-cols-3"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "text-base" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Prix d&#39;achat`);
                } else {
                  return [
                    createTextVNode("Prix d'achat")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="relative mt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              modelValue: unref(form).purchase_price,
              "onUpdate:modelValue": ($event) => unref(form).purchase_price = $event,
              type: "text",
              inputmode: "decimal",
              class: "pl-7",
              onInput: (e) => handlePriceInput(e, "purchase_price")
            }, null, _parent2, _scopeId));
            _push2(`<span class="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"${_scopeId}>€</span></div>`);
            if (unref(form).errors.purchase_price) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.purchase_price)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "text-base" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Prix de location`);
                } else {
                  return [
                    createTextVNode("Prix de location")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="relative mt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              modelValue: unref(form).rental_price,
              "onUpdate:modelValue": ($event) => unref(form).rental_price = $event,
              type: "text",
              inputmode: "decimal",
              class: "pl-7",
              onInput: (e) => handlePriceInput(e, "rental_price")
            }, null, _parent2, _scopeId));
            _push2(`<span class="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"${_scopeId}>€</span></div><p class="mt-1.5 text-xs text-muted-foreground/75"${_scopeId}>Prix par jour</p>`);
            if (unref(form).errors.rental_price) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.rental_price)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "text-base" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Montant de la caution`);
                } else {
                  return [
                    createTextVNode("Montant de la caution")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="relative mt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              modelValue: unref(form).deposit_amount,
              "onUpdate:modelValue": ($event) => unref(form).deposit_amount = $event,
              type: "text",
              inputmode: "decimal",
              class: "pl-7",
              disabled: !unref(form).requires_deposit,
              onInput: (e) => handlePriceInput(e, "deposit_amount")
            }, null, _parent2, _scopeId));
            _push2(`<span class="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"${_scopeId}>€</span></div><p class="mt-1.5 text-xs text-muted-foreground/75"${_scopeId}>0 = pas de caution</p>`);
            if (unref(form).errors.deposit_amount) {
              _push2(`<p class="mt-2 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(form).errors.deposit_amount)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="grid gap-4 pt-4"${_scopeId}><label class="flex items-center p-4 bg-muted/20 rounded-lg border border-muted cursor-pointer hover:bg-muted/30 transition-colors"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$c), {
              modelValue: unref(form).is_available,
              "onUpdate:modelValue": ($event) => unref(form).is_available = $event,
              class: "data-[state=checked]:bg-primary"
            }, null, _parent2, _scopeId));
            _push2(`<div class="ml-3"${_scopeId}><span class="text-sm font-medium"${_scopeId}>Disponible immédiatement</span><p class="text-xs text-muted-foreground/75 mt-0.5"${_scopeId}>Le matériel peut être réservé dès maintenant</p></div></label><label class="flex items-center p-4 bg-muted/20 rounded-lg border border-muted cursor-pointer hover:bg-muted/30 transition-colors"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$c), {
              modelValue: unref(form).requires_deposit,
              "onUpdate:modelValue": ($event) => unref(form).requires_deposit = $event,
              class: "data-[state=checked]:bg-primary"
            }, null, _parent2, _scopeId));
            _push2(`<div class="ml-3"${_scopeId}><span class="text-sm font-medium"${_scopeId}>Caution requise</span><p class="text-xs text-muted-foreground/75 mt-0.5"${_scopeId}>Une caution sera demandée pour la location</p></div></label><label class="flex items-center p-4 bg-muted/20 rounded-lg border border-muted cursor-pointer hover:bg-muted/30 transition-colors"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$c), {
              modelValue: unref(form).is_rentable,
              "onUpdate:modelValue": ($event) => unref(form).is_rentable = $event,
              class: "data-[state=checked]:bg-primary"
            }, null, _parent2, _scopeId));
            _push2(`<div class="ml-3"${_scopeId}><span class="text-sm font-medium"${_scopeId}>Disponible à la location</span><p class="text-xs text-muted-foreground/75 mt-0.5"${_scopeId}>Le matériel peut être loué par d&#39;autres utilisateurs</p></div></label></div></div></section><section id="reservations" class="p-6 space-y-8"${_scopeId}><div class="flex items-center gap-4 pb-4 border-b"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CalendarPlus), { class: "w-5 h-5 text-muted-foreground" }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-lg font-medium"${_scopeId}>Réservations</h3></div><div class="bg-muted/50 rounded-lg p-4"${_scopeId}><p class="text-sm text-muted-foreground mb-3"${_scopeId}><strong${_scopeId}>Note :</strong> L&#39;équipement ne peut pas être supprimé s&#39;il a des réservations actives (en cours) ou des réservations confirmées à venir. </p><div class="grid gap-4 sm:grid-cols-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="w-2 h-2 bg-orange-500 rounded-full"${_scopeId}></div><span class="text-sm"${_scopeId}>Réservations en attente : Peuvent être annulées automatiquement</span></div><div class="flex items-center gap-2"${_scopeId}><div class="w-2 h-2 bg-red-500 rounded-full"${_scopeId}></div><span class="text-sm"${_scopeId}>Réservations confirmées : Empêchent la suppression</span></div></div></div></section><div class="flex items-center justify-between gap-x-6 p-6"${_scopeId}><div class="flex items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("app.organizations.equipments.index", __props.organization),
              class: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Annuler `);
                } else {
                  return [
                    createTextVNode(" Annuler ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              type: "button",
              variant: "destructive",
              size: "sm",
              onClick: ($event) => showDeleteDialog.value = true,
              class: "focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Trash2), { class: "w-4 h-4 mr-2" }, null, _parent3, _scopeId2));
                  _push3(` Supprimer `);
                } else {
                  return [
                    createVNode(unref(Trash2), { class: "w-4 h-4 mr-2" }),
                    createTextVNode(" Supprimer ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              type: "submit",
              disabled: unref(form).processing,
              class: [{ "opacity-25": unref(form).processing }, "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"],
              size: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(form).processing) {
                    _push3(ssrRenderComponent(Spinner, {
                      class: "w-4 h-4 mr-2",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(` ${ssrInterpolate(unref(form).processing ? "Modification en cours..." : "Enregistrer les modifications")}`);
                } else {
                  return [
                    unref(form).processing ? (openBlock(), createBlock(Spinner, {
                      key: 0,
                      class: "w-4 h-4 mr-2",
                      "aria-hidden": "true"
                    })) : createCommentVNode("", true),
                    createTextVNode(" " + toDisplayString(unref(form).processing ? "Modification en cours..." : "Enregistrer les modifications"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div>`);
            if (showDeleteDialog.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center"${_scopeId}><div class="fixed inset-0 bg-black/50"${_scopeId}></div><div class="relative bg-card text-card-foreground rounded-lg border shadow-lg max-w-md w-full mx-4"${_scopeId}><div class="p-6"${_scopeId}><div class="flex items-center gap-3 mb-4"${_scopeId}><div class="flex-shrink-0 w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Trash2), { class: "w-5 h-5 text-destructive" }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><h3 class="text-lg font-semibold"${_scopeId}>Supprimer l&#39;équipement</h3><p class="text-sm text-muted-foreground"${_scopeId}>Cette action est irréversible</p></div></div><p class="text-sm text-muted-foreground mb-4"${_scopeId}> Êtes-vous sûr de vouloir supprimer l&#39;équipement <strong${_scopeId}>${ssrInterpolate(__props.equipment.name)}</strong> ? Cette action supprimera définitivement l&#39;équipement et toutes ses données associées. </p><div class="bg-muted/50 rounded-lg p-3 mb-6"${_scopeId}><p class="text-xs text-muted-foreground mb-2 font-medium"${_scopeId}>Ce qui se passera :</p><ul class="text-xs text-muted-foreground space-y-1"${_scopeId}><li${_scopeId}>• L&#39;équipement sera supprimé définitivement</li><li${_scopeId}>• Toutes les photos seront supprimées</li><li${_scopeId}>• Les réservations en attente seront annulées automatiquement</li><li${_scopeId}>• Les réservations confirmées empêcheront la suppression</li></ul></div><div class="flex items-center justify-end gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$2), {
                type: "button",
                variant: "outline",
                onClick: ($event) => showDeleteDialog.value = false,
                disabled: unref(deleteForm).processing
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Annuler `);
                  } else {
                    return [
                      createTextVNode(" Annuler ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$2), {
                type: "button",
                variant: "destructive",
                onClick: deleteEquipment,
                disabled: unref(deleteForm).processing
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(deleteForm).processing) {
                      _push3(ssrRenderComponent(Spinner, { class: "w-4 h-4 mr-2" }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(` ${ssrInterpolate(unref(deleteForm).processing ? "Suppression..." : "Supprimer")}`);
                  } else {
                    return [
                      unref(deleteForm).processing ? (openBlock(), createBlock(Spinner, {
                        key: 0,
                        class: "w-4 h-4 mr-2"
                      })) : createCommentVNode("", true),
                      createTextVNode(" " + toDisplayString(unref(deleteForm).processing ? "Suppression..." : "Supprimer"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  ((_c2 = _ctx.$page.props.flash) == null ? void 0 : _c2.error) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mb-6"
                  }, [
                    createVNode("div", { class: "bg-destructive/15 border border-destructive/20 text-destructive px-4 py-3 rounded-lg flex items-center gap-3" }, [
                      createVNode(unref(AlertCircle), { class: "w-5 h-5 flex-shrink-0" }),
                      createVNode("div", null, [
                        createVNode("p", { class: "font-medium" }, "Impossible de supprimer l'équipement"),
                        createVNode("p", { class: "text-sm mt-1" }, toDisplayString(_ctx.$page.props.flash.error), 1)
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  ((_d = _ctx.$page.props.flash) == null ? void 0 : _d.success) ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "mb-6"
                  }, [
                    createVNode("div", { class: "bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-3" }, [
                      createVNode(unref(CheckCircle), { class: "w-5 h-5 flex-shrink-0" }),
                      createVNode("div", null, [
                        createVNode("p", { class: "font-medium" }, "Succès"),
                        createVNode("p", { class: "text-sm mt-1" }, toDisplayString(_ctx.$page.props.flash.success), 1)
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "hidden lg:block sticky top-4 z-30 float-right w-60 ml-8 bg-card rounded-lg border shadow-sm" }, [
                    createVNode("nav", { class: "p-4" }, [
                      createVNode("p", { class: "text-sm font-medium mb-3" }, "Navigation rapide"),
                      createVNode("ul", { class: "space-y-2 text-sm" }, [
                        createVNode("li", null, [
                          createVNode("a", {
                            href: "#general",
                            class: "flex items-center text-muted-foreground hover:text-foreground"
                          }, [
                            createVNode(unref(ClipboardList), { class: "w-4 h-4 mr-2" }),
                            createTextVNode(" Informations ")
                          ])
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            href: "#storage",
                            class: "flex items-center text-muted-foreground hover:text-foreground"
                          }, [
                            createVNode(unref(Settings), { class: "w-4 h-4 mr-2" }),
                            createTextVNode(" État et stockage ")
                          ])
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            href: "#images",
                            class: "flex items-center text-muted-foreground hover:text-foreground"
                          }, [
                            createVNode(unref(Image), { class: "w-4 h-4 mr-2" }),
                            createTextVNode(" Photos ")
                          ])
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            href: "#pricing",
                            class: "flex items-center text-muted-foreground hover:text-foreground"
                          }, [
                            createVNode(unref(Euro), { class: "w-4 h-4 mr-2" }),
                            createTextVNode(" Tarification ")
                          ])
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            href: "#reservations",
                            class: "flex items-center text-muted-foreground hover:text-foreground"
                          }, [
                            createVNode(unref(CalendarPlus), { class: "w-4 h-4 mr-2" }),
                            createTextVNode(" Réservations ")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mt-6 pt-6 border-t" }, [
                        createVNode("p", { class: "text-sm font-medium mb-3" }, "Actions"),
                        createVNode("ul", { class: "space-y-4 text-sm" }, [
                          createVNode("li", null, [
                            createVNode(unref(Link), {
                              href: _ctx.route("equipments.show", __props.equipment.id),
                              class: "flex items-center text-muted-foreground hover:text-foreground group",
                              target: "_blank"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ExternalLink), { class: "w-4 h-4 mr-2" }),
                                createTextVNode(" Voir la fiche publique "),
                                createVNode(unref(ArrowUpRight), { class: "w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" })
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ]),
                          createVNode("li", null, [
                            createVNode(unref(Link), {
                              href: _ctx.route("app.organizations.reservations.out.create", { equipment: __props.equipment.id }),
                              class: "flex items-center text-muted-foreground hover:text-foreground group"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(CalendarPlus), { class: "w-4 h-4 mr-2" }),
                                createTextVNode(" Créer une réservation ")
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ]),
                          createVNode("li", null, [
                            createVNode(unref(_sfc_main$2), {
                              type: "submit",
                              form: "equipment-form",
                              disabled: unref(form).processing,
                              class: [{ "opacity-25": unref(form).processing }, "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"]
                            }, {
                              default: withCtx(() => [
                                unref(form).processing ? (openBlock(), createBlock(Spinner, {
                                  key: 0,
                                  class: "w-4 h-4 mr-2",
                                  "aria-hidden": "true"
                                })) : createCommentVNode("", true),
                                createTextVNode(" " + toDisplayString(unref(form).processing ? "Modification en cours..." : "Mettre à jour"), 1)
                              ]),
                              _: 1
                            }, 8, ["disabled", "class"])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "bg-card text-card-foreground rounded-lg border shadow-sm overflow-hidden" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      class: "divide-y",
                      id: "equipment-form"
                    }, [
                      createVNode("p", { class: "p-6 text-sm text-muted-foreground/75" }, [
                        createTextVNode("Les champs marqués d'un "),
                        createVNode("span", { class: "text-destructive" }, "*"),
                        createTextVNode(" sont obligatoires")
                      ]),
                      createVNode("section", {
                        id: "general",
                        class: "p-6 space-y-8"
                      }, [
                        createVNode("div", { class: "flex items-center gap-4 pb-4 border-b" }, [
                          createVNode(unref(ClipboardList), { class: "w-5 h-5 text-muted-foreground" }),
                          createVNode("h3", { class: "text-lg font-medium" }, "Informations générales")
                        ]),
                        createVNode("div", { class: "grid gap-8 sm:grid-cols-2" }, [
                          createVNode("div", null, [
                            createVNode(unref(_sfc_main$3), {
                              required: "",
                              class: "text-base flex items-center gap-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Nom "),
                                createVNode("span", {
                                  class: "text-destructive",
                                  "aria-hidden": "true"
                                }, "*")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$4), {
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              type: "text",
                              required: "",
                              autofocus: "",
                              placeholder: "Ex: Perceuse Bosch Professional",
                              class: "mt-2"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            unref(form).errors.name ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-2 text-sm text-destructive"
                            }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode(unref(_sfc_main$3), {
                              required: "",
                              class: "text-base flex items-center gap-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Marque ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$4), {
                              modelValue: unref(form).brand,
                              "onUpdate:modelValue": ($event) => unref(form).brand = $event,
                              type: "text",
                              placeholder: "Ex: Bosch",
                              class: "mt-2"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            unref(form).errors.brand ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-2 text-sm text-destructive"
                            }, toDisplayString(unref(form).errors.brand), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "grid gap-8 sm:grid-cols-2" }, [
                          createVNode("div", null, [
                            createVNode(unref(_sfc_main$3), {
                              required: "",
                              class: "text-base flex items-center gap-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Catégorie "),
                                createVNode("span", {
                                  class: "text-destructive",
                                  "aria-hidden": "true"
                                }, "*")
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$5, {
                              modelValue: unref(form).category_id,
                              "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            unref(form).errors.category_id ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-2 text-sm text-destructive"
                            }, toDisplayString(unref(form).errors.category_id), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode(unref(_sfc_main$3), { class: "text-base" }, {
                            default: withCtx(() => [
                              createTextVNode("Description")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$6), {
                            modelValue: unref(form).description,
                            "onUpdate:modelValue": ($event) => unref(form).description = $event,
                            rows: "3",
                            placeholder: "Décrivez les caractéristiques principales du matériel...",
                            class: "mt-2"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("p", { class: "mt-1.5 text-xs text-muted-foreground/75" }, "Une description détaillée aidera les utilisateurs à mieux comprendre le matériel"),
                          unref(form).errors.description ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-2 text-sm text-destructive"
                          }, toDisplayString(unref(form).errors.description), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("section", {
                        id: "storage",
                        class: "p-6 space-y-8"
                      }, [
                        createVNode("div", { class: "flex items-center gap-4 pb-4 border-b" }, [
                          createVNode(unref(Settings), { class: "w-5 h-5 text-muted-foreground" }),
                          createVNode("h3", { class: "text-lg font-medium" }, "État et stockage")
                        ]),
                        createVNode("div", { class: "grid gap-8" }, [
                          createVNode("div", null, [
                            createVNode(unref(_sfc_main$3), {
                              required: "",
                              class: "text-base flex items-center gap-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" État "),
                                createVNode("span", {
                                  class: "text-destructive",
                                  "aria-hidden": "true"
                                }, "*")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$7), {
                              modelValue: unref(form).condition,
                              "onUpdate:modelValue": ($event) => unref(form).condition = $event,
                              class: "mt-2",
                              required: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$8), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$9), { placeholder: "Sélectionnez l'état" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$a), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$b), { value: "new" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center" }, [
                                          createVNode(unref(Sparkles), { class: "w-4 h-4 mr-2 text-green-500" }),
                                          createVNode("span", null, "Neuf")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$b), { value: "good" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center" }, [
                                          createVNode(unref(CheckCircle), { class: "w-4 h-4 mr-2 text-blue-500" }),
                                          createVNode("span", null, "Bon")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$b), { value: "fair" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center" }, [
                                          createVNode(unref(AlertCircle), { class: "w-4 h-4 mr-2 text-yellow-500" }),
                                          createVNode("span", null, "Moyen")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$b), { value: "poor" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center" }, [
                                          createVNode(unref(XCircle), { class: "w-4 h-4 mr-2 text-red-500" }),
                                          createVNode("span", null, "Mauvais")
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            unref(form).errors.condition ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-2 text-sm text-destructive"
                            }, toDisplayString(unref(form).errors.condition), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode(unref(_sfc_main$3), {
                              required: "",
                              class: "text-base flex items-center gap-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Quantité disponible "),
                                createVNode("span", {
                                  class: "text-destructive",
                                  "aria-hidden": "true"
                                }, "*")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$4), {
                              modelValue: unref(form).quantity,
                              "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
                              type: "number",
                              min: "1",
                              required: "",
                              placeholder: "Ex: 1",
                              class: "mt-2"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("p", { class: "mt-1.5 text-xs text-muted-foreground/75" }, "Nombre d'unités disponibles de ce matériel"),
                            unref(form).errors.quantity ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-2 text-sm text-destructive"
                            }, toDisplayString(unref(form).errors.quantity), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "grid gap-8 sm:grid-cols-2" }, [
                            createVNode("div", null, [
                              createVNode(unref(_sfc_main$3), {
                                required: "",
                                class: "text-base flex items-center gap-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Organisation propriétaire "),
                                  createVNode("span", {
                                    class: "text-destructive",
                                    "aria-hidden": "true"
                                  }, "*")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                modelValue: unref(form).organization_id,
                                "onUpdate:modelValue": [($event) => unref(form).organization_id = $event, handleOrganizationChange],
                                required: "",
                                class: "mt-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$8), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$9), { placeholder: "Sélectionnez une organisation" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$a), null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.organizations, (org) => {
                                        return openBlock(), createBlock(unref(_sfc_main$b), {
                                          key: org.id,
                                          value: org.id
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(org.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              unref(form).errors.organization_id ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-2 text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.organization_id), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode(unref(_sfc_main$3), {
                                required: "",
                                class: "text-base flex items-center gap-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Lieu de stockage "),
                                  createVNode("span", {
                                    class: "text-destructive",
                                    "aria-hidden": "true"
                                  }, "*")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                modelValue: unref(form).depot_id,
                                "onUpdate:modelValue": ($event) => unref(form).depot_id = $event,
                                required: "",
                                class: "mt-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$8), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$9), { placeholder: "Sélectionnez un lieu de stockage" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$a), null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(availableDepots.value, (depot) => {
                                        return openBlock(), createBlock(unref(_sfc_main$b), {
                                          key: depot.id,
                                          value: depot.id
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(depot.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(unref(Link), {
                                href: _ctx.route("app.organizations.depots.index", selectedOrganization.value),
                                class: "inline-flex items-center text-xs text-primary/80 hover:text-primary mt-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Plus), { class: "w-3 h-3 mr-1" }),
                                  createTextVNode(" Ajouter un lieu de stockage ")
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              unref(form).errors.depot_id ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-2 text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.depot_id), 1)) : createCommentVNode("", true)
                            ])
                          ])
                        ])
                      ]),
                      createVNode("section", {
                        id: "images",
                        class: "p-6 space-y-8"
                      }, [
                        createVNode("div", { class: "flex items-center gap-4 pb-4 border-b" }, [
                          createVNode(unref(Image), { class: "w-5 h-5 text-muted-foreground" }),
                          createVNode("h3", { class: "text-lg font-medium" }, "Photos")
                        ]),
                        createVNode("div", { class: "space-y-6" }, [
                          createVNode("div", { class: "flex items-start p-4 text-sm bg-muted/20 rounded-lg border border-muted" }, [
                            createVNode(unref(Image), { class: "w-5 h-5 mr-3 flex-shrink-0 text-muted-foreground/75" }),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("p", { class: "text-muted-foreground/75" }, " Ajoutez jusqu'à 3 photos de votre matériel. "),
                              createVNode("ul", { class: "text-xs text-muted-foreground/75 list-disc list-inside" }, [
                                createVNode("li", null, "Formats acceptés : JPG, JPEG, PNG"),
                                createVNode("li", null, "Taille maximale par image : 10 MB")
                              ])
                            ])
                          ]),
                          displayedExistingImages.value.length ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(displayedExistingImages.value, (image) => {
                              return openBlock(), createBlock("div", {
                                key: image.id,
                                class: "relative group aspect-square"
                              }, [
                                createVNode("img", {
                                  src: image.url,
                                  alt: image.original_name,
                                  class: "w-full h-full object-cover rounded-lg"
                                }, null, 8, ["src", "alt"]),
                                createVNode("button", {
                                  type: "button",
                                  onClick: ($event) => removeExistingImage(image.id),
                                  class: "absolute top-2 right-2 p-1 bg-destructive/90 hover:bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                }, [
                                  createVNode(unref(X), { class: "w-4 h-4" })
                                ], 8, ["onClick"])
                              ]);
                            }), 128))
                          ])) : createCommentVNode("", true),
                          imagePreviewUrls.value.length ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(imagePreviewUrls.value, (url, index) => {
                              return openBlock(), createBlock("div", {
                                key: index,
                                class: "relative group aspect-square"
                              }, [
                                createVNode("img", {
                                  src: url,
                                  class: "w-full h-full object-cover rounded-lg"
                                }, null, 8, ["src"]),
                                createVNode("button", {
                                  type: "button",
                                  onClick: ($event) => removeNewImage(index),
                                  class: "absolute top-2 right-2 p-1 bg-destructive/90 hover:bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                }, [
                                  createVNode(unref(X), { class: "w-4 h-4" })
                                ], 8, ["onClick"])
                              ]);
                            }), 128))
                          ])) : createCommentVNode("", true),
                          createVNode("div", { class: "flex items-center justify-center w-full" }, [
                            createVNode("label", {
                              class: ["flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/20 border-muted hover:bg-muted/30 transition-colors", { "opacity-50 cursor-not-allowed": isUploadDisabled.value }]
                            }, [
                              createVNode("div", { class: "flex flex-col items-center justify-center pt-5 pb-6" }, [
                                createVNode(unref(Upload), { class: "w-8 h-8 mb-3 text-muted-foreground" }),
                                createVNode("p", { class: "mb-2 text-sm text-muted-foreground" }, [
                                  createVNode("span", { class: "font-medium" }, "Cliquez pour ajouter"),
                                  createTextVNode(" vos photos ici ")
                                ])
                              ]),
                              createVNode("input", {
                                type: "file",
                                class: "hidden",
                                accept: "image/png,image/jpeg,image/jpg",
                                multiple: "",
                                onChange: handleImageUpload,
                                disabled: isUploadDisabled.value
                              }, null, 40, ["disabled"])
                            ], 2)
                          ])
                        ])
                      ]),
                      createVNode("section", {
                        id: "pricing",
                        class: "p-6 space-y-8"
                      }, [
                        createVNode("div", { class: "flex items-center gap-4 pb-4 border-b" }, [
                          createVNode(unref(Euro), { class: "w-5 h-5 text-muted-foreground" }),
                          createVNode("h3", { class: "text-lg font-medium" }, "Tarification")
                        ]),
                        createVNode("div", { class: "space-y-6" }, [
                          createVNode("div", { class: "grid gap-8 sm:grid-cols-3" }, [
                            createVNode("div", null, [
                              createVNode(unref(_sfc_main$3), { class: "text-base" }, {
                                default: withCtx(() => [
                                  createTextVNode("Prix d'achat")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "relative mt-2" }, [
                                createVNode(unref(_sfc_main$4), {
                                  modelValue: unref(form).purchase_price,
                                  "onUpdate:modelValue": ($event) => unref(form).purchase_price = $event,
                                  type: "text",
                                  inputmode: "decimal",
                                  class: "pl-7",
                                  onInput: (e) => handlePriceInput(e, "purchase_price")
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]),
                                createVNode("span", { class: "absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" }, "€")
                              ]),
                              unref(form).errors.purchase_price ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-2 text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.purchase_price), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode(unref(_sfc_main$3), { class: "text-base" }, {
                                default: withCtx(() => [
                                  createTextVNode("Prix de location")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "relative mt-2" }, [
                                createVNode(unref(_sfc_main$4), {
                                  modelValue: unref(form).rental_price,
                                  "onUpdate:modelValue": ($event) => unref(form).rental_price = $event,
                                  type: "text",
                                  inputmode: "decimal",
                                  class: "pl-7",
                                  onInput: (e) => handlePriceInput(e, "rental_price")
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]),
                                createVNode("span", { class: "absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" }, "€")
                              ]),
                              createVNode("p", { class: "mt-1.5 text-xs text-muted-foreground/75" }, "Prix par jour"),
                              unref(form).errors.rental_price ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-2 text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.rental_price), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode(unref(_sfc_main$3), { class: "text-base" }, {
                                default: withCtx(() => [
                                  createTextVNode("Montant de la caution")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "relative mt-2" }, [
                                createVNode(unref(_sfc_main$4), {
                                  modelValue: unref(form).deposit_amount,
                                  "onUpdate:modelValue": ($event) => unref(form).deposit_amount = $event,
                                  type: "text",
                                  inputmode: "decimal",
                                  class: "pl-7",
                                  disabled: !unref(form).requires_deposit,
                                  onInput: (e) => handlePriceInput(e, "deposit_amount")
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onInput"]),
                                createVNode("span", { class: "absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" }, "€")
                              ]),
                              createVNode("p", { class: "mt-1.5 text-xs text-muted-foreground/75" }, "0 = pas de caution"),
                              unref(form).errors.deposit_amount ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-2 text-sm text-destructive"
                              }, toDisplayString(unref(form).errors.deposit_amount), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "grid gap-4 pt-4" }, [
                            createVNode("label", { class: "flex items-center p-4 bg-muted/20 rounded-lg border border-muted cursor-pointer hover:bg-muted/30 transition-colors" }, [
                              createVNode(unref(_sfc_main$c), {
                                modelValue: unref(form).is_available,
                                "onUpdate:modelValue": ($event) => unref(form).is_available = $event,
                                class: "data-[state=checked]:bg-primary"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", { class: "ml-3" }, [
                                createVNode("span", { class: "text-sm font-medium" }, "Disponible immédiatement"),
                                createVNode("p", { class: "text-xs text-muted-foreground/75 mt-0.5" }, "Le matériel peut être réservé dès maintenant")
                              ])
                            ]),
                            createVNode("label", { class: "flex items-center p-4 bg-muted/20 rounded-lg border border-muted cursor-pointer hover:bg-muted/30 transition-colors" }, [
                              createVNode(unref(_sfc_main$c), {
                                modelValue: unref(form).requires_deposit,
                                "onUpdate:modelValue": ($event) => unref(form).requires_deposit = $event,
                                class: "data-[state=checked]:bg-primary"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", { class: "ml-3" }, [
                                createVNode("span", { class: "text-sm font-medium" }, "Caution requise"),
                                createVNode("p", { class: "text-xs text-muted-foreground/75 mt-0.5" }, "Une caution sera demandée pour la location")
                              ])
                            ]),
                            createVNode("label", { class: "flex items-center p-4 bg-muted/20 rounded-lg border border-muted cursor-pointer hover:bg-muted/30 transition-colors" }, [
                              createVNode(unref(_sfc_main$c), {
                                modelValue: unref(form).is_rentable,
                                "onUpdate:modelValue": ($event) => unref(form).is_rentable = $event,
                                class: "data-[state=checked]:bg-primary"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", { class: "ml-3" }, [
                                createVNode("span", { class: "text-sm font-medium" }, "Disponible à la location"),
                                createVNode("p", { class: "text-xs text-muted-foreground/75 mt-0.5" }, "Le matériel peut être loué par d'autres utilisateurs")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("section", {
                        id: "reservations",
                        class: "p-6 space-y-8"
                      }, [
                        createVNode("div", { class: "flex items-center gap-4 pb-4 border-b" }, [
                          createVNode(unref(CalendarPlus), { class: "w-5 h-5 text-muted-foreground" }),
                          createVNode("h3", { class: "text-lg font-medium" }, "Réservations")
                        ]),
                        createVNode("div", { class: "bg-muted/50 rounded-lg p-4" }, [
                          createVNode("p", { class: "text-sm text-muted-foreground mb-3" }, [
                            createVNode("strong", null, "Note :"),
                            createTextVNode(" L'équipement ne peut pas être supprimé s'il a des réservations actives (en cours) ou des réservations confirmées à venir. ")
                          ]),
                          createVNode("div", { class: "grid gap-4 sm:grid-cols-2" }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode("div", { class: "w-2 h-2 bg-orange-500 rounded-full" }),
                              createVNode("span", { class: "text-sm" }, "Réservations en attente : Peuvent être annulées automatiquement")
                            ]),
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode("div", { class: "w-2 h-2 bg-red-500 rounded-full" }),
                              createVNode("span", { class: "text-sm" }, "Réservations confirmées : Empêchent la suppression")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center justify-between gap-x-6 p-6" }, [
                        createVNode("div", { class: "flex items-center gap-4" }, [
                          createVNode(unref(Link), {
                            href: _ctx.route("app.organizations.equipments.index", __props.organization),
                            class: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Annuler ")
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          createVNode(unref(_sfc_main$2), {
                            type: "button",
                            variant: "destructive",
                            size: "sm",
                            onClick: ($event) => showDeleteDialog.value = true,
                            class: "focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Trash2), { class: "w-4 h-4 mr-2" }),
                              createTextVNode(" Supprimer ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        createVNode(unref(_sfc_main$2), {
                          type: "submit",
                          disabled: unref(form).processing,
                          class: [{ "opacity-25": unref(form).processing }, "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"],
                          size: "lg"
                        }, {
                          default: withCtx(() => [
                            unref(form).processing ? (openBlock(), createBlock(Spinner, {
                              key: 0,
                              class: "w-4 h-4 mr-2",
                              "aria-hidden": "true"
                            })) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(unref(form).processing ? "Modification en cours..." : "Enregistrer les modifications"), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled", "class"])
                      ])
                    ], 32)
                  ])
                ])
              ]),
              showDeleteDialog.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-50 flex items-center justify-center"
              }, [
                createVNode("div", {
                  class: "fixed inset-0 bg-black/50",
                  onClick: ($event) => showDeleteDialog.value = false
                }, null, 8, ["onClick"]),
                createVNode("div", { class: "relative bg-card text-card-foreground rounded-lg border shadow-lg max-w-md w-full mx-4" }, [
                  createVNode("div", { class: "p-6" }, [
                    createVNode("div", { class: "flex items-center gap-3 mb-4" }, [
                      createVNode("div", { class: "flex-shrink-0 w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center" }, [
                        createVNode(unref(Trash2), { class: "w-5 h-5 text-destructive" })
                      ]),
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-lg font-semibold" }, "Supprimer l'équipement"),
                        createVNode("p", { class: "text-sm text-muted-foreground" }, "Cette action est irréversible")
                      ])
                    ]),
                    createVNode("p", { class: "text-sm text-muted-foreground mb-4" }, [
                      createTextVNode(" Êtes-vous sûr de vouloir supprimer l'équipement "),
                      createVNode("strong", null, toDisplayString(__props.equipment.name), 1),
                      createTextVNode(" ? Cette action supprimera définitivement l'équipement et toutes ses données associées. ")
                    ]),
                    createVNode("div", { class: "bg-muted/50 rounded-lg p-3 mb-6" }, [
                      createVNode("p", { class: "text-xs text-muted-foreground mb-2 font-medium" }, "Ce qui se passera :"),
                      createVNode("ul", { class: "text-xs text-muted-foreground space-y-1" }, [
                        createVNode("li", null, "• L'équipement sera supprimé définitivement"),
                        createVNode("li", null, "• Toutes les photos seront supprimées"),
                        createVNode("li", null, "• Les réservations en attente seront annulées automatiquement"),
                        createVNode("li", null, "• Les réservations confirmées empêcheront la suppression")
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center justify-end gap-3" }, [
                      createVNode(unref(_sfc_main$2), {
                        type: "button",
                        variant: "outline",
                        onClick: ($event) => showDeleteDialog.value = false,
                        disabled: unref(deleteForm).processing
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Annuler ")
                        ]),
                        _: 1
                      }, 8, ["onClick", "disabled"]),
                      createVNode(unref(_sfc_main$2), {
                        type: "button",
                        variant: "destructive",
                        onClick: deleteEquipment,
                        disabled: unref(deleteForm).processing
                      }, {
                        default: withCtx(() => [
                          unref(deleteForm).processing ? (openBlock(), createBlock(Spinner, {
                            key: 0,
                            class: "w-4 h-4 mr-2"
                          })) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(unref(deleteForm).processing ? "Suppression..." : "Supprimer"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Equipments/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
