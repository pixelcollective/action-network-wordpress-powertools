import { MediaPlaceholder } from '@wordpress/editor'
import { RichText } from '@wordpress/block-editor'
import { URLInput } from '@wordpress/editor'

import classnames from 'classnames'

const fonts = {
  systemSans: `
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
  `,

  systemSerif: `
    athelas,
    'Bodoni MT',
    'Calisto MT',
    garamond,
    baskerville,
    georgia,
    times,
    serif
  `,
}

const HeaderImage = props => (
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
        width: `100%`,
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
            height="0"
          >
            <div className="mj-hero-content" style={{
              margin: `0px, auto`,
            }}>
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
                                <MediaPlaceholder
                                  onSelect={props.onImage}
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
)

const ArticleExcerpt = props => (
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
        background: `white`,
        backgroundColor: `white`,
        width: `100%`,
      }}>
      <tbody>
        <tr>
          <td style={{
            direction: `ltr`,
            fontSize: `0px`,
            padding: `20px 0`,
            textAlign: `center`,
            verticalAlign: `top`,
          }}>
            <div style={{
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
                      <div
                        className={classnames(
                          'mj-column-per-100',
                          'outlook-group-fix',
                        )}
                        style={{
                          fontSize: `13px`,
                          textAlign: `left`,
                          direction: `ltr`,
                          display: `inline-block`,
                          verticalAlign: `top`,
                          width: `100%`,
                        }}>
                        <table
                          border="0"
                          cellPadding="0"
                          cellSpacing="0"
                          role="presentation"
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td style={{
                                verticalAlign: `top`,
                                paddingBottom: `0px`,
                              }}>
                                <table
                                  border="0"
                                  cellPadding="0"
                                  cellSpacing="0"
                                  role="presentation"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        align="left"
                                        style={{
                                          fontSize: `0px`,
                                          padding: `10px 25px`,
                                          paddingBottom: 0,
                                          wordBreak: `break-word`,
                                        }}>
                                        <div
                                          style={{
                                            fontFamily: fonts.systemSans,
                                            fontSize: `14px`,
                                            fontWeight: `300`,
                                            lineHeight: `24px`,
                                            textAlign: `left`,
                                            color: `#616161`,
                                          }}>
                                          <h3 style={{
                                            fontWeight: 700,
                                          }}>
                                            <span style={{
                                              color: `#c31425`,
                                              textDecoration: `none`,
                                            }}>
                                              <RichText
                                                tagName="span"
                                                onChange={props.onHeadingText}
                                                value={props.headingText}
                                                placeholder="Featured story callout headline"
                                              />
                                            </span>
                                          </h3>
                                          {props.isSelected && (
                                            <URLInput
                                              value={props.buttonUrl}
                                              onChange={props.onButtonUrl}
                                            />
                                          )}
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        align="left"
                                        className="ndn-serif"
                                        style={{
                                          fontFamily: fonts.systemSerif,
                                          fontSize: `0px`,
                                          padding: `10px 25px`,
                                          paddingTop: `0`,
                                          paddingBottom: `10px`,
                                          wordBreak: `break-word`,
                                        }}>
                                        <div style={{
                                          fontFamily: fonts.systemSans,
                                          fontSize: `16px`,
                                          fontWeight: `100`,
                                          lineHeight: `24px`,
                                          textAlign: `left`,
                                          color: `#616161`,
                                        }}>
                                          <RichText
                                            tagName="p"
                                            className="ndn-serif"
                                            onChange={props.onExcerptText}
                                            value={props.excerptText}
                                            placeholder="Pipelines like this don’t build up the economy at all. They only make a few people rich, create very few, temporary jobs and contribute to climate change, which is a problem not only for the Indigenous Peoples of this region but for humanity as a whole. We don’t want to see that happen. That’s why we plan on organizing our communities and encouraging people to try to stop the pipeline through peaceful protest, non-violent direct action and advocacy strategies."
                                            style={{
                                              fontFamily: fonts.systemSerif
                                            }} />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        align="left"
                                        verticalalign="middle"
                                        style={{
                                          fontSize: `0px`,
                                          padding: `10px 25px`,
                                          wordBreak: `break-word`,
                                        }}>
                                        <table
                                          border="0"
                                          cellPadding="0"
                                          cellSpacing="0"
                                          role="presentation"
                                          style={{
                                            borderCollapse: `separate`,
                                            lineHeight: `100%`,
                                          }}>
                                          <tbody>
                                            <tr>
                                              <td
                                                align="center"
                                                bgcolor="#c31425"
                                                role="presentation"
                                                valign="middle"
                                                style={{
                                                  border: `none`,
                                                  borderRadius: 0,
                                                  cursor: `auto`,
                                                  padding: `10px 25px`,
                                                  background: `#c31425`,
                                                }}>
                                                <RichText
                                                  tagName="span"
                                                  className="ndn-serif"
                                                  onChange={props.onButtonText}
                                                  value={props.buttonText}
                                                  placeholder="Learn more"
                                                  style={{
                                                    background: `#c31425`,
                                                    color: `white`,
                                                    fontFamily: `Helvetica`,
                                                    fontSize: `13px`,
                                                    fontWeight: `normal`,
                                                    lineHeight: `120%`,
                                                    margin: `0`,
                                                    textDecoration: `none`,
                                                    textTransform: `none`,
                                                  }} />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>
                                                {props.isSelected && (
                                                  <URLInput
                                                    value={props.buttonUrl}
                                                    onChange={props.onButtonUrl}
                                                  />
                                                )}
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{ fontSize: `0px`, wordBreak: `break-word` }}>
                                        <div style={{ height: `20px` }}>&nbsp;</div>
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

export {
  HeaderImage,
  ArticleExcerpt,
}
