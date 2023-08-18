const Search = () => {
  return ( 
    <section className="bg-white font__poppins">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wider text-green-500 uppercase">Search</h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl font__poppins">
            Find Animals Near You
          </p>
        </div>
        <div className="mt-12">
          <form className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="sm:col-span-2 lg:col-span-3">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.25 1.5a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM0 8.25a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0z"/>
                    <path d="M13.5 13.5l4.5 4.5"/>
                  </svg>
                </div>
                <input id="search" name="search" className="block w-full py-3 pl-10 pr-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder="Search by city, state, or zip code" type="search" />
              </div>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <label htmlFor="species" className="sr-only">Species</label>
              <select id="species" name="species" className="block w-full py-3 pl-3 pr-10 text-base text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                <option>Cat</option>
                <option>Dog</option>
                <option>Other</option>
              </select>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <label htmlFor="breed" className="sr-only">Breed</label>
              <select id="breed" name="breed" className="block w-full py-3 pl-3 pr-10 text-base text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                <option>Any</option>
                <option>American Bulldog</option>
                <option>Australian Shepherd</option>
                <option>Basset Hound</option>
                <option>Beagle</option>
                <option>Bernese Mountain Dog</option>
                <option>Boxer</option>
                <option>Brittany</option>
                <option>Bulldog</option>
                <option>Boston Terrier</option>
                <option>Cavalier King Charles Spaniel</option>
                <option>Chihuahua</option>
                <option>Cocker Spaniel</option>
                <option>Collie</option>
                <option>Dachshund</option>
                <option>Doberman Pinscher</option>
                <option>English Springer Spaniel</option>
                <option>French Bulldog</option>
                <option>German Shepherd</option>
                <option>German Shorthaired Pointer</option>
                <option>Golden Retriever</option>
                <option>Great Dane</option>
                <option>Havanese</option>
                <option>Labrador Retriever</option>
                <option>Maltese</option>
                <option>Mastiff</option>
                <option>Miniature American Shepherd</option>
                <option>Miniature Schnauzer</option>
                <option>Pembroke Welsh Corgi</option>
                <option>Pomeranian</option>
                <option>Poodle</option>
                <option>Pug</option>
                <option>Rottweiler</option>
                <option>Siberian Husky</option>
                <option>Shetland Sheepdog</option>
                <option>Shih Tzu</option>
                <option>Vizsla</option>
                <option>West Highland White Terrier</option>
                <option>Yorkshire Terrier</option>
              </select>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <label htmlFor="age" className="sr-only">Age</label>
              <select id="age" name="age" className="block w-full py-3 pl-3 pr-10 text-base text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                <option>Any</option>
                <option>Baby</option>
                <option>Young</option>
                <option>Adult</option>
                <option>Senior</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Custom Dog Description
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#location</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#age</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#animal_type</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#breed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Search;