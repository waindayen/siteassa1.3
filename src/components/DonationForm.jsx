function DonationForm() {
  const donationAmounts = [
    { amount: 30, impact: "1 mois de scolarité" },
    { amount: 50, impact: "2 kits scolaires complets" },
    { amount: 100, impact: "1 formation d'enseignant" },
    { amount: 200, impact: "5 arbres plantés" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Merci pour votre générosité ! Cette fonctionnalité sera bientôt disponible.');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-900 to-emerald-700">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Votre don change des vies
          </h1>
          <p className="text-xl text-emerald-100">
            Chaque contribution nous aide à construire un avenir meilleur pour les communautés dans le besoin
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="text-lg font-semibold text-gray-900 mb-4 block">
                Choisissez le montant de votre don
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {donationAmounts.map(({ amount, impact }) => (
                  <label key={amount} className="relative">
                    <input
                      type="radio"
                      name="amount"
                      value={amount}
                      className="peer sr-only"
                    />
                    <div className="p-4 text-center border-2 border-gray-200 rounded-lg cursor-pointer transition-all peer-checked:border-emerald-500 peer-checked:bg-emerald-50 hover:border-emerald-300">
                      <div className="text-2xl font-bold text-gray-900">{amount}€</div>
                      <div className="text-sm text-gray-600">{impact}</div>
                    </div>
                  </label>
                ))}
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 mb-2">Ou entrez un autre montant</label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    placeholder="Montant personnalisé"
                    className="pl-8 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">€</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-lg font-semibold text-gray-900 block">
                Fréquence du don
              </label>
              <div className="flex gap-4">
                <label className="flex-1">
                  <input
                    type="radio"
                    name="frequency"
                    value="once"
                    defaultChecked
                    className="peer sr-only"
                  />
                  <div className="p-4 text-center border-2 border-gray-200 rounded-lg cursor-pointer transition-all peer-checked:border-emerald-500 peer-checked:bg-emerald-50 hover:border-emerald-300">
                    Don unique
                  </div>
                </label>
                <label className="flex-1">
                  <input
                    type="radio"
                    name="frequency"
                    value="monthly"
                    className="peer sr-only"
                  />
                  <div className="p-4 text-center border-2 border-gray-200 rounded-lg cursor-pointer transition-all peer-checked:border-emerald-500 peer-checked:bg-emerald-50 hover:border-emerald-300">
                    Don mensuel
                  </div>
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-lg font-semibold text-gray-900 block">
                Vos informations
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Prénom"
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <input
                  type="text"
                  placeholder="Nom"
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-3">
                <input type="checkbox" required className="mt-1" />
                <span className="text-gray-600 text-sm">
                  Je souhaite recevoir un reçu fiscal pour déduire 66% de mon don de mes impôts
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-emerald-700 transition-colors duration-300"
            >
              Faire un don sécurisé
            </button>

            <div className="text-center text-sm text-gray-600">
              <p className="mb-2">🔒 Paiement 100% sécurisé</p>
              <p>Un reçu fiscal vous sera automatiquement envoyé</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default DonationForm;