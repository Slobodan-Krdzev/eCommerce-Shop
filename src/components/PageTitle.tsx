import { useRouter } from "next/router";
import React from "react";

const PageTitle: React.FC = () => {

  const {pathname} = useRouter()

  const title = pathname.split('/')[1]

  return (
    <section
      className="bg-img1 txt-center p-lr-15 p-tb-92"
      style={{ backgroundImage: "url('/images/bg-01.jpg')" }}
    >
      <h2 className="ltext-105 cl0 txt-center text-capitalize">{title}</h2>
    </section>
  );
};

export default PageTitle;
