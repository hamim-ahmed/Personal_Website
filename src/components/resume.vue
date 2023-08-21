<template>
    <div id="content_resume" class="content_page">
        <div class="bg">
            <span>Resume</span>
        </div>
        <div class="info">
           <h1 class="page_title">SUMMARY</h1>
        </div>
        <div class="details">
            
            <div class="edu">
                <div class="edu_title"> Education</div>
                <div class="institute">
                    <h3 class="session">2018-2022</h3><br>
                    <span class="degree">Degree:</span>
                    <h2>Undergraduate Academic(B.Sc)</h2>
                    <span class="sub">Dept/Sub:</span> 
                    <h2>Computer science & Engineering</h2>
                    <span class="org">Institution:</span>
                    <h2><a href="https://www.uiu.ac.bd/" target="_blank">United International University</a></h2>
                    <span class="result">Result(CGPA):</span>
                    <h2>3.62 out of 4.00</h2>
                </div>
                <div class="institute">
                    <h3 class="session">2016-2017</h3><br>
                    <span class="degree">Degree:</span>
                    <h2>Higher Secondary School Certificate(H.S.C)</h2>
                    <span class="sub">Dept/Sub:</span> 
                    <h2>Science</h2>
                    <span class="org">Institution:</span>
                    <h2><a href="https://dmrc.edu.bd/" target="_blank">Dr.Mahbubur Rahman Mollah College</a></h2>
                    <span class="result">Result(GPA):</span>
                    <h2>5.00 out of 5.00</h2>
                </div>
                <div class="institute">
                    <h3 class="session">2014-2015</h3><br>
                    <span class="degree">Degree:</span>
                    <h2>Secondary School Certificate(SSC)</h2>
                    <span class="sub">Dept/Sub:</span> 
                    <h2>Science</h2>
                    <span class="org">Institution:</span>
                    <h2><a href="#">Dhakeshwari Mills School & College</a></h2>
                    <span class="result">Result(GPA):</span>
                    <h2>5.00 out of 5.00</h2>
                </div>
                
               
            </div>
            <div class="project_work">
               <div class="work_title">My Work</div>
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
                    
                    <p><span style="font-weight: bolder;">Name: </span>Facebook Clone Project.</p>
                    <p><span style="font-weight: bolder;">Objective: </span>
                        A lightweight web-based Facebook clone project using the Django framework.
                        It contains the general basic features of Facebook.
                    </p>
                    <p><span>Technology used:</span> Django(backend), HTML, Css, JavaScript, Sqlite3(database)</p>
                    <div class="project_link">
                        <button class="ui mini inverted blue button">
                            <a href="" > Project Details

                            </a>
                        </button>
                    </div>
                </div>

                <div class="projects">
                    <h3>Django Project :</h3><br>
                    <div class="images">
                    <img src="../assets/images/project3/profile_page.png">
                    <img src="../assets/images/project3/about_page.png">
                    <img src="../assets/images/project3/resume_page.png">
                    </div>
                    
                    <p><span style="font-weight: bolder;">Name: </span>Facebook Clone Project.</p>
                    <p><span style="font-weight: bolder;">Objective: </span>
                        Personal Profile page and portfolio site for my personal and professional
                        uses created using Vue.js
                    </p>
                    <p><span>Technology used:</span> Vue.js(fontEnd framework), HTML, Css, JavaScript</p>
                    <div class="project_link">
                        <button class="ui mini inverted blue button">
                            <a href="#" > Project Details

                            </a>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="cv"> <button class="ui inverted round white button"><a href="./src/assets/doc/hamim_ahmed_cv.pdf" target="_blank">Download CV <i class="download icon"></i></a></button></div>
    </div>
    

</template>

<script>

</script>

<style scoped>
/* @import '../assets/content_page.css';s */
#content_resume{
   
    /* background-image: url(../assets/web_dp.jpg); */
    background-color: rgb(0, 0, 0);
    opacity: 0.999;
    
  }
  div.content_page{
    color: white;
    display: flex;
    flex-direction: column;
    /* height: 100vh; */
    width: 100%;
  }

  div.bg{
    color: rgb(116, 116, 116);
    text-align: center;
    font-size: 100px;
    font-weight: bold;
    position: sticky;
    /* left: 17%;           */
    top: 50%;
    margin-top: 30px;
    margin-bottom: 50px;
    z-index: -1;        /*make the div background*/
    opacity: 0.3;
}
div.info{
    top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    z-index: 1;    /*keep the div foreground*/
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
    margin-left: 40px;
    justify-content: center;
    color: inherit;
}
div.edu{
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-right: 40px;
    /* margin-left: 20px; */
    height: inherit;
    width: 50%;
    color: inherit;
}
div.project_work{
    display: flex;
    flex-direction: column;
    align-items: left;
    height: fit-content;
    /* border-left: ; */
    width: 50%;
    padding-left: 20px;
    margin-right: 40px;
    /* border-left: dashed 2px;
    border-color: rgb(124, 124, 124); */

    color:inherit;
}
div.edu_title{
    padding-bottom: 20px;
    text-align: center;
    font-size: 30px;
    font-weight: bolder;
    font-family: sans;
    color: rgb(97, 155, 136);
}
div.institute{
    border:solid 2px rgb(63, 63, 63);
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;
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

div.work_title{
    padding-bottom: 20px;
    text-align: center;
    font-size: 30px;
    font-weight: bolder;
    font-family: sans;
    color: rgb(97, 155, 136);
}
div.projects{
    border: dashed 3px rgb(63, 63, 63);
    padding: 10px;
    margin-bottom: 20px;
    
    /* margin-right: 20px; */
    border-radius: 15px;

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
    
}
div.projects>.images>img{
    height: 10vh;
    width: fit-content;
    margin: 5px;
}
div.projects>p{
    font-family: Garamond, serif;
    font-size: 20px;
    text-align: left;
}
div.projects>.project_link{
    text-align: center;
}
div.projects>p>span{
    color: aqua;

}
</style>