import React, { forwardRef } from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'

const LinkBehavior = forwardRef<
any,
Omit<LinkProps, 'to'> & { href: LinkProps['to'] }
>((props, ref): JSX.Element => {
  const { href, ...other } = props
  // Map href (MUI) -> to (react-router)
  return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />
})

export default LinkBehavior
