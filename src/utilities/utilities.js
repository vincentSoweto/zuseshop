import axios from 'axios';

export const getData = async () => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await axios.get(
      'http://makeup-api.herokuapp.com/api/v1/products.json',
      {headers},
    );

    if (!response.data || !Array.isArray(response.data)) {
      console.error('Invalid response data');
      return [];
    }

    const originalArray = Object.values(response.data);

    const reducedArray = originalArray.map(
      ({id, name, price, image_link, description}) => ({
        id,
        name,
        price,
        image_link,
        description,
      }),
    );

    return reducedArray;
  } catch (error) {
    console.error('------------------error: ', error);
    return [];
  }
};
