<template>
    <div :class="{ android: OSName === 'Android', ios: OSName === 'iOS', linux: OSName === 'Linux', mac: OSName === 'Mac', windows: OSName === 'Windows'}">
        <div>
            <h1>{{ OSName }}</h1>
        </div>
        <img class="dImg" src="../assets/images/example2.png" alt="Desktop PlaceHolder"
             v-if="OSName === 'Linux' || OSName === 'Mac'|| OSName === 'Windows'">
        <img class="mImg" src="../assets/images/example1.jpg" alt="Mobile PlaceHolder"
             v-else-if="OSName === 'Android' || OSName === 'iOS'">
        <b-btn class="downloadButton btn-dark" size="lg">Download</b-btn>
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
    .downloadButton {
        font-size: 25px;
    }

    .dImg {
        padding-top: 6%;
        padding-bottom: 12%;
        max-width: 70%;
        max-height: 70%;
    }

    .mImg {
        padding: 0 20% 5%;
        max-width: 70%;
        max-height: 55%;
    }

    .android {
        background-color: #A4C639;
        opacity: .65;
        /*android green*/
    }

    .ios {
        background-color: #8E8E93;
        opacity: .65;
        /*ios gray*/
    }

    .linux {
        background-color: #DAA520;
        opacity: .65;
        /*could not find one for linux*/
    }

    .mac {
        background-color: #8E8E91;
        opacity: .65;
        /*mac gray*/
    }

    .windows {
        background-color: #2D89EF;
        opacity: .65;
        /*Windows 10 blue*/
    }
</style>