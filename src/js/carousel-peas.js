Rotation = (function () {
    function Carousel($ct) {
        this.$ct = $ct
        this.init()
        this.bind()
        this.play(0)
        this.autoplay()
    }

    Carousel.prototype = {
        init: function () {
            var _this = this
            var $imgList = this.$imgList = this.$ct.find('.imgList'),
                $img = this.$img = this.$ct.find('.imgList>li'),
                $bullet = this.$bullet = this.$ct.find('.bulletList>li'),
                $textList = this.$textList = this.$ct.find('.textList>li')

            var $firstImg = $img.first(),
                $lastImg = $img.last()

            this.curIndex = 0
            this.isAnimate = false
            this.imgLength = $img.length
            this.ImgWidth = $img.width()

            $imgList.append($firstImg.clone())
            $imgList.prepend($lastImg.clone())

            $imgList.css({
                'left': '-440px'
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

            this.$textList.siblings().removeClass('active')
            this.$textList.eq(idx).addClass('active')
        },

        play: function (idx) {
            var _this = this
            if (this.isAnimate) return
            this.isAnimate = true
            _this.curIndex = idx
            $('.imgList').animate({
                left: '-440' * (idx + 1)
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
                new Carousel($(node))
            })
        }
    }
})()