import { RichText, MediaPlaceholder, URLInput } from '@wordpress/block-editor'

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

const ArticleImage = props => (
  <div
    className={classnames(
      'mj-column-per-50',
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
      style={{verticalAlign: `top`}}
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
            <table
              border="0"
              cellPadding="0"
              cellSpacing="0"
              role="presentation"
              style={{
                borderCollapse: `collapse`,
                borderSpacing: `0px`,
              }}>
              <tbody>
                <tr>
                  <td style={{width: `250px`}}>
                    {props.image ? (
                      <img
                        style={{
                          border: 0,
                          display: `block`,
                          outline: `none`,
                          textDecoration: `none`,
                          height: `auto`,
                          width: `100%`,
                        }}
                        width="250"
                        src={props.image}
                      />
                    ) : (
                      <MediaPlaceholder
                        style={{
                          border: 0,
                          display: `block`,
                          outline: `none`,
                          textDecoration: `none`,
                          height: `auto`,
                          width: `100%`,
                        }}
                        width="250"
                        onSelect={props.onImage}
                      />
                    )}
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

const ArticleExcerpt = props => (
  <div
    className={classnames(
      'mj-column-per-50',
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
      style={{verticalAlign: `top`}}
      width="100%">
      <tbody>
        <tr>
          <td
            align="left"
            style={{
              fontSize: `0px`,
              padding: `10px 25px`,
              wordBreak: `break-word`,
            }}>
            <div style={{
              fontFamily: fonts.systemSans,
              fontSize: `14px`,
              fontWeight: `300`,
              lineHeight: `24px`,
              textAlign: `left`,
              color: `#616161`,
            }}>
              <RichText
                style={{
                  fontWeight: `bold`,
                  marginTop: 0,
                  marginBottom: 0,
                  color: `#c31425`,
                  textDecoration: `none`,
                }}
                placeholder="Bringing Truth to the American Narrative: Indigenous Voices are Rising"
                value={props.heading}
                onChange={props.onHeading} />
              <RichText
                style={{fontSize: `14px`}}
                placeholder="When you see a group as subhuman, it’s easier to harm them. It’s easier to cast them off to the margins of society, to be colonized, brutalized, and silenced. This is the Indigenous experience."
                value={props.excerpt}
                onChange={props.onExcerpt} />
              {props.isSelected && (
                <URLInput
                  label="Set the URL for this block's links"
                  value={props.url}
                  onChange={props.onUrl}
                />
              )}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

export {
  ArticleImage,
  ArticleExcerpt,
}
