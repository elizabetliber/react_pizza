import React from 'react'
import classNames from 'classnames'

const Button = ({ className, children }) => {
  return <button className={classNames('button', className)}>{children}</button>
}

export default Button
