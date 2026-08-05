import React from "react";

export function PlaywrightIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#45BA4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 17L12 22L22 17" stroke="#2EAD33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12L12 17L22 12" stroke="#45BA4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SeleniumIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#CF0A2C" fillOpacity="0.15" stroke="#CF0A2C" strokeWidth="2" />
      <path d="M7 12L10 15L17 8" stroke="#CF0A2C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function JMeterIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#D22128" strokeWidth="2" />
      <path d="M12 6V12L16 14" stroke="#D22128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 12H9" stroke="#D22128" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PostmanIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#FF6C37" fillOpacity="0.2" stroke="#FF6C37" strokeWidth="2" />
      <path d="M6 12L18 7L13 18L11 13L6 12Z" fill="#FF6C37" />
    </svg>
  );
}

export function DockerIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="11" width="4" height="4" rx="1" fill="#2496ED" />
      <rect x="7" y="11" width="4" height="4" rx="1" fill="#2496ED" />
      <rect x="12" y="11" width="4" height="4" rx="1" fill="#2496ED" />
      <rect x="7" y="6" width="4" height="4" rx="1" fill="#2496ED" />
      <rect x="12" y="6" width="4" height="4" rx="1" fill="#2496ED" />
      <path d="M2 17C2 19 4 20 12 20C20 20 22 19 22 17" stroke="#2496ED" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M11 9H6V11H7.5V17H9.5V11H11V9Z" fill="white" />
      <path d="M13.5 15.5C14 16 14.8 16.2 15.7 16.2C17 16.2 17.8 15.5 17.8 14.5C17.8 13.5 17 13 15.8 12.5L15.2 12.2C14.2 11.8 13.7 11.2 13.7 10.3C13.7 9.1 14.8 8.3 16.3 8.3C17.2 8.3 18 8.6 18.5 9.1L17.5 10.4C17.1 10.1 16.7 9.9 16.1 9.9C15.4 9.9 15 10.2 15 10.7C15 11.2 15.6 11.4 16.6 11.8L17.2 12.1C18.4 12.6 19 13.3 19 14.5C19 15.9 17.7 16.8 15.7 16.8C14.6 16.8 13.6 16.4 12.9 15.7L13.5 15.5Z" fill="white" />
    </svg>
  );
}

export function PythonIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8 2C6.8 2 7 4.2 7 4.2V6.5H12.2V7.2H5.1C2.9 7.2 2 8.7 2 11.8C2 14.9 3.5 16.2 5.6 16.2H7V14.1C7 11.9 8.8 10 11 10H16.2V7.8C16.2 5.5 14.3 2 11.8 2Z" fill="#3776AB" />
      <path d="M12.2 22C17.2 22 17 19.8 17 19.8V17.5H11.8V16.8H18.9C21.1 16.8 22 15.3 22 12.2C22 9.1 20.5 7.8 18.4 7.8H17V9.9C17 12.1 15.2 14 13 14H7.8V16.2C7.8 18.5 9.7 22 12.2 22Z" fill="#FFD43B" />
      <circle cx="9" cy="4.5" r="0.8" fill="white" />
      <circle cx="15" cy="19.5" r="0.8" fill="white" />
    </svg>
  );
}

export function GitHubActionsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#2088FF" fillOpacity="0.2" stroke="#2088FF" strokeWidth="1.5" />
      <path d="M6 12L10 16L18 8" stroke="#2088FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GitLabIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.6 13L19.4 3.2C19.3 2.9 18.9 2.7 18.6 2.9C18.4 3 18.3 3.2 18.2 3.4L15.1 12.9H8.9L5.8 3.4C5.7 3 5.3 2.8 4.9 2.9C4.7 3 4.6 3.2 4.6 3.4L1.4 13C1.2 13.6 1.4 14.2 1.9 14.6L12 21.9L22.1 14.6C22.6 14.2 22.8 13.6 22.6 13Z" fill="#FC6D26" />
    </svg>
  );
}

export function JiraIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5 2.5L2 12L11.5 21.5L21 12L11.5 2.5Z" fill="#0052CC" fillOpacity="0.2" stroke="#0052CC" strokeWidth="2" />
      <path d="M11.5 7.5L6.5 12.5L11.5 17.5L16.5 12.5L11.5 7.5Z" fill="#0052CC" />
    </svg>
  );
}
