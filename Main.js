const Electron = require("electron");

const { app, BrowserWindow, dialog } = Electron;
let main;

app.on("ready", (e) => {
    main = new BrowserWindow();
    main.loadFile("./index.html");
    main.setResizable(false);
    main.setMenuBarVisibility(false);
    
});