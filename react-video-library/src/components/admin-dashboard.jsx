import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const AdminDashboard = () => {
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

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <div>
                <Link to="/add-video" className="btn btn-primary bi bi-camera-video my-2"> Add Video</Link>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Title</th> 
                            <th>Preview</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            videoDetails.map(video =>
                                <tr key={video.VideoId}>
                                    <td>{video.Title}</td>
                                    <td>
                                        <iframe src={video.Url} width="200" height="100" title="YouTube video player"></iframe>
                                    </td>
                                    <td>
                                        <Link className='btn btn-warning bi bi-pen'></Link>
                                        <Link  to={`/delete-video/${video.VideoId}`} className='btn btn-danger bi bi-trash mx-2'></Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default AdminDashboard