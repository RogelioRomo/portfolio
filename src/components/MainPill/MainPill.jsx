import PropTypes from 'prop-types'

export const MainPill = ({ as: Element = '', additionalClasses, children, ...rest }) => {
  const classNames = `bg-custom-black bg-stardust-pattern mt-2 py-4 px-8 border-2 border-transparent hover:border-custom-gray2${additionalClasses ? ` ${additionalClasses}` : ''}`

  return (
    <Element className={classNames} {...rest}>
      {children}
    </Element>
  )
}

MainPill.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.node.isRequired,
  additionalClasses: PropTypes.node.isRequired
}
