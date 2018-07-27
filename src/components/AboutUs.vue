<template>
    <div class="gridWrapper3">
        <h1 class="mainText">Meet the developers!</h1>
        <user class="user0" :name="userList[0]"></user>
        <user class="user1" :name="userList[1]"></user>
        <user class="user2" :name="userList[2]"></user>
        <user class="user3" :name="userList[3]"></user>
        <user class="user4" :name="userList[4]"></user>
        <user class="user5" :name="userList[5]"></user>
    </div>
</template>

<script>
    import AboutUsElement from "./AboutUsElement";
    export default {
        name: "AboutUs",
        components: {
            user: AboutUsElement
        },
        data(){
            return{
                userList: ['aneesh', 'charlene', 'davis','emanuel', 'jack', 'neel']
            }
        }
    }
</script>

<style scoped>
    @import "../assets/css/components-style/about-us-style.css";
</style>