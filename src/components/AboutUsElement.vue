<template>
    <div>
        <div class="imgContainer" :class="{emanuel: rName === 'emanuel'}">
            <img :src="getImgUrl()" alt="User Picture" class="fit">
            <h1>{{ getProperName() }}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutUsElement",
        props: ['name'],
        computed: {
            rName() {
                return this.name;
            }
        },
        methods: {
            getImgUrl() {
                let iurl = require("../assets/images/" + this.rName + "-pic.jpg");
                console.log(iurl);
                return (iurl);
            },
            getProperName() {
                return this.rName.charAt(0).toUpperCase() + this.rName.slice(1)
            }
        }
    }
</script>

<style scoped>
    .fit {
        position: relative;
        width: 100%;
        height: auto;
    }

    h1 {
        position: absolute;
        bottom: -3%;
        width: 100%;
        text-align: center;
        border-radius: 10px;
        background-color: black;
        color: white;
    }

    .imgContainer {
        position: relative;
        width: 100%;
    }
</style>