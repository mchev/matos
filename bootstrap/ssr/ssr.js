import { createHeadManager, router, config as config$1, isUrlMethodPair, formDataToObject, mergeDataIntoQueryString, getScrollableParent, useInfiniteScroll, UseFormUtils, FormComponentResetSymbol, resetFormFields, shouldIntercept, shouldNavigate, getInitialPageFromDOM, setupProgress } from "@inertiajs/core";
import require$$0 from "@vue/compiler-dom";
import require$$1 from "@vue/runtime-dom";
import require$$2 from "@vue/shared";
import { escape as escape$1, cloneDeep, has, set, get, isEqual } from "lodash-es";
import { createValidator, toSimpleValidationErrors, resolveName } from "laravel-precognition";
import createServer from "@inertiajs/core/server";
import require$$2$1 from "@vue/compiler-ssr";
import require$$3 from "node:stream";
var vue = { exports: {} };
var vue_cjs_prod = {};
/**
* vue v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var hasRequiredVue_cjs_prod;
function requireVue_cjs_prod() {
  if (hasRequiredVue_cjs_prod) return vue_cjs_prod;
  hasRequiredVue_cjs_prod = 1;
  (function(exports$1) {
    Object.defineProperty(exports$1, "__esModule", { value: true });
    var compilerDom = require$$0;
    var runtimeDom = require$$1;
    var shared = require$$2;
    function _interopNamespaceDefault(e2) {
      var n2 = /* @__PURE__ */ Object.create(null);
      if (e2) {
        for (var k in e2) {
          n2[k] = e2[k];
        }
      }
      n2.default = e2;
      return Object.freeze(n2);
    }
    var runtimeDom__namespace = /* @__PURE__ */ _interopNamespaceDefault(runtimeDom);
    const compileCache = /* @__PURE__ */ Object.create(null);
    function compileToFunction(template, options) {
      if (!shared.isString(template)) {
        if (template.nodeType) {
          template = template.innerHTML;
        } else {
          return shared.NOOP;
        }
      }
      const key2 = shared.genCacheKey(template, options);
      const cached = compileCache[key2];
      if (cached) {
        return cached;
      }
      if (template[0] === "#") {
        const el = document.querySelector(template);
        template = el ? el.innerHTML : ``;
      }
      const opts = shared.extend(
        {
          hoistStatic: true,
          onError: void 0,
          onWarn: shared.NOOP
        },
        options
      );
      if (!opts.isCustomElement && typeof customElements !== "undefined") {
        opts.isCustomElement = (tag) => !!customElements.get(tag);
      }
      const { code } = compilerDom.compile(template, opts);
      const render = new Function("Vue", code)(runtimeDom__namespace);
      render._rc = true;
      return compileCache[key2] = render;
    }
    runtimeDom.registerRuntimeCompiler(compileToFunction);
    exports$1.compile = compileToFunction;
    Object.keys(runtimeDom).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports$1, k)) exports$1[k] = runtimeDom[k];
    });
  })(vue_cjs_prod);
  return vue_cjs_prod;
}
var vue_cjs = {};
/**
* vue v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var hasRequiredVue_cjs;
function requireVue_cjs() {
  if (hasRequiredVue_cjs) return vue_cjs;
  hasRequiredVue_cjs = 1;
  (function(exports$1) {
    Object.defineProperty(exports$1, "__esModule", { value: true });
    var compilerDom = require$$0;
    var runtimeDom = require$$1;
    var shared = require$$2;
    function _interopNamespaceDefault(e2) {
      var n2 = /* @__PURE__ */ Object.create(null);
      if (e2) {
        for (var k in e2) {
          n2[k] = e2[k];
        }
      }
      n2.default = e2;
      return Object.freeze(n2);
    }
    var runtimeDom__namespace = /* @__PURE__ */ _interopNamespaceDefault(runtimeDom);
    const compileCache = /* @__PURE__ */ Object.create(null);
    function compileToFunction(template, options) {
      if (!shared.isString(template)) {
        if (template.nodeType) {
          template = template.innerHTML;
        } else {
          runtimeDom.warn(`invalid template option: `, template);
          return shared.NOOP;
        }
      }
      const key2 = shared.genCacheKey(template, options);
      const cached = compileCache[key2];
      if (cached) {
        return cached;
      }
      if (template[0] === "#") {
        const el = document.querySelector(template);
        if (!el) {
          runtimeDom.warn(`Template element not found or is empty: ${template}`);
        }
        template = el ? el.innerHTML : ``;
      }
      const opts = shared.extend(
        {
          hoistStatic: true,
          onError,
          onWarn: (e2) => onError(e2, true)
        },
        options
      );
      if (!opts.isCustomElement && typeof customElements !== "undefined") {
        opts.isCustomElement = (tag) => !!customElements.get(tag);
      }
      const { code } = compilerDom.compile(template, opts);
      function onError(err, asWarning = false) {
        const message = asWarning ? err.message : `Template compilation error: ${err.message}`;
        const codeFrame = err.loc && shared.generateCodeFrame(
          template,
          err.loc.start.offset,
          err.loc.end.offset
        );
        runtimeDom.warn(codeFrame ? `${message}
${codeFrame}` : message);
      }
      const render = new Function("Vue", code)(runtimeDom__namespace);
      render._rc = true;
      return compileCache[key2] = render;
    }
    runtimeDom.registerRuntimeCompiler(compileToFunction);
    exports$1.compile = compileToFunction;
    Object.keys(runtimeDom).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports$1, k)) exports$1[k] = runtimeDom[k];
    });
  })(vue_cjs);
  return vue_cjs;
}
var hasRequiredVue;
function requireVue() {
  if (hasRequiredVue) return vue.exports;
  hasRequiredVue = 1;
  if (process.env.NODE_ENV === "production") {
    vue.exports = requireVue_cjs_prod();
  } else {
    vue.exports = requireVue_cjs();
  }
  return vue.exports;
}
var vueExports = requireVue();
var remember = {
  created() {
    if (!this.$options.remember) {
      return;
    }
    if (Array.isArray(this.$options.remember)) {
      this.$options.remember = { data: this.$options.remember };
    }
    if (typeof this.$options.remember === "string") {
      this.$options.remember = { data: [this.$options.remember] };
    }
    if (typeof this.$options.remember.data === "string") {
      this.$options.remember = { data: [this.$options.remember.data] };
    }
    const rememberKey = this.$options.remember.key instanceof Function ? this.$options.remember.key.call(this) : this.$options.remember.key;
    const restored = router.restore(rememberKey);
    const rememberable = this.$options.remember.data.filter((key2) => {
      return !(this[key2] !== null && typeof this[key2] === "object" && this[key2].__rememberable === false);
    });
    const hasCallbacks = (key2) => {
      return this[key2] !== null && typeof this[key2] === "object" && typeof this[key2].__remember === "function" && typeof this[key2].__restore === "function";
    };
    rememberable.forEach((key2) => {
      if (this[key2] !== void 0 && restored !== void 0 && restored[key2] !== void 0) {
        hasCallbacks(key2) ? this[key2].__restore(restored[key2]) : this[key2] = restored[key2];
      }
      this.$watch(
        key2,
        () => {
          router.remember(
            rememberable.reduce(
              (data, key3) => ({
                ...data,
                [key3]: cloneDeep(hasCallbacks(key3) ? this[key3].__remember() : this[key3])
              }),
              {}
            ),
            rememberKey
          );
        },
        { immediate: true, deep: true }
      );
    });
  }
};
var remember_default = remember;
var reservedFormKeys = null;
var bootstrapping = false;
function validateFormDataKeys(data) {
  if (bootstrapping) {
    return;
  }
  if (reservedFormKeys === null) {
    bootstrapping = true;
    reservedFormKeys = new Set(Object.keys(useForm({})));
    bootstrapping = false;
  }
  const conflicts = Object.keys(data).filter((key2) => reservedFormKeys.has(key2));
  if (conflicts.length > 0) {
    console.error(
      `[Inertia] useForm() data contains field(s) that conflict with form properties: ${conflicts.map((k) => `"${k}"`).join(", ")}. These fields will be overwritten by form methods/properties. Please rename these fields.`
    );
  }
}
function useForm(...args) {
  let { rememberKey, data, precognitionEndpoint } = UseFormUtils.parseUseFormArguments(...args);
  const restored = rememberKey ? router.restore(rememberKey) : null;
  let defaults = typeof data === "function" ? cloneDeep(data()) : cloneDeep(data);
  validateFormDataKeys(defaults);
  let cancelToken = null;
  let recentlySuccessfulTimeoutId;
  let transform = (data2) => data2;
  let validatorRef = null;
  let rememberExcludeKeys = [];
  let defaultsCalledInOnSuccess = false;
  const form = vueExports.reactive({
    ...restored ? restored.data : cloneDeep(defaults),
    isDirty: false,
    errors: restored ? restored.errors : {},
    hasErrors: false,
    processing: false,
    progress: null,
    wasSuccessful: false,
    recentlySuccessful: false,
    withPrecognition(...args2) {
      precognitionEndpoint = UseFormUtils.createWayfinderCallback(...args2);
      const formWithPrecognition = this;
      let withAllErrors = null;
      const validator = createValidator((client) => {
        const { method, url } = precognitionEndpoint();
        const transformedData = cloneDeep(transform(this.data()));
        return client[method](url, transformedData);
      }, cloneDeep(defaults));
      validatorRef = validator;
      validator.on("validatingChanged", () => {
        formWithPrecognition.validating = validator.validating();
      }).on("validatedChanged", () => {
        formWithPrecognition.__valid = validator.valid();
      }).on("touchedChanged", () => {
        formWithPrecognition.__touched = validator.touched();
      }).on("errorsChanged", () => {
        const validationErrors = withAllErrors ?? config.get("form.withAllErrors") ? validator.errors() : toSimpleValidationErrors(validator.errors());
        this.errors = {};
        this.setError(validationErrors);
        formWithPrecognition.__valid = validator.valid();
      });
      const tap = (value, callback) => {
        callback(value);
        return value;
      };
      Object.assign(formWithPrecognition, {
        __touched: [],
        __valid: [],
        validating: false,
        validator: () => validator,
        withAllErrors: () => tap(formWithPrecognition, () => withAllErrors = true),
        valid: (field) => formWithPrecognition.__valid.includes(field),
        invalid: (field) => field in this.errors,
        setValidationTimeout: (duration) => tap(formWithPrecognition, () => validator.setTimeout(duration)),
        validateFiles: () => tap(formWithPrecognition, () => validator.validateFiles()),
        withoutFileValidation: () => tap(formWithPrecognition, () => validator.withoutFileValidation()),
        touch: (field, ...fields) => {
          if (Array.isArray(field)) {
            validator.touch(field);
          } else if (typeof field === "string") {
            validator.touch([field, ...fields]);
          } else {
            validator.touch(field);
          }
          return formWithPrecognition;
        },
        touched: (field) => typeof field === "string" ? formWithPrecognition.__touched.includes(field) : formWithPrecognition.__touched.length > 0,
        validate: (field, config3) => {
          if (typeof field === "object" && !("target" in field)) {
            config3 = field;
            field = void 0;
          }
          if (field === void 0) {
            validator.validate(config3);
          } else {
            const fieldName = resolveName(field);
            const transformedData = transform(this.data());
            validator.validate(fieldName, get(transformedData, fieldName), config3);
          }
          return formWithPrecognition;
        },
        setErrors: (errors) => tap(formWithPrecognition, () => this.setError(errors)),
        forgetError: (field) => tap(
          formWithPrecognition,
          () => this.clearErrors(resolveName(field))
        )
      });
      return formWithPrecognition;
    },
    data() {
      return Object.keys(defaults).reduce((carry, key2) => {
        return set(carry, key2, get(this, key2));
      }, {});
    },
    transform(callback) {
      transform = callback;
      return this;
    },
    defaults(fieldOrFields, maybeValue) {
      if (typeof data === "function") {
        throw new Error("You cannot call `defaults()` when using a function to define your form data.");
      }
      defaultsCalledInOnSuccess = true;
      if (typeof fieldOrFields === "undefined") {
        defaults = cloneDeep(this.data());
        this.isDirty = false;
      } else {
        defaults = typeof fieldOrFields === "string" ? set(cloneDeep(defaults), fieldOrFields, maybeValue) : Object.assign({}, cloneDeep(defaults), fieldOrFields);
      }
      validatorRef == null ? void 0 : validatorRef.defaults(defaults);
      return this;
    },
    reset(...fields) {
      const resolvedData = typeof data === "function" ? cloneDeep(data()) : cloneDeep(defaults);
      const clonedData = cloneDeep(resolvedData);
      if (fields.length === 0) {
        defaults = clonedData;
        Object.assign(this, resolvedData);
      } else {
        fields.filter((key2) => has(clonedData, key2)).forEach((key2) => {
          set(defaults, key2, get(clonedData, key2));
          set(this, key2, get(resolvedData, key2));
        });
      }
      validatorRef == null ? void 0 : validatorRef.reset(...fields);
      return this;
    },
    setError(fieldOrFields, maybeValue) {
      const errors = typeof fieldOrFields === "string" ? { [fieldOrFields]: maybeValue } : fieldOrFields;
      Object.assign(this.errors, errors);
      this.hasErrors = Object.keys(this.errors).length > 0;
      validatorRef == null ? void 0 : validatorRef.setErrors(errors);
      return this;
    },
    clearErrors(...fields) {
      this.errors = Object.keys(this.errors).reduce(
        (carry, field) => ({
          ...carry,
          ...fields.length > 0 && !fields.includes(field) ? { [field]: this.errors[field] } : {}
        }),
        {}
      );
      this.hasErrors = Object.keys(this.errors).length > 0;
      if (validatorRef) {
        if (fields.length === 0) {
          validatorRef.setErrors({});
        } else {
          fields.forEach(validatorRef.forgetError);
        }
      }
      return this;
    },
    resetAndClearErrors(...fields) {
      this.reset(...fields);
      this.clearErrors(...fields);
      return this;
    },
    submit(...args2) {
      const { method, url, options } = UseFormUtils.parseSubmitArguments(args2, precognitionEndpoint);
      defaultsCalledInOnSuccess = false;
      const _options = {
        ...options,
        onCancelToken: (token) => {
          cancelToken = token;
          if (options.onCancelToken) {
            return options.onCancelToken(token);
          }
        },
        onBefore: (visit) => {
          this.wasSuccessful = false;
          this.recentlySuccessful = false;
          clearTimeout(recentlySuccessfulTimeoutId);
          if (options.onBefore) {
            return options.onBefore(visit);
          }
        },
        onStart: (visit) => {
          this.processing = true;
          if (options.onStart) {
            return options.onStart(visit);
          }
        },
        onProgress: (event) => {
          this.progress = event ?? null;
          if (options.onProgress) {
            return options.onProgress(event);
          }
        },
        onSuccess: async (page2) => {
          this.processing = false;
          this.progress = null;
          this.clearErrors();
          this.wasSuccessful = true;
          this.recentlySuccessful = true;
          recentlySuccessfulTimeoutId = setTimeout(
            () => this.recentlySuccessful = false,
            config.get("form.recentlySuccessfulDuration")
          );
          const onSuccess = options.onSuccess ? await options.onSuccess(page2) : null;
          if (!defaultsCalledInOnSuccess) {
            defaults = cloneDeep(this.data());
            this.isDirty = false;
          }
          return onSuccess;
        },
        onError: (errors) => {
          this.processing = false;
          this.progress = null;
          this.clearErrors().setError(errors);
          if (options.onError) {
            return options.onError(errors);
          }
        },
        onCancel: () => {
          this.processing = false;
          this.progress = null;
          if (options.onCancel) {
            return options.onCancel();
          }
        },
        onFinish: (visit) => {
          this.processing = false;
          this.progress = null;
          cancelToken = null;
          if (options.onFinish) {
            return options.onFinish(visit);
          }
        }
      };
      const transformedData = transform(this.data());
      if (method === "delete") {
        router.delete(url, { ..._options, data: transformedData });
      } else {
        router[method](url, transformedData, _options);
      }
    },
    get(url, options) {
      this.submit("get", url, options);
    },
    post(url, options) {
      this.submit("post", url, options);
    },
    put(url, options) {
      this.submit("put", url, options);
    },
    patch(url, options) {
      this.submit("patch", url, options);
    },
    delete(url, options) {
      this.submit("delete", url, options);
    },
    cancel() {
      if (cancelToken) {
        cancelToken.cancel();
      }
    },
    dontRemember(...keys) {
      rememberExcludeKeys = keys;
      return this;
    },
    __rememberable: rememberKey === null,
    __remember() {
      const data2 = this.data();
      if (rememberExcludeKeys.length > 0) {
        const filtered = { ...data2 };
        rememberExcludeKeys.forEach((k) => delete filtered[k]);
        return { data: filtered, errors: this.errors };
      }
      return { data: data2, errors: this.errors };
    },
    __restore(restored2) {
      Object.assign(this, restored2.data);
      this.setError(restored2.errors);
    }
  });
  const typedForm = form;
  vueExports.watch(
    typedForm,
    (newValue) => {
      typedForm.isDirty = !isEqual(typedForm.data(), defaults);
      const storedData = router.restore(rememberKey);
      const newData = cloneDeep(newValue.__remember());
      if (rememberKey && !isEqual(storedData, newData)) {
        router.remember(newData, rememberKey);
      }
    },
    { immediate: true, deep: true }
  );
  return precognitionEndpoint ? typedForm.withPrecognition(precognitionEndpoint) : typedForm;
}
var component = vueExports.ref(void 0);
var page = vueExports.ref();
var layout = vueExports.shallowRef(null);
var key = vueExports.ref(void 0);
var headManager;
var App = vueExports.defineComponent({
  name: "Inertia",
  props: {
    initialPage: {
      type: Object,
      required: true
    },
    initialComponent: {
      type: Object,
      required: false
    },
    resolveComponent: {
      type: Function,
      required: false
    },
    titleCallback: {
      type: Function,
      required: false,
      default: (title) => title
    },
    onHeadUpdate: {
      type: Function,
      required: false,
      default: () => () => {
      }
    }
  },
  setup({ initialPage, initialComponent, resolveComponent, titleCallback, onHeadUpdate }) {
    component.value = initialComponent ? vueExports.markRaw(initialComponent) : void 0;
    page.value = { ...initialPage, flash: initialPage.flash ?? {} };
    key.value = void 0;
    const isServer = typeof window === "undefined";
    headManager = createHeadManager(isServer, titleCallback || ((title) => title), onHeadUpdate || (() => {
    }));
    if (!isServer) {
      router.init({
        initialPage,
        resolveComponent,
        swapComponent: async (options) => {
          component.value = vueExports.markRaw(options.component);
          page.value = options.page;
          key.value = options.preserveState ? key.value : Date.now();
        },
        onFlash: (flash) => {
          page.value = { ...page.value, flash };
        }
      });
      router.on("navigate", () => headManager.forceUpdate());
    }
    return () => {
      if (component.value) {
        component.value.inheritAttrs = !!component.value.inheritAttrs;
        const child = vueExports.h(component.value, {
          ...page.value.props,
          key: key.value
        });
        if (layout.value) {
          component.value.layout = layout.value;
          layout.value = null;
        }
        if (component.value.layout) {
          if (typeof component.value.layout === "function") {
            return component.value.layout(vueExports.h, child);
          }
          return (Array.isArray(component.value.layout) ? component.value.layout : [component.value.layout]).concat(child).reverse().reduce((child2, layout2) => {
            layout2.inheritAttrs = !!layout2.inheritAttrs;
            return vueExports.h(layout2, { ...page.value.props }, () => child2);
          });
        }
        return child;
      }
    };
  }
});
var app_default = App;
var plugin = {
  install(app) {
    router.form = useForm;
    Object.defineProperty(app.config.globalProperties, "$inertia", { get: () => router });
    Object.defineProperty(app.config.globalProperties, "$page", { get: () => page.value });
    Object.defineProperty(app.config.globalProperties, "$headManager", { get: () => headManager });
    app.mixin(remember_default);
  }
};
function usePage() {
  return vueExports.reactive({
    props: vueExports.computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.props;
    }),
    url: vueExports.computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.url;
    }),
    component: vueExports.computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.component;
    }),
    version: vueExports.computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.version;
    }),
    clearHistory: vueExports.computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.clearHistory;
    }),
    deferredProps: vueExports.computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.deferredProps;
    }),
    mergeProps: vueExports.computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.mergeProps;
    }),
    prependProps: vueExports.computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.prependProps;
    }),
    deepMergeProps: vueExports.computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.deepMergeProps;
    }),
    matchPropsOn: vueExports.computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.matchPropsOn;
    }),
    rememberedState: vueExports.computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.rememberedState;
    }),
    encryptHistory: vueExports.computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.encryptHistory;
    }),
    flash: vueExports.computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.flash;
    })
  });
}
async function createInertiaApp({
  id = "app",
  resolve,
  setup,
  title,
  progress: progress2 = {},
  page: page2,
  render,
  defaults = {}
}) {
  config.replace(defaults);
  const isServer = typeof window === "undefined";
  const useScriptElementForInitialPage = config.get("future.useScriptElementForInitialPage");
  const initialPage = page2 || getInitialPageFromDOM(id, useScriptElementForInitialPage);
  const resolveComponent = (name) => Promise.resolve(resolve(name)).then((module) => module.default || module);
  let head = [];
  const vueApp = await Promise.all([
    resolveComponent(initialPage.component),
    router.decryptHistory().catch(() => {
    })
  ]).then(([initialComponent]) => {
    const props = {
      initialPage,
      initialComponent,
      resolveComponent,
      titleCallback: title
    };
    if (isServer) {
      const ssrSetup = setup;
      return ssrSetup({
        el: null,
        App: app_default,
        props: { ...props, onHeadUpdate: (elements) => head = elements },
        plugin
      });
    }
    const csrSetup = setup;
    return csrSetup({
      el: document.getElementById(id),
      App: app_default,
      props,
      plugin
    });
  });
  if (!isServer && progress2) {
    setupProgress(progress2);
  }
  if (isServer && render) {
    const element = () => {
      if (!useScriptElementForInitialPage) {
        return vueExports.h("div", {
          id,
          "data-page": JSON.stringify(initialPage),
          innerHTML: vueApp ? render(vueApp) : ""
        });
      }
      return [
        vueExports.h("script", {
          "data-page": id,
          type: "application/json",
          innerHTML: JSON.stringify(initialPage).replace(/\//g, "\\/")
        }),
        vueExports.h("div", {
          id,
          innerHTML: vueApp ? render(vueApp) : ""
        })
      ];
    };
    const body = await render(
      vueExports.createSSRApp({
        render: () => element()
      })
    );
    return { head, body };
  }
}
vueExports.defineComponent({
  name: "Deferred",
  props: {
    data: {
      type: [String, Array],
      required: true
    }
  },
  render() {
    var _a, _b;
    const keys = Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data];
    if (!this.$slots.fallback) {
      throw new Error("`<Deferred>` requires a `<template #fallback>` slot");
    }
    return keys.every((key2) => this.$page.props[key2] !== void 0) ? (_b = (_a = this.$slots).default) == null ? void 0 : _b.call(_a) : this.$slots.fallback();
  }
});
var noop = () => void 0;
var FormContextKey = /* @__PURE__ */ Symbol("InertiaFormContext");
vueExports.defineComponent({
  name: "Form",
  slots: Object,
  props: {
    action: {
      type: [String, Object],
      default: ""
    },
    method: {
      type: String,
      default: "get"
    },
    headers: {
      type: Object,
      default: () => ({})
    },
    queryStringArrayFormat: {
      type: String,
      default: "brackets"
    },
    errorBag: {
      type: [String, null],
      default: null
    },
    showProgress: {
      type: Boolean,
      default: true
    },
    transform: {
      type: Function,
      default: (data) => data
    },
    options: {
      type: Object,
      default: () => ({})
    },
    resetOnError: {
      type: [Boolean, Array],
      default: false
    },
    resetOnSuccess: {
      type: [Boolean, Array],
      default: false
    },
    setDefaultsOnSuccess: {
      type: Boolean,
      default: false
    },
    onCancelToken: {
      type: Function,
      default: noop
    },
    onBefore: {
      type: Function,
      default: noop
    },
    onStart: {
      type: Function,
      default: noop
    },
    onProgress: {
      type: Function,
      default: noop
    },
    onFinish: {
      type: Function,
      default: noop
    },
    onCancel: {
      type: Function,
      default: noop
    },
    onSuccess: {
      type: Function,
      default: noop
    },
    onError: {
      type: Function,
      default: noop
    },
    onSubmitComplete: {
      type: Function,
      default: noop
    },
    disableWhileProcessing: {
      type: Boolean,
      default: false
    },
    invalidateCacheTags: {
      type: [String, Array],
      default: () => []
    },
    validateFiles: {
      type: Boolean,
      default: false
    },
    validationTimeout: {
      type: Number,
      default: 1500
    },
    withAllErrors: {
      type: Boolean,
      default: null
    }
  },
  setup(props, { slots, attrs, expose }) {
    const getTransformedData = () => {
      const [_url, data] = getUrlAndData();
      return props.transform(data);
    };
    const form = useForm({}).withPrecognition(
      () => method.value,
      () => getUrlAndData()[0]
    ).transform(getTransformedData).setValidationTimeout(props.validationTimeout);
    if (props.validateFiles) {
      form.validateFiles();
    }
    if (props.withAllErrors ?? config$1.get("form.withAllErrors")) {
      form.withAllErrors();
    }
    const formElement = vueExports.ref();
    const method = vueExports.computed(
      () => isUrlMethodPair(props.action) ? props.action.method : props.method.toLowerCase()
    );
    const isDirty = vueExports.ref(false);
    const defaultData = vueExports.ref(new FormData());
    const onFormUpdate = (event) => {
      var _a;
      if (event.type === "reset" && ((_a = event.detail) == null ? void 0 : _a[FormComponentResetSymbol])) {
        event.preventDefault();
      }
      isDirty.value = event.type === "reset" ? false : !isEqual(getData(), formDataToObject(defaultData.value));
    };
    const formEvents = ["input", "change", "reset"];
    vueExports.onMounted(() => {
      defaultData.value = getFormData();
      form.defaults(getData());
      formEvents.forEach((e2) => formElement.value.addEventListener(e2, onFormUpdate));
    });
    vueExports.watch(
      () => props.validateFiles,
      (value) => value ? form.validateFiles() : form.withoutFileValidation()
    );
    vueExports.watch(
      () => props.validationTimeout,
      (value) => form.setValidationTimeout(value)
    );
    vueExports.onBeforeUnmount(() => formEvents.forEach((e2) => {
      var _a;
      return (_a = formElement.value) == null ? void 0 : _a.removeEventListener(e2, onFormUpdate);
    }));
    const getFormData = (submitter) => new FormData(formElement.value, submitter);
    const getData = (submitter) => formDataToObject(getFormData(submitter));
    const getUrlAndData = (submitter) => {
      return mergeDataIntoQueryString(
        method.value,
        isUrlMethodPair(props.action) ? props.action.url : props.action,
        getData(submitter),
        props.queryStringArrayFormat
      );
    };
    const submit = (submitter) => {
      const [url, data] = getUrlAndData(submitter);
      const formTarget = submitter == null ? void 0 : submitter.getAttribute("formtarget");
      if (formTarget === "_blank" && method.value === "get") {
        window.open(url, "_blank");
        return;
      }
      const maybeReset = (resetOption) => {
        if (!resetOption) {
          return;
        }
        if (resetOption === true) {
          reset();
        } else if (resetOption.length > 0) {
          reset(...resetOption);
        }
      };
      const submitOptions = {
        headers: props.headers,
        queryStringArrayFormat: props.queryStringArrayFormat,
        errorBag: props.errorBag,
        showProgress: props.showProgress,
        invalidateCacheTags: props.invalidateCacheTags,
        onCancelToken: props.onCancelToken,
        onBefore: props.onBefore,
        onStart: props.onStart,
        onProgress: props.onProgress,
        onFinish: props.onFinish,
        onCancel: props.onCancel,
        onSuccess: (...args) => {
          var _a, _b;
          (_a = props.onSuccess) == null ? void 0 : _a.call(props, ...args);
          (_b = props.onSubmitComplete) == null ? void 0 : _b.call(props, exposed);
          maybeReset(props.resetOnSuccess);
          if (props.setDefaultsOnSuccess === true) {
            defaults();
          }
        },
        onError: (...args) => {
          var _a;
          (_a = props.onError) == null ? void 0 : _a.call(props, ...args);
          maybeReset(props.resetOnError);
        },
        ...props.options
      };
      form.transform(() => props.transform(data)).submit(method.value, url, submitOptions);
      form.transform(getTransformedData);
    };
    const reset = (...fields) => {
      resetFormFields(formElement.value, defaultData.value, fields);
      form.reset(...fields);
    };
    const clearErrors = (...fields) => {
      form.clearErrors(...fields);
    };
    const resetAndClearErrors = (...fields) => {
      clearErrors(...fields);
      reset(...fields);
    };
    const defaults = () => {
      defaultData.value = getFormData();
      isDirty.value = false;
    };
    const exposed = {
      get errors() {
        return form.errors;
      },
      get hasErrors() {
        return form.hasErrors;
      },
      get processing() {
        return form.processing;
      },
      get progress() {
        return form.progress;
      },
      get wasSuccessful() {
        return form.wasSuccessful;
      },
      get recentlySuccessful() {
        return form.recentlySuccessful;
      },
      get validating() {
        return form.validating;
      },
      clearErrors,
      resetAndClearErrors,
      setError: (fieldOrFields, maybeValue) => form.setError(typeof fieldOrFields === "string" ? { [fieldOrFields]: maybeValue } : fieldOrFields),
      get isDirty() {
        return isDirty.value;
      },
      reset,
      submit,
      defaults,
      getData,
      getFormData,
      // Precognition
      touch: form.touch,
      valid: form.valid,
      invalid: form.invalid,
      touched: form.touched,
      validate: (field, config3) => form.validate(...UseFormUtils.mergeHeadersForValidation(field, config3, props.headers)),
      validator: () => form.validator()
    };
    expose(exposed);
    vueExports.provide(FormContextKey, exposed);
    return () => {
      return vueExports.h(
        "form",
        {
          ...attrs,
          ref: formElement,
          action: isUrlMethodPair(props.action) ? props.action.url : props.action,
          method: method.value,
          onSubmit: (event) => {
            event.preventDefault();
            submit(event.submitter);
          },
          inert: props.disableWhileProcessing && form.processing
        },
        slots.default ? slots.default(exposed) : []
      );
    };
  }
});
var Head = vueExports.defineComponent({
  props: {
    title: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      provider: this.$headManager.createProvider()
    };
  },
  beforeUnmount() {
    this.provider.disconnect();
  },
  methods: {
    isUnaryTag(node) {
      return typeof node.type === "string" && [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
      ].indexOf(node.type) > -1;
    },
    renderTagStart(node) {
      node.props = node.props || {};
      node.props[this.provider.preferredAttribute()] = node.props["head-key"] !== void 0 ? node.props["head-key"] : "";
      const attrs = Object.keys(node.props).reduce((carry, name) => {
        const value = String(node.props[name]);
        if (["key", "head-key"].includes(name)) {
          return carry;
        } else if (value === "") {
          return carry + ` ${name}`;
        } else {
          return carry + ` ${name}="${escape$1(value)}"`;
        }
      }, "");
      return `<${String(node.type)}${attrs}>`;
    },
    renderTagChildren(node) {
      const { children } = node;
      if (typeof children === "string") {
        return children;
      }
      if (Array.isArray(children)) {
        return children.reduce((html, child) => {
          return html + this.renderTag(child);
        }, "");
      }
      return "";
    },
    isFunctionNode(node) {
      return typeof node.type === "function";
    },
    isComponentNode(node) {
      return typeof node.type === "object";
    },
    isCommentNode(node) {
      return /(comment|cmt)/i.test(node.type.toString());
    },
    isFragmentNode(node) {
      return /(fragment|fgt|symbol\(\))/i.test(node.type.toString());
    },
    isTextNode(node) {
      return /(text|txt)/i.test(node.type.toString());
    },
    renderTag(node) {
      if (this.isTextNode(node)) {
        return String(node.children);
      } else if (this.isFragmentNode(node)) {
        return "";
      } else if (this.isCommentNode(node)) {
        return "";
      }
      let html = this.renderTagStart(node);
      if (node.children) {
        html += this.renderTagChildren(node);
      }
      if (!this.isUnaryTag(node)) {
        html += `</${String(node.type)}>`;
      }
      return html;
    },
    addTitleElement(elements) {
      if (this.title && !elements.find((tag) => tag.startsWith("<title"))) {
        elements.push(`<title ${this.provider.preferredAttribute()}>${this.title}</title>`);
      }
      return elements;
    },
    renderNodes(nodes) {
      const elements = nodes.flatMap((node) => this.resolveNode(node)).map((node) => this.renderTag(node)).filter((node) => node);
      return this.addTitleElement(elements);
    },
    resolveNode(node) {
      if (this.isFunctionNode(node)) {
        return this.resolveNode(node.type());
      } else if (this.isComponentNode(node)) {
        console.warn(`Using components in the <Head> component is not supported.`);
        return [];
      } else if (this.isTextNode(node) && node.children) {
        return node;
      } else if (this.isFragmentNode(node) && node.children) {
        return node.children.flatMap((child) => this.resolveNode(child));
      } else if (this.isCommentNode(node)) {
        return [];
      } else {
        return node;
      }
    }
  },
  render() {
    this.provider.update(this.renderNodes(this.$slots.default ? this.$slots.default() : []));
  }
});
var head_default = Head;
var resolveHTMLElement = (value, fallback) => {
  if (!value) {
    return fallback;
  }
  if (typeof value === "string") {
    return document.querySelector(value);
  }
  if (typeof value === "function") {
    return value() || null;
  }
  return fallback;
};
vueExports.defineComponent({
  name: "InfiniteScroll",
  slots: Object,
  props: {
    data: {
      type: String,
      required: true
    },
    buffer: {
      type: Number,
      default: 0
    },
    onlyNext: {
      type: Boolean,
      default: false
    },
    onlyPrevious: {
      type: Boolean,
      default: false
    },
    as: {
      type: String,
      default: "div"
    },
    manual: {
      type: Boolean,
      default: false
    },
    manualAfter: {
      type: Number,
      default: 0
    },
    preserveUrl: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    },
    autoScroll: {
      type: Boolean,
      default: void 0
    },
    itemsElement: {
      type: [String, Function, Object],
      default: null
    },
    startElement: {
      type: [String, Function, Object],
      default: null
    },
    endElement: {
      type: [String, Function, Object],
      default: null
    }
  },
  inheritAttrs: false,
  setup(props, { slots, attrs, expose }) {
    const itemsElementRef = vueExports.ref(null);
    const startElementRef = vueExports.ref(null);
    const endElementRef = vueExports.ref(null);
    const itemsElement = vueExports.computed(
      () => resolveHTMLElement(props.itemsElement, itemsElementRef.value)
    );
    const scrollableParent = vueExports.computed(() => getScrollableParent(itemsElement.value));
    const startElement = vueExports.computed(
      () => resolveHTMLElement(props.startElement, startElementRef.value)
    );
    const endElement = vueExports.computed(() => resolveHTMLElement(props.endElement, endElementRef.value));
    const loadingPrevious = vueExports.ref(false);
    const loadingNext = vueExports.ref(false);
    const requestCount = vueExports.ref(0);
    const hasPreviousPage = vueExports.ref(false);
    const hasNextPage = vueExports.ref(false);
    const syncStateFromDataManager = () => {
      requestCount.value = dataManager.getRequestCount();
      hasPreviousPage.value = dataManager.hasPrevious();
      hasNextPage.value = dataManager.hasNext();
    };
    const {
      dataManager,
      elementManager,
      flush: flushInfiniteScroll
    } = useInfiniteScroll({
      // Data
      getPropName: () => props.data,
      inReverseMode: () => props.reverse,
      shouldFetchNext: () => !props.onlyPrevious,
      shouldFetchPrevious: () => !props.onlyNext,
      shouldPreserveUrl: () => props.preserveUrl,
      // Elements
      getTriggerMargin: () => props.buffer,
      getStartElement: () => startElement.value,
      getEndElement: () => endElement.value,
      getItemsElement: () => itemsElement.value,
      getScrollableParent: () => scrollableParent.value,
      // Request callbacks
      onBeforePreviousRequest: () => loadingPrevious.value = true,
      onBeforeNextRequest: () => loadingNext.value = true,
      onCompletePreviousRequest: () => {
        loadingPrevious.value = false;
        syncStateFromDataManager();
      },
      onCompleteNextRequest: () => {
        loadingNext.value = false;
        syncStateFromDataManager();
      },
      onDataReset: syncStateFromDataManager
    });
    syncStateFromDataManager();
    const autoLoad = vueExports.computed(() => !manualMode.value);
    const manualMode = vueExports.computed(
      () => props.manual || props.manualAfter > 0 && requestCount.value >= props.manualAfter
    );
    const scrollToBottom = () => {
      if (scrollableParent.value) {
        scrollableParent.value.scrollTo({
          top: scrollableParent.value.scrollHeight,
          behavior: "instant"
        });
      } else {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "instant"
        });
      }
    };
    vueExports.onMounted(() => {
      elementManager.setupObservers();
      elementManager.processServerLoadedElements(dataManager.getLastLoadedPage());
      const shouldAutoScroll = props.autoScroll !== void 0 ? props.autoScroll : props.reverse;
      if (shouldAutoScroll) {
        scrollToBottom();
      }
      if (autoLoad.value) {
        elementManager.enableTriggers();
      }
    });
    vueExports.onUnmounted(flushInfiniteScroll);
    vueExports.watch(
      () => [autoLoad.value, props.onlyNext, props.onlyPrevious],
      ([enabled]) => {
        enabled ? elementManager.enableTriggers() : elementManager.disableTriggers();
      }
    );
    expose({
      fetchNext: dataManager.fetchNext,
      fetchPrevious: dataManager.fetchPrevious,
      hasPrevious: dataManager.hasPrevious,
      hasNext: dataManager.hasNext
    });
    return () => {
      var _a, _b, _c;
      const renderElements = [];
      const sharedExposed = {
        loadingPrevious: loadingPrevious.value,
        loadingNext: loadingNext.value,
        hasPrevious: hasPreviousPage.value,
        hasNext: hasNextPage.value
      };
      if (!props.startElement) {
        const headerAutoMode = autoLoad.value && !props.onlyNext;
        const exposedPrevious = {
          loading: loadingPrevious.value,
          fetch: dataManager.fetchPrevious,
          autoMode: headerAutoMode,
          manualMode: !headerAutoMode,
          hasMore: hasPreviousPage.value,
          ...sharedExposed
        };
        renderElements.push(
          vueExports.h(
            "div",
            { ref: startElementRef },
            slots.previous ? slots.previous(exposedPrevious) : loadingPrevious.value ? (_a = slots.loading) == null ? void 0 : _a.call(slots, exposedPrevious) : void 0
          )
        );
      }
      renderElements.push(
        vueExports.h(
          props.as,
          { ...attrs, ref: itemsElementRef },
          (_b = slots.default) == null ? void 0 : _b.call(slots, {
            loading: loadingPrevious.value || loadingNext.value,
            loadingPrevious: loadingPrevious.value,
            loadingNext: loadingNext.value
          })
        )
      );
      if (!props.endElement) {
        const footerAutoMode = autoLoad.value && !props.onlyPrevious;
        const exposedNext = {
          loading: loadingNext.value,
          fetch: dataManager.fetchNext,
          autoMode: footerAutoMode,
          manualMode: !footerAutoMode,
          hasMore: hasNextPage.value,
          ...sharedExposed
        };
        renderElements.push(
          vueExports.h(
            "div",
            { ref: endElementRef },
            slots.next ? slots.next(exposedNext) : loadingNext.value ? (_c = slots.loading) == null ? void 0 : _c.call(slots, exposedNext) : void 0
          )
        );
      }
      return vueExports.h(vueExports.Fragment, {}, props.reverse ? [...renderElements].reverse() : renderElements);
    };
  }
});
var noop2 = () => {
};
var Link = vueExports.defineComponent({
  name: "Link",
  props: {
    as: {
      type: [String, Object],
      default: "a"
    },
    data: {
      type: Object,
      default: () => ({})
    },
    href: {
      type: [String, Object],
      default: ""
    },
    method: {
      type: String,
      default: "get"
    },
    replace: {
      type: Boolean,
      default: false
    },
    preserveScroll: {
      type: [Boolean, String, Function],
      default: false
    },
    preserveState: {
      type: [Boolean, String, Function],
      default: null
    },
    preserveUrl: {
      type: Boolean,
      default: false
    },
    only: {
      type: Array,
      default: () => []
    },
    except: {
      type: Array,
      default: () => []
    },
    headers: {
      type: Object,
      default: () => ({})
    },
    queryStringArrayFormat: {
      type: String,
      default: "brackets"
    },
    async: {
      type: Boolean,
      default: false
    },
    prefetch: {
      type: [Boolean, String, Array],
      default: false
    },
    cacheFor: {
      type: [Number, String, Array],
      default: 0
    },
    onStart: {
      type: Function,
      default: noop2
    },
    onProgress: {
      type: Function,
      default: noop2
    },
    onFinish: {
      type: Function,
      default: noop2
    },
    onBefore: {
      type: Function,
      default: noop2
    },
    onCancel: {
      type: Function,
      default: noop2
    },
    onSuccess: {
      type: Function,
      default: noop2
    },
    onError: {
      type: Function,
      default: noop2
    },
    onCancelToken: {
      type: Function,
      default: noop2
    },
    onPrefetching: {
      type: Function,
      default: noop2
    },
    onPrefetched: {
      type: Function,
      default: noop2
    },
    cacheTags: {
      type: [String, Array],
      default: () => []
    },
    viewTransition: {
      type: [Boolean, Object],
      default: false
    }
  },
  setup(props, { slots, attrs }) {
    const inFlightCount = vueExports.ref(0);
    const hoverTimeout = vueExports.ref();
    const prefetchModes = vueExports.computed(() => {
      if (props.prefetch === true) {
        return ["hover"];
      }
      if (props.prefetch === false) {
        return [];
      }
      if (Array.isArray(props.prefetch)) {
        return props.prefetch;
      }
      return [props.prefetch];
    });
    const cacheForValue = vueExports.computed(() => {
      if (props.cacheFor !== 0) {
        return props.cacheFor;
      }
      if (prefetchModes.value.length === 1 && prefetchModes.value[0] === "click") {
        return 0;
      }
      return config.get("prefetch.cacheFor");
    });
    vueExports.onMounted(() => {
      if (prefetchModes.value.includes("mount")) {
        prefetch();
      }
    });
    vueExports.onUnmounted(() => {
      clearTimeout(hoverTimeout.value);
    });
    const method = vueExports.computed(
      () => isUrlMethodPair(props.href) ? props.href.method : (props.method ?? "get").toLowerCase()
    );
    const as = vueExports.computed(() => {
      if (typeof props.as !== "string" || props.as.toLowerCase() !== "a") {
        return props.as;
      }
      return method.value !== "get" ? "button" : props.as.toLowerCase();
    });
    const mergeDataArray = vueExports.computed(
      () => mergeDataIntoQueryString(
        method.value,
        isUrlMethodPair(props.href) ? props.href.url : props.href,
        props.data || {},
        props.queryStringArrayFormat
      )
    );
    const href = vueExports.computed(() => mergeDataArray.value[0]);
    const data = vueExports.computed(() => mergeDataArray.value[1]);
    const elProps = vueExports.computed(() => {
      if (as.value === "button") {
        return { type: "button" };
      }
      if (as.value === "a" || typeof as.value !== "string") {
        return { href: href.value };
      }
      return {};
    });
    const baseParams = vueExports.computed(() => ({
      data: data.value,
      method: method.value,
      replace: props.replace,
      preserveScroll: props.preserveScroll,
      preserveState: props.preserveState ?? method.value !== "get",
      preserveUrl: props.preserveUrl,
      only: props.only,
      except: props.except,
      headers: props.headers,
      async: props.async
    }));
    const visitParams = vueExports.computed(() => ({
      ...baseParams.value,
      viewTransition: props.viewTransition,
      onCancelToken: props.onCancelToken,
      onBefore: props.onBefore,
      onStart: (visit) => {
        var _a;
        inFlightCount.value++;
        (_a = props.onStart) == null ? void 0 : _a.call(props, visit);
      },
      onProgress: props.onProgress,
      onFinish: (visit) => {
        var _a;
        inFlightCount.value--;
        (_a = props.onFinish) == null ? void 0 : _a.call(props, visit);
      },
      onCancel: props.onCancel,
      onSuccess: props.onSuccess,
      onError: props.onError
    }));
    const prefetch = () => {
      router.prefetch(
        href.value,
        {
          ...baseParams.value,
          onPrefetching: props.onPrefetching,
          onPrefetched: props.onPrefetched
        },
        {
          cacheFor: cacheForValue.value,
          cacheTags: props.cacheTags
        }
      );
    };
    const regularEvents = {
      onClick: (event) => {
        if (shouldIntercept(event)) {
          event.preventDefault();
          router.visit(href.value, visitParams.value);
        }
      }
    };
    const prefetchHoverEvents = {
      onMouseenter: () => {
        hoverTimeout.value = setTimeout(() => {
          prefetch();
        }, config.get("prefetch.hoverDelay"));
      },
      onMouseleave: () => {
        clearTimeout(hoverTimeout.value);
      },
      onClick: regularEvents.onClick
    };
    const prefetchClickEvents = {
      onMousedown: (event) => {
        if (shouldIntercept(event)) {
          event.preventDefault();
          prefetch();
        }
      },
      onKeydown: (event) => {
        if (shouldNavigate(event)) {
          event.preventDefault();
          prefetch();
        }
      },
      onMouseup: (event) => {
        if (shouldIntercept(event)) {
          event.preventDefault();
          router.visit(href.value, visitParams.value);
        }
      },
      onKeyup: (event) => {
        if (shouldNavigate(event)) {
          event.preventDefault();
          router.visit(href.value, visitParams.value);
        }
      },
      onClick: (event) => {
        if (shouldIntercept(event)) {
          event.preventDefault();
        }
      }
    };
    return () => {
      return vueExports.h(
        as.value,
        {
          ...attrs,
          ...elProps.value,
          "data-loading": inFlightCount.value > 0 ? "" : void 0,
          ...(() => {
            if (prefetchModes.value.includes("hover")) {
              return prefetchHoverEvents;
            }
            if (prefetchModes.value.includes("click")) {
              return prefetchClickEvents;
            }
            return regularEvents;
          })()
        },
        slots
      );
    };
  }
});
var link_default = Link;
var whenVisible_default = vueExports.defineComponent({
  name: "WhenVisible",
  slots: Object,
  props: {
    data: {
      type: [String, Array]
    },
    params: {
      type: Object
    },
    buffer: {
      type: Number,
      default: 0
    },
    as: {
      type: String,
      default: "div"
    },
    always: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loaded: false,
      fetching: false,
      observer: null
    };
  },
  unmounted() {
    var _a;
    (_a = this.observer) == null ? void 0 : _a.disconnect();
  },
  computed: {
    keys() {
      return this.data ? Array.isArray(this.data) ? this.data : [this.data] : [];
    }
  },
  created() {
    const page2 = usePage();
    this.$watch(
      () => this.keys.map((key2) => page2.props[key2]),
      () => {
        const exists = this.keys.length > 0 && this.keys.every((key2) => page2.props[key2] !== void 0);
        this.loaded = exists;
        if (exists && !this.always) {
          return;
        }
        if (!this.observer || !exists) {
          this.$nextTick(this.registerObserver);
        }
      },
      { immediate: true }
    );
  },
  methods: {
    registerObserver() {
      var _a;
      (_a = this.observer) == null ? void 0 : _a.disconnect();
      this.observer = new IntersectionObserver(
        (entries) => {
          if (!entries[0].isIntersecting) {
            return;
          }
          if (this.fetching) {
            return;
          }
          if (!this.always && this.loaded) {
            return;
          }
          this.fetching = true;
          const reloadParams = this.getReloadParams();
          router.reload({
            ...reloadParams,
            onStart: (e2) => {
              var _a2;
              this.fetching = true;
              (_a2 = reloadParams.onStart) == null ? void 0 : _a2.call(reloadParams, e2);
            },
            onFinish: (e2) => {
              var _a2, _b;
              this.loaded = true;
              this.fetching = false;
              (_a2 = reloadParams.onFinish) == null ? void 0 : _a2.call(reloadParams, e2);
              if (!this.always) {
                (_b = this.observer) == null ? void 0 : _b.disconnect();
              }
            }
          });
        },
        {
          rootMargin: `${this.$props.buffer}px`
        }
      );
      this.observer.observe(this.$el.nextSibling);
    },
    getReloadParams() {
      const reloadParams = { ...this.$props.params };
      if (this.$props.data) {
        reloadParams.only = Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data];
      }
      return reloadParams;
    }
  },
  render() {
    const els = [];
    if (this.$props.always || !this.loaded) {
      els.push(vueExports.h(this.$props.as));
    }
    if (!this.loaded) {
      els.push(this.$slots.fallback ? this.$slots.fallback({}) : null);
    } else if (this.$slots.default) {
      els.push(this.$slots.default({ fetching: this.fetching }));
    }
    return els;
  }
});
var config = config$1.extend({});
var serverRenderer_cjs_prod = {};
/**
* @vue/server-renderer v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var hasRequiredServerRenderer_cjs_prod;
function requireServerRenderer_cjs_prod() {
  if (hasRequiredServerRenderer_cjs_prod) return serverRenderer_cjs_prod;
  hasRequiredServerRenderer_cjs_prod = 1;
  Object.defineProperty(serverRenderer_cjs_prod, "__esModule", { value: true });
  var Vue = requireVue_cjs_prod();
  var shared = require$$2;
  var compilerSsr = require$$2$1;
  function _interopNamespaceDefault(e2) {
    var n2 = /* @__PURE__ */ Object.create(null);
    if (e2) {
      for (var k in e2) {
        n2[k] = e2[k];
      }
    }
    n2.default = e2;
    return Object.freeze(n2);
  }
  var Vue__namespace = /* @__PURE__ */ _interopNamespaceDefault(Vue);
  const shouldIgnoreProp = /* @__PURE__ */ shared.makeMap(
    `,key,ref,innerHTML,textContent,ref_key,ref_for`
  );
  function ssrRenderAttrs(props, tag) {
    let ret = "";
    for (let key2 in props) {
      if (shouldIgnoreProp(key2) || shared.isOn(key2) || tag === "textarea" && key2 === "value" || // force as property (not rendered in SSR)
      key2.startsWith(".")) {
        continue;
      }
      const value = props[key2];
      if (key2.startsWith("^")) key2 = key2.slice(1);
      if (key2 === "class" || key2 === "className") {
        ret += ` class="${ssrRenderClass(value)}"`;
      } else if (key2 === "style") {
        ret += ` style="${ssrRenderStyle(value)}"`;
      } else {
        ret += ssrRenderDynamicAttr(key2, value, tag);
      }
    }
    return ret;
  }
  function ssrRenderDynamicAttr(key2, value, tag) {
    if (!shared.isRenderableAttrValue(value)) {
      return ``;
    }
    const attrKey = tag && (tag.indexOf("-") > 0 || shared.isSVGTag(tag)) ? key2 : shared.propsToAttrMap[key2] || key2.toLowerCase();
    if (shared.isBooleanAttr(attrKey)) {
      return shared.includeBooleanAttr(value) ? ` ${attrKey}` : ``;
    } else if (shared.isSSRSafeAttrName(attrKey)) {
      return value === "" ? ` ${attrKey}` : ` ${attrKey}="${shared.escapeHtml(value)}"`;
    } else {
      console.warn(
        `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${attrKey}`
      );
      return ``;
    }
  }
  function ssrRenderAttr(key2, value) {
    if (!shared.isRenderableAttrValue(value)) {
      return ``;
    }
    return ` ${key2}="${shared.escapeHtml(value)}"`;
  }
  function ssrRenderClass(raw) {
    return shared.escapeHtml(shared.normalizeClass(raw));
  }
  function ssrRenderStyle(raw) {
    if (!raw) {
      return "";
    }
    if (shared.isString(raw)) {
      return shared.escapeHtml(raw);
    }
    const styles = shared.normalizeStyle(ssrResetCssVars(raw));
    return shared.escapeHtml(shared.stringifyStyle(styles));
  }
  function ssrResetCssVars(raw) {
    if (!shared.isArray(raw) && shared.isObject(raw)) {
      const res = {};
      for (const key2 in raw) {
        if (key2.startsWith(":--")) {
          res[key2.slice(1)] = shared.normalizeCssVarValue(raw[key2]);
        } else {
          res[key2] = raw[key2];
        }
      }
      return res;
    }
    return raw;
  }
  function ssrRenderComponent(comp, props = null, children = null, parentComponent = null, slotScopeId) {
    return renderComponentVNode(
      Vue.createVNode(comp, props, children),
      parentComponent,
      slotScopeId
    );
  }
  const { ensureValidVNode } = Vue.ssrUtils;
  function ssrRenderSlot(slots, slotName, slotProps, fallbackRenderFn, push, parentComponent, slotScopeId) {
    push(`<!--[-->`);
    ssrRenderSlotInner(
      slots,
      slotName,
      slotProps,
      fallbackRenderFn,
      push,
      parentComponent,
      slotScopeId
    );
    push(`<!--]-->`);
  }
  function ssrRenderSlotInner(slots, slotName, slotProps, fallbackRenderFn, push, parentComponent, slotScopeId, transition) {
    const slotFn = slots[slotName];
    if (slotFn) {
      const slotBuffer = [];
      const bufferedPush = (item) => {
        slotBuffer.push(item);
      };
      const ret = slotFn(
        slotProps,
        bufferedPush,
        parentComponent,
        slotScopeId ? " " + slotScopeId : ""
      );
      if (shared.isArray(ret)) {
        const validSlotContent = ensureValidVNode(ret);
        if (validSlotContent) {
          renderVNodeChildren(
            push,
            validSlotContent,
            parentComponent,
            slotScopeId
          );
        } else if (fallbackRenderFn) {
          fallbackRenderFn();
        } else if (transition) {
          push(`<!---->`);
        }
      } else {
        let isEmptySlot = true;
        if (transition) {
          isEmptySlot = false;
        } else {
          for (let i2 = 0; i2 < slotBuffer.length; i2++) {
            if (!isComment(slotBuffer[i2])) {
              isEmptySlot = false;
              break;
            }
          }
        }
        if (isEmptySlot) {
          if (fallbackRenderFn) {
            fallbackRenderFn();
          }
        } else {
          let start = 0;
          let end = slotBuffer.length;
          if (transition && slotBuffer[0] === "<!--[-->" && slotBuffer[end - 1] === "<!--]-->") {
            start++;
            end--;
          }
          if (start < end) {
            for (let i2 = start; i2 < end; i2++) {
              push(slotBuffer[i2]);
            }
          } else if (transition) {
            push(`<!---->`);
          }
        }
      }
    } else if (fallbackRenderFn) {
      fallbackRenderFn();
    } else if (transition) {
      push(`<!---->`);
    }
  }
  const commentTestRE = /^<!--[\s\S]*-->$/;
  const commentRE = /<!--[^]*?-->/gm;
  function isComment(item) {
    if (typeof item !== "string" || !commentTestRE.test(item)) return false;
    if (item.length <= 8) return true;
    return !item.replace(commentRE, "").trim();
  }
  function ssrRenderTeleport(parentPush, contentRenderFn, target, disabled, parentComponent) {
    parentPush("<!--teleport start-->");
    const context = parentComponent.appContext.provides[Vue.ssrContextKey];
    const teleportBuffers = context.__teleportBuffers || (context.__teleportBuffers = {});
    const targetBuffer = teleportBuffers[target] || (teleportBuffers[target] = []);
    const bufferIndex = targetBuffer.length;
    let teleportContent;
    if (disabled) {
      contentRenderFn(parentPush);
      teleportContent = `<!--teleport start anchor--><!--teleport anchor-->`;
    } else {
      const { getBuffer, push } = createBuffer();
      push(`<!--teleport start anchor-->`);
      contentRenderFn(push);
      push(`<!--teleport anchor-->`);
      teleportContent = getBuffer();
    }
    targetBuffer.splice(bufferIndex, 0, teleportContent);
    parentPush("<!--teleport end-->");
  }
  function ssrInterpolate(value) {
    return shared.escapeHtml(shared.toDisplayString(value));
  }
  function ssrRenderList(source, renderItem) {
    if (shared.isArray(source) || shared.isString(source)) {
      for (let i2 = 0, l2 = source.length; i2 < l2; i2++) {
        renderItem(source[i2], i2);
      }
    } else if (typeof source === "number") {
      for (let i2 = 0; i2 < source; i2++) {
        renderItem(i2 + 1, i2);
      }
    } else if (shared.isObject(source)) {
      if (source[Symbol.iterator]) {
        const arr = Array.from(source);
        for (let i2 = 0, l2 = arr.length; i2 < l2; i2++) {
          renderItem(arr[i2], i2);
        }
      } else {
        const keys = Object.keys(source);
        for (let i2 = 0, l2 = keys.length; i2 < l2; i2++) {
          const key2 = keys[i2];
          renderItem(source[key2], key2, i2);
        }
      }
    }
  }
  async function ssrRenderSuspense(push, { default: renderContent }) {
    if (renderContent) {
      renderContent();
    } else {
      push(`<!---->`);
    }
  }
  function ssrGetDirectiveProps(instance, dir, value, arg, modifiers = {}) {
    if (typeof dir !== "function" && dir.getSSRProps) {
      return dir.getSSRProps(
        {
          dir,
          instance: Vue.ssrUtils.getComponentPublicInstance(instance.$),
          value,
          oldValue: void 0,
          arg,
          modifiers
        },
        null
      ) || {};
    }
    return {};
  }
  const ssrLooseEqual = shared.looseEqual;
  function ssrLooseContain(arr, value) {
    return shared.looseIndexOf(arr, value) > -1;
  }
  function ssrRenderDynamicModel(type, model, value) {
    switch (type) {
      case "radio":
        return shared.looseEqual(model, value) ? " checked" : "";
      case "checkbox":
        return (shared.isArray(model) ? ssrLooseContain(model, value) : model) ? " checked" : "";
      default:
        return ssrRenderAttr("value", model);
    }
  }
  function ssrGetDynamicModelProps(existingProps = {}, model) {
    const { type, value } = existingProps;
    switch (type) {
      case "radio":
        return shared.looseEqual(model, value) ? { checked: true } : null;
      case "checkbox":
        return (shared.isArray(model) ? ssrLooseContain(model, value) : model) ? { checked: true } : null;
      default:
        return { value: model };
    }
  }
  var helpers = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    ssrGetDirectiveProps,
    ssrGetDynamicModelProps,
    ssrIncludeBooleanAttr: shared.includeBooleanAttr,
    ssrInterpolate,
    ssrLooseContain,
    ssrLooseEqual,
    ssrRenderAttr,
    ssrRenderAttrs,
    ssrRenderClass,
    ssrRenderComponent,
    ssrRenderDynamicAttr,
    ssrRenderDynamicModel,
    ssrRenderList,
    ssrRenderSlot,
    ssrRenderSlotInner,
    ssrRenderStyle,
    ssrRenderSuspense,
    ssrRenderTeleport,
    ssrRenderVNode: renderVNode
  });
  const compileCache = /* @__PURE__ */ Object.create(null);
  function ssrCompile(template, instance) {
    const Component = instance.type;
    const { isCustomElement, compilerOptions } = instance.appContext.config;
    const { delimiters, compilerOptions: componentCompilerOptions } = Component;
    const finalCompilerOptions = shared.extend(
      shared.extend(
        {
          isCustomElement,
          delimiters
        },
        compilerOptions
      ),
      componentCompilerOptions
    );
    finalCompilerOptions.isCustomElement = finalCompilerOptions.isCustomElement || shared.NO;
    finalCompilerOptions.isNativeTag = finalCompilerOptions.isNativeTag || shared.NO;
    const cacheKey = JSON.stringify(
      {
        template,
        compilerOptions: finalCompilerOptions
      },
      (key2, value) => {
        return shared.isFunction(value) ? value.toString() : value;
      }
    );
    const cached = compileCache[cacheKey];
    if (cached) {
      return cached;
    }
    finalCompilerOptions.onError = (err) => {
      {
        throw err;
      }
    };
    const { code } = compilerSsr.compile(template, finalCompilerOptions);
    const requireMap = {
      vue: Vue__namespace,
      "vue/server-renderer": helpers
    };
    const fakeRequire = (id) => requireMap[id];
    return compileCache[cacheKey] = Function("require", code)(fakeRequire);
  }
  const {
    createComponentInstance,
    setCurrentRenderingInstance,
    setupComponent,
    renderComponentRoot,
    normalizeVNode,
    pushWarningContext,
    popWarningContext
  } = Vue.ssrUtils;
  function createBuffer() {
    let appendable = false;
    const buffer = [];
    return {
      getBuffer() {
        return buffer;
      },
      push(item) {
        const isStringItem = shared.isString(item);
        if (appendable && isStringItem) {
          buffer[buffer.length - 1] += item;
          return;
        }
        buffer.push(item);
        appendable = isStringItem;
        if (shared.isPromise(item) || shared.isArray(item) && item.hasAsync) {
          buffer.hasAsync = true;
        }
      }
    };
  }
  function renderComponentVNode(vnode, parentComponent = null, slotScopeId) {
    const instance = vnode.component = createComponentInstance(
      vnode,
      parentComponent,
      null
    );
    const res = setupComponent(
      instance,
      true
      /* isSSR */
    );
    const hasAsyncSetup = shared.isPromise(res);
    let prefetches = instance.sp;
    if (hasAsyncSetup || prefetches) {
      const p2 = Promise.resolve(res).then(() => {
        if (hasAsyncSetup) prefetches = instance.sp;
        if (prefetches) {
          return Promise.all(
            prefetches.map((prefetch) => prefetch.call(instance.proxy))
          );
        }
      }).catch(shared.NOOP);
      return p2.then(() => renderComponentSubTree(instance, slotScopeId));
    } else {
      return renderComponentSubTree(instance, slotScopeId);
    }
  }
  function renderComponentSubTree(instance, slotScopeId) {
    const comp = instance.type;
    const { getBuffer, push } = createBuffer();
    if (shared.isFunction(comp)) {
      let root = renderComponentRoot(instance);
      if (!comp.props) {
        for (const key2 in instance.attrs) {
          if (key2.startsWith(`data-v-`)) {
            (root.props || (root.props = {}))[key2] = ``;
          }
        }
      }
      renderVNode(push, instance.subTree = root, instance, slotScopeId);
    } else {
      if ((!instance.render || instance.render === shared.NOOP) && !instance.ssrRender && !comp.ssrRender && shared.isString(comp.template)) {
        comp.ssrRender = ssrCompile(comp.template, instance);
      }
      const ssrRender = instance.ssrRender || comp.ssrRender;
      if (ssrRender) {
        let attrs = instance.inheritAttrs !== false ? instance.attrs : void 0;
        let hasCloned = false;
        let cur = instance;
        while (true) {
          const scopeId = cur.vnode.scopeId;
          if (scopeId) {
            if (!hasCloned) {
              attrs = { ...attrs };
              hasCloned = true;
            }
            attrs[scopeId] = "";
          }
          const parent = cur.parent;
          if (parent && parent.subTree && parent.subTree === cur.vnode) {
            cur = parent;
          } else {
            break;
          }
        }
        if (slotScopeId) {
          if (!hasCloned) attrs = { ...attrs };
          const slotScopeIdList = slotScopeId.trim().split(" ");
          for (let i2 = 0; i2 < slotScopeIdList.length; i2++) {
            attrs[slotScopeIdList[i2]] = "";
          }
        }
        const prev = setCurrentRenderingInstance(instance);
        try {
          ssrRender(
            instance.proxy,
            push,
            instance,
            attrs,
            // compiler-optimized bindings
            instance.props,
            instance.setupState,
            instance.data,
            instance.ctx
          );
        } finally {
          setCurrentRenderingInstance(prev);
        }
      } else if (instance.render && instance.render !== shared.NOOP) {
        renderVNode(
          push,
          instance.subTree = renderComponentRoot(instance),
          instance,
          slotScopeId
        );
      } else {
        const componentName = comp.name || comp.__file || `<Anonymous>`;
        Vue.warn(`Component ${componentName} is missing template or render function.`);
        push(`<!---->`);
      }
    }
    return getBuffer();
  }
  function renderVNode(push, vnode, parentComponent, slotScopeId) {
    const { type, shapeFlag, children, dirs, props } = vnode;
    if (dirs) {
      vnode.props = applySSRDirectives(vnode, props, dirs);
    }
    switch (type) {
      case Vue.Text:
        push(shared.escapeHtml(children));
        break;
      case Vue.Comment:
        push(
          children ? `<!--${shared.escapeHtmlComment(children)}-->` : `<!---->`
        );
        break;
      case Vue.Static:
        push(children);
        break;
      case Vue.Fragment:
        if (vnode.slotScopeIds) {
          slotScopeId = (slotScopeId ? slotScopeId + " " : "") + vnode.slotScopeIds.join(" ");
        }
        push(`<!--[-->`);
        renderVNodeChildren(
          push,
          children,
          parentComponent,
          slotScopeId
        );
        push(`<!--]-->`);
        break;
      default:
        if (shapeFlag & 1) {
          renderElementVNode(push, vnode, parentComponent, slotScopeId);
        } else if (shapeFlag & 6) {
          push(renderComponentVNode(vnode, parentComponent, slotScopeId));
        } else if (shapeFlag & 64) {
          renderTeleportVNode(push, vnode, parentComponent, slotScopeId);
        } else if (shapeFlag & 128) {
          renderVNode(push, vnode.ssContent, parentComponent, slotScopeId);
        } else {
          Vue.warn(
            "[@vue/server-renderer] Invalid VNode type:",
            type,
            `(${typeof type})`
          );
        }
    }
  }
  function renderVNodeChildren(push, children, parentComponent, slotScopeId) {
    for (let i2 = 0; i2 < children.length; i2++) {
      renderVNode(push, normalizeVNode(children[i2]), parentComponent, slotScopeId);
    }
  }
  function renderElementVNode(push, vnode, parentComponent, slotScopeId) {
    const tag = vnode.type;
    let { props, children, shapeFlag, scopeId } = vnode;
    let openTag = `<${tag}`;
    if (props) {
      openTag += ssrRenderAttrs(props, tag);
    }
    if (scopeId) {
      openTag += ` ${scopeId}`;
    }
    let curParent = parentComponent;
    let curVnode = vnode;
    while (curParent && curVnode === curParent.subTree) {
      curVnode = curParent.vnode;
      if (curVnode.scopeId) {
        openTag += ` ${curVnode.scopeId}`;
      }
      curParent = curParent.parent;
    }
    if (slotScopeId) {
      openTag += ` ${slotScopeId}`;
    }
    push(openTag + `>`);
    if (!shared.isVoidTag(tag)) {
      let hasChildrenOverride = false;
      if (props) {
        if (props.innerHTML) {
          hasChildrenOverride = true;
          push(props.innerHTML);
        } else if (props.textContent) {
          hasChildrenOverride = true;
          push(shared.escapeHtml(props.textContent));
        } else if (tag === "textarea" && props.value) {
          hasChildrenOverride = true;
          push(shared.escapeHtml(props.value));
        }
      }
      if (!hasChildrenOverride) {
        if (shapeFlag & 8) {
          push(shared.escapeHtml(children));
        } else if (shapeFlag & 16) {
          renderVNodeChildren(
            push,
            children,
            parentComponent,
            slotScopeId
          );
        }
      }
      push(`</${tag}>`);
    }
  }
  function applySSRDirectives(vnode, rawProps, dirs) {
    const toMerge = [];
    for (let i2 = 0; i2 < dirs.length; i2++) {
      const binding = dirs[i2];
      const {
        dir: { getSSRProps }
      } = binding;
      if (getSSRProps) {
        const props = getSSRProps(binding, vnode);
        if (props) toMerge.push(props);
      }
    }
    return Vue.mergeProps(rawProps || {}, ...toMerge);
  }
  function renderTeleportVNode(push, vnode, parentComponent, slotScopeId) {
    const target = vnode.props && vnode.props.to;
    const disabled = vnode.props && vnode.props.disabled;
    if (!target) {
      if (!disabled) {
        Vue.warn(`[@vue/server-renderer] Teleport is missing target prop.`);
      }
      return [];
    }
    if (!shared.isString(target)) {
      Vue.warn(
        `[@vue/server-renderer] Teleport target must be a query selector string.`
      );
      return [];
    }
    ssrRenderTeleport(
      push,
      (push2) => {
        renderVNodeChildren(
          push2,
          vnode.children,
          parentComponent,
          slotScopeId
        );
      },
      target,
      disabled || disabled === "",
      parentComponent
    );
  }
  const { isVNode: isVNode$1 } = Vue.ssrUtils;
  function nestedUnrollBuffer(buffer, parentRet, startIndex) {
    if (!buffer.hasAsync) {
      return parentRet + unrollBufferSync$1(buffer);
    }
    let ret = parentRet;
    for (let i2 = startIndex; i2 < buffer.length; i2 += 1) {
      const item = buffer[i2];
      if (shared.isString(item)) {
        ret += item;
        continue;
      }
      if (shared.isPromise(item)) {
        return item.then((nestedItem) => {
          buffer[i2] = nestedItem;
          return nestedUnrollBuffer(buffer, ret, i2);
        });
      }
      const result = nestedUnrollBuffer(item, ret, 0);
      if (shared.isPromise(result)) {
        return result.then((nestedItem) => {
          buffer[i2] = nestedItem;
          return nestedUnrollBuffer(buffer, "", i2);
        });
      }
      ret = result;
    }
    return ret;
  }
  function unrollBuffer$1(buffer) {
    return nestedUnrollBuffer(buffer, "", 0);
  }
  function unrollBufferSync$1(buffer) {
    let ret = "";
    for (let i2 = 0; i2 < buffer.length; i2++) {
      let item = buffer[i2];
      if (shared.isString(item)) {
        ret += item;
      } else {
        ret += unrollBufferSync$1(item);
      }
    }
    return ret;
  }
  async function renderToString(input, context = {}) {
    if (isVNode$1(input)) {
      return renderToString(Vue.createApp({ render: () => input }), context);
    }
    const vnode = Vue.createVNode(input._component, input._props);
    vnode.appContext = input._context;
    input.provide(Vue.ssrContextKey, context);
    const buffer = await renderComponentVNode(vnode);
    const result = await unrollBuffer$1(buffer);
    await resolveTeleports(context);
    if (context.__watcherHandles) {
      for (const unwatch of context.__watcherHandles) {
        unwatch();
      }
    }
    return result;
  }
  async function resolveTeleports(context) {
    if (context.__teleportBuffers) {
      context.teleports = context.teleports || {};
      for (const key2 in context.__teleportBuffers) {
        context.teleports[key2] = await unrollBuffer$1(
          await Promise.all([context.__teleportBuffers[key2]])
        );
      }
    }
  }
  const { isVNode } = Vue.ssrUtils;
  async function unrollBuffer(buffer, stream) {
    if (buffer.hasAsync) {
      for (let i2 = 0; i2 < buffer.length; i2++) {
        let item = buffer[i2];
        if (shared.isPromise(item)) {
          item = await item;
        }
        if (shared.isString(item)) {
          stream.push(item);
        } else {
          await unrollBuffer(item, stream);
        }
      }
    } else {
      unrollBufferSync(buffer, stream);
    }
  }
  function unrollBufferSync(buffer, stream) {
    for (let i2 = 0; i2 < buffer.length; i2++) {
      let item = buffer[i2];
      if (shared.isString(item)) {
        stream.push(item);
      } else {
        unrollBufferSync(item, stream);
      }
    }
  }
  function renderToSimpleStream(input, context, stream) {
    if (isVNode(input)) {
      return renderToSimpleStream(
        Vue.createApp({ render: () => input }),
        context,
        stream
      );
    }
    const vnode = Vue.createVNode(input._component, input._props);
    vnode.appContext = input._context;
    input.provide(Vue.ssrContextKey, context);
    Promise.resolve(renderComponentVNode(vnode)).then((buffer) => unrollBuffer(buffer, stream)).then(() => resolveTeleports(context)).then(() => {
      if (context.__watcherHandles) {
        for (const unwatch of context.__watcherHandles) {
          unwatch();
        }
      }
    }).then(() => stream.push(null)).catch((error) => {
      stream.destroy(error);
    });
    return stream;
  }
  function renderToStream(input, context = {}) {
    console.warn(
      `[@vue/server-renderer] renderToStream is deprecated - use renderToNodeStream instead.`
    );
    return renderToNodeStream(input, context);
  }
  function renderToNodeStream(input, context = {}) {
    const stream = new require$$3.Readable({ read() {
    } });
    if (!stream) {
      throw new Error(
        `ESM build of renderToStream() does not support renderToNodeStream(). Use pipeToNodeWritable() with an existing Node.js Writable stream instance instead.`
      );
    }
    return renderToSimpleStream(input, context, stream);
  }
  function pipeToNodeWritable(input, context = {}, writable) {
    renderToSimpleStream(input, context, {
      push(content) {
        if (content != null) {
          writable.write(content);
        } else {
          writable.end();
        }
      },
      destroy(err) {
        writable.destroy(err);
      }
    });
  }
  function renderToWebStream(input, context = {}) {
    if (typeof ReadableStream !== "function") {
      throw new Error(
        `ReadableStream constructor is not available in the global scope. If the target environment does support web streams, consider using pipeToWebWritable() with an existing WritableStream instance instead.`
      );
    }
    const encoder = new TextEncoder();
    let cancelled = false;
    return new ReadableStream({
      start(controller) {
        renderToSimpleStream(input, context, {
          push(content) {
            if (cancelled) return;
            if (content != null) {
              controller.enqueue(encoder.encode(content));
            } else {
              controller.close();
            }
          },
          destroy(err) {
            controller.error(err);
          }
        });
      },
      cancel() {
        cancelled = true;
      }
    });
  }
  function pipeToWebWritable(input, context = {}, writable) {
    const writer = writable.getWriter();
    const encoder = new TextEncoder();
    let hasReady = false;
    try {
      hasReady = shared.isPromise(writer.ready);
    } catch (e2) {
    }
    renderToSimpleStream(input, context, {
      async push(content) {
        if (hasReady) {
          await writer.ready;
        }
        if (content != null) {
          return writer.write(encoder.encode(content));
        } else {
          return writer.close();
        }
      },
      destroy(err) {
        console.log(err);
        writer.close();
      }
    });
  }
  Vue.initDirectivesForSSR();
  serverRenderer_cjs_prod.ssrIncludeBooleanAttr = shared.includeBooleanAttr;
  serverRenderer_cjs_prod.pipeToNodeWritable = pipeToNodeWritable;
  serverRenderer_cjs_prod.pipeToWebWritable = pipeToWebWritable;
  serverRenderer_cjs_prod.renderToNodeStream = renderToNodeStream;
  serverRenderer_cjs_prod.renderToSimpleStream = renderToSimpleStream;
  serverRenderer_cjs_prod.renderToStream = renderToStream;
  serverRenderer_cjs_prod.renderToString = renderToString;
  serverRenderer_cjs_prod.renderToWebStream = renderToWebStream;
  serverRenderer_cjs_prod.ssrGetDirectiveProps = ssrGetDirectiveProps;
  serverRenderer_cjs_prod.ssrGetDynamicModelProps = ssrGetDynamicModelProps;
  serverRenderer_cjs_prod.ssrInterpolate = ssrInterpolate;
  serverRenderer_cjs_prod.ssrLooseContain = ssrLooseContain;
  serverRenderer_cjs_prod.ssrLooseEqual = ssrLooseEqual;
  serverRenderer_cjs_prod.ssrRenderAttr = ssrRenderAttr;
  serverRenderer_cjs_prod.ssrRenderAttrs = ssrRenderAttrs;
  serverRenderer_cjs_prod.ssrRenderClass = ssrRenderClass;
  serverRenderer_cjs_prod.ssrRenderComponent = ssrRenderComponent;
  serverRenderer_cjs_prod.ssrRenderDynamicAttr = ssrRenderDynamicAttr;
  serverRenderer_cjs_prod.ssrRenderDynamicModel = ssrRenderDynamicModel;
  serverRenderer_cjs_prod.ssrRenderList = ssrRenderList;
  serverRenderer_cjs_prod.ssrRenderSlot = ssrRenderSlot;
  serverRenderer_cjs_prod.ssrRenderSlotInner = ssrRenderSlotInner;
  serverRenderer_cjs_prod.ssrRenderStyle = ssrRenderStyle;
  serverRenderer_cjs_prod.ssrRenderSuspense = ssrRenderSuspense;
  serverRenderer_cjs_prod.ssrRenderTeleport = ssrRenderTeleport;
  serverRenderer_cjs_prod.ssrRenderVNode = renderVNode;
  return serverRenderer_cjs_prod;
}
var serverRenderer_cjs_prodExports = requireServerRenderer_cjs_prod();
async function resolvePageComponent(path, pages) {
  for (const p2 of Array.isArray(path) ? path : [path]) {
    const page2 = pages[p2];
    if (typeof page2 === "undefined") {
      continue;
    }
    return typeof page2 === "function" ? page2() : page2;
  }
  throw new Error(`Page not found: ${path}`);
}
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t3) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var o2 = arguments[e2];
      for (var n2 in o2) ({}).hasOwnProperty.call(o2, n2) && (t3[n2] = o2[n2]);
    }
    return t3;
  }, t.apply(null, arguments);
}
const e = String.prototype.replace, o = /%20/g, n = { RFC1738: function(t3) {
  return e.call(t3, o, "+");
}, RFC3986: function(t3) {
  return String(t3);
} };
var r = "RFC3986";
const i = Object.prototype.hasOwnProperty, s = Array.isArray, u = (function() {
  const t3 = [];
  for (let e2 = 0; e2 < 256; ++e2) t3.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t3;
})(), l = function t2(e2, o2, n2) {
  if (!o2) return e2;
  if ("object" != typeof o2) {
    if (s(e2)) e2.push(o2);
    else {
      if (!e2 || "object" != typeof e2) return [e2, o2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, o2)) && (e2[o2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2) return [e2].concat(o2);
  let r2 = e2;
  return s(e2) && !s(o2) && (r2 = (function(t3, e3) {
    const o3 = e3 && e3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    for (let e4 = 0; e4 < t3.length; ++e4) void 0 !== t3[e4] && (o3[e4] = t3[e4]);
    return o3;
  })(e2, n2)), s(e2) && s(o2) ? (o2.forEach(function(o3, r3) {
    if (i.call(e2, r3)) {
      const i2 = e2[r3];
      i2 && "object" == typeof i2 && o3 && "object" == typeof o3 ? e2[r3] = t2(i2, o3, n2) : e2.push(o3);
    } else e2[r3] = o3;
  }), e2) : Object.keys(o2).reduce(function(e3, r3) {
    const s2 = o2[r3];
    return e3[r3] = i.call(e3, r3) ? t2(e3[r3], s2, n2) : s2, e3;
  }, r2);
}, c = 1024, a = function(t3, e2) {
  return [].concat(t3, e2);
}, f = function(t3, e2) {
  if (s(t3)) {
    const o2 = [];
    for (let n2 = 0; n2 < t3.length; n2 += 1) o2.push(e2(t3[n2]));
    return o2;
  }
  return e2(t3);
}, p = Object.prototype.hasOwnProperty, y = { brackets: function(t3) {
  return t3 + "[]";
}, comma: "comma", indices: function(t3, e2) {
  return t3 + "[" + e2 + "]";
}, repeat: function(t3) {
  return t3;
} }, d = Array.isArray, h = Array.prototype.push, b = function(t3, e2) {
  h.apply(t3, d(e2) ? e2 : [e2]);
}, m = Date.prototype.toISOString, g = { addQueryPrefix: false, allowDots: false, allowEmptyArrays: false, arrayFormat: "indices", charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encodeDotInKeys: false, encoder: function(t3, e2, o2, n2, r2) {
  if (0 === t3.length) return t3;
  let i2 = t3;
  if ("symbol" == typeof t3 ? i2 = Symbol.prototype.toString.call(t3) : "string" != typeof t3 && (i2 = String(t3)), "iso-8859-1" === o2) return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(t4) {
    return "%26%23" + parseInt(t4.slice(2), 16) + "%3B";
  });
  let s2 = "";
  for (let t4 = 0; t4 < i2.length; t4 += c) {
    const e3 = i2.length >= c ? i2.slice(t4, t4 + c) : i2, o3 = [];
    for (let t5 = 0; t5 < e3.length; ++t5) {
      let n3 = e3.charCodeAt(t5);
      45 === n3 || 46 === n3 || 95 === n3 || 126 === n3 || n3 >= 48 && n3 <= 57 || n3 >= 65 && n3 <= 90 || n3 >= 97 && n3 <= 122 || "RFC1738" === r2 && (40 === n3 || 41 === n3) ? o3[o3.length] = e3.charAt(t5) : n3 < 128 ? o3[o3.length] = u[n3] : n3 < 2048 ? o3[o3.length] = u[192 | n3 >> 6] + u[128 | 63 & n3] : n3 < 55296 || n3 >= 57344 ? o3[o3.length] = u[224 | n3 >> 12] + u[128 | n3 >> 6 & 63] + u[128 | 63 & n3] : (t5 += 1, n3 = 65536 + ((1023 & n3) << 10 | 1023 & e3.charCodeAt(t5)), o3[o3.length] = u[240 | n3 >> 18] + u[128 | n3 >> 12 & 63] + u[128 | n3 >> 6 & 63] + u[128 | 63 & n3]);
    }
    s2 += o3.join("");
  }
  return s2;
}, encodeValuesOnly: false, format: r, formatter: n[r], indices: false, serializeDate: function(t3) {
  return m.call(t3);
}, skipNulls: false, strictNullHandling: false }, w = {}, v = function(t3, e2, o2, n2, r2, i2, s2, u2, l2, c2, a2, p2, y2, h2, m2, j2, $2, E2) {
  let O2 = t3, T2 = E2, R2 = 0, S2 = false;
  for (; void 0 !== (T2 = T2.get(w)) && !S2; ) {
    const e3 = T2.get(t3);
    if (R2 += 1, void 0 !== e3) {
      if (e3 === R2) throw new RangeError("Cyclic object value");
      S2 = true;
    }
    void 0 === T2.get(w) && (R2 = 0);
  }
  if ("function" == typeof c2 ? O2 = c2(e2, O2) : O2 instanceof Date ? O2 = y2(O2) : "comma" === o2 && d(O2) && (O2 = f(O2, function(t4) {
    return t4 instanceof Date ? y2(t4) : t4;
  })), null === O2) {
    if (i2) return l2 && !j2 ? l2(e2, g.encoder, $2, "key", h2) : e2;
    O2 = "";
  }
  if ("string" == typeof (I2 = O2) || "number" == typeof I2 || "boolean" == typeof I2 || "symbol" == typeof I2 || "bigint" == typeof I2 || (function(t4) {
    return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
  })(O2)) return l2 ? [m2(j2 ? e2 : l2(e2, g.encoder, $2, "key", h2)) + "=" + m2(l2(O2, g.encoder, $2, "value", h2))] : [m2(e2) + "=" + m2(String(O2))];
  var I2;
  const A2 = [];
  if (void 0 === O2) return A2;
  let D2;
  if ("comma" === o2 && d(O2)) j2 && l2 && (O2 = f(O2, l2)), D2 = [{ value: O2.length > 0 ? O2.join(",") || null : void 0 }];
  else if (d(c2)) D2 = c2;
  else {
    const t4 = Object.keys(O2);
    D2 = a2 ? t4.sort(a2) : t4;
  }
  const _ = u2 ? e2.replace(/\./g, "%2E") : e2, k = n2 && d(O2) && 1 === O2.length ? _ + "[]" : _;
  if (r2 && d(O2) && 0 === O2.length) return k + "[]";
  for (let e3 = 0; e3 < D2.length; ++e3) {
    const f2 = D2[e3], g2 = "object" == typeof f2 && void 0 !== f2.value ? f2.value : O2[f2];
    if (s2 && null === g2) continue;
    const T3 = p2 && u2 ? f2.replace(/\./g, "%2E") : f2, S3 = d(O2) ? "function" == typeof o2 ? o2(k, T3) : k : k + (p2 ? "." + T3 : "[" + T3 + "]");
    E2.set(t3, R2);
    const I3 = /* @__PURE__ */ new WeakMap();
    I3.set(w, E2), b(A2, v(g2, S3, o2, n2, r2, i2, s2, u2, "comma" === o2 && j2 && d(O2) ? null : l2, c2, a2, p2, y2, h2, m2, j2, $2, I3));
  }
  return A2;
}, j = Object.prototype.hasOwnProperty, $ = Array.isArray, E = { allowDots: false, allowEmptyArrays: false, allowPrototypes: false, allowSparse: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decodeDotInKeys: false, decoder: function(t3, e2, o2) {
  const n2 = t3.replace(/\+/g, " ");
  if ("iso-8859-1" === o2) return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t4) {
    return n2;
  }
}, delimiter: "&", depth: 5, duplicates: "combine", ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t3) {
  return t3.replace(/&#(\d+);/g, function(t4, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, T = function(t3, e2) {
  return t3 && "string" == typeof t3 && e2.comma && t3.indexOf(",") > -1 ? t3.split(",") : t3;
}, R = function(t3, e2, o2, n2) {
  if (!t3) return;
  const r2 = o2.allowDots ? t3.replace(/\.([^.[]+)/g, "[$1]") : t3, i2 = /(\[[^[\]]*])/g;
  let s2 = o2.depth > 0 && /(\[[^[\]]*])/.exec(r2);
  const u2 = s2 ? r2.slice(0, s2.index) : r2, l2 = [];
  if (u2) {
    if (!o2.plainObjects && j.call(Object.prototype, u2) && !o2.allowPrototypes) return;
    l2.push(u2);
  }
  let c2 = 0;
  for (; o2.depth > 0 && null !== (s2 = i2.exec(r2)) && c2 < o2.depth; ) {
    if (c2 += 1, !o2.plainObjects && j.call(Object.prototype, s2[1].slice(1, -1)) && !o2.allowPrototypes) return;
    l2.push(s2[1]);
  }
  return s2 && l2.push("[" + r2.slice(s2.index) + "]"), (function(t4, e3, o3, n3) {
    let r3 = n3 ? e3 : T(e3, o3);
    for (let e4 = t4.length - 1; e4 >= 0; --e4) {
      let n4;
      const i3 = t4[e4];
      if ("[]" === i3 && o3.parseArrays) n4 = o3.allowEmptyArrays && "" === r3 ? [] : [].concat(r3);
      else {
        n4 = o3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        const t5 = "[" === i3.charAt(0) && "]" === i3.charAt(i3.length - 1) ? i3.slice(1, -1) : i3, e5 = o3.decodeDotInKeys ? t5.replace(/%2E/g, ".") : t5, s3 = parseInt(e5, 10);
        o3.parseArrays || "" !== e5 ? !isNaN(s3) && i3 !== e5 && String(s3) === e5 && s3 >= 0 && o3.parseArrays && s3 <= o3.arrayLimit ? (n4 = [], n4[s3] = r3) : "__proto__" !== e5 && (n4[e5] = r3) : n4 = { 0: r3 };
      }
      r3 = n4;
    }
    return r3;
  })(l2, e2, o2, n2);
};
function S(t3, e2) {
  const o2 = /* @__PURE__ */ (function(t4) {
    return E;
  })();
  if ("" === t3 || null == t3) return o2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  const n2 = "string" == typeof t3 ? (function(t4, e3) {
    const o3 = { __proto__: null }, n3 = (e3.ignoreQueryPrefix ? t4.replace(/^\?/, "") : t4).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit);
    let r3, i3 = -1, s2 = e3.charset;
    if (e3.charsetSentinel) for (r3 = 0; r3 < n3.length; ++r3) 0 === n3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === n3[r3] ? s2 = "utf-8" : "utf8=%26%2310003%3B" === n3[r3] && (s2 = "iso-8859-1"), i3 = r3, r3 = n3.length);
    for (r3 = 0; r3 < n3.length; ++r3) {
      if (r3 === i3) continue;
      const t5 = n3[r3], u2 = t5.indexOf("]="), l2 = -1 === u2 ? t5.indexOf("=") : u2 + 1;
      let c2, p2;
      -1 === l2 ? (c2 = e3.decoder(t5, E.decoder, s2, "key"), p2 = e3.strictNullHandling ? null : "") : (c2 = e3.decoder(t5.slice(0, l2), E.decoder, s2, "key"), p2 = f(T(t5.slice(l2 + 1), e3), function(t6) {
        return e3.decoder(t6, E.decoder, s2, "value");
      })), p2 && e3.interpretNumericEntities && "iso-8859-1" === s2 && (p2 = O(p2)), t5.indexOf("[]=") > -1 && (p2 = $(p2) ? [p2] : p2);
      const y2 = j.call(o3, c2);
      y2 && "combine" === e3.duplicates ? o3[c2] = a(o3[c2], p2) : y2 && "last" !== e3.duplicates || (o3[c2] = p2);
    }
    return o3;
  })(t3, o2) : t3;
  let r2 = o2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  const i2 = Object.keys(n2);
  for (let e3 = 0; e3 < i2.length; ++e3) {
    const s2 = i2[e3], u2 = R(s2, n2[s2], o2, "string" == typeof t3);
    r2 = l(r2, u2, o2);
  }
  return true === o2.allowSparse ? r2 : (function(t4) {
    const e3 = [{ obj: { o: t4 }, prop: "o" }], o3 = [];
    for (let t5 = 0; t5 < e3.length; ++t5) {
      const n3 = e3[t5], r3 = n3.obj[n3.prop], i3 = Object.keys(r3);
      for (let t6 = 0; t6 < i3.length; ++t6) {
        const n4 = i3[t6], s2 = r3[n4];
        "object" == typeof s2 && null !== s2 && -1 === o3.indexOf(s2) && (e3.push({ obj: r3, prop: n4 }), o3.push(s2));
      }
    }
    return (function(t5) {
      for (; t5.length > 1; ) {
        const e4 = t5.pop(), o4 = e4.obj[e4.prop];
        if (s(o4)) {
          const t6 = [];
          for (let e5 = 0; e5 < o4.length; ++e5) void 0 !== o4[e5] && t6.push(o4[e5]);
          e4.obj[e4.prop] = t6;
        }
      }
    })(e3), t4;
  })(r2);
}
class I {
  constructor(t3, e2, o2) {
    var n2, r2;
    this.name = t3, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (r2 = e2.wheres) ? r2 : {}, this.config = o2;
  }
  get template() {
    const t3 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t3 ? "/" : t3;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t3, e2;
    return null != (t3 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t4) => ({ name: t4.replace(/{|\??}/g, ""), required: !/\?}$/.test(t4) }))) ? t3 : [];
  }
  matchesUrl(t3) {
    var e2;
    if (!this.definition.methods.includes("GET")) return false;
    const o2 = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, (t4, e3, o3, n3) => {
      var r3;
      const i3 = `(?<${o3}>${(null == (r3 = this.wheres[o3]) ? void 0 : r3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i3})?` : `${e3}${i3}`;
    }).replace(/^\w+:\/\//, ""), [n2, r2] = t3.replace(/^\w+:\/\//, "").split("?"), i2 = null != (e2 = new RegExp(`^${o2}/?$`).exec(n2)) ? e2 : new RegExp(`^${o2}/?$`).exec(decodeURI(n2));
    if (i2) {
      for (const t4 in i2.groups) i2.groups[t4] = "string" == typeof i2.groups[t4] ? decodeURIComponent(i2.groups[t4]) : i2.groups[t4];
      return { params: i2.groups, query: S(r2) };
    }
    return false;
  }
  compile(t3) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, o2, n2) => {
      var r2, i2;
      if (!n2 && [null, void 0].includes(t3[o2])) throw new Error(`Ziggy error: '${o2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[o2] && !new RegExp(`^${n2 ? `(${this.wheres[o2]})?` : this.wheres[o2]}$`).test(null != (i2 = t3[o2]) ? i2 : "")) throw new Error(`Ziggy error: '${o2}' parameter '${t3[o2]}' does not match required format '${this.wheres[o2]}' for route '${this.name}'.`);
      return encodeURI(null != (r2 = t3[o2]) ? r2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class A extends String {
  constructor(e2, o2, n2 = true, r2) {
    if (super(), this.t = null != r2 ? r2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, !this.t && "undefined" != typeof document && document.getElementById("ziggy-routes-json") && (globalThis.Ziggy = JSON.parse(document.getElementById("ziggy-routes-json").textContent), this.t = globalThis.Ziggy), this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2]) throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new I(e2, this.t.routes[e2], this.t), this.u = this.l(o2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t3) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t3)).filter((t3) => "_query" !== t3).reduce((e3, o2) => t({}, e3, { [o2]: this.u[o2] }), {});
    return this.i.compile(this.u) + (function(t3, e3) {
      let o2 = t3;
      const i2 = (function(t4) {
        if (!t4) return g;
        if (void 0 !== t4.allowEmptyArrays && "boolean" != typeof t4.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        if (void 0 !== t4.encodeDotInKeys && "boolean" != typeof t4.encodeDotInKeys) throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
        if (null != t4.encoder && "function" != typeof t4.encoder) throw new TypeError("Encoder has to be a function.");
        const e4 = t4.charset || g.charset;
        if (void 0 !== t4.charset && "utf-8" !== t4.charset && "iso-8859-1" !== t4.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        let o3 = r;
        if (void 0 !== t4.format) {
          if (!p.call(n, t4.format)) throw new TypeError("Unknown format option provided.");
          o3 = t4.format;
        }
        const i3 = n[o3];
        let s3, u3 = g.filter;
        if (("function" == typeof t4.filter || d(t4.filter)) && (u3 = t4.filter), s3 = t4.arrayFormat in y ? t4.arrayFormat : "indices" in t4 ? t4.indices ? "indices" : "repeat" : g.arrayFormat, "commaRoundTrip" in t4 && "boolean" != typeof t4.commaRoundTrip) throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        return { addQueryPrefix: "boolean" == typeof t4.addQueryPrefix ? t4.addQueryPrefix : g.addQueryPrefix, allowDots: void 0 === t4.allowDots ? true === t4.encodeDotInKeys || g.allowDots : !!t4.allowDots, allowEmptyArrays: "boolean" == typeof t4.allowEmptyArrays ? !!t4.allowEmptyArrays : g.allowEmptyArrays, arrayFormat: s3, charset: e4, charsetSentinel: "boolean" == typeof t4.charsetSentinel ? t4.charsetSentinel : g.charsetSentinel, commaRoundTrip: t4.commaRoundTrip, delimiter: void 0 === t4.delimiter ? g.delimiter : t4.delimiter, encode: "boolean" == typeof t4.encode ? t4.encode : g.encode, encodeDotInKeys: "boolean" == typeof t4.encodeDotInKeys ? t4.encodeDotInKeys : g.encodeDotInKeys, encoder: "function" == typeof t4.encoder ? t4.encoder : g.encoder, encodeValuesOnly: "boolean" == typeof t4.encodeValuesOnly ? t4.encodeValuesOnly : g.encodeValuesOnly, filter: u3, format: o3, formatter: i3, serializeDate: "function" == typeof t4.serializeDate ? t4.serializeDate : g.serializeDate, skipNulls: "boolean" == typeof t4.skipNulls ? t4.skipNulls : g.skipNulls, sort: "function" == typeof t4.sort ? t4.sort : null, strictNullHandling: "boolean" == typeof t4.strictNullHandling ? t4.strictNullHandling : g.strictNullHandling };
      })(e3);
      let s2, u2;
      "function" == typeof i2.filter ? (u2 = i2.filter, o2 = u2("", o2)) : d(i2.filter) && (u2 = i2.filter, s2 = u2);
      const l2 = [];
      if ("object" != typeof o2 || null === o2) return "";
      const c2 = y[i2.arrayFormat], a2 = "comma" === c2 && i2.commaRoundTrip;
      s2 || (s2 = Object.keys(o2)), i2.sort && s2.sort(i2.sort);
      const f2 = /* @__PURE__ */ new WeakMap();
      for (let t4 = 0; t4 < s2.length; ++t4) {
        const e4 = s2[t4];
        i2.skipNulls && null === o2[e4] || b(l2, v(o2[e4], e4, c2, a2, i2.allowEmptyArrays, i2.strictNullHandling, i2.skipNulls, i2.encodeDotInKeys, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset, f2));
      }
      const h2 = l2.join(i2.delimiter);
      let m2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (m2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? m2 + h2 : "";
    })(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t3, e3) => "boolean" == typeof t3 ? Number(t3) : e3(t3) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.m();
    let o2 = {};
    const [n2, r2] = Object.entries(this.t.routes).find(([t3, n3]) => o2 = new I(t3, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, o2, { route: r2 });
  }
  m() {
    const { host: t3, pathname: e2, search: o2 } = this.h();
    return (this.t.absolute ? t3 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + o2;
  }
  current(e2, o2) {
    const { name: n2, params: r2, query: i2, route: s2 } = this.p();
    if (!e2) return n2;
    const u2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(o2) || !u2) return u2;
    const l2 = new I(n2, s2, this.t);
    o2 = this.l(o2, l2);
    const c2 = t({}, r2, i2);
    if (Object.values(o2).every((t3) => !t3) && !Object.values(c2).some((t3) => void 0 !== t3)) return true;
    const a2 = (t3, e3) => Object.entries(t3).every(([t4, o3]) => Array.isArray(o3) && Array.isArray(e3[t4]) ? o3.every((o4) => e3[t4].includes(o4) || e3[t4].includes(decodeURIComponent(o4))) : "object" == typeof o3 && "object" == typeof e3[t4] && null !== o3 && null !== e3[t4] ? a2(o3, e3[t4]) : e3[t4] == o3 || e3[t4] == decodeURIComponent(o3));
    return a2(o2, c2);
  }
  h() {
    var t3, e2, o2, n2, r2, i2;
    const { host: s2 = "", pathname: u2 = "", search: l2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t3 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t3 : s2, pathname: null != (o2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? o2 : u2, search: null != (r2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? r2 : l2 };
  }
  get params() {
    const { params: e2, query: o2 } = this.p();
    return t({}, e2, o2);
  }
  get routeParams() {
    return this.p().params;
  }
  get queryParams() {
    return this.p().query;
  }
  has(t3) {
    return this.t.routes.hasOwnProperty(t3);
  }
  l(e2 = {}, o2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = o2.parameterSegments.filter(({ name: t3 }) => !this.t.defaults[t3]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, o3, r2) => t({}, e3, n2[r2] ? { [n2[r2].name]: o3 } : "object" == typeof o3 ? o3 : { [o3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(o2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.v(o2), this.j(e2, o2));
  }
  v(e2) {
    return e2.parameterSegments.filter(({ name: t3 }) => this.t.defaults[t3]).reduce((e3, { name: o2 }, n2) => t({}, e3, { [o2]: this.t.defaults[o2] }), {});
  }
  j(e2, { bindings: o2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [r2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t3 }) => t3 === r2)) return t({}, e3, { [r2]: i2 });
      if (!i2.hasOwnProperty(o2[r2])) {
        if (!i2.hasOwnProperty("id")) throw new Error(`Ziggy error: object passed as '${r2}' parameter is missing route model binding key '${o2[r2]}'.`);
        o2[r2] = "id";
      }
      return t({}, e3, { [r2]: i2[o2[r2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function D(t3, e2, o2, n2) {
  const r2 = new A(t3, e2, o2, n2);
  return t3 ? r2.toString() : r2;
}
const appName = "Matos";
const inertiaPort = 13714;
createServer(
  (page2) => createInertiaApp({
    page: page2,
    render: serverRenderer_cjs_prodExports.renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./pages/Admin/Categories/Create.vue": () => import("./assets/Create-CtB7flXU.js"), "./pages/Admin/Categories/Edit.vue": () => import("./assets/Edit-D_zQuYz6.js"), "./pages/Admin/Categories/Index.vue": () => import("./assets/Index-Cd2qOFJ9.js"), "./pages/Admin/Dashboard.vue": () => import("./assets/Dashboard-Ca3q7nKZ.js"), "./pages/Admin/Users/Create.vue": () => import("./assets/Create-B0ePyMki.js"), "./pages/Admin/Users/Edit.vue": () => import("./assets/Edit-T7JzkSRw.js"), "./pages/Admin/Users/Index.vue": () => import("./assets/Index-CQyM04FC.js"), "./pages/App/Dashboard.vue": () => import("./assets/Dashboard-B5dTRcu6.js"), "./pages/App/Organizations/Calendar/Index.vue": () => import("./assets/Index-BoOa5ByF.js"), "./pages/App/Organizations/Create.vue": () => import("./assets/Create-Df0chYLu.js"), "./pages/App/Organizations/Equipments/Create.vue": () => import("./assets/Create-Bt0yfUx9.js"), "./pages/App/Organizations/Equipments/Edit.vue": () => import("./assets/Edit-9262o__X.js"), "./pages/App/Organizations/Equipments/Index.vue": () => import("./assets/Index-DNNGxeB5.js"), "./pages/App/Organizations/Index.vue": () => import("./assets/Index-C3zXaNTd.js"), "./pages/App/Organizations/Reservations/In/Edit.vue": () => import("./assets/Edit-C2p5HhyE.js"), "./pages/App/Organizations/Reservations/In/Index.vue": () => import("./assets/Index-CfoAoZsp.js"), "./pages/App/Organizations/Reservations/Layout.vue": () => import("./assets/Layout-CsiAtby1.js"), "./pages/App/Organizations/Reservations/Out/Create.vue": () => import("./assets/Create-DcNd-Wfi.js"), "./pages/App/Organizations/Reservations/Out/Edit.vue": () => import("./assets/Edit-OxFsmWJN.js"), "./pages/App/Organizations/Reservations/Out/Index.vue": () => import("./assets/Index-CG1qy5Ac.js"), "./pages/App/Organizations/Settings/Depots/Create.vue": () => import("./assets/Create-CJ-2tkpm.js"), "./pages/App/Organizations/Settings/Depots/Edit.vue": () => import("./assets/Edit-EmjQ-dGJ.js"), "./pages/App/Organizations/Settings/Depots/Index.vue": () => import("./assets/Index-GMzWv3oZ.js"), "./pages/App/Organizations/Settings/Edit.vue": () => import("./assets/Edit-2-AZ65_h.js"), "./pages/App/Organizations/Settings/Members/Index.vue": () => import("./assets/Index-C-1HOPzw.js"), "./pages/App/Organizations/Settings/Partials/DeleteOrganization.vue": () => import("./assets/DeleteOrganization-B5SOctyO.js"), "./pages/App/Organizations/Settings/Partials/DepotsManagement.vue": () => import("./assets/DepotsManagement-nUQY1yFO.js"), "./pages/App/Organizations/Settings/Partials/GeneralForm.vue": () => import("./assets/GeneralForm-fQm7P6qQ.js"), "./pages/App/Organizations/Settings/Partials/MembersManagement.vue": () => import("./assets/MembersManagement-CUwVQuM6.js"), "./pages/App/Organizations/Show.vue": () => import("./assets/Show-sjFQrEzN.js"), "./pages/Conditions.vue": () => import("./assets/Conditions-D_EBDzfB.js"), "./pages/Discover.vue": () => import("./assets/Discover-DKJtLTht.js"), "./pages/Faq.vue": () => import("./assets/Faq-CDh2Ere5.js"), "./pages/HowItWorks.vue": () => import("./assets/HowItWorks-BjdnZ9TI.js"), "./pages/Privacy.vue": () => import("./assets/Privacy-DlP2VZzd.js"), "./pages/Public/Carts/Show.vue": () => import("./assets/Show-r9cvY4Ds.js"), "./pages/Public/Checkout/Index.vue": () => import("./assets/Index-l3ofRiiW.js"), "./pages/Public/Checkout/Success.vue": () => import("./assets/Success-TUGTqp3X.js"), "./pages/Public/Equipments/Show.vue": () => import("./assets/Show-D0gyKcMt.js"), "./pages/Public/Home.vue": () => import("./assets/Home-CjqRKCjW.js"), "./pages/Terms.vue": () => import("./assets/Terms-DrXIMjlM.js"), "./pages/auth/ConfirmPassword.vue": () => import("./assets/ConfirmPassword-CTTYcvie.js"), "./pages/auth/ForgotPassword.vue": () => import("./assets/ForgotPassword-Cu1wATob.js"), "./pages/auth/Login.vue": () => import("./assets/Login-1F2BFrpP.js"), "./pages/auth/Register.vue": () => import("./assets/Register-Cli2ozif.js"), "./pages/auth/ResetPassword.vue": () => import("./assets/ResetPassword-nTczaZ7u.js"), "./pages/auth/VerifyEmail.vue": () => import("./assets/VerifyEmail-2FCw1JyI.js"), "./pages/settings/Appearance.vue": () => import("./assets/Appearance-D15ay4dh.js"), "./pages/settings/Password.vue": () => import("./assets/Password-Db44TKnc.js"), "./pages/settings/Profile.vue": () => import("./assets/Profile-Bs2ntEez.js") })),
    setup({ App: App2, props, plugin: plugin2 }) {
      const app = vueExports.createSSRApp({ render: () => vueExports.h(App2, props) });
      const ziggyConfig = {
        ...page2.props.ziggy,
        location: new URL(page2.props.ziggy.location)
      };
      const route = (name, params, absolute) => D(name, params, absolute, ziggyConfig);
      app.config.globalProperties.route = route;
      if (typeof window === "undefined") {
        global.route = route;
      }
      app.use(plugin2);
      return app;
    }
  }),
  { port: inertiaPort }
);
export {
  usePage as a,
  head_default as h,
  link_default as l,
  serverRenderer_cjs_prodExports as s,
  useForm as u,
  vueExports as v,
  whenVisible_default as w
};
