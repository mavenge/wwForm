import { defineComponent, PropType } from "vue";
import { Schema, SchemaTypes } from "./types";

export default defineComponent({
  name: "SchemaForm",
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
    },
  },
  setup(props, { slots, attrs, emit }) {
    return () => {
      const schema = props.schema;

      switch (schema.type) {
        case SchemaTypes.STRING:
          return <input type="text" />;

        default:
          return <div>SchemaForm</div>;
      }
    };
  },
});
