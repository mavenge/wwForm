import { defineComponent } from "vue";

import { FieldProps, SchemaTypes } from "./types";
import NumberField from "./fields/NumberField.vue";
import StringField from "./fields/StringField.vue";

export default defineComponent({
  name: "SchemaItem",
  props: FieldProps,
  setup(props) {
    return () => {
      const schema = props.schema;

      let Component: any;

      switch (schema.type) {
        case SchemaTypes.STRING:
          Component = StringField;
          break;

        case SchemaTypes.NUMBER:
          Component = NumberField;
          break;

        default:
          console.warn(`${schema.type} is not supported`);
          break;
      }

      return <Component {...props} />;
    };
  },
});
