const fs = require("fs");
const simpleIcons = require("simple-icons");

const iconMap = [
  { name: "JMeterIcon", key: "siApachejmeter" },
  { name: "SeleniumIcon", key: "siSelenium" },
  { name: "PostmanIcon", key: "siPostman" },
  { name: "AppiumIcon", key: "siAppium" },
  { name: "K6Icon", key: "siK6" },
  { name: "TypeScriptIcon", key: "siTypescript" },
  { name: "JavaScriptIcon", key: "siJavascript" },
  { name: "PythonIcon", key: "siPython" },
  { name: "DockerIcon", key: "siDocker" },
  { name: "GitHubActionsIcon", key: "siGithubactions" },
  { name: "GitLabIcon", key: "siGitlab" },
  { name: "JiraIcon", key: "siJira" },
  { name: "TrelloIcon", key: "siTrello" },
  { name: "Html5Icon", key: "siHtml5" },
  { name: "Css3Icon", key: "siCss" },
  { name: "JavaIcon", key: "siOpenjdk" },
];

let output = `import React from "react";

// Official Playwright Logo (Masks Icon)
export function PlaywrightIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M78.3 43.9C78.3 27.4 64.9 14 48.4 14C31.9 14 18.5 27.4 18.5 43.9C18.5 60.4 31.9 73.8 48.4 73.8C64.9 73.8 78.3 60.4 78.3 43.9Z" fill="#2EAD33"/>
      <path d="M81.5 56.1C81.5 39.6 68.1 26.2 51.6 26.2C35.1 26.2 21.7 39.6 21.7 56.1C21.7 72.6 35.1 86 51.6 86C68.1 86 81.5 72.6 81.5 56.1Z" fill="#45BA4B"/>
      <circle cx="40" cy="45" r="5" fill="#1C1E24"/>
      <circle cx="63" cy="45" r="5" fill="#1C1E24"/>
      <circle cx="41.5" cy="43.5" r="2" fill="white"/>
      <circle cx="64.5" cy="43.5" r="2" fill="white"/>
    </svg>
  );
}

// Official Azure Boards Logo
export function AzureBoardsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#0078D4" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

`;

for (const item of iconMap) {
  const icon = simpleIcons[item.key];
  if (!icon) continue;
  output += `// Official ${icon.title} Brand SVG Logo
export function ${item.name}({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#${icon.hex}" xmlns="http://www.w3.org/2000/svg">
      <path d="${icon.path}" />
    </svg>
  );
}

`;
}

fs.writeFileSync("src/components/ui/SvgIcons.tsx", output);
console.log("Successfully built SvgIcons.tsx!");
