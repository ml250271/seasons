import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const DisplaySeason = props => {
  const seasonConfig = {
    summer: {
      text: "lets go to the beach!",
      iconName: "sun"
    },
    winter: {
      text: "Brrr its chilly!!!",
      iconName: "snowflake"
    }
  };
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div>
      <i className={`massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon`} />
    </div>
  );
};

export default DisplaySeason;
