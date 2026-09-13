type IconProps = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: "false" as const,
});

export function InstagramIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PinterestIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9.25" />
      <path d="M10.4 17.6 12.2 10.4" />
      <path d="M9.6 12.5c-.5-.9-.5-2.2.1-3.1.9-1.4 2.9-1.8 4.2-1 1.4.8 1.7 2.8 1 4.2-.6 1.2-2 1.8-3.1 1.2" />
    </svg>
  );
}

export function MailIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="2.75" y="5" width="18.5" height="14" rx="1" />
      <path d="m3.4 6 8.6 6.6L20.6 6" />
    </svg>
  );
}

export function ClockIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9.25" />
      <path d="M12 6.6V12l3.6 2.2" />
    </svg>
  );
}

export function PinIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 21.5c3.9-4.4 5.9-7.6 5.9-10.1a5.9 5.9 0 0 0-11.8 0c0 2.5 2 5.7 5.9 10.1Z" />
      <circle cx="12" cy="11.1" r="2.2" />
    </svg>
  );
}

export function CameraIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M2.75 8.2h3.3l1.5-2.3h8.9l1.5 2.3h3.3v11H2.75Z" />
      <circle cx="12" cy="13.6" r="3.7" />
    </svg>
  );
}

export function StarIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="m12 3.4 2.65 5.68 6.1.78-4.5 4.3 1.16 6.14L12 17.36 6.59 20.3l1.16-6.14-4.5-4.3 6.1-.78Z" />
    </svg>
  );
}

export function EyeIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M2.3 12c2.6-4 6-6 9.7-6s7.1 2 9.7 6c-2.6 4-6 6-9.7 6s-7.1-2-9.7-6Z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}

export function SunIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" />
    </svg>
  );
}

export function HomeIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3.4 10.6 12 3.6l8.6 7v9.8H3.4Z" />
      <path d="M9.5 20.4v-6h5v6" />
    </svg>
  );
}

export function HeartIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 20.3C6.9 16.8 3.8 13.9 3.8 10.6a4.2 4.2 0 0 1 8.2-1.3 4.2 4.2 0 0 1 8.2 1.3c0 3.3-3.1 6.2-8.2 9.7Z" />
    </svg>
  );
}
