<template>
    <div class="main">
        <navbar></navbar>
        <div class="content">
            <transition name="router-animation">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import Navbar from './components/Navbar'
    import Home from './components/Home'

    export default {
        components: {
            'navbar': Navbar,
            'home': Home
        }
    }
</script>

<style>
    @import "assets/css/main.css";
</style>