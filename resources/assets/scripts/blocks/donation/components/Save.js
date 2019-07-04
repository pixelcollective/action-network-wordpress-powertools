import classnames from 'classnames'

const embedCode = (form) => {
  return (form && form[0])
    ? { __html: form[0].embed }
    : null
}

const classes = (props) => {
  return classnames(
    props.className,
    props.attributes.boxed,
  )
}

const Save = props => (
  <div className={classes(props)}>
    <div dangerouslySetInnerHTML={embedCode(props.attributes.form)} />
  </div>
)

export { Save }