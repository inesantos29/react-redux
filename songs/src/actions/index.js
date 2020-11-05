
// Action creator
export const selectSong = () => {
  // Return an action 
  return {
    type: 'SONG_SELECT',
    payload: 'song',
  }
}