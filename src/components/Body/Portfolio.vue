<template>
 <section class="main__portfolio bg-light">
   <div class="container">
        <div class="paragraph">
            <h2 class="p__title text-uppercase"><b>portfolio</b></h2>
            <i class="p__text text-capitalize">welcome our services</i>   
        </div>

        <div class="row d-flex">
            <div class="services__item col-lg-4 col-sm-6">
                <span class="services_img__part d-block">
                   <img src="./../../../public/img/portfolio/01-thumbnail.jpg" alt="">
                </span>
                <span class="services_text__part d-block">
                   <h4 class="s_item__name">Threads</h4>
                   <small class="s_item__text text-muted">Illustration</small>
                </span>
            </div>
            <div class="services__item col-lg-4 col-sm-6">
                <span class="services_img__part d-block">
                   <img src="./../../../public/img/portfolio/02-thumbnail.jpg" alt="">
                </span>
                <span class="services_text__part d-block">
                   <h4 class="s_item__name">Explore</h4>
                   <small class="s_item__text text-muted">Grapics Design</small>
                </span>
            </div>
            <div class="services__item col-lg-4 col-sm-6">
                <span class="services_img__part d-block">
                   <img src="./../../../public/img/portfolio/03-thumbnail.jpg" alt="">
                </span>
                <span class="services_text__part d-block">
                   <h4 class="s_item__name">Finish</h4>
                   <small class="s_item__text text-muted">Indentity</small>
                </span>
            </div>
            <div class="services__item col-lg-4 col-sm-6">
                <span class="services_img__part d-block">
                   <img src="./../../../public/img/portfolio/04-thumbnail.jpg" alt="">
                </span>
                <span class="services_text__part d-block">
                   <h4 class="s_item__name">Lines</h4>
                   <small class="s_item__text text-muted">Branding</small>
                </span>
            </div>
            <div class="services__item col-lg-4 col-sm-6">
                <span class="services_img__part d-block">
                   <img src="./../../../public/img/portfolio/05-thumbnail.jpg" alt="">
                </span>
                <span class="services_text__part d-block">
                   <h4 class="s_item__name">South West</h4>
                   <small class="s_item__text text-muted">Website Design</small>
                </span>
            </div>
            <div class="services__item col-lg-4 col-sm-6">
                <span class="services_img__part d-block">
                   <img src="./../../../public/img/portfolio/06-thumbnail.jpg" alt="">
                </span>
                <span class="services_text__part d-block">
                   <h4 class="s_item__name">Window</h4>
                   <small class="s_item__text text-muted">Photography</small>
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
.paragraph{
    margin-bottom: 50px;
}
.services__item{
    width: 30%;
    background-color: #fff;
    padding: 0;
    margin: 0px;
    overflow: hidden; 
}
.services__item:nth-of-type(n+1){
    margin: 13px 1%;
}
.services_img__part img{
    vertical-align: middle;
}
.services_text__part{
    padding: 10px;
}
.s_item__name{
    font-weight: 600;
}
</style>
