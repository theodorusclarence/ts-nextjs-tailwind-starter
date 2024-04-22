import ShareLink from "@/components/links/shareLink";

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="p-6 lg:p-12 text-yellow1 bg-darkblue1">
    <div className="max-w-[1500px] mx-auto">
      <div className="flex flex-wrap gap-6 lg:gap-12 lg:pt-12">
        <div className="flex flex-col w-full max-w-72">
          <p className="font-secondary md:mb-4 text-xl lg:text-[2.5rem] font-black uppercase tracking-widest">
            Seastemik
          </p>
          <ShareLink href="https://seastemik.org/" name="Seastemik" />
          <ShareLink
            type="linkedin"
            href="https://www.linkedin.com/company/seastemik-org"
            name="Seastemik"
          />
          <ShareLink type="email" href="info@seastemik.org" name="Seastemik" />
        </div>

        <div className="flex flex-col w-full max-w-72">
          <p className="font-secondary md:mb-4 text-xl lg:text-[2.5rem] font-black uppercase tracking-widest">
            Data for Good
          </p>
          <ShareLink href="https://dataforgood.fr/" name="Data for Good" />
          <ShareLink
            type="twitter"
            href="https://twitter.com/dataforgood_fr"
            name="Data for Good"
          />
          <ShareLink
            type="linkedin"
            href="https://www.linkedin.com/company/dataforgood"
            name="Data for Good"
          />
          <ShareLink
            type="email"
            href="hellodataforgood@gmail.com"
            name="Data for Good"
          />
        </div>
      </div>

      <p className="mt-6 lg:mt-12 lg:text-xl">
        All rights reserved <br />© {currentYear} Seastemik et Data for Good
      </p>
    </div>
  </footer>
);

export default Footer;
