import { ArrowRight, Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { brandLogo } from './site-header'

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-cta"><div className="container footer-cta-inner"><div><span className="kicker">Your pool, always ready</span><h2>Let pool care be<br /><em>the easiest part of your day.</em></h2></div><a className="button button-primary" href="/contacto">Request a quote <ArrowRight size={17} /></a></div></div>
    <div className="container footer-main"><div className="footer-brand-col"><a href="/" className="brand footer-brand"><img src={brandLogo} alt="Aguilar Pool Care" /><span>AGUILAR<br /><b>POOL CARE</b></span></a><p>Professional residential pool cleaning and maintenance service.</p><a className="footer-phone" href="tel:6616045718"><Phone size={16} /> (661) 604-5718</a></div><div className="footer-col"><h3>Explore</h3><a href="/">Home</a><a href="/servicios">Servicios</a><a href="/nosotros">Nosotros</a><a href="/galeria">Working for you</a><a href="/preguntas">Preguntas frecuentes</a></div><div className="footer-col"><h3>Servicios</h3><a href="/servicios">Mantenimiento semanal</a><a href="/servicios">Limpieza profunda</a><a href="/servicios">Químicos y balance</a><a href="/servicios">Equipo y filtros</a></div><div className="footer-col footer-contact"><h3>Hablemos</h3><span><MapPin size={15} /> Antelope Valley (Lancaster, Palmdale, Quartz Hill, Rosamond, Littlerock, Acton y alrededores)</span><span><Clock3 size={15} /> Lunes a Viernes · 8:00 AM – 5:00 PM</span><a href="mailto:AbneraguilaO07@gmail.com"><Mail size={15} /> AbneraguilaO07@gmail.com</a></div></div>
    <div className="container copyright"><span>© 2026 Aguilar Pool Care. Todos los derechos reservados.</span><span>Calidad, puntualidad y experiencia.</span></div>
  </footer>
}
