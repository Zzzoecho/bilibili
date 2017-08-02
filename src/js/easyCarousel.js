//简易轮播 2张图来回
export default function Easycarousel(){
    this.init()
    this.bind()
    this.autoplay()
}
    
    Easycarousel.prototype = {
        init: function(){
            var _this = this
            var $easyPic = this.$easyPic = $('.drama-trend .command .picture'),
                $easyTxt = this.$easyTxt = $('.drama-trend .command .info > li'),
                $easyTabs = this.$easyTabs = $('.drama-trend .command .r-con .trig span'),
                curIndex = 1
        },

        bind: function(){
            var _this = this
            this.$easyTabs.on('mouseenter', function(e){
                let index = _this.$easyTabs.index(e.target)
                _this.jump(index)
                _this.setTabs(index)
             })
        },

        setTabs: function(idx){
            var _this = this
                
            this.$easyTabs.siblings().removeClass('on')
            this.$easyTabs.eq(idx).addClass('on')

            this.$easyTxt.siblings().removeClass('active')
            this.$easyTxt.eq(idx).addClass('active')
        },

        play: function(){
            var _this = this
            this.curIndex = 1
            this.$easyPic.animate({
                'margin-left': '-100%'
            }, 300, function(){
                _this.setTabs(_this.curIndex)
                var timeoutID = setTimeout(function(){
                    _this.$easyPic.animate({
                        'margin-left': '0'
                    }, 300)
                    _this.curIndex --
                    _this.setTabs(_this.curIndex)
                },5000)
            })
            clearTimeout(this.timeoutID)
        },

        jump: function(idx){
            var _this = this
            if(idx === 0){
                _this.$easyPic.animate({
                    'margin-left': '0'
                }, 300)
            }else if (idx ===1){
                _this.$easyPic.animate({
                    'margin-left': '-100%'
                }, 300)
            }
        },

        autoplay: function(){
            var _this = this
            var auto = setInterval(this.play.bind(this), 10000)
        }
    } 
