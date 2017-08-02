import dramaModule from './dramaModule'

//下拉框
var Dropdown = function ($ct){
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

//番剧 简易排行 下拉框切换
var dramaRank = function(){
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
}  

export {Dropdown, dramaRank}