window.helperFunctions = {
    muteVideo: function (videoElementId) {
        var videoElement = document.getElementById(videoElementId);

        if (videoElement && !videoElement.muted) {
            videoElement.muted = "muted";
            console.log(videoElement + " was muted");
        }
    },

    playVideo: function (videoElementId) {
        var videoElement = document.getElementById(videoElementId);

        if (videoElement && videoElement.paused) {
            videoElement.play();
            console.log(videoElement + " started playing");
        }
    },

    unmuteVideo: function (videoElementId) {
        var videoElement = document.getElementById(videoElementId);

        if (videoElement && videoElement.muted) {
            videoElement.muted = false;
            console.log(videoElement + " was unmuted");
        }
    }
}