import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const DeleteVideo = () => {
    let params = useParams();
    let navigate=useNavigate();

    //Due to "toArray() method" ,even though it is returning one record(video) it is sending it in array type.the video has index number 0.
    const [video, setVideo] = useState([{
        VideoId: 0, Title: '', Url: '', Likes: 0, Dislikes: 0, Views: 0, CategoryId: 0
    }])

    function GetVideo() {
        axios.get(`http://127.0.0.1:5000/video/${params.id}`)
            .then(response => {
                setVideo(response.data)
            })
            // projectAPI
            // database.collection("videos").find({ VideoId: parseInt(req.params.id) }).toArray().then(documents => {
            //     res.send(documents);
            //     res.end();
            // })
            //Due to "toArray() method" ,even though it is returning one record(video) it is sending it in array type.the video has index number 0.
    }

    useEffect(() => {
        GetVideo();
    }, [])

    function handleDeleteClick() {
        axios.delete(`http://127.0.0.1:5000/delete-video/${params.id}`)
            .then(() => {
                alert('Deleted Successfully')
                navigate('/admin-dash')
            })
    }

    return (
        <div className="container-fluid">
            <h2>Delete Video </h2>
            <div className="card w-50">
                <div className="card-header">

                {/* Due to "toArray() method" ,even though it is returning one record(video) it is sending it in array type.the video has index number 0. */}
                    <h4>{video[0].Title}</h4>
                </div>
                <div className="card-body">
                    <iframe width="100%" height="300" src={video[0].Url} title="Youtube Video">
                    </iframe>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-danger" onClick={handleDeleteClick}>Yes,Delete</button>
                    <Link to="/admin-dash" className='btn btn-warning mx-3'>Cancel</Link>
                </div>
            </div>
        </div>
    )
}
export default DeleteVideo