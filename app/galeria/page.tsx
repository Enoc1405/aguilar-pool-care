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
        eyebrow="Working for you" 
        title={<>The care your<br /><em>pool deserves.</em></>} 
        description="Explore our work and discover how we transform pool care." 
        image="/aguilar-pool-cleaning.png" 
      />
      
      <section className="photo-library">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="kicker">Working for you</span>
              <h2>Our work in <em>pictures.</em></h2>
            </div>
            <p>A complete look at our residential cleaning and maintenance service.</p>
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
                      alt={`Project ${index + 1}`} 
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
            <span className="kicker">Ready to relax?</span>
            <h2>Your pool in the<br /><em>best hands.</em></h2>
          </div>
          <a className="button button-primary" href="/contacto">
            Request a quote <ArrowRight size={18} />
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
