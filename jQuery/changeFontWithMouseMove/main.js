
$('.text-wrap').mousemove(e => {
    const wrapWidth = $('.text-wrap').width();
    const step = wrapWidth/5;
    const nowX = e.pageX - $('.text-wrap').offset().left;
    $('.circle').css({'left': nowX, 'top': e.pageY});
       
    if (nowX < step) {
        $('.text-wrap').attr('class', 'text-wrap step-1');
    } else if (nowX >= step && nowX < step*2) {
        $('.text-wrap').attr('class', 'text-wrap step-2');
    } else if (nowX >= step*2 && nowX < step*3) {
        $('.text-wrap').attr('class', 'text-wrap step-3');
    } else if (nowX >= step*3 && nowX < step*4) {
        $('.text-wrap').attr('class', 'text-wrap step-4');
    } else if (nowX >= step*4 && nowX < step*5) {
        $('.text-wrap').attr('class', 'text-wrap step-5');
    }
})
  
  
  