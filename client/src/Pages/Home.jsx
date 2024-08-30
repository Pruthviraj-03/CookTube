import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Images/logo3.png";

const Home = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v2/videos");
      setVideos(response.data);
      // console.log("fetchVideos ....", response.data);
    } catch (error) {
      console.error("Error fetching videos:", error.message);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const titleTrim = (content, maxLength = 50) => {
    if (content.length > maxLength) {
      return content.slice(0, maxLength) + "...";
    }
    return content;
  };

  const formatViews = (views) => {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K";
    } else {
      return views.toString();
    }
  };

  return (
    <div className="flex flex-row w-full h-auto">
      <Navbar />
      <div className="flex flex-wrap w-90 h-auto ml-4 gap-4 mt-3">
        {videos.map((videos, index) => (
          <div
            key={index}
            className="w-19 h-64 gap-5p flex flex-col cursor-pointer my-2"
          >
            <div className="w-full h-65 rounded-xl overflow-hidden">
              <img
                src={videos.thumbnailURL}
                className="w-full h-full object-cover"
                alt="video thumbnail"
              />
            </div>
            <div className="flex flex-row w-full h-30 rounded-sm">
              <img src={Logo} className="w-15 h-60 p-5" alt="" />
              <div className="w-70 h-full flex flex-col gap-3p px-1">
                <span className="h-75 w-full font-poppins text-md font-700 text-main-color overflow-hidden">
                  {titleTrim(videos.title)}
                </span>
                <div className="flex w-full h-20 items-center flex-row gap-7">
                  <span className="font-poppins text-sm font-700 text-dark-grey">
                    {formatViews(videos.views)} views
                  </span>
                  <span className="font-poppins text-2xl pb-4 font-700 text-dark-grey">
                    .
                  </span>
                  <span className="font-poppins text-sm font-700 text-dark-grey">
                    {videos.duration} min
                  </span>
                </div>
              </div>
              <div className="w-15 h-60 flex items-center justify-center border border-main-color rounded-50">
                <FontAwesomeIcon className="text-lg" icon={faDollar} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
