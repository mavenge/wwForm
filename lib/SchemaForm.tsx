import { defineComponent, PropType, provide, reactive } from "vue";

import SchemaItem from "./SchemaItem";
import { Schema } from "./types";
import { schemaFormContextKey } from "./context";

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
      required: true,
    },
  },
  setup(props) {
    const handleChange = (v: any) => {
      props.onChange(v);
    };

    const context: any = {
      SchemaItem,
    };

    provide(schemaFormContextKey, context);

    return () => {
      const { value, schema } = props;

      return (
        <SchemaItem
          value={value}
          schema={schema}
          onChange={handleChange}
          rootSchema={schema}
        />
      );
    };
  },
});
