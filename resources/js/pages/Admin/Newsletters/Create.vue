<template>
  <AdminLayout>
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Nouvelle newsletter</h1>
          <p class="text-muted-foreground">
            Rédigez le contenu avec l’éditeur riche. L’aperçu reflète le rendu du mail.
          </p>
        </div>
        <Button variant="outline" as-child>
          <Link :href="route('admin.newsletters.index')">
            <ArrowLeft class="h-4 w-4 mr-2" />
            Retour
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contenu</CardTitle>
          <CardDescription>
            Sujet et corps du mail (éditeur WYSIWYG)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form @submit.prevent="submit" class="space-y-6">
            <div class="space-y-2">
              <Label for="subject">Sujet</Label>
              <Input
                id="subject"
                v-model="form.subject"
                type="text"
                placeholder="Sujet du mail"
                :class="{ 'border-destructive': form.errors.subject }"
              />
              <p v-if="form.errors.subject" class="text-sm text-destructive">
                {{ form.errors.subject }}
              </p>
            </div>

            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <Label for="body_html">Corps du mail</Label>
                <Tabs v-model="editorTab" class="w-auto">
                  <TabsList>
                    <TabsTrigger value="edit">Éditer</TabsTrigger>
                    <TabsTrigger value="preview">Aperçu</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div v-show="editorTab === 'edit'">
                <RichTextEditor
                  v-model="form.body_html"
                  placeholder="Rédigez le contenu de la newsletter…"
                  :error="!!form.errors.body_html"
                />
              </div>
              <div
                v-show="editorTab === 'preview'"
                class="min-h-[320px] rounded-md border border-input bg-muted/30 p-4 prose prose-sm dark:prose-invert max-w-none"
                v-html="previewHtml"
              />
              <p v-if="form.errors.body_html" class="text-sm text-destructive">
                {{ form.errors.body_html }}
              </p>
            </div>

            <div class="flex justify-end gap-2">
              <Button type="button" variant="outline" as-child>
                <Link :href="route('admin.newsletters.index')">Annuler</Link>
              </Button>
              <Button type="submit" :disabled="form.processing">
                <Loader2 v-if="form.processing" class="h-4 w-4 mr-2 animate-spin" />
                Créer
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  </AdminLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Link, useForm } from '@inertiajs/vue3'
import { ArrowLeft, Loader2 } from 'lucide-vue-next'
import AdminLayout from '@/layouts/AdminLayout.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import RichTextEditor from '@/components/RichTextEditor.vue'

const editorTab = ref('edit')

const form = useForm({
  subject: '',
  body_html: '',
})

const previewHtml = computed(() => {
  const raw = form.body_html?.trim() || ''
  if (!raw) return '<p class="text-muted-foreground">Aucun contenu à prévisualiser.</p>'
  return raw
})

function submit() {
  form.post(route('admin.newsletters.store'))
}
</script>
