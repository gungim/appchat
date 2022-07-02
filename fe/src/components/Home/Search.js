import { useEffect, useRef } from 'react';

const Search = (props) => {
  const ref = useRef(null);
  const { onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);

  if (!props.isShowSearch) return null;

  return (
    <div
      ref={ref}
      className="absolute"
      style={{ top: `${props.top + 30}px`, left: `${props.left +200}px` }}
    >
      <div className='w-full p-3 rounded-sm bg-gray-700'>
        <div className='w-96'></div>
        <p>input</p>
      </div>
    </div>
  );
};

export default Search;
