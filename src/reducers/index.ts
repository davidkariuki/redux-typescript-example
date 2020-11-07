import { combineReducers } from "redux"
import { Song, SelectSongAction, SELECT_SONG } from "../shared/types"

const songsReducer = (): Song[] => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I want it that way", duration: "1:45" },
  ]
}

const selectSongReducer = (
  selectedSong: Song | null = null,
  action: SelectSongAction
): Song | null => {
  if (action.type === SELECT_SONG) {
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer,
})
