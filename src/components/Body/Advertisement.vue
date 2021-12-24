<template>
 <section class="main__advertisement mx-auto">
   <div class="container">
        <ul class="ad">
            <li>
                <div class="ad-image">
                   <a href="#">
                    <img class="rounded-circle img-fluid" src="./../../../public/logos/creative-market.jpg" alt="" />
                   </a>
                </div>
            </li>
            <li>
                <div class="ad-image">
                  <a href="#">
                    <img class="rounded-circle img-fluid" src="./../../../public/logos/designmodo.jpg" alt="" />
                  </a>
                </div>
            </li>
            <li>
                <div class="ad-image">
                    <a href="#">
                      <img class="rounded-circle img-fluid" src="./../../../public/logos/envato.jpg" alt="" />
                    </a>
                </div>
            </li>
            <li>
                <div class="ad-image">
                    <a href="#">
                        <img class="rounded-circle img-fluid" src="./../../../public/logos/themeforest.jpg" alt="" />
                    </a>
                </div>
            </li>
        </ul>
    </div>
 </section>
</template>

<script>
export default {
  name: "Advertisement",
};
</script>

<style>
.main__advertisement{
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    min-height: 40vh;
    padding: 90px 30px 0;
    display: flex;
    text-align: center;
}
.ad{
    list-style-type: none;
    display: flex;
    justify-content: center;
}
</style>
