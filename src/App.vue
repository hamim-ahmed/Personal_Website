
<template>
  <!-- <div class="">
    <h1>testing 1,2,3</h1>
  </div> -->
  
    <div id="main_container" class="main top_main">
      <div id="navbar" class="nav-bar top_nav-bar" >

        <div id="dp" class="dp top_dp">
          <img class="image top_image" src="./assets/hamim.svg" alt="my_profile">
          <div id="name" class="name top_name">Hamim Ahmed</div>
          <div id="dg" class="designation">Software Engineer</div>
        </div>

        <div id="nav1" class="nav1 top_nav1">
          <!-- <div><i class="home icon"></i><a id="link1" v-on:click="scrollTo('content_home','link1')"> Home</a></div> -->
          <div><i class="home icon"></i><Router-Link to="/" v-on:click="scrollTo('content_home','link1')">Home</Router-Link></div>
          <div><i class="info circle icon"></i><a id="link2" v-on:click="scrollTo('content_about','link2')"> About</a></div>
          <div><i class="briefcase icon"></i><a id="link3" v-on:click="scrollTo('content_resume','link3')"> Resume</a></div>
          <div><i class="cogs icon"></i><a id="link4" v-on:click="scrollTo('content_skills','link4')"> My_Skills</a></div>
          <div><i class="address book outline icon"></i><a id="link5" v-on:click="scrollTo('content_contact','link5')"> Contact</a></div>
          <div><i class="address book outline icon"></i><Router-Link to="/myblogs">Blogs</Router-Link></div>
          
        </div>
        <div id="nav2" class="nav2 top_nav2" >
            <a href="https://www.facebook.com/" target="_blank"><i class="large facebook icon"></i></a>
            <a href="https://github.com/hamim-ahmed" target="_blank"><i class=" large github icon"></i></a>
            <a href="https://www.linkedin.com/in/hamim-ahmed-890045266/" target="_blank"><i class="large linkedin icon"></i></a>
            <a href="" target="_blank"><i class="large instagram icon"></i></a>
        </div>
        
       
        
        

      </div>


      
      <div id="" class="content">
          <!-- <home/>
          <about/>
          <resume/>
          <skills/>
          <contact/> -->
          <!-- <MainComponent/> -->

          <router-view></router-view>
          <!-- <router-view name="blog"></router-view> -->
          <!-- <router-view name="about"></router-view> 
          <router-view name="contact"></router-view> -->


        </div>
      
     
    </div>




  
</template>


<script scoped>
import { RouterLink, RouterView } from 'vue-router';

export default {
  data(){
    return{
              isNavbar_visible: false,
              device_max_width:820,               //minimum size to change the nav bar from side to top
              
    }
  },
  mounted() {
    //Add an event listener to run the checkScreenWidth method when the window is resized
    window.addEventListener('resize', this.changeCssClass);

   // Initial check when the component is mounted
    this.changeCssClass();
  },
  beforeDestroy() {
    // Remove the event listener to prevent memory leaks when the component is destroyed
    window.removeEventListener('resize', this.changeCssClass);
  },
  
  methods: {
    scrollTo(sectionId, linkId) {                 //these sectionId is from components.vue pages.
      // console.log(linkId);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }

      // const a_link=document.getElementById(linkId);
      // if(a_link){
      //   a_link.style.color="white";
      // }
    },


    changeCssClass() {
      const screen_width=window.innerWidth;
      console.log(screen_width);
      var class_main = document.getElementById("main_container");
      var class_navbar = document.getElementById("navbar");
      var class_dp = document.getElementById("dp");
      var class_name = document.getElementById("name");
      var class_designation = document.getElementById("dg");
      var class_nav1 = document.getElementById("nav1");
      var class_nav2 = document.getElementById("nav2");
      
      
      if(screen_width<=this.device_max_width){        //when device width is smaller   //onlt active topbar classes
        console.log("inside small",screen_width); 
        class_main.className = "top_main";
        class_navbar.className = "top_nav-bar";
        class_dp.className = "top_dp";
        class_name.className = "top_name";
        class_nav1.className = "top_nav1";
        class_nav2.className = "top_nav2";
        class_designation.style.display = "none";
        class_nav2.style.display = "none";

         
      }
      if(screen_width>this.device_max_width){ //when device width is larger  //only active sidevar classes
        console.log("inside large:",screen_width);
        console.log(class_navbar);
        class_main.className = "main";
        class_navbar.className = "nav-bar";
        class_dp.className = "dp";
        class_name.className = "name";
        class_nav1.className = "nav1";
        class_nav2.className = "nav2";
        class_nav2.style.display = "block";

      }
      
    },

  }
};
</script>


<style scoped>
@import './assets/main.css';
</style>
