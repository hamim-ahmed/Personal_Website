<template>
        <div class="bg_img">   
            <img src="../assets/images/web_dp1.jpg">
        </div>
        <div id="content_home" class="content_page">
            
            <div>Hi There!</div>
            <div>{{ greet }}</div>
            <div><h1 id="animation1"></h1></div>
            <div class="address">From<br> Dhaka,Bangladesh.</div>
            <div><button v-on:click="scrollTo('content_contact')" class="large ui inverted blue button">ReachMe</button></div>
            <div class="animation2">
                <div id="downarrow" style="display: block;">
                <span><i class="large angle double down icon blue"></i></span>
                </div>
            </div>


            
            
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
/* @import '../assets/content_page.css'; */
div.content_page{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    /* width: 100%; */
    background-color: rgba(0, 0, 0, 0.4);  /*background opacity 0.2*/
    opacity: 0.999;   /*div content opacity*/
  
  }
  div.bg_img{
    position: fixed; 
    width:100%;
    height: 100vh;
    z-index: -1;       
    
}
.bg_img>img{
    width: 100%;
    height: 100vh;
    object-fit: fill;

}
div.content_page>div{
    font-family: monospace;
    font-size: 25px;
    padding: 10px;
    color: rgb(255, 255, 255);
    font-weight: bolder;
    text-align: center;
}
div.content_page>div.address{
    font-size: 20px;
}
  /* div.content_page>div>h1,h2{
    font-family: cursive;
    color: rgb(0, 0, 0);
    
  } */
  #animation1{
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 50px;
    font-style: italic;
    font-family:  Serif;
    font: italic;
    color: rgb(68, 255, 0);
  
  }
  
  div.content_page>div>button{
    border-radius: 90%;
  }
  div.animation2{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
    height: 30px;
    width: 30px;
  }
    
</style>