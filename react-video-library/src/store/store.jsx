 import { configureStore } from "@reduxjs/toolkit";
 import videoSlicer from "../slicer/video-slicer";

 export default configureStore(
    {
        reducer:{
            store:videoSlicer
            //in store object we have videoSlicer
            // videoslicer is having state and action
            // using getState() we get the state present in slicer(video and videoLength)
            //now store created and contains data about videos and video length
            //we will configure in index.js
        }
    }
 )