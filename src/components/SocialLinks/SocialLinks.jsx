import { socialLinks } from "../../utils/constants";

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socialLinks.map(({ name, url, icon: Icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          title={name}
          className="group grid place-items-center w-10 h-10 rounded-md border border-[var(--border-color)] text-[var(--text-secondary)] transition-all duration-300 hover:text-[var(--accent)] hover:border-[var(--accent)]"
        >
          <Icon className="text-[15px] transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}