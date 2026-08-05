import React from "react";

// Official Playwright Logo (Two Green/Teal Masks)
export function PlaywrightIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Back Mask */}
      <path
        d="M48 20C30.3 20 16 34.3 16 52C16 69.7 30.3 84 48 84C65.7 84 80 69.7 80 52C80 34.3 65.7 20 48 20Z"
        fill="#2EAD33"
      />
      <circle cx="38" cy="48" r="6" fill="#1C1E24" />
      <circle cx="60" cy="48" r="6" fill="#1C1E24" />
      <circle cx="40" cy="46" r="2.5" fill="#FFFFFF" />
      <circle cx="62" cy="46" r="2.5" fill="#FFFFFF" />

      {/* Front Mask */}
      <path
        d="M80 44C62.3 44 48 58.3 48 76C48 93.7 62.3 108 80 108C97.7 108 112 93.7 112 76C112 58.3 97.7 44 80 44Z"
        fill="#45BA4B"
      />
      <circle cx="70" cy="72" r="6" fill="#1C1E24" />
      <circle cx="92" cy="72" r="6" fill="#1C1E24" />
      <circle cx="72" cy="70" r="2.5" fill="#FFFFFF" />
      <circle cx="94" cy="70" r="2.5" fill="#FFFFFF" />
    </svg>
  );
}

// Official Apache JMeter Logo (Red Apache Feather & Speedometer)
export function JMeterIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="28" fill="#D22128" fillOpacity="0.15" stroke="#D22128" strokeWidth="3" />
      {/* Feather Flame Shape */}
      <path
        d="M64 16C64 16 88 40 88 64C88 88 64 112 64 112C64 112 40 88 40 64C40 40 64 16 64 16Z"
        fill="#D22128"
      />
      <path
        d="M64 36V72L80 84"
        stroke="#FFFFFF"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="64" cy="72" r="6" fill="#FFFFFF" />
    </svg>
  );
}

// Official Selenium Logo (Green Box with "Se" Text & Checkmark)
export function SeleniumIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#43B02A" />
      <path
        d="M42 70C42 60 48 54 60 54C72 54 78 60 78 70C78 80 60 82 60 88H78"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M86 44V88" stroke="white" strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
}

// Official Appium Logo (Purple Mobile Robot)
export function AppiumIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="28" fill="#662D91" />
      <path d="M38 34H90V94H38V34Z" stroke="white" strokeWidth="8" strokeLinejoin="round" fill="none" />
      <circle cx="64" cy="64" r="16" fill="#662D91" stroke="white" strokeWidth="8" />
    </svg>
  );
}

// Official Postman Logo (Orange Rocket Astronaut)
export function PostmanIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="60" fill="#FF6C37" />
      <path d="M36 64L92 38L70 92L58 68L36 64Z" fill="white" />
    </svg>
  );
}

// Official K6 Logo (Purple K6 Engine)
export function K6Icon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="28" fill="#7B2CBF" />
      <path d="M36 32V96M36 64L84 32M36 64L84 96" stroke="white" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Official TypeScript Logo (Blue Square TS)
export function TypeScriptIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#3178C6" />
      <path d="M58 48H32V58H40V92H50V58H58V48Z" fill="white" />
      <path d="M72 84C74.5 86.5 78.5 88 83 88C89.5 88 93.5 84.5 93.5 79.5C93.5 74.5 89.5 72 83.5 69.5L80.5 68.2C75.5 66.2 73 63.2 73 58.7C73 52.7 78.5 48.7 86 48.7C90.5 48.7 94.5 50.2 97 52.7L92 60C90 58.5 88 57.5 85 57.5C81.5 57.5 79.5 59 79.5 61.5C79.5 64 82.5 65 87.5 67L90.5 68.2C96.5 70.7 99.5 74.2 99.5 80.2C99.5 87.2 93 91.7 83 91.7C77.5 91.7 72.5 89.7 69 86.2L72 84Z" fill="white" />
    </svg>
  );
}

// Official JavaScript Logo (Yellow Square JS)
export function JavaScriptIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#F7DF1E" />
      <path d="M64 82C64 90 59 93 51 93C43 93 37 88 34 83L42 75C44 78 47 81 51 81C54 81 56 80 56 77V48H64V82Z" fill="#000000" />
      <path d="M72 84C74.5 86.5 78.5 88 83 88C89.5 88 93.5 84.5 93.5 79.5C93.5 74.5 89.5 72 83.5 69.5L80.5 68.2C75.5 66.2 73 63.2 73 58.7C73 52.7 78.5 48.7 86 48.7C90.5 48.7 94.5 50.2 97 52.7L92 60C90 58.5 88 57.5 85 57.5C81.5 57.5 79.5 59 79.5 61.5C79.5 64 82.5 65 87.5 67L90.5 68.2C96.5 70.7 99.5 74.2 99.5 80.2C99.5 87.2 93 91.7 83 91.7C77.5 91.7 72.5 89.7 69 86.2L72 84Z" fill="#000000" />
    </svg>
  );
}

