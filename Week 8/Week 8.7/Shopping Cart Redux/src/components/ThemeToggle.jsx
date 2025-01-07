import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, selectDarkMode } from '../store/reducer/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectDarkMode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="fixed top-4 right-4 p-2 bg-gray-700 rounded-full dark:bg-gray-100"
    >
      {isDarkMode ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeToggle;