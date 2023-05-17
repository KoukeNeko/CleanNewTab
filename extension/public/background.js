// chrome.tabs.onCreated.addListener(function() {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.update(tabs[0].id, {url: "chrome-search://local-ntp/local-ntp.html"});
//     });
//   });

  chrome.runtime.onInstalled.addListener(() => {
    chrome.bookmarks.getTree((bookmarksTree) => {
      // Process the bookmarks tree here
      console.log(bookmarksTree);
    });
  });
  