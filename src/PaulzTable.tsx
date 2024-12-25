import React, { FC, createRef } from 'react';
import {StraightTable} from "./components/tables/StraightTable";
import {StraightTableTransformedProps} from "./types/StraightTableTypes";
import Styles from "./Styles";

const PaulzTable: FC<StraightTableTransformedProps> = props => {
  const { columns, data, height, width } = props;
  const rootElem = createRef<HTMLDivElement>();

  return (
      <Styles ref={rootElem} style={{ width, height }}>
        <StraightTable columns={columns} data={data}/>
      </Styles>
  );
};

export default PaulzTable;
