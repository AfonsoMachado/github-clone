import React from 'react';
import Heatmap from 'react-calendar-heatmap';
import { subYears, isBefore, isSameDay, addDays } from 'date-fns';

import { Container } from './styles';

type HeatmapValue = { date: Date; count: number };

const RandomCalendar: React.FC = () => {
  // subtraindo 1 ano da data atual
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  return (
    <Container>
      <div className="wrapper">
        {/* start date em um ano atrás */}
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatmapValues(startDate, endDate)}
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

const generateHeatmapValues = (startDate: Date, endDate: Date) => {
  const values: HeatmapValue[] = [];

  let currentDate = startDate;
  // percorrendo o intervalo de data até o ultimo dia (dia atual)
  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    // valor randomico de 0 a 4, para combinar com as cores definidas
    const count = Math.random() * 4;

    values.push({ date: currentDate, count: Math.round(count) });

    currentDate = addDays(currentDate, 1);
  }

  return values;
};

export default RandomCalendar;
