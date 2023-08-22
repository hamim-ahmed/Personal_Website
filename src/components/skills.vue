<template>
    <div id="content_skills" class="content_page">
        <div class="bg"><Span>Skills</Span></div>
        <div class="page_title"><h2>Skills Set</h2>
        </div>
        <div class="skills_info">
            <div class="p_skill">
                <div class="skill_title"><span>Programming Skills</span></div>
                <div class="list">
                    <div class="s_name"><span>C (basic Programming)</span><span>90%</span></div>
                    <div class="slide"><input type="range" class="slider" min="0" max="100" value="90" ></div>
                    <div class="s_name"><span>Python (programming,backend)</span><span>70%</span></div>
                    <div class="slide"><input type="range" class="slider" min="0" max="100" value="70"></div>
                    <div class="s_name"><span>Java (basic), PHP (backend)</span><span>70%</span></div>
                    <div class="slide"><input type="range" class="slider" min="0" max="100" value="70"></div>
                    <div class="s_name"><span>JavaScript (Web Programming)</span><span>80%</span></div>
                    <div class="slide"><input type="range" class="slider" min="0" max="100" value="80"></div>
                    <div class="s_name"><span>HTML, Css (Web Design)</span><span>90%</span></div>
                    <div class="slide"><input type="range" class="slider" min="0" max="100" value="90"></div>
                    <div class="s_name"><span>MySql (Database)</span><span>80%</span></div>
                    <div class="slide"><input type="range" class="slider" min="0" max="100" value="80"></div>
                </div>
            </div>
            <div class="f_skill">
                <div class="skill_title"><span>FrameWorks</span></div>
                <div class="list">
                    <div class="s_name"><span>Django (Python)</span><span>70%</span></div>
                    <div class="slide"><input type="range" class="slider" min="0" max="100" value="70"></div>
                    <div class="s_name"><span>Vue.js (JavaScript)</span><span>90%</span></div>
                    <div class="slide"><input type="range" class="slider" min="0" max="100" value="90"></div>
                    <div class="s_name"><span>Semantic UI (CSS)</span><span>80%</span></div>
                    <div class="slide"><input type="range" class="slider" min="0" max="100" value="80"></div>
                    
                </div>
                <br><br>
                <div class="skill_title"><span>Version Control</span></div>
                <div class="list">
                    <div class="s_name"><span>Git & Github</span><span>80%</span></div>
                    <div class="slide"><input type="range" class="slider" min="0" max="100" value="80" ></div>
                   
                    
                </div>

            </div>
        </div>
    </div>

</template>

<script>

</script>

<style scoped>
@import '../assets/content_page.css';
div.content_page{
    background-color: rgb(241, 241, 241);
    opacity: 0.999;
    color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    align-items: center;
    /* justify-content: center; */
  }
  div.bg{
    color: rgb(148, 148, 148);
    text-align: center;
    font-size: 100px;
    font-weight: bold;
    position: sticky;
    left: 17%;          /* 17% left side is occupied by nav bar*/
    top: 50%;
    margin-top: 30px;
    margin-bottom: 50px;
    z-index: -1;        /*make the div background*/
    opacity: 0.3;
}
div.page_title>h2{
    font-family: cursive;
    color: inherit ;
    font-size: 35px;
    border-bottom: 5px double;
    border-color: rgb(0, 0, 0);
    margin-bottom: 50px;
}
div.skills_info{
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    /* justify-content: top; */
    width: 100%;
}
div.p_skill{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin-left: 50px;
    margin-right: 30px;
    font-weight: bolder;
}

div.f_skill{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin-right: 50px;
    margin-left: 30px;
    font-weight: bolder;
}
div.skill_title{
    /* padding-bottom: 20px; */
    text-align: center;
    font-size: 25px;
    color: rgb(0, 197, 105);
}
.skill_title>span{
    /* background-color: rgb(0, 173, 253); */
    font-family: cursive;
    font-weight: bold;
    /* border-radius: 10px; */
    padding: 2px;
    border-bottom: dashed 2px rgb(146, 146, 146);
}
div.list>.s_name{
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 7px;
}

div.s_name{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
div.list{
    width: 100%;
}
div.slide>.slider{
    width: 100%;
    margin-bottom: 15px;
}

/* div.slide>input{
    height: 50px;
} */
div.slide>input[type="range"]::-webkit-slider-runnable-track {
  /* background: rgb(4, 0, 255); 
  border-radius: 10px; */

    
}






</style>