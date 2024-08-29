import { useState, useEffect } from "react";

type Coordinates = {
  latitude: number;
  longitude: number;
};

export function useUserLocation() {
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      },
      (error) => {
        console.error("Error getting user location:", error);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }, []);

  return userLocation;
}
