<template>
  <input type="number" :value="value" @input="handleChange($event)" />
</template>

<script setup lang="ts">
import { toRef, defineProps } from "vue";
import { FieldProps } from "../types";

const props = defineProps(FieldProps);

const value = toRef(props, "value");

const handleChange = (e: Event) => {
  props.onChange(Number((e.target as HTMLInputElement).value));
};
</script>

<style scoped></style>
