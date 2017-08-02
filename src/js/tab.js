//正在直播 tab切换 - click
var livingTab = function(){
    var $tabList = $('.con .tabs .tab-item'),
        $tabCt = $('.con .tab-box .tab-ct')

    $tabList.on('click', function (e) {
        let idx = $tabList.index(e.target)
        $tabList.siblings().removeClass('on').eq(idx).addClass('on')
        $tabCt.animate({
            'margin-left': -260 * idx
        }, 300)
    })
}

//title 新动态-新投稿 tab切换 - click
// 动画
var cartoonTab = function (){
    var $tabs = $('.cartoon .l-con .tabs .tab-item'),
        $videoCt = $('.cartoon .l-con .video-ct')

    $tabs.on('click', function(e){
        let idx = $tabs.index(e.target),
            content = $tabs.eq(idx).text(),
            $videoModule

        $tabs.siblings().removeClass('on').eq(idx).addClass('on')
        switch (content){
            case '最新投稿':
                $videoModule = 
                $(`<div class="video">
                    <div class="mask">
                    </div>
                    <img src="http://i1.hdslb.com/bfs/archive/bd1da01f991f1e8435a6e5467ab9c2901f21831d.jpg@160w_100h.webp" alt="吸血鬼的想法">
                    <span>01:55</span>
                    <div class="watch-later"></div>
                    <a href="#">吸血鬼的想法</a>
                    <p class="num">
                        <span class="play"><icon></icon>0</span>
                        <span class="danmu"><icon></icon>0</span>
                    </p>
                </div>
                <div class="video">
                    <div class="mask">
                    </div>
                    <img src="http://i1.hdslb.com/bfs/archive/e7c6d7a1bdcca841eec188ca9b9908cb05f52d36.jpg@160w_100h.webp" alt="Angel Beats! 约定">
                    <span>06:07</span>
                    <div class="watch-later"></div>
                    <a href="#">Angel Beats! 约定</a>
                    <p class="num">
                        <span class="play"><icon></icon>0</span>
                        <span class="danmu"><icon></icon>0</span>
                    </p>
                </div>
                <div class="video">
                    <div class="mask">
                    </div>
                    <img src="http://i0.hdslb.com/bfs/archive/8c0febd053bd6a5b716413cfa1a4918d8058d16c.jpg@160w_100h.webp" alt="/川妹妹/王者荣耀大乔配音">
                    <span>02:02</span>
                    <div class="watch-later"></div>
                    <a href="#">/川妹妹/王者荣耀大乔配音</a>
                    <p class="num">
                        <span class="play"><icon></icon>0</span>
                        <span class="danmu"><icon></icon>0</span>
                    </p>
                </div>
                <div class="video">
                    <div class="mask">
                    </div>
                    <img src="http://i0.hdslb.com/bfs/archive/4ec2f1fde90daf99021a857edd922b8fbc3e449d.png@160w_100h.webp" alt="蜡笔小新-我们全家去北海道【合集】">
                    <span>43:06</span>
                    <div class="watch-later"></div>
                    <a href="#">蜡笔小新-我们全家去北海道【合集】</a>
                    <p class="num">
                        <span class="play"><icon></icon>1</span>
                        <span class="danmu"><icon></icon>0</span>
                    </p>
                </div>
                <div class="video">
                    <div class="mask">
                    </div>
                    <img src="http://i1.hdslb.com/bfs/archive/1a0742c7a810ad8691bf108b051789c07a367f3d.jpg@160w_100h.webp" alt="【桃源恋歌MMD】听说桃源恋歌血洗B站？诶嘿我也来">
                    <span>03:48</span>
                    <div class="watch-later"></div>
                    <a href="#">【桃源恋歌MMD】听说桃源恋歌血洗B站？诶嘿我也来</a>
                    <p class="num">
                        <span class="play"><icon></icon>1</span>
                        <span class="danmu"><icon></icon>0</span>
                    </p>
                </div>
                <div class="video">
                    <div class="mask">
                    </div>
                    <img src="http://i0.hdslb.com/bfs/archive/198b015fba8a7b4cc9c62ab01dbab374bd63698e.png@160w_100h.webp" alt="【催泪向/AMV/综漫】你能否记得那个曾经的女孩">
                    <span>04:43</span>
                    <div class="watch-later"></div>
                    <a href="#">【催泪向/AMV/综漫】你能否记得那个曾经的女孩</a>
                    <p class="num">
                        <span class="play"><icon></icon>1</span>
                        <span class="danmu"><icon></icon>0</span>
                    </p>
                </div>
                <div class="video">
                    <div class="mask">
                    </div>
                    <img src="http://i1.hdslb.com/bfs/archive/634efb78aefb2ade0af6218861acb3c77198fdb6.png@160w_100h.webp" alt="蜡笔小新-尿尿的规矩真困难">
                    <span>07:07</span>
                    <div class="watch-later"></div>
                    <a href="#">蜡笔小新-尿尿的规矩真困难</a>
                    <p class="num">
                        <span class="play"><icon></icon>1</span>
                        <span class="danmu"><icon></icon>0</span>
                    </p>
                </div>
                <div class="video">
                    <div class="mask">
                    </div>
                    <img src="http://i2.hdslb.com/bfs/archive/cc5956e14d62a9a7ebc43e4d167d43469f3dbfbd.jpg@160w_100h.webp" alt="《FACE》">
                    <span>02:15</span>
                    <div class="watch-later"></div>
                    <a href="#">《FACE》</a>
                    <p class="num">
                        <span class="play"><icon></icon>0</span>
                        <span class="danmu"><icon></icon>0</span>
                    </p>
                </div>
                `)
                $videoCt.empty().append($videoModule)
                break
            case '有新动态':
                $videoModule = 
                $(`<div class="video">
                        <div class="mask">
                        </div>
                        <img src="http://i0.hdslb.com/bfs/archive/c822078cb0e4c555384e3748d1584e61df6057ed.jpg@160w_100h.webp" alt="【童年之声】《海绵宝宝》角色及国语配音演员">
                        <span>05:55</span>
                        <div class="watch-later"></div>
                        <a href="#">【童年之声】《海绵宝宝》角色及国语配音演员</a>
                        <p class="num">
                            <span class="play"><icon></icon>2.8万</span>
                            <span class="danmu"><icon></icon>448</span>
                        </p>
                    </div>
                    <div class="video">
                        <div class="mask">
                        </div>
                        <img src="http://i0.hdslb.com/bfs/archive/9ba9ad6f6df0c66faedcff84cbcd2cb31f98a67c.jpg@160w_100h.webp" alt="【火影忍者】 宁雏兄妹的对决 （中忍考试篇）">
                        <span>02:59</span>
                        <div class="watch-later"></div>
                        <a href="#">【火影忍者】 宁雏兄妹的对决 （中忍考试篇）</a>
                        <p class="num">
                            <span class="play"><icon></icon>1355</span>
                            <span class="danmu"><icon></icon>25</span>
                        </p>
                    </div>
                    <div class="video">
                        <div class="mask">
                        </div>
                        <img src="http://i2.hdslb.com/bfs/archive/d56b571c585d0609e0d2716f238711bfc705d7d5.jpg@160w_100h.webp" alt="【幻想嘉年华】 fate部分全剪辑！！Part2补完篇">
                        <span>68:29</span>
                        <div class="watch-later"></div>
                        <a href="#">【幻想嘉年华】 fate部分全剪辑！！Part2补完篇</a>
                        <p class="num">
                            <span class="play"><icon></icon>48.5万</span>
                            <span class="danmu"><icon></icon>2.0万</span>
                        </p>
                    </div>
                    <div class="video">
                        <div class="mask">
                        </div>
                        <img src="http://i2.hdslb.com/bfs/archive/48609b6aaaf40d790e7ea25dd7ff5dd270b33655.jpg@160w_100h.webp" alt="【王者荣耀手书】半全员向—Connecting">
                        <span>05:00</span>
                        <div class="watch-later"></div>
                        <a href="#">【王者荣耀手书】半全员向—Connecting</a>
                        <p class="num">
                            <span class="play"><icon></icon>506</span>
                            <span class="danmu"><icon></icon>90</span>
                        </p>
                    </div>
                    <div class="video">
                        <div class="mask">
                        </div>
                        <img src="http://i0.hdslb.com/bfs/archive/a498f860a035128580c3e5c0f43b0ee605e7fd0b.jpg@160w_100h.webpp" alt="bilibili Moe 2017 动画角色人气大赏日本动画场宣传PV">
                        <span>02:48</span>
                        <div class="watch-later"></div>
                        <a href="#">bilibili Moe 2017 动画角色人气大赏日本动画场宣传PV</a>
                        <p class="num">
                            <span class="play"><icon></icon>21.4万</span>
                            <span class="danmu"><icon></icon>6314</span>
                        </p>
                    </div>
                    <div class="video">
                        <div class="mask">
                        </div>
                        <img src="http://i1.hdslb.com/bfs/archive/6fa0979d2bc2fecaa25cdda423f8fd2894b04b48.jpg@160w_100h.webp" alt="【MMD|剑网3|卖萌向】俄罗斯套娃（双爹组，苍爹×琴爹）">
                        <span>03:32</span>
                        <div class="watch-later"></div>
                        <a href="#">【MMD|剑网3|卖萌向】俄罗斯套娃（双爹组，苍爹×琴爹）</a>
                        <p class="num">
                            <span class="play"><icon></icon>1538</span>
                            <span class="danmu"><icon></icon>26</span>
                        </p>
                    </div>
                    <div class="video">
                        <div class="mask">
                        </div>
                        <img src="http://i0.hdslb.com/bfs/archive/85d66a12d3fe31d89ad48c554d844589a3bd5253.jpg@160w_100h.webp" alt="【约会大作战】黑白琴里参上！五河琴里让人印象深刻时和被封印（kiss）的片段">
                        <span>18:59</span>
                        <div class="watch-later"></div>
                        <a href="#">【约会大作战】黑白琴里参上！五河琴里让人印象深刻时和被封印（kiss）的片段</a>
                        <p class="num">
                            <span class="play"><icon></icon>6011</span>
                            <span class="danmu"><icon></icon>336</span>
                        </p>
                    </div>
                    <div class="video">
                        <div class="mask">
                        </div>
                        <img src="http://i0.hdslb.com/bfs/archive/705045833dc5bbf5bc72ec7e6056d8b99f67fc62.jpg@160w_100h.webp" alt="【泛式/单集MAD】一拳超人: 深海王篇——不屈的正义">
                        <span>05:05</span>
                        <div class="watch-later"></div>
                        <a href="#">【泛式/单集MAD】一拳超人: 深海王篇——不屈的正义</a>
                        <p class="num">
                            <span class="play"><icon></icon>14.3万</span>
                            <span class="danmu"><icon></icon>9540</span>
                        </p>
                    </div>
                `)
                $videoCt.empty().append($videoModule)
                break
        }
    })
}

