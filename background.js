// function runScript() {
//   console.log('hello!');
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="red"'
//   });
// }

// For when the user changes activeTab
chrome.tabs.onActivated.addListener(function(activeInfo) {

  // Get current active tab
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    if(url.includes('nytimes.com') && url.includes('.html')) {
      // runScript();
    }
  });
});

// For when the user changes URL on the activeTab
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

  // Only listen to the complete load event
  if (changeInfo.status == 'complete') {
    url = tab.url;
    if(url.includes('nytimes.com') && url.includes('.html')) {
      // runScript();
    }
  }
});