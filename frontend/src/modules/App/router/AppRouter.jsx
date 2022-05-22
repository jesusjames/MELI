import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';

const AppRouter = ({ modules }) => {

  const renderModules = (modules) => {
    return modules.map(
      module => {
        return <Route
          path={module?.pathBase}
          key={module.name}
          element={module.componentRouter}
        />;
      }
    );
  };

  return (
    <Routes>
      {renderModules(modules)}
    </Routes>
  );
};

AppRouter.propTypes = {
  modules: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    pathBase: PropTypes.string.isRequired,
    componentRouter: PropTypes.any.isRequired
  })),
};

export default memo(AppRouter);
