import React, { useState, useEffect } from "react";
import { CSSProperties } from "react";

// Sample data and current time
const hoursInDay = 24;
const sampleData = [
  { hour: 9, status: "focus" }, // Focused from 9AM to 11AM
  { hour: 10, status: "focus" },
  { hour: 11, status: "distracted" }, // Distracted at 11AM to 12PM
  { hour: 12, status: "distracted" },
  { hour: 13, status: "focus" }, // Focused from 1PM to 3PM
  { hour: 14, status: "focus" },
];

// Inline styles object with explicit CSSProperties type
const styles: { [key: string]: CSSProperties } = {
  ganttChart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "relative", // For positioning the marker
  },
  ganttBlock: {
    flex: 1,
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #ccc",
    position: "relative",
    borderRadius: "16px",
  },
  ganttHour: {
    fontSize: "14px",
    color: "white",
  },
  currentTimeMarker: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "2px",
    backgroundColor: "red",
    zIndex: 1,
  },
  dottedLine: {
    position: "absolute",
    width: "100%",
    height: "2px",
    borderTop: "1px dashed red",
    zIndex: 1,
  },
  currentTimeText: {
    marginBottom: "10px", // Add margin to separate text from chart
    fontSize: "12px",
  },
};

// GanttChart component using inline styles
const GanttChart = () => {
  const [currentTime, setCurrentTime] = useState(new Date()); // Track current time

  // Update current time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every 60 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const currentHour = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();

  // Function to determine the color of each hour
  const getColor = (hour: number): string => {
    const data = sampleData.find((data) => data.hour === hour);
    if (!data) return "#D3D3D3"; // Default grey for not specified hours
    return data.status === "focus" ? "linear-gradient(269.76deg, #92EAE5 0.13%, #73E744 99.73%);" : "grey";
  };


  // Calculate marker position based on current time (hours and minutes)
  const calculateMarkerPosition = (): string => {
    const totalMinutes = currentHour * 60 + currentMinutes; // Total minutes since start of the day
    const percentageOfDay = (totalMinutes / (hoursInDay * 60)) * 100;
    return `${percentageOfDay}%`; // Position marker as a percentage
  };

  return (
    <div>
      {/* Display current time text outside the visualization */}
      <div style={styles.currentTimeText}>
        Current Time: {currentHour}:{currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}
      </div>

      <div style={styles.ganttChart}>
        {/* Render the current time marker */}
        <div
          style={{
            ...styles.currentTimeMarker,
            left: calculateMarkerPosition(), // Set dynamic position for marker
          }}
        />
        {Array.from({ length: hoursInDay }, (_, i) => (
          <div
            key={i}
            style={{
              ...styles.ganttBlock,
              borderRadius: i === 0 ? "16px 0 0 16px" : i === hoursInDay - 1 ? "0 16px 16px 0" : "0", // Conditional borderRadius for first and last block
              background: getColor(i), // Applying color dynamically
            }}
          >
            <span style={styles.ganttHour}>{i}:00</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GanttChart;
