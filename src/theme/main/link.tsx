import LinkBehavior from './linkBehavior'
import { Components, LinkProps } from '@mui/material'

export const MuiLink: Components = {
  MuiLink: {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    defaultProps: {
      component: LinkBehavior
    } as LinkProps
  }
}
