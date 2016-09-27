var curSong = "";
function togglePlay(song) {
    if (curSong != song) {
        var audioElement = document.getElementById('aud');
        var name = 'audio/' + song + '.mp3';

        audioElement.setAttribute('src', name);
        audioElement.setAttribute('autoplay', 'autoplay');
        curSong = song;
    
        audioElement.addEventListener("timeupdate", function() {
            var currentTime = audioElement.currentTime;
            var duration = audioElement.duration;
            $('.hp_range').stop(true,true).animate({'width':(currentTime +.25)/duration*100+'%'},250,'linear');
        });
        
    }

    $.get();

    audioElement.addEventListener("load", function() {
        audioElement.play();
    }, true);

    $('.play').click(function() {
        audioElement.play();
    });

    $('.pause').click(function() {
        audioElement.pause();
    });
    
};