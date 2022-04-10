import { mount } from "@vue/test-utils";

import SchemaForm, {
  ArrayField,
  StringField,
  NumberField,
  Selection,
} from "../../lib";

describe("ArrayFiled", () => {
  it("should render multi type field", async () => {
    let value: any;

    const wrapper = mount(SchemaForm, {
      props: {
        schema: {
          type: "array",
          items: [{ type: "string" }, { type: "number" }],
        },
        value,
        onChange: (v: any) => {
          value = v;
        },
      },
    });

    const arr = wrapper.findComponent(ArrayField);
    const str = arr.findComponent(StringField);
    const num = arr.findComponent(NumberField);

    await arr.props("onChange")([]);

    expect(str.exists()).toBeTruthy();
    expect(num.exists()).toBeTruthy();
  });

  it("should render single type field", () => {
    const wrapper = mount(SchemaForm, {
      props: {
        schema: {
          type: "array",
          items: {
            type: "string",
          },
        },
        value: ["1", "2"],
        onChange: () => {},
      },
    });

    const arr = wrapper.findComponent(ArrayField);
    const strs = arr.findAllComponents(StringField);

    expect(strs.length).toBe(2);
    expect(strs[0].props("value")).toBe("1");
  });

  it("should render single type field with enum", () => {
    const wrapper = mount(SchemaForm, {
      props: {
        schema: {
          type: "array",
          items: {
            type: "string",
            enum: ["1", "2"],
          },
        },
        value: [],
        onChange: () => {},
      },
    });

    const arr = wrapper.findComponent(ArrayField);
    const select = arr.findComponent(Selection);

    expect(select.exists()).toBeTruthy();
  });
});
