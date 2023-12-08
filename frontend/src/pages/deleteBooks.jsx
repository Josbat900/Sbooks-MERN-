import {useState} from 'react'
import BackButton from '../componets/BackButton'
import Spinner from '../componets/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteBooks = () => {
  const [loading, setLoading]=useState(false)
  const navigate = useNavigate()
  const {id} = useParams()
  const handleDeleteBook = ()=>{
    setLoading(true)
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(()=>{
        setLoading(false)
        navigate('/')
      })
      .catch((error)=>{
        setLoading(false)
        alert("an error happened. please check console")
        console.error(error)
      })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl flex justify-center my-4'>Delete Book</h1>
      {loading ? <Spinner/> :''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>
        <button 
        className='p-4 bg-red-600 text-white mn-8 w-full' 
        onClick={handleDeleteBook}
        >
        Yes, Delete it
        </button>

      </div>
    </div>
  )
}

export default DeleteBooks