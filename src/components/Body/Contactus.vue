<template>
 <section class="main__contactus">
   <div class="container">
        <div class="paragraph">
            <h2 class="p__title text-uppercase"><b>Contact Us</b></h2>
            <i class="p__text text-capitalize">welcome our contaction</i>   
        </div>
       
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
.p__title{
    color:whitesmoke;
    font-size: 2.5rem;
    letter-spacing: 2px;
    margin-bottom: 20px;
}
.p__text{
    color:#6c757d;
}

</style>
