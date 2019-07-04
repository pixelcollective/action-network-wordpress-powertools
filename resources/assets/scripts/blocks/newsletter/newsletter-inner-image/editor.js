// @wordpress
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'

// components
import edit from './components/edit'

registerBlockType('action-network/newsletter-inner-image', {
  title: __('Image', 'tinypixel'),
  category: 'common',
  attributes: {
    image: {
      type: 'string',
    },
  },
  edit,
  save: () => null,
})
