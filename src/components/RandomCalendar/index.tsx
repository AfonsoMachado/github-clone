import React from 'react';
import Heatmap from 'react-calendar-heatmap';
import { subYears } from 'date-fns';

import { Container } from './styles';

type HeatmapValue = { date: Date; count: number };

const RandomCalendar: React.FC = () => {
  // subtraindo 1 ano da data atual
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  const values: HeatmapValue[] = [];

  values.push({ date: new Date(), count: 3 });

  return (
    <Container>
      <div className="wrapper">
        {/* start date em um ano atrás */}
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={values}
          // tamanho do quadradinho
          gutterSize={3.5}
          classForValue={(item: HeatmapValue) => {
            let clampedCount = 0;

            // o valor que vai representar a cor do numero de contruiibuições nao pode ser menos que zero ou maior que 4, sendo assim se alguem contribuir 9, a cor será o 4
            if (item !== null) {
              clampedCount = Math.max(item.count, 0);
              clampedCount = Math.min(item.count, 4);
            }

            // retorna o css correspondente à escala de cor conforme o numero de contrubuições
            return `scale-${clampedCount}`;
          }}
          showWeekdayLabels
        />
      </div>

      <span>Random calendar (do not represent actual data)</span>
    </Container>
  );
};

export default RandomCalendar;
