<template>
    <div id="content_resume" class="content_page">
        <div class="bg">
            <p>Resume</p>
        </div>
        <div class="info">
           <h1 class="page_title">SUMMARY</h1>
        </div>
        <div class="details">
            
            <div class="edu">
                <div class="edu_title"> <h2>Education</h2></div>
                <div class="institute">
                    <h3 class="session">2018-2022</h3><br>
                    <span class="degree">Degree:</span>
                    <h2>Undergraduate Academic (B.Sc)</h2>
                    <span class="sub">Dept / Sub:</span> 
                    <h2>Computer science & Engineering</h2>
                    <span class="org">Institution:</span>
                    <h2><a href="https://www.uiu.ac.bd/" target="_blank">United International University</a></h2>
                    <span class="result">Result (CGPA):</span>
                    <h2>3.62 out of 4.00</h2>
                </div>
                <div class="institute">
                    <h3 class="session">2016-2017</h3><br>
                    <span class="degree">Degree:</span>
                    <h2>Higher Secondary School Certificate (H.S.C)</h2>
                    <span class="sub">Dept/Sub:</span> 
                    <h2>Science</h2>
                    <span class="org">Institution:</span>
                    <h2><a href="https://dmrc.edu.bd/" target="_blank">Dr. Mahbubur Rahman Mollah College</a></h2>
                    <span class="result">Result (GPA):</span>
                    <h2>5.00 out of 5.00</h2>
                </div>
                <div class="institute">
                    <h3 class="session">2014-2015</h3><br>
                    <span class="degree">Degree:</span>
                    <h2>Secondary School Certificate (SSC)</h2>
                    <span class="sub">Dept/Sub:</span> 
                    <h2>Science</h2>
                    <span class="org">Institution:</span>
                    <h2><a href="#">Dhakeshwari Mills School & College</a></h2>
                    <span class="result">Result (GPA):</span>
                    <h2>5.00 out of 5.00</h2>
                </div>
                
               
            </div>
            <div class="project_work">
               <div class="work_title"><h2>My Work</h2></div>
               <div class="projects">
                    <h3>FYDP Project :</h3><br>
                    <div class="images">
                    <img src="../assets/images/project1/homepage1.png">
                    <img src="../assets/images/project1/filter_search.png">
                    <img src="../assets/images/project1/isp_page.png">
                    <img src="../assets/images/project1/isp_users.png">
                    <img src="../assets/images/project1/user_sub.png">
                    </div>
                    
                    <p><span style="font-weight: bolder;">Goal: </span>Provide improved interaction between Internet Service 
                        Providers and Users.</p>
                    <p><span style="font-weight: bolder;">Objective: </span>
                        To develop a web-based application where all the ISPs and 
                        users will interact in a single platform so that users 
                        find a better or desired internet service provider and 
                        ISPs can find more users and manage their operations.
                    </p>
                    <div class="project_link">
                        <button class="ui mini inverted blue button">
                            <a href="https://drive.google.com/file/d/1sX_WeeNeE4wq_4ETR7SmMsXP9MAQg9gl/view?usp=drive_link" target="_blank"> Project Details
                            </a>
                        </button>
                    </div>
                    

                </div>
                <div class="projects">
                    <h3>Django Project :</h3><br>
                    <div class="images">
                    <img src="../assets/images/project2/fb_home.JPG">
                    <img src="../assets/images/project2/fb_profile.JPG">
                    </div>
                    
                    <p><span style="font-weight: bolder;">Name: </span>Facebook Clone Project.</p>
                    <p><span style="font-weight: bolder;">Objective: </span>
                        A lightweight web-based Facebook clone project using the Django framework.
                        It contains the general basic features of Facebook.
                    </p>
                    <p><span>Technology used:</span> Django (backend), HTML, Css, JavaScript, Sqlite3 (database)</p>
                    <div class="project_link">
                        <button class="ui mini inverted blue button">
                            <a href="https://drive.google.com/file/d/10ggf5-Mj97FK1lbpnEaeIoHR2tTtgaFJ/view?usp=drive_link" target="_blank" > Project Details

                            </a>
                        </button>
                    </div>
                </div>

                <div class="projects">
                    <h3>Vue.js Project :</h3><br>
                    <div class="images">
                    <img src="../assets/images/project3/profile_page.png">
                    <img src="../assets/images/project3/about_page.png">
                    <img src="../assets/images/project3/resume_page.png">
                    </div>
                    
                    <p><span style="font-weight: bolder;">Name: </span>Personal Protfolio Website</p>
                    <p><span style="font-weight: bolder;">Objective: </span>
                        Personal Profile page and portfolio site for my personal and professional
                        uses created using Vue.js
                    </p>
                    <p><span>Technology used:</span> Vue.js (fontEnd framework), HTML, Css, JavaScript</p>
                    <div class="project_link">
                        <button class="ui mini inverted blue button">
                            <a href="https://github.com/hamim-ahmed/Personal_Website.git" target="_blank" > Project Details

                            </a>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="cv"> 
            <button class="ui inverted round white button">
                <a href="https://drive.google.com/file/d/10ggf5-Mj97FK1lbpnEaeIoHR2tTtgaFJ/view?usp=drive_link" target="_blank">
                    Download CV <i class="download icon"></i>
                </a>
            </button>
        </div>
    </div>
    

