import { Link } from "react-router-dom"
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineDelete } from "react-icons/md"

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {books.map((item) => (
        <div
          key={item._id}
          className="border-2 border-sky-300 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
        >
          <h2 className="absolute top-1 right-2 px-4 py-1 bg-sky-300 border-sky-400 border-2 rounded-lg m-full">
            {item.publishYear}
          </h2>
          <h4 className="my-2 text-sky-400 font-bold">{item._id}</h4>
          <div className=" flex justify-start items-center gap-x-2">
            <PiBookOpenTextLight className="text-sky-300  text-3xl" />
            <h2 className="my-1">{item.title}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className="text-sky-300 text-3xl" />
            <h2 className="my-1">{item.author}</h2>
          </div>
          <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
            <Link to={`/books/details/${item._id}`}>
              <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
            </Link>
            <Link to={`/books/edit/${item._id}`}>
              <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
            </Link>
            <Link to={`/books/delete/${item._id}`}>
              <MdOutlineDelete className="text-2xl text-red-600 hover:text_black" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BooksCard