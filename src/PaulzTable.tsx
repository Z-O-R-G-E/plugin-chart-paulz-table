import React, { FC, createRef } from 'react';
import {StraightTable} from "./components/tables/StraightTable";
import {StraightTableTransformedProps} from "./types/StraightTableTypes";

const PaulzTable: FC<StraightTableTransformedProps> = props => {
  const { columns, data, height, width } = props;
  const rootElem = createRef<HTMLDivElement>();

  return (
      <div ref={rootElem} style={{ width: width, height: height }}>
        <StraightTable columns={columns} data={data}/>
      </div>
  );
};

export default PaulzTable;
