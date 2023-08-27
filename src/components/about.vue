<template>
    
    <div id="content_about" class="content_page">
        
        <div class="bg">
            <p>About Me</p>
        </div>
        <div class="info">
            <div class="title">
                <h1 class="title">Know More</h1>
            </div>
           
        
            <div class="details">
                <div class="about">
                    <p class="intro">Hi! My name is <span>Hamim Ahmed</span>,<br>  a web developer and
                        a software engineer. I graduated from United International 
                        University in the Department of Computer Science & Engineering(CSE).<br>
                        
                    </p>
                    <p class="">
                        I consider myself as a Creative thinker who likes to lead as well as work as a team. I am flexible
                        in my working hours, being able to work until the job is done. A trustworthy
                        & honest person on whom people can rely. Always seeks personal and professional improvement.
                    </p>
                    <div class="strength">
                        <b>Strength Points:</b><br>
                        <ul style="list-style: circle;">
                            <li>Creative Problem Solving</li>
                            <li>Leadership</li>
                            <li>patient & Self Motivated</li>
                            <li>Decision making</li>
                            <li>flexible</li>
                            <li>Multitasking</li>
                        </ul>

                    </div>
                </div>
                <div class="contact">
                    <p><b>Name:</b><br> Hamim Ahmed Komol</p>
                    <p><b>From: </b><br>Narayanganj, Dhaka, Bangladesh.</p>
                    <p><b>Age:</b> <br>23</p>
                    <p><b>Email:</b> <br>hamimahmedofficial@gmail.com</p>
                    

                </div>
            </div>
        </div>
        
    </div>
</template>

<script>

</script>

<style scoped>
div.content_page{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: fit-content; */
    /* width: 100%; */
    width: fit-content;
    background-color: rgb(245, 245, 245);
    opacity: 0.999;
    padding-bottom: 50px;
    color: black;
    
}
div.bg{
    display: flex;
    color: rgb(148, 148, 148);
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    font-weight: bold;
    word-break: break-all;
    word-wrap: break-word;
    position: sticky;
    top: 50%;
    z-index: -1;        /*make the div background*/
    opacity: 0.3;
}
div.bg>p{
    font-size: 70px;
    word-break: break-all;
    word-wrap: break-word;
    padding: 0px;
    margin: 0px;
}
div.info{
    /* top: 0px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    z-index: 1;    
}
div.info>.title>h1{
    font-family: cursive;
    color: rgb(0, 0, 0) ;
    font-size: 35px;
    border-bottom: 5px double;
    border-color: rgb(0, 122, 122);
    margin-bottom: 5vw;
}

div.details{
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: center;
    height: fit-content;
    width: 100%;
    /* flex-wrap: wrap; */
}
div.about{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* font-size: 5vw; */
    height: fit-content;
    word-wrap: break-word;
    width: fit-content;
    padding: 10px;
    color: black;
    word-break: break-word;
}

div.contact{
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    width: 50%;
    flex-wrap: wrap;
    padding:10px;
    border-left: dashed 2px;
    border-color: rgb(221, 3, 3);

    word-break: break-word;
    word-wrap: break-word;
   
}
div.about>P,div.contact>p{
    /* font-siz4e: 1.8vw; */
    font-size: 20px;
    display: inline-block;
    /* word-break: break-word; */
    word-wrap: break-word;
    width: 100%;
}
div.about>p.intro{
    font-weight: bold;
}
div.about>div.strength{
    font-size: 15px;
}
div.contact>p{
    margin-top: 0px;
    margin-bottom: 10px;
}



</style>