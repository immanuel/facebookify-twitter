var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('facebookify.css');

var inserted = false;

// Toggle style tag in the DOM when the background script pings
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (!inserted) {
        (document.head||document.documentElement).appendChild(style);
        inserted = true;
    }
    else {
        (document.head||document.documentElement).removeChild(style);
        inserted = false;
    }
});
