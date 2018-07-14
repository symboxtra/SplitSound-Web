<template>
    <div class="whole-page row">
        <div class="jumbotron mx-auto col text-center justify-content-center align-self-center align-middle">
            <h1 class="display-1">SplitSound</h1>
                <div>
                    <button class="btn btn-primary download-btn"> Download</button>
                    <button class="btn btn-primary learnmore-btn"> Learn More</button>
                </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Karla');
    @import url('https://fonts.googleapis.com/css?family=Oswald');

    .whole-page {
        color: white;
        font-family: 'Karla', sans-serif;
        background-image: url("assets/headphone-pic-cropped.jpg");
        min-height: 100vh;
        height: 100%;
        width: 100%;
        margin: auto;
        display: table;
        top: 0;
        background-size: cover;
    }

    .btn {
        font-family: 'Oswald', sans-serif;
        background: transparent;
        padding: 10px 20px;
        font-size: 30px;
        border-radius: 10px;
    }
    .jumbotron {
        width: fit-content;
        background: transparent;
        display: table-cell;
        vertical-align: middle;
        max-width: none;
    }
    .download-btn{
        margin-right: 5px;
    }
    .learnmore-btn{
        margin-left: 5px;
    }
</style>
