type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
};

const SearchBar = ({ search, setSearch }: SearchBarProps) => (
  <div className="w-full flex gap-4 mb-4">
    <form
      className="flex gap-2 items-center bg-gray-100 px-4 py-2 rounded-xl w-full"
      onSubmit={(e) => e.preventDefault()}
    >
      <i className="ri-search-line text-primary"></i>
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-1 rounded-lg focus:border-0 focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  </div>
);

export default SearchBar;
