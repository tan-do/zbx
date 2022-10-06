<template>
    <div >
        <div class="top-tip" v-if="0">
            <div class="wrapper">
                坐标系 - 发现更酷的前端
                <!-- <Button ghost shape="circle">查看详情</Button> -->
            </div>
        </div>
        <header :style="{background:headerBg}">
            <div class="wrapper">
                <div class="header-logo">
                    <img src="@/assets/img/xyz.png" alt="" style="vertical-align: middle;" />
                     <span class="txt-blue2">坐标系 </span>
                </div> 
                <ul class="header-nav">
                    <li> <router-link to="/">首页</router-link></li>
                    <li> <router-link to="/web">前端工具</router-link></li>
                    <!-- <li> <router-link to="/site">酷站大全</router-link></li>
                    <li> <router-link to="/soft">软件应用</router-link></li> -->
                    <li> <router-link to="/about">关于</router-link></li>

                    <!-- <li><a href="">关于</a></li> -->
                </ul>
            </div>
        </header>
        <div style="margin-top: 48px"></div>
        <div class="view">
            <router-view></router-view>
        </div>

        <div class="footer">
            
            <p class="mgt-30"> 坐标系-发现更酷。</p>
            <p class="mgt-0"><router-link class="link" to="/about">关于我们</router-link> | <a target="_blank" class="link" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=C39qZWJuS21kc2ZqYmclaGRm" style="text-decoration:none;">联系邮箱: tanie@foxmail.com</a> </p>
            <p> Copy Right©zbx.cool,All Rights Reserved.皖ICP备2021018040号 </p>
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
            headerBg:'#EEF0F5'
        };
    },
    watch:{
        $route(to,from){
            console.log(to.path);      
            if(to.path=='/about'){
                this.headerBg = "#fff";
               
            }else{
                this.headerBg = '#EEF0F5'
            }
        }
    },
    mounted() {
        // this.getResize();
        // this.getSide();
        if(this.$route.name == 'about'){
            this.headerBg = '#fff'
        }else{
            this.headerBg = '#EEF0F5'
        }

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
$height:60px;
header {
    width: 100%;
    height: $height;
    color: #fff;
    background:#2954D2;
    position: fixed;
    top: 0px;
    z-index: 999;
    line-height: $height;
    border-bottom: 1px solid rgba(0,0,0,.08);
    .header-logo {
        width: 200px;
        height: $height;
        text-align: left;
        float: left;
        font-size: 18px;
        font-weight: 600;
        color: #515a6e;
        img {
            height: 32px;
            display: inline-block;
        }
        span{
            padding-left:5px;
            position: relative;
            top:5px
        }
    }

    ul.header-nav {
        // width: 450px;
        float: right;
        margin-right: 20px;
    }
    ul.header-nav li {
        float: left;
        font-weight: 600;
        margin-left: 50px;
        text-align: right;
       
        a{
            font-size: 13px;
            font-weight: normal;
            color: #515a6e;
            font-weight: 600;
            padding: 20px 0;
        }
        a:hover,.router-link-exact-active{
           color:#2954D2;
           
           border-bottom: 2px solid #2954D2;
        }
 
    }
}
.view {
    width: 100%;
    min-height: calc(100vh - 168px) !important;
    background: transparent;
}
.footer {
    width: 100%;
    height: 120px;
    font-size: 14px;
    background: #EEF0F5;
    overflow: hidden;
    p{
        color: #12141c80;
        .link{
             color: #12141c80
        }
        .link:hover{
            color: #2954D2
        }
    };
}
</style>
