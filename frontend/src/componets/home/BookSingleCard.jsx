import { Link } from "react-router-dom"
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineDelete } from "react-icons/md"

const BookSingleCard = ({ book }) => {
    return (
        <div
            key={book._id}
            className="border-2 border-sky-300 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
        >
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
        </div>
    )
}

export default BookSingleCard