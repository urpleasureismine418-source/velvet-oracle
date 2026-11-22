import { useMemo, useState } from 'react';
import { Download, Instagram, Menu, Share2, X } from 'lucide-react';
import { Flourish, SideOrnament } from './components/Ornament';

type TarotCard = { name: string; roman: string; keyword: string; meaning: string; reversed: string; symbol: string };
const deck: TarotCard[] = [
  { name: 'The Star', roman: 'XVII', keyword: 'Renewal · Hope · Serenity', meaning: 'A quiet return to faith. The Star asks you to trust the small, luminous instinct that keeps drawing you forward. Let your next step be guided by possibility rather than fear.', reversed: 'You may be looking for reassurance outside yourself. Rest, replenish, and remember that uncertainty is not the same as being lost.', symbol: 'star' },
  { name: 'The Moon', roman: 'XVIII', keyword: 'Intuition · Mystery · Dreams', meaning: 'Not everything is ready to be named. The Moon invites you to move gently through uncertainty, listen to your dreams, and notice what your intuition has been trying to tell you.', reversed: 'A little clarity is beginning to return. Separate what you know from what you fear, and let the facts find their proper shape.', symbol: 'moon' },
  { name: 'The Empress', roman: 'III', keyword: 'Creation · Abundance · Care', meaning: 'Something in your life wants room to grow. Give your ideas patience, your body kindness, and your relationships the attention they deserve. Beauty can be a form of nourishment.', reversed: 'You may be giving more than you have. Restore your own reserves before tending to everything around you.', symbol: 'empress' },
  { name: 'The Hermit', roman: 'IX', keyword: 'Solitude · Wisdom · Reflection', meaning: 'Step away from the noise long enough to hear your own thoughts. The answer may not arrive as a revelation; it may appear as a calm, honest decision.', reversed: 'Solitude can become a hiding place. Consider who might offer a gentle perspective without taking your choice away.', symbol: 'hermit' },
  { name: 'The Sun', roman: 'XIX', keyword: 'Vitality · Joy · Clarity', meaning: 'A warmer chapter is opening. Allow yourself to be seen, to enjoy what is working, and to accept uncomplicated happiness without searching for its hidden cost.', reversed: 'Joy is present, though perhaps quieter than expected. Release the pressure to make every good thing feel extraordinary.', symbol: 'sun' },
  { name: 'The Lovers', roman: 'VI', keyword: 'Choice · Union · Alignment', meaning: 'A meaningful choice asks for honesty. Look beyond what is expected of you and consider which path reflects your values, not simply your desire to be understood.', reversed: 'Misalignment deserves attention. Name the truth kindly, especially the truth you have been avoiding with yourself.', symbol: 'lovers' },
  { name: 'Wheel of Fortune', roman: 'X', keyword: 'Cycles · Change · Turning point', meaning: 'The wheel is moving. What feels unsettled may be part of a larger transition; meet the change with curiosity, and work with the opening that appears.', reversed: 'A familiar pattern may be repeating. Notice where you still have agency, even if you cannot control the whole cycle.', symbol: 'wheel' },
  { name: 'Strength', roman: 'VIII', keyword: 'Courage · Patience · Grace', meaning: 'Your power is quieter than force. Choose patience over reaction, and meet the difficult thing with steadiness rather than trying to overpower it.', reversed: 'Be careful not to mistake exhaustion for weakness. Ask for support and soften the standards you have set for yourself.', symbol: 'strength' },
  { name: 'The High Priestess', roman: 'II', keyword: 'Wisdom · Stillness · Knowing', meaning: 'The answer is not asking to be chased. Make space for silence, pay attention to subtle details, and allow your inner knowing to become clear in its own time.', reversed: 'Uncertainty may be clouding your instincts. Return to what is observable and give yourself time before deciding.', symbol: 'priestess' },
];

