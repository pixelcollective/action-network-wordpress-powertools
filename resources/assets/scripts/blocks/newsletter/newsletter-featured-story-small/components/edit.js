// @wordpress
import { Component } from '@wordpress/element'

// components
import {
  ArticleImage,
  ArticleExcerpt,
} from './parts'

// exports
class Edit extends Component {
  constructor() {
    super(...arguments)

    this.onImage   = this.onImage.bind(this)
    this.onHeading = this.onHeading.bind(this)
    this.onExcerpt = this.onExcerpt.bind(this)
    this.onUrl     = this.onUrl.bind(this)
  }

  onHeading(heading) {
    this.props.setAttributes({heading})
  }

  onUrl(url) {
    this.props.setAttributes({url})
  }

  onExcerpt(excerpt) {
    this.props.setAttributes({excerpt})
  }

  onImage(image) {
    this.props.setAttributes({image: image.url})
  }

  render() {
    return (
      <div style={{
        background: `white`,
        backgroundColor: `white`,
        margin: `0px auto`,
        maxWidth: `600px`,
      }}>
        <table
          align="center"
          border="0"
          cellPadding="0"
          cellSpacing="0"
          role="presentation"
          style={{
            width: `100%`,
          }}>
          <tbody>
            <tr>
              <td style={{
                direction: `ltr`,
                fontSize: `0px`,
                padding: `0px`,
                textAlign: `center`,
                verticalAlign: `top`,
              }}>
                <ArticleExcerpt
                  onHeading={this.onHeading}
                  heading={this.props.attributes.heading}
                  onExcerpt={this.onExcerpt}
                  excerpt={this.props.attributes.excerpt}
                  url={this.props.attributes.url}
                  onUrl={this.onUrl}
                  isSelected={this.props.isSelected}
                />
                <ArticleImage
                  onImage={this.onImage}
                  image={this.props.attributes.image}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export { Edit }
