<template>
    <div id="app">
        <navbar></navbar>
        <div class="main">
            <transition appear name="routerAnimation" :enter-active-class="enterAnimation"
                        :leave-active-class="exitAnimation" mode="out-in" :duration="{ enter: 900, leave: 400 }">
                <router-view>
                </router-view>
            </transition>
            <footerComp></footerComp>
        </div>
    </div>
</template>

<script>
    import Navbar from './components/Navbar'
    import Home from './components/Home'
    import Footer from './components/Footer'
    export default {
        data() {
            return {
                enterAnimation: 'animated fadeInRight',
                exitAnimation: 'animated fadeOutLeft'
            }
        },
        components: {
            'navbar': Navbar,
            'home': Home,
            'footerComp': Footer
        },
        watch: {
            '$route'(to, from) {
                //function changes the path depending on where the current view is at the time
                let toNum = this.translatePathToNumber(to.path);
                let fromNum = this.translatePathToNumber(from.path);
                if (toNum > fromNum) {
                    this.enterAnimation = 'animated slideInRight';
                    this.exitAnimation = 'animated slideOutLeft';
                }
                else if (fromNum > toNum) {
                    this.enterAnimation = 'animated slideInLeft';
                    this.exitAnimation = 'animated slideOutRight';
                }
                else {
                    console.error("Path went to itself, something is wrong");
                }
            }
        },
        methods: {
            translatePathToNumber(path) {
                //removes the first character because it is always the same
                let modedPath = path.substring(1);
                //assigns the path to a number based on where
                switch (modedPath) {
                    case 'home':
                        return 0;
                    case 'features':
                        return 1;
                    case 'download':
                        return 2;
                    case 'about-us':
                        return 3;
                    default:
                        console.error("INVALID ROUTE YOU FUCKED SOMETHING UP");
                        return;
                }
            }
        }
    }
</script>

<style>
    @import "assets/css/main.css";
</style>