function CardArt({ symbol }: { symbol: string }) {
  return <svg viewBox="0 0 220 330" className="card-art" role="img" aria-label={`${symbol} tarot illustration`}>
    <defs><linearGradient id="paper" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f3ead6"/><stop offset="1" stopColor="#d8c8a8"/></linearGradient><pattern id="grain" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="1" cy="2" r=".45" fill="#9d8863" opacity=".28"/><circle cx="5" cy="6" r=".35" fill="#9d8863" opacity=".2"/></pattern></defs>
    <rect x="1" y="1" width="218" height="328" fill="url(#paper)"/><rect x="1" y="1" width="218" height="328" fill="url(#grain)"/>
    <rect x="9" y="9" width="202" height="312" fill="none" stroke="#8d7956" strokeWidth=".8"/><rect x="14" y="14" width="192" height="302" fill="none" stroke="#8d7956" strokeWidth=".45"/>
    <g stroke="#9c8052" fill="none" strokeWidth=".9"><path d="M17 52Q33 19 59 24Q37 34 39 54Q26 42 17 52ZM203 52Q187 19 161 24Q183 34 181 54Q194 42 203 52ZM17 278Q33 311 59 306Q37 296 39 276Q26 288 17 278ZM203 278Q187 311 161 306Q183 296 181 276Q194 288 203 278Z"/><path d="M18 165C44 134 39 106 22 95C52 99 65 125 51 151C41 168 26 169 18 165ZM202 165C176 134 181 106 198 95C168 99 155 125 169 151C179 168 194 169 202 165Z"/></g>
    <g stroke="#54769a" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {symbol === 'star' && <><path d="M110 70L123 119L173 125L133 154L145 204L110 174L75 204L87 154L47 125L97 119Z"/><circle cx="110" cy="143" r="28"/><path d="M110 95V191M62 143H158M76 109L144 177M144 109L76 177"/><path d="M110 211C85 236 91 266 110 278C129 266 135 236 110 211Z"/></>}
      {symbol === 'moon' && <><path d="M137 78C91 87 79 143 105 176C127 204 166 197 183 175C151 186 121 160 122 128C122 107 129 90 137 78Z"/><path d="M70 220Q110 188 150 220Q110 250 70 220Z"/><path d="M110 62V80M110 260V281M54 171H72M148 171H166"/><circle cx="110" cy="171" r="58" strokeDasharray="1 7"/></>}
      {symbol === 'empress' && <><path d="M110 72C88 95 83 121 110 144C137 121 132 95 110 72Z"/><path d="M110 144C72 139 55 166 76 190C93 210 109 194 110 174C111 194 127 210 144 190C165 166 148 139 110 144Z"/><path d="M110 174V255M110 213C78 199 65 220 80 239C94 253 107 235 110 213ZM110 225C141 207 158 226 144 245C132 261 115 245 110 225Z"/><circle cx="110" cy="125" r="68" strokeDasharray="2 5"/></>}
      {symbol === 'hermit' && <><path d="M110 75L145 128L130 222H90L75 128Z"/><path d="M110 75V223M87 132H133M93 185H127"/><circle cx="110" cy="113" r="14"/><path d="M110 237V274M90 274H130M72 274H148"/><path d="M55 100Q110 40 165 100"/></>}
      {symbol === 'sun' && <><circle cx="110" cy="154" r="39"/><circle cx="110" cy="154" r="53" strokeDasharray="2 5"/><path d="M110 73V48M110 260V235M29 154H54M166 154H191M53 97L35 79M167 211L185 229M167 97L185 79M53 211L35 229"/><path d="M93 146Q101 137 109 146M113 146Q121 137 129 146M98 168Q110 178 122 168"/></>}
      {symbol === 'lovers' && <><path d="M72 111Q110 69 148 111Q159 148 110 180Q61 148 72 111Z"/><path d="M77 195Q110 166 143 195L153 252H67Z"/><path d="M110 180V253M84 119Q110 97 136 119M95 137L110 150L125 137"/><path d="M110 58V75M58 154H73M147 154H162"/></>}
      {symbol === 'wheel' && <><circle cx="110" cy="160" r="67"/><circle cx="110" cy="160" r="48"/><circle cx="110" cy="160" r="13"/><path d="M110 93V147M110 173V227M43 160H97M123 160H177M63 113L101 151M119 169L157 207M157 113L119 151M101 169L63 207"/><path d="M110 64L117 80H103Z"/><path d="M110 256L117 240H103Z"/></>}
      {symbol === 'strength' && <><path d="M78 120Q110 91 142 120Q148 145 110 152Q72 145 78 120Z"/><path d="M110 152V241M82 185Q110 166 138 185M86 241H134"/><path d="M67 99Q110 51 153 99M74 109Q110 78 146 109"/><path d="M110 61V43M58 152H42M162 152H178"/></>}
      {symbol === 'priestess' && <><path d="M110 72L150 126L110 180L70 126Z"/><path d="M110 180V253M80 253H140M92 112Q110 95 128 112M92 140Q110 157 128 140"/><circle cx="110" cy="126" r="58" strokeDasharray="1 5"/><path d="M110 54V36M51 126H34M169 126H186"/></>}
    </g>
    <g fill="#9c8052"><circle cx="28" cy="28" r="1.5"/><circle cx="192" cy="28" r="1.5"/><circle cx="28" cy="302" r="1.5"/><circle cx="192" cy="302" r="1.5"/></g>
  </svg>;
}

