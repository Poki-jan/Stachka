import React from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export function navigate(name: any, params?: any) {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name as never, params as never)
    }
  }

  export function navigateGoBack() {
    if (navigationRef.isReady()) {
      navigationRef.goBack()
    }
  }