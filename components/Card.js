import Image from "next/image";

export default function Card({ className, thumbnail, title, paragraph }) {
  return (
    <div
      className={` rounded-lg overflow-hidden shadow-lg bg-white ${className} h-[100px]`} // Menetapkan tinggi tetap pada kartu
    >
      {/* Thumbnail dengan Rasio 16:9 */}
      <div className="relative w-full pb-[56.25%]">
        {/* 16:9 ratio (9/16 = 0.5625) */}
        <Image
          src={thumbnail}
          alt="Thumbnail"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-full">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

        {/* Paragraf */}
        <p className="mt-2 text-gray-600 flex-1 overflow-hidden">
          {paragraph} {/* Paragraf akan ditampilkan seluruhnya tanpa potongan */}
        </p>
      </div>
    </div>
  );
}