//番剧动态
var trendTab = function (){
    var $dTabs = $('.drama-trend .l-con .tabs .tab-item'),
        $dVideoCt = $('.drama-trend .l-con .video-ct')

    $dTabs.on('click', function(e){
        let idx = $dTabs.index(e.target),
            content = $dTabs.eq(idx).text(),
            $dModule

        $dTabs.siblings().removeClass('on').eq(idx).addClass('on')
        switch (content){
            case '最新投稿':
                $dModule = 
                $(`<div class="video">
                    <div class="mask">
                    </div>
                    <img src="http://i0.hdslb.com/bfs/archive/8c0febd053bd6a5b716413cfa1a4918d8058d16c.jpg@160w_100h.webp" alt="/川妹妹/王者荣耀大乔配音">
                    <span>02:02</span>
                    <div class="watch-later"></div>
                    <a href="#">/川妹妹/王者荣耀大乔配音</a>
                    <p class="num">
                        <span class="play"><icon></icon>0</span>
                        <span class="danmu"><icon></icon>0</span>
                    </p>
                </div>
                <div class="video">
                    <div class="mask">
                    </div>
                    <img src="http://i0.hdslb.com/bfs/archive/c4c7cc68679aed963f06e6f32aaca5cf85527a2f.jpg@160w_100h.webp" alt="【广播生肉】广播「异世界食堂」 第01回">
                    <span>39:03</span>
                    <div class="watch-later"></div>
                    <a href="#">【广播生肉】广播「异世界食堂」 第01回</a>
                    <p class="num">
                        <span class="play"><icon></icon>76</span>
                        <span class="danmu"><icon></icon>0</span>
                    </p>
                </div>
                <div class="video">
                    <div class="mask">
                    </div>
                    <img src="http://i0.hdslb.com/bfs/archive/198b015fba8a7b4cc9c62ab01dbab374bd63698e.png@160w_100h.webp" alt="【催泪向/AMV/综漫】你能否记得那个曾经的女孩">
                    <span>04:43</span>
                    <div class="watch-later"></div>
                    <a href="#">【催泪向/AMV/综漫】你能否记得那个曾经的女孩</a>
                    <p class="num">
                        <span class="play"><icon></icon>1</span>
                        <span class="danmu"><icon></icon>0</span>
                    </p>
                </div>
                <div class="video">
                    <div class="mask">
                    </div>
                    <img src="http://i0.hdslb.com/bfs/archive/4ec2f1fde90daf99021a857edd922b8fbc3e449d.png@160w_100h.webp" alt="蜡笔小新-我们全家去北海道【合集】">
                    <span>43:06</span>
                    <div class="watch-later"></div>
                    <a href="#">蜡笔小新-我们全家去北海道【合集】</a>
                    <p class="num">
                        <span class="play"><icon></icon>1</span>
                        <span class="danmu"><icon></icon>0</span>
                    </p>
                </div>
                <div class="video">
                    <div class="mask">
                    </div>
                    <img src="http://i1.hdslb.com/bfs/archive/e7c6d7a1bdcca841eec188ca9b9908cb05f52d36.jpg@160w_100h.webp" alt="Angel Beats! 约定">
                    <span>06:07</span>
                    <div class="watch-later"></div>
                    <a href="#">Angel Beats! 约定</a>
                    <p class="num">
                        <span class="play"><icon></icon>0</span>
                        <span class="danmu"><icon></icon>0</span>
                    </p>
                </div>
                <div class="video">
                    <div class="mask">
                    </div>
                    <img src="http://i1.hdslb.com/bfs/archive/27c4f7f01092fbe3bf646a986c85f3710de53a21.jpg@160w_100h.webp" alt="《魔導少年劇場版：龍之淚》 (Fairy Tail  Dragon Cry) HK電影預告">
                    <span>01:32</span>
                    <div class="watch-later"></div>
                    <a href="#">《魔導少年劇場版：龍之淚》 (Fairy Tail  Dragon Cry) HK電影預告</a>
                    <p class="num">
                        <span class="play"><icon></icon>75</span>
                        <span class="danmu"><icon></icon>0</span>
                    </p>
                </div>
                <div class="video">
                    <div class="mask">
                    </div>
                    <img src="http://i1.hdslb.com/bfs/archive/634efb78aefb2ade0af6218861acb3c77198fdb6.png@160w_100h.webp" alt="蜡笔小新-尿尿的规矩真困难">
                    <span>07:07</span>
                    <div class="watch-later"></div>
                    <a href="#">蜡笔小新-尿尿的规矩真困难</a>
                    <p class="num">
                        <span class="play"><icon></icon>1</span>
                        <span class="danmu"><icon></icon>0</span>
                    </p>
                </div>
                <div class="video">
                    <div class="mask">
                    </div>
                    <img src="http://i1.hdslb.com/bfs/archive/2bc7881977b917d40cfde88e3fbdee912180c5f1.jpg@160w_100h.webp" alt="【厨房秘密】立花慎之介×铃村健一×平川大辅（5）">
                    <span>10:45</span>
                    <div class="watch-later"></div>
                    <a href="#">【厨房秘密】立花慎之介×铃村健一×平川大辅（5）</a>
                    <p class="num">
                        <span class="play"><icon></icon>22</span>
                        <span class="danmu"><icon></icon>0</span>
                    </p>
                </div>
                `)
                $dVideoCt.empty().append($dModule)
                break
            case '有新动态':
                $dModule = 
                $(`<div class="video">
                        <div class="mask">
                        </div>
                        <img src="https://i0.hdslb.com/bfs/archive/550b5c571fd513efa36ab4eef8faf0a4a6e76c5a.jpg@160w_100h.webp" alt="【合集】染红的街道">
                        <span>299:21</span>
                        <a href="#">【合集】染红的街道</a>
                        <p class="num">
                            <span class="play"><icon></icon>43.9万</span>
                            <span class="danmu"><icon></icon>1.9万</span>
                        </p>
                    </div>
                    <div class="video">
                        <div class="mask">
                        </div>
                        <img src="http://i1.hdslb.com/bfs/archive/d6669e485ff4155f12db2cb98c1c3799cc83d245.jpg@160w_100h.webp" alt="【合集】网球王子">
                        <span>3936:59</span>
                        <a href="#">【合集】网球王子</a>
                        <p class="num">
                            <span class="play"><icon></icon>55.2万</span>
                            <span class="danmu"><icon></icon>6.8万</span>
                        </p>
                    </div>
                    <div class="video">
                        <div class="mask">
                        </div>
                        <img src="https://i2.hdslb.com/bfs/archive/8f7e8e544cc86bf1d952bcaa20758359b3668799.jpg@160w_100h.webp" alt="【10月】野良神 ARAGOTO 第二季 10【独家正版】">
                        <span>24:29</span>
                        <a href="#">【10月】野良神 ARAGOTO 第二季 10【独家正版】</a>
                        <p class="num">
                            <span class="play"><icon></icon>322.8万</span>
                            <span class="danmu"><icon></icon>21.5万</span>
                        </p>
                    </div>
                    <div class="video">
                        <div class="mask">
                        </div>
                        <img src="http://i0.hdslb.com/bfs/archive/351692bd1a6a532ef258e2be9f2d0c6f6235070b.jpg@160w_100h.webp" alt="【4月】Fate/stay night -UBW- 24">
                        <span>48:00</span>
                        <a href="#">【4月】Fate/stay night -UBW- 24</a>
                        <p class="num">
                            <span class="play"><icon></icon>433.5万</span>
                            <span class="danmu"><icon></icon>21.1万</span>
                        </p>
                    </div>
                    <div class="video">
                        <div class="mask">
                        </div>
                        <img src="http://i2.hdslb.com/bfs/archive/fccbeeff26706b04d81a3b20f006e03b21be5159.jpg@160w_100h.webp" alt="【10月/完结】TRINITY SEVEN 七人魔法使 12">
                        <span>47:19</span>
                        <a href="#">【10月/完结】TRINITY SEVEN 七人魔法使 12</a>
                        <p class="num">
                            <span class="play"><icon></icon>166.8万</span>
                            <span class="danmu"><icon></icon>2.6万</span>
                        </p>
                    </div>
                    <div class="video">
                        <div class="mask">
                        </div>
                        <img src="https://i2.hdslb.com/bfs/archive/d5a8dbbdb580655460f54602667858d0c6a9fbd7.jpg@160w_100h.webp" alt="【4月】埃罗芒阿老师 06【独家正版】">
                        <icon class="icon-golden crown"></icon>
                        <span>23:41</span>
                        <a href="#">【4月】埃罗芒阿老师 06【独家正版】</a>
                        <p class="num">
                            <span class="play"><icon></icon>396.8万</span>
                            <span class="danmu"><icon></icon>12万</span>
                        </p>
                    </div>
                    <div class="video">
                        <div class="mask">
                        </div>
                        <img src="https://i0.hdslb.com/bfs/archive/348acddd00dd95388a5123a7d8dff08ef4b343be.jpg@160w_100h.webp" alt="【4月/完结】食戟之灵 24">
                        <icon class="icon-golden crown"></icon>
                        <span>24:41</span>
                        <a href="#">【4月/完结】食戟之灵 24</a>
                        <p class="num">
                            <span class="play"><icon></icon>311.2万</span>
                            <span class="danmu"><icon></icon>14.0万</span>
                        </p>
                    </div>
                    <div class="video">
                        <div class="mask">
                        </div>
                        <img src="https://i0.hdslb.com/bfs/archive/01b46c4d4974208a3730a3b48838b0840ecd66f7.jpg@160w_100h.webp" alt="【7月】徒然喜欢你 01">
                        <icon class="icon-silvery crown"></icon>
                        <span>12:31</span>
                        <a href="#">【7月】徒然喜欢你 01</a>
                        <p class="num">
                            <span class="play"><icon></icon>49.6万</span>
                            <span class="danmu"><icon></icon>2.0万</span>
                        </p>
                    </div>
                `)
                $dVideoCt.empty().append($dModule)
                break
        }
    })
}

