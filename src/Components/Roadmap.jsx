import Section from './Section';
import Heading from './Heading';

import { roadmap } from '../constants';
import {
  check02,
  check2,
  grid,
  loading1,
  loading2,
} from '../public/assets';
import Tagline from './Tagline';
import Image from 'next/image';

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading
          tag="Ready to get started"
          title="Roadmap and Development"
        />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status =
              item.status === 'done'
                ? 'In Progress'
                : 'Coming Soon';
            return (
              <div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful
                    ? 'bg-conic-gradient'
                    : 'bg-n-6'
                }`}
                key={item.id}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <Image
                      src={grid}
                      className="w-full"
                      width={550}
                      height={550}
                      alt="grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>
                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <Image
                          src={
                            item.status === 'done'
                              ? check02
                              : loading2
                          }
                          className="mr-2.5"
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">
                          {status}
                        </div>
                      </div>
                    </div>
                    <h4 className="h4 mb-4">
                      {item.title}
                    </h4>
                    <p className="body-2 text-n-4">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;