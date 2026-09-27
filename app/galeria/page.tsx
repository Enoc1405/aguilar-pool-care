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
    console.error('Error reading directory', e)
  }

  const items = files.filter((file) => !file.startsWith('.') && !file.startsWith('_')).sort()
  const imageFiles = items.filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
  const videoFiles = items.filter((file) => /\.(mp4|mov|webm)$/i.test(file))
  const galleryTabs = [
    { id: 'imagenes', label: `Imágenes (${imageFiles.length})`, enabled: imageFiles.length > 0 },
    { id: 'videos', label: `Videos (${videoFiles.length})`, enabled: videoFiles.length > 0 },
  ].filter((tab) => tab.enabled)

  const renderMediaGrid = (media: string[], type: 'image' | 'video') => (
    <div className="photo-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
      {media.map((file, index) => {
        const src = `/Galeria/${file}`
        const isVideo = type === 'video'

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
                alt={`Trabajo ${index + 1}`}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }}
              />
            )}
          </figure>
        )
      })}
    </div>
  )

  return (
    <main className="site-shell">
      <SiteHeader />
      <PageHero
        eyebrow="Trabajos para usted"
        title={<>Trabajos para<br /><em>usted.</em></>}
        description="Imágenes y videos de nuestro trabajo en piscinas residenciales en Antelope Valley."
        image="/aguilar-pool-cleaning.png"
      />

      <section className="photo-library">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="kicker">Trabajos para usted</span>
              <h2>Imágenes y <em>videos.</em></h2>
            </div>
            <p>Una vista completa de nuestros trabajos, limpieza, mantenimiento y atención profesional.</p>
          </div>

          {galleryTabs.length > 0 && (
            <nav className="gallery-subnav" aria-label="Subsección de galería">
              {galleryTabs.map((tab) => (
                <a key={tab.id} href={`#${tab.id}`} className="gallery-tab">
                  {tab.label}
                </a>
              ))}
            </nav>
          )}

          <div className="media-section" id="imagenes">
            <div className="media-header">
              <h3>Imágenes</h3>
              <span>{imageFiles.length} trabajos</span>
            </div>
            {renderMediaGrid(imageFiles, 'image')}
          </div>

          {videoFiles.length > 0 && (
            <div className="media-section" id="videos" style={{ marginTop: '3rem' }}>
              <div className="media-header">
                <h3>Videos</h3>
                <span>{videoFiles.length} videos</span>
              </div>
              {renderMediaGrid(videoFiles, 'video')}
            </div>
          )}
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <div>
            <span className="kicker">¿Necesitas ayuda?</span>
            <h2>Tu piscina en<br /><em>buenas manos.</em></h2>
          </div>
          <a className="button button-primary" href="/contacto">
            Solicitar cotización <ArrowRight size={18} />
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
