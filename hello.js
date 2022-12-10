document.querySelector("#OnButton").addEventListener("click", function () {
    alert("버튼눌림")
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log(tabs)
        console.log(tabs[0].id)
        chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, function(response) {
            console.log("받았어요", response)
        });
    });
});