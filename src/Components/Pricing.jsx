import Section from './Section';
import Heading from './Heading';
import {
  solana,
  stars,
  inp_icon,
  starss,
} from '../public/assets';

import { LeftLine, RightLine } from './design/Pricing';
import {
  LeftCurve,
  RightCurve,
} from './design/Collaboration';
import { collabApps } from '../constants';
import Button from './Button';
import Image from 'next/image';

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          {/* <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="sphere"
          /> */}
          <div className="relative flex w-[22rem] aspect-square border border-n-6 rounded-full scale:75 md:scale:100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <Image
                    src={inp_icon}
                    width={48}
                    height={48}
                    alt="Infinity Petal"
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <Image
                      src={app.icon}
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              src={starss}
              className="w-full"
              width={950}
              height={400}
              alt="stars"
            />
          </div>
        </div>
        <Heading
          tag="get started with $INP"
          title="How to Join the Infinity Petal Presale"
        />
        <div className="relative">
          <div className="flex flex-col md:flex-row items-start gap-5 justify-center mb-5 border border-n-1/10 rounded-3xl p-8 md:p-14">
            <div className="w-full md:w-2/4">
              <p className="w-full mb-4 md:mb-8">
                You have the opportunity to purchase $INP
                prior to the token launch during the
                Infinity Petal presale. In addition to being
                able to purchase with cryptocurrency, you
                can stake your tokens to gain incentives
                once the token is launched. Tokens that you
                have purchased will be delivered straight to
                your wallet.
              </p>
              <Button href="#presale">
                Buy & stake now
              </Button>
            </div>
            <div className="flex flex-col gap-3 md:flex-row w-full md:w-2/4">
              <div>
                <Image
                  src={solana}
                  width={100}
                  height={100}
                  alt="solana"
                  className="my-2"
                />
                <h3 className="h5">Purchase Using Cypto</h3>
                <p className="body-2 text-n-3">
                  You have the opportunity to purchase $INP
                  prior to the token launch during the
                  Infinity
                </p>
              </div>
              <div>
                <Image
                  src={inp_icon}
                  width={100}
                  height={100}
                  className="my-2"
                  alt="solana"
                />
                <h3 className="h5">Put $INP at stake</h3>
                <p className="body-2 text-n-3">
                  On token launch, access the staking
                  dashboard to stake your $INP. Get
                  incentives right now!
                </p>
              </div>
            </div>
          </div>
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
