import Head from 'next/head';
import { useState } from 'react';

const D = {
  brand: 'COMTOTO',
  domain: 'comtotoweb.com',
  logo: 'https://i.postimg.cc/v85xdQft/com-pp.png',
  linkLogin: 'https://loginwap.gelapsekali.com/com',
  linkDaftar: 'https://daftarwap.gelapsekali.com/com',
  amphtml: 'comtotoweb.com',
};

const features = [
  { icon: '\u26A1', title: 'Akses Super Cepat', desc: 'Server berperforma tinggi memastikan loading dalam hitungan detik.' },
  { icon: '\u{1F512}', title: 'Keamanan Berlapis', desc: 'Enkripsi SSL 256-bit dan proteksi DDoS tingkat enterprise.' },
  { icon: '\u{1F4F1}', title: 'Mobile Responsive', desc: 'Tampilan otomatis menyesuaikan di semua perangkat.' },
  { icon: '\u{1F517}', title: 'Link Alternatif', desc: 'Banyak link alternatif resmi yang selalu diperbarui.' },
  { icon: '\u{1F3AF}', title: 'Tampilan Modern', desc: 'Desain antarmuka clean dan intuitif untuk kemudahan navigasi.' },
  { icon: '\u{1F4AC}', title: 'Layanan 24 Jam', desc: 'Tim customer service siap membantu kapan saja.' },
];

