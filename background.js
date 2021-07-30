let top = '1em';
let right = '1em'

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ top });
});
