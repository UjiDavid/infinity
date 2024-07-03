import Timer from "./Timer";

const Notification = ({ className }) => {
  return (
    <div
      className={`${
        className || ""
      } flex flex-col text-center items-center justify-center p-4 pr-6 bg-n-9/40 backdrop-blur border-n-1/10 rounded-2xl gap-3`}
    >
      <h3 className="h-3 font-bold">
        $INP Presale NOW LIVE
      </h3>
      <p>
        $INP Presale is now live! Click now to connect
        wallet and buy $INP tokens. Use Phantom Wallet,
        Solflare and Metamask
      </p>
      <p className="w-full">
        Add B8NCPK5jgV2YHo44UgAEraV1sGWmC8KgPzZxEZcCJBVT to
        your wallet to see your $INP tokens
      </p>
      <Timer />
    </div>
  );
};

export default Notification;
