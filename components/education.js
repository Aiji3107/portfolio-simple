import Image from "next/image";
import EduTitle from "@/components/Images/TitleEducation.png";
import EduImage from "@/components/Images/GundarImage.png";

export default function EducationSection() {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row items-center justify-between px-8 bg-gray-50">
      {/* Konten Kiri */}
      <div className="flex-1 space-y-6 md:w-1/2">
        <Image src={EduTitle} alt="eduTitle" width={350} />
        {/* Konten Teks */}
        <div className="text-black">
          {/* Judul */}
          <h1 className="text-2xl font-bold">Gunadarma University</h1>
          {/* Program Studi */}
          <p className="text-xl font-medium">Faculty of Computer Science and Information Technology</p>
          <p className="text-xl font-medium">Information System</p>
          <p className="text-lg font-light">2020 - 2024</p>
        </div>
      </div>

      {/* Gambar Kanan */}
      <div className="flex-shrink-0 p-4 md:ml-8 mt-8 md:mt-0">
        <Image
          src={EduImage}
          alt="eduImage"
          width={350}
          height={250}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
