import { mount } from "@vue/test-utils";

import SchemaForm, { NumberField } from "../../lib";

describe("SchemaForm", () => {
  it("NumberField should be rendered", async () => {
    let value = "";

    const wrapper = mount(SchemaForm, {
      props: {
        schema: {
          type: "number",
        },
        value: value,
        onChange: (v: any) => {
          value = v;
        },
      },
    });

    const numberField = wrapper.findComponent(NumberField);
    expect(numberField.exists()).toBeTruthy();

    const input = numberField.find("input");
    await input.setValue("123");
    input.trigger("input");
    expect(value).toBe(123);
  });
});
