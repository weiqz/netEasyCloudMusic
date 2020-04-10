export default { 
    changeNowpSong(state,songobj){
        state.nowplaySong = {};
        state.nowplaySong = songobj
    },
    changeNowpList(state,song){
        var arr =  state.nowplayList;
        arr.push(song);
        var arrs = [...new Set(arr)];
        state.nowplayList.push(arrs);
    },
    replaceSongList(state,songlist){
        state.nowplayList = songlist;
    },
    changePlaying(state,flag){     
        state.playing = flag     
    },
    updateUserPro(state,userpro){
        state.user_pro = userpro;
    }
}