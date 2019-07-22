import { registerBlockType } from '@wordpress/blocks'

import { Edit as edit } from './components/Edit'
import { Save as save } from './components/Save'

registerBlockType('action-network/form', {
  title: 'Form',
  description: 'Add an Action Network form',
  icon: {
    src: 'megaphone',
  },
  category: 'action-network',
  attributes: {
    form: {
      type: 'array',
      default: [{}],
    },
    boxed: {
      type: 'Boolean',
      default: 0,
    },
  },
  edit,
  save,
});