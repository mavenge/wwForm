import { inject } from 'vue'

import { CommonFieldType } from './types'

export const schemaFormContextKey = Symbol()

export const useContext = () => {
  const context: { SchemaItem: CommonFieldType } | undefined =
    inject(schemaFormContextKey)

  if (!context) {
    throw Error('SchemaForm needed')
  }

  return context
}
