import React from 'react';

interface IllustrationSectionProps {
  imageUrl: string;
  title: string;
  description: string;
  reverse?: boolean;
  children?: React.ReactNode;
}

export function IllustrationSection({
  imageUrl,
  title,
  description,
  reverse = false,
  children
}: IllustrationSectionProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-16`}>
      <div className="w-full md:w-1/2">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover rounded-2xl shadow-xl animate-float"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
}