// Official Java Logo (Blue Cup Java)
export function JavaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="28" fill="#5382A1" />
      <path d="M42 94C42 94 48 98 64 98C80 98 86 94 86 94" stroke="#E76F00" strokeWidth="8" strokeLinecap="round" />
      <path d="M48 76C48 76 56 82 64 82C72 82 80 76 80 76" stroke="#E76F00" strokeWidth="8" strokeLinecap="round" />
      <path d="M64 28V54" stroke="#F8981D" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

// Official Python Logo (Blue & Yellow Intertwined Snakes)
export function PythonIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M63 12C37 12 38 23.3 38 23.3V35H64.5V38.5H28C16.8 38.5 12 46.2 12 62C12 77.8 19.6 84.5 30.5 84.5H37.5V73.7C37.5 62.4 46.8 52.8 58 52.8H84.5V41.5C84.5 29.8 75 12 63 12ZM48.5 24.8C51.5 24.8 54 27.3 54 30.3C54 33.3 51.5 35.8 48.5 35.8C45.5 35.8 43 33.3 43 30.3C43 27.3 45.5 24.8 48.5 24.8Z" fill="#3776AB" />
      <path d="M65 116C91 116 90 104.7 90 104.7V93H63.5V89.5H100C111.2 89.5 116 81.8 116 66C116 50.2 108.4 43.5 97.5 43.5H90.5V54.3C90.5 65.6 81.2 75.2 70 75.2H43.5V86.5C43.5 98.2 53 116 65 116ZM79.5 103.2C76.5 103.2 74 100.7 74 97.7C74 94.7 76.5 92.2 79.5 92.2C82.5 92.2 85 94.7 85 97.7C85 100.7 82.5 103.2 79.5 103.2Z" fill="#FFD43B" />
    </svg>
  );
}

// Official HTML5 Logo (Orange Shield 5)
export function Html5Icon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M19 12L28 112L64 122L100 112L109 12H19Z" fill="#E34F26" />
      <path d="M64 24V110L92 102L99 24H64Z" fill="#EF652A" />
      <path d="M40 40H88L86 54H42L44 70H84L82 92L64 97L46 92L45 80H31L33 99L64 108L95 99L99 40H40Z" fill="white" />
    </svg>
  );
}

// Official CSS3 Logo (Blue Shield 3)
export function Css3Icon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M19 12L28 112L64 122L100 112L109 12H19Z" fill="#1572B6" />
      <path d="M64 24V110L92 102L99 24H64Z" fill="#33A9DC" />
      <path d="M40 40H88L86 54H42L44 70H84L82 92L64 97L46 92L45 80H31L33 99L64 108L95 99L99 40H40Z" fill="white" />
    </svg>
  );
}

// Official Docker Logo (Blue Container Whale Grid)
export function DockerIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="60" width="20" height="20" rx="4" fill="#2496ED" />
      <rect x="42" y="60" width="20" height="20" rx="4" fill="#2496ED" />
      <rect x="68" y="60" width="20" height="20" rx="4" fill="#2496ED" />
      <rect x="42" y="34" width="20" height="20" rx="4" fill="#2496ED" />
      <rect x="68" y="34" width="20" height="20" rx="4" fill="#2496ED" />
      <rect x="68" y="8" width="20" height="20" rx="4" fill="#2496ED" />
      <path d="M12 90C12 102 24 108 64 108C104 108 116 102 116 90C116 84 108 82 104 82C96 82 92 86 80 86C68 86 64 82 52 82C40 82 36 86 24 86C16 86 12 84 12 90Z" fill="#2496ED" />
    </svg>
  );
}

// Official GitHub Actions Logo (Blue Check Workflow)
export function GitHubActionsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="28" fill="#2088FF" />
      <path d="M32 64L54 86L96 42" stroke="white" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Official GitLab Logo (Orange Fox)
export function GitLabIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M64 116L120 75L103 23L87 75H41L25 23L8 75L64 116Z" fill="#E24329" />
      <path d="M64 116L41 75H87L64 116Z" fill="#FC6D26" />
      <path d="M64 116L8 75L25 23L64 116Z" fill="#FCA326" />
      <path d="M64 116L120 75L103 23L64 116Z" fill="#FCA326" />
    </svg>
  );
}

// Official Jira Logo (Blue Dual Diamond Flip)
export function JiraIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M62 14L14 62L62 110L110 62L62 14Z" fill="#0052CC" fillOpacity="0.2" />
      <path d="M62 40L38 64L62 88L86 64L62 40Z" fill="#0052CC" />
      <path d="M62 14L38 38L62 62L86 38L62 14Z" fill="#2684FF" />
    </svg>
  );
}

// Official Trello Logo (Blue Boards)
export function TrelloIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="28" fill="#0079BF" />
      <rect x="28" y="28" width="32" height="72" rx="6" fill="white" />
      <rect x="68" y="28" width="32" height="48" rx="6" fill="white" />
    </svg>
  );
}

// Official Azure Boards Logo (Blue Azure Cloud)
export function AzureBoardsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="28" fill="#0078D4" />
      <path d="M36 92L56 36L92 92H36Z" fill="white" />
    </svg>
  );
}
