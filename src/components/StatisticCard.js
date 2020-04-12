import React from 'react';

function StatisticCard({ number, word }) {
  return (
    <div>
      The number of {word} cases: {number}
    </div>
  );
}

export default StatisticCard;
