import { Alert } from 'react-native';

export async function obtenerData(url) {
    var resp = null;

    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error al obtener datos del servidor! status: ${response.status}`);
        }
        resp = await response.json();
      } catch (err) {
        Alert.alert('Error', err.message);
      }

    //console.log('Resp: ' + JSON.stringify(resp.data));

    return resp? resp.data: null;
}

export async function crearEntidad(urlPost, body) {
      var errPost = null;
      var resp = null;

      try {
        const response = await fetch(urlPost, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });

        resp = await response.json();
        console.log('crear Entidad: ' + JSON.stringify(resp));
      } catch(error){
        errPost = error;
      } finally {
        if(errPost == null && resp.status){
          Alert.alert('Información','Data exitosamente enviada al servidor, ID: ' + resp.data.id);
        } else {
            Alert.alert('Error','Data no pudo ser enviada al servidor, detalle: ' + (errPost != null? errPost: resp.error.message));
            //throw errPost;
        }
      }

      return resp && resp.status? resp.data: null;
};