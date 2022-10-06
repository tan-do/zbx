<template>
    <div>
        <section class="main bg">
            <div class="wrapper">
                <h1 class="h-title">最近编码的项目</h1>
                <p class="p-desc"></p>
                <a
                    href="https://juejin.cn/user/4318537403344461"
                    target="_blank"
                    class="hvr-float-shadow h-typed"
                >
                    &lt; &nbsp;掘金进行时 &nbsp;/&gt;</a
                >
                <div style="margin-top:50px">
                    <img :src="cdn.vscode" style="width:1000px" alt="">
                </div>
            </div>
        </section>
        <div class="pad-bg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#fff"
                    fill-opacity="1"
                    d="M0,96L1440,224L1440,0L0,0Z"
                ></path>
            </svg>
        </div>

        <section class="mini pc">
            <div class="wrapper">
                <h1 class="h-title">中后台管理系统</h1>
                <p class="p-desc">做过的一些后台管理系统</p>
                <Row gutter="50">
                    <Col span="8">
                        <a
                            href="https://zcent.com/SpiritualPay/index.html"
                            target="_blank"
                            class="hvr-float-shadow"
                        >
                            <div class="card">
                                <img
                                    class="admin"
                                    :src="cdn.lingxinpay"
                                    alt=""
                                />
                            </div>
                        </a>
                    </Col>

                    <Col span="8">
                        <a href="https://adm.hqzl.icu/" target="_blank" class="hvr-float-shadow">
                            <div class="card" style="margin-top: -6px">
                                <img
                                    class="admin"
                                    :src="cdn.jutou"
                                    alt=""
                                />
                            </div>
                        </a>
                    </Col>
                    <Col span="8">
                        <a
                            href="https://admin.lingxinpay.com/#/"
                            target="_blank"
                            class="hvr-float-shadow"
                        >
                            <div class="card">
                                <img class="admin" :src="cdn.zhongxin" alt="" />
                            </div>
                        </a>
                    </Col>
                </Row>
            </div>
        </section>

        <section class="list">
            <div class="wrapper">
                <h1>项目前端技术桟简介</h1>
                <p class="p-desc">Vue2.0中后台管理系统 + Uniapp跨平台</p>
                <Row gutter="20">
                    <Col span="6">
                        <a
                            href="https://www.iviewui.com/"
                            class="hvr-float-shadow"
                            target="_blank"
                        >
                            <div class="card card-pad shadow-cloud">
                                <h3>
                                    <img
                                        :src="cdn.iview_icon"
                                        alt=""
                                        class="ver-mid"
                                    />ViewUI 中后台组件库
                                </h3>
                                View UI®，即原先的 iView，是一套基于 Vue.js
                                的开源 UI 组件库，主要服务于 PC
                                界面的中后台产品。
                                丰富的组件和功能，满足绝大部分网站场景
                                提供开箱即用的 Admin 系统 和 高阶组件库，
                            </div>
                        </a>
                    </Col>
                    <Col span="6">
                        <a
                            href="https://element.eleme.cn/#/zh-CN"
                            class="hvr-float-shadow"
                            target="_blank"
                        >
                            <div class="card card-pad shadow-cloud">
                                <h3>
                                    <img
                                        :src="cdn.ele_icon"
                                        alt=""
                                        class="ver-mid"
                                    />Element UI组件库
                                </h3>
                                Element，一套为开发者、设计师和产品经理准备的基于
                                Vue 2.0
                                的桌面端组件库,官方也更新了基于Vue3.0的Element
                                Plus。与iview一样,主要服务于 PC
                                界面的中后台产品。
                            </div>
                        </a>
                    </Col>

                    <Col span="6">
                        <a
                            href="https://uniapp.dcloud.io/"
                            class="hvr-float-shadow"
                            target="_blank"
                        >
                            <div class="card card-pad shadow-cloud">
                                <h3>
                                    <img
                                        :src="cdn.uni_icon"
                                        alt=""
                                        class="ver-mid"
                                    />Uniapp跨平台应用框架
                                </h3>
                                uni-app
                                是一个开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/快手/钉钉/淘宝）、快应用等多个平台。
                            </div>
                        </a>
                    </Col>

                    <Col span="6">
                        <a
                            href="https://youzan.github.io/vant-weapp/#/home"
                            class="hvr-float-shadow"
                            target="_blank"
                        >
                            <div class="card card-pad shadow-cloud">
                                <h3>
                                    <img
                                        :src="cdn.youzan_icon"
                                        alt=""
                                        class="ver-mid"
                                    />小程序vant-weapp
                                </h3>
                                Vant 是有赞前端团队开源的移动端组件库，Vant
                                对内承载了有赞所有核心业务，对外服务十多万开发者，是业界主流的移动端组件库之一。
                                目前 Vant 官方提供了 Vue 版本和微信小程序版本。
                            </div>
                        </a>
                    </Col>
                </Row>
            </div>
        </section>

        <section class="uniapp" style="margin-top: 20px">
            <div class="wrapper">
                <h1 class="h-title">Uniapp跨平台</h1>
                <p class="p-desc">一套代码兼容小程序 + h5公众号</p>
                <Row gutter="50">
                    <Col span="20" offset="2">
                        <div class="card hvr-float-shadow">
                            <img style="width: 100%" :src="cdn.uniapp" alt="" />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>

        <section class="mini" style="margin-top: 100px">
            <div class="wrapper">
                <h1 class="h-title">小程序案例</h1>
                <p class="p-desc">一些开发过的小程序</p>
                <Row>
                    <Col span="20" offset="2">
                        <div>
                            <video
                                muted="muted"
                                playsinline=""
                                x5-video-player-fullscreen="false"
                                autoplay="autoplay"
                                loop="loop"
                                class="tan_video case"
                            >
                                <source :src="cdn.banner" type="video/mp4" />
                                浏览器版本太低，不支持本视频播放，请升级浏览器
                            </video>
                        </div>
                    </Col>
                </Row>

                <Row gutter="50" style="margin-top:100px">
                    <Col span="5" offset="2">
                        <div
                            class="card hvr-float shadow-cloud"
                            style="margin-top: 60px"
                        >
                            <img
                                style="width: 100%"
                                :src="cdn.juyimei"
                                alt=""
                            />
                        </div>
                    </Col>
                    <Col span="6" offset="2">
                        <div class="card hvr-float shadow-cloud">
                            <img style="width: 100%" :src="cdn.lewei" alt="" />
                        </div>
                    </Col>
                    <Col span="5" offset="2">
                        <div
                            class="card hvr-float shadow-cloud"
                            style="margin-top: 60px"
                        >
                            <img style="width: 100%" :src="cdn.lejia" alt="" />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>

        <BackTop></BackTop>
    </div>
