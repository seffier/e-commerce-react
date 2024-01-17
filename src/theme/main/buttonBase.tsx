import { Components } from '@mui/material'
import LinkBehavior from './linkBehavior'

export const MuiButtonBase: Components = {
  MuiButtonBase: {
    defaultProps: {
      LinkComponent: LinkBehavior
    }
  }
}
