<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-16 border-t border-gray-800">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 mb-4 text-blue-900">Portolio</h2>
          <p class="text-xl text-slate-600">
            These are some of the projects I worked on with clients.
          </p>
        </div>

        <!-- Portfolio -->
        <div
          class="max-w-sm mx-auto grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-6 items-start md:max-w-none"
        >
          <!-- 1st project -->
          <article
            class="flex flex-col h-full hover:cursor-pointer"
            data-aos="fade-up"
            @click="openInNewTab('https://bookmarkr.netlify.app/')"
          >
            <a class="block">
              <figure class="relative h-0 pb-9/16 overflow-hidden">
                <img
                  class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  src="/bookmarkr.png"
                  width="352"
                  height="198"
                  alt="Bookmarkr"
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
                  >Bookmarkr</a
                >
              </h3>
              <p class="text-base text-gray-200 grow">
                A Chrome and Firefox extension that allows smart bookmark
                management. Includes landing page and subscription management
                system.
              </p>
              <div></div>
            </div>
          </article>

          <!-- 2nd project -->
          <article
            class="flex flex-col h-full hover:cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="200"
            @click="openInNewTab('https://loopstudios-ca.netlify.app/')"
          >
            <a class="block" v-scroll-to="'#cta'">
              <figure class="relative h-0 pb-9/16 overflow-hidden">
                <img
                  class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  src="/loopstudios.png"
                  width="352"
                  height="198"
                  alt="Loopstudios"
                />
              </figure>
            </a>
            <div class="grow flex flex-col h-full p-6 bg-blue-900">
              <h3 class="h4 mb-2">
                <a
                  class="hover:text-gray-100 transition duration-150 ease-in-out"
                  v-scroll-to="'#cta'"
                  >Loopstudios VR</a
                >
              </h3>
              <p class="text-base text-gray-200 grow">
                A modern, mobile-first landing page for a Canadian VR company.
              </p>
              <div></div>
            </div>
          </article>

          <!-- 3rd project -->
          <article
            class="flex flex-col h-full hover:cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="400"
            @click="openInNewTab('https://cliply.netlify.app/')"
          >
            <a class="block" v-scroll-to="'#cta'">
              <figure class="relative h-0 pb-9/16 overflow-hidden">
                <img
                  class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  src="/cliply.png"
                  width="352"
                  height="198"
                  alt="Cliply"
                />
              </figure>
            </a>
            <div class="grow flex flex-col h-full p-6 bg-blue-900">
              <h3 class="h4 mb-2">
                <a
                  class="hover:text-gray-100 transition duration-150 ease-in-out"
                  v-scroll-to="'#cta'"
                  >Clip.ly</a
                >
              </h3>
              <p class="text-base text-gray-200 grow">
                An application for saving clipboard snippets to the cloud and
                sharing them across iOS devices. Includes payment integration
                with Stripe.
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

          <!-- 4th project -->
          <article
            class="flex flex-col h-full hover:cursor-pointer"
            data-aos="fade-up"
          >
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
                  >WebMania</a
                >
              </h3>
              <p class="text-base text-gray-200 grow">
                A landing page for a Vancouver IT company offering various
                subscription plans. Includes payment integration with Stripe.
              </p>
              <div></div>
            </div>
          </article>

          <!-- 5th project -->
          <article
            class="flex flex-col h-full hover:cursor-pointer"
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
              <p class="text-base text-gray-200 grow">
                A social app similar to Reddit, with posting requirements that
                foster civil discussion. Features include: Tagging, searching
                posts by title or tag, karma system.
              </p>
              <div></div>
            </div>
          </article>

          <!-- 6th project -->
          <article
            class="flex flex-col h-full hover:cursor-pointer"
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
              <p class="text-base text-gray-200 grow">
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
  methods: {
    openInNewTab(url) {
      window.open(url, "_blank", "noreferrer");
    },
  },
};
</script>
