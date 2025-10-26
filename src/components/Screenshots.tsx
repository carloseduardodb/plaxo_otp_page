import { useState } from 'preact/hooks'

export function Screenshots() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  const screenshots = [
    {
      title: 'Autenticação Segura',
      description: 'Login com biometria e criptografia de ponta',
      image: '/screenshots/login.png',
      alt: 'Tela de login do Plaxo OTP',
      badge: 'Segurança'
    },
    {
      title: 'Gerenciamento Inteligente',
      description: 'Interface limpa para organizar todos os seus códigos',
      image: '/screenshots/apps.png',
      alt: 'Lista de aplicativos no Plaxo OTP',
      badge: 'Produtividade'
    },
    {
      title: 'Personalização Total',
      description: 'Configure cada detalhe conforme sua preferência',
      image: '/screenshots/settings.png',
      alt: 'Tela de configurações do Plaxo OTP',
      badge: 'Customização'
    }
  ]

  return (
    <section className="py-24 px-6 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-plaxo-surface/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-plaxo-surface border border-plaxo-border rounded-full px-4 py-2 mb-6">
            <svg className="w-4 h-4 text-plaxo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-sm text-plaxo-text-secondary font-medium">Interface Premium</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-plaxo-text">
            Design <span className="gradient-text">Intuitivo</span> e Moderno
          </h2>
          <p className="text-xl text-plaxo-text-secondary max-w-3xl mx-auto leading-relaxed">
            Cada tela foi cuidadosamente projetada seguindo o Design System Plaxo 
            para oferecer a melhor experiência possível
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card p-0 overflow-hidden hover:border-plaxo-primary/30 transition-all duration-500 hover:scale-105">
                {/* Image container */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-plaxo-surface to-plaxo-background overflow-hidden rounded-t-xl">
                  {/* Device frame */}
                  <div className="absolute inset-2 bg-plaxo-background rounded-lg border border-plaxo-border/30 overflow-hidden">
                    <img 
                      src={screenshot.image}
                      alt={screenshot.alt}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Device reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none rounded-t-xl"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-plaxo-primary/90 text-black text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                      {screenshot.badge}
                    </span>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-plaxo-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => setSelectedImage(screenshot.image)}
                      className="bg-plaxo-surface/90 backdrop-blur-sm rounded-full p-3 hover:bg-plaxo-primary/20 transition-colors"
                    >
                      <svg className="w-6 h-6 text-plaxo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-plaxo-text group-hover:text-plaxo-primary transition-colors">
                    {screenshot.title}
                  </h3>
                  <p className="text-plaxo-text-secondary leading-relaxed">
                    {screenshot.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-plaxo-text-secondary mb-6">
            Experimente a interface mais moderna para autenticação OTP
          </p>
          <a href="#download" className="btn-primary inline-flex items-center gap-2">
            <span>Baixar Agora</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
        
        {/* Modal de visualização */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-2xl max-h-[80vh] w-auto">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-plaxo-primary transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedImage}
                alt="Screenshot ampliado"
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
