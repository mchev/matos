<template>
  <div
    class="rounded-md border border-input bg-background"
    :class="{ 'border-destructive': error }"
  >
    <!-- Toolbar -->
    <div
      v-if="editor"
      class="flex flex-wrap items-center gap-0.5 border-b border-input bg-muted/40 p-1"
    >
      <EditorToolbarButton
        :pressed="editor.isActive('bold')"
        title="Gras"
        @click="editor.chain().focus().toggleBold().run()"
      >
        <Bold class="h-4 w-4" />
      </EditorToolbarButton>
      <EditorToolbarButton
        :pressed="editor.isActive('italic')"
        title="Italique"
        @click="editor.chain().focus().toggleItalic().run()"
      >
        <Italic class="h-4 w-4" />
      </EditorToolbarButton>
      <EditorToolbarButton
        :pressed="editor.isActive('strike')"
        title="Barré"
        @click="editor.chain().focus().toggleStrike().run()"
      >
        <Strikethrough class="h-4 w-4" />
      </EditorToolbarButton>
      <span class="mx-1 h-5 w-px bg-border" aria-hidden="true" />
      <EditorToolbarButton
        :pressed="editor.isActive('heading', { level: 2 })"
        title="Titre 2"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      >
        <Heading2 class="h-4 w-4" />
      </EditorToolbarButton>
      <EditorToolbarButton
        :pressed="editor.isActive('heading', { level: 3 })"
        title="Titre 3"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      >
        <Heading3 class="h-4 w-4" />
      </EditorToolbarButton>
      <span class="mx-1 h-5 w-px bg-border" aria-hidden="true" />
      <EditorToolbarButton
        :pressed="editor.isActive('bulletList')"
        title="Liste à puces"
        @click="editor.chain().focus().toggleBulletList().run()"
      >
        <List class="h-4 w-4" />
      </EditorToolbarButton>
      <EditorToolbarButton
        :pressed="editor.isActive('orderedList')"
        title="Liste numérotée"
        @click="editor.chain().focus().toggleOrderedList().run()"
      >
        <ListOrdered class="h-4 w-4" />
      </EditorToolbarButton>
      <EditorToolbarButton
        :pressed="editor.isActive('blockquote')"
        title="Citation"
        @click="editor.chain().focus().toggleBlockquote().run()"
      >
        <Quote class="h-4 w-4" />
      </EditorToolbarButton>
      <span class="mx-1 h-5 w-px bg-border" aria-hidden="true" />
      <EditorToolbarButton
        :pressed="editor.isActive('link')"
        title="Lien"
        @click="setLink"
      >
        <LinkIcon class="h-4 w-4" />
      </EditorToolbarButton>
    </div>

    <!-- Editor content -->
    <EditorContent :editor="editor" class="newsletter-editor-content" />
  </div>
</template>

<script setup>
import { watch, onBeforeUnmount } from 'vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import {
  Bold,
  Italic,
  Strikethrough,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
} from 'lucide-vue-next'
import EditorToolbarButton from '@/components/EditorToolbarButton.vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Rédigez le contenu de la newsletter…',
  },
  error: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
  content: props.modelValue || '',
  editable: !props.disabled,
  extensions: [
    StarterKit,
    Link.configure({
      openOnClick: false,
      HTMLAttributes: { target: '_blank', rel: 'noopener' },
    }),
    Placeholder.configure({
      placeholder: props.placeholder,
    }),
  ],
  editorProps: {
    attributes: {
      class:
        'min-h-[280px] w-full px-4 py-3 text-sm outline-none prose prose-sm dark:prose-invert max-w-none focus:outline-none [&_.tiptap-placeholder]:text-muted-foreground [&_.tiptap-placeholder]:before:content-[attr(data-placeholder)]',
    },
  },
  onUpdate: ({ editor: e }) => {
    emit('update:modelValue', e.getHTML())
  },
})

watch(
  () => props.modelValue,
  (value) => {
    if (!editor.value) return
    const current = editor.value.getHTML()
    if (value !== current) {
      editor.value.commands.setContent(value || '', false)
    }
  },
)

watch(
  () => props.disabled,
  (disabled) => {
    editor.value?.setEditable(!disabled)
  },
)

onBeforeUnmount(() => {
  editor.value?.destroy()
})

function setLink() {
  if (!editor.value) return
  const previousUrl = editor.value.getAttributes('link').href
  const url = window.prompt('URL du lien', previousUrl || 'https://')
  if (url === null) return
  if (url === '') {
    editor.value.chain().focus().extendMarkRange('link').unsetLink().run()
    return
  }
  editor.value.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
}
</script>

<style>
.newsletter-editor-content .tiptap {
  min-height: 280px;
}
.newsletter-editor-content .tiptap p.is-editor-empty:first-child::before {
  color: var(--muted-foreground);
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}
</style>
