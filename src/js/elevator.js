//侧边栏
export default function elevator(){
    var $elevator = $('.elevator-module'),
        $navItem = $('.elevator-module .nav-list .item'),
        $appDown = $('.elevator-module .app-download'),
        $appIcon = $('.elevator-module .app-icon'),
        $content = $('.content')

    //跳转
    $navItem.on('click', function(e){
        let idx = $navItem.index(e.target),
            jumpTo = $navItem.eq(idx).attr('data-index')

        switch (jumpTo){
            case '0':
            console.log('0 go')
                $(window).scrollTop(700)
                break
            case '1':
                $(window).scrollTop(1200)
                break
            case '2':
                $(window).scrollTop(1600)
                break
            case '3':
                $(window).scrollTop(2200)
                break
        }
    })
    //滚动到对应内容 item变色
    $(window).on('scroll', function(){
        let distance = $(window).scrollTop()

        if(distance < 400){
            $navItem.siblings().removeClass('on')
        }else if( distance > 700 && distance < 1100){
            $navItem.siblings().removeClass('on').eq(0).addClass('on')
        }else if (distance > 1100 && distance < 1550){
            $navItem.siblings().removeClass('on').eq(1).addClass('on')
        }else if (distance > 1550 && distance < 2200){
            $navItem.siblings().removeClass('on').eq(2).addClass('on')
        }
    })

    //gotop
    $('.back-top').on('click', function(){
        $('body').animate({
            scrollTop: 0
        }, 500)
    })

    //app-download
    $appDown.hover(
        function(){
            $appIcon.css('background-image','url(http://oo7a0zmzl.bkt.clouddn.com/17-8-2/56798059.jpg)')
        },
        function(){
            $appIcon.css('background-image','url(http://oo7a0zmzl.bkt.clouddn.com/17-8-2/54607439.jpg)')
        }
    )
}