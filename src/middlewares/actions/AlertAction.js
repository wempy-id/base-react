export const alertActions = {
    success,
    danger,
    warning,
    info,
    clear
  };
  
  function success(message) {
    return { type: 'ALERT_SUCCESS', message };
  }
  
  function danger(message) {
    return { type: 'ALERT_DANGER', message };
  }
  
  function warning(message) {
    return { type: 'ALERT_WARNING', message };
  }
  
  function info(message) {
    return { type: 'ALERT_INFO', message };
  }
  
  function clear() {
    return { type: 'ALERT_CLEAR' };
  }
  