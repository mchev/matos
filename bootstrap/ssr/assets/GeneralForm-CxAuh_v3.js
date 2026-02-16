import { unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$6 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$3 } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$2 } from "./Label-DLRZNtyA.js";
import { _ as _sfc_main$5 } from "./Textarea-DxMXW1ER.js";
import { _ as _sfc_main$4 } from "./InputError-BhTWS2NZ.js";
import { _ as _sfc_main$1 } from "./HeadingSmall-B1yfmTIh.js";
import "class-variance-authority";
import "reka-ui";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
const _sfc_main = {
  __name: "GeneralForm",
  __ssrInlineRender: true,
  props: {
    organization: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      name: props.organization.name,
      description: props.organization.description,
      email: props.organization.email,
      phone: props.organization.phone,
      address: props.organization.address,
      city: props.organization.city,
      postal_code: props.organization.postal_code,
      country: props.organization.country || "FR",
      website: props.organization.website
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Informations générales",
        description: "Mettez à jour les informations de votre organisation."
      }, null, _parent));
      _push(`<form class="mt-6 space-y-6"><div class="grid gap-6 sm:grid-cols-2"><div>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), { for: "name" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Nom`);
          } else {
            return [
              createTextVNode("Nom")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        id: "name",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        required: "",
        autofocus: ""
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "mt-2",
        message: unref(form).errors.name
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), { for: "email" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Email`);
          } else {
            return [
              createTextVNode("Email")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        id: "email",
        type: "email",
        class: "mt-1 block w-full",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), { for: "phone" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Téléphone`);
          } else {
            return [
              createTextVNode("Téléphone")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        id: "phone",
        type: "tel",
        class: "mt-1 block w-full",
        modelValue: unref(form).phone,
        "onUpdate:modelValue": ($event) => unref(form).phone = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "mt-2",
        message: unref(form).errors.phone
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), { for: "website" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Site web`);
          } else {
            return [
              createTextVNode("Site web")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        id: "website",
        type: "url",
        class: "mt-1 block w-full",
        modelValue: unref(form).website,
        "onUpdate:modelValue": ($event) => unref(form).website = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "mt-2",
        message: unref(form).errors.website
      }, null, _parent));
      _push(`</div><div class="sm:col-span-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), { for: "address" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Adresse`);
          } else {
            return [
              createTextVNode("Adresse")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        id: "address",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).address,
        "onUpdate:modelValue": ($event) => unref(form).address = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "mt-2",
        message: unref(form).errors.address
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), { for: "city" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ville`);
          } else {
            return [
              createTextVNode("Ville")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        id: "city",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).city,
        "onUpdate:modelValue": ($event) => unref(form).city = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "mt-2",
        message: unref(form).errors.city
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), { for: "postal_code" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Code postal`);
          } else {
            return [
              createTextVNode("Code postal")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        id: "postal_code",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).postal_code,
        "onUpdate:modelValue": ($event) => unref(form).postal_code = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "mt-2",
        message: unref(form).errors.postal_code
      }, null, _parent));
      _push(`</div><div class="sm:col-span-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), { for: "description" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Description`);
          } else {
            return [
              createTextVNode("Description")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), {
        id: "description",
        class: "mt-1 block w-full",
        modelValue: unref(form).description,
        "onUpdate:modelValue": ($event) => unref(form).description = $event,
        rows: "4"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "mt-2",
        message: unref(form).errors.description
      }, null, _parent));
      _push(`</div></div><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(unref(_sfc_main$6), {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sauvegarder`);
          } else {
            return [
              createTextVNode("Sauvegarder")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600 dark:text-gray-400"> Sauvegardé. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/App/Organizations/Settings/Partials/GeneralForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
