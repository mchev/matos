<template>
  <AdminLayout>
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Modifier la newsletter</h1>
          <p class="text-muted-foreground">
            {{ newsletter.sent_at ? 'Newsletter déjà envoyée (lecture seule).' : 'Modifiez le contenu, envoyez un test ou lancez l\'envoi.' }}
          </p>
        </div>
        <Button variant="outline" as-child>
          <Link :href="route('admin.newsletters.index')">
            <ArrowLeft class="h-4 w-4 mr-2" />
            Retour
          </Link>
        </Button>
      </div>

      <Card v-if="flash?.success" class="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/30">
        <CardContent class="pt-6">
          <p class="text-sm text-green-800 dark:text-green-200">{{ flash.success }}</p>
        </CardContent>
      </Card>
      <Card v-if="Object.keys(errors || {}).length" class="border-destructive/50 bg-destructive/5">
        <CardContent class="pt-6">
          <ul class="list-inside list-disc text-sm text-destructive">
            <li v-for="(msgs, key) in (errors || {})" :key="key">
              <template v-if="Array.isArray(msgs)">{{ msgs[0] }}</template>
              <template v-else>{{ msgs }}</template>
            </li>
          </ul>
        </CardContent>
      </Card>

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
                :disabled="!!newsletter.sent_at"
                :class="{ 'border-destructive': form.errors.subject }"
              />
              <p v-if="form.errors.subject" class="text-sm text-destructive">
                {{ form.errors.subject }}
              </p>
            </div>

            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <Label for="body_html">Corps</Label>
                <div class="flex items-center gap-2">
                  <Tabs v-model="editorTab" class="w-auto">
                    <TabsList>
                      <TabsTrigger value="edit">Éditer</TabsTrigger>
                      <TabsTrigger value="preview">Aperçu</TabsTrigger>
                    </TabsList>
                  </Tabs>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    as="a"
                    :href="route('admin.newsletters.preview', newsletter.id)"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink class="h-4 w-4 mr-1" />
                    Ouvrir l’aperçu
                  </Button>
                </div>
              </div>
              <div v-show="editorTab === 'edit'">
                <RichTextEditor
                  v-model="form.body_html"
                  placeholder="Rédigez le contenu de la newsletter…"
                  :error="!!form.errors.body_html"
                  :disabled="!!newsletter.sent_at"
                />
              </div>
              <div
                v-show="editorTab === 'preview'"
                class="min-h-[280px] rounded-md border border-input bg-muted/30 p-4 prose prose-sm dark:prose-invert max-w-none"
                v-html="previewHtml"
              />
              <p v-if="form.errors.body_html" class="text-sm text-destructive">
                {{ form.errors.body_html }}
              </p>
            </div>

            <div v-if="!newsletter.sent_at" class="flex justify-end gap-2">
              <Button type="button" variant="outline" as-child>
                <Link :href="route('admin.newsletters.index')">Annuler</Link>
              </Button>
              <Button type="submit" :disabled="form.processing">
                <Loader2 v-if="form.processing" class="h-4 w-4 mr-2 animate-spin" />
                Enregistrer
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <!-- Envoi test -->
      <Card v-if="!newsletter.sent_at && admins?.length">
        <CardHeader>
          <CardTitle>Envoyer un mail de test</CardTitle>
          <CardDescription>
            Choisissez un administrateur pour recevoir un exemplaire du mail
          </CardDescription>
        </CardHeader>
        <CardContent class="flex flex-wrap items-end gap-4">
          <div class="min-w-[200px] space-y-2">
            <Label for="test_admin">Administrateur</Label>
            <Select v-model="testAdminId">
              <SelectTrigger id="test_admin" :class="{ 'border-destructive': sendTestError }">
                <SelectValue placeholder="Sélectionner un admin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  v-for="admin in admins"
                  :key="admin.id"
                  :value="admin.id"
                >
                  {{ admin.name }} ({{ admin.email }})
                </SelectItem>
              </SelectContent>
            </Select>
            <p v-if="sendTestError" class="text-sm text-destructive">{{ sendTestError }}</p>
          </div>
          <Button
            type="button"
            :disabled="sendTestLoading || !testAdminId"
            @click="sendTest"
          >
            <Loader2 v-if="sendTestLoading" class="h-4 w-4 mr-2 animate-spin" />
            Envoyer le test
          </Button>
        </CardContent>
      </Card>

      <!-- Envoi campagne -->
      <Card v-if="!newsletter.sent_at">
        <CardHeader>
          <CardTitle>Envoyer la newsletter</CardTitle>
          <CardDescription>
            Envoyer à tous les utilisateurs du site ou à la liste Brevo (si configurée)
          </CardDescription>
        </CardHeader>
        <CardContent class="flex flex-wrap gap-4">
          <Button
            type="button"
            variant="default"
            :disabled="sendToAllUsersLoading || sendCampaignLoading"
            @click="sendToAllUsers"
          >
            <Loader2 v-if="sendToAllUsersLoading" class="h-4 w-4 mr-2 animate-spin" />
            Envoyer à tous les utilisateurs
          </Button>
          <Button
            v-if="brevo_list_configured"
            type="button"
            variant="secondary"
            :disabled="sendToAllUsersLoading || sendCampaignLoading"
            @click="sendCampaign"
          >
            <Loader2 v-if="sendCampaignLoading" class="h-4 w-4 mr-2 animate-spin" />
            Envoyer à la liste Brevo
          </Button>
        </CardContent>
      </Card>

      <!-- Récap envoi à tous les users -->
      <Card v-if="newsletter.sent_at && newsletter.recipients_count != null">
        <CardHeader>
          <CardTitle>Envoi effectué</CardTitle>
          <CardDescription>
            Newsletter envoyée à {{ newsletter.recipients_count }} utilisateur(s)
          </CardDescription>
        </CardHeader>
      </Card>

      <!-- Statistiques Brevo -->
      <Card v-if="newsletter.sent_at && newsletter.brevo_campaign_id">
        <CardHeader>
          <CardTitle>Statistiques (Brevo)</CardTitle>
          <CardDescription>
            Envoyés, ouvertures, clics (données Brevo)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            v-if="!stats && !statsLoading"
            type="button"
            variant="outline"
            :disabled="statsLoading"
            @click="loadStats"
          >
            Charger les statistiques
          </Button>
          <div v-else-if="statsLoading" class="flex items-center gap-2 text-muted-foreground">
            <Loader2 class="h-4 w-4 animate-spin" />
            Chargement…
          </div>
          <div v-else-if="stats" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div class="rounded-lg border bg-card p-4">
              <p class="text-sm text-muted-foreground">Envoyés</p>
              <p class="text-2xl font-semibold">{{ stats.sent ?? stats.sentCount ?? '–' }}</p>
            </div>
            <div class="rounded-lg border bg-card p-4">
              <p class="text-sm text-muted-foreground">Ouvertures</p>
              <p class="text-2xl font-semibold">{{ stats.openers ?? stats.uniqueViews ?? stats.views ?? '–' }}</p>
            </div>
            <div class="rounded-lg border bg-card p-4">
              <p class="text-sm text-muted-foreground">Clics</p>
              <p class="text-2xl font-semibold">{{ stats.clicks ?? stats.uniqueClicks ?? '–' }}</p>
            </div>
            <div class="rounded-lg border bg-card p-4">
              <p class="text-sm text-muted-foreground">Rebonds</p>
              <p class="text-2xl font-semibold">{{ stats.hardBounces ?? stats.softBounces ?? stats.bounces ?? '–' }}</p>
            </div>
          </div>
          <p v-else-if="statsError" class="text-sm text-destructive">{{ statsError }}</p>
        </CardContent>
      </Card>
    </div>
  </AdminLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Link, useForm, router } from '@inertiajs/vue3'
