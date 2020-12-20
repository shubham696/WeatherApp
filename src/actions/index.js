import {
  ON_ERROR,
  ON_SUCCESSFULL_REQUEST,
  REQUEST_BEGIN,
} from '../helpers/actionType';
import {create} from 'apisauce';
import env from '../helpers/envConstanst';

const api = create({
  baseURL: env.baseUrl,
});

export const loadTemperature = (latitude, longitude) => {
  return (dispatch, getState) => {
    dispatch({type: REQUEST_BEGIN});
    api
      .get(
        `/data/2.5/forecast/daily?appid=c9d49310f8023ee2617a7634de23c2aa&lat=${latitude}&cnt=7&lon=${longitude}`,
      )
      .then(function (response) {
        if (response.data.cod != 200) {
          dispatch({type: ON_ERROR, payload: response.data.cod});
        } else {
          dispatch({
            type: ON_SUCCESSFULL_REQUEST,
            payload: response.data,
          });
        }
      })
      .catch(function (error) {
        dispatch({type: ON_ERROR, payload: error});
      });
    // api.axiosInstance.interceptors.response.use(
    //   function (response) {
    //     if (response.data) {
    //       // for NETWORK_ERROR data will be null
    //     } else {
    //       return api.axiosInstance.request(response.config);
    //     }
    //     return response;
    //   },
    //   function (error) {
    //     return Promise.reject(error);
    //   },
    // );
  };
};
