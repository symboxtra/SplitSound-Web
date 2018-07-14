<template>
    <div class="main">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="#">Symboxtra Software</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item ml-auto">
                        <a class="nav-link" href="#">Learn More</a>
                    </li>
                    <li class="navbar-nav ml-auto">
                        <a href="#" class="nav-link">Download</a>
                    </li>
                    <li class="navbar-nav ml-auto">
                        <a href="#" class="nav-link">About Us</a>
                    </li>
                    <li class="navbar-nav ml-auto">
                        <a href="#" class="nav-link">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Karla');
    @import url('https://fonts.googleapis.com/css?family=Oswald');
    .main {
        font-family: 'Karla', sans-serif;
        background-image: url("assets/heaphones-cropped-to-mobile.jpg");
        min-height: 100vh;
        height: 100%;
        width: 100%;
        margin: auto;
        background-size: cover;
    }
    @media (min-width: 600px) {
        .main{
            background-image: url("assets/headphone-pic.jpg");
        }
    }
    .navbar{
        background-color: rgba(0,0,0,.2) !important;
    }

    .navbar .navbar-nav li a{
        color: white !important;
        font-size: 20px;
        font-family: "Karla", sans-serif;
    }
</style>