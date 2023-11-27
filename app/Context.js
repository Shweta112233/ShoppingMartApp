import {createContext, useContext, useReducer, useState} from 'react';

const AuthenticationContext = createContext('');

export function AuthenticationContextProvider({children}) {
  const [authContext, setAuthContext] = useState('user');
  return (
    <AuthenticationContext.Provider value={{authContext, setAuthContext}}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export const useAuthenticationContext = () => {
  return useContext(AuthenticationContext);
};
