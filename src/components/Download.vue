<template>
    <div class="gridWrapper2">
        <div class="downloadSection">
            <h1>Get SplitSound for {{ OSName }} </h1>
            <p>SplitSound is Symboxtra's revolutionary flagship audio sharing product. Get it now!</p>
            <button class="btn btn-dark btn-main">Download</button>
        </div>
        <download-element class="downloadElement1" :osname="RenderedOSs[0]">
        </download-element>
        <download-element class="downloadElement2" :osname="RenderedOSs[1]">
        </download-element>
        <download-element class="downloadElement3" :osname="RenderedOSs[2]">
        </download-element>
        <download-element class="downloadElement4" :osname="RenderedOSs[3]">
        </download-element>
    </div>
</template>

<script>
    import DownloadElement from "./DownloadElement"
    export default {
        name: "Download",
        data() {
            return {}
        },
        components:{
            DownloadElement
        },
        computed: {
            OSName() {
                return this.getOS();
            },
            RenderedOSs() {
                let osa = ['Windows','Mac','Linux','Android','iOS'];
                let i = osa.indexOf(this.getOS());
                if (i !== -1) {
                    osa.splice(i, 1);
                }
                return osa;
            }
        },
        methods: {
            getOS() {
                //shamelessly stolen from https://stackoverflow.com/questions/38241480/detect-macos-ios-windows-android-and-linux-os-with-js
                let userAgent = window.navigator.userAgent,
                    platform = window.navigator.platform,
                    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
                    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
                    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
                    os = null;

                if (macosPlatforms.indexOf(platform) !== -1) {
                    os = 'Mac OS';
                } else if (iosPlatforms.indexOf(platform) !== -1) {
                    os = 'iOS';
                } else if (windowsPlatforms.indexOf(platform) !== -1) {
                    os = 'Windows';
                } else if (/Android/.test(userAgent)) {
                    os = 'Android';
                } else if (!os && /Linux/.test(platform)) {
                    os = 'Linux';
                }

                return os;
            }
        }
    }
</script>

<style scoped>
    @import "../assets/css/components-style/download-style.css";
</style>