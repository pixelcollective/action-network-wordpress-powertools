// @wordpress
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'

// components
import edit from './components/edit'

registerBlockType('action-network/newsletter-inner-heading', {
  title: __('Newsletter Heading', 'tinypixel'),
  category: 'common',
  attributes: {
    headingText: {
      type: 'string',
    },
  },
  parent: __('action-network/newsletter-inner-content'),
  edit,
  save: () => null,
})
