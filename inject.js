// Insert the css at the end to override existing styles
// TODO: Causes flicker
var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('facebookify.css');
(document.head||document.documentElement).appendChild(style);
