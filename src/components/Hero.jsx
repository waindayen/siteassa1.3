import React from 'react';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
        <img
          src="/hero-bg.jpg"
          alt="Children in a classroom"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
      </div>
      
      <div className="max-w-4xl mx-auto animate-fade-in">
        <span className="inline-block text-emerald-400 text-base md:text-lg font-medium mb-4 tracking-wider">
          POUR UN MONDE MEILLEUR
        </span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
          Ensemble, construisons<br className="hidden sm:block"/> un avenir meilleur
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-gray-200 max-w-2xl mx-auto">
          Education, écologie et solidarité pour un monde plus juste et durable
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/projets"
            className="group bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
          >
            Découvrir nos projets
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="/agir"
            className="group bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            Comment agir
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;