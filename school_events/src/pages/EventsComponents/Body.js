import React, { useEffect, useState } from "react";
import Cleanliness from "../../assets/images/cleanlinessdrive.svg";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { fetchEvents } from "../../network/api";
import moment from "moment";

function Body() {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewVisible, setViewVisible] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    getEvents();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleClosePopup = () => {
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredEvents.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + filteredEvents.length) % filteredEvents.length
      );
    }
  };

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter(
          (event) => event.attributes.category === selectedCategory
        );

  return (
    <div className="body">
      <div className="buttonSection">
        {[
          "All",
          "Plantation day",
          "Annual day",
          "Sports day",
          "NCC(National cadet corps)",
          "Science labs",
          "Alumni association",
          "Cleanliness drive",
        ].map((category) => (
          <div
            key={category}
            className={`button ${
              selectedCategory === category ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
      {filteredEvents.length > 0 ? (
        <div className="imagesSection">
          {filteredEvents.map((event, index) => (
            <div className="imageblock" key={event.id}>
              <img
                src={
                  event.attributes.image
                    ? `http://localhost:1337${event.attributes.image.data.attributes.url}`
                    : Cleanliness
                }
                alt={event.attributes.Title}
                className="imagespecs"
                onClick={() => handleImageClick(index)}
              />
              <div className="descriptionBlock">
                <p>{event.attributes.Title}</p>
                <div className="date">
                  <CalendarTodayIcon />
                  <p>{moment(event.attributes.date).format("Do MMM YYYY")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="noDataPresent">
          <h1>No data present</h1>
        </div>
      )}
      {viewVisible && filteredEvents.length === 6 && (
        <div
          className="viewMoreContainer"
          onClick={() => setViewVisible(!viewVisible)}
        >
          <div className="viewMore">View More</div>
        </div>
      )}
      {selectedImageIndex !== null && (
        <div className="popup" onClick={handleClosePopup}>
          <div className="popupContent" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
            <span className="prev" onClick={handlePrevImage}>
              &#10094;
            </span>
            <img
              src={`http://localhost:1337${filteredEvents[selectedImageIndex].attributes.image.data.attributes.url}`}
              alt={filteredEvents[selectedImageIndex].attributes.Title}
              className="popupImage"
            />
            <span className="next" onClick={handleNextImage}>
              &#10095;
            </span>
            <div className="popupDescription">
              <p>{filteredEvents[selectedImageIndex].attributes.Title}</p>
              <p>
                {moment(
                  filteredEvents[selectedImageIndex].attributes.date
                ).format("Do MMM YYYY")}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Body;
