import clsx from "clsx";
import { ReactNode, useState } from "react";

const Accordion = ({
  header,
  content,
}: {
  header: ReactNode;
  content: ReactNode;
}) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className={clsx("cbo-accordion")}>
      <div
        className={clsx(
          "cbo-accordion__header",
          "flex w-fit cursor-pointer items-center justify-between gap-2",
        )}
        onClick={() => setShowContent((prev) => !prev)}
      >
        {header}
        <div>
          {showContent ? (
            <img className="rotate-180" src="/svg/arrow-down.svg" alt="" />
          ) : (
            <img src="/svg/arrow-down.svg" alt="" />
          )}
        </div>
      </div>
      {showContent && content}
    </div>
  );
};

export default Accordion;
