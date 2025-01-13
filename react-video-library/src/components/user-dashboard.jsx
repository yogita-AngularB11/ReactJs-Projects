import React from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import store  from '../store/store'

const UserDashboard = () => {
    const [cookies, setCookies, removeCookie] = useCookies(['userId'])
    const navigate = useNavigate()
    const [videoDetails, setVideoDetails] = useState([
        {
            VideoId: 0,
            Title: '',
            Url: '',
            Likes: 0,
            Dislikes: 0,
            Views: 0,
            CategoryId: 0
        }
    ])

    function LoadVideos() {
        axios.get(`http://127.0.0.1:5000/videos`)
            .then(
                response => {
                    setVideoDetails(response.data);
                }
            )
    }

    useEffect(() => {
        LoadVideos();
    }, [])

    function handleSignout() {
        removeCookie('UserId');
        navigate('/');
    }

    function
    return (
        <div>
            <div className='mt-2'>
                <h3 className="d-flex justify-content-between"><span>User Dashboard</span> <span><button className='btn bi bi-clock-history'> [{store.getState().store.VideosCount}]</button></span> <span>{cookies['userId']}</span ><button className='btn btn-danger' onClick={handleSignout}>SignOut</button></h3>
            </div>

            <div className="d-flex flex-wrap my-3">
                {
                    videoDetails.map(video =>
                        <div key={video.VideoId} className="card m-2 p-2 w-25">
                            <iframe src={video.Url} width="100%"  height="300" frameborder="0" title='Youtube'></iframe>
                        <div className="card-header">
                            <h2>{video.Title}</h2>
                        </div>
                        <div className="card-footer">
                            <button className='btn bi bi-eye-fill'>{video.Views}</button>
                            <button className='btn bi bi-hand-thumbs-up mx-2'>{video.Likes}</button>
                            <button className='btn bi bi-hand-thumbs-down'>{video.Dislikes}</button>
                            <button onClick={()=>{}}className='btn bi bi-floppy-fill'> Watch Later</button>
                        </div>
                        </div>)
                }
            </div>
        </div>
    )
}

export default UserDashboard
