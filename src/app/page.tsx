export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="hero text-center py-20 bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">
          Your Mood, Your Journey: Effortless Tracking
        </h1>
        <p className="text-lg text-gray-600">
          Discover hidden patterns, gain valuable insights, and improve your
          overall well-being.
        </p>
        <a
          href="/signup"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
        >
          Start Tracking Now
        </a>
      </section>

      <section className="features py-20 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 6V3"
              />
            </svg>
            <h3 className="text-lg font-bold text-gray-800 mt-4">
              Visualize Your Mood Trends
            </h3>
            <p className="text-gray-600">
              See how your mood changes over time with easy-to-read charts and
              graphs.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0 1 18 0z"
              />
            </svg>
            <h3 className="text-lg font-bold text-gray-800 mt-4">
              Personalized Insights
            </h3>
            <p className="text-gray-600">
              Get tailored recommendations based on your unique mood patterns.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0 1 18 0z"
              />
            </svg>
            <h3 className="text-lg font-bold text-gray-800 mt-4">
              Easy-to-Use Interface
            </h3>
            <p className="text-gray-600">
              Track your mood effortlessly with our simple and intuitive design.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          What Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          <div className="p-6 border border-gray-200 rounded-lg">
            <p className="text-gray-600">
              This app has been a game-changer for me. I&apos;ve learned so much
              about myself and my emotions.
            </p>
            <p className="text-gray-800 font-bold">John Doe</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <p className="text-gray-600">
              The visualizations are so helpful in understanding my mood
              patterns. I highly recommend this app.
            </p>
            <p className="text-gray-800 font-bold">Jane Smith</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <p className="text-gray-600">
              I love how easy it is to use this app. It&apos;s helped me stay on
              top of my mental health.
            </p>
            <p className="text-gray-800 font-bold">Alex Lee</p>
          </div>
        </div>
      </section>
    </main>
  );
}
