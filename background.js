chrome.browserAction.onClicked.addListener(function(activeTab){
  chrome.storage.sync.get({
    wpt_base_url: "http://www.webpagetest.org/"
  }, function(items) {
    chrome.tabs.create({ url: items.wpt_base_url + "?url=" + encodeURIComponent(activeTab.url) });
  });
});
