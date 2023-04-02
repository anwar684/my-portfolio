import React from "react";
import classNames from "classnames";

type Props = {
  skillLevel: number;
  skill: string;
};

const SkillStars = (props: Props) => {
  const starClasses = classNames(
    "inline-block w-4 h-4 fill-current text-yellow-500",
    "mr-1"
  );

  return (
    <div className="flex items-center flex-col m-2">
      <h2 className="text-white"> {props.skill} </h2>
      <div>
        {[...Array(5)].map((_, i) => (
          <svg
            key={`star-${i}`}
            className={starClasses}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            {i < props.skillLevel ? (
              <path d="M9.99 1.449l2.551 5.4c.134.285.39.485.692.53l5.889.9c.554.084.776.835.393 1.274l-4.244 4.137c-.188.183-.267.461-.215.72l1.006 5.878c.051.298-.125.604-.428.724l-5.551 2.79c-.27.135-.596.135-.865 0l-5.551-2.79c-.303-.12-.479-.426-.428-.724l1.006-5.878c.052-.26-.027-.537-.215-.72L2.274 8.053c-.383-.439-.161-1.19.393-1.274l5.889-.9c.302-.045.558-.245.692-.53z" />
            ) : (
              <path
                d="M9.99 1.449l2.551 5.4c.134.285.39.485.692.53l5.889.9c.554.084.776.835.393 1.274l-4.244 4.137c-.188.183-.267.461-.215.72l1.006 5.878c.051.298-.125.604-.428.724l-5.551 2.79c-.27.135-.596.135-.865 0l-5.551-2.79c-.303-.12-.479-.426-.428-.724l1.006-5.878c.052-.26-.027-.537-.215-.72L2.274 8.053c-.383-.439-.161-1.19.393-1.274l5.889-.9c.302-.045.558-.245.692-.53z"
                fill="#CBD5E0"
              />
            )}
          </svg>
        ))}
      </div>
        <span className="text-gray-700 hidden">{props.skillLevel}</span>
    </div>
  );
};

export default SkillStars;
