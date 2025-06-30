import React, { useState, useEffect } from 'react';
import { ExternalLink, Users, Calculator, BarChart3, FileText, RefreshCw } from 'lucide-react';

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

const services: ServiceCard[] = [
  {
    id: 'microhybe',
    title: 'MicroHYBE',
    description: 'Plataforma principal de gestión y operaciones internas',
    url: 'https://microhybe.hybelatinamerica.com/',
    icon: <Users className="w-8 h-8" />
  },
  {
    id: 'rh-control',
    title: 'RH Control',
    description: 'Sistema de control y gestión de recursos humanos',
    url: 'https://rh.hybelatinamerica.com/',
    icon: <FileText className="w-8 h-8" />
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Dashboard de análisis y métricas empresariales',
    url: 'https://analytics.hybelatinamerica.com/',
    icon: <BarChart3 className="w-8 h-8" />
  },
  {
    id: 'calculadora',
    title: 'Calculadora RH',
    description: 'Herramientas de cálculo para recursos humanos',
    url: 'https://calculadora.hybelatinamerica.com/',
    icon: <Calculator className="w-8 h-8" />
  }
];

function App() {
  const [reportUrl, setReportUrl] = useState('https://docs.google.com/presentation/d/1ywV_jz3QLI0WhyfXzFfUQDkLz6H3DCqo8to4mfhiYuY/embed?start=false&loop=false&delayms=3000');
  const [newUrl, setNewUrl] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleUpdateReport = () => {
    if (!newUrl.trim()) return;
    
    setIsUpdating(true);
    
    // Convert edit URL to embed URL
    const embedUrl = newUrl.trim().replace('/edit', '/embed?start=false&loop=false&delayms=3000');
    
    setTimeout(() => {
      setReportUrl(embedUrl);
      setNewUrl('');
      setIsUpdating(false);
      
      // Show toast notification
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 500);
  };

  const handleServiceClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/image.png" 
                alt="HYBE Latin America" 
                className="h-8 w-auto"
              />
              <span className="text-sm font-medium text-gray-600">Latin America</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-900 tracking-tight">Centro HYBE</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
              Bienvenid@s al Centro HYBE
              <br />
              <span className="text-3xl sm:text-4xl text-gray-600 font-extralight">Latin America</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Todos tus recursos, en un solo lugar
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white border border-gray-200 rounded-lg p-8 hover:border-[#FFF200] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer"
                  onClick={() => handleServiceClick(service.url)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Acceder a ${service.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleServiceClick(service.url);
                    }
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg group-hover:bg-[#FFF200]/10 transition-all duration-300">
                      <div className="text-gray-700 group-hover:text-[#FFF200] group-hover:scale-105 transition-all duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-[#FFF200] transition-colors duration-300 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed font-light">
                        {service.description}
                      </p>
                      <div className="flex items-center text-[#FFF200] font-medium group-hover:translate-x-1 transition-transform duration-300">
                        <span className="mr-2">Entrar</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Monthly Report Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-medium text-gray-900 mb-2 tracking-tight">
                  Reporte Mensual
                </h3>
                <p className="text-gray-600 font-light">
                  Presentación actualizada con las métricas y resultados del mes
                </p>
              </div>
              
              <div className="relative" style={{ height: '600px' }}>
                <iframe
                  id="reporte"
                  src={reportUrl}
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                  title="Reporte Mensual HYBE Latin America"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Update Report Form */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-medium text-gray-900 mb-4 tracking-tight">
                Actualizar Reporte
              </h3>
              <p className="text-gray-600 mb-6 font-light">
                Pega el enlace del nuevo Google Slides para actualizar el reporte mensual
              </p>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="nuevoLink" className="sr-only">
                    Enlace del nuevo reporte
                  </label>
                  <input
                    type="url"
                    id="nuevoLink"
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    placeholder="https://docs.google.com/presentation/..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFF200] focus:border-transparent transition-colors duration-200"
                    disabled={isUpdating}
                  />
                </div>
                
                <button
                  onClick={handleUpdateReport}
                  disabled={!newUrl.trim() || isUpdating}
                  className="w-full bg-[#23E08A] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#1fc77a] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
                  aria-label="Actualizar reporte mensual"
                >
                  {isUpdating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Actualizando...</span>
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-4 h-4" />
                      <span>Actualizar</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 mt-12">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-500 font-light">
              © 2025 HYBE Latin America. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </main>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
          <div className="bg-gray-900 text-white px-6 py-3 rounded-md shadow-lg">
            <p className="font-medium">¡Reporte actualizado!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;