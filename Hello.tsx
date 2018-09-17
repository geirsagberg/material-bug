import * as React from 'react'

import {createStyles, WithStyles} from '@material-ui/core'

const styles = createStyles({
  root: {
    background: 'blue'
  }
})

type Props = WithStyles<typeof styles>

export default (props: Props) => <h1>Hello</h1>