import { PropType, defineComponent, DefineComponent } from 'vue'
export enum SchemaTypes {
  'NUMBER' = 'number',
  'INTEGER' = 'integer',
  'STRING' = 'string',
  'OBJECT' = 'object',
  'ARRAY' = 'array',
  'BOOLEAN' = 'boolean',
}

type SchemaRef = { $ref: string }

export interface Schema {
  type?: SchemaTypes | string
  const?: any
  format?: string

  title?: string
  default?: any

  properties?: {
    [key: string]: Schema
  }
  items?: Schema | Schema[] | SchemaRef
  uniqueItems?: any
  dependencies?: {
    [key: string]: string[] | Schema | SchemaRef
  }
  oneOf?: Schema[]
  anyOf?: Schema[]
  allOf?: Schema[]
  // TODO: uiSchema
  // vjsf?: VueJsonSchemaConfig
  required?: string[]
  enum?: any[]
  enumNames?: any[]
  enumKeyValue?: any[]
  additionalProperties?: any
  additionalItems?: Schema

  minLength?: number
  maxLength?: number
  minimun?: number
  maximum?: number
  multipleOf?: number
  exclusiveMaximum?: number
  exclusiveMinimum?: number
}

export const FieldProps = {
  schema: {
    type: Object as PropType<Schema>,
    required: true,
  },
  value: {
    required: true,
  },
  onChange: {
    type: Function as PropType<(v: any) => void>,
    required: true,
  },
  rootSchema: {
    type: Object as PropType<Schema>,
    required: true,
  },
} as const

export const ComponentTypeHelper = defineComponent({
  props: FieldProps,
})

export type CommonFieldType = typeof ComponentTypeHelper

const commonWidgetPropsDefine = {
  value: {},
  onChange: {
    type: Function as PropType<(v: any) => void>,
    required: true,
  },
} as const

const selectionWidgetPropsDefine = {
  ...commonWidgetPropsDefine,
  options: {
    type: Array as PropType<
      {
        key: string
        value: string
      }[]
    >,
    required: true,
  },
} as const

type CommonWidgetDefine = DefineComponent<
  typeof commonWidgetPropsDefine,
  {},
  {}
>

type SelectionWidgetDefine = DefineComponent<
  typeof selectionWidgetPropsDefine,
  {},
  {}
>

export interface Theme {
  widget: {
    SelectionWidget: SelectionWidgetDefine
    TextWidget: CommonWidgetDefine
    NumberWidget: CommonFieldType
  }
}
