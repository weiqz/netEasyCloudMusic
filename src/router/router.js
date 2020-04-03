import index from '../components/index.vue'
import musicDet from '../components/musicDet.vue'
import findmusic from '../components/findmusic/findMusic.vue'
import songlistDet from '../components/songList/songlistDet.vue'
export default [
    {
        path:'/',
        component:index,
        children:[
            {
                path:'',
                component:findmusic
            },
            {
                path:'findmusic',
                component:findmusic
            },
            {
                path:'songlistDet/:id',
                name:'songlistDet',
                component:songlistDet
            }
        ]   
    },
    {
        path:'/musicdet',
        component:musicDet
    }
]