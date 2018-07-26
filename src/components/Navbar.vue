<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="black">
            <b-navbar-brand to="home" class="websiteTitle">SplitSound</b-navbar-brand>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
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
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        methods: {}
    }
</script>

<style>

</style>