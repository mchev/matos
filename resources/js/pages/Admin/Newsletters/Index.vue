<template>
  <AdminLayout>
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Newsletters</h1>
          <p class="text-muted-foreground">
            Rédiger et envoyer des infos / newsletters en masse via Brevo
          </p>
        </div>
        <Button as-child>
          <Link :href="route('admin.newsletters.create')">
            <Plus class="h-4 w-4 mr-2" />
            Nouvelle newsletter
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des newsletters</CardTitle>
          <CardDescription>
            Créez une newsletter, envoyez un mail de test, prévisualisez puis envoyez à la liste
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div
              v-for="newsletter in newsletters.data"
              :key="newsletter.id"
              class="flex items-center justify-between gap-4 rounded-lg border p-4"
            >
              <div class="min-w-0 flex-1 space-y-1">
                <p class="truncate font-medium">{{ newsletter.subject }}</p>
                <p class="text-sm text-muted-foreground">
                  Créée le {{ formatDate(newsletter.created_at) }}
                  <span v-if="newsletter.user"> par {{ newsletter.user.name }}</span>
                  <span v-if="newsletter.sent_at"> · Envoyée le {{ formatDate(newsletter.sent_at) }}</span>
                </p>
              </div>
              <div class="flex shrink-0 items-center gap-2">
                <Badge v-if="newsletter.sent_at" variant="default">Envoyée</Badge>
                <Badge v-else variant="secondary">Brouillon</Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                    <Button variant="ghost" class="h-8 w-8 p-0">
                      <MoreHorizontal class="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem as-child>
                      <Link :href="route('admin.newsletters.edit', newsletter.id)">
                        <Pencil class="h-4 w-4 mr-2" />
                        Modifier
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      v-if="!newsletter.sent_at"
                      as-child
                    >
                      <a
                        :href="route('admin.newsletters.preview', newsletter.id)"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye class="h-4 w-4 mr-2" />
                        Aperçu
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      v-if="!newsletter.sent_at"
                      @click="deleteNewsletter(newsletter.id)"
                      class="text-destructive focus:text-destructive"
                    >
                      <Trash2 class="h-4 w-4 mr-2" />
                      Supprimer
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div v-if="newsletters.data.length === 0" class="py-12 text-center">
              <Mail class="h-10 w-10 text-muted-foreground mx-auto mb-2" />
              <p class="text-sm text-muted-foreground">Aucune newsletter</p>
              <Button as-child class="mt-2">
                <Link :href="route('admin.newsletters.create')">Créer une newsletter</Link>
              </Button>
            </div>
          </div>

          <div v-if="newsletters.data.length > 0" class="mt-6">
            <Pagination :links="newsletters.links" />
          </div>
        </CardContent>
      </Card>
    </div>
  </AdminLayout>
</template>

<script setup>
import { Link, router } from '@inertiajs/vue3'
import { Plus, Mail, MoreHorizontal, Pencil, Eye, Trash2 } from 'lucide-vue-next'
import AdminLayout from '@/layouts/AdminLayout.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Pagination from '@/components/Pagination.vue'

defineProps({
  newsletters: {
    type: Object,
    required: true,
  },
})

function formatDate(value) {
  if (!value) return ''
  return new Date(value).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function deleteNewsletter(id) {
  if (confirm('Supprimer cette newsletter ?')) {
    router.delete(route('admin.newsletters.destroy', id))
  }
}
</script>
