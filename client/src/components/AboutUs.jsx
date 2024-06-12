import React from 'react'

const AboutUs = () => {
  return (
    <div className='mx-[5%] my-[3%]'>
       <div className='text-3xl font-semibold underline'>About Us</div>
       <div className='text-2xl font-semibold m-4'>Our Mission</div>
       <div className='text-lg font-normal m-6'>At BIET-TnP, our mission is to bridge the gap between students and employers by providing a comprehensive platform that facilitates job opportunities both on-campus and off-campus. We aim to empower students by offering a wide range of job listings, career resources, and networking opportunities, ensuring that every student has the tools they need to succeed in their career journey.</div>
       <div className='text-2xl font-semibold m-4'>Who We Are</div>
       <div className='text-lg font-normal m-6'>We are a dedicated team of tech enthusiasts committed to enhancing the career prospects of our students. Our platform is designed to cater to the unique needs of our college community, providing a seamless experience for students and employers alike.</div>
       <div className='text-2xl font-semibold m-4'>Get In Touch</div>
       <div className='text-lg font-normal m-6'>We value your feedback and are always looking for ways to improve our services. If you have any questions, suggestions, or need assistance, please do not hesitate to contact us.</div>
      <div>
        <p  className='text-xl font-semibold m-2'>Address</p>
        <p className='text-lg font-normal m-2'>NA Block,Room No-302, BIET</p>
      </div>
      <div>
        <p className='text-xl font-semibold m-2'>Email:</p>
        <ul>
          <li className='text-xl m-2'>
          <label htmlFor="gi">General Inquiries:</label>
          <a href="mailto:info@biet.com"  className='text-blue-600 underline'> info@biet.com</a> 
          </li>
          <li className='text-xl m-2'><label htmlFor="s">Support:</label>
          <a href="mailto:support@biet.com"  className='text-blue-600 underline'> support@biet.com</a> </li>
          <li className='text-xl m-2'><label htmlFor="ja">Job Applications: </label>
          <a href="mailto:jobs@biet.com"  className='text-blue-600 underline'> jobs@biet.com</a></li>
          <li className='text-xl m-2'><label htmlFor="wc">WhatsApp Community:</label>
          <a href="/" className='text-blue-600 underline'> Join Here</a> </li>
        </ul>
      </div>
    </div>
    
    
  )
}

export default AboutUs