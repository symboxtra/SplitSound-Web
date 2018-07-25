<template>
    <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
            <!--<a class="navbar-brand" href="#" @click="">SplitSound</a>-->
            <router-link class="navbar-brand" to="home">SplitSound</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item ml-auto">
                        <router-link to="home" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item ml-auto">
                        <router-link to="features" class="nav-link">Features</router-link>
                        <!--<a class="nav-link" href="#">Learn More</a>-->
                    </li>
                    <li class="navbar-nav ml-auto">
                        <!--<a href="#" class="nav-link">Download</a>-->
                        <router-link to="download" class="nav-link">Download</router-link>
                    </li>
                    <li class="navbar-nav ml-auto">
                        <!--<a href="#" class="nav-link">About Us</a>-->
                        <router-link to="about-us" class="nav-link">About Us</router-link>
                    </li>
                    <li class="navbar-nav ml-auto">
                        <a href="https://github.com/symboxtra" class="nav-link" target="_blank">Github</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style>

</style>