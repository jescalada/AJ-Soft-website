<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-800">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 mb-4 text-blue-900">Our Portolio</h2>
          <p class="text-xl text-blue-800">
            These are some of the projects we worked on with clients.
          </p>
        </div>

        <!-- Articles -->
        <div
          class="max-w-sm mx-auto grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-6 items-start md:max-w-none"
        >
          <!-- 1st article -->
          <article class="flex flex-col h-full" data-aos="fade-up">
            <a class="block" v-scroll-to="'#cta'">
              <figure class="relative h-0 pb-9/16 overflow-hidden">
                <img
                  class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  src="/saas_screenshot.png"
                  width="352"
                  height="198"
                  alt="SaaS Company"
                />
                <!-- <figcaption
                  class="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none"
                  href="#0"
                >
                  Case study
                </figcaption> -->
              </figure>
            </a>
            <div class="grow flex flex-col h-full p-6 bg-blue-900">
              <h3 class="h4 mb-2">
                <a
                  class="hover:text-gray-100 transition duration-150 ease-in-out"
                  v-scroll-to="'#cta'"
                  >SaaS Landing Page</a
                >
              </h3>
              <p class="text-lg text-gray-200 grow">
                A landing page for a Vancouver IT company offering various
                subscription plans. Includes payment integration with Stripe.
              </p>
              <div>
                <!-- <a
                  class="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6"
                  v-scroll-to="'#cta'"
                >
                  <span class="text-sm">View Sample</span>
                  <svg
                    class="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 5H0v2h6v4l6-5-6-5z" />
                  </svg>
                </a> -->
              </div>
            </div>
          </article>

          <!-- 2nd article -->
          <article
            class="flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a class="block" v-scroll-to="'#cta'">
              <figure class="relative h-0 pb-9/16 overflow-hidden">
                <img
                  class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  src="/bonfire.png"
                  width="352"
                  height="198"
                  alt="Bonfire Logo"
                />
              </figure>
            </a>
            <div class="grow flex flex-col h-full p-6 bg-blue-900">
              <h3 class="h4 mb-2">
                <a
                  class="hover:text-gray-100 transition duration-150 ease-in-out"
                  v-scroll-to="'#cta'"
                  >Bonfire</a
                >
              </h3>
              <p class="text-lg text-gray-200 grow">
                A social app similar to Reddit, with posting requirements that
                foster civil discussion. Features include: Tagging, searching
                posts by title or tag, karma system.
              </p>
              <div>
                <!-- <a
                  class="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6"
                  v-scroll-to="'#cta'"
                >
                  <span class="text-sm">View Live</span>
                  <svg
                    class="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 5H0v2h6v4l6-5-6-5z" />
                  </svg>
                </a> -->
              </div>
            </div>
          </article>

          <!-- 3rd article -->
          <article
            class="flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a class="block" v-scroll-to="'#cta'">
              <figure class="relative h-0 pb-9/16 overflow-hidden">
                <img
                  class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  src="/travelr-logo.png"
                  width="352"
                  height="198"
                  alt="Travelr Logo"
                />
              </figure>
            </a>
            <div class="grow flex flex-col h-full p-6 bg-blue-900">
              <h3 class="h4 mb-2">
                <a
                  class="hover:text-gray-100 transition duration-150 ease-in-out"
                  v-scroll-to="'#cta'"
                  >Travelr</a
                >
              </h3>
              <p class="text-lg text-gray-200 grow">
                An application for forming groups and renting shared
                accommodation in big cities. Includes a real-time group chat,
                complex search queries and payment integration with Stripe.
              </p>
              <div>
                <!-- <a
                  class="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6"
                  v-scroll-to="'#cta'"
                >
                  <span class="text-sm">View Live</span>
                  <svg
                    class="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 5H0v2h6v4l6-5-6-5z" />
                  </svg>
                </a> -->
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CaseStudies",
};
</script>
