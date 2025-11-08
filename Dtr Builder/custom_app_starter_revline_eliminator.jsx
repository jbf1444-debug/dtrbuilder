import React, { useState } from "react";

export default function VisualSimulator() {
  const [layers, setLayers] = useState([
    { id: 1, name: "Layer 1", color: "#ffffff", blend: "multiply", visible: true },
    { id: 2, name: "Layer 2", color: "#ffffff", blend: "multiply", visible: true },
    { id: 3, name: "Layer 3", color: "#ffffff", blend: "multiply", visible: true },
  ]);

  const handleColorChange = (id, color) => {
    setLayers((prev) => prev.map((l) => (l.id === id ? { ...l, color } : l)));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Eliminator Interior Visual Simulator</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Color Controls */}
        <div className="space-y-4">
          {layers.map((layer) => (
            <div
              key={layer.id}
              className="flex items-center justify-between bg-gray-800 p-4 rounded-xl border border-gray-700"
            >
              <span className="font-semibold">{layer.name}</span>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={layer.color}
                  onChange={(e) => handleColorChange(layer.id, e.target.value)}
                  className="w-12 h-12 border-none rounded-lg cursor-pointer"
                />
                <span>{layer.color.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Preview Area */}
        <div className="relative bg-gray-700 rounded-2xl overflow-hidden flex items-center justify-center h-[500px]">
          <img
            src="/background.png"
            alt="background"
            className="absolute inset-0 w-full h-full object-contain"
          />
          {layers.map(
            (layer) =>
              layer.visible && (
                <div
                  key={layer.id}
                  style={{
                    backgroundColor: layer.color,
                    mixBlendMode: layer.blend,
                    opacity: 0.8,
                  }}
                  className="absolute inset-0 w-full h-full"
                />
              )
          )}
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold">
          Save Design
        </button>
        <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-semibold">
          Export Image
        </button>
      </div>
    </div>
  );
}
