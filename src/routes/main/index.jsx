import { useState } from 'react'
import useGetPost from '../../hooks/useApi'
import './style.css'

export default function Root() {
    const { dataPost,isLoadingPost,postData,getData,delData } = useGetPost()
    const [title,setTitle] = useState('')

    // function to handle post data
    // return: none
    const handlePostData = () => {
        postData(title)
            .then(res => {
                getData()
                setTitle('')
            })
            .catch(err => console.log(err))
    }

    // function to handleDeleteData
    // return: none
    const handleDeleteData = (id) => {
        delData(id)
            .then(res => {
                getData()
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className='row'>
                {
                    isLoadingPost == false ?
                        <>
                            {
                                dataPost.map(item => (
                                    <div className='item'>
                                        <div className="text">
                                            {item.title}
                                        </div>
                                        <div className="del" onClick={() => handleDeleteData(item.id)}>
                                            Del
                                        </div>
                                    </div>
                                ))
                            }
                        </> :
                        null
                }
            </div >
            <div style={{ display: 'flex',gap: '1em',color: 'white',alignItems: 'center' }}>
                Input Name Title :
                <input value={title} type="text" onChange={e => setTitle(e.target.value)} />
                <button onClick={() => handlePostData()}>Add Title</button>
            </div>
        </>
    )
}