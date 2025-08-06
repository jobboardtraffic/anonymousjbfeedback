interface SearchFiltersProps {
  selectedType: 'all' | 'job_board' | 'traffic_buyer';
  setSelectedType: (type: 'all' | 'job_board' | 'traffic_buyer') => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  sortBy: 'name' | 'rating' | 'reviews';
  setSortBy: (sort: 'name' | 'rating' | 'reviews') => void;
}

export default function SearchFilters({
  selectedType,
  setSelectedType,
  minRating,
  setMinRating,
  sortBy,
  setSortBy
}: SearchFiltersProps) {
  return (
    <div className="mt-4 pt-4 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Company Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Type
          </label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as 'all' | 'job_board' | 'traffic_buyer')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Companies</option>
            <option value="job_board">Job Boards</option>
            <option value="traffic_buyer">Traffic Buyers</option>
          </select>
        </div>

        {/* Minimum Rating Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Rating
          </label>
          <select
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value={0}>Any Rating</option>
            <option value={1}>1+ Stars</option>
            <option value={2}>2+ Stars</option>
            <option value={3}>3+ Stars</option>
            <option value={4}>4+ Stars</option>
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'name' | 'rating' | 'reviews')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="rating">Highest Rated</option>
            <option value="reviews">Most Reviews</option>
            <option value="name">Company Name</option>
          </select>
        </div>
      </div>
    </div>
  );
}