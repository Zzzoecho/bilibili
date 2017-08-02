require ('../css/carousel.css')

var Carousel = (function() {
    function _Carousel($ct) {
        this.$ct = $ct
        this.init()
        this.bind()
        this.play(0)
        this.autoplay()
    }   

    _Carousel.prototype = {
        init: function () {
            var _this = this
            var $picList = this.$picList = this.$ct.find('.pic'),
                $pic = this.$pic = this.$ct.find('.pic>li'),
                $trig = this.$trig = this.$ct.find('.trig>span'),
                $title = this.$title = this.$ct.find('.info>li')

            var $firstPic = $pic.first(),
                $lastPic = $pic.last()

            this.curIdx = 0
            this.animateLock = false
            this.picLength = $pic.length

            $picList.append($firstPic.clone())
            $picList.prepend($lastPic.clone())

            $picList.css({
                'left': '-260px'
            })
        },

        bind: function () {
            var _this = this
            this.$trig.on('mouseenter', function () {
                var index = $(this).index()
                _this.play(index)
            })
        },

        setTrig: function (idx) {
            this.$trig.siblings().removeClass('on')
            this.$trig.eq(idx).addClass('on')

            this.$title.siblings().removeClass('active')
            this.$title.eq(idx).addClass('active')
        },

        play: function (idx) {
            var _this = this
            if (this.animateLockimate) return
            this.animateLockimate = true
            _this.curIdx = idx
            $('.pic').animate({
                left: -260 * (idx + 1)
            }, 300, function () {
                _this.setTrig(idx)
            })
            this.animateLockimate = false
        },

        playNext: function () {
            var _this = this
            this.play((_this.curIdx+1) % _this.picLength)
        },

        autoplay: function () {
            var _this = this
            setInterval(_this.playNext.bind(this), 6000)
        }
    }

    return {
        init: function ($ct) {
            $ct.each(function (index, node) {
                new _Carousel($(node))
            })
        }
    }
})()

module.exports = Carousel
