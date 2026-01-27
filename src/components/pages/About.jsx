// export default function About() {
//   return <h1 className="text-center text-3xl p-10">About Us</h1>;
// }





export default function About() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="px-2 py-32 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  <span className="block">Useful Tools to</span>
                  <span className="block text-indigo-600">
                    Help You Build Faster.
                  </span>
                </h1>

                <p className="text-base text-gray-500 lg:text-xl">
                  It's never been easier to build beautiful websites that convey
                  your message and tell your story.
                </p>

                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="#"
                    className="flex items-center px-6 py-3 text-lg text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                  >
                    Try It Free →
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <img
                className="rounded-xl shadow-xl"
                src="https://images.unsplash.com/photo-1498049860654-af1a5c566876"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-semibold">Boost Productivity</h2>
            <p className="mt-4 text-gray-700">
              Build an atmosphere that creates productivity in your organization.
            </p>
            <ul className="mt-6 space-y-2 text-gray-500">
              <li>✔ Maximize productivity and growth</li>
              <li>✔ Speed past your competition</li>
              <li>✔ Learn the top techniques</li>
            </ul>
          </div>

          <img
            src="https://cdn.devdojo.com/images/december2020/productivity.png"
            alt=""
          />
        </div>

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 mt-20">
          <img
            src="https://cdn.devdojo.com/images/december2020/settings.png"
            alt=""
          />
          <div>
            <h2 className="text-3xl font-semibold">Automated Tasks</h2>
            <p className="mt-4 text-gray-700">
              Save time and money with our revolutionary services.
            </p>
            <ul className="mt-6 space-y-2 text-gray-500">
              <li>✔ Automated task management</li>
              <li>✔ Detailed analytics</li>
              <li>✔ Awesome integrations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TOOLS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold">
              Jam-packed with all the tools you need
            </h2>
            <ul className="mt-6 space-y-4 text-gray-500">
              <li>🚀 Faster Processing and Delivery</li>
              <li>📦 Tracking and Monitoring</li>
              <li>🔐 100% Protection & Security</li>
            </ul>
          </div>
          <img
            src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
            alt=""
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold">What people say</h2>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            {["John Doe", "Jane Doe", "John Smith"].map((name, i) => (
              <div key={i} className="text-gray-500">
                <h4 className="font-bold text-gray-800">{name}</h4>
                <p className="mt-4">
                  “Amazing product. Highly recommended!”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold">Pricing Options</h2>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            {[
              { name: "Basic", price: "$19" },
              { name: "Plus", price: "$39" },
              { name: "Pro", price: "$59" },
            ].map((plan) => (
              <div
                key={plan.name}
                className="border rounded-xl p-8 hover:shadow-lg"
              >
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <p className="text-5xl font-bold mt-4">{plan.price}</p>
                <button className="mt-6 px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white">
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