function BackArt() { return <div className="back-art"><div className="back-inner"><span>✧</span><i>✦</i><b>V</b><i>✦</i><span>✧</span></div></div>; }

export default function App() {
  const [name, setName] = useState('');
  const [cards, setCards] = useState<TarotCard[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ritualOpen, setRitualOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const positions = ['THE PAST', 'THE PRESENT', 'THE POSSIBILITY'];
  const greeting = useMemo(() => name.trim() ? `${name.trim()}, your cards are waiting.` : 'Your cards are waiting.', [name]);

  const draw = () => {
    if (!name.trim() || busy) return;
    setBusy(true); setRevealed(false); setCards([]);
    const shuffled = [...deck].sort(() => Math.random() - 0.5).slice(0, 3);
    setCards(shuffled);
    window.setTimeout(() => { setRevealed(true); setBusy(false); }, 1250);
  };
  const reset = () => {
    setCards([]);
    setRevealed(false);
    setQuestion('');
    setName('');
    setBusy(false);
    setRitualOpen(false);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try { await navigator.share({ title: 'Velvet Oracle', url }); } catch { /* dismissed */ }
    } else if (navigator.clipboard) {
      try { await navigator.clipboard.writeText(url); alert('Page link copied to clipboard.'); }
      catch { alert(`Copy this link: ${url}`); }
    } else {
      window.prompt('Copy this page link:', url);
    }
  };

  const download = async () => {
    const cardNodes = Array.from(document.querySelectorAll('.drawn-card .card-art')) as SVGSVGElement[];
    if (cardNodes.length !== 3) return;
    const cardMarkup = cards.map((card, i) => {
      const node = cardNodes[i];
      const art = node ? node.innerHTML : '';
      const x = 140 + i * 350;
      const title = card.name.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const position = positions[i];
      const keyword = card.keyword.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return `<g>
        <text x="${x + 110}" y="105" text-anchor="middle" fill="#c8b78c" font-family="Georgia,serif" font-size="17" letter-spacing="4">${position}</text>
        <rect x="${x}" y="135" width="220" height="330" rx="2" fill="#080b10" stroke="#c8b78c" stroke-width="2"/>
        <svg x="${x + 8}" y="143" width="204" height="306" viewBox="0 0 220 330">${art}</svg>
        <text x="${x + 110}" y="515" text-anchor="middle" fill="#f1ede5" font-family="Georgia,serif" font-size="24" letter-spacing="1">${title}</text>
        <text x="${x + 110}" y="550" text-anchor="middle" fill="#78b8f2" font-family="Georgia,serif" font-size="14">${keyword}</text>
      </g>`;
    }).join('');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700">
      <rect width="1200" height="700" fill="#030305"/>
      <text x="600" y="55" text-anchor="middle" fill="#f1ede5" font-family="Georgia,serif" font-size="30" letter-spacing="7">VELVET ORACLE</text>
      <path d="M90 78H1110" stroke="#315f8c" stroke-width="1"/>
      ${cardMarkup}
      <text x="600" y="640" text-anchor="middle" fill="#c8b78c" font-family="Georgia,serif" font-size="15" letter-spacing="4">KEEP WHAT RESONATES. LEAVE WHAT DOES NOT.</text>
    </svg>`;
    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const objectUrl = URL.createObjectURL(blob);
    try {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 2400; canvas.height = 1400;
        const context = canvas.getContext('2d');
        if (!context) return;
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((png) => {
          if (!png) return;
          const pngUrl = URL.createObjectURL(png);
          const a = document.createElement('a'); a.href = pngUrl; a.download = 'velvet-oracle-spread.png'; a.click();
          URL.revokeObjectURL(pngUrl);
        }, 'image/png');
        URL.revokeObjectURL(objectUrl);
      };
      image.onerror = () => URL.revokeObjectURL(objectUrl);
      image.src = objectUrl;
    } catch { URL.revokeObjectURL(objectUrl); }
  };

  return <div className="site-shell">
    <SideOrnament side="left"/><SideOrnament side="right"/>
    <header className="topbar">
      <a className="wordmark" href="#home" onClick={reset}>V<span>·</span>O</a>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <a href="#ritual" onClick={() => setMenuOpen(false)}>THE RITUAL</a><a href="#about" onClick={() => setMenuOpen(false)}>THE ART OF DIVINATION</a><a href="#reading" onClick={() => setMenuOpen(false)}>YOUR READING</a>
      </nav>
      <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={18}/> : <Menu size={18}/>}</button>
    </header>

    <main id="home">
      <section className="hero" id="ritual">
        <div className="eyebrow"><span>✧</span> A MOMENT OUTSIDE OF TIME <span>✧</span></div>
        <div className="sigil" aria-label="Velvet Oracle emblem"><svg viewBox="0 0 180 180" fill="none"><circle cx="90" cy="90" r="69"/><circle cx="90" cy="90" r="61"/><path d="M90 18C105 47 133 75 162 90C133 105 105 133 90 162C75 133 47 105 18 90C47 75 75 47 90 18Z"/><path d="M90 38C103 62 118 77 142 90C118 103 103 118 90 142C77 118 62 103 38 90C62 77 77 62 90 38Z"/><path d="M90 56V124M56 90H124M66 66L114 114M114 66L66 114"/><path d="M90 7V27M90 153V173M7 90H27M153 90H173"/><circle cx="90" cy="90" r="5" fill="currentColor"/></svg><span className="sigil-star s1">✧</span><span className="sigil-star s2">✦</span></div>
        <h1>Velvet Oracle</h1>
        <Flourish className="hero-flourish"/>
        <p className="hero-copy">A private little ritual for the questions<br className="desktop-only"/> that linger between heartbeats.</p>
        <button type="button" className="text-link enter-ritual" onClick={() => { setRitualOpen(true); window.setTimeout(() => document.getElementById('reading')?.scrollIntoView({ behavior: 'smooth' }), 80); }}>ENTER THE RITUAL</button>
      </section>

      <section className="intro-section" id="about">
        <div className="section-label"><span>01</span><Flourish/><span>THE ART OF DIVINATION</span></div>
        <div className="intro-grid"><div><h2>Some answers arrive<br/>when we <em>learn to listen.</em></h2></div><div className="intro-text"><p>Tarot is not a map of a fixed future. It is a mirror held to the present — a language of symbols, intuition, and the beautiful unknown.</p><p>Take a breath. Set an intention. Let the cards offer a different way of seeing what is already unfolding.</p><span className="small-note">✧ &nbsp; THE CARDS REFLECT; YOU DECIDE. &nbsp; ✧</span></div></div>
      </section>

      {ritualOpen && <section className="reading-section ritual-is-open" id="reading">
        <div className="section-label"><span>02</span><Flourish/><span>YOUR THREEFOLD SPREAD</span></div>
        <div className="reading-heading"><p className="eyebrow">PAST · PRESENT · POSSIBILITY</p><h2>What is written <em>within?</em></h2><p>Leave the noise behind. Ask what you need to ask.</p></div>
        {!cards.length ? <div className="ritual-form-wrap">
          <div className="deck-preview"><div className="preview-card p-left"><BackArt/></div><div className="preview-card p-center"><BackArt/></div><div className="preview-card p-right"><BackArt/></div><span className="orbit-star">✧</span></div>
          <div className="ritual-form"><label htmlFor="oracle-name">FIRST, WHAT SHALL WE CALL YOU?</label><input id="oracle-name" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" maxLength={36} onKeyDown={e => e.key === 'Enter' && draw()}/><label htmlFor="oracle-question">WHAT IS ON YOUR MIND? <span>— OPTIONAL</span></label><textarea id="oracle-question" value={question} onChange={e => setQuestion(e.target.value)} placeholder="A thought, a question, a feeling…" rows={2}/><button className="outline-button" onClick={draw} disabled={!name.trim() || busy}>{busy ? 'SHUFFLING THE DECK…' : 'DRAW YOUR CARDS'} <span>✧</span></button><p className="form-footnote">THREE CARDS · ONE MOMENT · YOUR OWN MEANING</p></div>
        </div> : <div className="results" aria-live="polite">
          <p className="result-greeting">{greeting}</p><div className="cards-row">{cards.map((card, i) => <article className={`drawn-card ${revealed ? 'revealed' : ''}`} style={{ animationDelay: `${i * 280}ms` }} key={card.name}><div className="card-position">{positions[i]}</div><div className="tarot-frame">{revealed ? <><CardArt symbol={card.symbol}/><div className="card-roman">{card.roman}</div></> : <BackArt/>}</div>{revealed && <div className="card-caption"><h3 className={card.name.length > 13 ? 'card-title-long' : 'card-title'}>{card.name}</h3><p>{card.keyword}</p><span className="card-index">✧ &nbsp; {String(i + 1).padStart(2, '0')} &nbsp; ✧</span></div>}</article>)}</div>
          {revealed && <><div className="interpretations"><div className="interpretation-heading"><Flourish/><span>THE CARDS HAVE SPOKEN</span><Flourish/></div>{cards.map((card, i) => <article className="interpretation" key={card.name}><div className="interpretation-number">0{i + 1}</div><div><p className="interpretation-position">{positions[i]}</p><h3>{card.name}</h3><p>{card.meaning}</p></div></article>)}<div className="closing-note">“The future is not a place we arrive at,<br/> but a story we take part in writing.”</div></div><div className="result-actions"><button className="outline-button" onClick={download}><Download size={14}/> DOWNLOAD YOUR SPREAD</button><button className="outline-button" onClick={share}><Share2 size={14}/> SHARE THE MOMENT</button></div></>}
          {!revealed && <p className="shuffling-note">THE DECK IS FINDING ITS WAY TO YOU…</p>}
        </div>}
      </section>}

      <section className="closing-section"><Flourish/><p>KEEP WHAT RESONATES. LEAVE WHAT DOES NOT.</p><h2>Trust the <em>unfolding.</em></h2><a href="#home" className="text-link" onClick={(event) => { event.preventDefault(); reset(); }}>RETURN TO THE BEGINNING ↑</a></section>
    </main>
    <footer><div className="footer-mark">V<span>·</span>O</div><div className="footer-copy">A SMALL ALTAR TO THE UNKNOWN<br/><span>© 2026 VELVET ORACLE</span></div><div className="footer-links"><a href="#about">ABOUT</a><a href="#ritual">THE RITUAL</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={14}/></a></div></footer>
  </div>;
}
