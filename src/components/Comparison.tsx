export function Comparison() {
  const features = [
    { name: 'Criptografia AES-256-GCM', plaxo: 'Máximo', others: 'Básico' },
    { name: 'Código Aberto', plaxo: 'Sim', others: 'Limitado' },
    { name: 'Privacidade Total', plaxo: 'Máximo', others: 'Médio' },
    { name: 'Interface Moderna', plaxo: 'Máximo', others: 'Básico' },
    { name: 'Multiplataforma', plaxo: 'Sim', others: 'Limitado' },
    { name: 'Backup Seguro', plaxo: 'Sim', others: 'Não' },
    { name: 'System Tray', plaxo: 'Sim', others: 'Não' },
    { name: 'Importação 2FAS', plaxo: 'Sim', others: 'Não' }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-plaxo-text-primary">
            Comparação com Concorrentes
          </h2>
          <p className="text-xl text-plaxo-text-secondary">
            Veja por que o Plaxo OTP é a melhor escolha
          </p>
        </div>
        
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-plaxo-border">
                  <th className="text-left py-4 px-6 text-plaxo-text-primary font-semibold">
                    Recurso
                  </th>
                  <th className="text-center py-4 px-6 text-plaxo-primary font-semibold">
                    Plaxo OTP
                  </th>
                  <th className="text-center py-4 px-6 text-plaxo-text-secondary font-semibold">
                    Outros Apps
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr 
                    key={index}
                    className="border-b border-plaxo-border/50 hover:bg-plaxo-surface/30 transition-colors"
                  >
                    <td className="py-4 px-6 text-plaxo-text-primary">
                      {feature.name}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        feature.plaxo === 'Máximo' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-plaxo-primary/20 text-plaxo-primary'
                      }`}>
                        {feature.plaxo}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-500/20 text-red-400">
                        {feature.others}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
