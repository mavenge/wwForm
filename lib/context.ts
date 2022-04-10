import { inject } from 'vue'

import { CommonFieldType, Theme } from './types'

export const schemaFormContextKey = Symbol()

export const useContext = () => {
  const context: { theme: Theme; SchemaItem: CommonFieldType } | undefined =
    inject(schemaFormContextKey)

  if (!context) {
    throw Error('SchemaForm needed')
  }

  return context
}
