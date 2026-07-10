import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function UserIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
}

function LocationIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

function LanguageIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="m5 8 6 6"></path>
      <path d="m4 14 6-6 2-3"></path>
      <path d="M2 5h12"></path>
      <path d="M7 2h1"></path>
      <path d="m22 22-5-10-5 10"></path>
      <path d="M14 18h6"></path>
    </svg>
  );
}

function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ArrowUpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

function ExternalLinkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}

function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}

export {
  ArrowUpIcon,
  ExternalLinkIcon,
  GitHubIcon,
  GlobeIcon,
  LanguageIcon,
  LocationIcon,
  UserIcon,
};
