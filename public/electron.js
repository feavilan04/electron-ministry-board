const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const isDevelopment = process.env.NODE_ENV === "development";
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (isDevelopment) {
    // Load the index.html of the React app.
    win.loadURL("http://localhost:3000");
    win.openDevTools();
  } else {
    // Load the index.html file from the ASAR archive in production.
    win.loadFile(path.join(__dirname, "index.html"));
    win.openDevTools();
  }
}

app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
