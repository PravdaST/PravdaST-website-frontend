import { ReactNode } from 'react';

interface ContentVisibilitySectionProps {
  children: ReactNode;
  height?: string;
  className?: string;
}

export const ContentVisibilitySection = ({ 
  children, 
  height = '1000px',
  className = ''
}: ContentVisibilitySectionProps) => {
  return (
    <section 
      className={className}
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: `1px ${height}`
      }}
    >
      {children}
    </section>
  );
};