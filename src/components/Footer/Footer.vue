<template>
 <section class="main__footer mx-auto">
   <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <p>Copyright © Your Website 2020</p>   
            </div>
            <div class="col-sm-4">
                <div class="m_social_networks">
                    <span>
                        <a href="#" class="m_facebook">
                            <i class="fab fa-facebook-f "></i>
                        </a>
                    </span>
                    <span style="margin:0 10px;">
                        <a href="#" class="m_twitter">
                            <i class="fab fa-twitter "></i>
                        </a>
                    </span>
                    <span>
                        <a href="#" class="m_linkedin">
                            <i class="fab fa-linkedin-in "></i>
                        </a>
                    </span>  
                </div>
            </div>
            <div class="col-sm-4"> 
                <a href="#">Privacy</a>
                <a href="#">Policy</a>
            </div>  
        </div>
    </div>
 </section>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.main__footer{
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    min-height: 2vh;
    padding: 90px 30px 0;
    display: flex;
    text-align: center;
}

</style>
