import React, { FC, createRef } from 'react';
import { PaulzTableProps } from './types';
import {StraightTable} from "./components/tables/StraightTable";

const PaulzTable: FC<PaulzTableProps> = props => {
  const { height, width } = props;
  const rootElem = createRef<HTMLDivElement>();
  return (
      <div ref={rootElem} style={{ width: width, height: height }}>
        <StraightTable />
      </div>
  );
};

export default PaulzTable;
