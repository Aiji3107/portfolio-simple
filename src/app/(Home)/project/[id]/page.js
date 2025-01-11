"use client";
import { useParams } from "next/navigation"; // Menggunakan useParams untuk mendapatkan id dari URL
import { projects } from "@/data/projects"; // Mengimpor data proyek
import Image from "next/image";

export default function FocusProjectSection() {
  const { id } = useParams(); // Mengambil id proyek dari URL params

  // Menemukan proyek berdasarkan id
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container flex min-h-screen justify-center items-center">
      <div className="px-5">
        {/* Title */}
        <h1 className="text-6xl text-black font-bold pb-4">{project.title}</h1>
        {/* Content */}
        <div className="text-black">
          {/* Paragraph */}
          <p className="font-sans">{project.paragraph}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-5 sm:grid-cols-1 sm:grid-rows-2">
        {/* Element yang mengisi dua baris di sebelah kiri */}
        <div className="row-span-2 border-5 border-red-500">
          <Image src={project.thumbnail} alt="thumbnail" width={400} height={300} />
        </div>

        {/* Element 4 */}
        <div className="border-5 border-red-500">
          <Image src={project.thumbnail} width={200} height={150} alt="thumbnail" />
        </div>

        {/* Element 5 */}
        <div className="col-start-2 border-5 border-red-500">
          <Image src={project.thumbnail} width={200} height={150} alt="thumbnail" />
        </div>
      </div>
    </div>
  );
}
