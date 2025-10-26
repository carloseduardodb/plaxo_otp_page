import { useState, useEffect } from 'preact/hooks'

export function Download() {
  const [detectedOS, setDetectedOS] = useState<string>('')

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    if (userAgent.includes('win')) setDetectedOS('Windows')
    else if (userAgent.includes('mac')) setDetectedOS('macOS')
    else if (userAgent.includes('linux')) setDetectedOS('Linux')
    else setDetectedOS('Windows')
  }, [])

  const downloads = [
    {
      os: 'Windows',
      icon: (
        <svg className="w-8 h-8 text-plaxo-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.351"/>
        </svg>
      ),
      file: 'Plaxo.OTP_1.1.0_x64-setup_windows.exe',
      size: '~1.5MB',
      description: 'Instalador para Windows 10/11'
    },
    {
      os: 'macOS',
      icon: (
        <svg className="w-8 h-8 text-plaxo-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      ),
      file: 'Plaxo.OTP_1.1.0_x64_darwin.dmg',
      size: '~2.3MB',
      description: 'Pacote universal para macOS'
    },
    {
      os: 'Linux',
      icon: (
        <svg className="w-8 h-8 text-plaxo-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 01-.088.066c-.297.168-.623.336-.995.268-.4-.051-.811-.03-1.206-.125-.365-.086-.718-.224-1.054-.410-.243-.134-.460-.316-.605-.533-.18-.282-.188-.612-.244-.911-.06-.334-.06-.67-.116-.999-.053-.316-.186-.609-.244-.924-.06-.334-.06-.67-.116-.999-.06-.334-.06-.67-.116-.999-.053-.316-.186-.609-.244-.924l-.036-.235c.021-.341.1-.671.19-.995.093-.3.205-.599.275-.912.096-.4.33-.8.44-1.206.159-.535.469-1.035.859-1.416.277-.27.61-.468.959-.468h.004c.348 0 .681.198.959.468.39.381.7.881.859 1.416.11.406.344.806.44 1.206.07.313.182.612.275.912.09.324.169.654.19.995z"/>
        </svg>
      ),
      file: 'plaxo-otp_1.1.0_amd64_linux.deb',
      size: '~3.1MB',
      description: 'Pacote DEB para Ubuntu/Debian'
    }
  ]
  
  const additionalDownloads = [
    {
      os: 'macOS Apple Silicon',
      icon: (
        <svg className="w-8 h-8 text-plaxo-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      ),
      file: 'Plaxo.OTP_1.1.0_aarch64_darwin.dmg',
      size: '~2.3MB'
    },
    {
      os: 'Linux RPM',
      icon: (
        <svg className="w-8 h-8 text-plaxo-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 01-.088.066c-.297.168-.623.336-.995.268-.4-.051-.811-.03-1.206-.125-.365-.086-.718-.224-1.054-.410-.243-.134-.460-.316-.605-.533-.18-.282-.188-.612-.244-.911-.06-.334-.06-.67-.116-.999-.053-.316-.186-.609-.244-.924-.06-.334-.06-.67-.116-.999-.06-.334-.06-.67-.116-.999-.053-.316-.186-.609-.244-.924l-.036-.235c.021-.341.1-.671.19-.995.093-.3.205-.599.275-.912.096-.4.33-.8.44-1.206.159-.535.469-1.035.859-1.416.277-.27.61-.468.959-.468h.004c.348 0 .681.198.959.468.39.381.7.881.859 1.416.11.406.344.806.44 1.206.07.313.182.612.275.912.09.324.169.654.19.995z"/>
        </svg>
      ),
      file: 'plaxo-otp-1.1.0-1.x86_64_linux.rpm',
      size: '~3.1MB'
    }
  ]

  const baseUrl = 'https://github.com/carloseduardodb/plaxo_otp/releases/latest/download/'

  return (
    <section id="download" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-plaxo-surface/10 via-transparent to-plaxo-surface/10"></div>
      
      <div className="max-w-6xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 bg-plaxo-surface border border-plaxo-border rounded-full px-4 py-2 mb-6">
          <svg className="w-4 h-4 text-plaxo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="text-sm text-plaxo-text-secondary font-medium">Download Gratuito</span>
        </div>
        
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-plaxo-text">
          Baixe o <span className="gradient-text">Plaxo OTP</span>
        </h2>
        <p className="text-xl text-plaxo-text-secondary mb-16 max-w-3xl mx-auto">
          Disponível para todas as plataformas com a mesma experiência premium
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Main downloads */}
          {downloads.slice(0, 3).map((download, index) => (
            <div 
              key={index}
              className={`card group hover:border-plaxo-primary/50 transition-all duration-300 animate-slide-up ${
                download.os === detectedOS ? 'border-plaxo-primary/30 bg-plaxo-primary/5' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {download.os === detectedOS && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-plaxo-primary text-black text-xs font-semibold px-3 py-1 rounded-full">
                    Recomendado
                  </span>
                </div>
              )}
              
              <div className="w-16 h-16 bg-plaxo-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-plaxo-primary/20 transition-colors">
                {download.icon}
              </div>
              
              <h3 className="text-2xl font-semibold mb-2 text-plaxo-text group-hover:text-plaxo-primary transition-colors">
                {download.os}
              </h3>
              
              <p className="text-plaxo-text-secondary mb-2">{download.description}</p>
              <p className="text-sm text-plaxo-text-secondary mb-6">{download.size}</p>
              
              <a 
                href={`${baseUrl}${download.file}`}
                className="btn-primary w-full group-hover:shadow-lg group-hover:shadow-plaxo-primary/25 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        {/* Additional downloads */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-plaxo-text text-center mb-8">Mais Opções</h3>
          <div className="flex flex-col gap-4 max-w-lg mx-auto">
            {additionalDownloads.map((download, index) => (
              <div key={index + 3} className="card group hover:border-plaxo-primary/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-plaxo-primary/10 rounded-xl flex items-center justify-center group-hover:bg-plaxo-primary/20 transition-colors">
                    {download.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-plaxo-text group-hover:text-plaxo-primary transition-colors">
                      {download.os}
                    </h4>
                    <p className="text-sm text-plaxo-text-secondary">{download.size}</p>
                  </div>
                  <a 
                    href={`${baseUrl}${download.file}`}
                    className="btn-secondary px-4 py-2 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* System Requirements */}
        <div className="card max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-plaxo-primary/10 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-plaxo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-plaxo-text">
              Requisitos do Sistema
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.351"/>
                </svg>
              </div>
              <h4 className="font-semibold text-plaxo-text mb-3">Windows</h4>
              <div className="text-sm text-plaxo-text-secondary space-y-1">
                <p>Windows 10/11 (64-bit)</p>
                <p>2GB RAM mínimo</p>
                <p>10MB espaço livre</p>
                <p>Instalador EXE ou MSI</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-plaxo-text mb-3">macOS</h4>
              <div className="text-sm text-plaxo-text-secondary space-y-1">
                <p>macOS 10.15 ou superior</p>
                <p>Intel x64 ou Apple Silicon</p>
                <p>10MB espaço livre</p>
                <p>Pacote DMG nativo</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 01-.088.066c-.297.168-.623.336-.995.268-.4-.051-.811-.03-1.206-.125-.365-.086-.718-.224-1.054-.410-.243-.134-.460-.316-.605-.533-.18-.282-.188-.612-.244-.911-.06-.334-.06-.67-.116-.999-.053-.316-.186-.609-.244-.924-.06-.334-.06-.67-.116-.999-.06-.334-.06-.67-.116-.999-.053-.316-.186-.609-.244-.924l-.036-.235c.021-.341.1-.671.19-.995.093-.3.205-.599.275-.912.096-.4.33-.8.44-1.206.159-.535.469-1.035.859-1.416.277-.27.61-.468.959-.468h.004c.348 0 .681.198.959.468.39.381.7.881.859 1.416.11.406.344.806.44 1.206.07.313.182.612.275.912.09.324.169.654.19.995z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-plaxo-text mb-3">Linux</h4>
              <div className="text-sm text-plaxo-text-secondary space-y-1">
                <p>Ubuntu 18.04+ / Debian 10+</p>
                <p>Fedora 32+ / RHEL 8+</p>
                <p>10MB espaço livre</p>
                <p>Pacotes DEB e RPM</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-plaxo-text-secondary mb-4">
            ✓ Instalação simples e rápida • ✓ Atualizações automáticas • ✓ Suporte técnico gratuito
          </p>
          <a href="https://github.com/carloseduardodb/plaxo_otp" className="text-plaxo-primary hover:text-plaxo-primary-hover transition-colors" target="_blank" rel="noopener noreferrer">
            Ver código fonte no GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
