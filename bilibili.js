Rotation.init($('.carousel'))
Carousel.init($('.carousel-module'))
showModule()
dramaModule()

//正在直播 tab切换 - click
var $tabList = $('.con .tabs .tab-item'),
    $tabCt = $('.con .tab-box .tab-ct')

$tabList.on('click', function (e) {
    let idx = $tabList.index(e.target)
    $tabList.siblings().removeClass('on').eq(idx).addClass('on')
    $tabCt.animate({
        'margin-left': -260 * idx
    }, 300)
})
//title tab切换 - click

//排行 tab切换 - hover
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

//时间表tab切换
var $timeTabs = $('.drama .tabs .tab-item')

$timeTabs.on('click', function(e){
    let idx = $timeTabs.index(e.target),
        content = $timeTabs.eq(idx).text()

    $timeTabs.siblings().removeClass('on')
    $timeTabs.eq(idx).addClass('on')

    let $on = $timeTabs.filter('.on'),
        $noOn = $('.drama .tabs .tab-item:not(.on)')
    
    $on.each(function(){
        if(idx != 0){
            switch (idx){
                case 1 :
                    $timeTabs.eq(idx).text('周一')
                    break
                case 2 :
                    $timeTabs.eq(idx).text('周二')
                    break
                case 3 :
                    $timeTabs.eq(idx).text('周三')
                    break
                case 4 :
                    $timeTabs.eq(idx).text('周四')
                    break
                case 5 :
                    $timeTabs.eq(idx).text('周五')
                    break
                case 6 :
                    $timeTabs.eq(idx).text('周六')
                    break
                case 7 :
                    $timeTabs.eq(idx).text('周日')
                    break
            }
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

//下拉框
function Dropdown($ct){
    var $selected = $ct.find('.dropdown .selected'),
    $dropdownList = $ct.find('.dropdown-list'),
    $dropItem = $ct.find('.dropdown-list > li')

    $dropItem.on('click', function () {
        let $choose = $dropItem.filter('.choose'),
            $noChoose = $dropItem.not('.choose')

        $choose.removeClass('choose')
        $noChoose.addClass('choose')
        let str = $dropItem.filter('.choose').text()
        $selected.empty().text(str)
    })
}
new Dropdown($('.common'))
new Dropdown($('.drama'))

//点击下拉框切换三日与一周的排行
function DSwitch($ct){
    let $dItem = $ct.find('.dropdown-list > li')
    $dItem.on('click', function(){
        var $hotList = $ct.find('.sec-rank .rank-wrap .hot-list'),
            $originList = $ct.find('.sec-rank .rank-wrap .origin-list'),
            $dropdownBtn = $dItem.not('.choose')
        let content = $dItem.filter('.choose').text()
        if(content === '三日'){
            let $threeAll = $(`
                <li class="rank-item first">
                    <span class="number">1</span>
                    <a href="#" title="动漫中十五双拥有特殊能力的眼睛【中文字幕】【720P】 播放:352411 74:43" class="r-info">
                        <img src="http://i0.hdslb.com/bfs/archive/723945016ef98abb2bfb33b218eca7184032bbae.jpg@80w_50h.webp" alt="">
                        <div class="r-detail">
                            <p class="r-title">动漫中十五双拥有特殊能力的眼睛【中文字幕】</p>
                            <p class="r-score">综合评分：44.4万</p>
                        </div>
                        <div class="watch-later"></div>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">2</span>
                    <a href="#" title="四月番完结了！好番烂番应有尽有！【四月番剧总结】下篇#2 播放:124980 5:17" class="r-info">
                        <p class="r-title">四月番完结了！好番烂番应有尽有！【四月番剧总结】下篇#2</p>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">3</span>
                    <a href="#" title="【全职高手】共犯（王叶手书） 播放:61474 4:43" class="r-info">
                        <p class="r-title">【全职高手】共犯（王叶手书）</p>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">4</span>
                    <a href="#" title="【新番槽点】面对如此女神，脑海中只有三个字：结婚吧！ 播放:91014 9: 4" class="r-info">
                        <p class="r-title">【新番槽点】面对如此女神，脑海中只有三个字：结婚吧！</p>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">5</span>
                    <a href="#" title="[sakura]七月新番到来，分享一下觉得有趣的新番 播放:101391 7:28" class="r-info">
                        <p class="r-title">[sakura]七月新番到来，分享一下觉得有趣的新番</p>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">6</span>
                    <a href="#" title="【腐向慎入】Break The Ice 播放:55012 1:57" class="r-info">
                        <p class="r-title">【腐向慎入】Break The Ice</p>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">7</span>
                    <a href="#" title="蜡笔小新 美食合集 第三部 播放:45891 374:15" class="r-info">
                        <p class="r-title">蜡笔小新 美食合集 第三部</p>
                    </a>
                </li>
                `),
            $threeOrigin = $(`
                <li class="rank-item first">
                    <span class="number">1</span>
                    <a href="#" title="动漫中十五双拥有特殊能力的眼睛【中文字幕】【720P】 播放:352411 74:43" class="r-info">
                        <img src="http://i0.hdslb.com/bfs/archive/723945016ef98abb2bfb33b218eca7184032bbae.jpg@80w_50h.webp" alt="">
                        <div class="r-detail">
                            <p class="r-title">动漫中十五双拥有特殊能力的眼睛【中文字幕】</p>
                            <p class="r-score">综合评分：44.4万</p>
                        </div>
                        <div class="watch-later"></div>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">2</span>
                    <a href="#" title="【史诗级科普】NTR到底是个啥？现身说法带你走进NTR的世界！ 播放:209592 10:23" class="r-info">
                        <p class="r-title">【史诗级科普】NTR到底是个啥？现身说法带你走进NTR的世界！</p>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">3</span>
                    <a href="#" title="[z补番]让你“营养不良”后宫番 播放:129583 4:22" class="r-info">
                        <p class="r-title">[z补番]让你“营养不良”后宫番</p>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">4</span>
                    <a href="#" title="DC四代《闪电侠》科普【Lorre】 播放:181734 10: 8" class="r-info">
                        <p class="r-title">DC四代《闪电侠》科普【Lorre】</p>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">5</span>
                    <a href="#" title="四月番完结了！好番烂番应有尽有！【四月番剧总结】下篇#2 播放:124980 5:17" class="r-info">
                        <p class="r-title">四月番完结了！好番烂番应有尽有！【四月番剧总结】下篇#2</p>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">6</span>
                    <a href="#" title="【全职高手】共犯（王叶手书） 播放:61474 4:43" class="r-info">
                        <p class="r-title">【全职高手】共犯（王叶手书）</p>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">7</span>
                    <a href="#" title="【新番槽点】面对如此女神，脑海中只有三个字：结婚吧！ 播放:91014 9: 4" class="r-info">
                        <p class="r-title">【新番槽点】面对如此女神，脑海中只有三个字：结婚吧！</p>
                    </a>
                </li>
                `)

            $hotList.empty().append($threeAll)
            $originList.empty().append($threeOrigin)
            showModule()
        }else if(content === '一周'){
            let $weekAll = $(`
                <li class="rank-item first">
                    <span class="number">1</span>
                    <a href="#" title="【Lex】竟然还有这种操作！2015最神奇套路番 播放:1209602 16: 4" class="r-info">
                        <img src="http://i0.hdslb.com/bfs/archive/0f0e2315827edc21ebab72d9701b68c8ac7db3d1.jpg@80w_50h.webp" alt="">
                        <div class="r-detail">
                            <p class="r-title">【Lex】竟然还有这种操作！2015最神奇套路番</p>
                            <p class="r-score">综合评分：99.1万</p>
                        </div>
                        <div class="watch-later"></div>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">2</span>
                    <a href="#" title="动漫中十五双拥有特殊能力的眼睛【中文字幕】【720P】 播放:363030 74:43" class="r-info">
                        <p class="r-title">动漫中十五双拥有特殊能力的眼睛【中文字幕】</p>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">3</span>
                    <a href="#" title="【声优竟是同一人!】埃罗芒阿老师中的声优们还配音过哪些角色 播放:299379 10:44" class="r-info">
                        <p class="r-title">【声优竟是同一人!】埃罗芒阿老师中的声优们还配音过哪些角色</p>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">4</span>
                    <a href="#" title="生化危机新作来袭，几分钟速看CG动画《生化危机：复仇》 播放:411169 5:43" class="r-info">
                        <p class="r-title">生化危机新作来袭，几分钟速看CG动画《生化危机：复仇》</p>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">5</span>
                    <a href="#" title="【史诗级科普】NTR到底是个啥？现身说法带你走进NTR的世界！ 播放:264258 10:238" class="r-info">
                        <p class="r-title">【史诗级科普】NTR到底是个啥？现身说法带你走进NTR的世界！</p>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">6</span>
                    <a href="#" title="【福利MMD】黄漫老师最人气角色胖次福利 超写实渲染 播放:319561 1:28" class="r-info">
                        <p class="r-title">【福利MMD】黄漫老师最人气角色胖次福利 超写实渲染</p>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">7</span>
                    <a href="#" title="【碧蓝航线MMD】 为什么到现在才开始爱上你 . . .『 Angelite 』 播放:156492 4:47" class="r-info">
                        <p class="r-title">【碧蓝航线MMD】 为什么到现在才开始爱上你 . . .『 Angelite 』</p>
                    </a>
                </li>
                `),
            $weekOrigin = $(`
                <li class="rank-item first">
                    <span class="number">1</span>
                    <a href="#" title="动漫中十五双拥有特殊能力的眼睛【中文字幕】【720P】 播放:352411 74:43" class="r-info">
                        <img src="http://i0.hdslb.com/bfs/archive/723945016ef98abb2bfb33b218eca7184032bbae.jpg@80w_50h.webp" alt="">
                        <div class="r-detail">
                            <p class="r-title">动漫中十五双拥有特殊能力的眼睛【中文字幕】</p>
                            <p class="r-score">综合评分：44.4万</p>
                        </div>
                        <div class="watch-later"></div>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">2</span>
                    <a href="#" title="【声优竟是同一人!】埃罗芒阿老师中的声优们还配音过哪些角色 播放:299379 10:44" class="r-info">
                        <p class="r-title">【声优竟是同一人!】埃罗芒阿老师中的声优们还配音过哪些角色</p>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">3</span>
                    <a href="#" title="生化危机新作来袭，几分钟速看CG动画《生化危机：复仇》 播放:411169 5:43" class="r-info">
                        <p class="r-title">生化危机新作来袭，几分钟速看CG动画《生化危机：复仇》</p>
                    </a>
                    
                </li>
                <li class="rank-item">
                    <span class="number">4</span>
                    <a href="#" title="【福利MMD】黄漫老师最人气角色胖次福利 超写实渲染 播放:319561 1:28" class="r-info">
                        <p class="r-title">【福利MMD】黄漫老师最人气角色胖次福利 超写实渲染</p>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">5</span>
                    <a href="#" title="【碧蓝航线MMD】 为什么到现在才开始爱上你 . . .『 Angelite 』 播放:156492 4:47" class="r-info">
                        <p class="r-title">【碧蓝航线MMD】 为什么到现在才开始爱上你 . . .『 Angelite 』</p>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">6</span>
                    <a href="#" title="日本职业声优现场翻配中国动漫作品，日本观众大呼这是中国做的吗 播放:275694 10: 6" class="r-info">
                        <p class="r-title">日本职业声优现场翻配中国动漫作品，日本观众大呼这是中国做的吗</p>
                    </a>
                </li>
                <li class="rank-item">
                    <span class="number">7</span>
                    <a href="#" title="【废柴君】盘点动画中超污的糟糕台词！ 还有这种操作？ 播放:182355 10:16" class="r-info">
                        <p class="r-title">【废柴君】盘点动画中超污的糟糕台词！ 还有这种操作？</p>
                    </a>
                </li>
                `)

            $hotList.empty().append($weekAll)
            $originList.empty().append($weekOrigin)
            showModule()
        }
    })
}
new DSwitch($('.common'))




//番剧 简易排行 下拉框切换
var $dramaItem =  $('.drama .sec-rank .drop-item'),
    $dramaBtn = $dramaItem .not('.choose')

$dramaItem.on('click', function(){
    let content = $dramaItem.filter('.choose').text()

    if(content === '三日'){
        let $three = $(`<ul class="rank-list">
            <li class="rank-item first">
                <span class="number">1</span>
                <a href="#" title="Fate/Apocrypha 播放:2466985" class="r-info">
                    <p class="r-title">Fate/Apocrypha</p>
                    <p class="r-score">更新至第1话</p>
                </a>
            </li>
            <li class="rank-item">
                <span class="number">2</span>
                <a href="#" title="Re:CREATORS 播放:21707031" class="r-info">
                    <p class="r-title">Re:CREATORS</p>
                    <p class="r-score">更新至第13话</p>
                </a>
            </li>
            <li class="rank-item">
                <span class="number">3</span>
                <a href="#" title="骑士&魔法 播放:736211" class="r-info">
                    <p class="r-title">骑士&魔法</p>
                    <p class="r-score">更新至第1话</p>
                </a>
            </li>
            <li class="rank-item">
                <span class="number">4</span>
                <a href="#" title="异世界食堂 播放:704380" class="r-info">
                    <p class="r-title">异世界食堂</p>
                    <p class="r-score">更新至第1话</p>
                </a>
            </li>
            <li class="rank-item">
                <span class="number">5</span>
                <a href="#" title="埃罗芒阿老师 播放:45365340" class="r-info">
                    <p class="r-title">埃罗芒阿老师</p>
                    <p class="r-score">全12话</p>
                </a>
            </li>
            <li class="rank-item">
                <span class="number">6</span>
                <a href="#" title="妖怪公寓的幽雅日常 播放:377709" class="r-info">
                    <p class="r-title">妖怪公寓的幽雅日常</p>
                    <p class="r-score">更新至第1话</p>
                </a>
            </li>
            <li class="rank-item">
                <span class="number">7</span>
                <a href="#" title="战斗女子高校 播放:336343" class="r-info">
                    <p class="r-title">战斗女子高校</p>
                    <p class="r-score">更新至第1话</p>
                </a>
            </li>
            <li class="rank-item">
                <span class="number">8</span>
                <a href="#" title="博人传 火影忍者新时代 播放:25361306" class="r-info">
                    <p class="r-title">博人传 火影忍者新时代</p>
                    <p class="r-score">更新至第13话</p>
                </a>
            </li>
            <li class="rank-item">
                <span class="number">9</span>
                <a href="#" title="月色真美 播放:9933884" class="r-info">
                    <p class="r-title">月色真美</p>
                    <p class="r-score">全12话</p>
                </a>
            </li>
            <li class="rank-item">
                <span class="number">10</span>
                <a href="#" title="暗芝居 第五季 播放:212300" class="r-info">
                    <p class="r-title">暗芝居 第五季</p>
                    <p class="r-score">更新至第1话</p>
                </a>
            </li>
        </ul>`)
        $('.drama .sec-rank .rank-wrap').empty().append($three)
        dramaModule()
    }else if (content === '一周'){
        let $week = $(`<ul class="rank-list">
            <li class="rank-item first">
                <span class="number">1</span>
                <a href="#" title="Fate/Apocrypha 播放:2466985" class="r-info">
                    <p class="r-title">Fate/Apocrypha</p>
                    <p class="r-score">更新至第1话</p>
                </a>
            </li>
            <li class="rank-item">
                <span class="number">2</span>
                <a href="#" title="博人传 火影忍者新时代 播放:25361306" class="r-info">
                    <p class="r-title">博人传 火影忍者新时代</p>
                    <p class="r-score">更新至第13话</p>
                </a>
            </li>
            <li class="rank-item">
                <span class="number">3</span>
                <a href="#" title="埃罗芒阿老师 播放:45365340" class="r-info">
                    <p class="r-title">埃罗芒阿老师</p>
                    <p class="r-score">全12话</p>
                </a>
            </li>
            <li class="rank-item">
                <span class="number">4</span>
                <a href="#" title="Re:CREATORS 播放:21707031" class="r-info">
                    <p class="r-title">Re:CREATORS</p>
                    <p class="r-score">更新至第13话</p>
                </a>
            </li>
            <li class="rank-item">
                <span class="number">5</span>
                <a href="#" title="月色真美 播放:9933884" class="r-info">
                    <p class="r-title">月色真美</p>
                    <p class="r-score">全12话</p>
                </a>
            </li>
            <li class="rank-item">
                <span class="number">6</span>
                <a href="#" title="骑士&魔法 播放:736211" class="r-info">
                    <p class="r-title">骑士&魔法</p>
                    <p class="r-score">更新至第1话</p>
                </a>
            </li>
            <li class="rank-item">
                <span class="number">7</span>
                <a href="#" title="从零开始的魔法书 播放:18908706" class="r-info">
                    <p class="r-title">从零开始的魔法书</p>
                    <p class="r-score">全12话</p>
                </a>
            </li>
            <li class="rank-item">
                <span class="number">8</span>
                <a href="#" title="异世界食堂 播放:704380" class="r-info">
                    <p class="r-title">异世界食堂</p>
                    <p class="r-score">更新至第1话</p>
                </a>
            </li>
            <li class="rank-item">
                <span class="number">9</span>
                <a href="#" title="小林家的龙女仆 播放:60798373" class="r-info">
                    <p class="r-title">小林家的龙女仆</p>
                    <p class="r-score">全13话</p>
                </a>
            </li>
            <li class="rank-item">
                <span class="number">10</span>
                <a href="#" title="妖怪公寓的幽雅日常 播放:377709" class="r-info">
                    <p class="r-title">妖怪公寓的幽雅日常</p>
                    <p class="r-score">更新至第1话</p>
                </a>
            </li>
        </ul>`)
        $('.drama .sec-rank .rank-wrap').empty().append($week)
        dramaModule()
    }
})

//hover出现video-info-mudule
function showModule (){
    var $rankItem = $('.sec-rank .rank-list .rank-item'),
        hoverTime

    $rankItem.hover(
        function(){
            let $title = $(this).find('.r-title'),
                string = $title.text(),
                $module = '',
                number = $(this).find('.number').text()

            hoverTime = setTimeout(function (){
                switch (string) {
                    case '动漫中十五双拥有特殊能力的眼睛【中文字幕】':
                    $module = 
                            $(` <div class="video-info-module">
                                <div class="v-title">动漫中十五双拥有特殊能力的眼睛【中文字幕】【720P】</div>
                                <div class="v-info">
                                    <span class="name">L的朋友</span>
                                    <span class="line"></span>
                                    <span class="date">2017-06-30 15:13</span>
                                </div>
                                <div class="v-preview clearfix">
                                    <img src="http://i0.hdslb.com/bfs/archive/723945016ef98abb2bfb33b218eca7184032bbae.jpg@80w_50h.webp" alt="">
                                    <p class="txt">盘点了下动漫中比较有代表性的十五双拥有特殊能力的眼睛，其实严格来讲其中个别几个也算不上是“特殊能力”，这要看对“特殊”怎么定义了，如果有朋友非要和我纠结这一点的话那算我输。。。我对这种“争论”真的没有兴趣。。。还有就是动漫中比较特殊的眼睛肯定还有不少，所谓“十五大”我也没说是“十五最”，我很欢迎大家补充。</p>
                                </div>
                                <div class="v-data">
                                    <span class="play">
                                        <icon></icon>
                                        35.2万
                                    </span>
                                    <span class="danmu">
                                        <icon></icon>
                                        1.5万
                                    </span>
                                    <span class="collect">
                                        <icon></icon>
                                        1.4万
                                    </span>
                                    <span class="coin">
                                        <icon></icon>
                                        2928
                                    </span>
                                </div>
                            </div>`)
                        $module.appendTo($('.content'))
                        break
                    case '四月番完结了！好番烂番应有尽有！【四月番剧总结】下篇#2':
                        $module = $(` <div class="video-info-module">
                                    <div class="v-title">四月番完结了！好番烂番应有尽有！【四月番剧总结】下篇#2</div>
                                    <div class="v-info">
                                        <span class="name">纆緣</span>
                                        <span class="line"></span>
                                        <span class="date">2017-07-01 16:55</span>
                                    </div>
                                    <div class="v-preview clearfix">
                                        <img src="http://i2.hdslb.com/bfs/archive/0e8dbe192ac037f7183c5f0df016a266a4754a1e.jpg" alt="">
                                        <p class="txt">微博：http://weibo.com/u/5663112223 个人粉丝群：225782627 喜欢不妨关注一下吧~</p>
                                    </div>
                                    <div class="v-data">
                                        <span class="play">
                                            <icon></icon>
                                            12.5万
                                        </span>
                                        <span class="danmu">
                                            <icon></icon>
                                            781
                                        </span>
                                        <span class="collect">
                                            <icon></icon>
                                            3666
                                        </span>
                                        <span class="coin">
                                            <icon></icon>
                                            1839
                                        </span>
                                    </div>
                                </div>`)
                        $module.appendTo($('.content'))
                        break
                    case '【全职高手】共犯（王叶手书）':
                        $module = $(`<div class="video-info-module">
                            <div class="v-title">【全职高手】共犯（王叶手书）</div>
                            <div class="v-info">
                                <span class="name">kizumi组米</span>
                                <span class="line"></span>
                                <span class="date">2017-06-30 22:11</span>
                            </div>
                            <div class="v-preview clearfix">
                                <img src="http://i0.hdslb.com/bfs/archive/76932ea52429f546febb25aedc5e3d30ecbb6877.jpg" alt="">
                                <p class="txt">绘/制作： 组米 BGM：共犯—椿屋四重奏 王叶向！顺便提前祝老王生日快乐 ||  图包我放在lof啦，谢谢大家的喜欢！</p>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    6.1万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    1455
                                </span>
                                <span class="collect">
                                    <icon></icon>
                                    9520
                                </span>
                                <span class="coin">
                                    <icon></icon>
                                    6125
                                </span>
                            </div>
                        </div>`)
                        $module.appendTo($('.content'))
                        break
                    case '【新番槽点】面对如此女神，脑海中只有三个字：结婚吧！':
                        $module = $(`<div class="video-info-module">
                            <div class="v-title">【新番槽点】面对如此女神，脑海中只有三个字：结婚吧！</div>
                            <div class="v-info">
                                <span class="name">中二少年晓凯</span>
                                <span class="line"></span>
                                <span class="date">2017-07-02 19:01</span>
                            </div>
                            <div class="v-preview clearfix">
                                <img src="http://i0.hdslb.com/bfs/archive/2e80f5a90163666929caed6511c2fb56f5641eca.jpg" alt="">
                                <p class="txt">自制 吐槽一下《自由之翼》第二季，真的还蛮好看，期待明年的第三季 微博传送门：http://weibo.com/5481159362</p>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    9.1万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    1014
                                </span>
                                <span class="collect">
                                    <icon></icon>
                                    4536
                                </span>
                                <span class="coin">
                                    <icon></icon>
                                    4319
                                </span>
                            </div>
                        </div>`)
                        $module.appendTo($('.content'))
                        break
                    case '[sakura]七月新番到来，分享一下觉得有趣的新番':
                        $module = $(`<div class="video-info-module">
                            <div class="v-title">[sakura]七月新番到来，分享一下觉得有趣的新番</div>
                            <div class="v-info">
                                <span class="name">sakuraのmemory</span>
                                <span class="line"></span>
                                <span class="date">2017-07-01 14:50</span>
                            </div>
                            <div class="v-preview clearfix">
                                <img src="http://i2.hdslb.com/bfs/archive/c76353628e6c02ece831a28f254442752e4e5151.jpg" alt="">
                                <p class="txt">七月有哪些有趣的新番呢，都来看看吧～ 第一次投稿视频，做了蛮久的，希望大家能够喜欢ヾ(≧∇≦*)ゝ喜欢的可以投币点个关注哦 素材用到了F宅的天使的3p和公主准则pv，在此感谢 BGM :TAKE ME HAND    DAISHI DANCE /ダイシ・ダンス 冬のエピローグ      Goose House</p>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    10.1万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    413
                                </span>
                                <span class="collect">
                                    <icon></icon>
                                    3343
                                </span>
                                <span class="coin">
                                    <icon></icon>
                                    393
                                </span>
                            </div>
                        </div>`)
                        $module.appendTo($('.content'))
                        break
                    case '【腐向慎入】Break The Ice':
                        $module = $(`<div class="video-info-module">
                            <div class="v-title">【腐向慎入】Break The Ice</div>
                            <div class="v-info">
                                <span class="name">賽巴斯欽本命</span>
                                <span class="line"></span>
                                <span class="date">2017-06-30 18:25</span>
                            </div>
                            <div class="v-preview clearfix">
                                <img src="http://i2.hdslb.com/bfs/archive/1b1c0c5b92d07a012796e87c22e00252aacdf50d.jpg" alt="">
                                <p class="txt">http://youtu.be/eh94fwo55vM 主催: hiinas BGM:Break The Ice ，演唱者:Britney Spears。 【禁商用轉載/禁傳秒拍】 這首歌我已經搬過2次了，這是第三次....（￣▽￣）</p>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    5.5万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    449
                                </span>
                                <span class="collect">
                                    <icon></icon>
                                    6500
                                </span>
                                <span class="coin">
                                    <icon></icon>
                                    1200
                                </span>
                            </div>
                        </div>`)
                        $module.appendTo($('.content'))
                        break
                    case '蜡笔小新 美食合集 第三部':
                        $module = $(`<div class="video-info-module">
                            <div class="v-title">蜡笔小新 美食合集 第三部</div>
                            <div class="v-info">
                                <span class="name">zxjcy</span>
                                <span class="line"></span>
                                <span class="date">2017-07-01 05:52</span>
                            </div>
                            <div class="v-preview clearfix">
                                <img src="http://i0.hdslb.com/bfs/archive/534a9e619afa4dd8fc355a63ed106ac25ca8cc4e.jpg" alt="">
                                <p class="txt">蜡笔小新美食合集第三部，会继续更新~妮妮妈的惨遇到这部就搬完了应该~~</p>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    4.6万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    1287
                                </span>
                                <span class="collect">
                                    <icon></icon>
                                    6451
                                </span>
                                <span class="coin">
                                    <icon></icon>
                                    457
                                </span>
                            </div>
                        </div>`)
                        $module.appendTo($('.content'))
                        break
                    case '【史诗级科普】NTR到底是个啥？现身说法带你走进NTR的世界！':
                        $module = $(`<div class="video-info-module">
                            <div class="v-title">【史诗级科普】NTR到底是个啥？现身说法带你走进NTR的世界！</div>
                            <div class="v-info">
                                <span class="name">泛式</span>
                                <span class="line"></span>
                                <span class="date">2017-07-01 19:29</span>
                            </div>
                            <div class="v-preview clearfix">
                                <img src="http://i0.hdslb.com/bfs/archive/bbd7d2d7f285f1963d2b8cfe4bbc1cd75e6b9561.jpg" alt="">
                                <p class="txt">现身说法三百六十度无死角带你走进不一样的NTR世界 微博  @泛式 http://www.weibo.com/FunShiki</p>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    21.0万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    3928
                                </span>
                                <span class="collect">
                                    <icon></icon>
                                    1.1万
                                </span>
                                <span class="coin">
                                    <icon></icon>
                                    1.8万
                                </span>
                            </div>
                        </div>`)
                        $module.appendTo($('.content'))
                        break
                    case '[z补番]让你“营养不良”后宫番':
                        $module = $(`<div class="video-info-module">
                            <div class="v-title">[z补番]让你“营养不良”后宫番</div>
                            <div class="v-info">
                                <span class="name">-笨死滴ZZ-</span>
                                <span class="line"></span>
                                <span class="date">2017-07-01 18:31</span>
                            </div>
                            <div class="v-preview clearfix">
                                <img src="http://i0.hdslb.com/bfs/archive/285761595e446bfe802b3881fbcffd7c18ae8add.png" alt="">
                                <p class="txt">算了我去熬点骨汤,补补身体啊</p>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    13.0万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    550
                                </span>
                                <span class="collect">
                                    <icon></icon>
                                    5086
                                </span>
                                <span class="coin">
                                    <icon></icon>
                                    310
                                </span>
                            </div>
                        </div>`)
                        $module.appendTo($('.content'))
                        break
                    case 'DC四代《闪电侠》科普【Lorre】':
                        $module = $(`<div class="video-info-module">
                            <div class="v-title">DC四代《闪电侠》科普【Lorre】</div>
                            <div class="v-info">
                                <span class="name">努力的Lorre</span>
                                <span class="line"></span>
                                <span class="date">2017-06-30 20:46</span>
                            </div>
                            <div class="v-preview clearfix">
                                <img src="http://i2.hdslb.com/bfs/archive/ea894bff725e9af83dc87d8af293c0f3d0890102.jpg" alt="">
                                <p class="txt">视频更新的资讯，请关注微信公众号：努力的Lorre</p>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    18.2万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    1214
                                </span>
                                <span class="collect">
                                    <icon></icon>
                                    540
                                </span>
                                <span class="coin">
                                    <icon></icon>
                                    1552
                                </span>
                            </div>
                        </div>`)
                        $module.appendTo($('.content'))
                        break
                    case '【Lex】竟然还有这种操作！2015最神奇套路番':
                        $module = $(`<div class="video-info-module">
                            <div class="v-title">【Lex】竟然还有这种操作！2015最神奇套路番</div>
                            <div class="v-info">
                                <span class="name">LexBurner</span>
                                <span class="line"></span>
                                <span class="date">2017-06-30 11:30</span>
                            </div>
                            <div class="v-preview clearfix">
                                <img src="http://i0.hdslb.com/bfs/archive/0f0e2315827edc21ebab72d9701b68c8ac7db3d1.jpg" alt="">
                                <p class="txt">新浪微博@LexBurner</p>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    121万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    3.6万
                                </span>
                                <span class="collect">
                                    <icon></icon>
                                    3.8万
                                </span>
                                <span class="coin">
                                    <icon></icon>
                                    4.9万
                                </span>
                            </div>
                        </div>`)
                        $module.appendTo($('.content'))
                        break
                    case '【声优竟是同一人!】埃罗芒阿老师中的声优们还配音过哪些角色':
                        $module = $(`<div class="video-info-module">
                            <div class="v-title">【声优竟是同一人!】埃罗芒阿老师中的声优们还配音过哪些角色</div>
                            <div class="v-info">
                                <span class="name">饭帅marshall-fun</span>
                                <span class="line"></span>
                                <span class="date">2017-06-28 12:00</span>
                            </div>
                            <div class="v-preview clearfix">
                                <img src="http://i1.hdslb.com/bfs/archive/651bab42a5d2976852cfd12da2b51c9173b7bb7c.png" alt="">
                                <p class="txt">这是【声优竟是同一人！】系列的第4期视频，上一期——RE:CREATORS篇：av11176903  本期视频如果收藏过万，下周发一期搞笑配音 感兴趣请点个关注~</p>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    29.9万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    2.0万
                                </span>
                                <span class="collect">
                                    <icon></icon>
                                    1.8万
                                </span>
                                <span class="coin">
                                    <icon></icon>
                                    9615
                                </span>
                            </div>
                        </div>`)
                        $module.appendTo($('.content'))
                        break
                    case '生化危机新作来袭，几分钟速看CG动画《生化危机：复仇》':
                        $module = $(`<div class="video-info-module">
                            <div class="v-title">生化危机新作来袭，几分钟速看CG动画《生化危机：复仇》</div>
                            <div class="v-info">
                                <span class="name">阿斗归来了</span>
                                <span class="line"></span>
                                <span class="date">2017-06-28 18:07</span>
                            </div>
                            <div class="v-preview clearfix">
                                <img src="http://i1.hdslb.com/bfs/archive/b0a6a88fdc29ae57ae76b362c1f9b1b0433b3914.jpg" alt="">
                                <p class="txt">大家好，我是阿斗，欢迎关注我。我知道你们会说最后皮裤女没死，卡普空让她不死不就是挤牙膏，为下一部做准备吗</p>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    41.4万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    2135
                                </span>
                                <span class="collect">
                                    <icon></icon>
                                    2644
                                </span>
                                <span class="coin">
                                    <icon></icon>
                                    1366
                                </span>
                            </div>
                        </div>`)
                        $module.appendTo($('.content'))
                        break
                    case '【福利MMD】黄漫老师最人气角色胖次福利 超写实渲染':
                        $module = $(`<div class="video-info-module">
                            <div class="v-title">【福利MMD】黄漫老师最人气角色胖次福利 超写实渲染</div>
                            <div class="v-info">
                                <span class="name">_碧空残云_</span>
                                <span class="line"></span>
                                <span class="date">2017-06-27 09:53</span>
                            </div>
                            <div class="v-preview clearfix">
                                <img src="http://i2.hdslb.com/bfs/archive/31e0c787b5fbe6af089bdbf6397b37157b04edca.jpg" alt="">
                                <p class="txt">模型和场景：我自己和RBQ剑眉 动作：我自己 镜头：我自己 渲染：我自己 封面模型：Sagiri Izumi Ver. 1.03 渲染和动作：我自己 脑洞摸鱼作 我从来不是标题党 都是大实话 做完这个接着干正事去了</p>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    32.0万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    1654
                                </span>
                                <span class="collect">
                                    <icon></icon>
                                    4605
                                </span>
                                <span class="coin">
                                    <icon></icon>
                                    2209
                                </span>
                            </div>
                        </div>`)
                        $module.appendTo($('.content'))
                        break
                    case '【碧蓝航线MMD】 为什么到现在才开始爱上你 . . .『 Angelite 』':
                        $module = $(`<div class="video-info-module">
                            <div class="v-title">【碧蓝航线MMD】 为什么到现在才开始爱上你 . . .『 Angelite 』</div>
                            <div class="v-info">
                                <span class="name">梦亦星逝</span>
                                <span class="line"></span>
                                <span class="date">2017-06-27 20:25</span>
                            </div>
                            <div class="v-preview clearfix">
                                <img src="http://i0.hdslb.com/bfs/archive/5e82f63a7efd2118759f5a765e7d7b88092b85e1.jpg" alt="">
                                <p class="txt">牛肉dalao的光辉模真美（720P下载点: http://pan.baidu.com/s/1skF2eHR 码: sdfx）借物请展开简介 ———————————— ☪BGM：Angelite   BY 時唯 （av6202853）☪Model：机动战士牛肉 ☪Motion：ureshiiiiii ☪ Stage：机动战士牛肉；aokcub(sky) ☪ MME：ikeno；くるりんぽん；そぼろ；針金P；データP ☪ Thanks：樋口优；Emil；舞力介入P；極北P</p>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    15.6万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    1531
                                </span>
                                <span class="collect">
                                    <icon></icon>
                                    1.6万
                                </span>
                                <span class="coin">
                                    <icon></icon>
                                    6637
                                </span>
                            </div>
                        </div>`)
                        $module.appendTo($('.content'))
                        break
                    case '日本职业声优现场翻配中国动漫作品，日本观众大呼这是中国做的吗':
                        $module = $(`<div class="video-info-module">
                            <div class="v-title">日本职业声优现场翻配中国动漫作品，日本观众大呼这是中国做的吗</div>
                            <div class="v-info">
                                <span class="name">天音声社工作室</span>
                                <span class="line"></span>
                                <span class="date">2017-06-27 11:19</span>
                            </div>
                            <div class="v-preview clearfix">
                                <img src="http://i0.hdslb.com/bfs/archive/e8129535304962dfb5d5e6f0771cd1b283fd12b5.jpg" alt="">
                                <p class="txt">2017年6月24日，kissingprojet在日本东京举办了中日国交45周年纪念，异业种交流会。在交流会上，由三桥加奈子领头的6名日本职业声优（三橋加奈子、長谷美希、鈴木臨之介、谷ゆうみ、鳴澤大輔、松浦夕雨），对大周互娱官方授权，天音声社工作室提供（日语台词、原CV配音视频片段）的动漫作品《斗破苍穹之大主宰 动态漫画》进行了现场翻配的配音表演。得到了出席会场的中日嘉宾的一致好评。甚有日本的嘉宾惊呼，这是中国做的吗？！</p>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    27.6万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    1588
                                </span>
                                <span class="collect">
                                    <icon></icon>
                                    2625
                                </span>
                                <span class="coin">
                                    <icon></icon>
                                    364
                                </span>
                            </div>
                        </div>`)
                        $module.appendTo($('.content'))
                        break
                    case '【废柴君】盘点动画中超污的糟糕台词！ 还有这种操作？':
                        $module = $(`<div class="video-info-module">
                            <div class="v-title">【废柴君】盘点动画中超污的糟糕台词！ 还有这种操作？</div>
                            <div class="v-info">
                                <span class="name">机智的废柴君</span>
                                <span class="line"></span>
                                <span class="date">2017-06-26 16:00</span>
                            </div>
                            <div class="v-preview clearfix">
                                <img src="http://i1.hdslb.com/bfs/archive/58c1542d7e90da9764122f4e15c52b74f9694450.jpg" alt="">
                                <p class="txt">经常在补番时看到某些段落心里一阵卧槽！这太糟糕了吧，竟然还有这种操作之类的感叹。这次花了些时间把那些让我十分“震惊”的台做成合集发出来，让大家感受下千万草泥马在心里奔腾的感觉。 新浪微博：机智的废柴君 动漫扯淡群：567845573</p>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    18.2万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    3493
                                </span>
                                <span class="collect">
                                    <icon></icon>
                                    6862
                                </span>
                                <span class="coin">
                                    <icon></icon>
                                    3117
                                </span>
                            </div>
                        </div>`)
                        $module.appendTo($('.content'))
                        break
                }

                switch (number){
                    case '1':
                        $('.video-info-module').css('top', 1092)
                        break
                    case '2':
                        $('.video-info-module').css('top', 1165)
                        break
                    case '3':
                        $('.video-info-module').css('top', 1203)
                        break
                    case '4':
                        $('.video-info-module').css('top', 1241)
                        break
                    case '5':
                        $('.video-info-module').css('top', 1279)
                        break
                    case '6':
                        $('.video-info-module').css('top', 1317)
                        break
                    case '7':
                        $('.video-info-module').css('top', 1355)
                        break
                }
            }, 500)
        },
        function(){
            clearTimeout(hoverTime) 
            $('.video-info-module').remove()
        }
    )
}

//drama-info-module
function dramaModule(){
    var $rankItem = $('.drama .sec-rank .rank-list .rank-item'),
        hoverTime

    $rankItem.hover(
        function(){
            let $title = $(this).find('.r-title'),
                string = $title.text(),
                $module = '',
                number = $(this).find('.number').text()
            
             hoverTime = setTimeout(function (){
                switch (string){
                    case 'Fate/Apocrypha':
                        $dModule = $(`<div class="drama-info-module">
                            <div class="v-preview clearfix">
                                <img src="https://i0.hdslb.com/bfs/bangumi/9d9acb596ae793fe43642d33b534f5839a430265.jpg@72w_72h.webp" alt="">
                                <div class="v-title">
                                    <p class="title">Fate/Apocrypha</p>
                                    <p class="desc">连载中，更新至第1话</p>
                                </div>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    254.0万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    9.3万
                                </span>
                                <span class="fav">
                                    <icon></icon>
                                    137.8万
                                </span>
                            </div>
                        </div>`)
                        $dModule.appendTo($('.content'))
                        break
                    case 'Re:CREATORS':
                        $dModule = $(`<div class="drama-info-module">
                            <div class="v-preview clearfix">
                                <img src="https://i0.hdslb.com/bfs/bangumi/15b3bb324583a32b2f749318f5df0feb32610fc8.jpg@72w_72h.webp" alt="">
                                <div class="v-title">
                                    <p class="title">Re:CREATORS</p>
                                    <p class="desc">连载中，更新至第13话</p>
                                </div>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    2180.3万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    53.8万
                                </span>
                                <span class="fav">
                                    <icon></icon>
                                    166.2万
                                </span>
                            </div>
                        </div>`)
                        $dModule.appendTo($('.content'))
                        break
                    case '骑士&魔法':
                        $dModule = $(`<div class="drama-info-module">
                            <div class="v-preview clearfix">
                                <img src="https://i0.hdslb.com/bfs/bangumi/23da35037d713db519423afa147db76e8ac39dd9.jpg@72w_72h.webp" alt="">
                                <div class="v-title">
                                    <p class="title">骑士&魔法</p>
                                    <p class="desc">连载中，更新至第1话</p>
                                </div>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    78.8万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    3.5万
                                </span>
                                <span class="fav">
                                    <icon></icon>
                                    35.1万
                                </span>
                            </div>
                        </div>`)
                        $dModule.appendTo($('.content'))
                        break
                    case '异世界食堂':
                        $dModule = $(`<div class="drama-info-module">
                            <div class="v-preview clearfix">
                                <img src="https://i0.hdslb.com/bfs/bangumi/8dd926666739582371f1d835ffd1e4ad69071222.jpg@72w_72h.webp" alt="">
                                <div class="v-title">
                                    <p class="title">异世界食堂</p>
                                    <p class="desc">连载中，更新至第1话</p>
                                </div>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    77.8万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    2.5万
                                </span>
                                <span class="fav">
                                    <icon></icon>
                                    44.6万
                                </span>
                            </div>
                        </div>`)
                        $dModule.appendTo($('.content'))
                        break
                    case '埃罗芒阿老师':
                        $dModule = $(`<div class="drama-info-module">
                            <div class="v-preview clearfix">
                                <img src="https://i0.hdslb.com/bfs/bangumi/8cc2ec4691707e94768c392c3ced37a1c3107430.jpg@72w_72h.webp" alt="">
                                <div class="v-title">
                                    <p class="title">埃罗芒阿老师</p>
                                    <p class="desc">已完结，全12话</p>
                                </div>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    4554.1万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    214.2万
                                </span>
                                <span class="fav">
                                    <icon></icon>
                                    267.5万
                                </span>
                            </div>
                        </div>`)
                        $dModule.appendTo($('.content'))
                        break
                    case '妖怪公寓的幽雅日常':
                        $dModule = $(`<div class="drama-info-module">
                            <div class="v-preview clearfix">
                                <img src="https://i0.hdslb.com/bfs/bangumi/7a4fa377c7b10b87764ddc069515cf739e7a4346.jpg@72w_72h.webp" alt="">
                                <div class="v-title">
                                    <p class="title">妖怪公寓的幽雅日常</p>
                                    <p class="desc">连载中，更新至第1话</p>
                                </div>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    41.3万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    1.6万
                                </span>
                                <span class="fav">
                                    <icon></icon>
                                    21.3万
                                </span>
                            </div>
                        </div>`)
                        $dModule.appendTo($('.content'))
                        break
                    case '战斗女子高校':
                        $dModule = $(`<div class="drama-info-module">
                            <div class="v-preview clearfix">
                                <img src="https://i0.hdslb.com/bfs/bangumi/2de3653b7f1d58cbce1beda4fe1a048aae13e552.jpg@72w_72h.webp" alt="">
                                <div class="v-title">
                                    <p class="title">战斗女子高校</p>
                                    <p class="desc">连载中，更新至第1话</p>
                                </div>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    35.2万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    1.5万
                                </span>
                                <span class="fav">
                                    <icon></icon>
                                    12.0万
                                </span>
                            </div>
                        </div>`)
                        $dModule.appendTo($('.content'))
                        break
                    case '博人传 火影忍者新时代':
                        $dModule = $(`<div class="drama-info-module">
                            <div class="v-preview clearfix">
                                <img src="https://i0.hdslb.com/bfs/bangumi/a968da0b42034dd347e77a8efc08f8ac11448046.jpg@72w_72h.webp" alt="">
                                <div class="v-title">
                                    <p class="title">博人传 火影忍者新时代</p>
                                    <p class="desc">连载中，更新至第14话</p>
                                </div>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    2589.5万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    49.2万
                                </span>
                                <span class="fav">
                                    <icon></icon>
                                    132.2万
                                </span>
                            </div>
                        </div>`)
                        $dModule.appendTo($('.content'))
                        break
                    case '月色真美':
                        $dModule = $(`<div class="drama-info-module">
                            <div class="v-preview clearfix">
                                <img src="https://i0.hdslb.com/bfs/bangumi/6cb30116f1baddf62d0e4035d45ed5e4878cf20d.jpg@72w_72h.webp" alt="">
                                <div class="v-title">
                                    <p class="title">月色真美</p>
                                    <p class="desc">已完结，全12话</p>
                                </div>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    999.4万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    58.3万
                                </span>
                                <span class="fav">
                                    <icon></icon>
                                    89.5万
                                </span>
                            </div>
                        </div>`)
                        $dModule.appendTo($('.content'))
                        break
                    case '暗芝居 第五季':
                        $dModule = $(`<div class="drama-info-module">
                            <div class="v-preview clearfix">
                                <img src="https://i0.hdslb.com/bfs/bangumi/a1c6cc729f2159c65640160edc5aa859d0ee328e.jpg@72w_72h.webp" alt="">
                                <div class="v-title">
                                    <p class="title">暗芝居 第五季</p>
                                    <p class="desc">连载中，更新至第11话</p>
                                </div>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    22.3万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    2037
                                </span>
                                <span class="fav">
                                    <icon></icon>
                                    5.3万
                                </span>
                            </div>
                        </div>`)
                        $dModule.appendTo($('.content'))
                        break
                    case '从零开始的魔法书':
                        $dModule = $(`<div class="drama-info-module">
                            <div class="v-preview clearfix">
                                <img src="https://i0.hdslb.com/bfs/bangumi/e5317e4fa45ff7b1236ba5a558bd2beff624bc7a.jpg@72w_72h.webp" alt="">
                                <div class="v-title">
                                    <p class="title">从零开始的魔法书</p>
                                    <p class="desc">已完结，全12话</p>
                                </div>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    1897.2万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    39.8万
                                </span>
                                <span class="fav">
                                    <icon></icon>
                                    141.3万
                                </span>
                            </div>
                        </div>`)
                        $dModule.appendTo($('.content'))
                        break
                    case '小林家的龙女仆':
                        $dModule = $(`<div class="drama-info-module">
                            <div class="v-preview clearfix">
                                <img src="https://i0.hdslb.com/bfs/bangumi/5d76ea9fbbc14b92846ca711d0a391863ed6fb05.jpg@72w_72h.webp" alt="">
                                <div class="v-title">
                                    <p class="title">小林家的龙女仆</p>
                                    <p class="desc">已完结，全13话</p>
                                </div>
                            </div>
                            <div class="v-data">
                                <span class="play">
                                    <icon></icon>
                                    6086.4万
                                </span>
                                <span class="danmu">
                                    <icon></icon>
                                    137.5万
                                </span>
                                <span class="fav">
                                    <icon></icon>
                                    238.7万
                                </span>
                            </div>
                        </div>`)
                        $dModule.appendTo($('.content'))
                        break
                }
                
                switch (number){
                    case '1':
                        $('.drama-info-module').css('top', 1536)
                        break
                    case '2':
                        $('.drama-info-module').css('top', 1575)
                        break
                    case '3':
                        $('.drama-info-module').css('top', 1610)
                        break
                    case '4':
                        $('.drama-info-module').css('top', 1647)
                        break
                    case '5':
                        $('.drama-info-module').css('top', 1686)
                        break
                    case '6':
                        $('.drama-info-module').css('top', 1724)
                        break
                    case '7':
                        $('.drama-info-module').css('top', 1762)
                        break
                    case '8':
                        $('.drama-info-module').css('top', 1800)
                        break
                    case '9':
                        $('.drama-info-module').css('top', 1840)
                        break
                    case '10':
                        $('.drama-info-module').css('top', 1878)
                        break
                }
             }, 500)
        },
        function(){
            clearTimeout(hoverTime) 
            $('.drama-info-module').remove()
        }
    )
}
