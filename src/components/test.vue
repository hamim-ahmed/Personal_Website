<template>
<div>
                <form class="">
                    <div class="msg">
                        <h3>Leave A Message</h3>
                        <div class="personal_info">
                            <label for="name">Name:</label>
                            <input id='name' class="input" type="text" reauired>
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
</template>

<script>

</script>

<style scoped>
</style>