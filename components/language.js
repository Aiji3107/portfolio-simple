import Image from "next/image";
import LanguageTitle from "@/components/Images/languageTitle.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export default function LanguageSection() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-50">
      {/* Judul */}
      <Image src={LanguageTitle} alt="title" width={400} className="m-4" />
      
      {/* Layout Grid 2x3 Responsif */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 p-5 w-full max-w-6xl">
        {/* Kotak 1 - HTML */}
        <div className="flex justify-center items-center">
          <FontAwesomeIcon
            icon={faHtml5}
            className="shadow-lg bg-orange-500 text-4xl sm:text-5xl lg:text-6xl p-16 rounded-full text-white transform transition-transform duration-300 ease-in-out hover:scale-110 w-24 h-24 flex justify-center items-center"
          />
        </div>
        
        {/* Kotak 2 - React */}
        <div className="flex justify-center items-center">
          <FontAwesomeIcon
            icon={faReact}
            className="shadow-lg bg-blue-500 text-4xl sm:text-5xl lg:text-6xl p-16 rounded-full text-white transform transition-transform duration-300 ease-in-out hover:scale-110 w-24 h-24 flex justify-center items-center"
          />
        </div>

        {/* Kotak 3 - CSS */}
        <div className="flex justify-center items-center">
          <FontAwesomeIcon
            icon={faCss3Alt}
            className="shadow-lg bg-blue-400 text-4xl sm:text-5xl lg:text-6xl p-16 rounded-full text-white transform transition-transform duration-300 ease-in-out hover:scale-110 w-24 h-24 flex justify-center items-center"
          />
        </div>

        {/* Kotak 4 - JavaScript */}
        <div className="flex justify-center items-center">
          <FontAwesomeIcon
            icon={faJs}
            className="shadow-lg bg-yellow-500 text-4xl sm:text-5xl lg:text-6xl p-16 rounded-full text-white transform transition-transform duration-300 ease-in-out hover:scale-110 w-24 h-24 flex justify-center items-center"
          />
        </div>

        {/* Kotak 5 - Node.js */}
        <div className="flex justify-center items-center">
          <FontAwesomeIcon
            icon={faNode}
            className="shadow-lg bg-green-500 text-4xl sm:text-5xl lg:text-6xl p-16 rounded-full text-white transform transition-transform duration-300 ease-in-out hover:scale-110 w-24 h-24 flex justify-center items-center"
          />
        </div>
      </div>
    </div>
  );
}
