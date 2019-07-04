// @wordpress
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'

// components
import edit from './components/edit'

registerBlockType('action-network/newsletter-footer', {
  title: __('Newsletter Footer', 'tinypixel'),
  category: 'layout',
  attributes: {
    callToActionText: {
      type: 'string',
    },
    callToActionUrl: {
      type: 'string',
    },
  },
  edit,
  save: () => null,
})
