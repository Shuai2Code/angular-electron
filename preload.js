// preLoad.js
const { contextBridge } = require("electron");
const fs = require("path");

console.log(process.platform);
console.log(fs);

contextBridge.exposeInMainWorld("callNode", {
  platform: process.platform,
});
