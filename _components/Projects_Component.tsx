import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaBackspace, FaBackward } from "react-icons/fa";

const Projects_Component = () => {
  const [selectedSite, setSelectedSite] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const sites = [
    { name: "Badminton court painting, Thane West", numberOfImages: 3 },
    { name: "Kharghar", numberOfImages: 8 },
    { name: "Bhagwati Eleganza - Site 1, Ghansoli", numberOfImages: 16 },
    { name: "Bhagwati Eleganza - Site 2, Ghansoli", numberOfImages: 19 },
    { name: "Bhagwati Eleganza - Site 3, Ghansoli", numberOfImages: 19 },
    { name: "Lodha Amara, Thane West", numberOfImages: 12 },
    { name: "Neelkanth Palms, Thane West", numberOfImages: 5 },
    { name: "Panchavati Plaza, Ghansoli", numberOfImages: 10 },
    { name: "Parsik Nagar, Kalwa", numberOfImages: 18 },
    { name: "Tarangan complex I, Thane West", numberOfImages: 5 },
    { name: "Tarangan complex II, Thane West", numberOfImages: 8 },
    { name: "Thane East", numberOfImages: 7 },
  ];

  const filteredSites = sites.filter((site) =>
    site.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openPopup = (site: any) => {
    console.log(site)
    setSelectedSite(site);
  };

  const closePopup = () => {
    setSelectedSite(null);
  };

  useEffect(()=>{
    setSelectedSite(null)
  },[searchTerm])

  return (
    <div className="flex justify-center p-8">
      {!selectedSite && 
        <div className="lg:w-[80%] w-[90%] max-w-full">
          <div className="text-center mb-8">
            <h1 className="lg:text-4xl text-2xl font-bold text-gray-800 mb-3">{selectedSite ? selectedSite?.name : "Explore Projects"}</h1>
            <p style={{color : "#8c97ad"}}>Discover amazing projects in different locations.</p>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
              style={{background : "black", padding : "10px", border : "2px solid gray", borderRadius : "5px"}}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" style={{marginTop : "50px"}}>
            {filteredSites.map((site, siteIndex) => (
              <div key={siteIndex} className={`rounded-md overflow-hidden shadow-lg ${siteIndex === 0 ? 'w-full md:w-1/2' : ''}`}>
                <div className="cursor-pointer" onClick={() => openPopup(site)}>
                  <div className="bg-lightgray h-40 relative">
                    <Image
                      src={`/projects/${site.name}/proj (1).jpg`}
                      alt={site.name}
                      layout="fill"
                      objectFit="cover"
                      className="skeleton"
                      style={{borderRadius : "3px"}}
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">{site.name}</h2>
                    <p className="text-gray-600">{`${site.numberOfImages} images`}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
      }

      {selectedSite && (
        <div className="flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="rounded-md overflow-hidden shadow-lg p-8 max-w-md">
            <h2 className="text-2xl mb-4 font-bold text-gray-800">{selectedSite?.name}</h2>
            <button
              className="fixed top-0 rounded"
              style={{background : "#f54260", padding : "8px 10px", borderRadius : "50px", border : "2px solid white",
                boxShadow : "0px 10px 20px #000000"
              }}
              onClick={closePopup}
            >
              <FaArrowLeft/>
            </button>
            <div className="flex flex-col flex-wrap">
              {Array.from({ length: selectedSite?.numberOfImages }, (_, index) => (
                <div key={index} className="flex items-center justify-center m-2" style={{margin : "2rem"}}>
                  <Image
                    src={`/projects/${selectedSite?.name}/proj (${index + 1}).jpg`}
                    alt={`Project ${index + 1}`}
                    width={300}
                    height={150}
                    layout="fixed"
                    className="rounded-md skeleton"
                    style={{borderRadius : "3px", outlineOffset : "3px", outline : "1px solid white", }}

                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects_Component;
