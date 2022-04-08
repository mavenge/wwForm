import { mount } from '@vue/test-utils'

import SchemaForm, { NumberField } from '../../lib'

describe('SchemaForm', () => {
  it('NumberField should be rendered', () => {
    let value = ''

    const wrapper = mount(SchemaForm, {
      props: {
        schema: {
          type: 'number',
        },
        value: value,
        onChange: (v: any) => {
          value = v
        },
      },
    })

    const numberField = wrapper.findComponent(NumberField)
    expect(numberField.exists()).toBeTruthy()
  })
})
