import { Link } from "react-router-dom";




export default function Services() {
  return (
<>
<>
 
  {/* ========== MAIN CONTENT ========== */}
  <main id="content" role="main">
    {/* Nav */}
    
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 min-h-[75rem]">
      {/* Page Heading */}
      <header className="max-w-3xl">
        <p className="mb-2 text-sm font-semibold text-blue-600">
          Services Pages | Our Services
        </p>
        <h1 className="block text-2xl font-bold text-gray-400 sm:text-3xl ">
        Unlock Your Business's Full Potential with Our Comprehensive Suite of Services!        </h1>
        <p className="mt-2 text-lg  dark:text-gray-400">
        From software development to IT consulting, we offer a comprehensive range of services to help businesses succeed. Discover how we can help you today
        </p>
        <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
       
          <a
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:ring-offset-slate-900"
            href="../examples.html"
          >
            <svg
              className="w-2.5 h-2.5"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
            Back to examples
          </a>
        </div>
      </header>
      {/* End Page Heading */}
      <>
  {/* Card Blog */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Title */}
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
        Insights
      </h2>
      <p className="mt-1 text-gray-600 dark:text-gray-400">
        Stay in the know with insights from industry experts.
      </p>
    </div>
    {/* End Title */}
    {/* Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card */}
      <a className="group rounded-xl overflow-hidden">
        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
          <img
            className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          />
          <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-red-500 text-white py-1.5 px-3 ">
            Hot
          </span>
        </div>
        <div className="mt-7">
          <h3 className="text-xl font-semibold  group-hover:text-gray-600 Discover">
           Web
          </h3>
          <p className="mt-3  Discover">
          We specialize in delivering powerful, user-friendly web solutions that help businesses succeed. Discover how we can help you achieve your goals today!
          </p>
          <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
          <Link to="/services/webservice">Discover</Link>
            <svg
              className="w-2.5 h-2.5"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </p>
        </div>
      </a>
      {/* End Card */}
      {/* Card */}
      <a className="group rounded-xl overflow-hidden" href="#">
        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
          <img
            className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
            src="https://cdn.discordapp.com/attachments/1008571037862080542/1081034319881052191/anlxgh_iot_internet_of_things_6bc7d6e2-c469-4ad9-accd-56f0ed75a9fc.png"
            alt="Image Description"
          />
        </div>
        <div className="mt-7">
          <h3 className="text-xl font-semibold  group-hover:text-gray-600 Discover">
            Internet Of Things(IoT)
          </h3>
          <p className="mt-3  Discover">
          IoT (Internet of Things) is revolutionizing the way we live, work, and interact with technology. At Greathill, we specialize in developing innovative IoT solutions that help businesses streamline operations, increase efficiency, and drive growth. 
          </p>
          <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
            Discover
            <svg
              className="w-2.5 h-2.5"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </p>
        </div>
      </a>
      {/* End Card */}
      {/* Card */}
      <a
        className="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://images.unsplash.com/photo-1635434225286-8208e890e784?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80')]"
        href="#"
      >
        <div className="flex-auto p-4 md:p-6">
          <h3 className="text-xl text-white/[.9] group-hover:text-white">
            <span className="font-bold">Preline</span> Press publishes books
            about economic and technological advancement.
          </h3>
        </div>
        <div className="pt-0 p-4 md:p-6">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
            Visit the site
            <svg
              className="w-2.5 h-2.5"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </a>
      {/* End Card */}
    </div>
    {/* End Grid */}
    
    <>
  {/* Card Blog */}
  {/* Grid */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
    {/* Card */}
    <a className="group rounded-xl overflow-hidden" href="#">
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img
          className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
          src="https://cdn.discordapp.com/attachments/989268300473192561/1081042488296489040/newbieonebi_mobile_app_development_mobile_app_development_andor_aad27c82-4dbb-48ba-82cc-b811b6b51257.png"
          alt="Image Description"
        />
        <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
         
        </span>
      </div>
      <div className="mt-7">
        <h3 className="text-xl font-semibold  group-hover:text-gray-600 Discover">
         Mobile App Development
        </h3>
        <p className="mt-3  Discover">
        We're experts in creating mobile apps that engage and delight users. Our team of experienced developers can bring your vision to life with custom solutions that are tailored to your specific needs. From simple apps to complex, multi-platform solutions, we have the experience and expertise to deliver the mobile experience your users crave. 
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
          Discover
          <svg
            className="w-2.5 h-2.5"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </p>
      </div>
    </a>
    {/* End Card */}
    {/* Card */}
    <a className="group rounded-xl overflow-hidden" href="#">
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img
          className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
          src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Image Description"
        />
      </div>
      <div className="mt-7">
        <h3 className="text-xl font-semibold  group-hover:text-gray-600 ">
        Artificial Intelligence (AI)
        </h3>
        <p className="mt-3  ">
        Our team of skilled data scientists and engineers are dedicated to creating intelligent solutions that solve real-world problems and drive business success. Whether it's machine learning, natural language processing, or computer vision, we have the expertise to develop custom AI solutions that meet your unique needs.
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
          Discover
          <svg
            className="w-2.5 h-2.5"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </p>
      </div>
    </a>
    {/* End Card */}
    {/* Card */}
    <a
      className="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')]"
      href="#"
    >
      <div className="flex-auto p-4 md:p-6">
        <h3 className="text-xl text-white/[.9] group-hover:text-white">
          <span className="font-bold">Preline</span> Press publishes books about
          economic and technological advancement.
        </h3>
      </div>
      <div className="pt-0 p-4 md:p-6">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
          Visit the site
          <svg
            className="w-2.5 h-2.5"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </a>
    {/* End Card */}
  </div>
  {/* End Grid */}
  {/* End Card Blog */}
</>

  </div>
  {/* End Card Blog */}

  
</>



    </div>
    
  </main>
  {/* ========== END MAIN CONTENT ========== */}



  
</>


  </>
  
  );
}
