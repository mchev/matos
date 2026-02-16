import { defineComponent, mergeProps, withCtx, unref, createTextVNode, createBlock, createCommentVNode, openBlock, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$4 } from "./InputError-BhTWS2NZ.js";
import { _ as _sfc_main$5 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$3 } from "./Input-BNuRmWJk.js";
import { _ as _sfc_main$2 } from "./Label-DLRZNtyA.js";
import { _ as _sfc_main$1 } from "./AuthLayout-BhJr8Kmu.js";
import { useForm, Head } from "@inertiajs/vue3";
import { LoaderCircle } from "lucide-vue-next";
import "class-variance-authority";
import "reka-ui";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const submit = () => {
      form.post(route("password.confirm"), {
        onFinish: () => {
          form.reset();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Confirmez votre mot de passe",
        description: "Ceci est une zone sécurisée de l'application. Veuillez confirmer votre mot de passe avant de continuer."
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Confirmer le mot de passe" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div class="space-y-6"${_scopeId}><div class="grid gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { htmlFor: "password" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mot de passe`);
                } else {
                  return [
                    createTextVNode("Mot de passe")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "current-password",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$5), {
              class: "w-full",
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(form).processing) {
                    _push3(ssrRenderComponent(unref(LoaderCircle), { class: "h-4 w-4 animate-spin" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(` Confirmer le mot de passe `);
                } else {
                  return [
                    unref(form).processing ? (openBlock(), createBlock(unref(LoaderCircle), {
                      key: 0,
                      class: "h-4 w-4 animate-spin"
                    })) : createCommentVNode("", true),
                    createTextVNode(" Confirmer le mot de passe ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Confirmer le mot de passe" }),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", { class: "space-y-6" }, [
                  createVNode("div", { class: "grid gap-2" }, [
                    createVNode(unref(_sfc_main$2), { htmlFor: "password" }, {
                      default: withCtx(() => [
                        createTextVNode("Mot de passe")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3), {
                      id: "password",
                      type: "password",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      required: "",
                      autocomplete: "current-password",
                      autofocus: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$4, {
                      message: unref(form).errors.password
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(unref(_sfc_main$5), {
                      class: "w-full",
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        unref(form).processing ? (openBlock(), createBlock(unref(LoaderCircle), {
                          key: 0,
                          class: "h-4 w-4 animate-spin"
                        })) : createCommentVNode("", true),
                        createTextVNode(" Confirmer le mot de passe ")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/auth/ConfirmPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
