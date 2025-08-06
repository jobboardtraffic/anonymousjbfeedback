'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import CompanyCard from '../components/CompanyCard';
import SearchFilters from '../components/SearchFilters';

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

const MOCK_COMPANIES: Company[] = [
  {
    id: '1',
    name: 'TechJobs Pro',
    type: 'job_board',
    description: 'Leading technology job board specializing in software engineering and IT positions.',
    website: 'https://techjobspro.com',
    averageRating: 4.2,
    totalReviews: 28,
    paymentReliability: 4.5,
    communicationQuality: 4.0,
    volumeAccuracy: 4.1,
    complaintHandling: 4.2,
    lastReviewDate: '2024-01-15',
    verified: true
  },
  {
    id: '2',
    name: 'Global Talent Solutions',
    type: 'traffic_buyer',
    description: 'Large-scale candidate traffic buyer serving multiple industries worldwide.',
    website: 'https://globaltalentsolutions.com',
    averageRating: 3.8,
    totalReviews: 45,
    paymentReliability: 3.9,
    communicationQuality: 3.7,
    volumeAccuracy: 3.8,
    complaintHandling: 3.8,
    lastReviewDate: '2024-01-20',
    verified: true
  },
  {
    id: '3',
    name: 'Healthcare Careers Hub',
    type: 'job_board',
    description: 'Specialized job board for healthcare professionals and medical positions.',
    website: 'https://healthcarecareershub.com',
    averageRating: 4.6,
    totalReviews: 19,
    paymentReliability: 4.8,
    communicationQuality: 4.5,
    volumeAccuracy: 4.4,
    complaintHandling: 4.7,
    lastReviewDate: '2024-01-18',
    verified: true
  },
  {
    id: '4',
    name: 'Recruitment Network Inc',
    type: 'traffic_buyer',
    description: 'Mid-size traffic buyer focusing on professional and executive level candidates.',
    website: 'https://recruitmentnetwork.com',
    averageRating: 3.4,
    totalReviews: 32,
    paymentReliability: 3.2,
    communicationQuality: 3.5,
    volumeAccuracy: 3.6,
    complaintHandling: 3.3,
    lastReviewDate: '2024-01-12',
    verified: false
  }
];

export default function DirectoryPage() {
  const [companies, setCompanies] = useState<Company[]>(MOCK_COMPANIES);
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>(MOCK_COMPANIES);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'job_board' | 'traffic_buyer'>('all');
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState<'name' | 'rating' | 'reviews'>('rating');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = companies.filter(company => {
      const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           company.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'all' || company.type === selectedType;
      const matchesRating = company.averageRating >= minRating;
      
      return matchesSearch && matchesType && matchesRating;
    });

    // Sort companies
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.averageRating - a.averageRating;
        case 'reviews':
          return b.totalReviews - a.totalReviews;
        default:
          return 0;
      }
    });

    setFilteredCompanies(filtered);
  }, [companies, searchTerm, selectedType, minRating, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Company Directory</h1>
            <p className="mt-2 text-lg text-gray-600">
              Browse and review job boards and traffic buyers
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <FunnelIcon className="h-5 w-5" />
              Filters
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <SearchFilters
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              minRating={minRating}
              setMinRating={setMinRating}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          )}
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCompanies.length} of {companies.length} companies
          </p>
        </div>

        {/* Company Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>

        {/* No Results */}
        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No companies match your search criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedType('all');
                setMinRating(0);
              }}
              className="mt-4 text-blue-600 hover:text-blue-800"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}