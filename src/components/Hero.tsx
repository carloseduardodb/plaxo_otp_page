export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-plaxo-primary/5 via-transparent to-plaxo-primary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-plaxo-primary/5 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-plaxo-surface border border-plaxo-border rounded-full px-4 py-2 mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-plaxo-primary rounded-full animate-pulse"></div>
          <span className="text-sm text-plaxo-text-secondary font-medium">Aplicação Desktop Moderna e Segura</span>
        </div>
        
        <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
          <span className="gradient-text">Plaxo</span>
          <span className="text-plaxo-text"> OTP</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-plaxo-text max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Autenticação Segura de <span className="gradient-text">Nível Bancário</span>
        </h2>

        <p className="text-lg md:text-xl text-plaxo-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Uma aplicação desktop moderna e segura para geração de códigos OTP (One-Time Password) 
          com criptografia de nível bancário AES-256-GCM.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="https://github.com/carloseduardodb/plaxo_otp/releases/latest"
            className="btn-primary text-lg px-12 py-5 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Download Gratuito</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>

          <a
            href="#features"
            className="btn-secondary text-lg px-10 py-5 group"
          >
            <span>Explorar Recursos</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="card text-center">
            <div className="w-12 h-12 bg-plaxo-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-plaxo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-plaxo-text mb-2">Segurança Máxima</h3>
            <p className="text-sm text-plaxo-text-secondary">Criptografia AES-256-GCM</p>
          </div>

          <div className="card text-center">
            <div className="w-12 h-12 bg-plaxo-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-plaxo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-plaxo-text mb-2">Multi-Plataforma</h3>
            <p className="text-sm text-plaxo-text-secondary">Windows • macOS • Linux</p>
          </div>

          <div className="card text-center">
            <div className="w-12 h-12 bg-plaxo-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-plaxo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="font-semibold text-plaxo-text mb-2">Código Aberto</h3>
            <p className="text-sm text-plaxo-text-secondary">Gratuito • Sem Telemetria</p>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-plaxo-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-plaxo-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-plaxo-primary/15 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  )
}
