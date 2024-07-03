import Image from 'next/image';
import { companyLogos } from '../constants';

const CompanyLogos = ({ className }) => {
  console.log(companyLogos);
  return (
    <div className={className}>
      <h2 className="h3 uppercase mb-6 text-center text-n-1/50">
        Featured in
      </h2>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <Image
              src="../public/assets/bitcoin.svg"
              width={134}
              height={28}
              alt="logos"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
