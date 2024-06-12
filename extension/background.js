console.log('Hello world!');

chrome.action.onClicked.addListener(async (tab) => {
  // The user clicked the action, do something
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  console.log('Tab updated', tabId, changeInfo, tab);
});
