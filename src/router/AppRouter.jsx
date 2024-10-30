import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { statusEnum } from '../auth/store';
import { CheckingAuth } from '../ui/Components';
import { useCheckAuth } from '../auth/hooks';



export const AppRouter = () => {
  
  const status = useCheckAuth();

  if ( status === statusEnum.CHECKING) {
    return (
      <CheckingAuth />
    )
  }

  return (
    <Routes>
      
      {
        (status === statusEnum.AUTHENTICATE)
        ? <Route path="/*" element={ <JournalRoutes /> } />
        : <Route path="/auth/*" element={ <AuthRoutes /> } />
      }
      <Route path="/*" element={ <Navigate to="/auth/login"/> }  /> 
      

    </Routes>
  )
}
