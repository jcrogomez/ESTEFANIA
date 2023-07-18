const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  // Invoke Methods
  readInput: () => ipcRenderer.invoke('read-inputs'),
  readTemplate: () => ipcRenderer.invoke('read-template'),
  readIon: () => ipcRenderer.invoke('read-ion'),
  optimize: (args) => ipcRenderer.invoke('optimize', args),
  // Send Methods
  testSend: (args) => ipcRenderer.send('test-send', args),
  // Receive Methods
  testReceive: (callback) => ipcRenderer.on('test-receive', (event, data) => { callback(data) }),
});