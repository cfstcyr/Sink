<script setup>
const route = useRoute()
</script>

<template>
  <section class="grid grid-cols-1 gap-2 sm:flex sm:justify-between">
    <Tabs
      v-if="route.path !== '/dashboard/link'"
      class="sm:w-full"
      :default-value="route.path"
      @update:model-value="navigateTo"
    >
      <TabsList class="max-sm:w-full">
        <TabsTrigger
          value="/dashboard/links"
          class="max-sm:w-full"
        >
          {{ $t('nav.links') }}
        </TabsTrigger>
        <TabsTrigger value="/dashboard/analysis" class="max-sm:w-full">
          {{ $t('nav.analysis') }}
        </TabsTrigger>
        <TabsTrigger value="/dashboard/realtime" class="max-sm:w-full">
          {{ $t('nav.realtime') }}
        </TabsTrigger>
      </TabsList>
    </Tabs>
    <slot name="left" />
    <div>
      <slot />
    </div>
  </section>
</template>
