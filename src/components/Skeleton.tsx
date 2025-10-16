import React from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      aria-label="Loading..."
    />
  );
};

export const FacultyCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col items-center">
          {/* Avatar skeleton */}
          <Skeleton className="w-32 h-32 rounded-full mb-4" />
          
          {/* Name skeleton */}
          <Skeleton className="h-6 w-3/4 mb-2" />
          
          {/* Designation skeleton */}
          <Skeleton className="h-4 w-1/2 mb-4" />
          
          {/* Research interests skeleton */}
          <div className="w-full space-y-2 mb-4">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-5/6" />
          </div>
          
          {/* Button skeleton */}
          <Skeleton className="h-10 w-32 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export const FacultyDetailSkeleton: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <Skeleton className="w-48 h-48 rounded-full" />
            <div className="flex-1 space-y-4">
              <Skeleton className="h-8 w-2/3" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </div>

        {/* Content sections skeleton */}
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-8">
              <Skeleton className="h-6 w-1/4 mb-4" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const PageSkeleton: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero skeleton */}
        <div className="mb-12">
          <Skeleton className="h-12 w-1/2 mb-4 mx-auto" />
          <Skeleton className="h-6 w-3/4 mx-auto" />
        </div>

        {/* Content skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6">
              <Skeleton className="h-40 w-full mb-4" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
