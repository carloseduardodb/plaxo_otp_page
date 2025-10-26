export function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-plaxo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Segurança Bancária',
      description: 'Criptografia AES-256-GCM com hash SHA-256. Padrão militar de proteção para seus códigos OTP.',
      highlight: 'AES-256-GCM'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-plaxo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      title: 'Design System Plaxo',
      description: 'Interface moderna e intuitiva seguindo o padrão visual do ecossistema Plaxo de aplicativos.',
      highlight: 'Interface Moderna'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-plaxo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Recursos Avançados',
      description: 'System tray, importação 2FAS, backup seguro, sincronização e integração com outros apps Plaxo.',
      highlight: 'Integração Plaxo'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-plaxo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Privacidade Total',
      description: 'Dados locais, zero telemetria, código aberto. Seus códigos nunca saem do seu computador.',
      highlight: 'Zero Telemetria'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-plaxo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Multi-Plataforma',
      description: 'Funciona perfeitamente no Windows, macOS e Linux com a mesma experiência premium.',
      highlight: 'Todas Plataformas'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-plaxo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Código Aberto',
      description: 'Totalmente gratuito e open source. Contribua, audite e personalize conforme suas necessidades.',
      highlight: 'Open Source'
    }
  ]

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-plaxo-surface border border-plaxo-border rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-plaxo-text-secondary font-medium">Recursos Premium</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-plaxo-text">
            Por que escolher o <span className="gradient-text">Plaxo OTP</span>?
          </h2>
          <p className="text-xl text-plaxo-text-secondary max-w-3xl mx-auto leading-relaxed">
            Desenvolvido com foco em segurança, privacidade e integração perfeita 
            com o ecossistema Plaxo de automação
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card group hover:border-plaxo-primary/30 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-plaxo-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-plaxo-primary/20 transition-colors">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-plaxo-text group-hover:text-plaxo-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-plaxo-text-secondary leading-relaxed mb-4">
                {feature.description}
              </p>
              
              <div className="inline-flex items-center text-sm text-plaxo-primary font-medium">
                <span>{feature.highlight}</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="card max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-left">
                <h3 className="font-display text-2xl font-bold text-plaxo-text mb-3">
                  Faça parte do ecossistema <span className="gradient-text">Plaxo</span>
                </h3>
                <p className="text-plaxo-text-secondary">
                  Integre-se com outros aplicativos Plaxo para automação completa de tarefas
                </p>
              </div>
              <div className="flex gap-4">
                <a href="#download" className="btn-primary">
                  Começar Agora
                </a>
                <a href="#screenshots" className="btn-secondary">
                  Ver Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
