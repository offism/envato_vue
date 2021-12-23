<template>
 <section class="main__team bg-light">
   <div class="container">
        <div class="paragraph">
            <h2 class="p__title text-uppercase"><b>Our Amazing Team</b></h2>
            <i class="p__text text-capitalize">PRO IT foundation</i>   
        </div>
        <div class="row d-flex py-5">
            <div class="team__member col-md-4">
                <span class="user__img">
                    <img src="./../../../public/users/1.jpg" class="img-fluid rounded-circle" alt="">  
                </span>
                <h4 class="mt-3 mb-0"><b>Nadeline Auebor</b></h4>
                <p class="text-muted">Lead Designer</p>
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
            <div class="team__member col-md-4">
                <span class="user__img">
                    <img src="./../../../public/users/2.jpg" class="img-fluid rounded-circle" alt="">  
                </span>
                <h4 class="mt-3 mb-0"><b>Larry Parker</b></h4>
                <p class="text-muted">Lead Marketer</p>
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
            <div class="team__member col-md-4 mb-5">
                <span class="user__img">
                    <img src="./../../../public/users/3.jpg" class="img-fluid rounded-circle" alt="">  
                </span>
                <h4 class="mt-3 mb-0"><b>Diana Peterson</b></h4>
                <p class="text-muted">Lead Developer</p>
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
            <div class="team_text w-75 mx-auto mt-5">
                <hr>
                <small class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptates cumque consectetur iste officia adipisci aperiam odit sequi eaque laudantium a laboriosam.</small>
                <hr>      
            </div>   
        </div>
    </div>          
 </section>
</template>

<script>
export default {
  name: "Team",
};
</script>

<style>
.main__team{
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    min-height: 100vh;
    padding: 90px 30px;
    display: flex;
    text-align: center;
}
.p__title{
    font-size: 2.5rem;
    letter-spacing: 1px;
    margin-bottom: 20px;
}
.p__text{
    color:#6c757d;
}
.user__img{
    display: block;
    width: 60%;
    border: 8px solid #e9ecef;
    border-radius: 50%;
    margin: 0 auto;
}
.m_social_networks{
    display: flex;
    justify-content: center;
}
.m_social_networks span{
    background-color: #343a40;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: .3s ease all;
}
.m_social_networks span a {
    border-radius: 50%;
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    color: #fff;
    width: 100%;
    height: 100%;
}
.m_social_networks span:hover{
    background-color: #212529;
}
</style>
