// @wordpress
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'

// components
import { Edit as edit } from './components/edit'

const attributes = {
  imageUrl: {
    type: 'string',
  },
  headingText: {
    type: 'string',
  },
  headingUrl: {
    type: 'string',
  },
  excerptText: {
    type: 'string',
  },
  buttonText: {
    type: 'string',
  },
  buttonUrl: {
    type: 'string',
  }
}

registerBlockType('action-network/newsletter-featured-story-hero', {
  title: __('Newsletter Featured Story', 'tinypixel'),
  category: 'layout',
  attributes,
  edit,
  save: () => null,
})
