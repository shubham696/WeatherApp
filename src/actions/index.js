import {
  ON_ERROR,
  ON_SUCCESSFULL_REQUEST,
  REQUEST_BEGIN,
} from '../helpers/actionType';
import {create} from 'apisauce';

export const loadTemperature = (latitude, longitude) => {
  return (dispatch, getState) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    dispatch({
      type: REQUEST_BEGIN,
      payload: true,
    });
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast/daily?appid=c9d49310f8023ee2617a7634de23c2aa&lat=${latitude}&cnt=7&lon=${longitude}`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        console.log('code   ', result.cod);
        if (result.cod != 200) {
          dispatch({type: ON_ERROR, payload: result.cod});
        } else {
          var array = [];
          array.push[(result.list, result.city.name)];
          dispatch({
            type: ON_SUCCESSFULL_REQUEST,
            payload: result,
          });
        }
      })
      .catch((error) => console.log('error', error));
  };
};
