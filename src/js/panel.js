
//昨日-三日-一周 切换
export default function Panel(){
    this.init()
    this.cutover()
}

Panel.prototype = {
    init: function(){
        var $viewsTop = this.$viewsTop = $('.hit .views-top'),
            $viewsBtn = this.$viewsBtn = $('.hit .views-top .btn'),
            $VModule
    },
    cutover: function(){
        var _this = this
        this.$viewsBtn.on('click', function(e){
            var idx = _this.idx =_this.$viewsBtn.index(e.target),
                btnText =  _this.btnText =_this.$viewsBtn.eq(idx).text()

            switch (_this.btnText){
                case '昨日':
                    _this.$VModule = $(`
                        <div class="panel">
                            <a href="#" title="【FGO|自翻译】7月初推特上fate最新趣图渣翻">
                                <img src="https://i1.hdslb.com/bfs/archive/93a90ff3757f0041a1d7e9e615fd127272aae5fc.jpg@160w_100h.webp" alt="">
                                <div class="card-mark">
                                    <p class="title">【FGO|自翻译】7月初推特上fate最新趣图渣翻</p>
                                    <p class="author">up主：丨瓜皮妹妹丨</p>
                                    <p class="play">播放：1.9万</p>
                                </div>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <div class="panel">
                            <a href="#" title="【七夕节快乐】好热啊  千年组秀恩爱">
                                <img src="https://i0.hdslb.com/bfs/archive/514ef41d3578974ea561c6f416bd22fb888c0819.jpg@160w_100h.webp" alt="">
                                <div class="card-mark">
                                    <p class="title">【七夕节快乐】好热啊  千年组秀恩爱</p>
                                    <p class="author">up主：vivian198808</p>
                                    <p class="play">播放：9270</p>
                                </div>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <div class="panel">
                            <a href="#" title="舞动吧，夏绫！【神契幻奇谭MMD】 极乐净土【大神犬PV服】">
                                <img src="https://i2.hdslb.com/bfs/archive/1cc53a2e3fabc8eb7719b864ad0bad0076339ea1.jpg@160w_100h.webp" alt="">
                                <div class="card-mark">
                                    <p class="title">舞动吧，夏绫！【神契幻奇谭MMD】 极乐净土【大神犬PV服】</p>
                                    <p class="author">up主：CME6大神犬</p>
                                    <p class="play">播放：6857</p>
                                </div>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <div class="panel">
                            <a href="#" title="【乐正绫原创曲】末世残响【双本家PV付】(Signal-E)">
                                <img src="https://i1.hdslb.com/bfs/archive/668718cdafc38638a156dfab75fcd4a696991bb9.jpg@160w_100h.webp" alt="">
                                <div class="card-mark">
                                    <p class="title">【乐正绫原创曲】末世残响【双本家PV付】(Signal-E)</p>
                                    <p class="author">up主：iKzzzKuliner</p>
                                    <p class="play">播放：2383</p>
                                </div>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <div class="panel">
                            <a href="#" title="这是一个爱丽丝梦游墨镜的游戏【绅士游戏】">
                                <img src="https://i1.hdslb.com/bfs/archive/9a1014a7b26d2127307b1a33303289c0e058158f.jpg@160w_100h.webp" alt="">
                                <div class="card-mark">
                                    <p class="title">这是一个爱丽丝梦游墨镜的游戏【绅士游戏】</p>
                                    <p class="author">up主：小明酱的日常</p>
                                    <p class="play">播放：4.2万</p>
                                </div>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <div class="panel">
                            <a href="#" title="【刀剑乱舞MMD】可愿与我共赴桃园？">
                                <img src="https://i2.hdslb.com/bfs/archive/ee6bf09ba35f6703910c0627d410279da7d36a0c.jpg@160w_100h.webp" alt="">
                                <div class="card-mark">
                                    <p class="title">【刀剑乱舞MMD】可愿与我共赴桃园？</p>
                                    <p class="author">up主：thirley</p>
                                    <p class="play">播放：2848</p>
                                </div>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <span class="btn l-btn">一周</span>
                        <span class="btn r-btn">三日</span>
                    `)
                    _this.$viewsTop.empty().append(_this.$VModule)
                    new Panel()
                    break
                case '一周':
                    _this.$VModule = $(`
                        <div class="panel">
                            <a href="#" title="【终末完结纪念MAD】因为我是世界上最幸福的女孩">
                                <img src="https://i2.hdslb.com/bfs/archive/de4568122286c2babe0ff6a3f66f1c6325b7d17c.jpg@160w_100h.webp" alt="">
                                <div class="card-mark">
                                    <p class="title">【终末完结纪念MAD】因为我是世界上最幸福的女孩</p>
                                    <p class="author">up主：喵派</p>
                                    <p class="play">播放：8.4万</p>
                                </div>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <div class="panel">
                            <a href="#" title="【手書】不/完/全/正/解/：/界/外/科/學">
                                <img src="https://i2.hdslb.com/bfs/archive/3d49a02f13261ca2df16a5e83aa645f7e966c6a6.jpg@160w_100h.webp" alt="">
                                <div class="card-mark">
                                    <p class="title">【手書】不/完/全/正/解/：/界/外/科/學</p>
                                    <p class="author">up主：萬象F5鍵</p>
                                    <p class="play">播放：5.3万</p>
                                </div>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <div class="panel">
                            <a href="#" title="【手书】【戴亚】东京夏日相会">
                                <img src="https://i2.hdslb.com/bfs/archive/185b3fea303d6db49dc29c39ee5f84aa0fbf6598.jpg@160w_100h.webp" alt="">
                                <div class="card-mark">
                                    <p class="title">【手书】【戴亚】东京夏日相会</p>
                                    <p class="author">up主：小陆大法好</p>
                                    <p class="play">播放：3.6万</p>
                                </div>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <div class="panel">
                            <a href="#" title="【MMD/舰C】镜头配布 我家大傻哪有这么知性！「桃源恋歌」">
                                <img src="https://i0.hdslb.com/bfs/archive/815a16c70ad7ab474796e6629c629f646edc086f.jpg@160w_100h.webp" alt="">
                                <div class="card-mark">
                                    <p class="title">【MMD/舰C】镜头配布 我家大傻哪有这么知性！「桃源恋歌」</p>
                                    <p class="author">up主：陌路chann</p>
                                    <p class="play">播放：7.4万</p>
                                </div>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <div class="panel">
                            <a href="#" title="【MMD】同学！我要和你老婆一起去桃源乡了！">
                                <img src="https://i0.hdslb.com/bfs/archive/42f74b0602b44bce8ee1841d73c2c63efbd26059.jpg@160w_100h.webp" alt="">
                                <div class="card-mark">
                                    <p class="title">这是一个爱丽丝梦游墨镜的游戏【绅士游戏】</p>
                                    <p class="author">up主：稽夏丶</p>
                                    <p class="play">播放：6.3万</p>
                                </div>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <div class="panel">
                            <a href="#" title="【乐正龙牙戏腔】牵丝戏【原创PV付】">
                                <img src="https://i1.hdslb.com/bfs/archive/80f4236e564bdcea981feef8f273bf6cdda13b34.jpg@160w_100h.webp" alt="">
                                <div class="card-mark">
                                    <p class="title">【乐正龙牙戏腔】牵丝戏【原创PV付】</p>
                                    <p class="author">up主：柔软の棉花p</p>
                                    <p class="play">播放：12.5万</p>
                                </div>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <span class="btn l-btn">三日</span>
                        <span class="btn r-btn">昨日</span>
                    `)
                    _this.$viewsTop.empty().append(_this.$VModule)
                    new Panel()
                    break
                case '三日':
                    _this.$VModule = $(`
                        <div class="views-top clearfix">
                        <div class="panel">
                            <a href="#" title="【MMD】纯情裙摆「tumi式初音」">
                                <img src="http://i2.hdslb.com/bfs/archive/1c9285a6b4348fb00c5a3f0f7f6f982f010f168b.jpg@160w_100h.webp" alt="">
                                <div class="card-mark">
                                    <p class="title">【MMD】纯情裙摆「tumi式初音」</p>
                                    <p class="author">up主：顾霏tadayo</p>
                                    <p class="play">播放：3.7万</p>
                                </div>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <div class="panel">
                            <a href="#" title="【宅语异闻录】从圈地自萌到大众二次元，脱宅离我们有多远？">
                                <img src="http://i1.hdslb.com/bfs/archive/2c0eebb9c26a0175eb078958dac2fbc21803b286.jpg@160w_100h.webp" alt="">
                                <div class="card-mark">
                                    <p class="title">【宅语异闻录】从圈地自萌到大众二次元，脱宅离我们有多远？</p>
                                    <p class="author">up主：尕丶天堂</p>
                                    <p class="play">播放：12.2万</p>
                                </div>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <div class="panel">
                            <a href="#" title="【嘉瑞】妄想感傷代償連盟">
                                <img src="http:////i0.hdslb.com/bfs/archive/3d6e6403d6e0e1f7d6e0509614057a37a8ffc971.jpg@160w_100h.webp" alt="">
                                <div class="card-mark">
                                    <p class="title">【嘉瑞】妄想感傷代償連盟</p>
                                    <p class="author">up主：灼熱射線</p>
                                    <p class="play">播放：1.6万</p>
                                </div>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <div class="panel">
                            <a href="#" title="【乐正龙牙翻唱】Susan说【动点p ft.乐正绫】【原创PV付】">
                                <img src="http://i2.hdslb.com/bfs/archive/e30c3a48e070b6cb6dcfabd4ff58ce45f3cca964.jpg@160w_100h.webp" alt="">
                                <div class="card-mark">
                                    <p class="title">【乐正龙牙翻唱】Susan说【动点p ft.乐正绫】【原创PV付】</p>
                                    <p class="author">up主：动次打次的动点p</p>
                                    <p class="play">播放：1.9万</p>
                                </div>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <div class="panel">
                            <a href="#" title="【凹凸世界手书】冒险书消失了！">
                                <img src="http://i2.hdslb.com/bfs/archive/fb8887ac8b1557828cf398b1754911d4adca6fdf.jpg@160w_100h.webp" alt="">
                                <div class="card-mark">
                                    <p class="title">【凹凸世界手书】冒险书消失了！</p>
                                    <p class="author">up主：盲打鲸鱼唐漠北</p>
                                    <p class="play">播放：1.1万</p>
                                </div>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <div class="panel">
                            <a href="#" title="【王老菊】肉鸽之魂，兄弟之魂！~14">
                                <img src="http://i0.hdslb.com/bfs/archive/d6663f09eea943ffb9ed2e156c38f7ab68805f01.jpg@160w_100h.webp" alt="">
                                <div class="card-mark">
                                    <p class="title">【王老菊】肉鸽之魂，兄弟之魂！~14</p>
                                    <p class="author">up主：怕上火暴王老菊</p>
                                    <p class="play">播放：25.1万</p>
                                </div>
                            </a>
                            <div class="watch-later"></div>
                        </div>
                        <span class="btn l-btn">昨日</span>
                        <span class="btn r-btn">一周</span>
                    `)
                    _this.$viewsTop.empty().append(_this.$VModule)
                    new Panel()
                    break
            }
        })
    }
}
