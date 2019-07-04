// @wordpress
import { Component, Fragment } from '@wordpress/element'

import {
  HeaderImage,
  ArticleExcerpt,
} from './parts'

// exports
class Edit extends Component {
  constructor() {
    super(...arguments)

    this.onImage = this.onImage.bind(this)
    this.onHeadingUrl = this.onHeadingUrl.bind(this)
    this.onHeadingText = this.onHeadingText.bind(this)
    this.onExcerptText = this.onExcerptText.bind(this)
    this.onButtonText = this.onButtonText.bind(this)
    this.onButtonUrl = this.onButtonUrl.bind(this)
  }

  onHeadingText(headingText) {
    this.props.setAttributes({headingText})
  }

  onHeadingUrl(headingUrl) {
    this.props.setAttributes({headingUrl})
  }

  onExcerptText(excerptText) {
    this.props.setAttributes({excerptText})
  }

  onImage(image) {
    this.props.setAttributes({imageUrl: image.url})
  }

  onButtonText(buttonText) {
    this.props.setAttributes({buttonText})
  }

  onButtonUrl(buttonUrl) {
    this.props.setAttributes({buttonUrl})
  }

  render() {
    return (
      <Fragment>
        <HeaderImage
          onImage={this.onImage}
          imageUrl={this.props.attributes.imageUrl}
          isSelected={this.props.isSelected}
        />
        <ArticleExcerpt
          onHeadingText={this.onHeadingText}
          onHeadingUrl={this.onHeadingUrl}
          headingText={this.props.attributes.headingText}
          onExcerptText={this.onExcerptText}
          excerptText={this.props.attributes.excerptText}
          onButtonText={this.onButtonText}
          onButtonUrl={this.onButtonUrl}
          buttonText={this.props.attributes.buttonText}
          buttonUrl={this.props.attributes.buttonUrl}
          isSelected={this.props.isSelected}
        />
      </Fragment>
    )
  }
}

export { Edit }
