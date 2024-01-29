type Props = {
  keyword?: string;
  onKeyDown?: (event: React.KeyboardEvent) => void;
};
const SearchForm = ({ keyword, onKeyDown }: Props) => {
  return (
    <>
      <input
        type="text"
        className="w-full h-10 bg-transparent border-slate-300 border rounded-xl text-white"
        onKeyDown={onKeyDown}
      ></input>
    </>
  );
};

export default SearchForm;
