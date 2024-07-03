import { useEffect, useState } from 'react';

const Timer = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date('07/31/2024 23:59:59');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      setMinutes(m);

      const s = Math.floor(
        (difference % (1000 * 60)) / 1000
      );
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-conic-gradient w-full rounded-[1.7rem] p-[1.5px]">
      <div className="bg-n-8 rounded-[1.7rem] p-4 w-full flex gap-3 md:gap-5 items-center justify-center">
        <div className="">
          <h6 className="font-semibold text-[13px] md:text-lg">
            Days
          </h6>
          <p className="font-bold text-lg md:text-xl">
            {days}
          </p>
        </div>
        <div className="">
          <h6 className="font-semibold text-[13px] md:text-lg">
            Hours
          </h6>
          <p className="font-bold text-lg md:text-xl">
            {hours}
          </p>
        </div>
        <div className="">
          <h6 className="font-semibold text-[13px] md:text-lg">
            Minutes
          </h6>
          <p className="font-bold text-lg md:text-xl">
            {minutes}
          </p>
        </div>
        <div className="">
          <h6 className="font-semibold text-[13px] md:text-lg">
            Seconds
          </h6>
          <p className="font-bold text-lg md:text-xl">
            {seconds}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
