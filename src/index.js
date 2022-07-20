const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let mainWindow

const mainWindowOptions = {
    minHeight: 400,
    minWidth: 600,
    title:'Maintenance software'
}

app.on('ready', ()=>{
    mainWindow = new BrowserWindow(mainWindowOptions)
    mainWindow.loadURL(url.format({
        pathname:path.join(__dirname, 'views/index.html'),
        protocol:'file',
        slashes:true
    }))
})