export default {
  name: 'Simple',
  schema: {
    description: 'A simple form example.',
    type: 'object',
    required: ['firstName', 'lastName'],
    properties: {
      firstName: {
        type: 'string',
        default: 'Chuck',
      },
      lastName: {
        type: 'string',
      },
      telephone: {
        type: 'string',
        minLength: 10,
      },
      staticArray: {
        type: 'array',
        items: [{ type: 'string' }, { type: 'number' }],
      },
      singleTypeArray: {
        type: 'array',
        items: { type: 'string' },
      },
      multiTypeArray: {
        type: 'array',
        items: { type: 'string', enum: ['123', '456', '789'] },
      },
    },
  },
  uiSchema: {
    title: 'A registration form',
    properties: {
      firstName: {
        title: 'First name',
      },
      lastName: {
        title: 'Last name',
      },
      telephone: {
        title: 'Telephone',
      },
    },
  },
  default: {
    firstName: 'Chuck',
    lastName: 'Norris',
    age: 75,
    bio: 'Roundhouse kicking asses since 1940',
    password: 'noneed',
    singleTypeArray: ['tom'],
    multiTypeArray: ['123'],
  },
}