import { Fragment } from '@wordpress/element'
import { MediaPlaceholder } from '@wordpress/editor'
import { RichText } from '@wordpress/block-editor'

import classnames from 'classnames'

const systemSans = `
  -apple-system,
  BlinkMacSystemFont,
  'avenir next',
  avenir,
  'helvetica neue',
  helvetica,
  ubuntu,
  roboto,
  noto,
  'segoe ui',
  arial,
  sans-serif
`

const HeroImage = (props) => (
  <div style={{
    margin: `0 auto`,
    maxWidth: `600px`,
  }}>
    <table
      border="0"
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
      style={{
        width: `100%`
      }}>
      <tbody>
        <tr style={{
          verticalAlign: `top`,
        }}>
          <td
            style={{
              background: `url(${props.imageUrl})`,
              backgroundSize: `cover`,
              backgroundPosition: `center center`,
              backgroundRepeat: `no-repeat`,
              padding: `0px`,
              verticalAlign: `top`,
            }}
            height="0">
            <div
              className="mj-hero-content"
              style={{
                margin: `0px, auto`,
              }}
            >
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                role="presentation"
                style={{
                  width: `100%`,
                  margin: `0px`,
                }}>
                <tbody>
                  <tr>
                    <td>
                      <table
                        border="0"
                        cellPadding="0"
                        cellSpacing="0"
                        role="presentation"
                        style={{
                          width: `100%`,
                          margin: `0px`,
                        }}>
                        <tbody>
                          <tr>
                            <td
                              align="center"
                              style={{
                                fontSize: `0px`,
                                padding: `40px 40px 40px 40px`,
                                wordBreak: `break-word`,
                              }}>
                              <div
                                className="tinyblocks-dropzone"
                                style={{
                                  fontFamily: `Helvetica`,
                                  fontSize: `25px`,
                                  fontWeight: `900`,
                                  lineHeight: `190px`,
                                  textAlign: `center`,
                                  textTransform: `uppercase`,
                                  color: `#ffffff`
                                }}>
                                <MediaPlaceholder onSelect={props.onImage} />
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
)

const HeroCaption = props => (
  <div style={{
    background: 'white',
    backgroundColor: 'white',
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
        background: 'white',
        backgroundColor: 'white',
        width: '100%',
      }}>
      <tbody>
        <tr>
          <td style={{
            direction: `ltr`,
            fontSize: `0px`,
            padding: `20px 0`,
            paddingBottom: `0`,
            paddingTop: `0`,
            textAlign: `center`,
            verticalAlign: `top`,
          }}>
            <div style={{
              margin: `0px auto`,
              maxWidth: `600px`
            }}>
              <table
                style={{
                  width: `100%`,
                }}
                align="center"
                border="0"
                cellPadding="0"
                cellSpacing="0"
                role="presentation">
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
                        style={{
                          fontSize: `13px`,
                          textAlign: `left`,
                          direction: `ltr`,
                          display: `inline-block`,
                          verticalAlign: `top`,
                          width: `100%`,
                        }}
                        className={classnames(
                          'mj-column-per-100',
                          'outlook-group-fix',
                        )}>
                        <table
                          border="0"
                          cellPadding="0"
                          cellSpacing="0"
                          role="presentation"
                          style={{
                            verticalAlign: `top`,
                          }}
                          width="100%">
                          <tbody>
                            <tr>
                              <td
                                align="left"
                                style={{
                                  fontSize: `0px`,
                                  padding: `10px 25px`,
                                  paddingTop: `0`,
                                  paddingBottom: `0`,
                                  wordBreak: `break-word`,
                                }}>
                                <div style={{
                                  fontFamily: systemSans,
                                  fontSize: `12px`,
                                  fontWeight: `300`,
                                  lineHeight: `14px`,
                                  textAlign: `left`,
                                  color: `#616161`
                                }}>
                                  <RichText
                                    tagName="p"
                                    class="ndn-sans"
                                    font-size="12px"
                                    placeholder="Image caption text"
                                    value={props.captionText}
                                    onChange={props.onCaptionText}
                                  />
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
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

const edit = ({
  setAttributes,
  attributes: {
    imageUrl,
    captionText,
  }
}) => (
  <Fragment>
    <HeroImage
      imageUrl={imageUrl}
      onImage={image => { setAttributes({imageUrl: image.url }) }} />
    <HeroCaption
      captionText={captionText}
      onCaptionText={captionText => { setAttributes({captionText}) }} />
  </Fragment>
)

export default edit
