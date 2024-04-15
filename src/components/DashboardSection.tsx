import clsx from 'clsx';
import React, { Component } from 'react'

const DashboardSection = ({
  className,
  title,
  content,
  chart
}: {
  className?: string;
  title: string;
  content: string;
  chart: Component
}) => {
  return (
    <div className={clsx('flex flex-col md:flex-row md:items-center gap-6 xl:gap-14 p-6 pb-14 xl:p-14', className)}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};
export default DashboardSection
