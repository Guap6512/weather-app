export const formatLocationCoordinates = (latitude: number, longitude: number): string => {
    const latitudeString = `${String(latitude).substring(0, 7)}`;
    const longitudeString = `${longitude > 0 ? '+' : ''}${String(longitude).substring(0, 8)}`;

    return `${latitudeString}${longitudeString}`;
};
