import * as React from 'react'

import {createStyles, WithStyles, withStyles} from '@material-ui/core'

const styles = createStyles({
  root: {
    background: 'blue'
  }
})

type Props = WithStyles<typeof styles>

const Hello = ({classes}: Props) => <h1 className={classes.root}>Hello</h1>

export default withStyles(styles)(Hello)