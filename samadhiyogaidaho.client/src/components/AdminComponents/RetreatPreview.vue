<template>
   <section>
    <div class="row">
      <section>
        <div class="container">
          <div class="row my-4">
            <div class="col-md-12">
              <h1 class="font-1 text-dark display-4">{{ editable.title }}</h1>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-12 mb-3">
                  <img
                    :src="editable.coverImg"
                    alt=""
                    class="img-fluid rounded-4 elevation-6"
                  />
                </div>
              </div>
            </div>

            <div class="mt-3 sticky-top d-flex justify-content-end">
              <button
                class="btn btn-dark font-2 fs-3 sticky-top"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#retreatImages"
                aria-expanded="false"
                aria-controls="retreatImages"
              >
                More Images <i class="mdi mdi-arrow-collapse-down"></i>
              </button>
            </div>

            <div class="collapse" id="retreatImages">
              <div class="container my-4">
                <div class="masonry">
                  <div
                    @click="setActiveImage(f)"
                    data-bs-toggle="modal"
                    data-bs-target="#activeImage"
                    class="card border-0 elevation-6 bg-transparent my-3 rounded-4"
                    v-for="f in editable.featuredImgs"
                  >
                    <img
                      :src="f"
                      alt=""
                      class="img-fluid hover-image rounded-4 selectable"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container my-5">
          <div class="row">
            <div class="col-md-6">
              <div class="card elevation-orange border-0 rounded-4 p-3">
                <div class="d-flex">
                  <p class="fs-5 text-muted">4 days / 3nights</p>
                </div>

                <div>
                  <p class="fs-5 text-start">
                    The pricing for the retreat starts at $3,275 per couple or
                    broken down to $1,637.50 per person. The retreat price can
                    increase based on what additional activities, if any, you
                    choose to add on.
                  </p>
                </div>
                <div class="">
                  <p class="fs-5 text-start">Payment Options :</p>
                </div>
                <div class="d-flex text-dark p-2 bg-primary rounded">
                  <p class="fs-4 me-3 mb-0">Early Bird</p>
                  <p class="fw-bold fs-4 mb-0">
                    USD ${{ editable?.cost?.price }}
                  </p>
                  <p class="mb-0 ms-2">
                    <b class="text-danger">-$200 </b>(if paid in full by Dec
                    1st)
                  </p>
                </div>
                <div class="d-flex text-dark p-2 bg-success rounded my-2">
                  <p class="fs-4 me-3 mb-0">Payment Plan</p>
                  <p class="fw-bold fs-4 mb-0">USD $247.27</p>
                  <p class="mb-0 ms-2">
                    800$ deposit required for couple, $1637.50/$247.27
                  </p>
                </div>
                <div
                  class="rounded-4 bg-pink p-2 d-flex justify-content-around"
                >
                  <div class="">
                    <p class="mb-0 fs-5">
                      <i class="mdi mdi-calendar bg-muted fs-3"></i> Start Date
                    </p>
                    <p class="fw-semi-bold fs-4">
                      {{ new Date(editable?.startDate).toLocaleDateString() }}
                    </p>
                  </div>
                  <div class="">
                    <p class="mb-0 fs-5">
                      <i class="mdi mdi-calendar bg-muted fs-3"></i> End Date
                    </p>
                    <p class="fw-semi-bold fs-4">
                      {{ new Date(editable?.endDate).toLocaleDateString() }}
                    </p>
                  </div>
                </div>
                <div class="fs-5"><p class="">Accepted Payment Methods</p></div>
                <div class="d-flex justify-content-evenly">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4305/4305518.png"
                    alt=""
                    class="img-fluid"
                    width="40"
                    height="20"
                    title="Cash"
                  />
                  <img
                    src="https://logodix.com/logo/385467.png"
                    alt=""
                    class="img-fluid rounded-5"
                    width="40"
                    height="20"
                    title="Zelle"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968630.png"
                    alt=""
                    class="img-fluid rounded-5"
                    width="40"
                    height="20"
                    title="Apple Pay"
                  />

                  <img
                    src="https://cdn-icons-png.flaticon.com/512/423/423468.png"
                    alt=""
                    class="img-fluid"
                    width="40"
                    height="20"
                    title="Card payment option does incur a 3% charge each transaction"
                  />
                </div>
                <div class="mt-2 fs-5">
                  <p class="">
                    Card payment option does incur a 3% charge each transaction
                  </p>
                </div>
                <div class="text-center">
                  <button
                    class="btn btn-primary font-2 lighten-10 my-3 fs-3 fw-bold"
                  >
                    CONTACT HOST
                  </button>
                  <p>OR</p>
                  <button
                    class="btn btn-outline-primary font-2 lighten-10 my-3 fs-3 fw-bold"
                  >
                    BOOK INSTANTLY
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class=""><h1>Summary</h1></div>
              <div class="">
                <p class="fs-4">{{ editable?.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container my-5">
          <div class="row">
            <div class="col-md-6">
              <div class="">
                <h1 class="display-3 font-2">
                  {{ editable?.location?.address }}
                </h1>
              </div>
              <div class="">
                <p class="fs-4 text-start">
                  {{ editable?.location?.description }}
                </p>
              </div>
            </div>
            <div class="col-md-6 d-flex justify-content-center">
              <img
                :src="editable?.location?.img"
                alt=""
                class="img-fluid rounded-4 elevation-5"
              />
            </div>
            <div class="row my-5">
              <div class="col-md-6 d-flex justify-content-center">
                <img
                  :src="editable?.schedule?.img"
                  alt=""
                  class="img-fluid elevation-5 rounded-4 w-75"
                />
              </div>
              <div class="col-md-6">
                <div class="">
                  <p class="display-3 font-2">Daily Schedule</p>
                </div>
                <div class="">
                  <p class="fs-4 text-start">
                    {{ editable?.schedule?.description }}
                  </p>
                </div>
                <div class="row justify-content-center mt-5">
                  <div class="col-md-6">
                    <div class="card border-0 elevation-orange p-2">
                      <div class="card-body">
                        <p class="fs-4 text-decoration-underline">
                          Optional Activities
                        </p>
                        <ul>
                          <li v-for="a in editable?.activities">
                            <p class="fs-5 text-start">
                              {{ a }}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div class="container my-5">
            <div class="row">
              <div class="col-md-5">
                <div class="">
                  <p class="display-3 mb-0">Food</p>
                  <p class="display-6 text-muted font-2">
                    Featuring {{ editable?.food?.chef }}
                  </p>
                </div>
                <div class="">
                  <p class="fs-4 text-start">
                    {{ editable?.food?.description }}
                  </p>
                </div>
              </div>
              <div class="col-md-7 d-flex justify-content-end">
              </div>
            </div>
          </div>
        </section>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <div
              class="col-md-6 d-flex align-items-center justify-content-center elevation-orange"
            >
            </div>
            <div class="col-md-6">
              <h1 class="display-3 font-2">Accommodations</h1>
              <p class="fs-4 text-start">
                {{ editable?.accommodations?.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container my-3">
          <div class="row">
            <div class="col-md-12">
              <h1 class="display-3 font-2">FAQS</h1>
            </div>
          </div>
          <div class="accordion elevation-6 border-0" id="accordionExample">
            <div
              class="accordion-item border-0 elevation-3"
              v-for="(f, index) in editable?.FAQS"
            >
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button text-dark font-2 fs-3 bg-pink border-0 elevation-6"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse${index.toString()}`"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <i class="mdi mdi-help-circle me-3"></i> {{ f.question }}
                </button>
              </h2>
              <div
                :id="`collapse${index.toString()}`"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p class="fs-3">{{ f.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>   
      </section>
    </div>
  </section>
</template>


<script>
export default {
  props:{
    editable:{type: Object}
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>
.masonry{
  columns: 2;
}
</style>