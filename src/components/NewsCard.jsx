import { FaRegBookmark, FaRegEye, FaStar } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    image_url,
    details,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-md my-5">
      {/* Header */}
      <div className="flex justify-between bg-base-200 items-center p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold">{author?.name}</h2>
            <p className="text-sm text-gray-500">
              {format(new Date(author?.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
      <div className="flex gap-4">
      <FaRegBookmark></FaRegBookmark>
      <BsShare className="text-gray-500 hover:text-blue-500 cursor-pointer" />
      </div>
      </div>

      {/* Title */}
      <div className="p-4 pt-2">
        <h1 className="text-lg font-bold">{title}</h1>
      </div>

      {/* Image */}
      <div className="px-4">
        <img
          src={image_url}
          alt="News Thumbnail"
          className="w-full h-56 object-cover rounded"
        />
      </div>

      {/* Details */}
      <div className="p-4 pt-3 text-sm text-gray-700">
        {details.length > 250 ? details.slice(0, 250) + "..." : details}
        <span className="text-blue-500 font-semibold cursor-pointer ml-1">
          Read More
        </span>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center p-4 pt-2 border-t">
        <div className="flex items-center gap-2 text-orange-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span className="text-gray-800 font-semibold">{rating?.number}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
