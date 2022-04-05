import { FieldProps } from "../types";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NumberField",
  props: FieldProps,
  setup(props) {
    return () => <div>Number Filed</div>;
  },
});
