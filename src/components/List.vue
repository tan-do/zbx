<template>
    <div class="web">
        <div class="wrapper">
            <p style="font-size: 36px; padding-top: 50px">{{ title }}</p>
            <div style="font-size: 14px; margin-top: 5px; position: relative">
                共收录 {{ list.length }}个分类， {{ totalNum }} 个{{ desc }}
                <div class="switch">
                    <Button
                        shape="circle"
                        @click="addTab"
                        type="primary"
                        ghost
                        size="small"
                        icon="md-create"
                        style="margin-right: 20px"
                        v-if="showManage"
                        >标签</Button
                    >

                    <Button
                        shape="circle"
                        @click="exportLocal"
                        type="primary"
                        ghost
                        size="small"
                        icon="md-cloud-download"
                        style="margin-right: 20px"
                        v-if="showManage"
                        >导出</Button
                    >
                    <Button
                        shape="circle"
                        @click="importLocal"
                        type="primary"
                        ghost
                        size="small"
                        icon="md-cloud-upload"
                        style="margin-right: 20px"
                        v-if="showManage"
                        >导入</Button
                    >
                    <Button
                        shape="circle"
                        @click="resetData"
                        type="primary"
                        ghost
                        size="small"
                        icon="md-settings"
                        style="margin-right: 20px"
                        v-if="showManage"
                        >重置</Button
                    >
                    <i-switch v-model="showManage" @on-change="change" />
                </div>
            </div>
            <draggable
                class="syllable_ul"
                element="ul"
                :list="list"
                :options="{ group: 'title', animation: 150 }"
                :no-transition-on-drag="true"
                @change="change"
                @start="start"
                @end="end"
                :move="move"
                :disabled="!showManage"
            >
                <transition-group
                    type="transition"
                    :name="!drag ? 'list' : null"
                    :css="true"
                >
                    <div class="mgt-20" v-for="(tab, i) in list" :key="i">
                        <h3 class="web-title" :id="'link' + i">
                            {{ tab.tab }} · {{ tab.children.length }} 个
                        </h3>

                        <draggable
                            class="child_ul"
                            :list="tab.children"
                            :disabled="!showManage"
                            element="Row"
                            :options="{ group: 'title', animation: 150 }"
                            :no-transition-on-drag="true"
                            @change="changeChild"
                            @start="startChild"
                            @end="endChild"
                            :move="moveChild"
                        >
                            <Col
                                span="6"
                                v-for="(item, index) in tab.children"
                                :key="index"
                                class="mgb-50"
                            >
                                <a
                                    :href="item.url"
                                    class="hvr-float-shadow"
                                    target="_blank"
                                >
                                    <Tooltip
                                        :content="item.desc"
                                        transfer
                                        max-width="240"
                                        placement="bottom"
                                    >
                                        <div class="card card-pad">
                                            <div
                                                class="card-del"
                                                v-show="showManage"
                                                @click.prevent="
                                                    delItem(i, index)
                                                "
                                            >
                                                
                                                <Icon
                                                    type="md-close-circle"
                                                    size="20"
                                                    color="#2954D2"
                                                />  
                                            </div>
                                            <div class="card-edit"  @click.prevent="editItem(i, item)"  v-show="showManage">
                                              <Icon type="ios-create" color="#2954D2"  size="24"/>
                                            </div>

                                            <div
                                                class="card-tuijian"
                                                v-if="item.isHot"
                                            >
                                                <img
                                                    src="../assets/img/tuijian.png"
                                                    alt=""
                                                />
                                            </div>

                                            <div class="card-title">
                                                <img
                                                    v-lazy="item.logo"
                                                    alt=""
                                                    class="card-img"
                                                />

                                                <p
                                                    style="
                                                        text-align: left;
                                                        position: relative;
                                                        left: 10px;
                                                    "
                                                >
                                                    {{ item.title }}
                                                    <Tag
                                                        color="#2954D2"
                                                        v-if="item.type == 1"
                                                        style="margin-left: 2px"
                                                        size="mini"
                                                        >官网</Tag
                                                    >
                                                    <Tag
                                                        color="#19BE6B"
                                                        v-if="item.type == 2"
                                                        style="margin-left: 2px"
                                                        size="mini"
                                                        >镜像</Tag
                                                    >
                                                </p>
                                                <p
                                                    style="
                                                        text-align: left;
                                                        position: relative;
                                                        left: 8px;
                                                    "
                                                >
                                                    <Rate
                                                        allow-half
                                                        v-model="item.star"
                                                        disabled
                                                    />
                                                </p>
                                            </div>

                                            <p
                                                class="
                                                    mgt-10
                                                    card-desc
                                                    ellipsis
                                                "
                                            >
                                                {{ item.desc }}
                                            </p>
                                        </div>
                                    </Tooltip>
                                </a>
                            </Col>

                            <Col span="6" class="mgb-50" v-show="showManage">
                                <div
                                    class="card2 card-pad"
                                    style="height: 127px"
                                    @click="addTool(i)"
                                >
                                    <div style="margin-top: 0px">
                                        <Icon type="ios-add" size="60" />
                                    </div>
                                    <p>添加项目</p>
                                </div>
                            </Col>
                        </draggable>
                    </div>
                </transition-group>
            </draggable>
            <div class="aside" v-if="0">
                <Anchor show-ink scroll-offset="200">
                    <AnchorLink
                        v-for="(item, index) in list"
                        :href="'#link' + index"
                        :title="item.tab"
                        :key="index"
                    />
                </Anchor>
                <!-- 
                <Button
                    type="primary"
                    shape="circle"
                    class="mgt-50"
                    icon="ios-add-circle"
                    @click="addTool"
                ></Button> -->
            </div>
        </div>

        <Modal
            v-model="showAdd"
            :title="modalTitle"
            :transfer="true"
            :lock-scroll="false"
            footer-hide
        >
            <Form
                ref="formValidate"
                :model="formValidate"
                :rules="ruleValidate"
                :label-width="80"
            >
                <FormItem label="logo" prop="">
                    <Input
                        v-model="formValidate.logo"
                        placeholder="请输入网址"
                    ></Input>
                    <!-- <Select v-model="formValidate.logo">
                        <Avatar
                            :src="formValidate.logo"
                            slot="prefix"
                            size="small"
                        />
                        <Option
                            v-for="(item, index) in selectList"
                            :value="item.url"
                            :key="index"
                        >
                            <Avatar :src="item.url" size="small"> </Avatar>
                            {{ item.title }}
                        </Option>
                    </Select> -->
                </FormItem>
                <!-- <FormItem label="类目" prop="">
                    <Select v-model="formValidate.tab" placeholder="类目">
                        <Option
                            v-for="(item, index) in list"
                            :value="index"
                            :key="index"
                        >
                            {{ item.tab }}
                        </Option>
                    </Select>
                </FormItem> -->
                <FormItem label="网址" prop="">
                    <Input
                        v-model="formValidate.url"
                        placeholder="请输入网址"
                    ></Input>
                </FormItem>
                <FormItem label="标题" prop="">
                    <Input
                        v-model="formValidate.title"
                        placeholder="请输入标题"
                    ></Input>
                </FormItem>

                <FormItem label="详情" prop="">
                    <Input
                        v-model="formValidate.desc"
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 5 }"
                        placeholder="请输入描述信息"
                    ></Input>
                </FormItem>

                <FormItem label="评分" prop="">
                    <Rate allow-half v-model="formValidate.star" />
                </FormItem>

                <FormItem style="text-align: right">
                    <Button
                        @click="handleReset('formValidate')"
                        style="margin-right: 10px"
                        >重置</Button
                    >
                    <Button type="primary" @click="handleSubmit('formValidate')"
                        > {{submitType == 'add' ? '添加' : '编辑'}}</Button
                    >
                </FormItem>
            </Form>
        </Modal>
        <Modal
            v-model="showImport"
            title="导入本地数据"
            :transfer="true"
            :lock-scroll="false"
            footer-hide
            width="400px"
        >
            <Form
                ref="formImport"
                :model="formImport"
                :rules="ruleImport"
                :label-width="80"
            >
                <Upload type="drag" :before-upload="beforeUpload" action="">
                    <div style="padding: 20px 0">
                        <Icon
                            type="ios-cloud-upload"
                            size="52"
                            style="color: #3399ff"
                        ></Icon>
                        <p v-if="file">{{ file.name }}</p>
                        <p v-else>拖拽或者点击选择文件</p>
                    </div>
                </Upload>

                <FormItem style="text-align: right">
                    <Button type="primary" @click="handleImport('formImport')"
                        >导入</Button
                    >
                </FormItem>
            </Form>
        </Modal>

        <Modal
            v-model="showTab"
            title="编辑分类标签"
            :transfer="true"
            :lock-scroll="false"
            footer-hide
        >
            <Form ref="formTab" :model="formTab" :rules="ruleValidate">
                <Tabs v-model="curName" @on-click="clickTab">
                    <TabPane label="添加标签" name="name1"> </TabPane>
                    <TabPane label="编辑标签" name="name2"> </TabPane>
                    <TabPane label="删除标签" name="name3"> </TabPane>
                </Tabs>

                <div v-show="curName == 'name1'" class="tab-div">
                    <FormItem style="text-align: right">
                        <Input
                            v-model="formTab.tab"
                            placeholder="请输入tab标题"
                        ></Input>
                    </FormItem>
                    <FormItem style="text-align: right">
                        <Button type="primary" @click="handleTab('formTab')"
                            >添加</Button
                        >
                    </FormItem>
                </div>

                <div v-show="curName == 'name2'" class="tab-div">
                    <FormItem prop="">
                        <Select v-model="formTab.index" placeholder="选择标签">
                            <Option
                                v-for="(item, index) in list"
                                :value="index"
                                :key="index"
                            >
                                {{ item.tab }}
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem style="text-align: right">
                        <Input
                            v-model="formTab.edit"
                            placeholder="请输入便签标题"
                        ></Input>
                    </FormItem>
                    <FormItem style="text-align: right">
                        <Button type="primary" @click="handleTab('formTab')"
                            >编辑</Button
                        >
                    </FormItem>
                </div>
                <div v-show="curName == 'name3'" class="tab-div">
                    <FormItem prop="">
                        <Select v-model="formTab.index" placeholder="选择标签">
                            <Option
                                v-for="(item, index) in list"
                                :value="index"
                                :key="index"
                            >
                                {{ item.tab }}
                            </Option>
                        </Select>
                    </FormItem>

                    <FormItem style="text-align: right">
                        <Button type="primary" @click="handleTab('formTab')"
                            >删除</Button
                        >
                    </FormItem>
                </div>
            </Form>
        </Modal>

        <BackTop></BackTop>
    </div>
