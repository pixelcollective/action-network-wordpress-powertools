import { MediaPlaceholder } from '@wordpress/block-editor'

const edit = (props) => (
  <tr>
    <td
      align="left"
      style={{
        fontSize: `0px`,
        padding: `0px 25px`,
        wordBreak: `break-word`
      }}>
      <div style={{
        fontSize: `14px`,
        fontWeight: `300`,
        lineHeight: `24px`,
        textAlign: `left`,
        color: `#616161`,
      }}>
        {props.attributes.image ? (
          <img src={props.attributes.image} width="100%" style={{width: `100%`}} />
        ) : (
          <MediaPlaceholder onSelect={(image) => props.setAttributes({ image: image.url })} />
        )}
      </div>
    </td>
  </tr>
)

export default edit
