// @wordpress
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'

// components
import { Edit as edit } from './components/edit'

const attributes = {
  issueNumber: {
    type: 'string',
  },
  issueYear: {
    type: 'string',
  },
}

registerBlockType('action-network/newsletter-branding', {
  title: __('Newsletter Branding', 'tinypixel'),
  category: 'layout',
  attributes,
  edit,
  save: () => null,
})
