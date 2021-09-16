import React from "react";

const Heading: React.FC = ({ children }) => {
  return (
    <h2 className="text-2xl font-bold text-blue-900" data-testid="heading">
      {children}
    </h2>
  );
};

export default Heading;
