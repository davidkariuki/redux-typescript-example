import React, { FC } from "react"
import { connect, ConnectedProps } from "react-redux"

import Box from "@material-ui/core/Box"
import Divider from "@material-ui/core/Divider"

import { Song } from "../shared/types"

interface RootState {
  selectedSong: Song
}

const mapState = (state: RootState): RootState => {
  return { selectedSong: state.selectedSong }
}
const connector = connect(mapState)
type SongListProps = ConnectedProps<typeof connector>

const SongDetail: FC<SongListProps> = ({ selectedSong }) => {
  return (
    <Box padding="1rem">
      <h4>Details</h4>
      <Divider />
      {selectedSong ? (
        <>
          <p>
            <b>Title:</b> {selectedSong.title}
          </p>
          <p>
            <b>Duration:</b> {selectedSong.duration}
          </p>
        </>
      ) : (
        <p>Select a song to view details</p>
      )}
    </Box>
  )
}

export default connector(SongDetail)
