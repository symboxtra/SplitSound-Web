<template>
    <div class="main">
        <navbar></navbar>
        <div class="content">
            <home></home>
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
    .content {
        width: fit-content;
        height: fit-content;

        position:absolute; /*it can be fixed too*/
        left:0; right:0;
        top:0; bottom:0;
        margin:auto;

        /*this to solve "the content will not be cut when the window is smaller than the content": */
        max-width:100%;
        max-height:100%;
        overflow:auto;
    }
</style>