'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

// Figma frame dimensions
const FRAME_W = 1728
const FRAME_H = 1080

export default function HomePage() {
  const [scale, setScale] = useState({ x: 1, y: 1 })

  useEffect(() => {
    const update = () => {
      setScale({
        x: window.innerWidth / FRAME_W,
        y: window.innerHeight / FRAME_H,
      })
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#fff' }}>
      <div
        style={{
          position: 'relative',
          width: FRAME_W,
          height: FRAME_H,
          transformOrigin: 'top left',
          transform: `scaleX(${scale.x}) scaleY(${scale.y})`,
          overflow: 'hidden',
        }}
      >

        {/* ── BACKGROUND IMAGE ── rotated exactly as Figma */}
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 3184.025,
            width: 2985.473,
            left: -741,
            top: -466,
          }}
        >
          <div style={{ transform: 'rotate(28.84deg)', flexShrink: 0 }}>
            <div style={{ position: 'relative', width: 2018.691, height: 2523.209 }}>
              <Image
                src="/images/hope-page.jpg"
                alt=""
                fill
                priority
                sizes="200vw"
                style={{ objectFit: 'cover', pointerEvents: 'none' }}
              />
            </div>
          </div>
        </div>

        {/* ── WORDMARK PILL (top left) ── */}
        <div
          style={{
            position: 'absolute',
            left: 39,
            top: 25,
            width: 262,
            height: 56,
            borderRadius: 18,
            background: 'rgba(151,151,151,0.2)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        />
        {/* Logo inside wordmark */}
        <div
          style={{
            position: 'absolute',
            top: FRAME_H * 0.0369,
            left: FRAME_W * 0.0318,
            right: FRAME_W * 0.8353,
            bottom: FRAME_H * 0.9354,
          }}
        >
          <img src="/figma/group-18.png" alt="Nooon" style={{ position: 'absolute', width: '100%', height: '100%' }} />
        </div>

        {/* ── CENTER NAV PILL ── */}
        <div
          style={{
            position: 'absolute',
            left: 603,
            top: 33,
            width: 522,
            height: 27,
            borderRadius: 33.5,
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        />
        <p style={{ position: 'absolute', left: 'calc(50% - 234px)', top: 'calc(50% - 504px)', font: 'bold 16px Helvetica, sans-serif', color: '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap', lineHeight: 'normal' }}>NEW IN</p>
        <p style={{ position: 'absolute', left: 'calc(50% - 76.5px)', top: 'calc(50% - 504px)', font: 'bold 16px Helvetica, sans-serif', color: '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap', lineHeight: 'normal', transform: 'translateX(-50%)' }}>COLLECTIONS</p>
        <p style={{ position: 'absolute', left: 'calc(50% + 71.5px)', top: 'calc(50% - 504px)', font: 'bold 16px Helvetica, sans-serif', color: '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap', lineHeight: 'normal', transform: 'translateX(-50%)' }}>CAMPAIGNS</p>
        <p style={{ position: 'absolute', left: 'calc(50% + 194.5px)', top: 'calc(50% - 504px)', font: 'bold 16px Helvetica, sans-serif', color: '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap', lineHeight: 'normal', transform: 'translateX(-50%)' }}>EVENTS</p>

        {/* ── SEARCH PILL (top right) ── */}
        <div
          style={{
            position: 'absolute',
            left: 1418,
            top: 25,
            width: 122,
            height: 43,
            borderRadius: 33.5,
            background: 'rgba(151,151,151,0.2)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        />
        <p style={{ position: 'absolute', left: 'calc(50% + 590px)', top: 'calc(50% - 503px)', font: 'bold 16px Helvetica, sans-serif', color: '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap', lineHeight: 'normal' }}>SEARCH</p>
        {/* Search dot indicator */}
        <div style={{ position: 'absolute', left: 1434, top: 40, width: 13, height: 13 }}>
          <img src="/figma/ellipse-45.png" alt="" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Vector/arrow near search */}
        <div style={{ position: 'absolute', left: 1445, top: 51, width: 5, height: 4 }}>
          <img src="/figma/vector-402.png" alt="" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* ── CART PILL (top right) ── */}
        <div
          style={{
            position: 'absolute',
            left: 1561,
            top: 26,
            width: 122,
            height: 43,
            borderRadius: 33.5,
            background: 'rgba(151,151,151,0.2)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        />
        <p style={{ position: 'absolute', left: 'calc(50% + 736px)', top: 'calc(50% - 503px)', font: 'bold 16px Helvetica, sans-serif', color: '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap', lineHeight: 'normal' }}>CART</p>
        <p style={{ position: 'absolute', left: 'calc(50% + 783px)', top: 'calc(50% - 502px)', font: '16px Helvetica, sans-serif', color: '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap', lineHeight: 0 }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif" }}>(</span>
          <span>2</span>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif" }}>)</span>
        </p>
        {/* Cart icon */}
        <div style={{ position: 'absolute', left: 1582, top: 43, width: 11, height: 11 }}>
          <img src="/figma/group-17.png" alt="" style={{ width: '100%', height: '100%' }} />
        </div>
        <div style={{ position: 'absolute', left: 1585, top: 47, width: 5, height: 5 }}>
          <img src="/figma/ellipse-46.png" alt="" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* ── IMMRSV SHWRM (center headline) ── */}
        <div
          style={{
            position: 'absolute',
            left: 'calc(50% - 0.2px)',
            top: 555.47,
            width: 1027.599,
            height: 98.378,
            transform: 'translateX(-50%)',
          }}
        >
          <img src="/figma/immrsv-shwrm.png" alt="IMMRSV SHWRM" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* ── DOT/BRAILLE PATTERN (center) ── */}
        <div
          style={{
            position: 'absolute',
            top: FRAME_H * 0.3967,
            left: FRAME_W * 0.2795,
            right: FRAME_W * 0.2797,
            bottom: FRAME_H * 0.5115,
          }}
        >
          <img src="/figma/group-27.png" alt="" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* ── BOTTOM: COPYRIGHT PILL ── */}
        <div
          style={{
            position: 'absolute',
            left: 36,
            top: 1016,
            width: 287,
            height: 43,
            borderRadius: 33.5,
            background: 'rgba(151,151,151,0.2)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        />
        <p style={{ position: 'absolute', left: 'calc(50% - 808px)', top: 'calc(50% + 488px)', font: 'bold 16px Helvetica, sans-serif', color: '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap', lineHeight: 'normal' }}>2026 ® ALL RIGHTS RESERVED</p>

        {/* ── BOTTOM: SHOP THE COLLECTION PILL ── */}
        <div
          style={{
            position: 'absolute',
            left: 598,
            top: 1016,
            width: 253,
            height: 43,
            borderRadius: 33.5,
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        />
        <p style={{ position: 'absolute', left: 'calc(50% - 235px)', top: 'calc(50% + 487px)', font: 'bold 16px Helvetica, sans-serif', color: '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap', lineHeight: 'normal' }}>SHOP THE COLLECTION</p>

        {/* ── BOTTOM: DISCOVER THE CAMPAIGN PILL ── */}
        <div
          style={{
            position: 'absolute',
            left: 877,
            top: 1016,
            width: 253,
            height: 43,
            borderRadius: 33.5,
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        />
        <p style={{ position: 'absolute', left: 'calc(50% + 139.5px)', top: 'calc(50% + 487px)', font: 'bold 16px Helvetica, sans-serif', color: '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap', lineHeight: 'normal', transform: 'translateX(-50%)' }}>DISCOVER THE CAMPAIGN</p>

        {/* ── BOTTOM: CHAT PILL ── */}
        <div
          style={{
            position: 'absolute',
            left: 1361,
            top: 1016,
            width: 321.76,
            height: 43,
            borderRadius: 33.5,
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        />
        <p style={{ position: 'absolute', left: 'calc(50% + 657.88px)', top: 'calc(50% + 487px)', font: 'bold 16px Helvetica, sans-serif', color: '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap', lineHeight: 'normal', textShadow: '0px 4px 4px rgba(0,0,0,0.25)', transform: 'translateX(-50%)' }}>CHAT WITH OUR REPRESENTATIVES</p>

      </div>
    </div>
  )
}
