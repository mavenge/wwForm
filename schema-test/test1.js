const Ajv = require('ajv')
// const addFormats = require('ajv-formats')
const localize = require('ajv-i18n')

const ajv = new Ajv({ allErrors: true })
require('ajv-errors')(ajv)

// addFormats(ajv)

// ajv.addFormat('test', (data) => {
//   console.log(data, '-----------')
//   return data === 'hh'
// })

ajv.addKeyword({
  keyword: 'test',
  validate: function fun(schema, data) {
    console.log(schema, data)
    return schema === false
  },
  // compile(schema, parentSchema) {
  //   console.log(schema, parentSchema)
  //   return () => schema === false
  // },
  macro(sch, parentSchema) {
    console.log(sch, parentSchema, '...........')
    return {
      minLength: 10, 
    }
  },
  metaSchema: {
    type: 'boolean',
  },
})

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      // test: true,
      // format: 'test',
      // minLength: 10,
    },
    age: {
      type: 'number',
    },
    hobby: {
      type: 'array',
      items: [
        {
          type: 'string',
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      additionalItems: false,
      minItems: 2,
    },
    isWorker: {
      type: 'boolean',
    },
  },
  additionalProperties: false,
  required: ['name', 'age'],
}

const data = {
  name: 11,
  age: 12,
  hobby: ['抽烟', '打代码', 123],
  isWorker: true,
}

const validate = ajv.compile(schema)

const valid = validate(data)

if (!valid) {
  localize.zh(validate.errors)
  console.log(validate.errors)
}
