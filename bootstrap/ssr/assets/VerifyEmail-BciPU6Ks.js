import { defineComponent, mergeProps, withCtx, unref, createBlock, createCommentVNode, createTextVNode, openBlock, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./TextLink-DTyK6a-s.js";
import { _ as _sfc_main$2 } from "./index-53Kg4F4g.js";
import { _ as _sfc_main$1 } from "./AuthLayout-BhJr8Kmu.js";
import { useForm, Head } from "@inertiajs/vue3";
import { LoaderCircle } from "lucide-vue-next";
import "class-variance-authority";
import "reka-ui";
import "clsx";
import "tailwind-merge";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: {}
  },
  setup(__props) {
    const form = useForm({});
    const submit = () => {
      form.post(route("verification.send"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Vérifier l'email",
        description: "Veuillez vérifier votre adresse email en cliquant sur le lien que nous venons de vous envoyer."
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Vérification de l'email" }, null, _parent2, _scopeId));
            if (__props.status === "verification-link-sent") {
              _push2(`<div class="mb-4 text-center text-sm font-medium text-green-600"${_scopeId}> Un nouveau lien de vérification a été envoyé à l&#39;adresse email que vous avez fournie lors de l&#39;inscription. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form class="space-y-6 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              disabled: unref(form).processing,
              variant: "secondary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(form).processing) {
                    _push3(ssrRenderComponent(unref(LoaderCircle), { class: "h-4 w-4 animate-spin" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(` Renvoyer l&#39;email de vérification `);
                } else {
                  return [
                    unref(form).processing ? (openBlock(), createBlock(unref(LoaderCircle), {
                      key: 0,
                      class: "h-4 w-4 animate-spin"
                    })) : createCommentVNode("", true),
                    createTextVNode(" Renvoyer l'email de vérification ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              href: _ctx.route("logout"),
              method: "post",
              as: "button",
              class: "mx-auto block text-sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Se déconnecter`);
                } else {
                  return [
                    createTextVNode("Se déconnecter")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Vérification de l'email" }),
              __props.status === "verification-link-sent" ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 text-center text-sm font-medium text-green-600"
              }, " Un nouveau lien de vérification a été envoyé à l'adresse email que vous avez fournie lors de l'inscription. ")) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"]),
                class: "space-y-6 text-center"
              }, [
                createVNode(unref(_sfc_main$2), {
                  disabled: unref(form).processing,
                  variant: "secondary"
                }, {
                  default: withCtx(() => [
                    unref(form).processing ? (openBlock(), createBlock(unref(LoaderCircle), {
                      key: 0,
                      class: "h-4 w-4 animate-spin"
                    })) : createCommentVNode("", true),
                    createTextVNode(" Renvoyer l'email de vérification ")
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                createVNode(_sfc_main$3, {
                  href: _ctx.route("logout"),
                  method: "post",
                  as: "button",
                  class: "mx-auto block text-sm"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Se déconnecter")
                  ]),
                  _: 1
                }, 8, ["href"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/auth/VerifyEmail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
