<template>
  <button
    type="button"
    class="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50"
    :class="{ 'bg-accent text-accent-foreground': pressed }"
    :title="title"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  pressed: { type: Boolean, default: false },
  title: { type: String, default: '' },
})
</script>
