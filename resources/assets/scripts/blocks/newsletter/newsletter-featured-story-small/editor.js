// @wordpress
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'

// components
import { Edit as edit } from './components/edit'

const attributes = {
  image: {
    type: 'string',
  },
  heading: {
    type: 'string',
  },
  excerpt: {
    type: 'string',
  },
  url: {
    type: 'string',
  }
}

registerBlockType('action-network/newsletter-featured-story-small', {
  title: __('Newsletter Featured Story (Two Column)', 'tinypixel'),
  category: 'layout',
  attributes,
  edit,
  save: () => null,
})