//排行 tab切换 - hover
var rankTab = function(){
    var $rankTabs = $('.common .rank-head .tabs .tab-item'),
        $rankCt = $('.common .rank-head .tabs'),
        $rankWrap = $('.common .sec-rank .rank-wrap')

    $rankTabs.on('mouseenter', function(){
        let $NotShown = $rankTabs.not('.on')

        $rankTabs.siblings().removeClass('on')
        $NotShown.addClass('on')
        let idx = $rankTabs.index($rankTabs.filter('.on'))
        if(idx === 1){
            $rankWrap.css('margin-left','-100%')
        }else if (idx === 0){
            $rankWrap.css('margin-left','0')
        }
    })
}

//时间表tab切换
var timeTab = function(){
    var $timeTabs = $('.drama .tabs .tab-item')

    $timeTabs.on('click', function(e){
        let idx = $timeTabs.index(e.target),
            content = $timeTabs.eq(idx).text()

        $timeTabs.siblings().removeClass('on')
        $timeTabs.eq(idx).addClass('on')

        let $on = $timeTabs.filter('.on'),
            $noOn = $('.drama .tabs .tab-item:not(.on)'),
            $timingBox = $('.drama .timing-box'),
            $tModule
        
        $on.each(function(){
            switch (idx){
                case 0 :
                    $tModule = 
                    $(`<div class="card-timing-module clearfix">
                        <a href="#" class="image" title="徒然喜欢你"><img src="http://i0.hdslb.com/bfs/bangumi/74665138be556c07804ad32e9417f640ba26f415.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="徒然喜欢你">徒然喜欢你</a>
                            <p class="update on">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="笨女孩"><img src="http://i0.hdslb.com/bfs/bangumi/3bac74a96282058e61b8cb526ac6baa777c79f62.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="笨女孩">笨女孩</a>
                            <p class="update on">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="少年阿贝 GO!GO!小芝麻 第二季"><img src="http://i0.hdslb.com/bfs/bangumi/c90f5653ac1577f2fb5f49e82897bb5754f3c1d3.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="少年阿贝 GO!GO!小芝麻 第二季">少年阿贝 GO!GO!小芝麻 第二季</a>
                            <p class="update on">
                                <span>更新至<a href="#">12话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="美妙天堂 偶像时间"><img src="http://i0.hdslb.com/bfs/bangumi/914fe4f7265647dfbbfbb9ab9fb1f127f0706ea2.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="美妙天堂 偶像时间">美妙天堂 偶像时间</a>
                            <p class="update on">
                                <span>更新至<a href="#">14话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="异世界食堂"><img src="http://i0.hdslb.com/bfs/bangumi/8dd926666739582371f1d835ffd1e4ad69071222.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="异世界食堂">异世界食堂</a>
                            <p class="update">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="妖怪公寓的幽雅日常"><img src="http://i0.hdslb.com/bfs/bangumi/7a4fa377c7b10b87764ddc069515cf739e7a4346.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="妖怪公寓的幽雅日常">妖怪公寓的幽雅日常</a>
                            <p class="update">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="智龙迷城X"><img src="http://i0.hdslb.com/bfs/bangumi/96f969ee26e5b77716d347111e06368de52b88c4.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="智龙迷城X">智龙迷城X</a>
                            <p class="update">
                                <span>更新至<a href="#">52话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="暗芝居 第五季"><img src="http://i0.hdslb.com/bfs/bangumi/a1c6cc729f2159c65640160edc5aa859d0ee328e.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="暗芝居 第五季">暗芝居 第五季</a>
                            <p class="update">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="战斗女子高校"><img src="http://i0.hdslb.com/bfs/bangumi/2de3653b7f1d58cbce1beda4fe1a048aae13e552.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="战斗女子高校">战斗女子高校</a>
                            <p class="update">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="骑士&魔法"><img src="http://i0.hdslb.com/bfs/bangumi/23da35037d713db519423afa147db76e8ac39dd9.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="骑士&魔法">骑士&魔法</a>
                            <p class="update">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="甜甜私房猫 第三季 中配版"><img src="http://i0.hdslb.com/bfs/bangumi/56fa9a3e45129f7387fa88c9a05b9fad51cef4fc.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="甜甜私房猫 第三季 中配版">甜甜私房猫 第三季 中配版</a>
                            <p class="update">
                                <span>更新至<a href="#">25话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="甜甜私房猫 第三季"><img src="http://i0.hdslb.com/bfs/bangumi/56fa9a3e45129f7387fa88c9a05b9fad51cef4fc.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="甜甜私房猫 第三季">甜甜私房猫 第三季</a>
                            <p class="update">
                                <span>更新至<a href="#">39话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="Re:CREATORS"><img src="http://i0.hdslb.com/bfs/bangumi/15b3bb324583a32b2f749318f5df0feb32610fc8.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="Re:CREATORS">Re:CREATORS</a>
                            <p class="update">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="活撃/刀剣乱舞（僅限港澳台地區）"><img src="http://i0.hdslb.com/bfs/bangumi/30f9d9d2b46b927a0550ed8d317571fbb21db7d8.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="活撃/刀剣乱舞（僅限港澳台地區）">活撃/刀剣乱舞（僅限港澳台地區）</a>
                            <p class="update">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="Fate/Apocrypha"><img src="http://i0.hdslb.com/bfs/bangumi/9d9acb596ae793fe43642d33b534f5839a430265.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="Fate/Apocrypha">Fate/Apocrypha</a>
                            <p class="update">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>`)
                    $timingBox.empty().append($tModule)
                    break
                case 1 :
                    $timeTabs.eq(idx).text('周一')
                    $tModule = 
                    $(`<div class="card-timing-module clearfix">
                        <a href="#" class="image" title="妖怪公寓的幽雅日常"><img src="http://i0.hdslb.com/bfs/bangumi/7a4fa377c7b10b87764ddc069515cf739e7a4346.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="妖怪公寓的幽雅日常">妖怪公寓的幽雅日常</a>
                            <p class="update">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="天使的3P!"><img src="http://i0.hdslb.com/bfs/bangumi/8a361912ee8a6386181e8519e1d39cbdb436fd9e.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="天使的3P!">天使的3P!</a>
                            <p class="update">
                                <span>尚未更新</span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="战斗女子高校"><img src="http://i0.hdslb.com/bfs/bangumi/2de3653b7f1d58cbce1beda4fe1a048aae13e552.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="战斗女子高校">战斗女子高校</a>
                            <p class="update">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="智龙迷城X"><img src="http://i0.hdslb.com/bfs/bangumi/96f969ee26e5b77716d347111e06368de52b88c4.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="智龙迷城X">智龙迷城X</a>
                            <p class="update">
                                <span>更新至<a href="#">52话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="暗芝居 第五季"><img src="http://i0.hdslb.com/bfs/bangumi/a1c6cc729f2159c65640160edc5aa859d0ee328e.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="暗芝居 第五季">暗芝居 第五季</a>
                            <p class="update">
                                <span>更新至<a href="#">52话</a></span>
                            </p>
                        </div>
                    </div>
                    `)
                    $timingBox.empty().append($tModule)
                    break
                case 2 :
                    $timeTabs.eq(idx).text('周二')
                    $tModule = 
                    $(`<div class="card-timing-module clearfix">
                        <a href="#" class="image" title="异世界食堂"><img src="http://i0.hdslb.com/bfs/bangumi/8dd926666739582371f1d835ffd1e4ad69071222.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="异世界食堂">异世界食堂</a>
                            <p class="update">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="笨女孩"><img src="http://i0.hdslb.com/bfs/bangumi/3bac74a96282058e61b8cb526ac6baa777c79f62.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="笨女孩">笨女孩</a>
                            <p class="update on">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="徒然喜欢你"><img src="http://i0.hdslb.com/bfs/bangumi/74665138be556c07804ad32e9417f640ba26f415.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="徒然喜欢你">徒然喜欢你</a>
                            <p class="update on">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="美妙天堂 偶像时间"><img src="http://i0.hdslb.com/bfs/bangumi/914fe4f7265647dfbbfbb9ab9fb1f127f0706ea2.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="美妙天堂 偶像时间">美妙天堂 偶像时间</a>
                            <p class="update on">
                                <span>更新至<a href="#">14话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="少年阿贝 GO!GO!小芝麻 第二季"><img src="http://i0.hdslb.com/bfs/bangumi/c90f5653ac1577f2fb5f49e82897bb5754f3c1d3.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="少年阿贝 GO!GO!小芝麻 第二季">少年阿贝 GO!GO!小芝麻 第二季</a>
                            <p class="update on">
                                <span>更新至<a href="#">12话</a></span>
                            </p>
                        </div>
                    </div>
                    `)
                    $timingBox.empty().append($tModule)
                    break
                case 3 :
                    $timeTabs.eq(idx).text('周三')
                    $tModule = 
                    $(`<div class="card-timing-module clearfix">
                        <a href="#" class="image" title="博人传 火影忍者新时代"><img src="http://i0.hdslb.com/bfs/bangumi/a968da0b42034dd347e77a8efc08f8ac11448046.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="博人传 火影忍者新时代">博人传 火影忍者新时代</a>
                            <p class="update">
                                <span>更新至<a href="#">14话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="捏造陷阱-NTR-"><img src="http://i0.hdslb.com/bfs/bangumi/3f1cdb5ad8d4398eb6b48371d7bf0cc6bd61e285.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="捏造陷阱-NTR-">捏造陷阱-NTR-</a>
                            <p class="update">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="第一次的辣妹"><img src="http://i0.hdslb.com/bfs/bangumi/c6173fa466c6af81871e66a18206594f85c61651.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="第一次的辣妹">第一次的辣妹</a>
                            <p class="update">
                                <span>尚未更新</span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="咕噜咕噜魔法阵 新系列"><img src="http://i0.hdslb.com/bfs/bangumi/0a0ade16865755cc5418e1dba0339046434109fc.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="咕噜咕噜魔法阵 新系列">咕噜咕噜魔法阵 新系列</a>
                            <p class="update">
                                <span>尚未更新</span>
                            </p>
                        </div>
                    </div>
                    `)
                    $timingBox.empty().append($tModule)
                    break
                case 4 :
                    $timeTabs.eq(idx).text('周四')
                    $tModule = 
                    $(`<div class="card-timing-module clearfix">
                        <a href="#" class="image" title="月色真美"><img src="http://i0.hdslb.com/bfs/bangumi/6cb30116f1baddf62d0e4035d45ed5e4878cf20d.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="月色真美">月色真美</a>
                            <p class="update">
                                <span>更新至<a href="#">12话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="樱花任务"><img src="http://i0.hdslb.com/bfs/bangumi/8749c700da7b8012451146f90c7cf7dddbbbfea7.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="樱花任务">樱花任务</a>
                            <p class="update">
                                <span>更新至<a href="#">14话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="欢迎来到实力至上主义的教室"><img src="http://i0.hdslb.com/bfs/bangumi/75b5469a3931652fbeaab17d993e2c93b5915286.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="欢迎来到实力至上主义的教室">欢迎来到实力至上主义的教室</a>
                            <p class="update">
                                <span>尚未更新</span>
                            </p>
                        </div>
                    </div>
                    `)
                    $timingBox.empty().append($tModule)
                    break
                case 5 :
                    $timeTabs.eq(idx).text('周五')
                    $tModule = 
                    $(`<div class="card-timing-module clearfix">
                        <a href="#" class="image" title="18if 梦境异闻录"><img src="http://i0.hdslb.com/bfs/bangumi/74c36b366a884c036f135035915700513ae2a61d.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="18if 梦境异闻录">18if 梦境异闻录</a>
                            <p class="update">
                                <span>尚未更新</span>
                            </p>
                        </div>
                    </div>
                    `)
                    $timingBox.empty().append($tModule)
                    break
                case 6 :
                    $timeTabs.eq(idx).text('周六')
                    $tModule = 
                    $(`<div class="card-timing-module clearfix">
                        <a href="#" class="image" title="地狱少女 宵伽"><img src="http://i0.hdslb.com/bfs/bangumi/f191e5d72e67e14f2f0ad5a40455ec322e9b77b1.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="地狱少女 宵伽">地狱少女 宵伽</a>
                            <p class="update">
                                <span>尚未更新</span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="独占我的英雄"><img src="http://i0.hdslb.com/bfs/bangumi/54d64c6e65d5c973c30dc9d359917bc17fe6d1d6.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="独占我的英雄">独占我的英雄</a>
                            <p class="update">
                                <span>尚未更新</span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="忍者少女千鸟～伊势・金崎篇～"><img src="http://i0.hdslb.com/bfs/bangumi/1592809fa2393487ffd7c5db9ecfac2ae929f59e.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="忍者少女千鸟～伊势・金崎篇～">忍者少女千鸟～伊势・金崎篇～</a>
                            <p class="update">
                                <span>更新至<a href="#">39话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="将国之天鹰星"><img src="http://i0.hdslb.com/bfs/bangumi/19b5c126fab9abb1f623bb1a74086ec3201672fd.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="将国之天鹰星">将国之天鹰星</a>
                            <p class="update">
                                <span>尚未更新</span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="暖暖日记 2nd"><img src="http://i0.hdslb.com/bfs/bangumi/04bb1b115905bca728404672a8838e7e5e75440a.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="暖暖日记 2nd">暖暖日记 2nd</a>
                            <p class="update">
                                <span>更新至<a href="#">64话</a></span>
                            </p>
                        </div>
                    </div>
                    `)
                    $timingBox.empty().append($tModule)
                    break
                case 7 :
                    $timeTabs.eq(idx).text('周日')
                    $tModule = 
                    $(`<div class="card-timing-module clearfix">
                        <a href="#" class="image" title="Re:CREATORS"><img src="http://i0.hdslb.com/bfs/bangumi/15b3bb324583a32b2f749318f5df0feb32610fc8.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="Re:CREATORS">Re:CREATORS</a>
                            <p class="update">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="Fate/Apocrypha"><img src="http://i0.hdslb.com/bfs/bangumi/9d9acb596ae793fe43642d33b534f5839a430265.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="Fate/Apocrypha">Fate/Apocrypha</a>
                            <p class="update">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="骑士&魔法"><img src="http://i0.hdslb.com/bfs/bangumi/23da35037d713db519423afa147db76e8ac39dd9.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="骑士&魔法">骑士&魔法</a>
                            <p class="update">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="活撃/刀剣乱舞（僅限港澳台地區）"><img src="http://i0.hdslb.com/bfs/bangumi/30f9d9d2b46b927a0550ed8d317571fbb21db7d8.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="活撃/刀剣乱舞（僅限港澳台地區）">活撃/刀剣乱舞（僅限港澳台地區）</a>
                            <p class="update">
                                <span>更新至<a href="#">1话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="甜甜私房猫 第三季"><img src="http://i0.hdslb.com/bfs/bangumi/56fa9a3e45129f7387fa88c9a05b9fad51cef4fc.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="甜甜私房猫 第三季">甜甜私房猫 第三季</a>
                            <p class="update">
                                <span>更新至<a href="#">39话</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-timing-module clearfix">
                        <a href="#" class="image" title="人马少女的烦恼"><img src="http://i0.hdslb.com/bfs/bangumi/3d8f4fab61a072004ec438dbd94569027d599c5c.jpg@72w_72h.webp" alt=""></a>
                        <div class="r-text">
                            <a href="#" class="t" title="人马少女的烦恼">人马少女的烦恼</a>
                            <p class="update">
                                <span>尚未更新</span>
                            </p>
                        </div>
                    </div>`)
                    $timingBox.empty().append($tModule)
                    break
            }
        })

        $noOn.each(function(){
            let num = $(this).index()

            for(var i =0;i < 7;i++){
                if(idx != 0){
                    switch (num){
                        case 1 :
                            $timeTabs.eq(num).text('一')
                            break
                        case 2 :
                            $timeTabs.eq(num).text('二')
                            break
                        case 3 :
                            $timeTabs.eq(num).text('三')
                            break
                        case 4 :
                            $timeTabs.eq(num).text('四')
                            break
                        case 5 :
                            $timeTabs.eq(num).text('五')
                            break
                        case 6 :
                            $timeTabs.eq(num).text('六')
                            break
                        case 7 :
                            $timeTabs.eq(num).text('日')
                            break
                    }
                }
            }
        })
    })
}

export {livingTab, cartoonTab, trendTab, rankTab, timeTab}