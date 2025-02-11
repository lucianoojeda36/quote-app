import axios from 'axios';
const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchRate = async (from: string, to: string, amount: number) => {
  try {
    if (!from || !to || !amount || isNaN(Number(amount))) {
      console.error('Invalid parameters for fetchRate');
      return null;
    }

    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found');
      return null;
    }

    const { data } = await axios.post(
      `${NEXT_PUBLIC_API_URL}/quotes`,
      { from, to, amount },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return data;
  } catch (error) {
    console.error(`Error fetching rate: ${error}`);
    return null;
  }
};
