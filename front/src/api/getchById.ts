const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchById = async (id: string) => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('No se encontró el token');
  }

  try {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/quotes/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
