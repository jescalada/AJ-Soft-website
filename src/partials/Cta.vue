<template>
  <section>
    <div id="cta" class="max-w-6xl mx-auto px-4 sm:px-6 relative">
      <div class="pt-12 md:pt-20 border-t border-gray-800">
        <div
          class="max-w-3xl mx-auto text-center pb-12 md:pb-16"
          data-aos-id-cta
        >
          <!-- Section header -->
          <h1
            class="h2 mb-4 text-blue-900"
            data-aos="fade-up"
            data-aos-anchor="[data-aos-id-cta]"
          >
            Ready to turn your idea into a successful product?
          </h1>
          <p
            class="text-xl text-slate-600 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="[data-aos-id-cta]"
          >
            Send a message with your project details. I'll get in touch with you
            ASAP!
          </p>

          <!-- Contact form -->
          <form
            class="max-w-xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-anchor="[data-aos-id-cta]"
          >
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  class="block text-blue-700 text-sm font-medium mb-1 float-left"
                  for="name"
                  >Name</label
                >
                <input
                  id="name"
                  type="text"
                  class="form-input w-full text-gray-800"
                  placeholder="Your Name"
                  required
                  v-model="name"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block text-blue-700 text-sm font-medium mb-1 float-left"
                  for="email"
                  >Email</label
                >
                <input
                  id="email"
                  type="email"
                  class="form-input w-full text-gray-800"
                  placeholder="Your Email"
                  required
                  v-model="email"
                />
                <!-- <p class="text-red-500 text-sm mt-2">This field is required</p> -->
              </div>
              <!-- <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  class="block text-blue-700 text-sm font-medium mb-1 float-left"
                  for="message"
                  >Email</label
                >
                <input
                  id="email"
                  type="email"
                  class="form-input w-full text-gray-800 border-red-500 focus:border-red-500"
                  placeholder="Your Email"
                  required
                />
                 <p class="text-red-500 text-sm mt-2">This field is required</p>
              </div> -->
            </div>
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full px-3">
                <label
                  class="block text-blue-700 text-sm font-medium mb-1 float-left"
                  for="message"
                  >Project Details</label
                >
                <textarea
                  id="message"
                  rows="4"
                  class="form-textarea w-full text-gray-800"
                  placeholder="Tell us about your project..."
                  v-model="message"
                ></textarea>
              </div>
            </div>
            <!-- <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full px-3">
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span class="text-gray-400 ml-2">I agree to the privacy policy</span>
                </label>
              </div>
            </div> -->
            <div
              class="flex justify-center -mx-3 mt-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-anchor="[data-aos-id-cta]"
            >
              <div class="px-3 w-full">
                <button
                  class="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
                  v-on:click.prevent="sendEmail"
                >
                  Get a free quote
                </button>
              </div>
            </div>
          </form>

          <!-- <ul class="flex flex-wrap justify-center text-lg text-gray-400 -mx-2 -my-1">
            <li class="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-cta]">
              <svg class="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Free Consultation</span>
            </li>
            <li class="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-cta]">
              <svg class="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Unlimited users</span>
            </li>
            <li class="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="1000" data-aos-anchor="[data-aos-id-cta]">
              <svg class="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Volume discounts</span>
            </li>
          </ul> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "Cta",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs
          .send(
            "service_nillifd",
            "template_55egcka",
            {
              name: this.name,
              email: this.email,
              message: this.message,
            },
            "NirgyErrMCa9expLi"
          )
          .then((e) => console.log(e));
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>
