import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {useAuth} from '../contexts/auth';

import AuthRoutes from '../routes/auth.routes';
import AppRoutes from '../routes/app.routes';

const Routes: React.FC = () => {
  const {signed, loading} = useAuth();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
