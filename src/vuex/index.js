import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    playing:false,
    nowplaySong:{
            id: 1,
            title: 'Where Is the Love',
            singer: 'Josh Vietti',
            songUrl: '../music/1.mp3',
            imageUrl: '../music/1.png',
            album:'Best Of Both Worlds'
    },
    nowplayList:[
        {
            id: 1,
            title: 'Where Is the Love',
            singer: 'Josh Vietti',
            songUrl: '../music/1.mp3',
            imageUrl: '../music/1.png',
            album:'Best Of Both Worlds'
        },
        {
            id: 2,
            title: 'Going home',
            singer: 'Kenny G',
            songUrl: '../music/2.mp3',
            imageUrl: '../music/2.png',
            album:'惠威T200A试音碟'
        },
        {
            id: 3,
            title: 'My Heart Will Go On',
            singer: 'Kenny G',
            songUrl: '../music/3.mp3',
            imageUrl: '../music/3.png',
            album:'Love Ballads'
        }
    ]
}

const mutations = {
    changeNowpSong(state,songobj){
        state.nowplaySong = {};
        state.nowplaySong = songobj
    },
    changeNowpList(state,songlist){
        state.nowplayList = songlist
    },
    changePlaying(sate,flag){     
            sate.playing = flag     
    }
}

export default new Vuex.Store({
    state,
    mutations
})