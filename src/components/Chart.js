import React, { Component } from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';
import { sum, round } from 'lodash';

const Chart = ({ data, color, units }) => {
  const average = () => {
    return round(sum(data) / data.length);
  };

  return (
    <Sparklines className="chart" height={120} width={180} data={data}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
      <div>
        {average()} {units}
      </div>
    </Sparklines>
  );
};

export default Chart;
