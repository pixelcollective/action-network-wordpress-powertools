import { registerBlockType } from '@wordpress/blocks'

import { Edit as edit } from './components/Edit'
import { Save as save } from './components/Save'
import { DonationIcon } from './../common/icons'

registerBlockType('action-network/donation-form', {
  title: 'Donation Form',
  description: 'Add an Action Network donation form',
  icon: {
    src: <DonationIcon />
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