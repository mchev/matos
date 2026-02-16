import { ref, computed, onMounted, onUnmounted, watch, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Input-BNuRmWJk.js";
import { X, Loader, MapPin } from "lucide-vue-next";
import debounce from "lodash/debounce.js";
import axios from "axios";
const _sfc_main = {
  __name: "AddressInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: [String, Object],
      default: null
    },
    placeholder: {
      type: String,
      default: "Adresse"
    },
    minQueryLength: {
      type: Number,
      default: 3
    },
    debounceTime: {
      type: Number,
      default: 300
    }
  },
  emits: ["update:modelValue", "error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const addressQuery = ref("");
    const suggestions = ref([]);
    const showSuggestions = ref(false);
    const isLoading = ref(false);
    const error = ref("");
    const selectedIndex = ref(-1);
    const dropdownId = computed(() => `address-dropdown-${Math.random().toString(36).substr(2, 9)}`);
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
      initializeAddress();
    });
    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });
    function initializeAddress() {
      if (!props.modelValue) return;
      addressQuery.value = typeof props.modelValue === "string" ? props.modelValue : props.modelValue.name || "";
    }
    function handleClickOutside(event) {
      const container = event.target.closest("[data-address-input]");
      if (!container) {
        showSuggestions.value = false;
        selectedIndex.value = -1;
      }
    }
    function navigateSuggestions(direction) {
      if (!suggestions.value.length) return;
      if (direction === "next") {
        selectedIndex.value = selectedIndex.value < suggestions.value.length - 1 ? selectedIndex.value + 1 : 0;
      } else {
        selectedIndex.value = selectedIndex.value > 0 ? selectedIndex.value - 1 : suggestions.value.length - 1;
      }
    }
    function handleEnterKey() {
      if (selectedIndex.value >= 0 && suggestions.value[selectedIndex.value]) {
        selectSuggestion(suggestions.value[selectedIndex.value]);
      }
    }
    function handleEscape() {
      showSuggestions.value = false;
      selectedIndex.value = -1;
    }
    const fetchAddressSuggestions = debounce(async (query) => {
      var _a;
      if (query.length < props.minQueryLength) {
        suggestions.value = [];
        return;
      }
      isLoading.value = true;
      error.value = "";
      try {
        const response = await axios.get(
          `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(query)}&limit=5`,
          { timeout: 5e3 }
        );
        suggestions.value = ((_a = response.data.features) == null ? void 0 : _a.length) ? response.data.features.map((feature) => ({
          id: feature.properties.id,
          name: feature.properties.name,
          housenumber: feature.properties.housenumber,
          street: feature.properties.street,
          city: feature.properties.city,
          postcode: feature.properties.postcode,
          context: feature.properties.context,
          type: feature.properties.type,
          coordinates: {
            lat: feature.geometry.coordinates[1],
            lng: feature.geometry.coordinates[0]
          }
        })) : [];
      } catch (err) {
        console.error("Error fetching address suggestions:", err);
        error.value = "Une erreur est survenue lors de la recherche. Veuillez réessayer.";
        emit("error", error.value);
        suggestions.value = [];
      } finally {
        isLoading.value = false;
      }
    }, props.debounceTime);
    function selectSuggestion(suggestion) {
      const addressParts = [
        suggestion.housenumber,
        suggestion.street
      ].filter(Boolean);
      addressQuery.value = addressParts.join(" ");
      showSuggestions.value = false;
      error.value = "";
      selectedIndex.value = -1;
      emit("update:modelValue", {
        name: addressParts.join(" "),
        street: suggestion.street,
        housenumber: suggestion.housenumber,
        city: suggestion.city,
        postcode: suggestion.postcode,
        departement: suggestion.postcode.substring(0, 2),
        context: suggestion.context,
        type: suggestion.type,
        lat: suggestion.coordinates.lat,
        lng: suggestion.coordinates.lng
      });
    }
    function resetSearch() {
      addressQuery.value = "";
      suggestions.value = [];
      showSuggestions.value = false;
      error.value = "";
      emit("update:modelValue", null);
    }
    watch(() => props.modelValue, initializeAddress);
    watch(addressQuery, (newValue) => {
      if (newValue.length >= props.minQueryLength) {
        fetchAddressSuggestions(newValue);
      } else {
        suggestions.value = [];
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative w-full",
        "data-address-input": ""
      }, _attrs))}><div class="relative">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        modelValue: addressQuery.value,
        "onUpdate:modelValue": ($event) => addressQuery.value = $event,
        type: "text",
        placeholder: __props.placeholder,
        "aria-expanded": showSuggestions.value,
        "aria-controls": dropdownId.value,
        "aria-describedby": error.value ? `${dropdownId.value}-error` : void 0,
        role: "combobox",
        onFocus: ($event) => showSuggestions.value = true,
        onKeydown: [
          ($event) => navigateSuggestions("next"),
          ($event) => navigateSuggestions("prev"),
          handleEnterKey,
          handleEscape
        ]
      }, {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MapPin), {
              class: "h-5 w-5 text-muted-foreground",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MapPin), {
                class: "h-5 w-5 text-muted-foreground",
                "aria-hidden": "true"
              })
            ];
          }
        }),
        suffix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
            if (addressQuery.value) {
              _push2(`<button class="text-muted-foreground hover:text-foreground" aria-label="Effacer la recherche"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            if (isLoading.value) {
              _push2(ssrRenderComponent(unref(Loader), {
                class: "h-4 w-4 animate-spin",
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2" }, [
                addressQuery.value ? (openBlock(), createBlock("button", {
                  key: 0,
                  onClick: withModifiers(resetSearch, ["prevent"]),
                  class: "text-muted-foreground hover:text-foreground",
                  "aria-label": "Effacer la recherche"
                }, [
                  createVNode(unref(X), { class: "h-4 w-4" })
                ])) : createCommentVNode("", true),
                isLoading.value ? (openBlock(), createBlock(unref(Loader), {
                  key: 1,
                  class: "h-4 w-4 animate-spin",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div${ssrRenderAttr("id", dropdownId.value)} class="absolute z-50 w-full mt-1 bg-background rounded-md border shadow-md" role="listbox" style="${ssrRenderStyle(showSuggestions.value && (isLoading.value || error.value || suggestions.value.length > 0) ? null : { display: "none" })}">`);
      if (isLoading.value) {
        _push(`<div class="py-6 text-center text-sm text-muted-foreground"><div class="flex items-center justify-center">`);
        _push(ssrRenderComponent(unref(Loader), {
          class: "h-4 w-4 animate-spin",
          "aria-hidden": "true"
        }, null, _parent));
        _push(`<span class="ml-2">Recherche en cours...</span></div></div>`);
      } else if (error.value) {
        _push(`<div${ssrRenderAttr("id", `${dropdownId.value}-error`)} class="py-6 text-center text-sm text-destructive">${ssrInterpolate(error.value)}</div>`);
      } else if (suggestions.value.length === 0 && addressQuery.value.length >= __props.minQueryLength) {
        _push(`<div class="py-6 text-center text-sm text-muted-foreground"> Aucun résultat trouvé </div>`);
      } else if (suggestions.value.length > 0) {
        _push(`<div class="max-h-[300px] overflow-y-auto"><!--[-->`);
        ssrRenderList(suggestions.value, (suggestion, index) => {
          _push(`<div class="${ssrRenderClass([[
            "hover:bg-accent hover:text-accent-foreground",
            { "bg-accent text-accent-foreground": selectedIndex.value === index }
          ], "flex items-center gap-2 px-4 py-2 cursor-pointer"])}" role="option"${ssrRenderAttr("aria-selected", selectedIndex.value === index)}>`);
          _push(ssrRenderComponent(unref(MapPin), {
            class: "h-4 w-4 text-muted-foreground",
            "aria-hidden": "true"
          }, null, _parent));
          _push(`<div class="flex flex-col gap-0.5"><span class="font-medium">${ssrInterpolate(suggestion.name)}</span><span class="text-sm text-muted-foreground">${ssrInterpolate(suggestion.city)}, ${ssrInterpolate(suggestion.postcode)}</span></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AddressInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
