<template>
  <div class="">
         <div class="tsparticles">
        <ParticleTest />
      </div>
    <div

      class="heroImage d-flex flex-column align-items-center justify-content-center"
    >
      <div class="text-center">
        <h1
          v-motion-slide-top
          id="shadow1"
          class="text-shadow display-1 courgette fw-bolder text-light"
        >
          OUR STORY
        </h1>
      </div>
      <div class="w-75">
  <p 
        v-motion-slide-bottom
      class="text-light px-5 text-start fs-3 text-shadow px-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum
        error libero voluptatum aliquid, ea adipisci sed ipsa totam voluptate
        est fugiat maiores hic rem quo deleniti ex! Ea expedita iste cumque,
        praesentium vitae accusantium at eveniet deserunt facilis soluta
        asperiores ratione perspiciatis voluptas quaerat perferendis autem culpa
        pariatur molestias quo earum. Nostrum dolor voluptate consequatur ntium porro, aliquam blanditiis repudiandae facere numquam quam
        nisi reprehenderit veniam. Similique accusamus harum facere nam libero,
        vero nostrum, necessitatibus fuga dignissimos facilis asperiores
        officiis aspernatur, cupiditate quibusdam veritatis nesciunt qui soluta?
        Magnam non commodi optio doloribus recusandae fugit reiciendis porro
        soluta quae officia mollitia, sed molestias vero animi impedit atque
        enim, iste deserunt? Quo necessitatibus velit voluptatum voluptas dolor
        possimus accusamus obcaecati consectetur!
      </p>
      </div>
    
    </div>
    <div class="container-fluid mt-5">

         <div class="row mt-5 px-3">
        <div class="col-md-6 elevation-6">
       <img src="https://images.unsplash.com/photo-1593358578872-4772d9cd7a97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" class="img-fluid framed ">
        </div>
        <div class="col-md-6">
       <p class="display-3"> Jane Doe</p>
            <p class="text-start p-2 fs-4 mt-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ex, dolore eos consequatur veniam cupiditate vel a impedit maxime perferendis aut explicabo ut, nesciunt vero earum nulla et non. Officiis provident impedit voluptatem dolor facere voluptatibus rem eaque molestias, recusandae minima sed ratione saepe quibusdam illum. Hic atque, excepturi eos quisquam esse quia obcaecati animi provident iusto iure quidem fuga, eius officia consectetur. Accusantium facere tempore nulla et officia sit unde consectetur eos maxime deleniti id esse adipisci quas obcaecati alias sunt nisi iste, in dolorem placeat beatae rem. Expedita reiciendis corrupti pariatur dolore saepe alias reprehenderit aut nisi unde explicabo nulla ipsam nam, sequi sunt. Nesciunt repellat incidunt eos unde nihil itaque, doloribus eaque error ipsam, similique nemo neque. Odio id explicabo dicta quae eligendi .</p>
        </div>
  
   
      </div>
    </div>
  </div>
</template>

<script>
import ParticleTest from "../components/ParticleComponent.vue";
import PersonComponent from "../components/PersonComponent.vue";

export default {
  setup() {
    return {};
  },
  components: { PersonComponent, ParticleTest },
};
</script>
<style scoped>

.heroImage {
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1643915889122-4376c8deb317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}
.framed {

 
  box-shadow:
    -50px -50px 0 -40px var(--darkPink),
    50px 50px 0 -40px  var(--darkPink);
}

</style>
