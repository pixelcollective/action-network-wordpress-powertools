// @wordpress
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'

// components
import edit from './components/edit'

registerBlockType('action-network/newsletter-inner-paragraph', {
  title: __('Newsletter Paragraph', 'tinypixel'),
  category: 'common',
  attributes: {
    paragraphText: {
      type: 'string',
    },
  },
  parent: __('action-network/newsletter-inner-content'),
  edit,
  save: () => null,
})
