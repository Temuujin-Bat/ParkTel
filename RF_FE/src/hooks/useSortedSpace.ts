import { useState, useEffect } from "react";

export function useSortedSpace(parkingSpots, sortType) {
  const [sortedParkingSpots, setSortedParkingSpots] = useState([
    ...parkingSpots,
  ]);

  useEffect(() => {
    const sortedSpots = [...parkingSpots];

    if (sortType === "nearest") {
      sortedSpots.sort((a, b) => a.walkingDistance - b.walkingDistance);
    } else if (sortType === "lowestPrice") {
      sortedSpots.sort((a, b) => a.price - b.price);
    }

    setSortedParkingSpots(sortedSpots);
  }, [sortType, parkingSpots]);

  return sortedParkingSpots;
}
