export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">
        Test des styles Tailwind
      </h1>
      <p className="text-gray-700 mb-4">
        Cette page est destinée à tester si les styles Tailwind CSS fonctionnent correctement.
      </p>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Bouton de test
      </button>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-200 p-4 rounded-lg">Carte 1</div>
        <div className="bg-yellow-200 p-4 rounded-lg">Carte 2</div>
        <div className="bg-red-200 p-4 rounded-lg">Carte 3</div>
      </div>
    </div>
  );
}
