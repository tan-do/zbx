<!--
 * @Author: tandon
 * @QQ: 673829275
 * @email: tanie@foxmail.com
 * @Date: 2021-12-08 15:56:57
 * @LastEditors: tandon
 * @LastEditTime: 2022-01-19 13:30:56
 * @FilePath: \zbxcool\src\views\About.vue
-->
<template>
    <div class="about">
        <div class="wrapper">
            <Row>
                <Col span="7">
                    <div style="position: relative; left: 50px; top: 100px">
                        <h1>
                            <span class="txt-blue">坐标系 | zbx.cool </span>
                        </h1>
                        <h4 class="mgt-10" style="color: #4e5969">
                            是由tandon个人开发运营的网站，专注于优质内容分享,始于爱好，忠于习惯，不忘初心，方能长久坚持！
                        </h4>
                        <p class="mgt-50" style="position: relative; left: 0px">
                            <Tooltip
                                content="问题反馈,微信扫一扫联系站长"
                                placement="top"
                            >
                                <span
                                    class="span-btn hvr-float-shadow2 h-typed"
                                >
                                    <img
                                        src="../assets/img/weixin-blue.png"
                                        alt=""
                                        class="icon"
                                    />
                                    联系我
                                    <div class="code">
                                        <img
                                            src="../assets/img/wechat.jpg"
                                            alt=""
                                        />
                                    </div>
                                </span>
                            </Tooltip>
                            <Tooltip
                                content="网站不错,支付宝扫码领红包"
                                placement="top"
                            >
                                <span
                                    class="span-btn hvr-float-shadow2 h-typed"
                                    style="margin-left: 50px"
                                >
                                    <img
                                        src="../assets/img/alipay.png"
                                        alt=""
                                        class="icon"
                                    />
                                    红包码
                                    <div class="code">
                                        <img
                                            src="../assets/img/red-code.jpg"
                                            alt=""
                                        />
                                    </div>
                                </span>
                            </Tooltip>
                        </p>

                        <!-- <p class="mgt-10" style="font-size:12px;color:#12141c80">  <span style="position:relative;left:-16px">问题反馈=>扫二维码 </span>   <span style="position:relative;left:26px">支持我们=>扫红包码</span></p> -->
                    </div>
                </Col>
                <Col span="16" offset="1">
                    <div style="position: relative; top: 100px; left: 50px">
                        <img
                            src="../assets/img/about.png"
                            style="width: 100%"
                            alt=""
                            class="img"
                        />
                    </div>
                </Col>
            </Row>

            <Row style="margin-bottom: 50px;margin-top:150px; padding: 0 50px" :gutter="50">
                <Col span="6">
                    <h3>软件发布</h3>
                    <p class="mgt-10">
                        站点不允许受版权保护的软件以公开形式发布，如果发现请联系我们提交版权证书，我们会第一时间处理，请确保您已阅读并理解此政策。
                    </p>
                </Col>
                <Col span="6">
                    <h3>相关条列</h3>
                    <p class="mgt-10">
                        根据二○○二年一月一日《计算机软件保护条例》规定：为了学习和研究软件内含的设计思想和原理，通过安装、显示、传输或者存储软件等方式使用软件的，可以不经软件著作权人许可，不向其支付报酬。
                    </p>
                </Col>
                <Col span="6">
                    <h3>软件存储</h3>
                    <p class="mgt-10">
                        针对未存储在zbx.cool服务器上的下载地址网盘存储的文件提出侵犯通知，请联系该存储网盘服务商提供版权侵犯通知。本站无权删除外部服务器上的文件，因此可能不会处理与该软件相关的版权侵权通知。
                    </p>
                </Col>
                <Col span="6">
                    <h3>版权通知</h3>
                    <p class="mgt-10">
                        受版权证书保护的软件页面我们会删除链接，要联系zbx.cool提交版权侵权通知，您必须使用邮件联系<a href="mailto:tanie@foxmail.com">tanie@foxmail.com</a>。 
                    </p>
                </Col>
            </Row>


            <Row style="margin-top: 0px">
                <Col span="14" offset="5">
                   <Divider><Button shape="circle" to="https://support.qq.com/product/54036" target="_blank" ghost size="large" type="primary">友情链接</Button></Divider>
                </Col>
            </Row>
            <Row style="margin-bottom: 50px; padding: 0 50px" class="friend" :gutter="10">
                <Col span="2" v-for="(item,index) in linkList" :key="index">
                    <a :href="item.url" target="_blank">{{item.title}}</a>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            linkList:[
                {   
                    title:"友链申请",
                    url:"https://support.qq.com/product/54036"
                },                 
                {   
                    title:"掘金主页",
                    url:"https://juejin.cn/user/4318537403344461"
                }, 
                {   
                    title:"thosefree",
                    url:"https://www.thosefree.com/?from=https://www.zbx.cool"
                }, 
            ]
        };
    },
};
</script>

<style lang="scss" scoped>
// .about {
//     width: 100%;
//     min-height: calc(100vh - 168px) !important;
//     background: #eef0f5;
// }

.span-btn {
    padding: 5px 20px;
    // background: #2954D2;
    border: 2px solid #2954d2;
    color: #2954d2;
    border-radius: 50px;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    position: relative;
    .icon {
        width: 26px;
        vertical-align: middle;
    }
    .code {
        position: absolute;
        top: 50px;
        left: -16px;
        width: 150px;
        height: 150px;
        z-index: 9;
        // display: none;
        img {
            width: 100%;
        }
    }
}

.span-btn:hover {
    .code {
        display: block;
    }
}

.friend a:hover{
    color: #2954d2;
}
</style>