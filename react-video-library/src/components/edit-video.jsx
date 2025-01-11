import { useFormik } from "formik"
import {useNavigate, Link, useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import axios from "axios"


const EditVideo=()=>{
    const params=useParams();

    const [video, setVideo] = useState([{
        VideoId: 0, Title: '', Url: '', Likes: 0, Dislikes: 0, Views: 0, CategoryId: 0
    }])

    
    const [categories, setCategories] = useState([{ CategoryId: 0, CategoryName: '' }])

    const navigate=useNavigate();

    const formik = useFormik({
        initialValues: {
            VideoId: video[0].VideoId,
            Title: video[0].Title,
            Url: video[0].Url,
            Likes:video[0].Likes, 
            Dislikes: video[0].Dislikes,
            Views: video[0].Views,
            CategoryId:video[0].CategoryId
        },
        //collect the details and update
        onSubmit:(video)=>{
            axios.put(`http://127.0.0.1:5000/edit-video/${video.VideoId}`,video)
             .then(()=>{
                alert('Video Edited')
                navigate('/admin-dash')
            })
        },
        //new value is not allowed if you wont set it to true
        enableReinitialize:true
    })
    function LoadCategories() {
        axios.get("http://127.0.0.1:5000/categories")
            .then(response => {
                response.data.unshift({ CategoryId: 0, CategoryName: 'Select Category' });
                setCategories(response.data)
            })
    }
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
        LoadCategories();
        GetVideo();
    }, [])

    return(
        <div>
           <form onSubmit={formik.handleSubmit}>
           <h3>Edit Video</h3>
            <dl>
                    <dt>VideoId</dt>
                    <dd><input type="number" name="VideoId" value={formik.values.VideoId} onChange={formik.handleChange}/> </dd>

                    <dt>Title</dt>
                    <dd><input type="text" name="Title"value={formik.values.Title}  onChange={formik.handleChange } /></dd>

                    <dt>Url</dt>
                    <dd><input type="text" name="Url" value={formik.values.Url} onChange={formik.handleChange } /></dd>

                    <dt>Likes</dt>
                    <dd><input type="number" name="Likes" value={formik.values.Likes} onChange={formik.handleChange } /></dd>

                    <dt>Dislikes</dt>
                    <dd><input type="number" name="Dislikes" value={formik.values.Dislikes} onChange={formik.handleChange } /></dd>

                    <dt>Views</dt>
                    <dd><input type="number" name="Views" value={formik.values.Views} onChange={formik.handleChange } /></dd>

                    <dt>CategoryId</dt>
                    <dd>
                        <select name='CategoryId' value={formik.values.CategoryId} onChange={formik.handleChange}>
                            {
                                categories.map(category =>
                                    <option  key={category.CategoryId} value={category.CategoryId}>{category.CategoryName}</option>
                                )
                            }
                        </select>
                    </dd>
                    </dl>
           
                    <button className='btn btn-success me-2'>Save Video</button>
                    <Link to='/admin-dash' className='btn btn-danger ms-2'>Cancel</Link>
      
                    </form> 
                     </div>
    )

}
export default EditVideo