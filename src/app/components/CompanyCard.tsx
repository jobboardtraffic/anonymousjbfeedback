import Link from 'next/link';
import { StarIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

interface Company {
  id: string;
  name: string;
  type: 'job_board' | 'traffic_buyer';
  description: string;
  website: string;
  averageRating: number;
  totalReviews: number;
  paymentReliability: number;
  communicationQuality: number;
  volumeAccuracy: number;
  complaintHandling: number;
  lastReviewDate: string;
  verified: boolean;
}

interface CompanyCardProps {
  company: Company;
}

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' }) {
  const sizeClass = size === 'md' ? 'h-5 w-5' : 'h-4 w-4';
  
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <div key={star}>
          {star <= Math.floor(rating) ? (
            <StarIcon className={`${sizeClass} text-yellow-400`} />
          ) : star === Math.ceil(rating) && rating % 1 !== 0 ? (
            <div className="relative">
              <StarOutlineIcon className={`${sizeClass} text-gray-300`} />
              <StarIcon 
                className={`${sizeClass} text-yellow-400 absolute top-0 left-0`} 
                style={{ clipPath: `inset(0 ${100 - (rating % 1) * 100}% 0 0)` }}
              />
            </div>
          ) : (
            <StarOutlineIcon className={`${sizeClass} text-gray-300`} />
          )}
        </div>
      ))}
      <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function CompanyCard({ company }: CompanyCardProps) {
  const typeLabel = company.type === 'job_board' ? 'Job Board' : 'Traffic Buyer';
  const typeColor = company.type === 'job_board' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
              {company.verified && (
                <CheckBadgeIcon className="h-5 w-5 text-blue-500" title="Verified Company" />
              )}
            </div>
            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${typeColor}`}>
              {typeLabel}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{company.description}</p>

        {/* Rating */}
        <div className="mb-4">
          <StarRating rating={company.averageRating} />
          <p className="text-xs text-gray-500 mt-1">
            Based on {company.totalReviews} review{company.totalReviews !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Rating Categories */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">Payment Reliability</span>
            <span className="font-medium">{company.paymentReliability.toFixed(1)}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">Communication</span>
            <span className="font-medium">{company.communicationQuality.toFixed(1)}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">Volume Accuracy</span>
            <span className="font-medium">{company.volumeAccuracy.toFixed(1)}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">Complaint Handling</span>
            <span className="font-medium">{company.complaintHandling.toFixed(1)}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            href={`/company/${company.id}`}
            className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            View Details
          </Link>
          <Link
            href={`/feedback/submit?company=${company.id}`}
            className="flex-1 bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
          >
            Add Review
          </Link>
        </div>

        {/* Last Review Date */}
        <p className="text-xs text-gray-400 mt-3 text-center">
          Last reviewed: {new Date(company.lastReviewDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}