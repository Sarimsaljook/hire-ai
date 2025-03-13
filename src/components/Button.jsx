export default function Button({ text, onClick, type = "primary" }) {
    const baseStyle = "px-4 py-2 rounded-lg font-semibold transition";
    const styles = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
      danger: "bg-red-500 text-white hover:bg-red-600",
    };
  
    return (
      <button onClick={onClick} className={`${baseStyle} ${styles[type]}`}>
        {text}
      </button>
    );
  }
  