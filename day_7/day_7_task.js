import React, { useState } from "react";

function MiniTask() {
  // State for counter
  const [count, setCount] = useState(0);

  // State for text input
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Counter Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-80 text-center">
        <h2 className="text-xl font-bold mb-4">Counter</h2>
        <p className="text-2xl mb-4">{count}</p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            +
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            -
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-400 text-white rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Live Text Preview Section */}
      <div className="bg-white shadow-md rounded-lg p-6 w-80">
        <h2 className="text-xl font-bold mb-4">Live Text Preview</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="w-full p-2 border rounded-lg mb-4"
        />
        <p className="text-gray-700">
          <strong>Preview:</strong> {text || "Nothing typed yet..."}
        </p>
      </div>
    </div>
  );
}

export default MiniTask;
