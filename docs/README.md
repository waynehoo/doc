---
home: true
heroImage: '/vuepress/topic.gif'
faceImage: '/vuepress/head.png'
heroImageStyle: {
  maxWidth: '800px',
  width: '100%',
  height: '15%',,
  display: block,
  margin: '16% auto -18% auto',
  //border: '1px dashed #000',
  box-shadow: '8px 8px 20px #022',
  borderRadius: '1rem',
  background: 'rgba(0, 0, 0, 0.8) none repeat scroll !important',
}
isShowTitleInHome: true
actionText: '开始学习'
actionLink: /views/
features:
- title: 
  details: 好好学习
- title: 
  details: 2021  
- title: 
  details: 天天向上
footer: MIT Licensed | Copyright © 2018-present Evan You
---

<!-- <Clock/> -->

<!-- > 博客改自 [https://github.com/zpj80231/znote](https://github.com/zpj80231/znote)  感谢 zpj80231  -->
<!-- <CanvasNest color='0,23,255' zIndex='-2'></CanvasNest> -->

<script>
  
</script>

<style>
.home .content__default:not(.custom) {
  max-width: 100% !important;
  margin: 0  !important;
  padding: 0 !important;
}
.home .hero h1 {
    display: none;
}
.home img {
   transform: scale(0.8,0.8) !important;
   transition: all 1s!important;
}
.home img:hover {
   //transform: scale(1)!important;
   transition:all 2s !important;
}
/* 阻止描述冒泡 */
.home .hero .description{
    pointer-events: none;
    cursor: default;
    opacity: 0.6;
}
.home .features {
    text-align: center;
}
.home .feature p {
    color: #476582 !important;
}
.home .hero .description {
    color: #476582 !important;
}
.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    min-height: 10vh;
    background: transparent none repeat scroll!important;
    position: fixed;
    top: -120%;
    left: -1%;
}

@media screen and (max-width: $MQMobile){
  .clock {
    margin-top: -35%
  }
}

@media screen and (max-width: 480px){
  .wrap {
    top:-107%;
    transform: scale(0.68,0.58);
  }
  .home img {    
    margin: 24% auto -6% auto !important;
  }
  .home .feature {
    width: 100%;
    text-align: center;
    color: rgb(71, 101, 130) !important;
    padding: 5px !important;
    margin: -12px;
    margin-left: 0px;
  }
  .clock {
    margin-top: 0%;
    background: rgba(0, 0, 0, 0) none repeat scroll !important;
    background-image: url() !important;
  }
}
.clock {
  transition: all 2s;
}
.wrap {
  transition: all 2s;
}
.clock:hover {
  transform: scale(0.55) !important;
  transition: all 2s;
}
.wrap:hover {
  transform: scale(1.15) !important;
  transition: all 2s;
}

</style>

