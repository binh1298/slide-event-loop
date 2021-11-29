<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const callStackItems = [
  { functionCalls: ["main()"], description: "The code is initialized" },
  { functionCalls: ["main()"], description: "Calling haveDinner" },
  {
    functionCalls: ["main()", "haveDinner()"],
    description: "haveDinner is initialized",
  },
  {
    functionCalls: ["main()", "haveDinner()"],
    description: "calling makeFood",
  },
  {
    functionCalls: ["haveDinner()", "makeFood()"],
    description: "makeFood is initialized",
  },
];

// TODO: fix hack: useRoute().query.clicks || 0;
</script>

<template>
  <div h="full">
    <div h="full">
      <div class="flex bg-gray-900 p-1" h="full">
        <CallStackWrapper>
          <FunctionCallBox
            v-for="item in callStackItems[useRoute().query.clicks || 0]
              .functionCalls"
            :key="item.description"
          >
            {{ item }}
          </FunctionCallBox>
        </CallStackWrapper>
      </div>
    </div>
    <div class="flex" w="full">
      <span m="auto" p="2">{{
        callStackItems[useRoute().query.clicks || 0].description
      }}</span>
    </div>
  </div>
</template>
