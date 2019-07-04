// @wordpress
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'

// components
import edit from './components/edit'

registerBlockType('action-network/newsletter-hero-image-with-caption', {
  title: __('Newsletter Hero Image (with Caption)', 'tinypixel'),
  category: 'layout',
  attributes: {
    captionText: {
      type: 'string',
    },
    imageUrl: {
      type: 'string',
    },
  },
  edit,
  save: () => null,
})
