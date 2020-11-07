import { Song, SELECT_SONG, SelectSongAction } from "../shared/types"

export const selectSong = (song: Song): SelectSongAction => {
  return {
    type: SELECT_SONG,
    payload: song,
  }
}
