<template>
 <section class="main__contactus">
   <div class="container">
        <div class="paragraph">
            <h2 class="p_title__contact text-uppercase"><b>Contact Us</b></h2>
            <i class="p__text text-capitalize">welcome our contaction</i>   
        </div>
        <form class="form__contact">
          <div class="row">
              <div class="col_contact__data col-sm-6">
                  <input type="text" placeholder="Your Name*">
                  <input type="mail" placeholder="Your E-Mail*">
                  <input type="phone" placeholder="Your Phone*">
              </div>
              <div class="col_contact__text col-sm-6">
                  <textarea name="contact_posted__text" id="contact_text__posted" cols="30" rows="7" placeholder="Your Message* "></textarea>
              </div>
          </div>
          <div class="form_contact_btn">
              <a href="#" class="btn text-uppercase text-white text-center">send message</a>
          </div>
        </form>    
    </div>
 </section>
</template>

<script>
export default {
  name: "Contactus",
};
</script>

<style>
.main__contactus{
    background-image: url("./../../../public/img/parts/map-image.png");
    background-repeat: no-repeat;
    background-color: #212529;
    background-size: cover;
    background-position: center center;
    background-attachment: scroll;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    min-height: 100vh;
    padding: 90px 30px 0;
    display: flex;
    text-align: center;
}
.p_title__contact{
    color:whitesmoke;
    font-size: 2.5rem;
    letter-spacing: 2px;
    margin-bottom: 20px;
}
.p__text{
    color:#6c757d;
}
.col_contact__data{
    display: flex;
    flex-direction:column;
}
.col_contact__data input{
    margin-bottom: 23px;
    font-size: 22px;
    font-weight: 400;
    height: 75px;
    padding: 7px 15px;
}
.col_contact__text textarea{
    width: 540px;
    padding: 20px;
    font-size: 22px;
    font-weight: 400;
}
.col_contact__text textarea:hover,.col_contact__text textarea:active,.col_contact__data input:hover,.col_contact__data input:active{
    outline: none;
} 
.form_contact_btn a{
    display: flex;
    width: 20%;
    margin: 20px auto 0;
    align-items: center;
    justify-content: center;
    height: 72px;
    text-align: center;
    font-weight: bold;
    background-color: #fed136;
}
.form_contact_btn a:hover{
    background-color: #fec810;
    border-color: #fec503;
}
</style>
