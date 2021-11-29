<script setup lang="ts">
import { useRoute } from "vue-router";

const callStackItems = [
  { functionCalls: [], description: "calls main()" },
  {
    functionCalls: ["main()"],
    description: "starts executing main()",
    stackDescription: "pushes main into the stack",
  },
  {
    functionCalls: ["main()"],
    description: "executes main() until line 14, calls haveDinner",
  },
  {
    functionCalls: ["main()", "haveDinner()"],
    description: "starts executing haveDinner",
    stackDescription: "pushes haveDinner into the stack",
  },
  {
    functionCalls: ["main()", "haveDinner()"],
    description: "executes haveDinner until line 10, calls makeFood",
  },
  {
    functionCalls: ["main()", "haveDinner()", "makeFood()"],
    description: "starts executing makeFood",
    stackDescription: "pushes makeFood into the stack",
  },
  {
    functionCalls: ["main()", "haveDinner()", "makeFood()"],
    description: "executes makeFood until line 6",
    stackDescription: "pops makeFood out of the stack",
    isPopped: true,
  },
  {
    functionCalls: ["main()", "haveDinner()"],
    description: "backs to executing haveDinner until line 11, calls eat",
  },
  {
    functionCalls: ["main()", "haveDinner()", "eat()"],
    description: "starts executing eat",
    stackDescription: "pushes eat into the stack",
  },
  {
    functionCalls: ["main()", "haveDinner()", "eat()"],
    description: "finishes executing eat",
    stackDescription: "pops eat out of the stack",
    isPopped: true,
  },
  {
    functionCalls: ["main()", "haveDinner()"],
    description: "backs to executing haveDinner, haveDinner finishes",
    stackDescription: "pops haveDinner out of the stack",
    isPopped: true,
  },
  {
    functionCalls: ["main()"],
    description: "backs to executing main",
  },
  {
    functionCalls: ["main()"],
    description: "finishes executing main",
    stackDescription: "pops main out of the stack",
    isPopped: true,
  },
];

const computed = {
  getCurrentCallStack: function () {
    return callStackItems[useRoute().query.clicks || 0];
  },
  getCallStackDescriptionClass: function () {
    const defaultClass = "text-sm italic";
    const currentCallStack = this.getCurrentCallStack();

    if (!currentCallStack.stackDescription) return defaultClass;

    return `${defaultClass} ${
      currentCallStack.isPopped ? "text-rose-400" : "text-emerald-400"
    }`;
  },
};
// TODO: fix hack: useRoute().query.clicks || 0;
</script>

<template>
  <div h="full">
    <div h="full">
      <div class="flex bg-gray-900 p-1" h="full">
        <CallStackWrapper>
          <FunctionCallBox
            v-for="(item, index) in computed.getCurrentCallStack()
              .functionCalls"
            :key="item"
            :isPopped="computed.getCurrentCallStack().isPopped || false"
            :isLastChild="
              index === computed.getCurrentCallStack().functionCalls.length - 1
            "
          >
            {{ item }}
          </FunctionCallBox>
        </CallStackWrapper>
      </div>
    </div>
    <p>{{ computed.test }}</p>
    <div class="flex" w="full">
      <span m="auto" py="1">{{
        computed.getCurrentCallStack().description
      }}</span>
    </div>
    <div class="flex" w="full">
      <span
        m="auto"
        py="1"
        v-bind:class="computed.getCallStackDescriptionClass()"
        >{{ computed.getCurrentCallStack().stackDescription }}</span
      >
    </div>
  </div>
</template>
