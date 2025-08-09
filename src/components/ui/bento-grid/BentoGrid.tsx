import React from "react";
import { BentoCard, BentoGrid } from "./Bento";

interface IProps {
  features: {
    name: string;
    description: string;
    href: string;
    className: string;
    background: React.JSX.Element;
  }[];
}

const BentoDemo: React.FC<IProps> = ({ features }) => {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
};

export default BentoDemo;