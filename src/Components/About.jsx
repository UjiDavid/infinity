import Button from './Button';
import Heading from './Heading';
import Section from './Section';

const About = () => {
  return (
    <Section id="about">
      <div className="mt-[20rem] md:pt-10 container relative z-2 flex flex-col items-center justify-center">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Bloom Beyond Limits: Introducing Infinity Petal (INP)"
        />
        {/* <GradientLight /> */}
        <p className="text-[0.875rem] leading-[1.5rem] md:text-[1.5rem] md:leading-[2rem] lg:text-[1.85rem] lg:leading-9 max-w-5xl mx-auto mb-6 text-n-2 lg:mb-8 text-center">
          Infinity Petal is driven by the vision of creating
          a decentralized ecosystem that fosters trust,
          transparency, and efficiency. We recognize the
          limitations of existing cryptocurrencies, such as
          scalability issues, lack of privacy, and complex
          user experiences. Infinity Petal aims to overcome
          these challenges by leveraging innovative
          technologies, advanced consensus mechanisms, and a
          user-centric approach.
        </p>
        <Button href="/pricing" white>
          Get started
        </Button>
      </div>
    </Section>
  );
};

export default About;
