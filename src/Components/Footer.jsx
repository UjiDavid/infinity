import Section from './Section';
import { socials } from '../constants';
import Image from 'next/image';

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              href={item.url}
              key={item.id}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <Image
                src={item.iconUrl}
                width={16}
                height={16}
                alt={item.title}
              />
            </a>
          ))}
        </ul>
      </div>
      <div className="container flex flex-col items-center justify-center gap-3 pt-6">
        <h6>DISCLAIMER</h6>
        <p className="body-2 text-center caption text-n-4">
          Cryptocurrency investments carry a high risk of
          volatility. Be aware of the tax implications, as
          profits may be subject to capital gains or other
          taxes in your jurisdiction. Cryptocurrency
          regulations can vary, so ensure you understand the
          rules in your area. Conduct thorough research and
          invest only what you can afford to lose.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
