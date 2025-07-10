'use client';

interface WebsiteSchemaProps {
  data: object;
}

export function WebsiteSchema({ data }: WebsiteSchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}