<template>
  <input type="text" :value="value" @input="handleChange($event)" />
</template>

<script setup lang="ts">
import { defineProps, toRef } from "vue";
import { FieldProps } from "../types";

const props = defineProps(FieldProps);

const value = toRef(props, "value");

const handleChange = (e: Event) => {
  props.onChange((e.target as HTMLInputElement).value);
};
</script>

<style scoped></style>
