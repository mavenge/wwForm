import { defineComponent } from "vue";

import { FieldProps } from "../types";
import SchemaItem from "../SchemaItem";

export default defineComponent({
  name: "ObjectField",
  props: FieldProps,
  setup(props) {
    return () => {
      return <div>Object Filed</div>;
    };
  },
});
