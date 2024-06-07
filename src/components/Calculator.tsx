import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
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
  const locale = useLocale();
  const t = useTranslations("components");

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
        "p-6 md:px-12 md:py-32 max-w-[1500px] mx-auto text-center",
        className,
      )}
      {...rest}
    >
      <h2>{t("calculator.intro")}</h2>
      <div className="h4 pb-6 md:pb-12 text-red1">
        {seconds}{" "}
        {seconds > 1 ? t("calculator.seconds") : t("calculator.second")}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-12">
        {data.map((element, key) => (
          <li key={key}>
            <span className="h3 block p-2 md:p-4 text-red1">
              {new Intl.NumberFormat(locale).format(
                element.multiplicator * seconds,
              )}
            </span>
            <span>{element.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Calculator;
