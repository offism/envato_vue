<template>
 <section class="main__about">
   <div class="container">
        <div class="paragraph">
            <h2 class="p__title text-uppercase"><b>About</b></h2>
            <i class="p__text text-capitalize">welcome our reabilitation</i>   
        </div>
        <ul class="timeline">
            <li>
                <div class="timeline-image"><img class="rounded-circle img-fluid" src="./../../../public/img/about/1.jpg" alt="" /></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4>2009-2011</h4>
                        <h4 class="subheading">Our Humble Beginnings</h4>
                    </div>
                    <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed!</p></div>
                </div>
            </li>
            <li>
                <div class="timeline-image"><img class="rounded-circle img-fluid" src="./../../../public/img/about/2.jpg" alt="" /></div>
                <div class="timeline-panel left-mixed">
                    <div class="timeline-heading">
                        <h4>March 2011</h4>
                        <h4 class="subheading">An Agency is Born</h4>
                    </div>
                    <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed!</p></div>
                </div>
            </li>
            <li>
                <div class="timeline-image"><img class="rounded-circle img-fluid" src="./../../../public/img/about/3.jpg" alt="" /></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4>December 2012</h4>
                        <h4 class="subheading">Transition to Full Services</h4>
                    </div>
                    <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed!</p></div>
                </div>
            </li>
            <li>
                <div class="timeline-image"><img class="rounded-circle img-fluid" src="./../../../public/img/about/4.jpg" alt="" /></div>
                <div class="timeline-panel left-mixed">
                    <div class="timeline-heading">
                        <h4>July 2011</h4>
                        <h4 class="subheading">Phase Two Expansion</h4>
                    </div>
                    <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed!</p></div>
                </div>
            </li>
            <li class="li__end">
                <div class="timeline-image end">
                  <h4 class="timeline_end__text">Be Part of Our Story!</h4>
                </div>
            </li>
        </ul>
        <div class="row d-flex">
           
        </div>          
    </div>
 </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
.main__about{
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    min-height: 100vh;
    padding: 90px 30px 0;
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
.timeline{
    position: relative;
    list-style-type: none;
}
.timeline:before {
  position: absolute;
  top: 0;
  min-height: 80vh;
  bottom: 0;
  left: 50%;
  width: 2px;
  margin-left: -1.5px;
  content: "";
  background-color: #e9ecef;
}
.timeline > li {
  position: relative;
  min-height: 200px;
  margin-bottom: 200px;
}
.timeline > li .timeline-panel {
  display: block;
  position: absolute;
  float: left;
  width: 45%;
  padding: 0 90px 0 100px;
  text-align: right;
}
.timeline > li .timeline-panel.left-mixed {
  display: block;
  position: absolute;
  float: right;
  width: 45%;
  left: 50%;
text-align: left;
}
.timeline > li .timeline-image {
  position: absolute;
  display: block;
  z-index: 100;
  left: 41%;
  width: 15%;
  margin-left: 0;
  text-align: center;
  color: white;
  border: 7px solid #e9ecef;
  border-radius: 100%;
  background-color: #fed136;
}
.li__end{
  min-height: 160px !important;
}
.timeline > li .timeline-image.end{
  height: 160px;
  width: 160px;
  margin-bottom: 0;
  }
.timeline > li .timeline-heading h4 {
  font-size: 20px;
  font-weight: 600;
}
.timeline_end__text{
  font-weight: 600;
  font-size: 22px;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  transform: translateY(90%);
}
</style>
