import ShareLink from "@/components/links/shareLink";

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className='flex flex-wrap gap-x-4 gap-y-12 justify-center p-6 lg:p-12 text-white bg-darkblue1'>
    <div className='flex flex-col items-center w-full max-w-64'>
      <img className='mb-4 h-16' src='/images/seastemik-logo.png' alt='' width={64} height={64} />
      <p className='mb-4 lg:text-2xl font-bold'>
        Seastemik
      </p>
      <ShareLink href='https://seastemik.org/' name='Seastemik' />
      <ShareLink type='twitter' href='https://twitter.com/seastemik' name='Seastemik' />
      <ShareLink type='linkedin' href='https://www.linkedin.com/company/seastemik-org' name='Seastemik' />
    </div>

    <div className='flex flex-col items-center w-full max-w-64'>
      <img className='mb-4 h-16' src='/images/dfg-logo.png' alt='' width={64} height={64} />
      <p className='mb-4 lg:text-2xl font-bold'>
        Data for Good
      </p>
      <ShareLink href='https://dataforgood.fr/' name='Data for Good' />
      <ShareLink type='twitter' href='https://twitter.com/dataforgood_fr' name='Data for Good' />
      <ShareLink type='linkedin' href='https://www.linkedin.com/company/dataforgood' name='Data for Good' />
    </div>

    <p className='w-full text-center'>
      All rights reserved <br/> © {currentYear} Seastemik et Data for Good
    </p>
  </footer>
);
 
export default Footer;