</template>

<script>
import { cdn } from "../assets/js/cdn";
import { select } from "../assets/js/select";
import draggable from "vuedraggable";
export default {
    name: "",
    components: {
        draggable,
    },
    props: {
        name: {
            type: String,
            default: "web",
        },
        title: {
            type: String,
            default: "前端工具",
        },
        desc: {
            type: String,
            default: "前端工具",
        },
    },
    data() {
        return {
            jsonName: this.name,
            cdn: cdn,
            showManage: false, //显示操作
            showAdd: false, //弹出框
            showImport: false,
            showTab: false,

            selectList: [],

            list: [],
            isLocal: false,
            curTab: 0,
            modalTitle: "",
            submitType:"",
            formValidate: {
                logo: "",
                url: "",
                title: "",
                desc: "",
                star: "",
                date: "",
            },

            file: "",
            formImport: {
                json: "",
            },

            curName: "name1",
            formTab: {
                tab: "",
                index: 0,
                edit: "",
            },
            ruleValidate: {
                tab: [
                    {
                        required: true,
                        message: "内容不能为空",
                        trigger: "blur",
                    },
                ],
            },
            childTab: [],
        };
    },
    computed: {
        totalNum: function () {
            let arr = [0];
            this.list.forEach((item) => {
                arr.push(item.children.length);
            });

            return arr.reduce(function (prev, curr) {
                return prev + curr;
            });
        },
    },

    mounted() {
        this.getlist();
    },

    methods: {
        getlist() {
            // let obj = select;

            // Object.keys(obj).forEach((key) => {
            //     this.selectList.push({
            //         title: key,
            //         url: obj[key],
            //     });
            // });
            localforage
                .getItem(`${this.jsonName}List`)
                .then((value) => {
                    // 当离线仓库中的值被载入时，此处代码运行
                    console.log(value);
                    if (value) {
                        this.list = value;
                    } else {
                        this.$api.getList(this.jsonName).then((res) => {
                            this.list = res;
                        });
                    }
                })
                .catch(function (err) {
                    // 当出错时，此处代码运行
                    console.log(err);
                });
        },
        addTool(i) {
            this.curTab = i;
            this.modalTitle = this.list[this.curTab].tab;
            this.handleReset("formValidate");
            this.showAdd = true;
            this.submitType = 'add'
        },
        addTab() {
            this.showTab = true;
        },

        delItem(curTab, index) {
            console.log(index);
            this.list[curTab].children.splice(index, 1);
            localforage
                .setItem(`${this.jsonName}List`, this.list)
                .then((value) => {
                    // 当值被存储后，可执行其他操作
                    console.log(value);
                })
                .catch(function (err) {
                    // 当出错时，此处代码运行
                    console.log(err);
                });
        },
        editItem(curTab, item) {
            this.curTab = curTab;
            this.modalTitle = this.list[this.curTab].tab;
            this.formValidate =  item
            this.showAdd = true;
            this.submitType = 'edit'
        },


        change(status) {
            console.log(status);
        },
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    var now = dayjs().format("YYYY年MM月DD日");
                    this.formValidate.date = now;
                    console.log(this.formValidate);

                    if(this.submitType == 'add'){
                        this.list[this.curTab].children.unshift(this.formValidate);
                    }

                    localforage
                        .setItem(`${this.jsonName}List`, this.list)
                        .then((value) => {
                            // 当值被存储后，可执行其他操作
                            console.log(value);
                            this.handleReset("formValidate");
                            this.$Message.success("操作成功");
                            this.showAdd = false;
                        })
                        .catch(function (err) {
                            // 当出错时，此处代码运行
                            console.log(err);
                        });
                } else {
                    this.$Message.error("Fail!");
                }
            });
        },
        handleReset(name) {
            this.$refs[name].resetFields();
            this.formValidate = {
                logo: "",
                url: "",
                title: "",
                desc: "",
                star: "",
                date: "",
            };
        },
        resetData() {
            localforage
                .clear()
                .then(() => {
                    this.showManage = false;
                    this.getlist();
                })
                .catch(function (err) {
                    // 当出错时，此处代码运行
                    console.log(err);
                });
        },
        exportLocal() {
            localforage
                .getItem(`${this.jsonName}List`)
                .then((value) => {
                    if (!value) {
                        return this.$Message.info("无本地数据");
                    }
                    var file = new File(
                        [JSON.stringify(value)],
                        `${this.jsonName}List.json`,
                        { type: "text/plain;charset=utf-8" }
                    );
                    saveAs(file);
                })
                .catch(function (err) {
                    // 当出错时，此处代码运行
                    console.log(err);
                });
        },
        importLocal() {
            this.showImport = true;
        },
        beforeUpload(file) {
            console.log(file);
            this.file = file;
            var reader = new FileReader();
            reader.onload = (event) => {
                // 文件里的文本会在这里被打印出来
                console.log(event.target.result);
                this.formImport.json = event.target.result;
            };

            reader.readAsText(file);
            return false;
        },
        handleImport(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    console.log(this.formImport.json);

                    localforage
                        .setItem(
                            `${this.jsonName}List`,
                            JSON.parse(this.formImport.json)
                        )
                        .then((value) => {
                            // 当值被存储后，可执行其他操作
                            console.log(value);
                            this.getlist();
                        })
                        .catch(function (err) {
                            // 当出错时，此处代码运行
                            console.log(err);
                        });
                    this.$Message.success("导入成功");
                    this.showImport = false;
                } else {
                    this.$Message.error("Fail!");
                }
            });
        },

        clickTab(name) {
            this.formTab = {
                tab: "",
                index: 0,
                edit: "",
            };
        },

        handleTab(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    console.log(this.curName);
                    console.log(this.formTab);

                    if (this.curName == "name1") {
                        this.list.push({
                            tab: this.formTab.tab,
                            children: [],
                        });
                    } else if (this.curName == "name2") {
                        this.list[this.formTab.index].tab = this.formTab.edit;
                    } else if (this.curName == "name3") {
                        this.list.splice(this.formTab.index, 1);
                    }

                    localforage
                        .setItem(`${this.jsonName}List`, this.list)
                        .then((value) => {
                            // 当值被存储后，可执行其他操作
                            console.log(value);
                            this.getlist();
                        })
                        .catch(function (err) {
                            // 当出错时，此处代码运行
                            console.log(err);
                        });
                    // this.$Message.success("添加成功");
                    this.showTab = false;
                } else {
                    // this.$Message.error("Fail!");
                }
            });
        },

        end(evt) {
            this.drag = true;
            localforage
                .setItem(`${this.jsonName}List`, this.list)
                .then((value) => {
                    // 当值被存储后，可执行其他操作
                    console.log(value);
                    this.getlist();
                })
                .catch(function (err) {
                    // 当出错时，此处代码运行
                    console.log(err);
                });
        },

        endChild(evt) {
            this.drag = true;
            localforage
                .setItem(`${this.jsonName}List`, this.list)
                .then((value) => {
                    // 当值被存储后，可执行其他操作
                    console.log(value);
                    this.getlist();
                })
                .catch(function (err) {
                    // 当出错时，此处代码运行
                    console.log(err);
                });
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/page.scss";
</style>