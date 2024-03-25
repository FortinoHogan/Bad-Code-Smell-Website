import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useTheme } from "../Context/DarkModeContext";
import sr from "../Service/ScrollReveal";
import ContentCard from "../Components/ContentCard/ContentCard";
import data from "../Service/data";

const Dispensables = () => {
  const { darkMode } = useTheme();
  const [selectedType, setSelectedType] = useState(null);
  const filteredData = data.filter((item) => item.id === 2);

  useEffect(() => {
    const config = {
      origin: "bottom",
      duration: 1000,
      delay: 150,
      distance: "100px",
      easing: "ease",
    };
    sr.reveal(`.content`, config);
  });

  const handleCardClick = (typeId: any) => {
    setSelectedType(typeId === selectedType ? null : typeId);
  };

  return (
    <div className={`${darkMode ? "bgBlackDM " : ""} min-h-screen`}>
      <Navbar />
      <div className="content flex items-center justify-center flex-col min-h-screen relative overflow-hidden">
        {darkMode ? (
          ""
        ) : (
          <span className="hidden absolute bg-radial-gradient opacity-[.15] pointer-events-none lg:inline-flex left-[-15%] top-7 w-[640px] h-[640px]"></span>
        )}
        <div className="mt-48 w-2/3">
          {filteredData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center justify-center"
            >
              <h1
                className={`${
                  darkMode ? "whiteDM" : "blackLM"
                } text-7xl font-bold mb-10 text-center`}
              >
                {data.title}
              </h1>
              <div className="flex flex-col gap-10 w-full">
                {data.type.map((typeItem, index) => (
                  <div
                    key={typeItem.id}
                    className={`${
                      darkMode ? "whiteDM" : "blackLM"
                    } cursor-pointer`}
                  >
                    <ContentCard
                      key={typeItem.id}
                      title={typeItem.smell}
                      img={typeItem.img}
                      description={typeItem.description}
                      onClick={() => handleCardClick(typeItem.id)}
                      delay={index * 100}
                    />
                    {selectedType === typeItem.id && (
                      <div
                        className={`${
                          darkMode
                            ? "whiteDM border-[#ff2d20] bg-1A202C"
                            : "blackLM border-[#171923]"
                        } border-2 rounded-lg w-full p-10 flex flex-col mt-2 gap-5`}
                      >
                        <h1 className="text-4xl font-bold">{typeItem.smell}</h1>
                        <p>{typeItem.description}</p>
                        <p className="text-2xl font-bold">Treatment</p>
                        <ul>
                          {typeItem.solution.map((solution, index) => (
                            <li key={index}>{solution}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dispensables;
