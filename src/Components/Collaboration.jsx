import {
  check,
  checkk,
  tokenomics,
} from '../public/assets';
import { collabContent } from '../constants';
import Section from './Section';
import Button from './Button';
import Image from 'next/image';

const Collaboration = () => {
  return (
    <Section id="tokenomics" crosses>
      <div className="container lg:flex">
        <div className="max-w-[30rem]">
          <h2 className="h2 mb-4 md:mb-8">Tokenomics</h2>
          <p className="mb-4 md:mb-8">
            The INP token serves as the native currency of
            the Infinity Petal ecosystem. With a total
            supply of 2 billion INP tokens, the distribution
            will be as follows:
          </p>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <Image
                    src={checkk}
                    width={24}
                    height={24}
                    alt="check"
                  />
                  <h6 className="body-2 ml-5">
                    {item.title}
                  </h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">
                    {item.text}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <Button href="#roadmap">View Roadmap</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <Image
            src={tokenomics}
            alt="tokenomics"
            width={800}
            height={480}
          />
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
