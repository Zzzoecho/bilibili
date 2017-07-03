Rotation.init($('.carousel'))
Carousel.init($('.carousel-module'))
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
var $rankTabs = $('.rank-head .tabs .tab-item'),
    $rankCt = $('.rank-head .tabs'),
    $rankWrap = $('.sec-rank .rank-wrap')

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

//下拉框
var $selected = $('.sec-rank .dropdown .selected'),
    $dropdownList = $('.sec-rank .dropdown-list'),
    $dropItem = $('.sec-rank .dropdown-list > li')

$dropItem.on('click', function () {
    let $choose = $dropItem.filter('.choose'),
        $noChoose = $dropItem.not('.choose')

    $choose.removeClass('choose')
    $noChoose.addClass('choose')
})

//点击下拉框切换三日与一周的排行
var $hotList = $('.hot-list'),
    $originList = $('.origin-list'),
    $dropdownBtn = $dropItem.not('.choose')

$dropItem.on('click', function(){
    let content = $dropItem.filter('.choose').text()
    console.log(content)

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
                    <p class="r-title">动漫中十五双拥有特殊能力的眼睛【中文字幕】【720P】</p>
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
    }
    
})