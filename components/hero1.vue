<script setup>
const discordItems = [[{
  label: "mckoda09",
  icon: "i-heroicons-at-symbol"
}]]
const emailItems = [[{
  label: "mckoda09@gmail.com",
  icon: "i-heroicons-envelope"
}], [{
  label: "Email me",
  icon: "i-heroicons-arrow-top-right-on-square",
  to: "mailto:mckoda09@gmail.com"
}]]
</script>

<template>
  <div class="h-[70vh] flex items-center justify-center">
    <div class="flex flex-col gap-5 items-center">
      <div class="text-3xl font-semibold">mckoda09</div>
      <div class="flex gap-5">
        <UButton color="sky" to="https://t.me/mckoda09">Telegram</UButton>
        <UDropdown :items="discordItems">
          <UButton color="indigo">Discord</UButton>
        </UDropdown>
        <UDropdown :items="emailItems">
          <UButton>Email</UButton>
        </UDropdown>
      </div>
    </div>
  </div>
</template>