</template>

<script>
import { cdn } from "../assets/js/cdn";
export default {
    name: "",
    data() {
        return {
            value2: 0,
            cdn: cdn,
        };
    },
    mounted() {
        console.log("cdb===", this.cdn);
    },
};
</script>

<style lang="scss" scoped>
.h-title {
    font-size: 50px;
    font-weight: 600;
    line-height: 1.5;
    color: rgba(18, 20, 28);
    padding-top: 30px;
    width: 100%;
}
.p-desc {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.8;
    color: rgba(18, 20, 28, 0.5);
    margin-bottom: 30px;
    width: 100%;
}

.main {
    width: 100%;
    height: 420px;
    background: #fff;
    //background: #333 linear-gradient(180deg, #ffffff, #f3f7fc);
    position: relative;

    a {
        padding: 15px 40px;
        font-size: 20px;
        color: #fff;
        background: #2954d2;
        border-radius: 10px;
        font-weight: 600;
    }


}
    .case {
        width: 920px;
        min-height: 560px;
        // background: #000;
    }
.pad-bg {
    width: 100%;
    height: 460px;
    background: #eef0f5;
}

.list,
.pc,
.mini {
    background: #eef0f5;
    padding: 20px 0 80px 0;
}

.card {
    width: 100%;
    // background-color: #f3f5f8;
    // // background-image: url(data:image/jpg;base64,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),linear-gradient(180deg,#f3f5f8,#fff 178px,#fff);
    // background-position: 100% 0;
    // background-repeat: no-repeat;
    // border: 2px solid #fff;
    // box-shadow: 8px 8px 20px 0 rgb(55 99 170 / 10%), -8px -8px 20px 0 #fff;
    .admin {
        width: 100%;
    }
    h3 {
        margin-bottom: 10px;
    }
}

.card-pad {
    padding: 20px;
    h3 {
        font-weight: 600;
        font-size: 16px;
    }
    img {
        display: inline-block;
        height: 30px;
        margin-right: 10px;
    }
}
</style>