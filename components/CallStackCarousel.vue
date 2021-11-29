<script setup lang="ts">
import { useRoute } from "vue-router";

const callStackItems = [
  {
    functionCalls: [],
    description: "calls main()",
    stackDescription: "the stack is empty",
  },
  {
    functionCalls: ["main()"],
    description: "starts executing main()",
    stackDescription: "pushes main into the stack",
  },
  {
    functionCalls: ["main()"],
    description: "executes main() until line 14, calls fetchData",
  },
  {
    functionCalls: ["main()", "fetchData()"],
    description: "starts executing fetchData",
    stackDescription: "pushes fetchData into the stack",
  },
  {
    functionCalls: ["main()", "fetchData()"],
    description: "executes fetchData until line 10, calls getFromService",
  },
  {
    functionCalls: ["main()", "fetchData()", "getFromService()"],
    description: "starts executing getFromService",
    stackDescription: "pushes getFromService into the stack",
  },
  {
    functionCalls: ["main()", "fetchData()", "getFromService()"],
    description: "executes getFromService until line 6",
    stackDescription: "pops getFromService out of the stack",
    isPopped: true,
  },
  {
    functionCalls: ["main()", "fetchData()"],
    description: "backs to executing fetchData, calls transform",
  },
  {
    functionCalls: ["main()", "fetchData()", "transform()"],
    description: "starts executing transform",
    stackDescription: "pushes transform into the stack",
  },
  {
    functionCalls: ["main()", "fetchData()", "transform()"],
    description: "finishes executing transform",
    stackDescription: "pops transform out of the stack",
    isPopped: true,
  },
  {
    functionCalls: ["main()", "fetchData()"],
    description: "backs to executing fetchData, fetchData finishes",
    stackDescription: "pops fetchData out of the stack",
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
  {
    functionCalls: [],
    description: "the code finishes",
    stackDescription: "the stack is empty",
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
