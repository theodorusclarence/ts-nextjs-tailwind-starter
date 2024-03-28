const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className='bg-orange2 '>
    <div className='px-6 md:px-12 py-6 md:py-7 pt-0'>
      
      <div className='md:grid md:grid-cols-2'>
        <div className='flex flex-col items-center py-5' >
          <div>
            <img className='mb-4 h-16' src='/images/seastemik-logo.png' alt='' />
          </div>
          <p className='mb-4 text-2xl'>
            <b>Seastemik</b>
          </p>
          <div className='flex flex-col gap-2'>
            <a
              className='flex w-[110px] justify-between'
              href='https://seastemik.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>Website</span>
              <img src='/svg/globe.svg' alt='' />
            </a>
            <a
              className='flex w-[110px] justify-between'
              href='https://twitter.com/seastemik'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>Twitter</span>
              <img src='/svg/x-logo.svg' alt='' />
            </a>
            <a
              className='flex w-[110px] justify-between'
              href='https://www.linkedin.com/company/seastemik-org'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>LinkedIn</span>
              <img src='/svg/linkedin-logo.svg' alt='' />
            </a>
          </div>
        </div>
        <div className='flex flex-col items-center py-5 pb-20 '>
          <div>
            <img className='mb-4' src='/images/d4g-logo.png' alt='' />
          </div>
          <p className='mb-4 text-2xl'>
            <b>Data for Good</b>
          </p>
          <div className='flex flex-col gap-2'>
            <a
              className='flex w-[110px] justify-between'
              href='https://dataforgood.fr/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>Website</span>
              <img src='/svg/globe.svg' alt='' />
            </a>
            <a
              className='flex w-[110px] justify-between'
              href='https://twitter.com/dataforgood_fr'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>Twitter</span>
              <img src='/svg/x-logo.svg' alt='' />
            </a>
            <a
              className='flex w-[110px] justify-between'
              href='https://www.linkedin.com/company/dataforgood'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>LinkedIn</span>
              <img src='/svg/linkedin-logo.svg' alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className='flex justify-center md:justify-end m-0 p-0'>
        <p className='text-center self-end md:text-right m-0 p-0'>
          All rights reserved <br/> © {currentYear} Seastemik and Data for Good
        </p>
      </div>
    </div>
  </footer>
);
 
export default Footer;
