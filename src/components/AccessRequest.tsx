import { useState } from 'preact/hooks'
import { FORMSPREE_FORM_ID } from '../config/formspree'

export function AccessRequest() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })

  const handleSubmit = async (e: Event) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
          subject: 'Solicitação de Acesso - Plaxo OTP',
          _replyto: formData.email
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ email: '', message: '' })
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-plaxo-success/5 via-transparent to-plaxo-primary/10 rounded-3xl"></div>
        
        <div className="relative bg-plaxo-surface/80 backdrop-blur-sm border border-plaxo-success/20 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto text-center shadow-2xl">
          {/* Success animation */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-plaxo-success/20 to-plaxo-primary/20 rounded-full animate-ping"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-plaxo-success/10 to-plaxo-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-plaxo-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-plaxo-success to-plaxo-primary bg-clip-text text-transparent mb-6">
            Solicitação Enviada!
          </h3>
          
          <div className="bg-plaxo-success/10 border border-plaxo-success/20 rounded-2xl p-6 mb-8">
            <p className="text-lg text-plaxo-text leading-relaxed">
              Sua solicitação foi recebida com sucesso!
            </p>
            <p className="text-plaxo-text-secondary mt-2">
              Nossa equipe analisará seu pedido e você receberá as instruções de acesso 
              <span className="font-semibold text-plaxo-success">em até 24 horas</span>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-plaxo-surface border border-plaxo-border hover:border-plaxo-primary text-plaxo-text hover:text-plaxo-primary font-medium py-3 px-6 rounded-xl transition-all duration-300"
            >
              ← Nova Solicitação
            </button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-plaxo-border/30">
            <div className="flex items-center justify-center gap-6 text-sm text-plaxo-text-secondary">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-plaxo-success rounded-full animate-pulse"></div>
                <span>Processando</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-plaxo-primary rounded-full"></div>
                <span>Email confirmado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-plaxo-primary/5 via-transparent to-plaxo-primary/10 rounded-3xl"></div>
      
      <div className="relative bg-plaxo-surface/80 backdrop-blur-sm border border-plaxo-border/50 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto shadow-2xl">
        <div className="text-center mb-10">
          {/* Icon with animated background */}
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-plaxo-primary/20 to-plaxo-primary/10 rounded-2xl animate-pulse"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-plaxo-primary/10 to-plaxo-primary/5 rounded-2xl flex items-center justify-center">
              <svg className="w-10 h-10 text-plaxo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-plaxo-text to-plaxo-text/80 bg-clip-text text-transparent mb-4">
            Sincronização Google Drive
          </h3>
          <div className="inline-flex items-center gap-2 bg-plaxo-warning/10 border border-plaxo-warning/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-plaxo-warning rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-plaxo-warning">Fase Beta • 100 usuários</span>
          </div>
          <p className="text-lg text-plaxo-text-secondary leading-relaxed">
            Seja um dos primeiros a testar a sincronização automática com Google Drive.
            <br className="hidden md:block" />
            Seus códigos OTP sempre seguros na nuvem.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold text-plaxo-text mb-3 group-focus-within:text-plaxo-primary transition-colors">
                Seu melhor email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', (e.target as HTMLInputElement).value)}
                  className="w-full px-6 py-4 bg-plaxo-background/50 border-2 border-plaxo-border/50 rounded-2xl text-plaxo-text placeholder-plaxo-text-secondary/60 focus:border-plaxo-primary focus:bg-plaxo-background transition-all duration-300 text-lg"
                  placeholder="seu@email.com"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-plaxo-primary/0 via-plaxo-primary/5 to-plaxo-primary/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-sm font-semibold text-plaxo-text mb-3 group-focus-within:text-plaxo-primary transition-colors">
                Por que você quer testar?
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', (e.target as HTMLTextAreaElement).value)}
                  className="w-full px-6 py-4 bg-plaxo-background/50 border-2 border-plaxo-border/50 rounded-2xl text-plaxo-text placeholder-plaxo-text-secondary/60 focus:border-plaxo-primary focus:bg-plaxo-background transition-all duration-300 resize-none text-lg"
                  placeholder="Conte-nos como você pretende usar a sincronização com Google Drive..."
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-plaxo-primary/0 via-plaxo-primary/5 to-plaxo-primary/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !formData.email || !formData.message}
            className="w-full bg-gradient-to-r from-plaxo-primary to-plaxo-primary-hover hover:from-plaxo-primary-hover hover:to-plaxo-primary text-plaxo-background font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-plaxo-primary/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-3">
                <svg className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Enviando solicitação...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3">
                <span>Solicitar Acesso Beta</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            )}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-plaxo-border/30">
          <div className="flex items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2 text-sm text-plaxo-text-secondary">
              <div className="w-2 h-2 bg-plaxo-success rounded-full"></div>
              <span>Resposta em 24h</span>
            </div>
            <div className="w-1 h-1 bg-plaxo-text-secondary/30 rounded-full"></div>
            <div className="flex items-center gap-2 text-sm text-plaxo-text-secondary">
              <div className="w-2 h-2 bg-plaxo-primary rounded-full"></div>
              <span>Setup automático</span>
            </div>
            <div className="w-1 h-1 bg-plaxo-text-secondary/30 rounded-full"></div>
            <div className="flex items-center gap-2 text-sm text-plaxo-text-secondary">
              <div className="w-2 h-2 bg-plaxo-warning rounded-full"></div>
              <span>Suporte dedicado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}