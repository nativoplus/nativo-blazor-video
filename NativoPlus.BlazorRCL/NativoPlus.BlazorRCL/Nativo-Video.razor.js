// Add all JavaScript code for the Nativo-Video component here
window.helperFunctions = {
    muteVideo: function (videoElementId) {
        var videoElement = document.getElementById(videoElementId);

        if (videoElement) {
            videoElement.muted = "muted";
            console.log(videoElement + " was muted");
        }
    }
}