import Link from 'next/link'
import React from 'react'

const SocialMediaList = () => {
  return (
    <>
      <div className="container text-sm pt-5 flex flex-row items-start md:items-center gap-3">
        <Link className='underline text-cornflowerBlue' href={'https://github.com/jpnuwagaba'} target='_blank'>GitHub</Link>
        <Link className='underline text-cornflowerBlue' href={'mailto:jpnuwagaba1@gmail.com'} target='_blank'>Email</Link>
        <Link className='underline text-cornflowerBlue' href={'https://www.linkedin.com/in/john-peter-nuwagaba/'} target='_blank'>LinkedIn</Link>
        <Link className='underline text-cornflowerBlue' href={'https://twitter.com/jpnuwagaba'} target='_blank'>X</Link>
        <Link className='underline text-cornflowerBlue' href={'https://wa.me/+256781147096'} target='_blank'>WhatsApp</Link>
        <Link className='underline text-cornflowerBlue' href={'assets/cv.pdf'} target='_blank'>CV</Link>
      </div>
    </>
  )
}

export default SocialMediaList