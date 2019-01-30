chrome.tabs.onActivated.addListener(function(activeInfo) {

  // Get current active tab
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    console.log(url);
  });

});