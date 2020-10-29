import { app, BrowserWindow } from 'electron'

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit())

app.on('activate', () => {
  const windows = BrowserWindow.getAllWindows()
  if (windows.length === 0) createWindow()
})
