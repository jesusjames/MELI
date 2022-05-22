import React, { Suspense } from 'react';

import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';

const ApplicationRouter = ({
  modules = [],
}) => {

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <AppRouter
          modules={modules}
        />
      </BrowserRouter>
    </Suspense>
  );
};

ApplicationRouter.propTypes = {
  modules: PropTypes.array,
};

export default ApplicationRouter;
