import ToggleSwitch from "./ToggleSwitch";

export default function Sidebar({ darkMode, setDarkMode }) {
  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2 shadow transition-all duration-300 z-50 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Logo */}
      <div className="font-bold text-xl">Logo</div>

      {/* Global Dark/Light Mode Toggle */}
      <div>
        <ToggleSwitch enabled={darkMode} setEnabled={setDarkMode} />
      </div>
    </header>
  );
}
