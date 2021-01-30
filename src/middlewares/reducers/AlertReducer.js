const initialState = {
    type: '',
    message: '',
    visible: false
  };
  
  const alert = (state = initialState, action) => {
    switch (action.type) {
      case 'ALERT_SUCCESS':
        return {
          type: 'success',
          message: action.message,
          visible: true
        };
      case 'ALERT_DANGER':
        return {
          type: 'danger',
          message: action.message,
          visible: true
        };
      case 'ALERT_WARNING':
        return {
          type: 'warning',
          message: action.message,
          visible: true
        };
      case 'ALERT_INFO':
        return {
          type: 'info',
          message: action.message,
          visible: true
        };
      case 'ALERT_CLEAR':
        return {
          type: '',
          message: '',
          visible: false
        };
      default:
        return state;
    }
  };
  
  export default alert;
  