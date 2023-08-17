const About = () => {
  return ( 
    <section className="bg-gray-50 font__poppins">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wider text-green-500 uppercase">About Us</h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl font__poppins">
            We're a non-profit dedicated to creating a world where every pet has a home.
          </p>
          <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto font__poppins">
            Through our platform, we facilitate the adoption of pets from shelters and rescues,
            and help you find your soulpet.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 font__poppins">
            <div>
              <dt className="text-2xl font-medium text-gray-900 font__poppins">Our Mission</dt>
              <dd className="mt-2 text-base text-gray-500">
                We're a non-profit dedicated to creating a world where every pet has a home.
                Through our platform, we facilitate the adoption of pets from shelters and rescues,
                and help you find your soulpet.
              </dd>
            </div>
            <div>
              <dt className="text-2xl font-medium text-gray-900 font__poppins">Our Vision</dt>
              <dd className="mt-2 text-base text-gray-500">
                We're a non-profit dedicated to creating a world where every pet has a home.
                Through our platform, we facilitate the adoption of pets from shelters and rescues,
                and help you find your soulpet.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
 
export default About;