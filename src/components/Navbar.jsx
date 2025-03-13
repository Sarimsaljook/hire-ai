
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-700">HireAI - Resume Screener</h1>
      <img src={require('../assets/Hire_AI_logo.png')} width="50" />
    </nav>
  );
}
