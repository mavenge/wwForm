import { mount } from '@vue/test-utils'

import SchemaForm, { NumberField, StringField } from '../../lib'

describe('ObjectField', () => {

  let schema: any

  beforeEach(() => {
    schema = {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        age: {
          type: 'number',
        },
      },
    }
  })

  it('should render properties to correct fields', () => {
    const wrapper = mount(SchemaForm, {
      props: {
        schema,
        value: {},
        onChange: () => {},
      },
    })

    const strFiled = wrapper.findComponent(StringField)
    const numField = wrapper.findComponent(NumberField)

    expect(strFiled.exists()).toBeTruthy
    expect(numField.exists()).toBeTruthy
  })

  it('should change value when field trigger onChange', async () => {
    let value: any

    const wrapper = mount(SchemaForm, {
      props: {
        schema,
        value: value,
        onChange: (v: any) => {
          value = v
        },
      },
    })

    const strFiled = wrapper.findComponent(StringField)
    await strFiled.props('onChange')('1')
    expect(value.name).toEqual('1')

    const numField = wrapper.findComponent(NumberField)
    await numField.props('onChange')(1)
    expect(value.age).toEqual(1)
  })

  it('should value is undefined', async () => {
    let value: any

    const wrapper = mount(SchemaForm, {
      props: {
        schema,
        value: value,
        onChange: (v: any) => {
          value = v
        },
      },
    })

    const strFiled = wrapper.findComponent(StringField)
    await strFiled.props('onChange')(undefined)
    expect(value.name).toBeUndefined()
  })

})
