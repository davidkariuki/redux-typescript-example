import React from "react"
import SongList from "./SongList"
import SongDetail from "./SongDetail"
import Grid from "@material-ui/core/Grid"

const App = () => {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={6} lg={6}>
        <SongList />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <SongDetail />
      </Grid>
    </Grid>
  )
}

export default App
