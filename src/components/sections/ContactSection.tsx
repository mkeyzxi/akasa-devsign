'use client'

import * as React from 'react'
import {motion} from 'framer-motion'
import {SectionHeading} from '@/components/ui/SectionHeading'
import {Card} from '@/components/ui/Card'
import {Button} from '@/components/ui/Button'
import {MapPin, Phone, ArrowRight, Loader2, CheckCircle2} from 'lucide-react'

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Terjadi kesalahan saat mengirim pesan.')
      }

      setIsSuccess(true)
    } catch (error: any) {
      setErrorMessage(error.message || 'Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-[var(--bg-page)] relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="KONTAK KAMI"
              title={
                <>
                  Mari Mulai <br />
                  <span className="text-brand-primary">Proyek Baru.</span>
                </>
              }
              description="Punya ide brilian? Mari diskusikan bagaimana kami bisa membantu mewujudkannya. Konsultasi pertama gratis!"
            />

            <div className="flex flex-col gap-6 mt-8">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[var(--bg-surface-muted)] transition-colors">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Telepon / WhatsApp</h4>
                  <p className="text-sm text-text-secondary mb-1">
                    Senin - Sabtu, 09:00 - 22:00 WITA.
                  </p>
                  <a
                    href="https://wa.me/6285342181132"
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-primary font-medium hover:underline"
                  >
                    +62 853 4218 1132
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[var(--bg-surface-muted)] transition-colors">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Kantor Online</h4>
                  <p className="text-sm text-text-secondary">
                    Ruang Meeting Virtual <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{opacity: 0, x: 20}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5}}
          >
            <Card className="p-8 lg:p-10 border-brand-primary/20 shadow-brand relative overflow-hidden bg-[var(--bg-surface)] z-10">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

              {isSuccess ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">Pesan Terkirim!</h3>
                  <p className="text-text-secondary max-w-[300px]">
                    Terima kasih telah menghubungi kami. Tim kami akan segera merespon pesan Anda.
                  </p>
                  <Button variant="secondary" className="mt-4" onClick={() => setIsSuccess(false)}>
                    Kirim Pesan Lagi
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Kirim Pesan</h3>

                  {errorMessage && (
                    <div className="p-3 text-sm text-red-500 bg-red-50 rounded-lg border border-red-100">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-semibold text-text-primary">
                        Nama Lengkap
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="input-field"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-semibold text-text-primary">
                        Alamat Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="input-field"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-sm font-semibold text-text-primary">
                      Layanan yang Dibutuhkan
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="input-field bg-transparent"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Pilih layanan...
                      </option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="uiux">UI/UX Design</option>
                      <option value="branding">Branding & Logo</option>
                      <option value="social">Social Media Management</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-text-primary">
                      Detail Proyek
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full bg-[var(--bg-surface)] border-[1.5px] border-[var(--border-strong)] rounded-[10px] p-4 text-text-primary placeholder:text-text-muted transition-all focus:border-brand-primary focus:ring-0 focus:shadow-[0_0_0_3px_rgba(210,36,24,0.12)] outline-none resize-none"
                      placeholder="Ceritakan sedikit tentang proyek yang ingin Anda buat..."
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full mt-2">
                    {isSubmitting ? (
                      <>
                        Mengirim... <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                      </>
                    ) : (
                      <>
                        Kirim Pesan Sekarang <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-text-muted text-center mt-2">
                    Informasi Anda aman bersama kami. Kami tidak pernah mengirim spam.
                  </p>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
