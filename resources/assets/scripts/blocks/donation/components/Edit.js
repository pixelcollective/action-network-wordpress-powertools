// wordpress
import { __ } from '@wordpress/i18n'
import { Component, Fragment } from '@wordpress/element'
import { SelectControl, ToggleControl } from '@wordpress/components'

class Edit extends Component {
  constructor() {
    super(...arguments)

    this.state = {forms: ''}
    this.onForm = this.onForm.bind(this)
    this.onToggle = this.onToggle.bind(this)
    this.fetchForms = this.fetchForms.bind(this)
    this.selectOptions = this.selectOptions.bind(this)
    this.selectValue = this.selectValue.bind(this)
  }

  componentDidMount() {
    this.fetchForms()
  }

  fetchForms() {
    fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
          actionNetworkDonationForm {
            id
            name
            embed
          }
        }`
      }),
    }).then(res => res.json()).then((res) => this.setState({
      forms: res.data.actionNetworkDonationForm,
    })).catch(err => console.log(err))
  }

  onForm(selectId) {
    this.props.setAttributes({
      form: this.state.forms.filter(form => {
        if (form.id == selectId) {
          return form
        }
      }),
    })
  }

  onToggle() {
    this.props.setAttributes({
      boxed: !this.props.attributes.boxed,
    })
  }

  selectOptions() {
    return [{
      label: 'None selected',
      value: 'undefined',
    }].concat(this.state.forms.map(form => ({
      label: form.name,
      value: form.id,
    })))
  }

  selectValue() {
    return (this.props.attributes.form && this.props.attributes.form[0])
    ? this.props.attributes.form[0].id : 'undefined'
  }

  render() {
    return (
      <div>
        {this.state.forms && this.props.attributes.form ? (
          <Fragment>
            <SelectControl
              label={__('Action Network Donation Form', 'tinypixel')}
              value={this.selectValue()}
              onChange={this.onForm}
              options={this.selectOptions()} />
            <ToggleControl
              label={__('Boxed', 'tinypixel')}
              checked={this.props.attributes.boxed}
              onChange={this.onToggle} />
          </Fragment>
        ) : <span>Loading...</span>}
      </div>
    )
  }
}

export { Edit }