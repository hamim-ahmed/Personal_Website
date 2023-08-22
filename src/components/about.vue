<template>
    
    <div id="content_about" class="content_page">
        
        <div class="bg">
            <span>About Me</span>
        </div>
        <div class="info">
           <h1 class="title">Know More</h1>
        </div>
        <div class="details">
            <div class="about">
                <h1>Hi! My name is <span>Hamim Ahmed</span>,<br>  a web developer and
                    a software engineer. I graduated from United International 
                    University in the Department of Computer Science & Engineering(CSE).<br>
                    
                </h1>
                <h2>
                    I consider myself as a Creative thinker who likes to lead as well as work as a team. I am flexible
                    in my working hours, being able to work until the job is done. A trustworthy
                    & honest person on whom people can rely. Always seeks personal and professional improvement.
                </h2>
            </div>
            <div class="contact">
                <h1>Name:  </h1><h2> Hamim Ahmed Komol</h2>
                <h1>From: </h1><h3> Narayanganj,Dhaka,Bangladesh.</h3>
                <h1>Age: </h1><h3>23</h3>
                <h1>Email: </h1><a href="mailto:hamimahmedofficial@gmail.com"><h3>hamimahmedofficial@gmail.com</h3></a>
                

            </div>
        </div>
        
    </div>
</template>

<script>

</script>

<style scoped>
@import '../assets/content_page.css';

div.content_page{
    height: fit-content;
    background-color: rgb(245, 245, 245);
    opacity: 0.999;
    padding-bottom: 50px;
    
}
div.bg{
    /* display: flex; */
    color: rgb(148, 148, 148);
    text-align: center;
    font-size: 100px;
    font-weight: bold;
    position: sticky;
    /* width: 100%; */
    /* flex-grow: 1; */
    left: 17%;         /* 17% left side is occupied by nav bar */
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
div.info>.title{
    font-family: cursive;
    color: rgb(0, 0, 0) ;
    font-size: 30px;
    border-bottom: 5px double;
    border-color: rgb(0, 122, 122);
    margin-bottom: 80px;

}
div.details{
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: center;
}
div.about{
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-right: 50px;
    margin-left: 20px;
    /* height: inherit; */
    /* width: 70%; */
    color: black;
}
div.contact{
    display: flex;
    flex-direction: column;
    align-items: left;
    /* height: fit-content; */
    flex-grow: 1;
    /* width: 30%; */
    padding-left: 50px;
    padding-right: 20px;
    border-left: dashed 2px;
    border-color: rgb(221, 3, 3);

    color: black;
}
div.about>h1{
    font-family: serif;
}
div.about>h2{
    font-family: Garamond, serif;
}
div.about>h1>span{
    color: rgb(110, 59, 0);
    font-weight: bold;
    font-family: cursive;
    font-style: italic;
    font-size: 30px;
}
div.contact>h1{
    margin-bottom: 0px;
    font-family: serif;
}
div.contact>h2,h3{
    border-bottom: solid 1px rgb(196, 196, 196);
    padding-bottom: 5px;
}
</style>