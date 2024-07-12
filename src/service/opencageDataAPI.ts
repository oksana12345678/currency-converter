import axios from 'axios';
interface Coordinates {
  latitude: number;
  longitude: number;
}
interface Geometry {
  lat: number;
  lng: number;
}

interface Component {
  city: string;
  country: string;
  [key: string]: unknown;
}

interface Result {
  components: Component;
  geometry: Geometry;
}

interface OpenCageDataResponse {
  results: Result[];
}
export const getUserInfo = async ({
  latitude,
  longitude,
}: Coordinates): Promise<OpenCageDataResponse> => {
  const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}`;
  const { data } = await axios.get<OpenCageDataResponse>(urlPosition, {
    params: {
      key: apiKey,
      language: 'en',
    },
  });
  return data;
};
