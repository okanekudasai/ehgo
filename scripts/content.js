
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request);
        console.log(sender);
        sendResponse({farewell: "goodbye"});
    }
);