const faqs = [
  { q: 'Bagaimana cara login COMTOTO?', a: 'Kunjungi halaman login resmi di situs resmi COMTOTO, masukkan username dan password, lalu klik Login.' },
  { q: 'Apakah COMTOTO aman?', a: 'Ya, kami menggunakan enkripsi SSL 256-bit dan proteksi keamanan berlapis tingkat enterprise.' },
  { q: 'Bisa akses dari smartphone?', a: 'Tentu, COMTOTO dioptimalkan untuk semua perangkat mobile dengan tampilan responsif.' },
  { q: 'Berapa lama proses daftar?', a: 'Proses pendaftaran kurang dari 2 menit, sangat cepat dan mudah.' },
  { q: 'Ada link alternatif?', a: 'Ya, tersedia beberapa link alternatif resmi yang selalu aktif dan diperbarui.' },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>COMTOTO | Login Web & Wap Cepat: Markas Besar Pecinta Tantangan</title>
        <meta name="description" content="Akses COMTOTO dengan aman dan cepat. Server premium uptime 99.9%, proteksi data berlapis, dan navigasi intuitif untuk semua pengguna." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={D.logo} />
        <link rel="canonical" href={'https://' + D.domain + '/'} />
        <link rel="amphtml" href={'https://' + D.domain + '/amp/'} />
        <meta property="og:title" content="COMTOTO | Login Web & Wap Cepat: Markas Besar Pecinta Tantangan" />
        <meta property="og:description" content="Akses COMTOTO dengan aman dan cepat. Server premium uptime 99.9%, proteksi data berlapis, dan navigasi intuitif untuk semua pengguna." />
        <meta property="og:image" content={D.logo} />
        <meta property="og:url" content={'https://' + D.domain} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="COMTOTO | Login Web & Wap Cepat: Markas Besar Pecinta Tantangan" />
        <meta name="twitter:description" content="Akses COMTOTO dengan aman dan cepat. Server premium uptime 99.9%, proteksi data berlapis, dan navigasi intuitif untuk semua pengguna." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        *{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
        body{font-family:'DM Sans',sans-serif;background:#0a1e2e;color:#e0e0e0;line-height:1.7;overflow-x:hidden}
        a{color:inherit;text-decoration:none}img{max-width:100%;display:block}
        .W{max-width:1200px;margin:0 auto;padding:0 24px}

        .topbar{background:#0d2838;border-bottom:1px solid rgba(6,182,212,.25);padding:8px 0;font-size:12px;color:#ccc}
        .topbar-inner{display:flex;justify-content:space-between;align-items:center}
        .topbar a{color:#06b6d4;font-weight:600;transition:.2s}.topbar a:hover{opacity:.8}

        header{background:#0d2838;border-bottom:1px solid rgba(6,182,212,.25);position:sticky;top:0;z-index:50;backdrop-filter:blur(12px)}
        .hd{display:flex;align-items:center;justify-content:space-between;padding:14px 0;gap:16px}
        .logo{display:flex;align-items:center;gap:10px;font-weight:800;font-size:22px;color:#06b6d4;flex-shrink:0}
        .logo img{width:36px;height:36px;border-radius:10px;border:2px solid #06b6d4}
        .search-bar{flex:1;max-width:480px;display:flex;border:1.5px solid rgba(6,182,212,.25);border-radius:10px;overflow:hidden;background:#103242}
        .search-bar input{flex:1;border:none;padding:10px 16px;font-size:13px;outline:none;font-family:inherit;background:transparent;color:#e0e0e0}
        .search-bar input::placeholder{color:#777}
        .search-bar button{background:#06b6d4;color:#0a1e2e;border:none;padding:0 18px;font-weight:700;cursor:pointer;font-family:inherit;font-size:13px;transition:.2s}
        .search-bar button:hover{background:#0891b2}
        .hd-btns{display:flex;gap:8px;flex-shrink:0}
        .btn{display:inline-flex;align-items:center;gap:6px;padding:10px 22px;border-radius:10px;font-weight:600;font-size:13px;transition:.25s;border:none;cursor:pointer;font-family:inherit}
        .btn-p{background:#06b6d4;color:#0a1e2e}.btn-p:hover{background:#0891b2;transform:translateY(-1px)}
        .btn-o{border:1.5px solid rgba(6,182,212,.25);color:#06b6d4;background:transparent}.btn-o:hover{background:rgba(6,182,212,.15)}

        .catnav{background:#103242;border-bottom:1px solid rgba(6,182,212,.25)}
        .catnav-inner{display:flex;gap:0;overflow-x:auto}
        .catnav a{padding:11px 20px;font-size:13px;color:#bbb;font-weight:500;white-space:nowrap;border-bottom:2px solid transparent;transition:.2s}
        .catnav a:hover,.catnav a.act{color:#06b6d4;border-bottom-color:#06b6d4}

        .hero-banner{linear-gradient(135deg,#0891b2,#06b6d4);padding:52px 0;position:relative;overflow:hidden}
        .hero-banner::before{content:'';position:absolute;right:-100px;top:-100px;width:400px;height:400px;border-radius:50%;background:rgba(255,255,255,.06)}
        .hero-banner::after{content:'';position:absolute;left:-60px;bottom:-80px;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,.04)}
        .hero-flex{display:flex;align-items:center;gap:40px;position:relative;z-index:1}
        .hero-text{flex:1;color:#fff}
        .hero-text .tag{display:inline-flex;align-items:center;gap:6px;background:rgba(0,0,0,.25);border:1px solid rgba(255,255,255,.15);padding:6px 16px;border-radius:8px;font-size:11px;font-weight:600;margin-bottom:16px;letter-spacing:.3px}
        .hero-text .tag .dot{width:7px;height:7px;border-radius:50%;background:#fff;animation:blink 1.5s infinite}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
        .hero-text h1{font-size:clamp(22px,3.5vw,36px);font-weight:800;line-height:1.18;margin-bottom:14px}
        .hero-text p{opacity:.92;font-size:14px;line-height:1.75;margin-bottom:22px;max-width:500px;text-align:justify}
        .hero-text .hbtns{display:flex;gap:10px;flex-wrap:wrap}
        .hero-text .btn-w{background:#fff;color:#0a1e2e;font-weight:700;padding:13px 28px;border-radius:10px;border:none;cursor:pointer;font-family:inherit;font-size:14px;transition:.25s}
        .hero-text .btn-w:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.35)}
        .hero-text .btn-g{background:rgba(0,0,0,.25);color:#fff;border:1.5px solid rgba(255,255,255,.25);padding:13px 28px;border-radius:10px;cursor:pointer;font-family:inherit;font-size:14px;font-weight:600;transition:.25s}
        .hero-text .btn-g:hover{background:rgba(0,0,0,.4);border-color:rgba(255,255,255,.5)}
        .hero-img{flex-shrink:0;width:340px}
        .hero-img img{border-radius:14px;box-shadow:0 20px 60px rgba(0,0,0,.45);border:1px solid rgba(255,255,255,.08)}
        .trust-bar{display:flex;gap:22px;margin-top:18px;font-size:12px;opacity:.85}

        .stats{background:#0d2838;border-bottom:1px solid rgba(6,182,212,.25);padding:24px 0}
        .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;text-align:center}
        .stat-item{padding:8px 0}
        .stat-item .sv{font-size:26px;font-weight:800;color:#06b6d4}
        .stat-item .sl{font-size:10px;color:#bbb;text-transform:uppercase;letter-spacing:1.5px;margin-top:2px}

        .sec{padding:52px 0}
        .sec-alt{background:#0d2838}
        .sec-head{text-align:center;margin-bottom:38px}
        .sec-head .label{display:inline-block;background:rgba(6,182,212,.15);color:#06b6d4;padding:5px 16px;border-radius:8px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:12px;border:1px solid rgba(6,182,212,.25)}
        .sec-head h2{font-size:clamp(22px,3vw,32px);font-weight:800;margin-bottom:8px;color:#fff}
        .sec-head p{color:#bbb;font-size:14px;max-width:520px;margin:0 auto;text-align:justify}

        .art-row{max-width:900px;margin:0 auto}
        .art-content h3{font-size:20px;font-weight:700;margin-bottom:16px;color:#06b6d4}
        .art-content p{color:#ccc;font-size:14px;line-height:1.9;margin-bottom:18px;text-align:justify}
        .art-gallery{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px}
        .art-gallery img{border-radius:10px;border:1px solid rgba(6,182,212,.25);width:100%;height:200px;object-fit:cover;transition:.3s}
        .art-gallery img:hover{border-color:#06b6d4;transform:scale(1.02)}
        .art-tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}
        .art-tag{background:rgba(6,182,212,.15);color:#06b6d4;padding:5px 14px;border-radius:8px;font-size:11px;font-weight:600;border:1px solid rgba(6,182,212,.25)}

        .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .feat-card{background:#103242;border:1px solid rgba(6,182,212,.25);border-radius:14px;padding:26px;transition:.3s}
        .feat-card:hover{border-color:#06b6d4;transform:translateY(-4px);box-shadow:0 10px 30px rgba(0,0,0,.25)}
        .feat-card .fi-icon{width:48px;height:48px;border-radius:12px;background:rgba(6,182,212,.15);display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:14px}
        .feat-card h3{font-size:15px;font-weight:700;margin-bottom:5px;color:#fff}
        .feat-card p{color:#bbb;font-size:13px;margin:0;text-align:justify}

        .cta-box{linear-gradient(135deg,#0891b2,#06b6d4);border-radius:18px;padding:52px 32px;text-align:center;color:#fff;position:relative;overflow:hidden}
        .cta-box::after{content:'';position:absolute;right:-80px;top:-80px;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,.06)}
        .cta-box>*{position:relative;z-index:1}
        .cta-box h2{font-size:clamp(20px,3vw,30px);font-weight:800;margin-bottom:10px}
        .cta-box p{opacity:.9;margin-bottom:22px;font-size:15px}
        .cta-box .btn-w{background:#fff;color:#0a1e2e;font-weight:700;padding:14px 34px;border-radius:10px;border:none;cursor:pointer;font-family:inherit;font-size:15px;transition:.25s}
        .cta-box .btn-w:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.35)}

        .bnr-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        .bnr-card{border-radius:14px;overflow:hidden;border:1px solid rgba(6,182,212,.25);transition:.3s}
        .bnr-card:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,.25);border-color:#06b6d4}
        .bnr-card img{width:100%;height:auto}

        .faq-list{max-width:720px;margin:0 auto}
        .faq-item{background:#103242;border:1px solid rgba(6,182,212,.25);border-radius:12px;padding:18px 22px;margin-bottom:10px;cursor:pointer;transition:.2s}
        .faq-item:hover{border-color:#06b6d4}
        .faq-q{font-weight:600;display:flex;justify-content:space-between;align-items:center;font-size:14px;color:#f0f0f0}
        .faq-q span{color:#06b6d4;font-size:18px;font-weight:700}
        .faq-a{margin-top:12px;color:#bbb;font-size:13px;line-height:1.75;border-top:1px solid rgba(6,182,212,.25);padding-top:12px;text-align:justify}

        footer{background:#0d2838;border-top:1px solid rgba(6,182,212,.25);padding:36px 0;font-size:12px}
        .ft-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:30px;margin-bottom:24px}
        .ft-col h4{color:#06b6d4;font-size:14px;margin-bottom:12px}
        .ft-col a{display:block;color:#aaa;margin-bottom:7px;transition:.2s}.ft-col a:hover{color:#06b6d4}
        .ft-bottom{border-top:1px solid rgba(6,182,212,.25);padding-top:18px;text-align:center;color:#999}

        @media(max-width:960px){
          .hero-flex{flex-direction:column;text-align:center}
          .hero-img{width:100%;max-width:400px}
          .hero-text .hbtns,.trust-bar{justify-content:center}
          .hero-text p{text-align:center}
          .art-gallery{grid-template-columns:1fr}
          .feat-grid{grid-template-columns:1fr 1fr}
          .ft-grid{grid-template-columns:1fr 1fr}
        }
        @media(max-width:640px){
          .search-bar{display:none}
          .feat-grid,.stats-grid{grid-template-columns:1fr}
          .bnr-grid,.ft-grid{grid-template-columns:1fr}
        }
      `}</style>

      <div className="topbar"><div className="W topbar-inner">
        <span>{D.brand} &mdash; Platform Resmi 2026</span>
        <div style={{display:'flex',gap:'16px'}}>
          <a href={D.linkLogin}>Login</a>
          <a href={D.linkDaftar}>Daftar</a>
        </div>
      </div></div>

      <header><div className="W hd">
        <a href="#" className="logo"><img src={D.logo} alt={D.brand} />{D.brand}</a>
        <div className="search-bar">
          <input type="text" placeholder="Cari fitur, panduan, atau informasi..." readOnly />
          <button>Cari</button>
        </div>
        <div className="hd-btns">
          <a href={D.linkLogin} className="btn btn-o">Login</a>
          <a href={D.linkDaftar} className="btn btn-p">Daftar</a>
        </div>
      </div></header>

      <nav className="catnav"><div className="W">
        <div className="catnav-inner">
          <a href="#fitur" className="act">Fitur</a>
          <a href="#tentang">Tentang</a>
          <a href="#promo">Promo</a>
          <a href="#faq">FAQ</a>
        </div>
      </div></nav>

      <main>
        <section className="hero-banner" style={{background:'linear-gradient(135deg,#0891b2,#06b6d4)'}}><div className="W">
          <div className="hero-flex">
            <div className="hero-text">
              <div className="tag"><span className="dot"></span> {D.brand} Official</div>
              <h1>COMTOTO | Login Web & Wap Cepat: Markas Besar Pecinta Tantangan</h1>
              <p>Akses COMTOTO dengan aman dan cepat. Server premium uptime 99.9%, proteksi data berlapis, dan navigasi intuitif untuk semua pengguna.</p>
              <div className="hbtns">
                <a href={D.linkDaftar} className="btn-w">Daftar Sekarang &rarr;</a>
                <a href={D.linkLogin} className="btn-g">Login Akun</a>
              </div>
              <div className="trust-bar">
                <span>&#10003; SSL 256-bit</span>
                <span>&#10003; Uptime 99.9%</span>
                <span>&#10003; Support 24/7</span>
              </div>
            </div>
            <div className="hero-img">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=450&fit=crop" alt={D.brand + ' Platform'} />
            </div>
          </div>
        </div></section>

        <div className="stats"><div className="W">
          <div className="stats-grid">
            <div className="stat-item"><div className="sv">99.9%</div><div className="sl">Uptime Server</div></div>
            <div className="stat-item"><div className="sv">24/7</div><div className="sl">Customer Support</div></div>
            <div className="stat-item"><div className="sv">1M+</div><div className="sl">Pengguna Aktif</div></div>
            <div className="stat-item"><div className="sv">256-bit</div><div className="sl">Enkripsi SSL</div></div>
          </div>
        </div></div>

        <section className="sec" id="fitur"><div className="W">
          <div className="sec-head">
            <span className="label">Fitur Unggulan</span>
            <h2>Kenapa Memilih {D.brand}?</h2>
            <p>Nikmati berbagai fitur modern untuk pengalaman terbaik Anda.</p>
          </div>
          <div className="feat-grid">
            {features.map((f, i) => (
              <div className="feat-card" key={i}>
                <div className="fi-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div></section>

        <section className="sec sec-alt" id="tentang"><div className="W">
          <div className="sec-head">
            <span className="label">Tentang Kami</span>
            <h2>Mengenal Lebih Dekat {D.brand}</h2>
          </div>
          <div className="art-row">
            <div className="art-content">
              <h3>Panduan Lengkap {D.brand}</h3>
              <div className="art-gallery">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop" alt={D.brand + ' Platform'} />
                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop" alt={D.brand + ' Shop'} />
              </div>
              <p>COMTOTO hadir di situs resmi COMTOTO dengan standar profesionalisme dan keamanan tertinggi. Sebagaimana kantor hukum terpercaya menjunjung tinggi kerahasiaan klien, COMTOTO berkomitmen melindungi setiap data pengguna dengan enkripsi SSL 256-bit dan proteksi keamanan berlapis. Integritas dan kepercayaan adalah fondasi utama layanan kami.</p>
              <div className="art-gallery">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" alt={D.brand + ' Dashboard'} />
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop" alt={D.brand + ' Team'} />
              </div>
              <p>Platform resmi COMTOTO di situs resmi COMTOTO dirancang dengan presisi dan ketelitian, memastikan setiap proses login dan registrasi berjalan sesuai prosedur yang aman. Infrastruktur server enterprise-grade dengan uptime 99,9% menjamin ketersediaan layanan tanpa kompromi. Tersedia multiple link alternatif resmi yang terverifikasi, dan dukungan legal tim support profesional 24 jam penuh.</p>
              <div className="art-tags">
                <span className="art-tag">SSL 256-bit</span>
                <span className="art-tag">Uptime 99.9%</span>
                <span className="art-tag">Anti Blokir</span>
                <span className="art-tag">Multi Platform</span>
              </div>
            </div>
          </div>
        </div></section>

        <section className="sec" id="promo"><div className="W">
          <div className="sec-head">
            <span className="label">Promo &amp; Event</span>
            <h2>Penawaran Terbaik Hari Ini</h2>
          </div>
          <div className="bnr-grid">
            <a href={D.linkDaftar} className="bnr-card"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=720&h=280&fit=crop" alt={D.brand + ' Promo 1'} loading="lazy" /></a>
            <a href={D.linkDaftar} className="bnr-card"><img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=720&h=280&fit=crop" alt={D.brand + ' Promo 2'} loading="lazy" /></a>
            <a href={D.linkDaftar} className="bnr-card"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=720&h=280&fit=crop" alt={D.brand + ' Promo 3'} loading="lazy" /></a>
          </div>
        </div></section>

        <section className="sec sec-alt"><div className="W">
          <div className="cta-box">
            <h2>Bergabung dengan {D.brand} Sekarang!</h2>
            <p>Daftar gratis dan rasakan layanan premium tanpa batas.</p>
            <a href={D.linkDaftar} className="btn-w">Daftar Gratis &rarr;</a>
          </div>
        </div></section>

        <section className="sec" id="faq"><div className="W">
          <div className="sec-head">
            <span className="label">FAQ</span>
            <h2>Pertanyaan Yang Sering Diajukan</h2>
            <p>Temukan jawaban seputar {D.brand}.</p>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className="faq-item" key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-q">{f.q}<span>{openFaq === i ? '\u2212' : '+'}</span></div>
                {openFaq === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div></section>
      </main>

      <footer><div className="W">
        <div className="ft-grid">
          <div className="ft-col">
            <h4>{D.brand}</h4>
            <p style={{color:'#aaa',lineHeight:'1.7'}}>Platform digital terpercaya dengan akses cepat, aman, dan tanpa hambatan.</p>
          </div>
          <div className="ft-col">
            <h4>Navigasi</h4>
            <a href="#fitur">Fitur</a><a href="#tentang">Tentang</a><a href="#faq">FAQ</a>
          </div>
          <div className="ft-col">
            <h4>Akses</h4>
            <a href={D.linkLogin}>Login Akun</a><a href={D.linkDaftar}>Daftar Baru</a><a href={D.linkDaftar}>Link Alternatif</a>
          </div>
          <div className="ft-col">
            <h4>Keamanan</h4>
            <a href="#">SSL 256-bit</a><a href="#">Proteksi DDoS</a><a href="#">Anti Blokir</a>
          </div>
        </div>
        <div className="ft-bottom">&copy; 2026 {D.brand}. Situs resmi &mdash; {D.domain}</div>
      </div></footer>
    </>
  );
}
