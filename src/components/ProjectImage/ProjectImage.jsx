import { useState } from "react";
import { FaImage } from "react-icons/fa";

export default function ProjectImage({ src, alt, title, aspect = "aspect-[16/10]", zoom = true }) {
  const [error, setError] = useState(!src);

  return (
    <div className={`relative ${aspect} overflow-hidden bg-[var(--bg-muted)]`}>
      {!error ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setError(true)}
          className={`h-full w-full object-cover ${zoom ? "transition-transform duration-500 group-hover:scale-105" : ""}`}
        />
      ) : (
        <div className="grid place-items-center h-full w-full flex-col gap-2 text-[var(--text-muted)]">
          <FaImage aria-hidden="true" className="text-3xl opacity-40" />
          <span className="text-sm font-medium opacity-60">{title}</span>
        </div>
      )}
    </div>
  );
}
