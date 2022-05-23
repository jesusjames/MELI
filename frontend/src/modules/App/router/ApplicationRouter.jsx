import React from 'react';

import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';

const ApplicationRouter = ({
  modules = [],
}) => {

  return (
    <BrowserRouter>
      <AppRouter
        modules={modules}
      />
    </BrowserRouter>
  );
};

ApplicationRouter.propTypes = {
  modules: PropTypes.array,
};

export default ApplicationRouter;
