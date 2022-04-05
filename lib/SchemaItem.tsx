import { computed, defineComponent } from "vue";

import { FieldProps, SchemaTypes } from "./types";
import NumberField from "./fields/NumberField.vue";
import StringField from "./fields/StringField.vue";
import ObjectField from "./fields/ObjectField";
import { retrieveSchema } from "./utils";

export default defineComponent({
  name: "SchemaItem",
  props: FieldProps,
  setup(props) {
    const retrievedSchemaRef = computed(() => {
      const { schema, value, rootSchema } = props;

      return retrieveSchema(schema, rootSchema, value);
    });

    return () => {
      const { schema } = props;

      const retrievedSchema = retrievedSchemaRef.value;

      let Component: any;

      switch (schema.type) {
        case SchemaTypes.STRING:
          Component = StringField;
          break;

        case SchemaTypes.NUMBER:
          Component = NumberField;
          break;

        case SchemaTypes.OBJECT:
          Component = ObjectField;
          break;

        default:
          console.warn(`${schema.type} is not supported`);
          break;
      }

      return <Component {...props} schema={retrievedSchema} />;
    };
  },
});
