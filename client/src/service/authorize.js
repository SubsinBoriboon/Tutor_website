export const authenticate = (response, next) => {
  if (window !== {}) {
    sessionStorage.setItem('Token', JSON.stringify(response.data.Token));
    sessionStorage.setItem('Username', JSON.stringify(response.data.Username));
  }
  next();
};

export const getToken = () => {
  // const [state,setstate]=useState({})
  if (window !== 'undefined') {
    if (sessionStorage.getItem('Token')) {
      return JSON.parse(sessionStorage.getItem('Token')) || 'null';
    } else {
      return false;
    }
  }
};

export const getUsername = () => {
  if (window !== 'undefined') {
    if (sessionStorage.getItem('Username')) {
      return JSON.parse(sessionStorage.getItem('Username')) || 'null';
    } else {
      return false;
    }
  }
};
export const logout = (next) => {
  if (window !== 'undefined') {
    sessionStorage.removeItem('Token');
    sessionStorage.removeItem('Username');
  }
  next();
};
