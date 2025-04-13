import { Alert } from 'react-native';

export async function obtenerData(url) {
    const resp = null;

    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error al obtener datos del servidor! status: ${response.status}`);
        }
        resp = await response.json();
      } catch (err) {
        Alert.alert('Error', err.message);
      }

    return resp? resp.data: null;
}
