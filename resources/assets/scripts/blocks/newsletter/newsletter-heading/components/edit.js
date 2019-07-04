// @wordpress
import { Component } from '@wordpress/element'
import { RichText } from '@wordpress/block-editor'

// exports
class Edit extends Component {
  constructor() {
    super(...arguments)

    this.onHeading = this.onHeading.bind(this)
    this.onSubheading = this.onSubheading.bind(this)
  }

  onHeading(heading) {
    this.props.setAttributes({heading})
  }

  onSubheading(subheading) {
    this.props.setAttributes({subheading})
  }

  render() {
    return (
      <div style={{
        margin: '0px auto',
        maxWidth: '600px',
      }}>
        <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" style={{width: '100%'}}>
          <tbody>
            <tr>
              <td style={{
                direction: 'ltr',
                fontSize: '0',
                padding: '20px 0',
                textAlign: 'center',
                verticalAlign: 'top',
              }}>
                <div style={{
                  margin: '0px, auto',
                  maxWidth: '600px',
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
                          verticalAlign: `top`
                        }}>
                          <div
                            className="mj-column-per-100 outlook-group-fix ndn-serif"
                            style={{
                              fontFamily: `athelas, 'Bodoni MT', 'Calisto MT', garamond, baskerville, georgia, times, serif`,
                              fontSize: `13px`,
                              textAlign: `left`,
                              direction: `ltr`,
                              display: `inline-block`,
                              verticalAlign: `top`,
                              width: `100%`,
                            }}>
                            <table border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style={{
                                    verticalAlign: `top`,
                                    paddingTop: `0px`,
                                  }}>
                                    <table border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" style={{
                                            fontSize: `0px`,
                                            padding: `10px 25px`,
                                            wordBreak: `break-word`
                                          }}>
                                            <div style={{
                                              fontFamily: `-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif`,
                                              fontSize: `14px`,
                                              fontWeight: `300`,
                                              lineHeight: `24px`,
                                              textAlign: `center`,
                                              color: `#ffffff`
                                            }}>
                                              <RichText
                                                tagName="h2"
                                                style={{
                                                  textColor: '#FFFFFF',
                                                  fontWeight: 700,
                                                }}
                                                value={this.props.attributes.heading}
                                                placeholder="Heading line for Newsletter Main Title"
                                                onChange={this.onHeading}
                                              />
                                              <RichText
                                                tagName="p"
                                                style={{
                                                  fontFamily: `athelas, 'Bodoni MT', 'Calisto MT', garamond, baskerville, georgia, times, serif`,
                                                }}
                                                className="text-white"
                                                value={this.props.attributes.subheading}
                                                placeholder="Subheading line for Newsletter Main Title to provide additional context"
                                                onChange={this.onSubheading}
                                              />
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export { Edit }
