const About = () => {
  return ( 
    <section className="bg-gray-50 font__poppins" id="About_Us">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wider text-green-500 uppercase">About Us</h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl font__poppins">
            Saving Animal Lives Through Adoption
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 font__poppins">
            <div>
              <dt className="text-2xl font-medium text-gray-900 font__poppins">Our Mission</dt>
              <dd className="mt-2 text-base text-gray-500">
                To lighten the load of shelters and rescues by providing a platform for them to
                connect with potential adopters and donors. We hope to make the adoption process
                easier for both the adopter and the shelter/rescue.
              </dd>
            </div>
            <div>
              <dt className="text-2xl font-medium text-gray-900 font__poppins">Our Vision</dt>
              <dd className="mt-2 text-base text-gray-500">
                We hope to create a world in which pets are able to find happy homes, and
                where shelters and rescues are able to find the resources they need to continue
                rescuing and helping animals.
              </dd>
            </div>
          </dl>
        </div>
        <div className="hidden lg:flex lg:justify-center lg:col-span-5 text-black w-[50%] mx-auto">
          <img src="/images/team.png" alt="About Us Image" />
        </div>
      </div>
    </section>
  );
}
 
export default About;