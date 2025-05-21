"use client";

import React from 'react';

export default function DebugPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">
        Débogage Tailwind CSS
      </h1>
      <p className="text-gray-700 mb-4">
        Cette page permet de tester si les classes Tailwind les plus basiques fonctionnent.
      </p>
      <div className="flex flex-col space-y-4">
        <div className="bg-red-200 p-4 rounded">Couleur de fond rouge clair</div>
        <div className="bg-blue-200 p-4 rounded">Couleur de fond bleu clair</div>
        <div className="bg-green-200 p-4 rounded">Couleur de fond vert clair</div>
      </div>
      <button 
        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => alert('Classes Tailwind testées')}
      >
        Tester Tailwind
      </button>
    </div>
  );
}