import { ArrowLeft, Loader2, ExternalLink } from 'lucide-vue-next'
import AdminLayout from '@/layouts/AdminLayout.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import RichTextEditor from '@/components/RichTextEditor.vue'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const props = defineProps({
  newsletter: { type: Object, required: true },
  admins: { type: Array, default: () => [] },
  brevo_list_configured: { type: Boolean, default: false },
  flash: { type: Object, default: () => ({}) },
  errors: { type: Object, default: () => ({}) },
})

const editorTab = ref('edit')
const testAdminId = ref(null)
const sendTestLoading = ref(false)
const sendTestError = ref('')
const sendCampaignLoading = ref(false)
const sendToAllUsersLoading = ref(false)
const stats = ref(null)
const statsLoading = ref(false)
const statsError = ref('')

const form = useForm({
  subject: props.newsletter.subject,
  body_html: props.newsletter.body_html ?? '',
})

const previewHtml = computed(() => {
  const raw = form.body_html?.trim() || ''
  if (!raw) return '<p class="text-muted-foreground">Aucun contenu.</p>'
  return raw
})

function submit() {
  form.put(route('admin.newsletters.update', props.newsletter.id))
}

async function sendTest() {
  sendTestError.value = ''
  if (!testAdminId.value) {
    sendTestError.value = 'Sélectionnez un administrateur.'
    return
  }
  sendTestLoading.value = true
  router.post(route('admin.newsletters.send-test', props.newsletter.id), { admin_id: testAdminId.value }, {
    preserveScroll: true,
    onFinish: () => { sendTestLoading.value = false },
    onError: (errors) => { sendTestError.value = errors.admin_id?.[0] || 'Erreur' },
  })
}

function sendToAllUsers() {
  if (!confirm('Envoyer cette newsletter à tous les utilisateurs du site ?')) return
  sendToAllUsersLoading.value = true
  router.post(route('admin.newsletters.send-to-all-users', props.newsletter.id), {}, {
    preserveScroll: true,
    onFinish: () => { sendToAllUsersLoading.value = false },
  })
}

function sendCampaign() {
  if (!confirm('Envoyer cette newsletter à la liste Brevo ?')) return
  sendCampaignLoading.value = true
  router.post(route('admin.newsletters.send', props.newsletter.id), {}, {
    preserveScroll: true,
    onFinish: () => { sendCampaignLoading.value = false },
  })
}

async function loadStats() {
  statsLoading.value = true
  statsError.value = ''
  try {
    const res = await fetch(route('admin.newsletters.stats', props.newsletter.id), {
      headers: { Accept: 'application/json' },
    })
    const data = await res.json()
    if (data.stats) stats.value = data.stats
    else statsError.value = data.message || data.error || 'Impossible de charger les stats.'
  } catch (e) {
    statsError.value = e.message || 'Erreur réseau'
  } finally {
    statsLoading.value = false
  }
}

onMounted(() => {
  if (props.flash?.stats) stats.value = props.flash.stats
})
</script>
