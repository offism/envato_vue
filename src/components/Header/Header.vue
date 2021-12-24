<template>
 <section class="main__header py-3">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="./../../../public/logos/navbar-logo.svg" alt="" /></a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars ml-1"></i>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto">
                        <li class="nav-item"><a class="navlink_i nav-link js-scroll-trigger text-white" href="#services">Services</a></li>
                        <li class="nav-item"><a class="navlink_i nav-link js-scroll-trigger text-white" href="#portfolio">Portfolio</a></li>
                        <li class="nav-item"><a class="navlink_i nav-link js-scroll-trigger text-white" href="#about">About</a></li>
                        <li class="nav-item"><a class="navlink_i nav-link js-scroll-trigger text-white" href="#team">Team</a></li>
                        <li class="nav-item"><a class="navlink_i nav-link js-scroll-trigger text-white" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
    </nav>
   <div class="main_text__center d-flex flex-column">
        <i class="main-text__center_top"> Welcome to Envanto! </i>    
        <strong class="main-text__center-center text-uppercase text-white mt-3">it's nice to met you</strong>
        <a href="#" class="main-down__btn btn">
            <i class="fas fa-chevron-circle-down"></i>   
        </a>
    </div>    
 </section>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.sticky {
    position: sticky;
    top: 0;
    z-index: 1000;
    height: auto;
}
.main__header{
    background-image: url("./../../../public/img/parts/header-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: scroll;
    /* min-height: 100vh; */
    }
.navbar{
        background-color: transparent;
        }       
.nav-item{
    margin-right: 20px;     
    }
.navbar-nav li{
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 0.95rem;
    letter-spacing: 0.0625em;
    }
.navbar-brand{
    width: 20%;
    font-size: 1.5em;
    color: #fed136;
    } 

.navlink_i:hover{
    color:#fed136 !important;
    }
.main_text__center{
    margin: 190px 0;
    /* min-height: 90vh; */
    align-items: center;
    justify-content: center;
    }    
.main-text__center-center{
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 4rem;
    margin-bottom: 180px;
    }
.main-text__center_top{
    font-size: 2.5rem;
    color: white;
    }
.main-down__btn{
    padding: 0;
    font-size:2rem;
    line-height: 0;
    }
.main-down__btn i{
    transition: .4s ease all;
    color: #fff;
    }    
.main-down__btn:hover i{
    color: #fed136;
    }
</style>
