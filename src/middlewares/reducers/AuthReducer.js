import Cookies from 'js-cookie';

const InitialState = {
  Token:
    typeof Cookies.get('ACCESS_TOKEN') !== 'undefined'
      ? Cookies.get('ACCESS_TOKEN')
      : '',
  data:''
};

const authentication = (state = InitialState, action = {}) => {
  switch (action.type) {
    case 'GET_AUTH_TOKEN':
      state.data = action.payload;
      //alert(`${action.payload.accessToken}`)
      return {
        ...state,
        data: state.data
      };
    default:
      return state;
  }
};
export default authentication;
