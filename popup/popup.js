setUpPopup();

function setUpPopup() {
    chrome.storage.sync.get(["yzm-enabled"], (storage) => {
        const checkbox = document.getElementById("checkbox");
        checkbox.checked = storage["yzm-enabled"] !== false ? true : false;
        checkbox.addEventListener("change", () => {
            chrome.storage.sync.set({ "yzm-enabled": checkbox.checked });
        });
    });
}
