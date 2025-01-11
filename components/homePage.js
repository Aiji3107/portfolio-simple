import titleImage from "@/components/Images/titleImage.png";
import Image from "next/image";

export default function HomeSection() {
  return (
    <div className="h-screen w-screen flex flex-col justify-between items-center relative bg-gray-100">
      {/* Kontainer Gambar (Kotak Pink) */}
      <div className="flex justify-center items-center w-full h-full">
        <Image src={titleImage} width={400} height={400} alt="title-image" />
      </div>
      
      {/* Footer dengan Nama */}
      <div className="absolute bottom-4 w-full text-center text-black">
        <h1 className="text-lg font-bold">Aghi Kalam Ibrahim</h1>
      </div>
    </div>
  );
}
