import React from 'react';
import clsx from 'clsx';

function StatBoxHead(props) {
  const bgColorClass = {
    green: 'bg-green-600',
    red: 'bg-red-600',
    blue: 'bg-blue-600',
    yellow: 'bg-yellow-600',
    purple : 'bg-purple-600'
  }[props.bg] || 'bg-gray-600';

  return (
    <div className={clsx(
      'w-full h-24 flex items-center justify-center rounded-b-3xl gap-5',
      bgColorClass
    )}>
      <img className="h-8" src={props.logo} />
      <h1 className="font-medium text-lg">{props.heading}</h1>
    </div>
  );
}

export default StatBoxHead;
