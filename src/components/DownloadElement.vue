<template>
    <div :class="{ android: OSName === 'Android', ios: OSName === 'iOS', linux: OSName === 'Linux', mac: OSName === 'Mac', windows: OSName === 'Windows'}">
        <div>
            <h1>{{ OSName }}</h1>
            <button class="btn btn-dark btn-el">Download</button>
        </div>
        <img class="dImg" src="../assets/images/example2.png" alt="Desktop PlaceHolder"
             v-if="OSName === 'Linux' || OSName === 'Mac'|| OSName === 'Windows'">
        <img class="mImg" src="../assets/images/example1.jpg" alt="Mobile PlaceHolder"
             v-else-if="OSName === 'Android' || OSName === 'iOS'">
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
        methods: {}
    }
</script>

<style scoped>
    .btn {
        font-size: 25px;
    }

    .dImg {
        padding-top: 5%;
        max-width: 70%;
        max-height: 70%;
    }

    .mImg {
        padding-top: 5%;
        max-width: 70%;
        max-height: 55%;
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
        background-color: #DAA520;
        /*could not find one for linux*/
    }

    .mac {
        background-color: #8E8E91;
        /*mac gray*/
    }

    .windows {
        background-color: #2D89EF;
        /*Windows 10 blue*/
    }
</style>