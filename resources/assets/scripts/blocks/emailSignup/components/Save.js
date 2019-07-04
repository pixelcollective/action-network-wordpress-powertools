// packages
import classnames from 'classnames'

const classes = (props) => {
  return classnames(
    props.className,
    props.attributes.boxed,
  )
}

const Save = props => (
  <div className={classes(props)}>
    <form action='/wp-json/can/person/add' method='GET'>
      <label for='email_address'>Email</label>
      <input type='email' name='email_address' />
      <button type='submit'>{
        props.attributes.buttonText
        ? props.attributes.buttonText
        : 'Sign up'
      }</button>
    </form>
  </div>
)

export { Save }