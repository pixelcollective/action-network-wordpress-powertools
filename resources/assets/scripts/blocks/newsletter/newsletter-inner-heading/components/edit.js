import { RichText } from '@wordpress/block-editor'

const systemSans = `-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif`

const edit = props => (
  <tr>
    <td
      align="left"
      style={{
        fontSize: `0px`,
        padding: `10px 25px`,
        paddingBottom: `0`,
        wordBreak: `break-word`
      }}
    >
      <RichText
        tagName="h2"
        style={{
          fontFamily: systemSans,
          fontSize: `18px`,
          fontWeight: `500`,
          lineHeight: `28px`,
          textAlign: `left`,
          color: `#616161`,
        }}
        placeholder="Enter heading here.."
        value={props.attributes.headingText}
        onChange={headingText => {
          props.setAttributes({ headingText })
        }}
      />
    </td>
  </tr>
)

export default edit
