import { defineComponent, inject } from "vue";

import { FieldProps } from "../types";
import { schemaFormContextKey } from "../context";
import { isObject } from "../utils";

const SchemaItemHelper = defineComponent({
  props: FieldProps,
});

export default defineComponent({
  name: "ObjectField",
  props: FieldProps,
  setup(props) {
    const context: { SchemaItem: typeof SchemaItemHelper } | undefined =
      inject(schemaFormContextKey);

    if (!context) {
      throw Error("SchemaForm should be used");
    }

    const handleObjectFieldChange = (k: string, v: any) => {
      const value: any = isObject(props.value) ? props.value : {};

      if (v === undefined) {
        delete value[k];
      } else {
        value[k] = v;
      }

      props.onChange(value);
    };

    return () => {
      const { schema, value, rootSchema } = props;

      const properties = schema.properties || {};

      const { SchemaItem } = context;

      const currentValue: any = isObject(value) ? value : {};

      return Object.keys(properties).map((k, index) => (
        <SchemaItem
          schema={properties[k]}
          value={currentValue[k]}
          rootSchema={rootSchema}
          key={index}
          onChange={(v: any) => handleObjectFieldChange(k, v)}
        />
      ));
    };
  },
});
