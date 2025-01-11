import Image from "next/image";
import EduTitle from "@/components/Images/TitleEducation.png";
import ProfilePicture from "@/components/Images/aghiImage.png";

export default function AboutSection() {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row items-center justify-between px-8 bg-gray-50">
      {/* Konten dan Gambar Judul */}
      <div className="flex-1 space-y-4 md:space-y-0 md:w-1/2">
        <Image src={EduTitle} alt="eduTitle" width={350} />
        {/* Konten */}
        <div className="text-black">
          {/* Judul */}
          <h1 className="text-2xl font-bold">
            Hello! I'm{" "}
            <span className="text-green-600">Aghi Kalam Ibrahim</span>
          </h1>
          {/* Paragraf */}
          <p className="mt-4 text-base font-medium leading-relaxed">
            Proactive Information Systems graduate with expertise in web
            development, UI/UX design, responsive applications, database
            optimization, and improving technical processes to enhance
            functionality and user experience.
          </p>
        </div>
      </div>

      {/* Gambar Profil */}
      <div className="flex-shrink-0 p-4 border-4 border-green-600 rounded-lg md:ml-8 mt-8 md:mt-0">
        <Image
          src={ProfilePicture}
          alt="profilePicture"
          width={250}
          height={250}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
