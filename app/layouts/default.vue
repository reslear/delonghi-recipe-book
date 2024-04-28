<script setup lang="ts"></script>

<template>
  <header>
    <UContainer class="flex justify-center py-4">
      <img
        src="~/assets/settings_logo_ipad_Normal@2x.png"
        class="h-16"
        alt="Logo"
      />
    </UContainer>
  </header>
  <main>
    <slot />
  </main>
  <footer></footer>
</template>
