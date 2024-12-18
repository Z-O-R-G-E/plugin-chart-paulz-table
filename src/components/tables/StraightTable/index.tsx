import React, { FC } from 'react';
import {StraightTableTransformedProps} from "../../../types/StraightTableTypes";

export const StraightTable: FC<Omit<StraightTableTransformedProps, 'width'|'height'>> = ({data}) => {

  console.log(data);

  return <>TO DO</>;
};
