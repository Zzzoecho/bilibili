require('./src/css/nav.css')
require('./bilibili.css')
import Panel from './src/js/panel'
var Carousel = require('./src/js/carousel')
var Rotation = require('./src/js/carousel-peas')
import {Dropdown, dramaRank} from './src/js/dropdown'
import DSwitch from './src/js/DSwitch'
import showModule from './src/js/showModule'
import dramaModule from './src/js/dramaModule'
import Easycarousel from './src/js/easyCarousel'
import {livingTab, cartoonTab, trendTab, rankTab, timeTab} from './src/js/tab'
import elevator from './src/js/elevator'

Rotation.init($('.carousel'))
Carousel.init($('.carousel-module'))
new Easycarousel()
new Panel()
showModule()
dramaModule()

new Dropdown($('.common'))
new Dropdown($('.drama'))
dramaRank()
new DSwitch($('.common'))

livingTab()
cartoonTab()
trendTab()
rankTab()
timeTab()

elevator()