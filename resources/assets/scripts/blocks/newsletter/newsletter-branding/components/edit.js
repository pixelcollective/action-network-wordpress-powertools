// @wordpress
import { Component } from '@wordpress/element'
import { RichText } from '@wordpress/block-editor'

// exports
class Edit extends Component {
  constructor() {
    super(...arguments)

    this.onYear = this.onYear.bind(this)
    this.onIssueNumber = this.onIssueNumber.bind(this)
  }

  onYear(issueYear) {
    this.props.setAttributes({issueYear})
  }

  onIssueNumber(issueNumber) {
    this.props.setAttributes({issueNumber})
  }

  render() {
    return (
      <div style={{
        margin: '0px, auto',
        maxWidth: '600px',
        backgroundColor: '#101820',
      }}>
        <div style={{
          width: '180px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          <img src="https://ndncollective.org/app/uploads/2019/02/ndn-red-bg.png" />
        </div>
        <div style={{
          color: 'white',
          textAlign: 'center',
        }}>
          <div className="font-sans flex flex-row justify-outside w-32 mx-auto text-center">
            <div className="text-white">
              <RichText
                onChange={this.onIssueNumber}
                placeholder="ISSUE #01"
                value={this.props.attributes.issueNumber}
              />
            </div>
            <div className="text-white">
              &nbsp;/&nbsp;
            </div>
            <div className="text-white">
              <RichText
                onChange={this.onYear}
                placeholder="2019"
                value={this.props.attributes.issueYear}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export { Edit }
