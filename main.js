const { app, BrowserWindow, nativeTheme } = require('electron');
const path = require('path');

function crearVentanaPrincipal() {
    const ventanaPrincipal = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        title: 'Tatetí Electron App',
        icon: path.join(__dirname, 'assets', 'icon.png'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'precarga.js')
        }
    });

    // Deshabilitar el menú por defecto
    ventanaPrincipal.setMenuBarVisibility(false);

    ventanaPrincipal.loadFile('index.html');

    nativeTheme.on('updated', () => {
        ventanaPrincipal.webContents.send('theme-changed', nativeTheme.shouldUseDarkColors);
    });
}

app.whenReady().then(() => {
    crearVentanaPrincipal();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            crearVentanaPrincipal();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})