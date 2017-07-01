Carousel = (function () {
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
            var $imgList = this.$imgList = this.$ct.find('.pic'),
                $img = this.$img = this.$ct.find('.pic>li'),
                $bullet = this.$bullet = this.$ct.find('.trig>span'),
                $title = this.$title = this.$ct.find('.title>li')

            var $firstImg = $img.first(),
                $lastImg = $img.last()

            this.curIndex = 0
            this.isAnimate = false
            this.imgLength = $img.length
            this.ImgWidth = $img.width()

            $imgList.append($firstImg.clone())
            $imgList.prepend($lastImg.clone())

            $imgList.css({
                'left': '-260px'
            })
        },

        bind: function () {
            var _this = this

            this.$bullet.on('click', function () {
                var index = $(this).index()
                _this.play(index)
            })
        },

        setBullet: function (idx) {
            this.$bullet.siblings().removeClass('active')
            this.$bullet.eq(idx).addClass('active')

            this.$title.siblings().removeClass('on')
            this.$title.eq(idx).addClass('on')
        },

        play: function (idx) {
            var _this = this
            if (this.isAnimate) return
            this.isAnimate = true
            _this.curIndex = idx
            $('.imgList').animate({
                left: '-260' * (idx + 1)
            }, 300, function () {
                _this.setBullet(idx)
            })
            this.isAnimate = false
        },

        playNext: function () {
            var _this = this
            this.play((_this.curIndex+1) % _this.imgLength)
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