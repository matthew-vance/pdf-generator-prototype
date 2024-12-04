/// <reference types="vite/client" />

// Type IPC events exposed to the renderer process
interface Window {
  darkMode: {
    toggle: () => Promise<boolean>;
    system: () => void;
  };
}
