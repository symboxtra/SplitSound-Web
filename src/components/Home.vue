<template>
    <div class="gridWrapper">
        <div class="introText">
            <h1>The Future Of Audio Sharing</h1>
            <p> For when you do not want to run a 200 foot audio cable throughout your house.</p>
            <p> A free alternative to wireless bluetooth wifi 2.4 ghz headphones.</p>
        </div>
        <v-carousel class="carousel">
            <v-carousel-item>
                <img src="../assets/images/example1.jpg" alt="Mobile PlaceHolder" class="responsiveMImg responsiveImg">
            </v-carousel-item>
            <v-carousel-item>
                <img src="../assets/images/example1.jpg" alt="Mobile PlaceHolder" class="responsiveMImg responsiveImg">
            </v-carousel-item>
            <v-carousel-item>
                <img src="../assets/images/example2.png" alt="Desktop PlaceHolder" class="responsiveDImg responsiveImg">
            </v-carousel-item>
            <v-carousel-item>
                <img src="../assets/images/example2.png" alt="Desktop PlaceHolder" class="responsiveDImg responsiveImg">
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
    export default {
        name: "Home",
    }
</script>

<style scoped>
    @import "../assets/css/components-style/home-style.css";
</style>