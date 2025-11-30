// Preload script for secure context isolation
// This script runs in a privileged context and can access Node.js APIs
// It exposes safe APIs to the renderer process

const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // You can add secure methods here that the renderer can call
  // Example: invoke IPC messages to the main process
});
