import { createRequire } from "node:module";
import { FormComponentResetSymbol, UseFormUtils, buildSSRBody, config, configureLive, createHeadManager, createLayoutPropsStore, exposeInterceptors, formDataToObject, getInitialPageFromDOM, getScrollableParent, http, isPropsObject, isPropsObjectOrCallback, isSameUrlWithoutQueryOrHash, isUrlMethodPair, mergeDataIntoQueryString, normalizeLayouts, partialReloadRequestsSomeProps, resetFormFields, resolveServerHead, resolveUrlMethodPairComponent, router, router as router12, setupProgress, shouldIntercept, shouldNavigate, useInfiniteScroll } from "@inertiajs/core";
import { cloneDeep, isEqual } from "es-toolkit";
import { escape, get, has, set } from "es-toolkit/compat";
import { createValidator, resolveName, toSimpleValidationErrors } from "laravel-precognition";
import server_default from "@inertiajs/core/server";
// \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod, mod.exports), cb = null), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __require = /* #__PURE__ */ (() => createRequire(import.meta.url))();
// node_modules/vue/dist/vue.cjs.prod.js
/**
* vue v3.5.46
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var require_vue_cjs_prod = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var compilerDom = __require("@vue/compiler-dom");
	var runtimeDom = __require("@vue/runtime-dom");
	var shared = __require("@vue/shared");
	function _interopNamespaceDefault(e) {
		var n = Object.create(null);
		if (e) for (var k in e) n[k] = e[k];
		n.default = e;
		return Object.freeze(n);
	}
	var runtimeDom__namespace = /*#__PURE__*/ _interopNamespaceDefault(runtimeDom);
	var compileCache = /* @__PURE__ */ Object.create(null);
	function compileToFunction(template, options) {
		if (!shared.isString(template)) {
			if (template.nodeType) template = template.innerHTML;
			else return shared.NOOP;
		}
		const key = shared.genCacheKey(template, options);
		const cached = compileCache[key];
		if (cached) return cached;
		if (template[0] === "#") {
			const el = document.querySelector(template);
			template = el ? el.innerHTML : ``;
		}
		const opts = shared.extend({
			hoistStatic: true,
			onError: void 0,
			onWarn: shared.NOOP
		}, options);
		if (!opts.isCustomElement && typeof customElements !== "undefined") opts.isCustomElement = (tag) => !!customElements.get(tag);
		const { code } = compilerDom.compile(template, opts);
		const render = new Function("Vue", code)(runtimeDom__namespace);
		render._rc = true;
		return compileCache[key] = render;
	}
	runtimeDom.registerRuntimeCompiler(compileToFunction);
	exports.compile = compileToFunction;
	Object.keys(runtimeDom).forEach(function(k) {
		if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = runtimeDom[k];
	});
}));
// node_modules/vue/dist/vue.cjs.js
/**
* vue v3.5.46
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var require_vue_cjs = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var compilerDom = __require("@vue/compiler-dom");
	var runtimeDom = __require("@vue/runtime-dom");
	var shared = __require("@vue/shared");
	function _interopNamespaceDefault(e) {
		var n = Object.create(null);
		if (e) for (var k in e) n[k] = e[k];
		n.default = e;
		return Object.freeze(n);
	}
	var runtimeDom__namespace = /*#__PURE__*/ _interopNamespaceDefault(runtimeDom);
	var compileCache = /* @__PURE__ */ Object.create(null);
	function compileToFunction(template, options) {
		if (!shared.isString(template)) {
			if (template.nodeType) template = template.innerHTML;
			else {
				runtimeDom.warn(`invalid template option: `, template);
				return shared.NOOP;
			}
		}
		const key = shared.genCacheKey(template, options);
		const cached = compileCache[key];
		if (cached) return cached;
		if (template[0] === "#") {
			const el = document.querySelector(template);
			if (!el) runtimeDom.warn(`Template element not found or is empty: ${template}`);
			template = el ? el.innerHTML : ``;
		}
		const opts = shared.extend({
			hoistStatic: true,
			onError,
			onWarn: (e) => onError(e, true)
		}, options);
		if (!opts.isCustomElement && typeof customElements !== "undefined") opts.isCustomElement = (tag) => !!customElements.get(tag);
		const { code } = compilerDom.compile(template, opts);
		function onError(err, asWarning = false) {
			const message = asWarning ? err.message : `Template compilation error: ${err.message}`;
			const codeFrame = err.loc && shared.generateCodeFrame(template, err.loc.start.offset, err.loc.end.offset);
			runtimeDom.warn(codeFrame ? `${message}
${codeFrame}` : message);
		}
		const render = new Function("Vue", code)(runtimeDom__namespace);
		render._rc = true;
		return compileCache[key] = render;
	}
	runtimeDom.registerRuntimeCompiler(compileToFunction);
	exports.compile = compileToFunction;
	Object.keys(runtimeDom).forEach(function(k) {
		if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = runtimeDom[k];
	});
}));
// node_modules/vue/index.js
var require_vue = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	if (process.env.NODE_ENV === "production") module.exports = require_vue_cjs_prod();
	else module.exports = require_vue_cjs();
}));
// node_modules/vue/index.mjs
var vue_exports = /* @__PURE__ */ __exportAll({});
__reExport(vue_exports, /* @__PURE__ */ __toESM(require_vue(), 1));
// node_modules/@inertiajs/vue3/dist/index.js
var HydrationContextKey = /* @__PURE__ */ Symbol("InertiaHydrationContext");
function provideHydrationContext(hydrated) {
	(0, vue_exports.provide)(HydrationContextKey, hydrated);
}
function injectHydrationContext() {
	return (0, vue_exports.inject)(HydrationContextKey, null);
}
var store = createLayoutPropsStore();
var state = (0, vue_exports.ref)(store.get());
store.subscribe(() => {
	state.value = store.get();
});
function resetLayoutProps() {
	store.reset();
	state.value = store.get();
}
var remember_default = { created() {
	if (!this.$options.remember) return;
	if (Array.isArray(this.$options.remember)) this.$options.remember = { data: this.$options.remember };
	if (typeof this.$options.remember === "string") this.$options.remember = { data: [this.$options.remember] };
	if (typeof this.$options.remember.data === "string") this.$options.remember = { data: [this.$options.remember.data] };
	const rememberKey = this.$options.remember.key instanceof Function ? this.$options.remember.key.call(this) : this.$options.remember.key;
	const restored = router.restore(rememberKey);
	const rememberable = this.$options.remember.data.filter((key2) => {
		return !(this[key2] !== null && typeof this[key2] === "object" && this[key2].__rememberable === false);
	});
	const hasCallbacks = (key2) => {
		return this[key2] !== null && typeof this[key2] === "object" && typeof this[key2].__remember === "function" && typeof this[key2].__restore === "function";
	};
	rememberable.forEach((key2) => {
		if (this[key2] !== void 0 && restored !== void 0 && restored[key2] !== void 0) hasCallbacks(key2) ? this[key2].__restore(restored[key2]) : this[key2] = restored[key2];
		this.$watch(key2, () => {
			router.remember(rememberable.reduce((data, key3) => ({
				...data,
				[key3]: cloneDeep(hasCallbacks(key3) ? this[key3].__remember() : this[key3])
			}), {}), rememberKey);
		}, {
			immediate: true,
			deep: true
		});
	});
} };
function useFormState(options) {
	const { data: dataOption, rememberKey } = options;
	let { precognitionEndpoint } = options;
	const isDataFunction = typeof dataOption === "function";
	const resolveData = () => isDataFunction ? dataOption() : dataOption;
	const restored = rememberKey ? router.restore(rememberKey) : null;
	const initialData = restored?.data ?? cloneDeep(resolveData());
	let defaults = cloneDeep(initialData);
	let transform = (data) => data;
	let validatorRef = null;
	let withAllErrors = null;
	const withAllErrorsEnabled = () => withAllErrors ?? config$1.get("form.withAllErrors");
	let recentlySuccessfulTimeoutId;
	let defaultsCalledInOnSuccess = false;
	let rememberExcludeKeys = [];
	const typedForm = (0, vue_exports.reactive)({
		...cloneDeep(defaults),
		isDirty: false,
		errors: {},
		hasErrors: false,
		processing: false,
		progress: null,
		wasSuccessful: false,
		recentlySuccessful: false,
		withPrecognition(...args) {
			precognitionEndpoint = UseFormUtils.createWayfinderCallback(...args);
			const formWithPrecognition = this;
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
				const validationErrors = withAllErrorsEnabled() ? validator.errors() : toSimpleValidationErrors(validator.errors());
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
					if (Array.isArray(field)) validator.touch(field);
					else if (typeof field === "string") validator.touch([field, ...fields]);
					else validator.touch(field);
					return formWithPrecognition;
				},
				touched: (field) => typeof field === "string" ? formWithPrecognition.__touched.includes(field) : formWithPrecognition.__touched.length > 0,
				validate: (field, config4) => {
					if (typeof field === "object" && !("target" in field)) {
						config4 = field;
						field = void 0;
					}
					if (field === void 0) validator.validate(config4);
					else {
						const fieldName = resolveName(field);
						const transformedData = transform(this.data());
						validator.validate(fieldName, get(transformedData, fieldName), config4);
					}
					return formWithPrecognition;
				},
				setErrors: (errors) => tap(formWithPrecognition, () => this.setError(errors)),
				forgetError: (field) => tap(formWithPrecognition, () => this.clearErrors(resolveName(field)))
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
			if (isDataFunction) throw new Error("You cannot call `defaults()` when using a function to define your form data.");
			defaultsCalledInOnSuccess = true;
			if (typeof fieldOrFields === "undefined") {
				defaults = cloneDeep(this.data());
				this.isDirty = false;
			} else defaults = typeof fieldOrFields === "string" ? set(cloneDeep(defaults), fieldOrFields, maybeValue) : Object.assign({}, cloneDeep(defaults), fieldOrFields);
			validatorRef?.defaults(defaults);
			return this;
		},
		reset(...fields) {
			const resolvedData = isDataFunction ? cloneDeep(resolveData()) : defaults;
			const clonedData = cloneDeep(resolvedData);
			if (fields.length === 0) {
				if (isDataFunction) defaults = clonedData;
				Object.assign(this, clonedData);
			} else fields.filter((key2) => has(clonedData, key2)).forEach((key2) => {
				if (isDataFunction) set(defaults, key2, get(clonedData, key2));
				set(this, key2, get(clonedData, key2));
			});
			validatorRef?.reset(...fields);
			return this;
		},
		setError(fieldOrFields, maybeValue) {
			const errors = typeof fieldOrFields === "string" ? { [fieldOrFields]: maybeValue } : fieldOrFields;
			Object.assign(this.errors, errors);
			this.hasErrors = Object.keys(this.errors).length > 0;
			validatorRef?.setErrors(errors);
			return this;
		},
		clearErrors(...fields) {
			this.errors = Object.keys(this.errors).reduce((carry, field) => ({
				...carry,
				...fields.length > 0 && !fields.includes(field) ? { [field]: this.errors[field] } : {}
			}), {});
			this.hasErrors = Object.keys(this.errors).length > 0;
			if (validatorRef) {
				if (fields.length === 0) validatorRef.setErrors({});
				else fields.forEach(validatorRef.forgetError);
			}
			return this;
		},
		resetAndClearErrors(...fields) {
			this.reset(...fields);
			this.clearErrors(...fields);
			return this;
		},
		__rememberable: rememberKey === null,
		__remember() {
			const formData = this.data();
			if (rememberExcludeKeys.length > 0) {
				const filtered = { ...formData };
				rememberExcludeKeys.forEach((k) => delete filtered[k]);
				return {
					data: filtered,
					errors: this.errors
				};
			}
			return {
				data: formData,
				errors: this.errors
			};
		},
		__restore(restored2) {
			Object.assign(this, restored2.data);
			this.setError(restored2.errors);
		}
	});
	if (restored?.errors) typedForm.setError(restored.errors);
	(0, vue_exports.watch)(typedForm, () => {
		typedForm.isDirty = !isEqual(typedForm.data(), defaults);
	}, {
		immediate: true,
		deep: true
	});
	(0, vue_exports.watch)(typedForm, (newValue) => {
		if (!rememberKey) return;
		const storedData = router.restore(rememberKey);
		const newData = cloneDeep(newValue.__remember());
		if (!isEqual(storedData, newData)) router.remember(newData, rememberKey);
	}, {
		immediate: true,
		deep: true
	});
	if (precognitionEndpoint) typedForm.withPrecognition(precognitionEndpoint);
	return {
		form: typedForm,
		setDefaults: (newDefaults) => {
			defaults = newDefaults;
		},
		getTransform: () => transform,
		getPrecognitionEndpoint: () => precognitionEndpoint ?? null,
		markAsSuccessful: () => {
			typedForm.clearErrors();
			typedForm.wasSuccessful = true;
			typedForm.recentlySuccessful = true;
			recentlySuccessfulTimeoutId = setTimeout(() => typedForm.recentlySuccessful = false, config$1.get("form.recentlySuccessfulDuration"));
		},
		wasDefaultsCalledInOnSuccess: () => defaultsCalledInOnSuccess,
		resetDefaultsCalledInOnSuccess: () => {
			defaultsCalledInOnSuccess = false;
		},
		setRememberExcludeKeys: (keys) => {
			rememberExcludeKeys = keys;
		},
		resetBeforeSubmit: () => {
			typedForm.wasSuccessful = false;
			typedForm.recentlySuccessful = false;
			clearTimeout(recentlySuccessfulTimeoutId);
		},
		finishProcessing: () => {
			typedForm.processing = false;
			typedForm.progress = null;
		},
		withAllErrors: {
			enabled: withAllErrorsEnabled,
			enable: () => {
				withAllErrors = true;
			}
		}
	};
}
var reservedFormKeys = null;
var bootstrapping = false;
function validateFormDataKeys(data) {
	if (bootstrapping) return;
	if (reservedFormKeys === null) {
		bootstrapping = true;
		reservedFormKeys = new Set(Object.keys(useForm({})));
		bootstrapping = false;
	}
	const conflicts = Object.keys(data).filter((key2) => reservedFormKeys.has(key2));
	if (conflicts.length > 0) console.error(`[Inertia] useForm() data contains field(s) that conflict with form properties: ${conflicts.map((k) => `"${k}"`).join(", ")}. These fields will be overwritten by form methods/properties. Please rename these fields.`);
}
function useForm(...args) {
	const { rememberKey, data, precognitionEndpoint } = UseFormUtils.parseUseFormArguments(...args);
	validateFormDataKeys(typeof data === "function" ? cloneDeep(data()) : cloneDeep(data));
	let cancelToken = null;
	let pendingOptimisticCallback = null;
	const { form: baseForm, setDefaults, getTransform, getPrecognitionEndpoint, markAsSuccessful, wasDefaultsCalledInOnSuccess, resetDefaultsCalledInOnSuccess, setRememberExcludeKeys, resetBeforeSubmit, finishProcessing } = useFormState({
		data,
		rememberKey,
		precognitionEndpoint
	});
	const form = baseForm;
	const createSubmitMethod = (method) => (url, options = {}) => {
		form.submit(method, url, options);
	};
	Object.assign(form, {
		submit(...args2) {
			const { method, url, options } = UseFormUtils.parseSubmitArguments(args2, getPrecognitionEndpoint());
			resetDefaultsCalledInOnSuccess();
			const _options = {
				...options,
				onCancelToken: (token) => {
					cancelToken = token;
					return options.onCancelToken?.(token);
				},
				onBefore: (visit) => {
					resetBeforeSubmit();
					return options.onBefore?.(visit);
				},
				onStart: (visit) => {
					form.processing = true;
					return options.onStart?.(visit);
				},
				onProgress: (event) => {
					form.progress = event ?? null;
					return options.onProgress?.(event);
				},
				onSuccess: async (page2) => {
					markAsSuccessful();
					const onSuccess = options.onSuccess ? await options.onSuccess(page2) : null;
					if (!wasDefaultsCalledInOnSuccess()) {
						setDefaults(cloneDeep(form.data()));
						form.isDirty = false;
					}
					return onSuccess;
				},
				onError: (errors) => {
					form.clearErrors().setError(errors);
					return options.onError?.(errors);
				},
				onCancel: () => {
					return options.onCancel?.();
				},
				onFinish: (visit) => {
					finishProcessing();
					cancelToken = null;
					return options.onFinish?.(visit);
				}
			};
			_options.optimistic = _options.optimistic ?? pendingOptimisticCallback ?? void 0;
			pendingOptimisticCallback = null;
			const transformedData = getTransform()(form.data());
			if (method === "delete") router.delete(url, {
				..._options,
				data: transformedData
			});
			else router[method](url, transformedData, _options);
		},
		get: createSubmitMethod("get"),
		post: createSubmitMethod("post"),
		put: createSubmitMethod("put"),
		patch: createSubmitMethod("patch"),
		delete: createSubmitMethod("delete"),
		query: createSubmitMethod("query"),
		cancel() {
			if (cancelToken) cancelToken.cancel();
		},
		dontRemember(...keys) {
			setRememberExcludeKeys(keys);
			return form;
		},
		optimistic(callback) {
			pendingOptimisticCallback = callback;
			return form;
		}
	});
	return getPrecognitionEndpoint() ? form : form;
}
function isComponent(value) {
	if (!value) return false;
	if (typeof value === "function") return true;
	if (typeof value === "object") {
		const obj = value;
		return typeof obj.render === "function" || typeof obj.setup === "function" || typeof obj.template === "string" || "__file" in obj || "__name" in obj;
	}
	return false;
}
function isRenderFunction(value) {
	if (typeof value !== "function") return false;
	const fn = value;
	return fn.length === 2 && typeof fn.prototype === "undefined";
}
var component = (0, vue_exports.ref)(void 0);
var page = (0, vue_exports.ref)();
var pageAccessor = null;
var layout = (0, vue_exports.shallowRef)(null);
var key = (0, vue_exports.ref)(void 0);
var headManager;
var app_default = (0, vue_exports.defineComponent)({
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
			default: () => () => {}
		},
		defaultLayout: {
			type: Function,
			required: false
		},
		serverHead: {
			type: [
				Boolean,
				String,
				Function
			],
			required: false
		},
		serverRendered: {
			type: Boolean,
			required: false,
			default: true
		}
	},
	setup({ initialPage, initialComponent, resolveComponent, titleCallback, onHeadUpdate, defaultLayout, serverHead, serverRendered }) {
		component.value = initialComponent ? (0, vue_exports.markRaw)(initialComponent) : void 0;
		page.value = {
			...initialPage,
			flash: initialPage.flash ?? {}
		};
		key.value = void 0;
		const isServer = typeof window === "undefined";
		headManager = createHeadManager(isServer, (title) => titleCallback ? titleCallback(title, page.value) : title, onHeadUpdate || (() => {}), resolveServerHead(initialPage, serverHead));
		const hydrated = (0, vue_exports.ref)(!serverRendered);
		provideHydrationContext(hydrated);
		if (!isServer) {
			(0, vue_exports.onMounted)(() => hydrated.value = true);
			router.init({
				initialPage,
				resolveComponent,
				swapComponent: async (options) => {
					if (!options.preserveState) resetLayoutProps();
					component.value = (0, vue_exports.markRaw)(options.component);
					page.value = options.page;
					key.value = options.preserveState ? key.value : Date.now();
				},
				onFlash: (flash) => {
					page.value = {
						...page.value,
						flash
					};
				}
			});
			const syncServerHead = (event) => {
				headManager.updateServerHead(resolveServerHead(event.detail.page, serverHead));
			};
			router.on("navigate", syncServerHead);
			router.on("clientVisit", syncServerHead);
		}
		return () => {
			if (component.value) {
				component.value.inheritAttrs = !!component.value.inheritAttrs;
				const child = (0, vue_exports.h)(component.value, {
					...page.value.props,
					key: key.value
				});
				if (layout.value) {
					component.value.layout = layout.value;
					layout.value = null;
				}
				if (component.value.layout && isRenderFunction(component.value.layout)) return component.value.layout(vue_exports.h, child);
				let effectiveLayout;
				let callbackProps = null;
				const layoutValue = component.value.layout;
				if (typeof layoutValue === "function" && layoutValue.length <= 1 && typeof layoutValue.prototype === "undefined") {
					const result = layoutValue(page.value.props);
					if (isPropsObjectOrCallback(result, isComponent)) {
						effectiveLayout = defaultLayout?.(page.value.component, page.value);
						callbackProps = result;
					} else effectiveLayout = result;
				} else if (isPropsObject(layoutValue, isComponent)) {
					effectiveLayout = defaultLayout?.(page.value.component, page.value);
					callbackProps = layoutValue;
				} else effectiveLayout = layoutValue ?? defaultLayout?.(page.value.component, page.value);
				if (effectiveLayout) {
					let layouts = normalizeLayouts(effectiveLayout, isComponent, component.value.layout && !callbackProps ? isRenderFunction : void 0);
					if (callbackProps) layouts = layouts.map((l) => ({
						...l,
						props: {
							...l.props,
							...callbackProps
						}
					}));
					if (layouts.length > 0) {
						const dynamicProps = isServer ? {
							shared: {},
							named: {}
						} : state.value;
						return layouts.reduceRight((childNode, layout2) => {
							const layoutComponent = layout2.component;
							layoutComponent.inheritAttrs = !!layoutComponent.inheritAttrs;
							return (0, vue_exports.h)(layoutComponent, {
								...page.value.props,
								...layout2.props,
								...dynamicProps.shared,
								...layout2.name ? dynamicProps.named[layout2.name] || {} : {}
							}, () => childNode);
						}, child);
					}
				}
				return child;
			}
		};
	}
});
var plugin = { install(app) {
	router.form = useForm;
	Object.defineProperty(app.config.globalProperties, "$inertia", { get: () => router });
	Object.defineProperty(app.config.globalProperties, "$page", { get: () => page.value });
	Object.defineProperty(app.config.globalProperties, "$headManager", { get: () => headManager });
	app.mixin(remember_default);
} };
function usePage() {
	if (!pageAccessor) pageAccessor = (0, vue_exports.reactive)({
		props: (0, vue_exports.computed)(() => page.value?.props),
		url: (0, vue_exports.computed)(() => page.value?.url),
		component: (0, vue_exports.computed)(() => page.value?.component),
		version: (0, vue_exports.computed)(() => page.value?.version),
		clearHistory: (0, vue_exports.computed)(() => page.value?.clearHistory),
		deferredProps: (0, vue_exports.computed)(() => page.value?.deferredProps),
		rescuedProps: (0, vue_exports.computed)(() => page.value?.rescuedProps),
		mergeProps: (0, vue_exports.computed)(() => page.value?.mergeProps),
		prependProps: (0, vue_exports.computed)(() => page.value?.prependProps),
		deepMergeProps: (0, vue_exports.computed)(() => page.value?.deepMergeProps),
		matchPropsOn: (0, vue_exports.computed)(() => page.value?.matchPropsOn),
		rememberedState: (0, vue_exports.computed)(() => page.value?.rememberedState),
		encryptHistory: (0, vue_exports.computed)(() => page.value?.encryptHistory),
		scrollProps: (0, vue_exports.computed)(() => page.value?.scrollProps),
		liveProps: (0, vue_exports.computed)(() => page.value?.liveProps),
		flash: (0, vue_exports.computed)(() => page.value?.flash)
	});
	return pageAccessor;
}
async function createInertiaApp({ id = "app", resolve, setup, title, progress: progress2 = {}, page: page2, render, defaults = {}, nonce, http: http3, live, layout: layout2, serverHead, withApp, dev = false } = {}) {
	config$1.replace(defaults);
	if (nonce) config$1.set("nonce", nonce);
	if (http3) http.setClient(http3);
	if (live) configureLive(live);
	if (dev) exposeInterceptors();
	const isServer = typeof window === "undefined";
	const resolveComponent = (name, page3) => Promise.resolve(resolve(name, page3)).then((module) => module.default || module);
	if (isServer && !page2 && !render) return async (page3, renderToString) => {
		let head2 = [];
		const props = {
			initialPage: page3,
			initialComponent: await resolveComponent(page3.component, page3),
			resolveComponent,
			titleCallback: title,
			onHeadUpdate: (elements) => head2 = elements,
			defaultLayout: layout2,
			serverHead,
			serverRendered: true
		};
		let vueApp2;
		if (setup) vueApp2 = setup({
			el: null,
			App: app_default,
			props,
			plugin
		});
		else {
			vueApp2 = (0, vue_exports.createSSRApp)({ render: () => (0, vue_exports.h)(app_default, props) });
			vueApp2.use(plugin);
			if (withApp) withApp(vueApp2, {
				ssr: true,
				page: page3
			});
		}
		const html = await renderToString(vueApp2);
		const body = buildSSRBody(id, page3, html);
		return {
			head: head2,
			body
		};
	};
	const initialPage = page2 || getInitialPageFromDOM(id);
	let head = [];
	const vueApp = await Promise.all([resolveComponent(initialPage.component, initialPage), router.decryptHistory().catch(() => {})]).then(([initialComponent]) => {
		const el = isServer ? null : document.getElementById(id);
		const props = {
			initialPage,
			initialComponent,
			resolveComponent,
			titleCallback: title,
			onHeadUpdate: isServer ? (elements) => head = elements : void 0,
			defaultLayout: layout2,
			serverHead,
			serverRendered: isServer || el.hasAttribute("data-server-rendered")
		};
		if (isServer) return setup({
			el: null,
			App: app_default,
			props,
			plugin
		});
		const target = el;
		const isServerRendered = props.serverRendered;
		if (setup) return setup({
			el: target,
			App: app_default,
			props,
			plugin
		});
		if (isServerRendered) {
			const app = (0, vue_exports.createSSRApp)({ render: () => (0, vue_exports.h)(app_default, props) });
			app.use(plugin);
			if (withApp) withApp(app, {
				ssr: false,
				page: initialPage
			});
			app.mount(target);
		} else {
			const app = (0, vue_exports.createApp)({ render: () => (0, vue_exports.h)(app_default, props) });
			app.use(plugin);
			if (withApp) withApp(app, {
				ssr: false,
				page: initialPage
			});
			app.mount(target);
		}
	});
	if (!isServer && progress2) setupProgress(progress2);
	if (isServer && render && vueApp) {
		const html = await render(vueApp);
		const body = buildSSRBody(id, initialPage, html);
		return {
			head,
			body
		};
	}
}
(0, vue_exports.defineComponent)({
	name: "Deferred",
	props: { data: {
		type: [String, Array],
		required: true
	} },
	slots: Object,
	setup(props, { slots }) {
		const reloading = (0, vue_exports.ref)(false);
		const activeReloads = /* @__PURE__ */ new Set();
		const page2 = usePage();
		const keys = (0, vue_exports.computed)(() => Array.isArray(props.data) ? props.data : [props.data]);
		const rescuedKeys = (0, vue_exports.computed)(() => new Set(page2.rescuedProps));
		let removeStartListener = null;
		let removeFinishListener = null;
		(0, vue_exports.onMounted)(() => {
			removeStartListener = router.on("start", (e) => {
				const visit = e.detail.visit;
				if (visit.preserveState === true && isSameUrlWithoutQueryOrHash(visit.url, window.location) && partialReloadRequestsSomeProps(visit, keys.value)) {
					activeReloads.add(visit);
					reloading.value = true;
				}
			});
			removeFinishListener = router.on("finish", (e) => {
				const visit = e.detail.visit;
				if (activeReloads.has(visit)) {
					activeReloads.delete(visit);
					reloading.value = activeReloads.size > 0;
				}
			});
		});
		(0, vue_exports.onUnmounted)(() => {
			removeStartListener?.();
			removeFinishListener?.();
			activeReloads.clear();
		});
		return () => {
			if (!slots.fallback) throw new Error("`<Deferred>` requires a `<template #fallback>` slot");
			const propsAreDefined = keys.value.every((key2) => get(page2.props, key2) !== void 0);
			const hasRescuedProps = keys.value.some((key2) => rescuedKeys.value.has(key2));
			const slotProps = { reloading: reloading.value };
			if (propsAreDefined && !hasRescuedProps) return (0, vue_exports.h)(vue_exports.Fragment, { key: "default" }, slots.default?.(slotProps) ?? []);
			if (hasRescuedProps && slots.rescue) return (0, vue_exports.h)(vue_exports.Fragment, { key: "rescue" }, slots.rescue(slotProps));
			return (0, vue_exports.h)(vue_exports.Fragment, { key: "fallback" }, slots.fallback({}));
		};
	}
});
var noop = () => void 0;
var FormContextKey = /* @__PURE__ */ Symbol("InertiaFormContext");
(0, vue_exports.defineComponent)({
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
		onHttpException: {
			type: Function,
			default: noop
		},
		onNetworkError: {
			type: Function,
			default: noop
		},
		onFlash: {
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
		cancelOnUnmount: {
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
		optimistic: {
			type: Function,
			default: void 0
		},
		withAllErrors: {
			type: Boolean,
			default: null
		},
		component: {
			type: String,
			default: null
		},
		instant: {
			type: Boolean,
			default: false
		}
	},
	setup(props, { slots, attrs, expose }) {
		const getTransformedData = () => {
			const [_url, data] = getUrlAndData();
			return props.transform(data);
		};
		const form = useForm({}).withPrecognition(() => method.value, () => getUrlAndData()[0]).transform(getTransformedData).setValidationTimeout(props.validationTimeout);
		if (props.validateFiles) form.validateFiles();
		if (props.withAllErrors ?? config.get("form.withAllErrors")) form.withAllErrors();
		const formElement = (0, vue_exports.ref)();
		const method = (0, vue_exports.computed)(() => isUrlMethodPair(props.action) ? props.action.method : props.method.toLowerCase());
		const resolvedComponent = (0, vue_exports.computed)(() => {
			if (props.component) return props.component;
			if (props.instant && isUrlMethodPair(props.action)) return resolveUrlMethodPairComponent(props.action);
			return null;
		});
		const isDirty = (0, vue_exports.ref)(false);
		const defaultData = (0, vue_exports.ref)(new FormData());
		const onFormUpdate = (event) => {
			if (event.type === "reset" && event.detail?.[FormComponentResetSymbol]) event.preventDefault();
			isDirty.value = event.type === "reset" ? false : !isEqual(getData(), formDataToObject(defaultData.value));
		};
		const formEvents = [
			"input",
			"change",
			"reset"
		];
		(0, vue_exports.onMounted)(() => {
			defaultData.value = getFormData();
			form.defaults(getData());
			formEvents.forEach((e) => formElement.value.addEventListener(e, onFormUpdate));
		});
		(0, vue_exports.watch)(() => props.validateFiles, (value) => value ? form.validateFiles() : form.withoutFileValidation());
		(0, vue_exports.watch)(() => props.validationTimeout, (value) => form.setValidationTimeout(value));
		(0, vue_exports.onBeforeUnmount)(() => {
			formEvents.forEach((e) => formElement.value?.removeEventListener(e, onFormUpdate));
			if (props.cancelOnUnmount) form.cancel();
		});
		const getFormData = (submitter) => new FormData(formElement.value, submitter);
		const getData = (submitter) => formDataToObject(getFormData(submitter));
		const getUrlAndData = (submitter) => {
			return mergeDataIntoQueryString(method.value, isUrlMethodPair(props.action) ? props.action.url : props.action, getData(submitter), props.queryStringArrayFormat);
		};
		const submit = (submitter) => {
			const [url, data] = getUrlAndData(submitter);
			if (submitter?.getAttribute("formtarget") === "_blank" && method.value === "get") {
				window.open(url, "_blank");
				return;
			}
			const maybeReset = (resetOption) => {
				if (!resetOption) return;
				if (resetOption === true) reset();
				else if (resetOption.length > 0) reset(...resetOption);
			};
			const submitOptions = {
				headers: props.headers,
				queryStringArrayFormat: props.queryStringArrayFormat,
				errorBag: props.errorBag,
				showProgress: props.showProgress,
				invalidateCacheTags: props.invalidateCacheTags,
				component: resolvedComponent.value,
				optimistic: props.optimistic ? (pageProps) => props.optimistic(pageProps, data) : void 0,
				onCancelToken: props.onCancelToken,
				onBefore: props.onBefore,
				onStart: props.onStart,
				onProgress: props.onProgress,
				onFinish: props.onFinish,
				onCancel: props.onCancel,
				onHttpException: props.onHttpException,
				onNetworkError: props.onNetworkError,
				onFlash: props.onFlash,
				onSuccess: async (...args) => {
					const result = await props.onSuccess?.(...args);
					props.onSubmitComplete?.(exposed);
					maybeReset(props.resetOnSuccess);
					if (props.setDefaultsOnSuccess === true) defaults();
					return result;
				},
				onError: (...args) => {
					props.onError?.(...args);
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
			cancel: () => form.cancel(),
			defaults,
			getData,
			getFormData,
			touch: form.touch,
			valid: form.valid,
			invalid: form.invalid,
			touched: form.touched,
			validate: (field, config4) => form.validate(...UseFormUtils.mergeHeadersForValidation(field, config4, props.headers)),
			validator: () => form.validator()
		};
		expose(exposed);
		(0, vue_exports.provide)(FormContextKey, exposed);
		return () => {
			return (0, vue_exports.h)("form", {
				...attrs,
				ref: formElement,
				action: isUrlMethodPair(props.action) ? props.action.url : props.action,
				method: method.value,
				onSubmit: (event) => {
					event.preventDefault();
					submit(event.submitter);
				},
				inert: props.disableWhileProcessing && form.processing
			}, slots.default ? slots.default(exposed) : []);
		};
	}
});
function isUnaryTag(node) {
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
}
function renderTagStart(node) {
	node.props = node.props || {};
	node.props["data-inertia"] = node.props["head-key"] !== void 0 ? node.props["head-key"] : "";
	const attrs = Object.keys(node.props).reduce((carry, name) => {
		const value = String(node.props[name]);
		if (["key", "head-key"].includes(name)) return carry;
		else if (value === "") return carry + ` ${name}`;
		else return carry + ` ${name}="${escape(value)}"`;
	}, "");
	return `<${String(node.type)}${attrs}>`;
}
function renderTagChildren(node) {
	const { children } = node;
	if (typeof children === "string") return children;
	if (Array.isArray(children)) return children.reduce((html, child) => {
		return html + renderTag(child);
	}, "");
	return "";
}
function isFunctionNode(node) {
	return typeof node.type === "function";
}
function isComponentNode(node) {
	return typeof node.type === "object";
}
function isCommentNode(node) {
	return /(comment|cmt)/i.test(node.type.toString());
}
function isFragmentNode(node) {
	return /(fragment|fgt|symbol\(\))/i.test(node.type.toString());
}
function isTextNode(node) {
	return /(text|txt)/i.test(node.type.toString());
}
function renderTag(node) {
	if (isTextNode(node)) return String(node.children);
	else if (isFragmentNode(node)) return "";
	else if (isCommentNode(node)) return "";
	let html = renderTagStart(node);
	if (node.children) html += renderTagChildren(node);
	if (!isUnaryTag(node)) html += `</${String(node.type)}>`;
	return html;
}
function addTitleElement(elements, title) {
	if (title && !elements.find((tag) => tag.startsWith("<title"))) elements.push(`<title data-inertia="">${escape(title)}</title>`);
	return elements;
}
function renderNodes(nodes, title) {
	return addTitleElement(nodes.flatMap((node) => resolveNode(node)).map((node) => renderTag(node)).filter((node) => node), title);
}
function resolveNode(node) {
	if (isFunctionNode(node)) return resolveNode(node.type());
	else if (isComponentNode(node)) {
		console.warn(`Using components in the <Head> component is not supported.`);
		return [];
	} else if (isTextNode(node) && node.children) return node;
	else if (isFragmentNode(node) && node.children) return node.children.flatMap((child) => resolveNode(child));
	else if (isCommentNode(node)) return [];
	else return node;
}
var head_default = (0, vue_exports.defineComponent)({
	props: { title: {
		type: String,
		required: false
	} },
	setup(props, { slots }) {
		const provider = headManager.createProvider();
		(0, vue_exports.onBeforeUnmount)(() => {
			provider.disconnect();
		});
		return () => {
			provider.update(renderNodes(slots.default ? slots.default() : [], props.title));
		};
	}
});
var resolveHTMLElement = (value, fallback) => {
	if (!value) return fallback;
	if (typeof value === "string") return document.querySelector(value);
	if (typeof value === "function") return value() || null;
	return fallback;
};
(0, vue_exports.defineComponent)({
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
			type: [
				String,
				Function,
				Object
			],
			default: null
		},
		startElement: {
			type: [
				String,
				Function,
				Object
			],
			default: null
		},
		endElement: {
			type: [
				String,
				Function,
				Object
			],
			default: null
		},
		params: {
			type: Object,
			default: () => ({})
		}
	},
	inheritAttrs: false,
	setup(props, { slots, attrs, expose }) {
		const itemsElementRef = (0, vue_exports.ref)(null);
		const startElementRef = (0, vue_exports.ref)(null);
		const endElementRef = (0, vue_exports.ref)(null);
		const itemsElement = (0, vue_exports.computed)(() => resolveHTMLElement(props.itemsElement, itemsElementRef.value));
		const scrollableParent = (0, vue_exports.computed)(() => getScrollableParent(itemsElement.value));
		const startElement = (0, vue_exports.computed)(() => resolveHTMLElement(props.startElement, startElementRef.value));
		const endElement = (0, vue_exports.computed)(() => resolveHTMLElement(props.endElement, endElementRef.value));
		const loadingPrevious = (0, vue_exports.ref)(false);
		const loadingNext = (0, vue_exports.ref)(false);
		const requestCount = (0, vue_exports.ref)(0);
		const hasPreviousPage = (0, vue_exports.ref)(false);
		const hasNextPage = (0, vue_exports.ref)(false);
		const syncStateFromDataManager = () => {
			requestCount.value = dataManager.getRequestCount();
			hasPreviousPage.value = dataManager.hasPrevious();
			hasNextPage.value = dataManager.hasNext();
		};
		const { dataManager, elementManager, flush: flushInfiniteScroll } = useInfiniteScroll({
			getPropName: () => props.data,
			inReverseMode: () => props.reverse,
			shouldFetchNext: () => !props.onlyPrevious,
			shouldFetchPrevious: () => !props.onlyNext,
			shouldPreserveUrl: () => props.preserveUrl,
			getReloadOptions: () => props.params,
			getTriggerMargin: () => props.buffer,
			getStartElement: () => startElement.value,
			getEndElement: () => endElement.value,
			getItemsElement: () => itemsElement.value,
			getScrollableParent: () => scrollableParent.value,
			onBeforePreviousRequest: () => loadingPrevious.value = true,
			onBeforeNextRequest: () => loadingNext.value = true,
			onCompletePreviousRequest: ({ completed }) => {
				loadingPrevious.value = false;
				if (completed) syncStateFromDataManager();
			},
			onCompleteNextRequest: ({ completed }) => {
				loadingNext.value = false;
				if (completed) syncStateFromDataManager();
			},
			onDataReset: syncStateFromDataManager
		});
		syncStateFromDataManager();
		if (typeof window === "undefined") {
			const scrollProp = usePage().scrollProps?.[props.data];
			if (scrollProp) {
				hasPreviousPage.value = !!scrollProp.previousPage;
				hasNextPage.value = !!scrollProp.nextPage;
			}
		}
		const autoLoad = (0, vue_exports.computed)(() => !manualMode.value);
		const manualMode = (0, vue_exports.computed)(() => props.manual || props.manualAfter > 0 && requestCount.value >= props.manualAfter);
		const scrollToBottom = () => {
			if (scrollableParent.value) scrollableParent.value.scrollTo({
				top: scrollableParent.value.scrollHeight,
				behavior: "instant"
			});
			else window.scrollTo({
				top: document.body.scrollHeight,
				behavior: "instant"
			});
		};
		(0, vue_exports.onMounted)(() => {
			elementManager.setupObservers();
			elementManager.processServerLoadedElements(dataManager.getLastLoadedPage());
			if (props.autoScroll !== void 0 ? props.autoScroll : props.reverse) scrollToBottom();
			if (autoLoad.value) elementManager.enableTriggers();
		});
		(0, vue_exports.onUnmounted)(flushInfiniteScroll);
		(0, vue_exports.watch)(() => [
			autoLoad.value,
			props.onlyNext,
			props.onlyPrevious
		], ([enabled]) => {
			enabled ? elementManager.enableTriggers() : elementManager.disableTriggers();
		});
		expose({
			fetchNext: dataManager.fetchNext,
			fetchPrevious: dataManager.fetchPrevious,
			hasPrevious: dataManager.hasPrevious,
			hasNext: dataManager.hasNext
		});
		return () => {
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
				renderElements.push((0, vue_exports.h)("div", { ref: startElementRef }, slots.previous ? slots.previous(exposedPrevious) : loadingPrevious.value ? slots.loading?.(exposedPrevious) : void 0));
			}
			renderElements.push((0, vue_exports.h)(props.as, {
				...attrs,
				ref: itemsElementRef
			}, slots.default?.({
				loading: loadingPrevious.value || loadingNext.value,
				loadingPrevious: loadingPrevious.value,
				loadingNext: loadingNext.value
			})));
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
				renderElements.push((0, vue_exports.h)("div", { ref: endElementRef }, slots.next ? slots.next(exposedNext) : loadingNext.value ? slots.loading?.(exposedNext) : void 0));
			}
			return (0, vue_exports.h)(vue_exports.Fragment, {}, props.reverse ? [...renderElements].reverse() : renderElements);
		};
	}
});
var noop2 = () => {};
var link_default = (0, vue_exports.defineComponent)({
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
			type: [
				Boolean,
				String,
				Function
			],
			default: false
		},
		preserveState: {
			type: [
				Boolean,
				String,
				Function
			],
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
			type: [
				Boolean,
				String,
				Array
			],
			default: false
		},
		cacheFor: {
			type: [
				Number,
				String,
				Array
			],
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
		onHttpException: {
			type: Function,
			default: noop2
		},
		onNetworkError: {
			type: Function,
			default: noop2
		},
		onFlash: {
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
		},
		component: {
			type: String,
			default: null
		},
		instant: {
			type: Boolean,
			default: false
		},
		pageProps: {
			type: [Object, Function],
			default: null
		}
	},
	setup(props, { slots, attrs }) {
		const inFlightCount = (0, vue_exports.ref)(0);
		const hoverTimeout = (0, vue_exports.ref)();
		const prefetchModes = (0, vue_exports.computed)(() => {
			if (props.prefetch === true) return ["hover"];
			if (props.prefetch === false) return [];
			if (Array.isArray(props.prefetch)) return props.prefetch;
			return [props.prefetch];
		});
		const cacheForValue = (0, vue_exports.computed)(() => {
			if (props.cacheFor !== 0) return props.cacheFor;
			if (prefetchModes.value.length === 1 && prefetchModes.value[0] === "click") return 0;
			return config$1.get("prefetch.cacheFor");
		});
		(0, vue_exports.onMounted)(() => {
			if (prefetchModes.value.includes("mount")) prefetch();
		});
		(0, vue_exports.onUnmounted)(() => {
			clearTimeout(hoverTimeout.value);
		});
		const method = (0, vue_exports.computed)(() => isUrlMethodPair(props.href) ? props.href.method : (props.method ?? "get").toLowerCase());
		const as = (0, vue_exports.computed)(() => {
			if (typeof props.as !== "string" || props.as.toLowerCase() !== "a") return props.as;
			return method.value !== "get" ? "button" : props.as.toLowerCase();
		});
		const mergeDataArray = (0, vue_exports.computed)(() => mergeDataIntoQueryString(method.value, isUrlMethodPair(props.href) ? props.href.url : props.href, props.data || {}, props.queryStringArrayFormat));
		const href = (0, vue_exports.computed)(() => mergeDataArray.value[0]);
		const data = (0, vue_exports.computed)(() => mergeDataArray.value[1]);
		const resolvedComponent = (0, vue_exports.computed)(() => {
			if (props.component) return props.component;
			if (props.instant && isUrlMethodPair(props.href)) return resolveUrlMethodPairComponent(props.href);
			return null;
		});
		const elProps = (0, vue_exports.computed)(() => {
			if (as.value === "button") return { type: "button" };
			if (as.value === "a" || typeof as.value !== "string") return { href: href.value };
			return {};
		});
		const baseParams = (0, vue_exports.computed)(() => ({
			data: data.value,
			method: method.value,
			replace: props.replace,
			preserveScroll: props.preserveScroll,
			preserveState: props.preserveState ?? method.value !== "get",
			preserveUrl: props.preserveUrl,
			only: props.only,
			except: props.except,
			headers: props.headers,
			async: props.async,
			component: resolvedComponent.value,
			pageProps: props.pageProps
		}));
		const visitParams = (0, vue_exports.computed)(() => ({
			...baseParams.value,
			viewTransition: props.viewTransition,
			onCancelToken: props.onCancelToken,
			onBefore: props.onBefore,
			onStart: (visit) => {
				inFlightCount.value++;
				props.onStart?.(visit);
			},
			onProgress: props.onProgress,
			onFinish: (visit) => {
				inFlightCount.value--;
				props.onFinish?.(visit);
			},
			onCancel: props.onCancel,
			onSuccess: props.onSuccess,
			onError: props.onError,
			onHttpException: props.onHttpException,
			onNetworkError: props.onNetworkError,
			onFlash: props.onFlash
		}));
		const prefetch = () => {
			router.prefetch(href.value, {
				...baseParams.value,
				onPrefetching: props.onPrefetching,
				onPrefetched: props.onPrefetched
			}, {
				cacheFor: cacheForValue.value,
				cacheTags: props.cacheTags
			});
		};
		const regularEvents = { onClick: (event) => {
			if (shouldIntercept(event)) {
				event.preventDefault();
				router.visit(href.value, visitParams.value);
			}
		} };
		const prefetchHoverEvents = {
			onMouseenter: () => {
				hoverTimeout.value = setTimeout(() => {
					prefetch();
				}, config$1.get("prefetch.hoverDelay"));
			},
			onMouseleave: () => {
				clearTimeout(hoverTimeout.value);
			},
			onClick: (event) => {
				clearTimeout(hoverTimeout.value);
				regularEvents.onClick(event);
			}
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
				if (shouldIntercept(event)) event.preventDefault();
			}
		};
		return () => {
			return (0, vue_exports.h)(as.value, {
				...attrs,
				...elProps.value,
				"data-loading": inFlightCount.value > 0 ? "" : void 0,
				...(() => {
					if (prefetchModes.value.includes("hover")) return prefetchHoverEvents;
					if (prefetchModes.value.includes("click")) return prefetchClickEvents;
					return regularEvents;
				})()
			}, slots);
		};
	}
});
(0, vue_exports.defineComponent)({
	name: "WhenMounted",
	slots: Object,
	setup(_, { slots }) {
		const hydrated = injectHydrationContext();
		const mounted = (0, vue_exports.ref)(hydrated?.value ?? false);
		(0, vue_exports.onMounted)(() => {
			mounted.value = true;
		});
		return () => {
			if (!mounted.value) return (0, vue_exports.h)(vue_exports.Fragment, { key: "fallback" }, slots.fallback?.({}) ?? []);
			return (0, vue_exports.h)(vue_exports.Fragment, { key: "default" }, slots.default?.({}) ?? []);
		};
	}
});
var whenVisible_default = (0, vue_exports.defineComponent)({
	name: "WhenVisible",
	slots: Object,
	props: {
		data: { type: [String, Array] },
		params: { type: Object },
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
	setup(props, { slots }) {
		const loaded = (0, vue_exports.ref)(false);
		const fetching = (0, vue_exports.ref)(false);
		const observer = (0, vue_exports.ref)(null);
		const elementRef = (0, vue_exports.ref)(null);
		const page2 = usePage();
		const keys = (0, vue_exports.computed)(() => {
			return props.data ? Array.isArray(props.data) ? props.data : [props.data] : [];
		});
		function getReloadParams() {
			const reloadParams = {
				preserveErrors: true,
				...props.params
			};
			if (props.data) reloadParams.only = Array.isArray(props.data) ? props.data : [props.data];
			return reloadParams;
		}
		function registerObserver() {
			if (typeof window === "undefined") return;
			observer.value?.disconnect();
			observer.value = new IntersectionObserver((entries) => {
				if (!entries[0].isIntersecting) return;
				if (fetching.value) return;
				if (!props.always && loaded.value) return;
				fetching.value = true;
				const reloadParams = getReloadParams();
				router.reload({
					...reloadParams,
					onStart: (e) => {
						fetching.value = true;
						reloadParams.onStart?.(e);
					},
					onFinish: (e) => {
						loaded.value = true;
						fetching.value = false;
						reloadParams.onFinish?.(e);
						if (!props.always) observer.value?.disconnect();
					}
				});
			}, { rootMargin: `${props.buffer}px` });
			if (elementRef.value) observer.value.observe(elementRef.value);
		}
		(0, vue_exports.watch)(() => keys.value.map((key2) => get(page2.props, key2)), () => {
			const exists = keys.value.length > 0 && keys.value.every((key2) => get(page2.props, key2) !== void 0);
			loaded.value = exists;
			if (exists && !props.always) return;
			if (!observer.value || !exists) (0, vue_exports.nextTick)(registerObserver);
		}, { immediate: true });
		(0, vue_exports.onUnmounted)(() => {
			observer.value?.disconnect();
		});
		return () => {
			const els = [];
			if (props.always || !loaded.value) els.push((0, vue_exports.h)(props.as, { ref: elementRef }));
			if (!loaded.value) els.push(slots.fallback ? slots.fallback({}) : null);
			else if (slots.default) els.push(slots.default({ fetching: fetching.value }));
			return els;
		};
	}
});
var config$1 = config.extend({});
// node_modules/@vue/server-renderer/dist/server-renderer.cjs.prod.js
/**
* @vue/server-renderer v3.5.46
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var require_server_renderer_cjs_prod = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var Vue = __require("@vue/runtime-dom");
	var shared = __require("@vue/shared");
	var compilerSsr = __require("@vue/compiler-ssr");
	function _interopNamespaceDefault(e) {
		var n = Object.create(null);
		if (e) for (var k in e) n[k] = e[k];
		n.default = e;
		return Object.freeze(n);
	}
	var Vue__namespace = /*#__PURE__*/ _interopNamespaceDefault(Vue);
	var shouldIgnoreProp = /* @__PURE__ */ shared.makeMap(`,key,ref,innerHTML,textContent,ref_key,ref_for`);
	function ssrRenderAttrs(props, tag) {
		let ret = "";
		for (let key in props) {
			if (shouldIgnoreProp(key) || shared.isOn(key) || tag === "textarea" && key === "value" || key.startsWith(".")) continue;
			const value = props[key];
			if (key.startsWith("^")) key = key.slice(1);
			if (key === "class") ret += ` class="${ssrRenderClass(value)}"`;
			else if (key === "style") ret += ` style="${ssrRenderStyle(value)}"`;
			else if (key === "className") {
				if (value != null) ret += ` class="${shared.escapeHtml(String(value))}"`;
			} else ret += ssrRenderDynamicAttr(key, value, tag);
		}
		return ret;
	}
	function ssrRenderDynamicAttr(key, value, tag) {
		if (!shared.isRenderableAttrValue(value)) return ``;
		const attrKey = tag && (tag.indexOf("-") > 0 || shared.isSVGTag(tag)) ? key : shared.propsToAttrMap[key] || key.toLowerCase();
		if (shared.isBooleanAttr(attrKey) || attrKey === "hidden" && (typeof value === "boolean" || typeof value === "number")) return shared.includeBooleanAttr(value) ? ` ${attrKey}` : ``;
		else if (shared.isSSRSafeAttrName(attrKey)) return value === "" ? ` ${attrKey}` : ` ${attrKey}="${shared.escapeHtml(value)}"`;
		else {
			console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${attrKey}`);
			return ``;
		}
	}
	function ssrRenderAttr(key, value) {
		if (!shared.isRenderableAttrValue(value)) return ``;
		return ` ${key}="${shared.escapeHtml(value)}"`;
	}
	function ssrRenderClass(raw) {
		return shared.escapeHtml(shared.normalizeClass(raw));
	}
	function ssrRenderStyle(raw) {
		if (!raw) return "";
		if (shared.isString(raw)) return shared.escapeHtml(raw);
		const styles = shared.normalizeStyle(ssrResetCssVars(raw));
		return shared.escapeHtml(shared.stringifyStyle(styles));
	}
	function ssrResetCssVars(raw) {
		if (!shared.isArray(raw) && shared.isObject(raw)) {
			const res = {};
			for (const key in raw) if (key.startsWith(":--")) res[key.slice(1)] = shared.normalizeCssVarValue(raw[key]);
			else res[key] = raw[key];
			return res;
		}
		return raw;
	}
	function ssrRenderComponent(comp, props = null, children = null, parentComponent = null, slotScopeId) {
		return renderComponentVNode(Vue.createVNode(comp, props, children), parentComponent, slotScopeId);
	}
	var { ensureValidVNode } = Vue.ssrUtils;
	function ssrRenderSlot(slots, slotName, slotProps, fallbackRenderFn, push, parentComponent, slotScopeId) {
		push(`<!--[-->`);
		ssrRenderSlotInner(slots, slotName, slotProps, fallbackRenderFn, push, parentComponent, slotScopeId);
		push(`<!--]-->`);
	}
	function ssrRenderSlotInner(slots, slotName, slotProps, fallbackRenderFn, push, parentComponent, slotScopeId, transition) {
		const slotFn = slots[slotName];
		if (slotFn) {
			const slotBuffer = [];
			const bufferedPush = (item) => {
				slotBuffer.push(item);
			};
			const ret = slotFn(slotProps || {}, bufferedPush, parentComponent, slotScopeId ? " " + slotScopeId : "");
			if (shared.isArray(ret)) {
				const validSlotContent = ensureValidVNode(ret);
				if (validSlotContent) renderVNodeChildren(push, validSlotContent, parentComponent, slotScopeId);
				else if (fallbackRenderFn) fallbackRenderFn();
				else if (transition) push(`<!---->`);
			} else {
				let isEmptySlot = true;
				if (transition) isEmptySlot = false;
				else for (let i = 0; i < slotBuffer.length; i++) if (!isComment(slotBuffer[i])) {
					isEmptySlot = false;
					break;
				}
				if (isEmptySlot) {
					if (fallbackRenderFn) fallbackRenderFn();
				} else {
					let start = 0;
					let end = slotBuffer.length;
					if (transition && slotBuffer[0] === "<!--[-->" && slotBuffer[end - 1] === "<!--]-->") {
						start++;
						end--;
					}
					if (start < end) for (let i = start; i < end; i++) push(slotBuffer[i]);
					else if (transition) push(`<!---->`);
				}
			}
		} else if (fallbackRenderFn) fallbackRenderFn();
		else if (transition) push(`<!---->`);
	}
	var commentTestRE = /^<!--[\s\S]*-->$/;
	var commentRE = /<!--[^]*?-->/gm;
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
		if (shared.isPromise(teleportContent) || shared.isArray(teleportContent) && teleportContent.hasAsync) targetBuffer.hasAsync = true;
		parentPush("<!--teleport end-->");
	}
	function ssrInterpolate(value) {
		return shared.escapeHtml(shared.toDisplayString(value));
	}
	function ssrRenderList(source, renderItem) {
		if (shared.isArray(source) || shared.isString(source)) for (let i = 0, l = source.length; i < l; i++) renderItem(source[i], i);
		else if (typeof source === "number") {
			if (!Number.isInteger(source) || source < 0) return;
			for (let i = 0; i < source; i++) renderItem(i + 1, i);
		} else if (shared.isObject(source)) {
			if (source[Symbol.iterator]) {
				let i = 0;
				for (const item of source) renderItem(item, i++);
			} else {
				const keys = Object.keys(source);
				for (let i = 0, l = keys.length; i < l; i++) {
					const key = keys[i];
					renderItem(source[key], key, i);
				}
			}
		}
	}
	function ssrRenderSuspense(push, { default: renderContent }) {
		if (renderContent) renderContent();
		else push(`<!---->`);
	}
	function ssrGetDirectiveProps(instance, dir, value, arg, modifiers = {}) {
		if (typeof dir !== "function" && dir.getSSRProps) return dir.getSSRProps({
			dir,
			instance: Vue.ssrUtils.getComponentPublicInstance(instance.$),
			value,
			oldValue: void 0,
			arg,
			modifiers
		}, null) || {};
		return {};
	}
	var ssrLooseEqual = shared.looseEqual;
	function ssrLooseContain(arr, value) {
		return shared.looseIndexOf(arr, value) > -1;
	}
	function ssrRenderDynamicModel(type, model, value) {
		switch (type) {
			case "radio": return shared.looseEqual(model, value) ? " checked" : "";
			case "checkbox": return (shared.isArray(model) ? ssrLooseContain(model, value) : model) ? " checked" : "";
			default: return ssrRenderAttr("value", model);
		}
	}
	function ssrGetDynamicModelProps(existingProps = {}, model) {
		const { type, value } = existingProps;
		switch (type) {
			case "radio": return shared.looseEqual(model, value) ? { checked: true } : null;
			case "checkbox": return (shared.isArray(model) ? ssrLooseContain(model, value) : model) ? { checked: true } : null;
			default: return { value: model };
		}
	}
	var helpers = /*#__PURE__*/ Object.freeze({
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
		get ssrRenderVNode() {
			return renderVNode;
		}
	});
	var compileCache = /* @__PURE__ */ Object.create(null);
	function ssrCompile(template, instance) {
		const Component = instance.type;
		const { isCustomElement, compilerOptions } = instance.appContext.config;
		const { delimiters, compilerOptions: componentCompilerOptions } = Component;
		const finalCompilerOptions = shared.extend(shared.extend({
			isCustomElement,
			delimiters
		}, compilerOptions), componentCompilerOptions);
		finalCompilerOptions.isCustomElement = finalCompilerOptions.isCustomElement || shared.NO;
		finalCompilerOptions.isNativeTag = finalCompilerOptions.isNativeTag || shared.NO;
		const cacheKey = JSON.stringify({
			template,
			compilerOptions: finalCompilerOptions
		}, (key, value) => {
			return shared.isFunction(value) ? value.toString() : value;
		});
		const cached = compileCache[cacheKey];
		if (cached) return cached;
		finalCompilerOptions.onError = (err) => {
			throw err;
		};
		const { code } = compilerSsr.compile(template, finalCompilerOptions);
		const requireMap = {
			vue: Vue__namespace,
			"vue/server-renderer": helpers
		};
		const fakeRequire = (id) => requireMap[id];
		return compileCache[cacheKey] = Function("require", code)(fakeRequire);
	}
	var { createComponentInstance, setCurrentRenderingInstance, setupComponent, renderComponentRoot, normalizeVNode, pushWarningContext, popWarningContext } = Vue.ssrUtils;
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
				if (shared.isPromise(item) || shared.isArray(item) && item.hasAsync) buffer.hasAsync = true;
			}
		};
	}
	function renderComponentVNode(vnode, parentComponent = null, slotScopeId) {
		const instance = vnode.component = createComponentInstance(vnode, parentComponent, null);
		const res = setupComponent(instance, true);
		const hasAsyncSetup = shared.isPromise(res);
		let prefetches = instance.sp;
		let p;
		if (hasAsyncSetup || prefetches) p = Promise.resolve(res).then(() => {
			if (hasAsyncSetup) prefetches = instance.sp;
			if (prefetches) try {
				return Promise.all(prefetches.map((prefetch) => prefetch.call(instance.proxy))).catch(shared.NOOP);
			} catch {}
		}).then(() => renderComponentSubTree(instance, slotScopeId));
		else try {
			return renderComponentSubTree(instance, slotScopeId);
		} catch (err) {
			p = Promise.reject(err);
		}
		p.catch(shared.NOOP);
		return p;
	}
	function renderComponentSubTree(instance, slotScopeId) {
		const comp = instance.type;
		const { getBuffer, push } = createBuffer();
		if (shared.isFunction(comp)) {
			let root = renderComponentRoot(instance);
			if (!comp.props) {
				for (const key in instance.attrs) if (key.startsWith(`data-v-`)) (root.props || (root.props = {}))[key] = ``;
			}
			renderVNode(push, instance.subTree = root, instance, slotScopeId);
		} else {
			if ((!instance.render || instance.render === shared.NOOP) && !instance.ssrRender && !comp.ssrRender && shared.isString(comp.template)) comp.ssrRender = ssrCompile(comp.template, instance);
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
					if (parent && parent.subTree && parent.subTree === cur.vnode) cur = parent;
					else break;
				}
				if (slotScopeId) {
					if (!hasCloned) attrs = { ...attrs };
					const slotScopeIdList = slotScopeId.trim().split(" ");
					for (let i = 0; i < slotScopeIdList.length; i++) attrs[slotScopeIdList[i]] = "";
				}
				const prev = setCurrentRenderingInstance(instance);
				try {
					ssrRender(instance.proxy, push, instance, attrs, instance.props, instance.setupState, instance.data, instance.ctx);
				} catch (err) {
					Vue.handleError(err, instance, 1);
				} finally {
					setCurrentRenderingInstance(prev);
				}
			} else if (instance.render && instance.render !== shared.NOOP) renderVNode(push, instance.subTree = renderComponentRoot(instance), instance, slotScopeId);
			else {
				const componentName = comp.name || comp.__file || `<Anonymous>`;
				Vue.warn(`Component ${componentName} is missing template or render function.`);
				push(`<!---->`);
			}
		}
		return getBuffer();
	}
	function renderVNode(push, vnode, parentComponent, slotScopeId) {
		const { type, shapeFlag, children, dirs, props } = vnode;
		if (dirs) vnode.props = applySSRDirectives(vnode, props, dirs);
		switch (type) {
			case Vue.Text:
				push(shared.escapeHtml(children));
				break;
			case Vue.Comment:
				push(children ? `<!--${shared.escapeHtmlComment(children)}-->` : `<!---->`);
				break;
			case Vue.Static:
				push(children);
				break;
			case Vue.Fragment:
				if (vnode.slotScopeIds) slotScopeId = (slotScopeId ? slotScopeId + " " : "") + vnode.slotScopeIds.join(" ");
				push(`<!--[-->`);
				renderVNodeChildren(push, children, parentComponent, slotScopeId);
				push(`<!--]-->`);
				break;
			default: if (shapeFlag & 1) renderElementVNode(push, vnode, parentComponent, slotScopeId);
			else if (shapeFlag & 6) push(renderComponentVNode(vnode, parentComponent, slotScopeId));
			else if (shapeFlag & 64) renderTeleportVNode(push, vnode, parentComponent, slotScopeId);
			else if (shapeFlag & 128) renderVNode(push, vnode.ssContent, parentComponent, slotScopeId);
			else Vue.warn("[@vue/server-renderer] Invalid VNode type:", type, `(${typeof type})`);
		}
	}
	function renderVNodeChildren(push, children, parentComponent, slotScopeId) {
		for (let i = 0; i < children.length; i++) renderVNode(push, normalizeVNode(children[i]), parentComponent, slotScopeId);
	}
	function renderElementVNode(push, vnode, parentComponent, slotScopeId) {
		const tag = vnode.type;
		let { props, children, shapeFlag, scopeId } = vnode;
		let openTag = `<${tag}`;
		if (props) openTag += ssrRenderAttrs(props, tag);
		const renderedScopeIds = [];
		const appendScopeId = (id) => {
			if (id && (!props || !shared.hasOwn(props, id)) && !renderedScopeIds.includes(id)) {
				openTag += ` ${id}`;
				renderedScopeIds.push(id);
			}
		};
		if (scopeId) appendScopeId(scopeId);
		let curParent = parentComponent;
		let curVnode = vnode;
		while (curParent && curVnode === curParent.subTree) {
			curVnode = curParent.vnode;
			if (curVnode.scopeId) appendScopeId(curVnode.scopeId);
			curParent = curParent.parent;
		}
		if (slotScopeId) {
			const slotScopeIdList = slotScopeId.trim().split(" ");
			for (let i = 0; i < slotScopeIdList.length; i++) appendScopeId(slotScopeIdList[i]);
		}
		push(openTag + `>`);
		if (!shared.isVoidTag(tag)) {
			let hasChildrenOverride = false;
			if (props) {
				if (props.innerHTML != null) {
					hasChildrenOverride = true;
					push(String(props.innerHTML));
				} else if (props.textContent != null) {
					hasChildrenOverride = true;
					push(shared.escapeHtml(props.textContent));
				} else if (tag === "textarea" && props.value != null) {
					hasChildrenOverride = true;
					push(shared.escapeHtml(props.value));
				}
			}
			if (!hasChildrenOverride) {
				if (shapeFlag & 8) push(shared.escapeHtml(children));
				else if (shapeFlag & 16) renderVNodeChildren(push, children, parentComponent, slotScopeId);
			}
			push(`</${tag}>`);
		}
	}
	function applySSRDirectives(vnode, rawProps, dirs) {
		const toMerge = [];
		for (let i = 0; i < dirs.length; i++) {
			const binding = dirs[i];
			const { dir: { getSSRProps } } = binding;
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
			if (!disabled) Vue.warn(`[@vue/server-renderer] Teleport is missing target prop.`);
			return [];
		}
		if (!shared.isString(target)) {
			Vue.warn(`[@vue/server-renderer] Teleport target must be a query selector string.`);
			return [];
		}
		ssrRenderTeleport(push, (push2) => {
			renderVNodeChildren(push2, vnode.children, parentComponent, slotScopeId);
		}, target, disabled || disabled === "", parentComponent);
	}
	var { isVNode: isVNode$1 } = Vue.ssrUtils;
	function nestedUnrollBuffer(buffer, parentRet, startIndex) {
		if (!buffer.hasAsync) return parentRet + unrollBufferSync$1(buffer);
		let ret = parentRet;
		for (let i = startIndex; i < buffer.length; i += 1) {
			const item = buffer[i];
			if (shared.isString(item)) {
				ret += item;
				continue;
			}
			if (shared.isPromise(item)) return item.then((nestedItem) => {
				buffer[i] = nestedItem;
				return nestedUnrollBuffer(buffer, ret, i);
			});
			const result = nestedUnrollBuffer(item, ret, 0);
			if (shared.isPromise(result)) return result.then((nestedItem) => {
				buffer[i] = nestedItem;
				return nestedUnrollBuffer(buffer, "", i);
			});
			ret = result;
		}
		return ret;
	}
	function unrollBuffer$1(buffer) {
		return nestedUnrollBuffer(buffer, "", 0);
	}
	function unrollBufferSync$1(buffer) {
		let ret = "";
		for (let i = 0; i < buffer.length; i++) {
			let item = buffer[i];
			if (shared.isString(item)) ret += item;
			else ret += unrollBufferSync$1(item);
		}
		return ret;
	}
	async function renderToString(input, context = {}) {
		if (isVNode$1(input)) return renderToString(Vue.createApp({ render: () => input }), context);
		const vnode = Vue.createVNode(input._component, input._props);
		vnode.appContext = input._context;
		input.provide(Vue.ssrContextKey, context);
		let buffer;
		let result;
		try {
			buffer = await renderComponentVNode(vnode);
			result = await unrollBuffer$1(buffer);
			await resolveTeleports(context);
		} catch (err) {
			cleanupFailedRender(buffer, context);
			throw err;
		}
		stopWatchers(context);
		return result;
	}
	function stopWatchers(context, start = 0) {
		const handles = context.__watcherHandles;
		if (handles) for (let i = start; i < handles.length; i++) handles[i]();
	}
	function cleanupFailedRender(buffer, context) {
		const stopped = context.__watcherHandles ? context.__watcherHandles.length : 0;
		try {
			stopWatchers(context);
		} catch {}
		(async () => {
			if (buffer) await settleBuffer(buffer);
			for (const key in context.__teleportBuffers) await settleBuffer(context.__teleportBuffers[key]);
			stopWatchers(context, stopped);
		})().catch(shared.NOOP);
	}
	async function settleBuffer(buffer) {
		if (!buffer.hasAsync) return;
		for (let item of buffer) try {
			if (shared.isPromise(item)) item = await item;
			if (!shared.isString(item)) await settleBuffer(item);
		} catch {}
	}
	async function resolveTeleports(context) {
		if (context.__teleportBuffers) {
			context.teleports = context.teleports || {};
			for (const key in context.__teleportBuffers) context.teleports[key] = await unrollBuffer$1(context.__teleportBuffers[key]);
		}
	}
	var { isVNode } = Vue.ssrUtils;
	Vue.initDirectivesForSSR();
	exports.ssrIncludeBooleanAttr = shared.includeBooleanAttr;
	exports.renderToString = renderToString;
	exports.ssrGetDynamicModelProps = ssrGetDynamicModelProps;
	exports.ssrInterpolate = ssrInterpolate;
	exports.ssrLooseContain = ssrLooseContain;
	exports.ssrLooseEqual = ssrLooseEqual;
	exports.ssrRenderAttr = ssrRenderAttr;
	exports.ssrRenderAttrs = ssrRenderAttrs;
	exports.ssrRenderClass = ssrRenderClass;
	exports.ssrRenderComponent = ssrRenderComponent;
	exports.ssrRenderList = ssrRenderList;
	exports.ssrRenderSlot = ssrRenderSlot;
	exports.ssrRenderStyle = ssrRenderStyle;
	exports.ssrRenderVNode = renderVNode;
}));
// node_modules/laravel-vite-plugin/inertia-helpers/index.js
var import_server_renderer_cjs_prod = require_server_renderer_cjs_prod();
async function resolvePageComponent(path, pages) {
	for (const p of Array.isArray(path) ? path : [path]) {
		const page = pages[p];
		if (typeof page === "undefined") continue;
		return typeof page === "function" ? page() : page;
	}
	throw new Error(`Page not found: ${path}`);
}
// vendor/tightenco/ziggy/dist/index.js
var e = String.prototype.replace;
var t = /%20/g;
var n = {
	RFC1738: `RFC1738`,
	RFC3986: `RFC3986`
};
var r = {
	RFC1738: function(n) {
		return e.call(n, t, `+`);
	},
	RFC3986: function(e) {
		return String(e);
	}
};
var i = n.RFC1738;
n.RFC3986;
var a = n.RFC3986;
var o = Object.prototype.hasOwnProperty;
var s = Array.isArray;
var c = /* @__PURE__ */ new WeakMap();
var l = function(e, t) {
	return c.set(e, t), e;
};
function u(e) {
	return c.has(e);
}
var d = function(e) {
	return c.get(e);
};
var f = function(e, t) {
	c.set(e, t);
};
var p = (function() {
	let e = [];
	for (let t = 0; t < 256; ++t) e.push(`%` + ((t < 16 ? `0` : ``) + t.toString(16)).toUpperCase());
	return e;
})();
var m = function(e) {
	for (; e.length > 1;) {
		let t = e.pop(), n = t.obj[t.prop];
		if (s(n)) {
			let e = [];
			for (let t = 0; t < n.length; ++t) n[t] !== void 0 && e.push(n[t]);
			t.obj[t.prop] = e;
		}
	}
};
var h$1 = function(e, t) {
	let n = t && t.plainObjects ? Object.create(null) : {};
	for (let t = 0; t < e.length; ++t) e[t] !== void 0 && (n[t] = e[t]);
	return n;
};
var g = function e(t, n, r) {
	if (!n) return t;
	if (typeof n != `object`) {
		if (s(t)) t.push(n);
		else if (t && typeof t == `object`) {
			if (u(t)) {
				var i = d(t) + 1;
				t[i] = n, f(t, i);
			} else (r && (r.plainObjects || r.allowPrototypes) || !o.call(Object.prototype, n)) && (t[n] = !0);
		} else return [t, n];
		return t;
	}
	if (!t || typeof t != `object`) {
		if (u(n)) {
			for (var a = Object.keys(n), c = r && r.plainObjects ? {
				__proto__: null,
				0: t
			} : { 0: t }, p = 0; p < a.length; p++) {
				var m = parseInt(a[p], 10);
				c[m + 1] = n[a[p]];
			}
			return l(c, d(n) + 1);
		}
		return [t].concat(n);
	}
	let g = t;
	return s(t) && !s(n) && (g = h$1(t, r)), s(t) && s(n) ? (n.forEach(function(n, i) {
		if (o.call(t, i)) {
			let a = t[i];
			a && typeof a == `object` && n && typeof n == `object` ? t[i] = e(a, n, r) : t.push(n);
		} else t[i] = n;
	}), t) : Object.keys(n).reduce(function(t, i) {
		let a = n[i];
		if (o.call(t, i) && (a = e(t[i], a, r)), i === `__proto__` ? Object.defineProperty(t, i, {
			configurable: !0,
			enumerable: !0,
			value: a,
			writable: !0
		}) : t[i] = a, u(n) && !u(t) && l(t, d(n)), u(t)) {
			let e = parseInt(i, 10);
			String(e) === i && e >= 0 && e > d(t) && f(t, e);
		}
		return t;
	}, g);
};
var _ = function(e) {
	let t = e.replace(/\+/g, ` `);
	try {
		return decodeURIComponent(t);
	} catch (e) {
		return t;
	}
};
var v = 1024;
var y = function(e, t, n, r) {
	if (e.length === 0) return e;
	let a = e;
	typeof e == `symbol` ? a = Symbol.prototype.toString.call(e) : typeof e != `string` && (a = String(e));
	let o = ``;
	for (let e = 0; e < a.length; e += v) {
		let t = a.length >= v ? a.slice(e, e + v) : a;
		if (e + v < a.length) {
			let n = t.charCodeAt(t.length - 1);
			n >= 55296 && n <= 56319 && (t = t.slice(0, -1), --e);
		}
		let n = [];
		for (let e = 0; e < t.length; ++e) {
			let a = t.charCodeAt(e);
			a === 45 || a === 46 || a === 95 || a === 126 || a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122 || r === i && (a === 40 || a === 41) ? n[n.length] = t.charAt(e) : a < 128 ? n[n.length] = p[a] : a < 2048 ? n[n.length] = p[192 | a >> 6] + p[128 | a & 63] : a < 55296 || a >= 57344 ? n[n.length] = p[224 | a >> 12] + p[128 | a >> 6 & 63] + p[128 | a & 63] : (e += 1, a = 65536 + ((a & 1023) << 10 | t.charCodeAt(e) & 1023), n[n.length] = p[240 | a >> 18] + p[128 | a >> 12 & 63] + p[128 | a >> 6 & 63] + p[128 | a & 63]);
		}
		o += n.join(``);
	}
	return o;
};
var b = function(e) {
	let t = [{
		obj: { o: e },
		prop: `o`
	}], n = /* @__PURE__ */ new WeakMap();
	for (let e = 0; e < t.length; ++e) {
		let r = t[e], i = r.obj[r.prop], a = Object.keys(i);
		for (let e = 0; e < a.length; ++e) {
			let r = a[e], o = i[r];
			typeof o == `object` && o && !n.has(o) && (t.push({
				obj: i,
				prop: r
			}), n.set(o, !0));
		}
	}
	return m(t), e;
};
var x = function(e) {
	return Object.prototype.toString.call(e) === `[object RegExp]`;
};
var S = function(e) {
	return !e || typeof e != `object` ? !1 : !!(e.constructor && typeof e.constructor.isBuffer == `function` && e.constructor.isBuffer(e));
};
var C = function(e, t, n, r) {
	if (u(e)) {
		var i = d(e) + 1;
		return e[i] = t, f(e, i), e;
	}
	var a = [].concat(e, t);
	return a.length > n ? l(h$1(a, { plainObjects: r }), a.length - 1) : a;
};
var w = function(e, t) {
	if (s(e)) {
		let n = [];
		for (let r = 0; r < e.length; r += 1) n.push(t(e[r]));
		return n;
	}
	return t(e);
};
var T = Object.prototype.hasOwnProperty;
var E = {
	brackets: function(e) {
		return e + `[]`;
	},
	comma: `comma`,
	indices: function(e, t) {
		return e + `[` + t + `]`;
	},
	repeat: function(e) {
		return e;
	}
};
var D = Array.isArray;
var O = Array.prototype.push;
var k = function(e, t) {
	O.apply(e, D(t) ? t : [t]);
};
var A = Date.prototype.toISOString;
var j = a;
var M = {
	addQueryPrefix: !1,
	allowDots: !1,
	allowEmptyArrays: !1,
	arrayFormat: `indices`,
	delimiter: `&`,
	encode: !0,
	encodeDotInKeys: !1,
	encoder: y,
	encodeValuesOnly: !1,
	format: j,
	formatter: r[j],
	indices: !1,
	serializeDate: function(e) {
		return A.call(e);
	},
	skipNulls: !1,
	strictNullHandling: !1
};
var N = function(e) {
	return typeof e == `string` || typeof e == `number` || typeof e == `boolean` || typeof e == `symbol` || typeof e == `bigint`;
};
var P = {};
var F = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
	let _ = e, v = g, y = 0, b = !1;
	for (; (v = v.get(P)) !== void 0 && !b;) {
		let t = v.get(e);
		if (y += 1, t !== void 0) {
			if (t === y) throw RangeError(`Cyclic object value`);
			b = !0;
		}
		v.get(P) === void 0 && (y = 0);
	}
	if (typeof l == `function` ? _ = l(t, _) : _ instanceof Date ? _ = f(_) : n === `comma` && D(_) && (_ = w(_, function(e) {
		return e instanceof Date ? f(e) : e;
	})), _ === null) {
		if (a) return c && !h ? c(t, M.encoder, `key`, p) : t;
		_ = ``;
	}
	if (N(_) || S(_)) return c ? [m(h ? t : c(t, M.encoder, `key`, p)) + `=` + m(c(_, M.encoder, `value`, p))] : [m(t) + `=` + m(String(_))];
	let x = [];
	if (_ === void 0) return x;
	let C;
	if (n === `comma` && D(_)) h && c && (_ = w(_, function(e) {
		return e == null ? e : c(e);
	})), C = [{ value: _.length > 0 ? _.join(`,`) || null : void 0 }];
	else if (D(l)) C = l;
	else {
		let e = Object.keys(_);
		C = u ? e.sort(u) : e;
	}
	let T = s ? t.replace(/\./g, `%2E`) : t, E = r && D(_) && _.length === 1 ? T + `[]` : T;
	if (i && D(_) && _.length === 0) return E + `[]`;
	for (let t = 0; t < C.length; ++t) {
		let v = C[t], b = typeof v == `object` && v.value !== void 0 ? v.value : _[v];
		if (o && b === null) continue;
		let S = d && s ? v.replace(/\./g, `%2E`) : v, w = D(_) ? typeof n == `function` ? n(E, S) : E : E + (d ? `.` + S : `[` + S + `]`);
		g.set(e, y);
		let T = /* @__PURE__ */ new WeakMap();
		T.set(P, g), k(x, F(b, w, n, r, i, a, o, s, n === `comma` && h && D(_) ? null : c, l, u, d, f, p, m, h, T));
	}
	return x;
};
var I = function(e) {
	if (!e) return M;
	if (e.allowEmptyArrays !== void 0 && typeof e.allowEmptyArrays != `boolean`) throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
	if (e.encodeDotInKeys !== void 0 && typeof e.encodeDotInKeys != `boolean`) throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
	if (e.encoder !== null && e.encoder !== void 0 && typeof e.encoder != `function`) throw TypeError(`Encoder has to be a function.`);
	let t = a;
	if (e.format !== void 0) {
		if (!T.call(r, e.format)) throw TypeError(`Unknown format option provided.`);
		t = e.format;
	}
	let n = r[t], i = M.filter;
	(typeof e.filter == `function` || D(e.filter)) && (i = e.filter);
	let o;
	if (o = e.arrayFormat in E ? e.arrayFormat : `indices` in e ? e.indices ? `indices` : `repeat` : M.arrayFormat, `commaRoundTrip` in e && typeof e.commaRoundTrip != `boolean`) throw TypeError("`commaRoundTrip` must be a boolean, or absent");
	let s = e.allowDots === void 0 ? e.encodeDotInKeys === !0 || M.allowDots : !!e.allowDots;
	return {
		addQueryPrefix: typeof e.addQueryPrefix == `boolean` ? e.addQueryPrefix : M.addQueryPrefix,
		allowDots: s,
		allowEmptyArrays: typeof e.allowEmptyArrays == `boolean` ? !!e.allowEmptyArrays : M.allowEmptyArrays,
		arrayFormat: o,
		commaRoundTrip: e.commaRoundTrip,
		delimiter: e.delimiter === void 0 ? M.delimiter : e.delimiter,
		encode: typeof e.encode == `boolean` ? e.encode : M.encode,
		encodeDotInKeys: typeof e.encodeDotInKeys == `boolean` ? e.encodeDotInKeys : M.encodeDotInKeys,
		encoder: typeof e.encoder == `function` ? e.encoder : M.encoder,
		encodeValuesOnly: typeof e.encodeValuesOnly == `boolean` ? e.encodeValuesOnly : M.encodeValuesOnly,
		filter: i,
		format: t,
		formatter: n,
		serializeDate: typeof e.serializeDate == `function` ? e.serializeDate : M.serializeDate,
		skipNulls: typeof e.skipNulls == `boolean` ? e.skipNulls : M.skipNulls,
		sort: typeof e.sort == `function` ? e.sort : null,
		strictNullHandling: typeof e.strictNullHandling == `boolean` ? e.strictNullHandling : M.strictNullHandling
	};
};
function L(e, t) {
	let n = e, r = I(t), i, a;
	typeof r.filter == `function` ? (a = r.filter, n = a(``, n)) : D(r.filter) && (a = r.filter, i = a);
	let o = [];
	if (typeof n != `object` || !n) return ``;
	let s = E[r.arrayFormat], c = s === `comma` && r.commaRoundTrip;
	i || (i = Object.keys(n)), r.sort && i.sort(r.sort);
	let l = /* @__PURE__ */ new WeakMap();
	for (let e = 0; e < i.length; ++e) {
		let t = i[e];
		r.skipNulls && n[t] === null || k(o, F(n[t], t, s, c, r.allowEmptyArrays, r.strictNullHandling, r.skipNulls, r.encodeDotInKeys, r.encode ? r.encoder : null, r.filter, r.sort, r.allowDots, r.serializeDate, r.format, r.formatter, r.encodeValuesOnly, l));
	}
	let u = o.join(r.delimiter), d = r.addQueryPrefix === !0 ? `?` : ``;
	return u.length > 0 ? d + u : ``;
}
var R = Object.prototype.hasOwnProperty;
var z = Array.isArray;
var B = {
	allowDots: !1,
	allowEmptyArrays: !1,
	allowPrototypes: !1,
	allowSparse: !1,
	arrayLimit: 20,
	comma: !1,
	decodeDotInKeys: !1,
	decoder: _,
	delimiter: `&`,
	depth: 5,
	duplicates: `combine`,
	ignoreQueryPrefix: !1,
	parameterLimit: 1e3,
	parseArrays: !0,
	plainObjects: !1,
	strictNullHandling: !1
};
var V = function(e, t) {
	return e && typeof e == `string` && t.comma && e.indexOf(`,`) > -1 ? e.split(`,`) : e;
};
var H = function(e, t) {
	let n = { __proto__: null }, r = t.ignoreQueryPrefix ? e.replace(/^\?/, ``) : e, i = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, a = r.split(t.delimiter, i), o = 0;
	for (; o < a.length; ++o) {
		let e = a[o], r = e.indexOf(`]=`), i = r === -1 ? e.indexOf(`=`) : r + 1, s, c;
		i === -1 ? (s = t.decoder(e, B.decoder, `key`), c = t.strictNullHandling ? null : ``) : (s = t.decoder(e.slice(0, i), B.decoder, `key`), c = w(V(e.slice(i + 1), t), function(e) {
			return t.decoder(e, B.decoder, `value`);
		})), e.indexOf(`[]=`) > -1 && (c = z(c) ? [c] : c), t.comma && z(c) && c.length > t.arrayLimit && (c = C([], c, t.arrayLimit, t.plainObjects));
		let l = R.call(n, s);
		l && t.duplicates === `combine` ? n[s] = C(n[s], c, t.arrayLimit, t.plainObjects) : l && t.duplicates !== `last` || (n[s] = c);
	}
	return n;
};
var U = function(e, t, n, r) {
	let i = r ? t : V(t, n);
	for (let t = e.length - 1; t >= 0; --t) {
		let r, a = e[t];
		if (a === `[]` && n.parseArrays) r = u(i) ? i : n.allowEmptyArrays && (i === `` || n.strictNullHandling && i === null) ? [] : C([], i, n.arrayLimit, n.plainObjects);
		else {
			r = n.plainObjects ? Object.create(null) : {};
			let e = a.charAt(0) === `[` && a.charAt(a.length - 1) === `]` ? a.slice(1, -1) : a, t = n.decodeDotInKeys ? e.replace(/%2E/g, `.`) : e, o = parseInt(t, 10), s = !isNaN(o) && a !== t && String(o) === t && o >= 0 && n.parseArrays;
			!n.parseArrays && t === `` ? r = { 0: i } : s && o <= n.arrayLimit ? (r = [], r[o] = i) : s ? (r[o] = i, l(r, o)) : t !== `__proto__` && (r[t] = i);
		}
		i = r;
	}
	return i;
};
var W = function(e, t, n, r) {
	if (!e) return;
	let i = n.allowDots ? e.replace(/\.([^.[]+)/g, `[$1]`) : e, a = /(\[[^[\]]*])/, o = /(\[[^[\]]*])/g, s = n.depth > 0 && a.exec(i), c = s ? i.slice(0, s.index) : i, l = [];
	if (c) {
		if (!n.plainObjects && R.call(Object.prototype, c) && !n.allowPrototypes) return;
		l.push(c);
	}
	let u = 0;
	for (; n.depth > 0 && (s = o.exec(i)) !== null && u < n.depth;) {
		if (u += 1, !n.plainObjects && R.call(Object.prototype, s[1].slice(1, -1)) && !n.allowPrototypes) return;
		l.push(s[1]);
	}
	return s && l.push(`[` + i.slice(s.index) + `]`), U(l, t, n, r);
};
var G = function(e) {
	if (!e) return B;
	if (e.allowEmptyArrays !== void 0 && typeof e.allowEmptyArrays != `boolean`) throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
	if (e.decodeDotInKeys !== void 0 && typeof e.decodeDotInKeys != `boolean`) throw TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
	if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != `function`) throw TypeError(`Decoder has to be a function.`);
	let t = e.duplicates === void 0 ? B.duplicates : e.duplicates;
	if (t !== `combine` && t !== `first` && t !== `last`) throw TypeError(`The duplicates option must be either combine, first, or last`);
	return {
		allowDots: e.allowDots === void 0 ? e.decodeDotInKeys === !0 || B.allowDots : !!e.allowDots,
		allowEmptyArrays: typeof e.allowEmptyArrays == `boolean` ? !!e.allowEmptyArrays : B.allowEmptyArrays,
		allowPrototypes: typeof e.allowPrototypes == `boolean` ? e.allowPrototypes : B.allowPrototypes,
		allowSparse: typeof e.allowSparse == `boolean` ? e.allowSparse : B.allowSparse,
		arrayLimit: typeof e.arrayLimit == `number` ? e.arrayLimit : B.arrayLimit,
		comma: typeof e.comma == `boolean` ? e.comma : B.comma,
		decodeDotInKeys: typeof e.decodeDotInKeys == `boolean` ? e.decodeDotInKeys : B.decodeDotInKeys,
		decoder: typeof e.decoder == `function` ? e.decoder : B.decoder,
		delimiter: typeof e.delimiter == `string` || x(e.delimiter) ? e.delimiter : B.delimiter,
		depth: typeof e.depth == `number` || e.depth === !1 ? +e.depth : B.depth,
		duplicates: t,
		ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
		parameterLimit: typeof e.parameterLimit == `number` ? e.parameterLimit : B.parameterLimit,
		parseArrays: e.parseArrays !== !1,
		plainObjects: typeof e.plainObjects == `boolean` ? e.plainObjects : B.plainObjects,
		strictNullHandling: typeof e.strictNullHandling == `boolean` ? e.strictNullHandling : B.strictNullHandling
	};
};
function K(e, t) {
	let n = G(t);
	if (e === `` || e == null) return n.plainObjects ? Object.create(null) : {};
	let r = typeof e == `string` ? H(e, n) : e, i = n.plainObjects ? Object.create(null) : {}, a = Object.keys(r);
	for (let t = 0; t < a.length; ++t) {
		let o = a[t], s = W(o, r[o], n, typeof e == `string`);
		i = g(i, s, n);
	}
	return n.allowSparse === !0 ? i : b(i);
}
function q(e) {
	return e.replace(/(%[0-9a-f]{2})+/gi, (e) => {
		try {
			return decodeURIComponent(e);
		} catch (t) {
			return e;
		}
	});
}
var J = class {
	constructor(e, t, n) {
		var r, i;
		this.name = e, this.definition = t, this.bindings = (r = t.bindings) == null ? {} : r, this.wheres = (i = t.wheres) == null ? {} : i, this.config = n;
	}
	get template() {
		let e = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, ``);
		return e === `` ? `/` : e;
	}
	get origin() {
		return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ``}` : this.config.url : ``;
	}
	get parameterSegments() {
		var e, t;
		return (e = (t = this.template.match(/{[^}?]+\??}/g)) == null ? void 0 : t.map((e) => ({
			name: e.replace(/{|\??}/g, ``),
			required: !/\?}$/.test(e)
		}))) == null ? [] : e;
	}
	matchesUrl(e) {
		if (!this.definition.methods.includes(`GET`)) return !1;
		let t = this.template.replace(/[.*+$()[\]]/g, `\\$&`).replace(/(\/?){([^}?]*)(\??)}/g, (e, t, n, r) => {
			var i;
			let a = `(?<${n}>${((i = this.wheres[n]) == null ? void 0 : i.replace(/(^\^)|(\$$)/g, ``)) || `[^/?]+`})`;
			return r ? `(${t}${a})?` : `${t}${a}`;
		}).replace(/^\w+:\/\//, ``), [n, r] = e.replace(/^\w+:\/\//, ``).split(`?`), i = RegExp(`^${t}/?$`).exec(n);
		if (!i) try {
			i = RegExp(`^${t}/?$`).exec(decodeURI(n));
		} catch (e) {}
		if (i) {
			for (let e in i.groups) typeof i.groups[e] == `string` && (i.groups[e] = q(i.groups[e]));
			return {
				params: i.groups,
				query: K(r)
			};
		}
		return !1;
	}
	compile(e) {
		return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (t, n, r) => {
			var i;
			if (!r && [null, void 0].includes(e[n])) throw Error(`Ziggy error: '${n}' parameter is required for route '${this.name}'.`);
			if (this.wheres[n]) {
				var a;
				if (!RegExp(`^${r ? `(${this.wheres[n]})?` : this.wheres[n]}$`).test((a = e[n]) == null ? `` : a)) throw Error(`Ziggy error: '${n}' parameter '${e[n]}' does not match required format '${this.wheres[n]}' for route '${this.name}'.`);
			}
			return encodeURI((i = e[n]) == null ? `` : i).replace(/%7C/g, `|`).replace(/%25/g, `%`).replace(/\$/g, `%24`);
		}).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, `$1/`).replace(/\/+$/, ``) : this.template;
	}
};
function Y(e) {
	"@babel/helpers - typeof";
	return Y = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype ? `symbol` : typeof e;
	}, Y(e);
}
function X(e, t) {
	if (Y(e) != `object` || !e) return e;
	var n;
	if (typeof Symbol < `u` && (n = e[Symbol.toPrimitive]) !== void 0) {
		var r = n.call(e, t || `default`);
		if (Y(r) != `object`) return r;
		throw TypeError(`@@toPrimitive must return a primitive value.`);
	}
	return (t === `string` ? String : Number)(e);
}
function ee(e) {
	var t = X(e, `string`);
	return Y(t) == `symbol` ? t : t + ``;
}
function te(e, t, n) {
	return (t = ee(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Z(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Q(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Z(Object(n), !0).forEach(function(t) {
			te(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Z(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var ne = class extends String {
	constructor(e, t, n = !0, r) {
		var i;
		if (super(), this._config = r == null ? typeof Ziggy < `u` ? Ziggy : (i = globalThis) == null ? void 0 : i.Ziggy : r, !this._config && typeof document < `u` && document.getElementById(`ziggy-routes-json`) && (globalThis.Ziggy = JSON.parse(document.getElementById(`ziggy-routes-json`).textContent), this._config = globalThis.Ziggy), this._config = Q(Q({}, this._config), {}, { absolute: n }), e) {
			if (!this._config.routes[e]) throw Error(`Ziggy error: route '${e}' is not in the route list.`);
			this._route = new J(e, this._config.routes[e], this._config), this._params = this._parse(t);
		}
	}
	toString() {
		let e = Object.keys(this._params).filter((e) => !this._route.parameterSegments.some(({ name: t }) => t === e)).filter((e) => e !== `_query`).reduce((e, t) => Q(Q({}, e), {}, { [t]: this._params[t] }), {});
		return this._route.compile(this._params) + L(Q(Q({}, e), this._params._query), {
			addQueryPrefix: !0,
			arrayFormat: `indices`,
			encodeValuesOnly: !0,
			skipNulls: !0,
			encoder: (e, t) => typeof e == `boolean` ? Number(e) : t(e)
		});
	}
	_unresolve(e) {
		e ? this._config.absolute && e.startsWith(`/`) && (e = this._location().host + e) : e = this._currentUrl();
		let t = {}, [n, r] = Object.entries(this._config.routes).find(([n, r]) => t = new J(n, r, this._config).matchesUrl(e)) || [void 0, void 0];
		return Q(Q({ name: n }, t), {}, { route: r });
	}
	_currentUrl() {
		let { host: e, pathname: t, search: n } = this._location();
		return (this._config.absolute ? e + t : t.replace(this._config.url.replace(/^\w*:\/\/[^/]+/, ``), ``).replace(/^\/+/, `/`)) + n;
	}
	current(e, t) {
		let { name: n, params: r, query: i, route: a } = this._unresolve();
		if (!e) return n;
		let o = RegExp(`^${e.replace(/\./g, `\\.`).replace(/\*/g, `.*`)}$`).test(n);
		if ([null, void 0].includes(t) || !o) return o;
		let s = new J(n, a, this._config);
		t = this._parse(t, s);
		let c = Q(Q({}, r), i);
		if (Object.values(t).every((e) => !e) && !Object.values(c).some((e) => e !== void 0)) return !0;
		let l = (e, t) => Object.entries(e).every(([e, n]) => Array.isArray(n) && Array.isArray(t[e]) ? n.every((n) => t[e].includes(n) || t[e].includes(q(String(n)))) : typeof n == `object` && typeof t[e] == `object` && n !== null && t[e] !== null ? l(n, t[e]) : t[e] == n || t[e] == q(String(n)));
		return l(t, c);
	}
	_location() {
		var e, t, n;
		let { host: r = ``, pathname: i = ``, search: a = `` } = typeof window < `u` ? window.location : {}, o = typeof this._config.location == `string` ? new URL(this._config.location) : this._config.location;
		return {
			host: (e = o == null ? void 0 : o.host) == null ? r : e,
			pathname: (t = o == null ? void 0 : o.pathname) == null ? i : t,
			search: (n = o == null ? void 0 : o.search) == null ? a : n
		};
	}
	get params() {
		let { params: e, query: t } = this._unresolve();
		return Q(Q({}, e), t);
	}
	get routeParams() {
		return this._unresolve().params;
	}
	get queryParams() {
		return this._unresolve().query;
	}
	has(e) {
		return this._config.routes.hasOwnProperty(e);
	}
	_parse(e = {}, t = this._route) {
		e ??= {}, e = [`string`, `number`].includes(typeof e) ? [e] : e;
		let n = t.parameterSegments.filter(({ name: e }) => !this._config.defaults[e]);
		return Array.isArray(e) ? e = e.reduce((e, t, r) => n[r] ? Q(Q({}, e), {}, { [n[r].name]: t }) : typeof t == `object` ? Q(Q({}, e), t) : Q(Q({}, e), {}, { [t]: `` }), {}) : n.length === 1 && !e.hasOwnProperty(n[0].name) && (e.hasOwnProperty(Object.values(t.bindings)[0]) || e.hasOwnProperty(`id`)) && (e = { [n[0].name]: e }), Q(Q({}, this._defaults(t)), this._substituteBindings(e, t));
	}
	_defaults(e) {
		return e.parameterSegments.filter(({ name: e }) => this._config.defaults[e]).reduce((e, { name: t }, n) => Q(Q({}, e), {}, { [t]: this._config.defaults[t] }), {});
	}
	_substituteBindings(e, { bindings: t, parameterSegments: n }) {
		return Object.entries(e).reduce((e, [r, i]) => {
			if (!i || typeof i != `object` || Array.isArray(i) || !n.some(({ name: e }) => e === r)) return Q(Q({}, e), {}, { [r]: i });
			let a = i.hasOwnProperty(t[r]) ? t[r] : i.hasOwnProperty(`id`) ? `id` : void 0;
			if (a === void 0) throw Error(`Ziggy error: object passed as '${r}' parameter is missing route model binding key '${t[r]}'.`);
			return Q(Q({}, e), {}, { [r]: i[a] });
		}, {});
	}
	valueOf() {
		return this.toString();
	}
};
function $(e, t, n, r) {
	let i = new ne(e, t, n, r);
	return e ? i.toString() : i;
}
// resources/js/ssr.ts
var appName = "Matos";
server_default((page) => createInertiaApp({
	page,
	render: import_server_renderer_cjs_prod.renderToString,
	title: (title) => `${title} - ${appName}`,
	resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, /* #__PURE__ */ Object.assign({
		"./pages/Admin/Categories/Create.vue": () => import("./assets/Create-Ba3gLWiO.js"),
		"./pages/Admin/Categories/Edit.vue": () => import("./assets/Edit-BVraDpQp.js"),
		"./pages/Admin/Categories/Index.vue": () => import("./assets/Index-D8IplBbd.js"),
		"./pages/Admin/Dashboard.vue": () => import("./assets/Dashboard-DePfCpxO.js"),
		"./pages/Admin/Equipments/Index.vue": () => import("./assets/Index-L3RZBWYH.js"),
		"./pages/Admin/Equipments/Show.vue": () => import("./assets/Show-D94fQ_2S.js"),
		"./pages/Admin/Newsletters/Create.vue": () => import("./assets/Create-kn-BRmRd.js"),
		"./pages/Admin/Newsletters/Edit.vue": () => import("./assets/Edit-COYCoHGq.js"),
		"./pages/Admin/Newsletters/Index.vue": () => import("./assets/Index-CVL3mUXh.js"),
		"./pages/Admin/Users/Create.vue": () => import("./assets/Create-BNnKrRtu.js"),
		"./pages/Admin/Users/Edit.vue": () => import("./assets/Edit-p7GU1yX7.js"),
		"./pages/Admin/Users/Index.vue": () => import("./assets/Index-CHyxIahk.js"),
		"./pages/App/Dashboard.vue": () => import("./assets/Dashboard-DUm9nekB.js"),
		"./pages/App/Organizations/Calendar/Index.vue": () => import("./assets/Index-8PCeCKEj.js"),
		"./pages/App/Organizations/Create.vue": () => import("./assets/Create-C3Z2hFh_.js"),
		"./pages/App/Organizations/Equipments/Create.vue": () => import("./assets/Create-3IGgux39.js"),
		"./pages/App/Organizations/Equipments/Edit.vue": () => import("./assets/Edit-wBWTOc4S.js"),
		"./pages/App/Organizations/Equipments/Index.vue": () => import("./assets/Index-B9gB-WJ2.js"),
		"./pages/App/Organizations/Index.vue": () => import("./assets/Index-BSLnyC_J.js"),
		"./pages/App/Organizations/Reservations/In/Edit.vue": () => import("./assets/Edit-CVMuJARx.js"),
		"./pages/App/Organizations/Reservations/In/Index.vue": () => import("./assets/Index-BdKDciT6.js"),
		"./pages/App/Organizations/Reservations/Layout.vue": () => import("./assets/Layout-D60MvQl6.js"),
		"./pages/App/Organizations/Reservations/Out/Create.vue": () => import("./assets/Create-DfQRXjxF.js"),
		"./pages/App/Organizations/Reservations/Out/Edit.vue": () => import("./assets/Edit-BqOyXLLK.js"),
		"./pages/App/Organizations/Reservations/Out/Index.vue": () => import("./assets/Index-CVz4-UYo.js"),
		"./pages/App/Organizations/Settings/Depots/Create.vue": () => import("./assets/Create-DCZMCC04.js"),
		"./pages/App/Organizations/Settings/Depots/Edit.vue": () => import("./assets/Edit-Cso6BwPM.js"),
		"./pages/App/Organizations/Settings/Depots/Index.vue": () => import("./assets/Index-BYy-zMTL.js"),
		"./pages/App/Organizations/Settings/Edit.vue": () => import("./assets/Edit-Cl9MR9wP.js"),
		"./pages/App/Organizations/Settings/Members/Index.vue": () => import("./assets/Index-BzuFc-1p.js"),
		"./pages/App/Organizations/Settings/Partials/DeleteOrganization.vue": () => import("./assets/DeleteOrganization-BXVnq6_-.js"),
		"./pages/App/Organizations/Settings/Partials/DepotsManagement.vue": () => import("./assets/DepotsManagement-IOsv3LdQ.js"),
		"./pages/App/Organizations/Settings/Partials/GeneralForm.vue": () => import("./assets/GeneralForm-DKjzVaPt.js"),
		"./pages/App/Organizations/Settings/Partials/MembersManagement.vue": () => import("./assets/MembersManagement-CKV7WPTh.js"),
		"./pages/App/Organizations/Show.vue": () => import("./assets/Show-N9XZCoO5.js"),
		"./pages/Conditions.vue": () => import("./assets/Conditions-Dmn52WyE.js"),
		"./pages/Discover.vue": () => import("./assets/Discover-D1pfNoU8.js"),
		"./pages/Faq.vue": () => import("./assets/Faq-CaIGEOSr.js"),
		"./pages/HowItWorks.vue": () => import("./assets/HowItWorks-CTnl-exO.js"),
		"./pages/Privacy.vue": () => import("./assets/Privacy-B6QflXG2.js"),
		"./pages/Public/Carts/Show.vue": () => import("./assets/Show-CDN23jx0.js"),
		"./pages/Public/Checkout/Index.vue": () => import("./assets/Index-CcnZdbUC.js"),
		"./pages/Public/Checkout/Success.vue": () => import("./assets/Success-CQ-hpfJ6.js"),
		"./pages/Public/Equipments/Show.vue": () => import("./assets/Show-W-jc2Zw6.js"),
		"./pages/Public/Home.vue": () => import("./assets/Home-B2P6dp63.js"),
		"./pages/Terms.vue": () => import("./assets/Terms-Dos43Xa6.js"),
		"./pages/auth/ConfirmPassword.vue": () => import("./assets/ConfirmPassword-YayI-SA5.js"),
		"./pages/auth/ForgotPassword.vue": () => import("./assets/ForgotPassword-GGUhRi5D.js"),
		"./pages/auth/Login.vue": () => import("./assets/Login-DRfGl-K_.js"),
		"./pages/auth/Register.vue": () => import("./assets/Register-Dt3FVq9H.js"),
		"./pages/auth/ResetPassword.vue": () => import("./assets/ResetPassword-BxFIZN_r.js"),
		"./pages/auth/VerifyEmail.vue": () => import("./assets/VerifyEmail-BHfFkbug.js"),
		"./pages/settings/Appearance.vue": () => import("./assets/Appearance-oCSRiJMK.js"),
		"./pages/settings/Password.vue": () => import("./assets/Password-BJsNw8Ip.js"),
		"./pages/settings/Profile.vue": () => import("./assets/Profile-oCia6Eoq.js")
	})),
	setup({ App, props, plugin }) {
		const app = (0, vue_exports.createSSRApp)({ render: () => (0, vue_exports.h)(App, props) });
		const ziggyConfig = {
			...page.props.ziggy,
			location: new URL(page.props.ziggy.location)
		};
		const route = (name, params, absolute) => $(name, params, absolute, ziggyConfig);
		app.config.globalProperties.route = route;
		if (typeof window === "undefined") global.route = route;
		app.use(plugin);
		return app;
	}
}), { port: 13714 });
export { useForm as a, vue_exports as c, __toESM as d, router12 as i, __exportAll as l, head_default as n, usePage as o, link_default as r, whenVisible_default as s, require_server_renderer_cjs_prod as t, __reExport as u };
