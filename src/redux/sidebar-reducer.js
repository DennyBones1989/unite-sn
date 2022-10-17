let initialState = {
    friendsBar: [
        { id: 1, name: 'Stojan', ava: 'https://sun9-27.userapi.com/s/v1/if2/6lzcdJixWDdx1Xjn7TCs_CizhUOG-3xMfYsdGGpxvDmj8xRp4EJQPc4Dc-Cmu34dElF6unY9xh4Hd0bpcgmn5rqd.jpg?size=604x447&quality=96&type=album' },
        { id: 2, name: 'Stepan', ava: 'https://assets.reedpopcdn.com/get8.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/get8.jpg' },
        { id: 3, name: 'Givi', ava: 'https://i1.sndcdn.com/artworks-qiELNBYjiAoYDLeo-gwLXDg-t500x500.jpg' }
    ]
}


const sidebarReducer = (state = initialState, action) => {
    console.log(state);
    return state;
}

export default sidebarReducer;