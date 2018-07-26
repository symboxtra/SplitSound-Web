<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="black">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand to="home">SplitSound</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="home">Home</b-nav-item>
                    <b-nav-item to="features">Features</b-nav-item>
                    <b-nav-item to="download">Download</b-nav-item>
                    <b-nav-item to="about-us">About Us</b-nav-item>
                    <b-nav-item href="https://github.com/symboxtra" target="_blank">Github</b-nav-item>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
        <!--<nav class="navbar fixed-top navbar-expand-lg navbar-dark">-->
            <!--&lt;!&ndash;<a class="navbar-brand" href="#" @click="">SplitSound</a>&ndash;&gt;-->
            <!--<router-link class="navbar-brand" to="home">SplitSound</router-link>-->
            <!--<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"-->
                    <!--aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
                <!--<span class="navbar-toggler-icon"></span>-->
            <!--</button>-->

            <!--<div class="collapse navbar-collapse" id="navbarSupportedContent">-->
                <!--<ul class="navbar-nav ml-auto">-->
                    <!--<li class="nav-item active ml-auto">-->
                        <!--<router-link to="home" class="nav-link navbar-collapse">Home</router-link>-->
                    <!--</li>-->
                    <!--<li class="nav-item ml-auto">-->
                        <!--<router-link to="features" class="nav-link">Features</router-link>-->
                        <!--&lt;!&ndash;<a class="nav-link" href="#">Learn More</a>&ndash;&gt;-->
                    <!--</li>-->
                    <!--<li class="navbar-nav ml-auto">-->
                        <!--&lt;!&ndash;<a href="#" class="nav-link">Download</a>&ndash;&gt;-->
                        <!--<router-link to="download" class="nav-link">Download</router-link>-->
                    <!--</li>-->
                    <!--<li class="navbar-nav ml-auto">-->
                        <!--&lt;!&ndash;<a href="#" class="nav-link">About Us</a>&ndash;&gt;-->
                        <!--<router-link to="about-us" class="nav-link">About Us</router-link>-->
                    <!--</li>-->
                    <!--<li class="navbar-nav ml-auto">-->
                        <!--<a href="https://github.com/symboxtra" class="nav-link" target="_blank">Github</a>-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</nav>-->
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        methods: {
        }
    }
</script>

<style>

</style>