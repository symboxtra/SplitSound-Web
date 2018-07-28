<template>
    <div>
        <div class="download-section">
            <h1>Get SplitSound for {{ OSName }}</h1>
            <p>SplitSound is Symboxtra's revolutionary flagship audio sharing product. Get it now!</p>
            <b-btn class="btn-dark main-btn" size="lg">Download for {{ OSName }}</b-btn>
        </div>
        <div class="download-flex-wrapper">
            <download-element class="responsive-download-element" id="download-element-1" :osname="RenderedOSs[0]">
            </download-element>
            <download-element class="responsive-download-element" id="download-element-2" :osname="RenderedOSs[1]">
            </download-element>
            <download-element class="responsive-download-element" id="download-element-3" :osname="RenderedOSs[2]">
            </download-element>
            <download-element class="responsive-download-element" id="download-element-4" :osname="RenderedOSs[3]">
            </download-element>
        </div>
    </div>
</template>

<script>
    import DownloadElement from "./DownloadElement"

    export default {
        name: "Download",
        data() {
            return {}
        },
        components: {
            DownloadElement
        },
        computed: {
            OSName() {
                return this.getOS();
            },
            RenderedOSs() {
                let osa = ['Windows', 'Mac', 'Linux', 'Android', 'iOS'];
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