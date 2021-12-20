<template>
 <section class="main__header py-3">
  <nav class="navbar">
    <div class="container">
        <a class="navbar-brand">
         <!-- <img src="https://www.envato.com/static/media/envato.13edc57e.svg" alt="Envato logo"> -->
         <img src="./../../../public/logos/navbar-logo.svg" alt="Envato logo">
        </a>
        <ul class="navbar-nav text-uppercase ml-auto flex-row">
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Services</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#team">Team</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
        </ul>
    </div>
   </nav>
 </section>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.main__header{
    background-image: url("./../../../public/img/parts/header-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: scroll;
    min-height: 100vh;
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
.nav-link{
    color: #fff;
    }
.nav-link:hover{
    color: #fed136;
    }         
</style>
