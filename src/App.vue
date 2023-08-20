
<template>
  <!-- <div class="">
    <h1>testing 1,2,3</h1>
  </div> -->
  
    <div class="main">
      <div class="nav-bar">
        
        <img class="dp" src="./assets/hamim.svg" alt="my_profile">
        <h2 class="dp_caption">Hamim Ahmed<br> <span>Software Engineer<br><br></span></h2>
        <!-- <div class="nav">
          <h3><i class="home icon"></i><RouterLink to="/"> Home</RouterLink></h3>
          <h3><i class="info circle icon"></i><RouterLink to="/about"> About</RouterLink></h3>
          <h3><i class="briefcase icon"></i><RouterLink to="/resume"> Resume</RouterLink></h3>
          <h3><i class="clipboard list icon"></i><RouterLink to="/mywork"> Portfolio</RouterLink></h3>
          <h3><i class="address book outline icon"></i><RouterLink to="/contact"> Contact Me</RouterLink></h3>
        </div> -->
        <div class="nav">
          <h3><i class="home icon"></i><a v-on:click="scrollTo('content_home')"> home</a></h3>
          <h3><i class="info circle icon"></i><a v-on:click="scrollTo('content_about')"> About</a></h3>
          <h3><i class="briefcase icon"></i><a v-on:click="scrollTo('content_resume')"> Resume</a></h3>
          <h3><i class="cogs icon"></i><a v-on:click="scrollTo('content_skills')">  My Skills</a></h3>
          <!-- <h3><i class="clipboard list icon"></i><a v-on:click="scrollTo('content_mywork')"> Portfolio</a></h3> -->
          <h3><i class="address book outline icon"></i><a v-on:click="scrollTo('content_contact')"> Contact me</a></h3>
        </div>
        <br><br><br>
        <div class="link">
          <a href="https://www.facebook.com/" target="_blank"><i class="large facebook icon"></i></a>
          <a href="https://github.com/hamim-ahmed" target="_blank"><i class=" large github icon"></i></a>
          <a href="https://www.linkedin.com/in/hamim-ahmed-890045266/" target="_blank"><i class="large linkedin icon"></i></a>
          <a href="" target="_blank"><i class="large instagram icon"></i></a>
        </div>

      </div>


      
      <div class="content">
          <div class="bg">
          </div>
          <home/>
          <about/>
          <resume/>
          <skills/>
          <!-- <mywork/> -->
          <contact/>

          <!-- <router-view></router-view> -->
          <!-- <router-view name="home"></router-view>
          <router-view name="about"></router-view> 
          <router-view name="contact"></router-view> -->


        </div>
      
     
    </div>




  
</template>


<script scoped>
import { RouterLink, RouterView } from 'vue-router';

export default {
  methods: {
    scrollTo(sectionId) {                 //these sectionId is from components.vue pages.
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>


<style scoped>
@import './assets/main.css'
</style>
