//drama-info-module
export default function dramaModule(){
    var $rankItem = $('.drama .sec-rank .rank-list .rank-item'),
        hoverTime

    $rankItem.hover(
        function(){
            let $title = $(this).find('.r-title'),
                string = $title.text(),
                $module = '',
                $dModule,
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
                        $('.drama-info-module').css('top', 1537)
                        break
                    case '2':
                        $('.drama-info-module').css('top', 1577)
                        break
                    case '3':
                        $('.drama-info-module').css('top', 1613)
                        break
                    case '4':
                        $('.drama-info-module').css('top', 1652)
                        break
                    case '5':
                        $('.drama-info-module').css('top', 1690)
                        break
                    case '6':
                        $('.drama-info-module').css('top', 1729)
                        break
                    case '7':
                        $('.drama-info-module').css('top', 1767)
                        break
                    case '8':
                        $('.drama-info-module').css('top', 1805)
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