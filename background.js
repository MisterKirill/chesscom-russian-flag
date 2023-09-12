chrome.tabs.onUpdated.addListener((tabId, change) => {
    if (change.status === "complete") {
        chrome.scripting.executeScript({
            target: { tabId },
            files: ["inject.js"]
        })
    }
})
