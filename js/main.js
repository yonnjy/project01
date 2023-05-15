$(function () {
    // document.querySelector('h1').style.display = 'none';
    // $('h1').css({ display: 'none' })
    // $('h1').hide();
    //  var => const, let
    const option = {
        anchors: ['01', '02', '03,', '04', '05'],
        afterRender: function () {
            setTimeout(function () { $('.section').eq(0).addClass('on') });
        },
        onLeave: function (index, nextIndex, direction) {
            console.log(index, nextIndex, direction);
            $('h1 span').text(nextIndex);
            $('nav li').eq(nextIndex - 1).addClass('on')
                .siblings().removeClass('on');
            $('.section').eq(nextIndex - 1).addClass('on')
                .siblings().removeClass('on');
        },
    }
    $('.main_full').fullpage(option);
    // $('.section').eq(0).addClass('on');
})