export default function SidebarItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-gray-700 transition">
      {icon}
      <span>{text}</span>
    </div>
  );
}
