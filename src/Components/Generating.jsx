import { useState } from 'react';
import Button from './Button';
import Timer from './Timer';

const Generating = ({
  className,
  buyTokens,
  address,
  connectWallet,
}) => {
  const [nToken, setNToken] = useState(0);

  return (
    <div
      id="presale"
      className={`flex gap-3 flex-col items-center p-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ''
      } text-center`}
    >
      <h3 className="text-bold text-lg md:text-xl font-bold py-3">
        $INP Presale NOW LIVE
      </h3>
      <p>
        $INP Presale is now live! Click now to connect
        wallet and buy $INP tokens. Use Phantom Wallet,
        Solflare and Metamask
      </p>
      <h4 className="text-bold text-lg h4 text-center">
        Sale Ends In
      </h4>
      <div className="bg-conic-gradient w-full rounded-[1.7rem] p-[1.5px]">
        {address && address.length > 0 ? (
          <div className="bg-n-8 rounded-[1.7rem] p-4 w-full flex gap-3 md:gap-5 items-center justify-center">
            Connected: {address.substring(0, 6)}...
            {address.substring(38)}
          </div>
        ) : (
          <div
            onClick={() => connectWallet()}
            className="bg-n-8 rounded-[1.7rem] p-4 w-full flex gap-3 md:gap-5 items-center justify-center cursor-pointer"
          >
            Connect Wallet
          </div>
        )}
      </div>
      <Timer />
      <div className="flex flex-row mt-3">
        <div className="bg-conic-gradient w-full rounded-[1.7rem] p-[1.5px]">
          <input
            type="number"
            required
            placeholder="1"
            id="nToken"
            className="bg-n-8 rounded-[1.7rem] p-4 w-full flex gap-3 md:gap-5 items-center justify-center"
            onChange={(e) => setNToken(e.target.value)}
            name="token"
          />
        </div>
      </div>
      <div className="flex flex-row bg-conic-gradient rounded-[1.7rem] p-[1.5px]">
        {address && address.length > 0 ? (
          <div
            onClick={() => buyTokens(nToken)}
            className="bg-n-8 rounded-[1.7rem] p-4 cursor-pointer"
          >
            Buy Token
          </div>
        ) : (
          <div className="bg-n-8 rounded-[1.7rem] p-4 w-full flex gap-3 md:gap-5 items-center justify-center">
            Connect Wallet First
          </div>
        )}
      </div>
    </div>
  );
};

export default Generating;
