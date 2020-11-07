export const SELECT_SONG = "SELECT_SONG"

export interface Song {
  title: string
  duration: string
}

export interface SelectSongAction {
  type: typeof SELECT_SONG
  payload: Song
}
