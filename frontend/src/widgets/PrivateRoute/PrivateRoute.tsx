import React, { FC } from 'react';

interface Props {
  props?: any;
}

const PrivateRoute: FC<Props> = ({ props }) => {
  return <div>TSX component</div>;
};

export default PrivateRoute;
