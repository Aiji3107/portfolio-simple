import Image from "next/image";
import { projects } from "@/data/projects"; // Mengimpor data dari file projects.js
import Link from "next/link";
import MyProjectTitle from "@/components/Images/MyProjectTitle.png";

export default function ProjectSection() {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Judul */}
      <Image src={MyProjectTitle} alt="title" width={150} className="m-2" />

      {/* Grid Projek */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full max-w-6xl">
        {projects.map((project) => (
          <Link href={`/project/${project.id}`} key={project.id}>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
              {/* Gambar Projek */}
              <div className="relative w-full pb-[56.25%]">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              {/* Deskripsi Projek */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                <p className="mt-2 text-gray-600">{project.paragraph}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
