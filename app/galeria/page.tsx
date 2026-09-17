import fs from 'fs'
import path from 'path'
import { SiteHeader, PageHero } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArrowRight } from 'lucide-react'

export const dynamic = 'force-dynamic';

export default function GaleriaPage() {
  const galeriaPath = path.join(process.cwd(), 'public', 'Galeria')
  let files: string[] = []
  
  try {
    files = fs.readdirSync(galeriaPath)
  } catch (e) {
    console.error("Error reading directory", e)
  }
  
  // separate images and videos and exclude hidden files
  const items = files.filter(f => !f.startsWith('.'))

  return (
    <main className="site-shell">
      <SiteHeader />
      <PageHero 
        eyebrow="Nuestra Galería" 
        title={<>El cuidado que tu<br /><em>piscina merece.</em></>} 
        description="Explora nuestro trabajo y descubre cómo transformamos el cuidado de piscinas." 
        image="/aguilar-pool-cleaning.png" 
      />
      
      <section className="photo-library">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="kicker">Galería de proyectos</span>
              <h2>Nuestro trabajo en <em>imágenes.</em></h2>
            </div>
            <p>Una mirada completa a nuestro servicio residencial de mantenimiento y limpieza.</p>
          </div>
          <div className="photo-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {items.map((file, index) => {
              const src = `/Galeria/${file}`
              const isVideo = file.endsWith('.mp4')
              return (
                <figure key={src} style={{ margin: 0, overflow: 'hidden', borderRadius: 'var(--radius)', position: 'relative', aspectRatio: '1 / 1' }}>
                  {isVideo ? (
                    <video 
                      src={src} 
                      controls 
                      preload="metadata"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }}
                    />
                  ) : (
                    <img 
                      src={src} 
                      alt={`Proyecto ${index + 1}`} 
                      loading="lazy" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }}
                    />
                  )}
                </figure>
              )
            })}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <div>
            <span className="kicker">¿Listo para relajarte?</span>
            <h2>Tu piscina en las<br /><em>mejores manos.</em></h2>
          </div>
          <a className="button button-primary" href="/contacto">
            Solicitar presupuesto <ArrowRight size={18} />
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
