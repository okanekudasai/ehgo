document.querySelector("#OnButton").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, function(response) {
            console.log("받았어요", response)
        });
    });
});