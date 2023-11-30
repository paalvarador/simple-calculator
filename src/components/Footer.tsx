import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center">
      <p>
        Designed & Developed by{" "}
        <a
          className="font-bold text-xl text-gold-tahiti"
          href="https://paalvarador.github.io"
        >
          @paalvarador
        </a>
      </p>
    </div>
  );
};

const MemorizedFooter = React.memo(Footer);

export default MemorizedFooter;
