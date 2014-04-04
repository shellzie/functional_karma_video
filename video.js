describe('Basic Video Test', function() {
    var url = '/showroom_cms/content/components/core/video.html';

//    it('loads the videos', function() {
//        browser().navigateTo(url);
//        sleep(5);
//        expect(element('h1').text()).toContain('Video Component Test Page');
//    });

    it('starts up on autoplay', function(done) {
        browser().navigateTo(url);
        sleep(3);

        var vid1_id = element("iframe").attr("id");

        expect(vid1_id).toContain("video_");


        //var yt = new Intuit.Library.Video.YouTubePlayer(vid1_id);

//        console.log("++++++++ YT.PlayerState.PAUSED = " + yt.PlayerState.PAUSED);

        //video = binding("iframe");

        console.log("+++++++++ vid1_id = " + vid1_id);
        console.log("INtuit = " + Intuit);
        console.log("INtuit.Library = " + Intuit.Library);
        console.log("INtuit.Library.Video = " + Intuit.Library.Video);
        console.log("INtuit.Library.Video.YouTubePlayer = " + Intuit.Library.Video.YouTubePlayer);
        console.log("INtuit.Library.Video.YouTubePlayer.getState(vid1_id) = " + Intuit.Library.Video.YouTubePlayer.getState(vid1_id));


        var vid_state = Intuit.Library.Video.YouTubePlayer.getState(vid1_id); //play() returns the object
        expect(vid_state).toEqual("1"); //unstarted (-1), ended (0), playing (1), paused (2), buffering (3), video cued (5)
    });




//    var url = '/showroom_cms/content/components/core/video?preview=true';
//    it('loads test page', function() {
//        browser().navigateTo(url);
//        sleep(5);
//        element('#hours_worked').val('12');
//        element('#pay_rate_hs').val('10');
//        element('.button-calculate').click();
//        sleep(5); //sleep for 1 sec. resulting page does not seem to be fully loaded without this call.
//        expect(element('#net_pay').text()).toEqual("$101.95");
//    });

});
