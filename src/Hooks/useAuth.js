import React, { useContext } from 'react';
import { AllContext } from '../Components/context/ContextProvider';

const useAuth = () => {
    return (
         useContext(AllContext)
    );
};

export default useAuth;