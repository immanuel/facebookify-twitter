var inserted = false;

// Inform content script of badge click event
chrome.browserAction.onClicked.addListener(function(tab) { 
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {newState: !inserted});
        inserted = !inserted
    });
});

// Respond to query from content script for curr state
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.msg == "getStatus")
        sendResponse({currState: inserted});
});
