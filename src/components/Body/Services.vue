<template>
 <section class="main__services">
   <div class="container">
        <div class="paragraph">
            <h2 class="p__title text-uppercase"><b>services</b></h2>
            <i class="p__text text-capitalize">ghettoba foundation</i>   
        </div>
        <div class="row d-flex py-5">
            <div class="services__type col-md-4">
                <span class="fa-stack fa-4x">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3"><b>Ghettoba Foundation</b></h4>
                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>   
            <div class="services__type col-md-4">
                <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3"><b>Responsive Design</b></h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>   
            <div class="services__type col-md-4">
                <span class="fa-stack fa-4x">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                    <h4 class="my-3"><b>Web Security</b></h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>   
        </div>
    </div>          
 </section>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style>
.main__services{
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    min-height: 100vh;
    padding: 90px 30px;
    display: flex;
    text-align: center;
}
.p__title{
    font-size: 2.5rem;
    letter-spacing: 4px;
    margin-bottom: 20px;
}
.p__text{
    color:#6c757d;
}
.fa-circle{
    color:#fed136;
}

</style>
