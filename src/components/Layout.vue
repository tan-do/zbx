<template>
    <div>
        <div class="top-tip">
            <div class="wrapper">
                坐标系 - 发现更酷
                <!-- <Button ghost shape="circle">查看详情</Button> -->
            </div>
        </div>
        <header>
            <div class="wrapper">
                <div class="header-logo">
                    <img :src="cdn.logo" alt="" style="vertical-align: middle;" />坐标系
                </div>
                <ul class="header-nav">
                    <li> <router-link to="/">首页</router-link></li>
                    <li> <router-link to="/web">前端工具</router-link></li>
                    <!-- <li> <router-link to="/site">酷站大全</router-link></li>
                    <li> <router-link to="/soft">软件应用</router-link></li> -->
                    <li> <router-link to="/about">关于</router-link></li>

                
                </ul>
            </div>
        </header>
        <div style="margin-top: 108px"></div>
        <div class="view">
            <router-view></router-view>
        </div>

        <div class="footer">
            坐标系-发现更酷。<br />Copy Right©zbx.cool,All Rights
            Reserved.<a target="_blank" href="https://beian.miit.gov.cn/">皖ICP备2021018040号</a>
        </div>
        
    </div>
</template>

<script>
import { cdn } from "../assets/js/cdn";

export default {
    name: "",
    data() {
        return {
            cdn: cdn,
        };
    },
    mounted() {
        // this.getResize();
        // this.getSide();
    },

    methods: {},
};
</script>
<style lang="scss" module src="@/assets/css/export.scss"></style>
<style lang="scss" scoped>
.top-tip {
    width: 100%;
    height: 48px;
    background: #2954D2;
    font-weight: 500;
    font-size: 16px;
    line-height: 48px;
    color: #fff;
    position: fixed;
    top: 0;
    z-index: 999;
}

header {
    width: 100%;
    height: 60px;
    background: #fff;
    position: fixed;
    top: 48px;
    z-index: 999;
    line-height: 60px;
    opacity: 0.8;

    .header-logo {
        width: 400px;
        height: 60px;
        text-align: left;
        float: left;
        font-size: 22px;
        font-weight: 600;
        color: #000;
        img {
            height: 60px;
            display: inline-block;
        }
    }

    ul.header-nav {
        // width: 550px;
        float: right;
        margin-right: 50px;
    }
    ul.header-nav li {
        float: left;
        font-size: 15px;
        font-weight: 600;
        margin-left: 50px;
        text-align: right;


    }
            a:hover,.router-link-exact-active{
           color:#2954D2;
           padding: 10px 0;
           //border-bottom: 2px solid #2954D2;
        }
}
.view {
    width: 100%;
    min-height: calc(100vh - 252px) !important;
    background: transparent;
}
.footer {
    width: 100%;
    height: 120px;
    font-size: 14px;
    color: #12141c80;
    background: #EEF0F5;
    padding-top: 40px;
}
</style>
