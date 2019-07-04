import { InnerBlocks } from '@wordpress/block-editor'

import classnames from 'classnames'

const ALLOWED_BLOCKS = [
  'action-network/newsletter-inner-heading',
  'action-network/newsletter-inner-paragraph',
  'action-network/newsletter-inner-image',
]

const edit = props => (
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
                }}
              >
                <tbody>
                  <tr>
                    <td style={{
                      direction: `ltr`,
                      fontSize: `0px`,
                      padding: `0px`,
                      paddingTop: `0`,
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
                        }}
                      >
                        <table
                          border="0"
                          cellPadding="0"
                          cellSpacing="0"
                          role="presentation"
                          style={{
                            verticalAlign: `top`,
                          }}
                          width="100%"
                        >
                          <tbody>
                            <InnerBlocks
                              renderAppender={() => <InnerBlocks.DefaultBlockAppender />}
                              allowedBlocks={ALLOWED_BLOCKS}
                              templateLock={false}
                            />
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

export default edit
