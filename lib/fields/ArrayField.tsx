import { defineComponent, PropType } from 'vue'
import { createUseStyles } from 'vue-jss'

import { FieldProps, Schema } from '../types'
import { useContext } from '../context'
// import Selection from '../widgets/Selection'

const useStyles = createUseStyles({
  container: {
    border: '1px solid #eee',
    marginTop: 10,
  },
  actions: {
    background: '#eee',
    padding: 10,
    textAlign: 'right',
  },
  action: {
    '& + &': {
      marginLeft: 10,
    },
  },
  content: {
    padding: 10,
  },
})

const ArrayItemWrapper = defineComponent({
  name: 'ArrayItemWrapper',
  props: {
    index: {
      type: Number,
      required: true,
    },
    handleAdd: {
      type: Function as PropType<(index: number) => void>,
      required: true,
    },
    handleDel: {
      type: Function as PropType<(index: number) => void>,
      required: true,
    },
    handleUp: {
      type: Function as PropType<(index: number) => void>,
      required: true,
    },
    handleDown: {
      type: Function as PropType<(index: number) => void>,
      required: true,
    },
  },
  setup(props, { slots }) {
    const classesRef = useStyles()

    const handleAdd = () => props.handleAdd(props.index)
    const handleDel = () => props.handleDel(props.index)
    const handleUp = () => props.handleUp(props.index)
    const handleDown = () => props.handleDown(props.index)

    return () => {
      const classes = classesRef.value

      return (
        <div class={classes.container}>
          <div class={classes.actions}>
            <button class={classes.action} onClick={handleAdd}>
              Add
            </button>
            <button class={classes.action} onClick={handleDel}>
              Del
            </button>
            <button class={classes.action} onClick={handleUp}>
              Up
            </button>
            <button class={classes.action} onClick={handleDown}>
              Down
            </button>
          </div>
          <div class={classes.content}>{slots.default && slots.default()}</div>
        </div>
      )
    }
  },
})

/**
 *
 * {
 *   items: { type: string }
 * }
 *
 * {
 *   items: [
 *    { type: string }, { type: number }
 *   ]
 * }
 *
 * {
 *   items: { type: string, enum: ['1', '2'] }
 * }
 */
export default defineComponent({
  name: 'ArrayField',
  props: FieldProps,
  setup(props) {
    const context = useContext()

    const handleArrayItemChange = (v: any, index: number) => {
      const { value } = props
      const arr = Array.isArray(value) ? value : []

      arr[index] = v

      props.onChange(arr)
    }

    const handleAdd = (index: number) => {
      const { value } = props
      const arr = Array.isArray(value) ? value : []

      arr.splice(index + 1, 0, undefined)

      props.onChange(arr)
    }

    const handleDel = (index: number) => {
      const { value } = props
      const arr = Array.isArray(value) ? value : []

      arr.splice(index, 1)

      props.onChange(arr)
    }

    const handleUp = (index: number) => {
      if (index === 0) return

      const { value } = props
      const arr = Array.isArray(value) ? value : []

      const item = arr.splice(index, 1)
      arr.splice(index - 1, 0, item[0])

      props.onChange(arr)
    }

    const handleDown = (index: number) => {
      const { value } = props
      const arr = Array.isArray(value) ? value : []

      if (index === arr.length - 1) return

      const item = arr.splice(index, 1)
      arr.splice(index + 1, 0, item[0])

      props.onChange(arr)
    }

    return () => {

      const SelectionWidget = context.theme.widget.SelectionWidget

      const { schema, rootSchema, value } = props

      const SchemaItem = context.SchemaItem

      const isMultiType = Array.isArray(schema.items)

      const isSelect = schema.items && (schema.items as any).enum

      if (isMultiType) {
        const items: Schema[] = schema.items as any
        const arr = Array.isArray(value) ? value : []
        return items.map((s: Schema, index) => (
          <SchemaItem
            schema={s}
            rootSchema={rootSchema}
            key={index}
            value={arr[index]}
            onChange={(v) => handleArrayItemChange(v, index)}
          />
        ))
      } else if (!isSelect) {
        const arr = Array.isArray(value) ? value : []
        return arr.map((value, index) => (
          <ArrayItemWrapper
            index={index}
            handleAdd={handleAdd}
            handleDel={handleDel}
            handleDown={handleDown}
            handleUp={handleUp}
          >
            <SchemaItem
              schema={schema.items as Schema}
              rootSchema={rootSchema}
              key={index}
              value={value}
              onChange={(v) => handleArrayItemChange(v, index)}
            />
          </ArrayItemWrapper>
        ))
      } else {
        const enumOptions = (schema as any).items.enum

        const options = enumOptions.map((e: any) => ({
          key: e,
          value: e,
        }))

        return (
          <SelectionWidget
            options={options}
            onChange={props.onChange}
            value={value}
          />
        )
      }
    }
  },
})
