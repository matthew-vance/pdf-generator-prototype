import { app, BrowserWindow, ipcMain, nativeTheme } from "electron";
import path from "node:path";

const MAIN_DIST = path.join(app.getAppPath(), "dist-electron");
const RENDERER_DIST = path.join(app.getAppPath(), "dist");

const preloadPath = path.join(MAIN_DIST, "preload", "index.mjs");
const indexHtmlPath = path.join(RENDERER_DIST, "index.html");

const iconPath = process.env.VITE_PUBLIC
  ? path.join(process.env.VITE_PUBLIC, "favicon.ico")
  : undefined;

const createWindow = async () => {
  const win = new BrowserWindow({
    title: "PDF Generator Prototype",
    width: 1320,
    height: 1064,
    backgroundColor: "#181818",
    icon: iconPath,
    webPreferences: {
      preload: preloadPath,
    },
  });

  win.once("ready-to-show", () => {
    win.show();
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    await win.loadURL(process.env.VITE_DEV_SERVER_URL);
    // win.webContents.openDevTools();
  } else {
    await win.loadFile(indexHtmlPath);
  }

  ipcMain.handle("dark-mode:toggle", () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = "light";
    } else {
      nativeTheme.themeSource = "dark";
    }
    return nativeTheme.shouldUseDarkColors;
  });

  ipcMain.handle("dark-mode:system", () => {
    nativeTheme.themeSource = "system";
  });
};

(async () => {
  await app.whenReady();

  await createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
})();

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
