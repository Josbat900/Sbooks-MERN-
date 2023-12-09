import { Link } from "react-router-dom"
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle,BiShow } from 'react-icons/bi'
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineDelete } from "react-icons/md"
import { useState } from "react"
import BookModal from "./BookModal"

const BookSingleCard = ({ book }) => {
    const [showModal, setShowmodal] = useState(false)
    return (
        <div className="border-2 border-sky-300 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
            <h2 className="absolute top-1 right-2 px-4 py-1 bg-sky-300 border-sky-400 border-2 rounded-lg m-full">
                {book.publishYear}
            </h2>
            <h4 className="my-2 text-sky-400 font-bold">{book._id}</h4>
            <div className=" flex justify-start items-center gap-x-2">
                <PiBookOpenTextLight className="text-sky-300  text-3xl" />
                <h2 className="my-1">{book.title}</h2>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                <BiUserCircle className="text-sky-300 text-3xl" />
                <h2 className="my-1">{book.author}</h2>
            </div>
            <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
                <BiShow className="text-3xl text-blue-800 hover:text-black cursor-pointer"
                onClick={()=> setShowmodal(true)}
                />
                <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600 hover:text_black" />
                </Link>
            </div>
            {
                showModal && (<BookModal book={book} onClose={()=> setShowmodal(false)}/>)
            }
        </div>
    )
}

export default BookSingleCard