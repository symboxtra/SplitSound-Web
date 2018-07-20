<template>
    <div :class="{ android: OSName === 'Android', ios: OSName === 'iOS', linux: OSName === 'Linux', mac: OSName === 'Mac OS', windows: OSName === 'Windows'}">
        <div><h1>{{ OSName }}</h1>
            <button class="btn btn-dark">Download</button>
        </div>
        <img src="../assets/images/example2.png" alt="Desktop PlaceHolder" v-if="isDesktop">
    </div>
</template>

<script>
    export default {
        name: "DownloadElement",
        props: ['osname'],
        computed: {
            OSName() {
                return this.osname;
            }
        },
        methods:{
            isDesktop(){
                return (this.OSName() === 'Linux' | this.OSName() === 'Mac OS'| this.OSName() === 'Windows');
            }
        }
    }
</script>

<style scoped>
    .btn {
        font-size: 25px;
    }

    img {
        padding-top: 5%;
        max-width: 70%;
        max-height: 70%;
    }

    .android {
        background-color: #A4C639;
        /*android green*/
    }

    .ios {
        background-color: #8E8E93;
        /*ios gray*/
    }

    .linux {
        background-color: #FFFF00;
        /*could not find one for linux*/
    }

    .mac {
        background-color: #8E8E91;
        /*mac gray*/
    }

    .windows {
        background-color: #2D89Ef;
        /*Windows 10 blue*/
    }
</style>