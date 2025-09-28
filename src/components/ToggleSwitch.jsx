import { FaSun, FaMoon } from "react-icons/fa";

export default function ToggleSwitch({ enabled, setEnabled }) {
  return (
    <div className="flex items-center gap-3">
      <div
        onClick={() => setEnabled(!enabled)}
        className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300
          ${enabled ? "bg-gray-700" : "bg-yellow-300"}`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md flex items-center justify-center text-yellow-500
            transform transition-transform duration-300
            ${enabled ? "translate-x-8 text-gray-200" : "translate-x-0 text-yellow-500"}`}
        >
          {enabled ? <FaMoon /> : <FaSun />}
        </div>
      </div>
    </div>
  );
}
