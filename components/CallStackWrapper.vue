<template>
  <div
    class="flex flex-col border-4 border-dashed border-blue-500 p-1"
    h="full"
    w="full"
  >
    <div class="flex-grow-0" w="full">
      <p class="text-center">The Call Stack</p>
    </div>
    <div
      class="flex-grow flex flex-col-reverse space-y-4 space-y-reverse px-6 pb-2"
    >
      <slot></slot>
    </div>
  </div>
</template>
