// wordpress
const { __ } = wp.i18n
const { Component } = wp.element
import {
  ToggleControl,
  TextControl,
} from '@wordpress/components'

// packages
import classnames from 'classnames'

// exports
class Edit extends Component {
  constructor() {
    super(...arguments)
    this.onToggle = this.onToggle.bind(this)
    this.onButtonText = this.onButtonText.bind(this)
  }

  onButtonText(buttonText) {
    this.props.setAttributes({
      buttonText,
    })
  }

  onToggle() {
    this.props.setAttributes({
      boxed: !this.props.attributes.boxed,
    })
  }

  render() {
    return (
      <div className={classnames(this.props.className)}>
        <form action='/wp-json/can/person/add' method='GET'>
          <label for="email">Email</label>
          <input type='email' placeholder="myemail@google.com" name="email" />
          <button type='submit' disabled>
            <TextControl
              default='sign-up'
              value={this.props.attributes.buttonText && this.props.attributes.buttonText}
              onChange={this.onButtonText} />
          </button>
        </form>
        <ToggleControl
          label={__('Boxed', 'tinypixel')}
          checked={this.props.attributes.boxed && this.props.attributes.boxed}
          onChange={this.onToggle} />
      </div>
    )
  }
}

export { Edit }