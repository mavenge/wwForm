import { defineComponent } from "vue";
import { FieldProps } from "./types";
import SchemaItem from "./SchemaItem";

export default defineComponent({
  name: "SchemaForm",
  props: FieldProps,
  setup(props) {
    const handleChange = (v: any) => {
      props.onChange(v);
    };

    return () => (
      <SchemaItem
        value={props.value}
        schema={props.schema}
        onChange={handleChange}
      />
    );
  },
});
