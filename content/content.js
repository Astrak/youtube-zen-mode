const playerDiv = document.querySelector("div.ytp-chrome-bottom");
if (playerDiv) {
    playerDiv.style.width = "calc(100% - 24px)";
    const styleTo100Minus24 = (mutations) => {
        for (const mutation of mutations) {
            mutation.target.style.width = "calc(100% - 24px)";
        }
    };
    const observer1 = new MutationObserver(styleTo100Minus24);
    observer1.observe(playerDiv, {
        attributes: true,
        attributeFilter: ["style"],
    });
}
const progressBar = document.querySelector("div.ytp-chapter-hover-container");
if (progressBar) {
    progressBar.style.width = "100%";
    const styleTo100 = (mutations) => {
        for (const mutation of mutations) {
            mutation.target.style.width = "100%";
        }
    };
    const observer2 = new MutationObserver(styleTo100);
    observer2.observe(progressBar, {
        attributes: true,
        attributeFilter: ["style"],
    });
}
const videos = document.getElementsByTagName("video");
if (videos[0]) {
    const videoToFull = (mutations) => {
        const height = getComputedStyle(
            document.querySelector("div.html5-video-player"),
            null
        ).height;
        for (const mutation of mutations) {
            mutation.target.style.height = height;
            mutation.target.style.left = "0";
            mutation.target.style.top = "0";
        }
    };
    const observer2 = new MutationObserver(videoToFull);
    observer2.observe(videos[0], {
        attributes: true,
        attributeFilter: ["style"],
    });
}
