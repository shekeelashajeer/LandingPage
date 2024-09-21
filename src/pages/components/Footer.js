import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        
        <div>
          <div className="flex items-center space-x-2">
            <img src="image/icon2.png" alt="icon" className="h-8 w-8" />
            <span className="text-2xl font-bold">Nexcent</span>
          </div>
          <div className="text-center mt-8 border-gray-700 flex space-x-4">
            <p>Copyright © 2020 Landify UI Kit.<br /></p>
          </div>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">About us</a></li>
            <li><a href="#blog" className="hover:underline">Blog</a></li>
            <li><a href="#contact" className="hover:underline">Contact us</a></li>
            <li><a href="#pricing" className="hover:underline">Pricing</a></li>
            <li><a href="#testimonial" className="hover:underline">Testimonials</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li><a href="#help" className="hover:underline">Help center</a></li>
            <li><a href="#terms" className="hover:underline">Terms of service</a></li>
            <li><a href="#legal" className="hover:underline">Legal</a></li>
            <li><a href="#privacy" className="hover:underline">Privacy policy</a></li>
            <li><a href="#status" className="hover:underline">Status</a></li>
          </ul>
        </div>

        
        <div className="relative">
          <h4 className="text-lg font-semibold mb-4">Stay up to date</h4>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 pl-10 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
            required
          />
          <div className="absolute right-12 top-1/3 left-2/3 transform -translate-y-1/2 w-[20px] h-[20px] flex items-center">
  <a href="mailto:abc123@gmail.com">
    <img src="image/email.png" alt="Email Icon" className='w-[20px] h-[20px]' />
  </a>
</div>

        </div>
        
        
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#instagram" className="hover:text-gray-400">
                <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.304 3.608 1.279.974.975 1.217 2.242 1.278 3.608.059 1.265.071 1.645.071 4.849s-.012 3.584-.071 4.849c-.062 1.366-.304 2.633-1.279 3.608-.975.974-2.242 1.217-3.608 1.278-1.265.059-1.645.071-4.849.071s-3.584-.012-4.849-.071c-1.366-.062-2.633-.304-3.608-1.279-.974-.975-1.217-2.242-1.278-3.608C2.175 15.584 2.163 15.204 2.163 12S2.175 8.416 2.233 7.151c.062-1.366.304-2.633 1.279-3.608C4.487 2.567 5.754 2.325 7.12 2.264c1.265-.058 1.645-.071 4.849-.071zm0-2.163c-3.259 0-3.67.013-4.946.072-1.61.073-2.964.37-4.059 1.464C2.375 2.55 2.078 3.904 2.005 5.514 1.946 6.79 1.933 7.201 1.933 12c0 4.798.013 5.209.072 6.485.073 1.61.37 2.964 1.464 4.059 1.095 1.095 2.449 1.391 4.059 1.464 1.276.059 1.687.072 4.946.072s3.67-.013 4.946-.072c1.61-.073 2.964-.37 4.059-1.464 1.095-1.095 1.391-2.449 1.464-4.059.059-1.276.072-1.687.072-4.946s-.013-3.67-.072-4.946c-.073-1.61-.37-2.964-1.464-4.059-1.095-1.095-2.449-1.391-4.059-1.464-1.276-.059-1.687-.072-4.946-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-10.845a1.44 1.44 0 11-2.879 0 1.44 1.44 0 012.879 0z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#twitter" className="hover:text-gray-400">
                <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.013-.607 1.794-1.566 2.163-2.724-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.719 0-4.92 2.235-4.92 4.996 0 .39.045.765.13 1.124C7.69 8.095 4.066 6.13 1.64 3.161c-.427.733-.666 1.58-.666 2.476 0 1.708.869 3.215 2.188 4.099-.807-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417-1.68 1.319-3.809 2.107-6.104 2.107-.395 0-.779-.023-1.159-.067 2.179 1.393 4.768 2.209 7.548 2.209 9.057 0 14.01-7.514 14.01-14.025 0-.213-.005-.426-.015-.637.961-.695 1.8-1.562 2.462-2.549z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#youtube" className="hover:text-gray-400">
                <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M23.495 6.203c-.203-1.12-1.064-1.981-2.187-2.184-1.928-.299-9.693-.299-9.693-.299s-7.765 0-9.693.299c-1.123.203-1.984 1.064-2.187 2.184-.299 1.928-.299 5.941-.299 5.941s0 4.014.299 5.941c.203 1.12 1.064 1.981 2.187 2.184 1.928.299 9.693.299 9.693.299s7.765 0 9.693-.299c1.123-.203 1.984-1.064 2.187-2.184.299-1.928.299-5.941.299-5.941s0-4.013-.299-5.941zm-13.99 8.485V9.312l6.016 3.688-6.016 3.688z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
