<template>
 <section class="main__portfolio bg-light">
   <div class="container">
        <div class="paragraph">
            <h2 class="p__title text-uppercase"><b>portfolio</b></h2>
            <i class="p__text text-capitalize">welcome our services</i>   
        </div>

        <div class="row d-flex">
            <div class="services__item col-md-4">
                <span class="services_img__part">
                   <img src="./../../../public/img/portfolio/01-thumbnail.jpg" alt="">
                </span>
                <span class="services_text__part">
                   <h4 class="s_item__name">Threads</h4>
                   <small class="s_item__text">Illustration</small>
                </span>
            </div>
            <div class="services__item col-md-4">
                <span class="services_img__part">
                   <img src="./../../../public/img/portfolio/01-thumbnail.jpg" alt="">
                </span>
                <span class="services_text__part">
                   <h4 class="s_item__name">Threads</h4>
                   <small class="s_item__text">Illustration</small>
                </span>
            </div>
            <div class="services__item col-md-4">
                <span class="services_img__part">
                   <img src="./../../../public/img/portfolio/01-thumbnail.jpg" alt="">
                </span>
                <span class="services_text__part">
                   <h4 class="s_item__name">Threads</h4>
                   <small class="s_item__text">Illustration</small>
                </span>
            </div>
            <div class="services__item col-md-4">
                <span class="services_img__part">
                   <img src="./../../../public/img/portfolio/01-thumbnail.jpg" alt="">
                </span>
                <span class="services_text__part">
                   <h4 class="s_item__name">Threads</h4>
                   <small class="s_item__text">Illustration</small>
                </span>
            </div>
            <div class="services__item col-md-4">
                <span class="services_img__part">
                   <img src="./../../../public/img/portfolio/01-thumbnail.jpg" alt="">
                </span>
                <span class="services_text__part">
                   <h4 class="s_item__name">Threads</h4>
                   <small class="s_item__text">Illustration</small>
                </span>
            </div>
            <div class="services__item col-md-4">
                <span class="services_img__part">
                   <img src="./../../../public/img/portfolio/01-thumbnail.jpg" alt="">
                </span>
                <span class="services_text__part">
                   <h4 class="s_item__name">Threads</h4>
                   <small class="s_item__text">Illustration</small>
                </span>
            </div>
        </div>          
    </div>
 </section>
</template>

<script>
export default {
  name: "Portfolio",
};
</script>

<style>
.main__portfolio{
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    min-height: 100vh;
    padding: 90px 30px;
    display: flex;
    text-align: center;
}
.p__title{
    font-size: 2.5rem;
    letter-spacing: 2px;
    margin-bottom: 20px;
}
.p__text{
    color:#6c757d;
}
.fa-circle{
    color:#fed136;
}
.services__item{
    background-color: #fff;
    margin: 0px; 
}
.services_img__part img{
    vertical-align: middle;
}
</style>
