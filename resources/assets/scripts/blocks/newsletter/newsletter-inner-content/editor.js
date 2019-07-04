// @wordpress
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import { InnerBlocks } from '@wordpress/block-editor'

// components
import edit from './components/edit'

registerBlockType('action-network/newsletter-inner-content', {
  title: __('Newsletter Inner Content', 'tinypixel'),
  category: 'layout',
  edit,
  save: () => (
    <InnerBlocks.Content />
  ),
})
