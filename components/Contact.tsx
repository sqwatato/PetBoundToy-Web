/**
 * Contact
 */

export default function Contact() {
  return (
    <section className="bg-gray-50 custom-hidden" id="Contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md h-full pb-40">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wider text-green-500 uppercase">Contact</h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl font__poppins">
            Have any questions or suggestions? Let us know!
          </p>
        </div>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="example@gmail.com" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Subject</label>
            <input type="text" id="subject" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Let us know how we can help you." required />
          </div>
          <div className="sm:col-span-2">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Your message</label>
            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..." />
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 button--primary">Send Message</button>
        </form>
      </div>
    </section>
    )
}