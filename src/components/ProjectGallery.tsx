"use client";

import { useState } from "react";
import { Media } from "@/lib/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectGallery({ media }: { media: Media[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!media || media.length === 0) {
    return (
      <div className="p-12 border border-zinc-800 text-center bg-zinc-900">
        <p className="text-zinc-600 font-bold uppercase text-xs tracking-widest">
          Visuals arriving soon.
        </p>
      </div>
    );
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === media.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative group">
      {/* Main Image Display */}
      <div className="aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden relative">
        <img
          src={media[currentIndex].file_url}
          alt={media[currentIndex].alt_text || "Project screenshot"}
          className="w-full h-full object-cover transition-all duration-700"
        />

        {/* Navigation Buttons (only show if more than 1 image) */}
        {media.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white hover:bg-white hover:text-black transition-all border border-zinc-800 opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white hover:bg-white hover:text-black transition-all border border-zinc-800 opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {media.length > 1 && (
        <div className="grid grid-cols-5 gap-4 mt-4">
          {media.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className={`aspect-video border overflow-hidden transition-all ${
                index === currentIndex
                  ? "border-white opacity-100"
                  : "border-zinc-800 opacity-50 hover:opacity-100"
              }`}
            >
              <img
                src={item.file_url}
                alt="Thumbnail"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
