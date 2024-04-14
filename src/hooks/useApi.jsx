import axios from 'axios'
import { url } from '../static/url.js'
import { useEffect,useState } from 'react'

export default function useGetPost() {
    const [isLoadingPost,setIsLoadingPost] = useState(true)
    const [dataPost,setDataPost] = useState([])

    // useEffect getDataPost
    useEffect(() => {
        getData()
    },[])


    // function to get data from api
    // return: noe
    const getData = () => {
        axios.get(`${url}/posts`)
            .then((res) => setDataPost(res.data))
            .then(setIsLoadingPost(false))
            .catch(err => console.log(err))

    }

    // function to post date
    // return: post data
    const postData = param => {
        return new Promise((resolve,reject) => {
            axios.post(`${url}/posts`,{ title: param })
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        })
    }


    // function to delete data
    // return: promise delete data
    const delData = id => {
        return new Promise((resolve,reject) => {
            axios.delete(`${url}/posts/${id}`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        })
    }

    return { dataPost,isLoadingPost,postData,getData,delData }

}
