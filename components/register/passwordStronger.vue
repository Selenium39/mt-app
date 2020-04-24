<template>
    <div id="container">
        <el-row>
            <el-col :span="6" :offset="1">
                <el-progress :percentage="onePercentage" :color="oneCustomColors" :format="oneFormat" :stroke-width="3"></el-progress>
            </el-col>
            <el-col :span="6" :offset="1">
                <el-progress :percentage="twoPercentage" :color="twoCustomColors" :format="twoFormat" :stroke-width="3"></el-progress>
            </el-col>
            <el-col :span="6" :offset="1">
                <el-progress :percentage="ThreePercentage" :color="ThreeCustomColors" :format="ThreeFormat" :stroke-width="3"></el-progress>
            </el-col>
            <el-col :span="2" :offset="1" style="line-height: 15px;">
                {{content}}
            </el-col>
        </el-row>
    </div>
</template>
 
<script>
    export default {
        name: "PasswordStronger",
        model: {
            event: 'change',
            prop: 'password'
        },
        props: {
            //密码
            password: {
                type: [String,Boolean,Number,Object],
                required: true,
                default: "",
            },
        },
        watch:{
            password(newValue){
                const mode = this.checkPasswordStrength(newValue);
                //逻辑处理
                switch (mode) {
                    //初始化状态
                    case 0:
                        this.content = '';
                        this.onePercentage = 0;
                        this.twoPercentage = 0;
                        this.ThreePercentage = 0;
                        break;
                    case 1:
                        this.content = '弱';
                        this.onePercentage = 100;
                        this.twoPercentage = 0;
                        this.ThreePercentage = 0;
                        break;
                    case 2:
                        this.content = '中';
                        this.onePercentage = 100;
                        this.twoPercentage = 100;
                        this.ThreePercentage = 0;
                        break;
                    case 3:
                        this.content = '中';
                        this.onePercentage = 100;
                        this.twoPercentage = 100;
                        this.ThreePercentage = 0;
                        break;
                    default:
                        this.content = '高';
                        this.onePercentage = 100;
                        this.twoPercentage = 100;
                        this.ThreePercentage = 100;
                        break;
                }
            }
        },
        data(){
            return{
                content:"",
                onePercentage:0,
                twoPercentage:0,
                ThreePercentage:0,
                oneCustomColors: [
                    {color: '#f56c6c', percentage: 100}
                ],
                twoCustomColors: [
                    {color: '#e6a23c', percentage: 100}
                ],
                ThreeCustomColors: [
                    {color: '#67c23a', percentage: 100}
                ]
            }
        },
        methods:{
            oneFormat() {
                return "";
            },
            twoFormat() {
                return "";
            },
            ThreeFormat() {
                return "";
            },
            //密码强度验证
            checkPasswordStrength(value) {
                let mode = 0;
                //正则表达式验证符合要求的
                if (value.length < 1) return mode;
                if (/\d/.test(value)) mode++; //数字
                if (/[a-z]/.test(value)) mode++; //小写
                if (/[A-Z]/.test(value)) mode++; //大写
                if (/\W/.test(value)) mode++; //特殊字符
                return mode;
            }
        }
    }
</script>
 
<style>
    .el-progress__text {
        display: none;
    }
    .el-progress-bar {
        padding-right: 0px;
        margin: 0px;
    }
</style>