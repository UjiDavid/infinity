import Accordion from './Accordion';
import Button from './Button';
import Heading from './Heading';
import Section from './Section';

const FAQ = () => {
  return (
    <Section id="faq">
      <div className="container">
        <Heading tag="FAQ" title="Got any Questions" />
        <div className="px-8 md:px-14 flex gap-4 flex-col">
          <Accordion
            title="How To Buy Infinity Petal?"
            answer="SOL can be used to acquire Infinity Petal, which is presently in presale! You can purchase your Infinity Petal, or $INP, using the buy widget at the top of this page."
          />
          <Accordion
            title="What is Infinity Petal ($INP)?"
            answer="Infinity Petal ($INP) is a millennial token built on the Solana blockchain . It serves as a medium of exchange within the ecosystem and facilitates secure, fast, and private transactions. INP has a total supply of 2 billion tokens and plays a vital role in the governance and incentivization mechanisms of the Solana network."
          />
          <Accordion
            title="How do I Contact the Infinity Petal Team?"
            answer="Need help or have any questions? You can contact the Infinity Petal team by joining the Telegram group, where a member of staff will be happy to help."
          />
          <Accordion
            title="Is Infinity Petal Eco-Friendly?"
            answer="Yes, Infinity Petal is committed to environmental sustainability. The token aims to minimize its carbon footprint and energy consumption. The specific details of its eco-friendly initiatives and the measures taken to ensure sustainability can be found in the company's sustainability policy, which may be available on the Infinity Petal website or communicated through official channels."
          />
          <Accordion
            title="When is the Infinity Petal Presale?"
            answer="The Infinity Petal presale is live now! The sale price increases with every presale stage, so the best time to buy is now. Every single presale purchaser will be able to purchase Infinity Petal for a drastically reduced price as compared to the launch price of Infinity Petal ($INP)."
          />
        </div>
        <div className="flex w-full items-center justify-center pt-10">
          <Button href="#presale">Buy & stake now</Button>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
