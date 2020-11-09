<template>
  <div class="home">
    <img class="welcome" src="/images/cyoa_header.jpg" height="300px" width="500px">
    <p class="welcome_text" style="margin-left:50px;">Welcome to my CYOA game site! For those who are unaware, a choose your own adventure game, a.k.a. a CYOA game, is one in which the player is given a finite number of choices which they must select from to continue the story. This CYOA game takes place in a Fantasy setting, with each stage of the journey typically giving the player three choices to choose from. To start, click on "Adventure" above!</p>   
  </div>
</template>

<script>

export default {
  name: "Home",
};
</script>

<style>

.welcome {
    padding-top: 15px;
}

.welcome_text {
	padding-top: 15px;
    font-family: 'Lucida Console';
}

</style>