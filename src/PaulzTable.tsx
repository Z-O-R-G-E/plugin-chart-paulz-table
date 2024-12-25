import React, { FC, createRef } from 'react';
import {StraightTable} from "./components/tables/StraightTable";
import Styles from "./Styles";
import {PivotTable} from "./components/tables/PivotTable";
import {PaulzTableTransformedProps} from "./types";

const PaulzTable: FC<PaulzTableTransformedProps> = props => {
    const { height, width, isStraightTable} = props;
    const rootElem = createRef<HTMLDivElement>();

    return (
        <Styles ref={rootElem} style={{ width, height }}>
            {isStraightTable
            ?
            <StraightTable/>
            :
            <PivotTable/>}
        </Styles>
    );
};

export default PaulzTable;
