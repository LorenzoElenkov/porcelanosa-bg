import React from "react";
import AboveTheFold from "../../../components/AboveTheFold/AboveTheFold";
import Catalogues from "../../../components/Catalogues/CataloguesContainer";

const Page = () => {
  return (
    <>
      <AboveTheFold
        text="PORCELANOSA"
        image={{ url: "/Porcelanosa_Grupo.jpg", alt: "Porcelanosa" }}
      />
      <Catalogues
        catalogues={[
          {
            name: "Porcelanosa1",
            image: "/UB-XTONE-Yearbook-2021.jpg",
            downloadLink: "",
          },
          {
            name: "Porcelanosa2",
            image: "/UB-XTONE-Yearbook-2021.jpg",
            downloadLink: "",
          },
          {
            name: "Porcelanosa3",
            image: "/UB-XTONE-Yearbook-2021.jpg",
            downloadLink: "",
          },
          {
            name: "Porcelanosa4",
            image: "/UB-XTONE-Yearbook-2021.jpg",
            downloadLink: "",
          },
          {
            name: "Porcelanosa5",
            image: "/UB-XTONE-Yearbook-2021.jpg",
            downloadLink: "",
          },
          {
            name: "Porcelanosa6",
            image: "/UB-XTONE-Yearbook-2021.jpg",
            downloadLink: "",
          },
          {
            name: "Porcelanosa7",
            image: "/UB-XTONE-Yearbook-2021.jpg",
            downloadLink: "",
          },
        ]}
      />
    </>
  );
};

export default Page;
