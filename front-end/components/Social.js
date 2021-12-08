import {
  FaEnvelope,
  FaLinkedinIn,
  FaInstagramSquare,
  FaFacebookSquare,
  FaPodcast,
  FaAmazon,
} from "react-icons/fa";

const Social = () => {
  return (
    <div className="mt-8 flex justify-between px-1 items-center w-52 mx-auto md:mx-0">
      <a
        target="_blank"
        href="https://www.facebook.com/pleasant.smith.12"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare className="h-6 w-6 cursor-pointer text-blue-600 hover:text-blue-800"></FaFacebookSquare>
      </a>

      <a
        target="_blank"
        href="https://www.instagram.com/due_coaching/"
        rel="noopener noreferrer"
      >
        <FaInstagramSquare className="h-6 w-6 cursor-pointer text-pink-700 hover:text-pink-900"></FaInstagramSquare>
      </a>

      <a
        target="_blank"
        href="https://anchor.fm/pleasant"
        rel="noopener noreferrer"
      >
        <FaPodcast className="h-6 w-6 cursor-pointer text-green-600 hover:text-green-800"></FaPodcast>
      </a>
      <a
        target="_blank"
        href="http://linkedin.com/in/pleasant-smith-kelly-43a199154"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="h-6 w-6 cursor-pointer text-blue-500 hover:text-blue-700"></FaLinkedinIn>
      </a>
      <a
        // target="_blank"
        href="mailto:Pleasantsmith17@gmail.com"
        // rel="noopener noreferrer"
      >
        <FaEnvelope className="h-6 w-6 cursor-pointer text-red-700 hover:text-red-800"></FaEnvelope>
      </a>
      <a
        target="_blank"
        href="http://amazon.com/author/pleasantsmith"
        rel="noopener noreferrer"
      >
        <FaAmazon className="h-6 w-6 cursor-pointer text-yellow-600 hover:text-yellow-800"></FaAmazon>
      </a>
    </div>
  );
};

export default Social;
