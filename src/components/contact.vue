<template>
    
    <div id="content_contact" class="content_page">
        <!-- <div class="bg_img">   
            <img src="../assets/images/web_dp1.jpg">
        </div> -->
        <div class="content">
            <div class="page_title">
                <h2>Contact Me</h2>
            
            </div>
            <div class="info">
                
                    <form class="contact_form">
                        
                        <div class="msg">
                            <h3>Personal info</h3>
                            <div class="personal_info">
                                <div>
                                    <label for="name">Name:</label>
                                    <input id='name' class="input" type="text" required>
                                </div>
                                <div>
                                    <label for="mail">Email:</label>
                                    <input id="mail" type="email"  class="input" required>
                                </div>
                                <div>
                                    <label for="phone" >Phone:</label>
                                    <input id="phone" type="number" class="phn" required>
                                </div>
                                
                                
                                
                            </div>
                            <div class="msg_box">
                                <label for="sub">Subject:</label>
                                <input id="sub" type="text" class="subject" required>
                                <label for="msge">Leave Your Message:</label>
                                <textarea id="msge" class="txt" required></textarea>
                            </div>
                            <div>
                                <button class="ui inverted green button" type="submit">submit</button>
                            </div>
                        </div>
                    </form>
                


            </div>
        </div>
        
        <div class="footer">
            <div class="my_address">
                <span>Contact info</span>
                <h5> Narayanganj, Dhaka, Bangladesh</h5>
                <h5>hamimahmed.cse@gmail.com</h5>
                <h5>01926862009</h5>
            </div>
            <div class="copyright">
                <h5>&copy; 2023 Hamim Ahmed. All Rights Reserved.</h5>
            </div>
        </div>
        
        
    </div>
</template>

<script>

</script>

<style scoped>
@import '../assets/content_page.css';

div.content_page{
    
    background-color: rgb(0, 91, 177);
    opacity: 0.999;
    color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    align-items: center;
    z-index: 1;
    justify-content: space-between;
    
    }
  /* div.bg_img{
    
    width:100%;
    height: 100vh;
    z-index: -1;       
    
}
.bg_img>img{
    width: 100%;
    height: 100vh;
    object-fit: fill;

} */
  /* div.bg{
    color: rgb(148, 148, 148);
    text-align: center;
    font-size: 100px;
    font-weight: bold;
    position: sticky;
    left: 17%;          
    top: 50%;
    margin-top: 30px;
    margin-bottom: 50px;
    z-index: -1;       
    opacity: 0.3;
} */
div.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-image: url(../assets/images/web_bg.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-size: cover;
    z-index: -1;
}
div.page_title>h2{
    font-family: cursive;
    color: inherit ;
    font-size: 35px;
    border-bottom: 5px double;
    /* border-bottom: dashed; */
    border-color: rgb(0, 0, 0);
    margin-top: 30px;
    margin-bottom: 50px;
}
div.info{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
}
.contact{
    display: flex;
    align-items: center;
}
div.msg{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 50px;
    box-shadow: 5px 10px 20px rgba(255, 255, 255,0.5);
    width: fit-content;
    color: white;
}
div.msg:hover{
    box-shadow: 5px 10px 20px rgba(255, 255, 255,0.9);
}
div.msg>h3{
    background-color: rgb(255, 102, 0);
    padding: 5px;
    font-family: serif;
    border-radius: 5px;
    text-align: center;
}
div.personal_info{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
}
div.personal_info> div>input{
    width: 200px;
    height: 30px;
    margin: 10px;
    margin-top: 0px;
    margin-left: 0px;
    background-color: rgba(243, 243, 243,0.2);
    border: solid 1px rgb(163, 163, 163);
    border-radius: 5px;
    color: rgb(4, 217, 255);
}
div.msg>.personal_info>div>label{
    text-align: center;
    font-weight: bolder;
}
div.msg>.personal_info>div{
    text-align: center;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
div.msg_box{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bolder;
    width: fit-content;
    /* font-family: cursive; */
    /* font-size: 50px; */
}
div.msg_box>input{
    width: 250px;
    height: 35px;
    margin: 10px;
    margin-top: 2px;
    background-color: rgba(212, 248, 248,0.2);
    border: solid 1px rgb(155, 155, 155);
    border-radius: 6px;
    color: rgb(213, 255, 4);
}

div.msg_box>textarea{
    width: 250px;
    height: 90px;
    margin: 10px;
    margin-top: 2px;
    background-color: rgba(212, 248, 248,0.2);
    border: solid 1px rgb(153, 153, 153);
    border-radius: 10px;
    color: rgb(4, 255, 58);
}
div.msg_box>label{
    font-family: cursive;
    font-size: 20px;
    font-weight: bolder;
}
div.footer{
    background-color: black;
    left: 17%;
    /* bottom: 0; */
    height: 160px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;
    align-items: center;
    opacity: 0.7;
}
div.footer>.my_address{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 10px 0px 20px;
    word-wrap: break-word;
    text-align: center;
}
div.footer>.my_address>span{
    font-family: cursive;
    font-size: 17px;
    padding-bottom: 5px;
    border-bottom: dashed 1px white;
    margin-bottom: 10px;
    color: red;
}
div.footer>.my_address>h5{
    font-family: serif;
    margin-bottom: 10px;
}
div.footer>div.copyright{
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: end;
    justify-content: end;
    margin: 0px 10px 20px 20px;
}

</style>