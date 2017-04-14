var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('facebookify.css');

// After coming online first time, check the background page for current state
chrome.runtime.sendMessage({msg: "getStatus"}, function(response) {
    if(response.currState)
        (document.head||document.documentElement).appendChild(style);
});

// Toggle style tag in the DOM when the background script pings
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.newState)
        (document.head||document.documentElement).appendChild(style);
    else
        (document.head||document.documentElement).removeChild(style);
});
