import clsx from "clsx";
import React, { useEffect, useState } from "react";

type CalculatorProps = {
  data: {
    multiplicator: number;
    label: string;
  }[];
  className?: string;
};

const Calculator = ({ data, className, ...rest }: CalculatorProps) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  });

  if (!data.length) {
    return <></>;
  }

  return (
    <div
      className={clsx(
        "p-6 md:p-12 max-w-[1500px] mx-auto text-center",
        className,
      )}
      {...rest}
    >
      <h2>
        Voici les impacts de l'industrie du saumon dans le monde depuis que vous
        avez ouvert cette page web.
      </h2>
      <div className="h4 pb-6 md:pb-12 text-red1">
        {seconds} {seconds > 1 ? "secondes" : "seconde"}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-12">
        {data.map((element, key) => (
          <li key={key}>
            <span className="h3 block p-2 md:p-4 text-red1">
              {new Intl.NumberFormat("fr").format(
                element.multiplicator * (seconds + 1),
              )}
            </span>
            <span className="">{element.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Calculator;
