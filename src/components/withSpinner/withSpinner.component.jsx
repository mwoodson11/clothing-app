import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './withSpinner.styles';

const WithSpinner = WrappedComponent => {
  const Spin = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent { ...otherProps } />
    );
  };
  return Spin;
}

export default WithSpinner;