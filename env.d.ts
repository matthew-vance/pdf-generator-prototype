/// <reference types="vite/client" />

// Type IPC events exposed to the renderer process
export interface ElectronAPI {
  darkMode: {
    toggle: () => Promise<boolean>;
    system: () => void;
  };
}

declare global {
  interface Window {
    electronApi: ElectronAPI;
  }
}
