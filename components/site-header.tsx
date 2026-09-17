'use client'

import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'

export const brandLogo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20sept%202026%2C%2010_43_42-u03O7fRTS6ySR1FTNf2GhBMjg9fZtz.png'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const links = [['/', 'Home'], ['/servicios', 'Services'], ['/nosotros', 'About us'], ['/galeria', 'Working for you'], ['/preguntas', 'FAQ'], ['/contacto', 'Contact']]
  return <>
    <div className="topbar"><span>Professional pool care for homes and communities</span><a href="tel:6616045718"><Phone size={14} /> (661) 604-5718</a></div>
    <header className="nav-wrap"><nav className="nav container">
      <a href="/" className="brand" onClick={() => setOpen(false)}><img src={brandLogo} alt="Aguilar Pool Care" /><span>AGUILAR<br /><b>POOL CARE</b></span></a>
      <div className={`nav-links ${open ? 'open' : ''}`}>{links.map(([href, label]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="tel:6616045718"><Phone size={16} /> Call now</a></div>
      <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </nav></header>
  </>
}

export function PageHero({ eyebrow, title, description, image }: { eyebrow: string; title: React.ReactNode; description: string; image: string }) {
  return <section className="page-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(3,22,37,.9), rgba(3,22,37,.3)), url(${image})` }}><div className="container page-hero-content"><span className="eyebrow"><i />{eyebrow}</span><h1>{title}</h1><p>{description}</p></div></section>
}
