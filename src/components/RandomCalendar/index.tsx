import React from 'react';
import Heatmap from 'react-calendar-heatmap';
import { subYears } from 'date-fns';

import { Container } from './styles';

const RandomCalendar: React.FC = () => {
  // subtraindo 1 ano da data atual
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  return (
    <Container>
      <div className="wrapper">
        {/* start date em um ano atrás */}
        <Heatmap startDate={startDate} endDate={endDate} values={[]} />
      </div>

      <span>Random calendar (do not represent actual data)</span>
    </Container>
  );
};

export default RandomCalendar;
