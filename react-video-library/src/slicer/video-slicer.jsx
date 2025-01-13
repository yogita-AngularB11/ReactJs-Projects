import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    videos: [],
    VideosCount: 0
}

const videoSlicer = createSlice({
    name: 'video',
    initialState,
    reducers: {
        addToSaveList: (state, action) => {
            state.videos.push(action.payload)
            //customer watch button user will send video data this video data this action will collect data as payload(data carried from one place to another)
            state.VideosCount=state.videos.length;
        }
    }
});
//to access outside we have to export
export const {addToSaveList}=videoSlicer.actions;
export  default videoSlicer.reducer
// default::eager loading => it loads keeps ready  even before you start using it
// lazy loading :: you can directly access only when you require. 