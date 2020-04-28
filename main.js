const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// Init win
let win;
let offset = 0;
let InnerWidth = 700;
let InnerHeight = InnerWidth;
let Width = InnerWidth;
let Height = InnerHeight + offset;

function createWindow() {
	// Create Vrowser Window
	win = new BrowserWindow({
		width: Width,
		height: Height,
		innerWidth: InnerWidth,
		innerHeight: InnerHeight,
		frame: false,
		titleBarStyle: 'customButtonsOnHover',
		resizable: false,
		transparent: true
	});

	// Load index.html
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

	// Open Dev Tools
	// win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
	});
}

app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
	app.quit()
});
