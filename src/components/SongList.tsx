import React, { FC } from "react"
import { connect, ConnectedProps } from "react-redux"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import Switch from "@material-ui/core/Switch"

import { Song } from "../shared/types"
import { selectSong } from "../actions"

interface RootState {
  songs: Song[]
  selectedSong: Song
}

const mapState = (state: RootState): RootState => {
  return { songs: state.songs, selectedSong: state.selectedSong }
}

const connector = connect(mapState, { selectSong })
type SongListProps = ConnectedProps<typeof connector>

const SongList: FC<SongListProps> = ({ songs, selectSong, selectedSong }) => {
  const renderList = () => {
    return songs.map((song) => {
      return (
        <ListItem
          id={`switch-${song.title}`}
          key={song.title}
          alignItems="center"
        >
          <ListItemIcon>
            <LibraryMusicIcon />
          </ListItemIcon>
          <ListItemText primary={song.title} />
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              onChange={() => selectSong(song)}
              checked={selectedSong?.title === song.title ?? false}
              inputProps={{ "aria-labelledby": `switch-${song.title}` }}
            />
          </ListItemSecondaryAction>
        </ListItem>
      )
    })
  }

  return <List>{renderList()}</List>
}

export default connector(SongList)
