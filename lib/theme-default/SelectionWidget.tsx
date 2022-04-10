import { defineComponent, PropType, ref, watch, watchEffect } from 'vue'

export default defineComponent({
  name: 'SelectionWidget',
  props: {
    value: {},
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
    options: {
      type: Array as PropType<
        {
          key: string
          value: string
        }[]
      >,
      required: true,
    },
  },
  setup(props) {
    const currentValueRef = ref(props.value)

    watch(currentValueRef, (newV, oldV) => {
      if (newV !== props.value) {
        props.onChange(newV)
      }
    })

    watch(
      () => props.value,
      (newV) => {
        if (newV !== currentValueRef.value) {
          currentValueRef.value = newV
        }
      }
    )

    watchEffect(() => {
      console.log(props.value, '------------->')
    })

    return () => {
      const { options } = props

      return (
        <select multiple v-model={currentValueRef.value}>
          {options.map((op, index) => (
            <option key={index} value={op.value}>
              {op.key}
            </option>
          ))}
        </select>
      )
    }
  },
})
