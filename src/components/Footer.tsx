export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-plaxo-border bg-plaxo-surface/20">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/file.png" alt="Plaxo OTP Logo" className="w-10 h-10 rounded-xl" />
              <h3 className="font-display text-2xl font-bold text-plaxo-text">
                <span className="gradient-text">Plaxo</span> OTP
              </h3>
            </div>

            <p className="text-plaxo-text-secondary mb-6 max-w-md leading-relaxed">
              Autenticação segura de nível bancário com criptografia AES-256-GCM.
              Parte do ecossistema Plaxo.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/carloseduardodb/plaxo_otp"
                className="flex items-center gap-2 bg-plaxo-surface border border-plaxo-border rounded-xl px-4 py-2 text-plaxo-text-secondary hover:text-plaxo-primary hover:border-plaxo-primary/30 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://github.com/carloseduardodb/plaxo_otp/releases"
                className="flex items-center gap-2 bg-plaxo-surface border border-plaxo-border rounded-xl px-4 py-2 text-plaxo-text-secondary hover:text-plaxo-primary hover:border-plaxo-primary/30 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
                <span>Releases</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-plaxo-text mb-6">Recursos Premium</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-plaxo-text-secondary hover:text-plaxo-primary transition-colors cursor-pointer">
                <svg className="w-4 h-4 text-plaxo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Criptografia AES-256-GCM</span>
              </li>
              <li className="flex items-center gap-2 text-plaxo-text-secondary hover:text-plaxo-primary transition-colors cursor-pointer">
                <svg className="w-4 h-4 text-plaxo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Design System Plaxo</span>
              </li>
              <li className="flex items-center gap-2 text-plaxo-text-secondary hover:text-plaxo-primary transition-colors cursor-pointer">
                <svg className="w-4 h-4 text-plaxo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Integração Ecossistema</span>
              </li>
              <li className="flex items-center gap-2 text-plaxo-text-secondary hover:text-plaxo-primary transition-colors cursor-pointer">
                <svg className="w-4 h-4 text-plaxo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Zero Telemetria</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-plaxo-text mb-6">Plataformas</h4>
            <ul className="space-y-3">
              <li>
                <a href="#download" className="flex items-center gap-2 text-plaxo-text-secondary hover:text-plaxo-primary transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.351" />
                  </svg>
                  <span>Windows 10/11</span>
                </a>
              </li>
              <li>
                <a href="#download" className="flex items-center gap-2 text-plaxo-text-secondary hover:text-plaxo-primary transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span>macOS 10.15+</span>
                </a>
              </li>
              <li>
                <a href="#download" className="flex items-center gap-2 text-plaxo-text-secondary hover:text-plaxo-primary transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 01-.088.066c-.297.168-.623.336-.995.268-.4-.051-.811-.03-1.206-.125-.365-.086-.718-.224-1.054-.410-.243-.134-.460-.316-.605-.533-.18-.282-.188-.612-.244-.911-.06-.334-.06-.67-.116-.999-.053-.316-.186-.609-.244-.924-.06-.334-.06-.67-.116-.999-.06-.334-.06-.67-.116-.999-.053-.316-.186-.609-.244-.924l-.036-.235c.021-.341.1-.671.19-.995.093-.3.205-.599.275-.912.096-.4.33-.8.44-1.206.159-.535.469-1.035.859-1.416.277-.27.61-.468.959-.468h.004c.348 0 .681.198.959.468.39.381.7.881.859 1.416.11.406.344.806.44 1.206.07.313.182.612.275.912.09.324.169.654.19.995z" />
                  </svg>
                  <span>Linux (AppImage)</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/carloseduardodb/plaxo_otp" className="flex items-center gap-2 text-plaxo-text-secondary hover:text-plaxo-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span>Código Fonte</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-plaxo-border pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <p className="text-plaxo-text-secondary text-sm">
                © 2024 Plaxo OTP. Código aberto sob licença MIT.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <a href="https://github.com/carloseduardodb/plaxo_otp/blob/main/LICENSE" className="text-plaxo-text-secondary hover:text-plaxo-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  Licença
                </a>
                <span className="text-plaxo-border">•</span>
                <a href="https://github.com/carloseduardodb/plaxo_otp/issues" className="text-plaxo-text-secondary hover:text-plaxo-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  Suporte
                </a>
                <span className="text-plaxo-border">•</span>
                <a href="https://github.com/carloseduardodb/plaxo_otp/blob/main/CONTRIBUTING.md" className="text-plaxo-text-secondary hover:text-plaxo-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  Contribuir
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-plaxo-text-secondary">
              <span>Desenvolvido com</span>
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>para a comunidade</span>
            </div>
          </div>

          {/* Plaxo ecosystem badge */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-plaxo-surface border border-plaxo-border rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-plaxo-primary rounded-full animate-pulse"></div>
              <span className="text-xs text-plaxo-text-secondary font-medium">
                Parte do ecossistema <span className="gradient-text font-semibold">Plaxo</span> de aplicativos inteligentes
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
