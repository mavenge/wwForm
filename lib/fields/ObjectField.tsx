import { defineComponent } from 'vue'

import { FieldProps } from '../types'
import { useContext } from '../context'
import { isObject } from '../utils'

export default defineComponent({
  name: 'ObjectField',
  props: FieldProps,
  setup(props) {
    const context = useContext()

    const handleObjectFieldChange = (k: string, v: any) => {
      const value: any = isObject(props.value) ? props.value : {}

      if (v === undefined) {
        delete value[k]
      } else {
        value[k] = v
      }

      props.onChange(value)
    }

    return () => {
      const { schema, value, rootSchema } = props

      const properties = schema.properties || {}

      const { SchemaItem } = context

      const currentValue: any = isObject(value) ? value : {}

      return Object.keys(properties).map((k, index) => (
        <SchemaItem
          schema={properties[k]}
          value={currentValue[k]}
          rootSchema={rootSchema}
          key={index}
          onChange={(v: any) => handleObjectFieldChange(k, v)}
        />
      ))
    }
  },
})
