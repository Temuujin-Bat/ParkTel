export const CalculateDistance = (lat1, lon1, lat2, lon2) => {
  const toRadians = (degree) => (degree * Math.PI) / 180;

  const R = 6371e3;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon1 - lon2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
};

export const CalculateParkingSpotsWithTime = (
  parkingSpots,
  userLocation,
  averageSpeedMetersPerMinute
) => {
  if (!parkingSpots || !userLocation) return [];

  return parkingSpots.map((spot) => {
    const distanceInMeters = CalculateDistance(
      userLocation.latitude,
      userLocation.longitude,
      spot.coordinates.latitude,
      spot.coordinates.longitude
    );

    const timeInMinutes = distanceInMeters / averageSpeedMetersPerMinute;

    return {
      ...spot,
      timeInMinutes,
    };
  });
};