</template>

<script>
export default{
    data(){
        return{
            name: "I'm Hamim Ahmed.",
            
        }
    },
    mounted(){
                //these function will call when the DOM is created initially.
       
        
    },
    methods:{
        
      
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
/* @import '../assets/content_page.css';s */
#content_resume{
   
    background-color: rgb(0, 0, 0);
    opacity: 0.999;
    
  }
  div.content_page{
    color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  div.bg{
    color: rgb(116, 116, 116);
    text-align: center;
    font-size: 80px;
    font-weight: bold;
    position: sticky;
    top: 50%;
    /* margin-top: 30px;
    margin-bottom: 50px; */
    z-index: -1;        
    opacity: 0.3;
}
div.info{
    top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    z-index: 1;    
}
div.info>.page_title{
    font-family: cursive;
    color: inherit ;
    font-size: 30px;
    border-bottom: 5px double;
    border-color: rgb(0, 122, 122);
    margin-bottom: 50px;
}
div.details{
    display: flex;
    flex-direction: row;
    align-items: left;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    color: inherit;
}
div.edu{
    display: flex;
    flex-direction: column;
    align-items: left;
    height: inherit;
    max-width: 45%;
    min-width: 320px;
    color: inherit;
    word-wrap: break-word;
    margin-right: 5px;
    margin-left: 5px;
}
div.project_work{
    display: flex;
    flex-direction: column;
    align-items: left;
    height: inherit;
    max-width: 45%;
    min-width: 320px;
    color: inherit;
    word-wrap: break-word;
    margin-right: 5px;
    margin-left: 5px;
}
div.edu_title>h2,div.work_title>h2{
    /* display: inline-block; */
    padding-bottom: 10px;
    padding-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 25px;
    font-weight: bolder;
    font-family: cursive;
    color: rgb(38, 0, 255);
    background-color: rgb(27, 27, 27);
    border-radius: 5px;
    /* width: inherit; */
}
div.institute,div.projects{
    border:dashed 1.5px rgb(194, 194, 194);
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;
    /* margin-right: 2px;
    margin-left: 2px; */
}
div.institute>h3{
    font-size: 15px;
    background-color: rgb(128, 70, 59);
    display: inline-block;
    padding: 4px;
    border-radius: 3px;
    
}
div.institute>h2{
    margin-top: 0px;
    margin-bottom: 28px;
    font-family:cursive;

}
div.institute>span{
    font-size: 17px;
    color: aqua;
}
div.cv{
    margin-top: 50px;
    margin-bottom: 50px;
    align-items: center;
    text-align: center;
}
div.projects>h3{
    display: inline-block;
    background-color: rgb(128, 70, 59);
    padding: 2px;
    border-radius: 3px;
}

div.projects>.images{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    
}
div.projects>.images>img{
    height: 10vh;
    max-width: 19%;          /*20% for max 5 images==100% (1% less for 2px margin*/
    /* width: fit-content; */
    /* max-width: 7vw; */
    margin: 2px;
}
.images img:hover {
    transform: scale(5.2);
}
div.projects>p{
    font-family: Garamond, serif;
    font-size: 20px;
    text-align: left;
    width: fit-content;
    word-wrap: break-word;
}
div.projects>.project_link{
    text-align: center;
}
div.projects>p>span{
    color: aqua;

}
</style>