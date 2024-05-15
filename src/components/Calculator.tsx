import clsx from "clsx";
import React, { useEffect, useState } from "react";

const Calculator = ({ className }: { className?: string }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div
      className={clsx(
        "p-6 md:p-12 max-w-[1500px] mx-auto text-center",
        className,
      )}
    >
      <h2>
        Voici les impacts de l'industrie du saumon dans le monde depuis que vous
        avez ouvert cette page web.
      </h2>
      <div className="h4 text-red1">
        {seconds} {seconds > 1 ? "secondes" : "seconde"}
      </div>
    </div>
  );
};
export default Calculator;
