import useGlobalStore from "../../lib/theme/index";

function Navbar() {
  const { theme, toggleTheme } = useGlobalStore();

  return (
    <div className="w-full h-14 bg-white shadow-sm border border-gray-200">
        <div className="flex justify-end space-x-4 items-center">
            {/* <button
                onClick={toggleTheme}
                className="bg-gray-600 shadow-sm py-2 px-4 rounded"
            >
                {theme === 'dark' ? 'light' : 'dark'}
            </button> */}
        </div>
    </div>
  );
}

export default Navbar;
