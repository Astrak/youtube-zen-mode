const PLAYLIST_ID = "playlist";
const PLAYER_UNIQUE_TAGNAME = "ytd-watch-flexy";
const SECONDARY_COLUMN_ID = "secondary";

window.addEventListener("DOMContentLoaded", () => {
    const playlist = document.getElementById(PLAYLIST_ID);
    if (playlist.firstElementChild) {
        document
            .getElementsByTagName(PLAYER_UNIQUE_TAGNAME)[0]
            .classList.add("yzm-contains-playlist");
    }
    window.setInterval(() => {
        document.getElementById(SECONDARY_COLUMN_ID).style.width = "auto";
    }, 1000);
});
