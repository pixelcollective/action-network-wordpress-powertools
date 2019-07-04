// @wordpress
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'

// components
import { Edit as edit } from './components/edit'

const attributes = {
  heading: {
    type: 'string',
  },
  subheading: {
    type: 'string',
  },
}

registerBlockType('action-network/newsletter-heading', {
  title: __('Newsletter Heading', 'tinypixel'),
  category: 'layout',
  attributes,
  edit,
  save: () => null,
})
