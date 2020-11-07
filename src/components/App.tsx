import React from "react"
import SongList from "./SongList"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

const App = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={10} lg={8}>
        <Paper>
          <SongList />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default App
