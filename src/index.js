const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

if (process.env.NODE_ENV !== 'production'){
    require('electron-reload')(__dirname, {
        eletron:path.join(__dirname, '../node_modules', '.bin', 'electron')
    })
}

let mainWindow

const mainWindowOptions = {
    minHeight: 400,
    minWidth: 600
}

app.on('ready', ()=>{
    mainWindow = new BrowserWindow(mainWindowOptions)
    mainWindow.loadURL(url.format({
        pathname:path.join(__dirname, 'views/index.html'),
        protocol:'file',
        slashes:true
    }))

    mainWindow.on('closed', ()=>{
        app.quit()
    })
})