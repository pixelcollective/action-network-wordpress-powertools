import { RichText } from '@wordpress/block-editor'
import { URLInput } from '@wordpress/editor'

import classnames from 'classnames'

const logoImage = `https://ndncollective.org/app/uploads/2019/02/NDN-horizontal.png`,
      logoLinkUrl = `https://ndncollective.org/february-2019-program-updates/`,
      systemSans = `-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif`

const Logo = () => (
  <div className={classnames(
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
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      width="100%">
      <tbody>
        <tr>
          <td
            style={{
              verticalAlign: `top`,
              paddingBottom: `4px`,
            }}>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              width="100%">
              <tbody>
                <tr>
                  <td
                    style={{
                      fontSize: `0px`,
                      wordBreak: `break-word`,
                    }}>
                    <div style={{
                      height: `30px`,
                    }}>&nbsp;</div>
                  </td>
                </tr>
                <tr>
                  <td
                    align="center"
                    style={{
                      fontSize: `0px`,
                      padding: `10px 25px`,
                      wordBreak: `break-word`,
                    }}>
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      role="presentation"
                      style={{
                        borderCollapse: `collapse`,
                        borderSpacing: `0px`
                      }}>
                      <tbody>
                        <tr>
                          <td style={{
                            width: `200px`,
                          }}>
                            <a
                              href={logoLinkUrl}
                              target="_blank">
                              <img
                                height="auto"
                                src={logoImage}
                                style={{
                                  border: 0,
                                  display: `block`,
                                  outline: `none`,
                                  textDecoration: `none`,
                                  height: `auto`,
                                  width: `100%`,
                                }}
                                width="200" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

const CallToActionRow = props => (
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
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ verticalAalign: `top` }}
      width="100%">
      <tbody>
        <tr>
          <td
            align="center"
            style={{
              fontSize: `0px`,
              padding: `10px 25px`,
              wordBreak: `break-word`,
            }}>
            <div style={{
              fontFamily: systemSans,
              fontSize: `10px`,
              fontWeight: 300,
              lineHeight: `24px`,
              textAlign: `center`,
              textTransform: `uppercase`,
              color: `white`,
            }}>
              <RichText
                tagName="div"
                style={{
                  fontFamily: systemSans,
                  color: `#fff`,
                  textTransform: `uppercase`,
                }}
                placeholder="Fund our work"
                value={props.callToActionText}
                onChange={props.onCallToActionText}
              />
              {props.displayUrl && (
                <URLInput
                  value={props.callToActionUrl}
                  onChange={props.onCallToActionUrl}
                />
              )}
            </div>
          </td>
        </tr>
        <tr>
          <td style={{fontSize: `0px`, wordBreak: `break-word`}}>
            <div style={{height: `5px`}}>&nbsp;</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

const edit = props => (
  <div style={{
    background: `#c31425`,
    backgroundColor: `#c31425`,
    margin: `0px auto`,
    maxWidth: `600px`,
  }}>
    <table
      align="center"
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{
        background: `#c31425`,
        backgroundColor: `#c31425`,
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
            <Logo />
            <CallToActionRow
              displayUrl={props.isSelected && true}
              callToActionText={props.attributes.callToActionText}
              callToActionUrl={props.attributes.callToActionUrl}
              onCallToActionText={callToActionText => { props.setAttributes({callToActionText}) }}
              onCallToActionUrl={callToActionUrl => { props.setAttributes({callToActionUrl}) }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default edit
