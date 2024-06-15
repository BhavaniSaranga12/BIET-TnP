import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white  py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap ml-[5%] justify-between">
     
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h1 className="md:text-2xl text-lg font-semibold mb-4">Bharat Institute of Engineering and Technology</h1>
      
      </div>

    
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
        <ul className="text-sm space-y-2">
          <li><a href="/oncampus-jobs" className="hover:underline">On-Campus Jobs</a></li>
          <li><a href="/offcampus-jobs" className="hover:underline">Off-Campus Jobs</a></li>
          <li><a href="/hackathons" className="hover:underline">Hackathons</a></li>
          <li><a href="/trainings" className="hover:underline">Workshops & Trainings</a></li>
          <li><a href="/aboutus" className="hover:underline">About Us</a></li>
        </ul>
      </div>

    
      <div className="w-full md:w-1/3">
        <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
        <p className="text-sm">
          <strong>Email:</strong> support@biet.edu<br />
          <strong>Phone:</strong> (123) 456-7890<br />
          <strong>Address:</strong> NA Block, Room no-302, BIET
        </p>
        <div className="mt-4">
          <a href="https://chat.whatsapp.com/invite/link" className="inline-block bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600">
            Join our WhatsApp Community
          </a>
        </div>
      </div>
    </div>

   
    <div className="mt-8 border-t border-gray-700 pt-4 text-center">
      <p className="text-sm">&copy; 2024 BIET Training and Placement Cell. All rights reserved.</p>
      {/* <div className="flex justify-center space-x-4 mt-4">
        <a href="https://www.facebook.com/[CollegeName]" className="hover:text-gray-400">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com/[CollegeName]" className="hover:text-gray-400">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/school/[CollegeName]" className="hover:text-gray-400">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div> */}
    </div>
  </div>
</footer>

  )
}

export default Footer