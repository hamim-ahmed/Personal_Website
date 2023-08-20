<template>
    
    <div id="content_contact" class="content_page">
        <!-- <div class="bg">
            <Span>Contact</Span>
        </div> -->
        <div class="page_title">
            <h2>Contact Me</h2>
        </div>
        <div class="info">
            <div>
                <form>
                    
                    <div class="msg">
                        <h3>Leave A Message</h3>
                        <div class="personal_info">
                            <label for="name">Name:</label>
                            <input id='name' class="input" type="text" required>
                            <label for="mail">Email:</label>
                            <input id="mail" type="email"  class="input" required>
                            <label for="phone" >Phone:</label>
                            <input id="phone" type="number" class="phn" required>
                        </div>
                        <div class="msg_box">
                            <label for="sub">Subject:</label>
                            <input id="sub" type="text" class="subject" required>
                            <label for="msg">Write Your Message:</label>
                            <textarea id="msg" class="txt" required></textarea>
                        </div>
                        <div>
                            <button class="ui inverted red button" type="submit">submit</button>
                        </div>
                    </div>
                </form>
            </div>


        </div>
        <div class="footer">
            <div class="my_address">
                <span>Contact info</span>
                <h5>Address: Narayanganj, Dhaka, Bangladesh</h5>
                <h5>Email: hamimahmed.cse@gmail.com</h5>
                <h5>Phone: 01926862009</h5>

            </div>
        </div>
        
        
    </div>
</template>

<script>

</script>

<style scoped>
@import '../assets/content_page.css';

div.content_page{
    
    background-color: rgb(203, 255, 246);
    opacity: 0.999;
    color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    align-items: center;
    
    justify-content: space-between
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
    justify-content: center;
    /* justify-content: center; */
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
    /* opacity: 0.8; */
    /* width: 70%; */
    

}
div.msg>h3{
    background-color: rgb(255, 102, 0);
    padding: 5px;
    font-family: open sa;
    border-radius: 5px;
}
div.personal_info{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
div.personal_info>input{
    width: 13vw;
    height: 30px;
    margin: 10px;
    margin-left: 0px;
    background-color: rgb(243, 243, 243);
    border: solid 1px rgb(163, 163, 163);
    border-radius: 5px;
}
div.personal_info>label{
    text-align: center;
    font-weight: bolder;
}
div.msg_box{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bolder;
    font-family: cursive;
}
div.msg_box>input{
    width: 20vw;
    height: 35px;
    margin: 10px;
    margin-top: 2px;
    background-color: rgb(212, 248, 248);
    border: solid 1px rgb(155, 155, 155);
    border-radius: 6px;
}

div.msg_box>textarea{
    width: 30vw;
    height: 90px;
    margin: 10px;
    margin-top: 2px;
    background-color: rgb(212, 248, 248);
    border: solid 1px rgb(153, 153, 153);
    border-radius: 10px;
}
div.footer{
    background-color: black;
    left: 17%;
    /* bottom: 0; */
    height: 13vw;
    width: 100%;
    display: flex;
    flex-direction: row;
    color: white;
    align-items: center;
    opacity: 0.7;
}
div.footer>.my_address{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 10px 0px 20px;
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

</style>