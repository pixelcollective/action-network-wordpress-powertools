import { RichText } from '@wordpress/block-editor'

const systemSans = `-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif`
const systemSerif = `athelas, 'Bodoni MT', 'Calisto MT', garamond, baskerville, georgia, times, serif`

const edit = props => (
  <tr>
    <td
      align="left"
      style={{
        fontSize: `0px`,
        padding: `0px 25px`,
        wordBreak: `break-word`
      }}>
      <div style={{
        fontFamily: systemSans,
        fontSize: `14px`,
        fontWeight: `300`,
        lineHeight: `24px`,
        textAlign: `left`,
        color: `#616161`,
      }}>
        <RichText
          tagName="p"
          className="ndn-serif"
          font-weight="100"
          padding-top="0"
          padding-bottom="10px"
          line-height="24px"
          font-size="16px"
          style={{
            fontFamily: systemSerif,
          }}
          placeholder="Every great epic begins with a single character.."
          value={props.attributes.paragraphText}
          onChange={paragraphText => {
            props.setAttributes({ paragraphText })
          }}/>
      </div>
    </td>
  </tr>
)

export default edit
