const { app, BrowserWindow,ipcMain } = require('electron')


function createWindow () { 
    // 创建浏览器窗口
    const win = new BrowserWindow({
      width: 1055,
      height: 640,
      show:false,
      backgroundColor: '#efefef',
      frame: false,
      resizable:false,
      webPreferences: {
        nodeIntegration: true
      }
    })
  
    // 并且为你的应用加载index.html
    win.loadURL('http://localhost:3000/')
  
    // 打开开发者工具
    win.webContents.openDevTools()

    win.once('ready-to-show', () => {
      win.show()
    })

    ipcMain.on('changeWindow', (event,arg) => {
      if(arg === 'close'){
        win.close()
      }else if(arg === 'minus'){
        win.minimize()
      }
    })
  }
  
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // 部分 API 在 ready 事件触发后才能使用。
  app.whenReady().then(createWindow)
  
  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，通常在应用程序中重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })