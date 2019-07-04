const { registerBlockType } = wp.blocks;
import { Edit as edit } from './components/Edit'
import { Save as save } from './components/Save'

registerBlockType('action-network/email-signup', {
  title: 'Email Signup',
  description: 'Add a lightweight email signup form',
  icon: {
    src: 'admin-site',
  },
  category: 'action-network',
  attributes: {
    buttonText: {
      type: 'string',
      default: '',
    },
    boxed: {
      type: 'Boolean',
      default: 0,
    },
  },
  edit,
  save,
});