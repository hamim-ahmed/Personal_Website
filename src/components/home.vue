<template>
        <div id="content_home" class="content_page">
            <h2 id="hi">Hi There!</h2>
            <h1>{{ greet }}</h1>
            <h1 id="animation1"></h1>
            <h2>From Narayanganj,Bangladesh.</h2><br><br><br><br>
            <button v-on:click="scrollTo('content_contact')" class="big ui inverted teal button">ReachMe</button>
            <!-- <br> -->
            <div id="downarrow" style="display: block;"><span><i class="big angle double down icon"></i></span></div>
        </div>
    
    
    

</template>

<script>

export default{
    data(){
        return{
            name: "I'm Hamim Ahmed.",
            greet: "Welcome To MyProfile.",
            i:0,
            
            
        }
    },
    mounted(){
        this.letter_animation();    //this function will call when the DOM is created initially.
       
        const divbtn = document.getElementById("downarrow");
        // console.log(divbtn);
        this.downbutton(divbtn);  //this fnc will call when thd DOM is created.
        
       
    },
    methods:{
        
        letter_animation(){
             
            if(this.i<this.name.length){
                document.getElementById("animation1").innerHTML +=this.name[this.i];
                this.i++;
                setTimeout(this.letter_animation, 200);
            }
          
            
            else{
                setTimeout(() => {                            ///inside code will run after 1sec.
                this.i = 0; // Update this.i after 2 seconds
                // console.log('After 3 seconds');
                document.getElementById("animation1").innerHTML = "&nbsp;";  //will clear the div after 2 sec.
                this.letter_animation();            //will call the function again after 2 sec
                // console.log(this.i);
                }, 1000);               //waiting time 1 sec for this block of functionS
            }
               
                    
    },

        downbutton(divbtn){
            
            // console.log(divbtn);
            if(divbtn.style.display=="block"){
                divbtn.style.display="none";
            }
            else{
                divbtn.style.display="block";
            }
            const id_name= divbtn;
            
            setTimeout(() => {
                this.downbutton(id_name);
            }, 650);


        },
        scrollTo(sectionId) {                 //these sectionId is from components.vue pages.
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        
    }



}

</script>

<style scoped>
@import '../assets/content_page.css';
div.content_page{
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: rgb(0, 0, 0);
    background-size: 100% 100%;
    opacity: 0.65;
  
  }

  div.content_page>h1,h2{
    font-family: cursive;
    color: rgb(250, 250, 250);
  }
  #animation1{
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 50px;
    font-style: italic;
    font-family:  Serif;
    font: italic;
    color: rgb(255, 255, 255);
    /* background-color: rgb(109, 0, 0); */
    /* opacity: 0.999999999; */
  }
  div.content_page>button{
    border-radius: 100%;
  }
  #downarrow{
    position: fixed;
    top: 75%;
  }
    
</style>