import './App.css';

const profileLinks = {
  redbubble: 'https://www.redbubble.com/people/REPLACE_WITH_PROFILE',
  vinted: 'https://www.vinted.com/member/REPLACE_WITH_PROFILE',
};

const diaryEntries = [
  {
    date: 'entry 001 / lately',
    title: 'Making things\\nfor the noise.',
    text: 'New little posters, loud colors, and things to stick on your wall when it needs more personality.',
    image: '/assets/house-music.jpg',
    alt: 'Pink poster lettering on a yellow-green background',
    className: 'entry-main',
  },
  {
    date: 'entry 002 / saved',
    title: 'Soft launch\\nenergy.',
    text: 'A few things I would put on a jacket, a laptop, or directly in my room.',
    image: '/assets/swag-sticker.jpg',
    alt: 'Pink SWAG lettering surrounded by dots',
    className: 'entry-small',
  },
  {
    date: 'entry 003 / repeat',
    title: 'Music is my\\npersonality.',
    text: 'For the headphones-on, main-character walks. Find the whole pile in the shop.',
    image: '/assets/music-sticker.jpg',
    alt: 'Pink MUSIC IS MY DRUG lettering on black',
    className: 'entry-small entry-dark',
  },
];

function Sticker({ children, className = '' }) {
  return <span className={`sticker ${className}`}>{children}</span>;
}

function App() {
  return (
    <div className="blog-shell" id="top">
      <header className="masthead">
        <div className="masthead-top"><span>alleycat.exe</span><span>online / mostly</span></div>
        <div className="masthead-title"><span className="title-star">★</span><h1>aLLey<span>cat</span></h1><span className="title-star">★</span></div>
        <p className="tagline">personal web zone for things I like / make / want</p>
        <nav className="blog-nav" aria-label="Main navigation"><a href="#diary">diary</a><a href="#shop">shop links</a><a href="#about">about this</a><a href="#guestbook">guestbook</a></nav>
      </header>

      <main>
        <section className="welcome" id="about">
          <div className="welcome-copy"><Sticker className="sticker-yellow">NEW!</Sticker><p className="tiny-label">welcome to my internet</p><h2>Come in,<br /><span>look around.</span></h2><p className="welcome-text">This is the little corner where I collect the good stuff: loud graphics, soft chaos, and objects that deserve to leave the screen.</p><a className="text-link" href="#diary">scroll the archive ↓</a></div>
          <div className="welcome-art"><img src="/assets/house-music.jpg" alt="House, music, and partying poster artwork" /><Sticker className="sticker-pink">u r here</Sticker><Sticker className="sticker-black">★ 100% handmade vibes ★</Sticker></div>
        </section>

        <div className="marquee" aria-hidden="true"><div>new post! &nbsp; ★ &nbsp; new post! &nbsp; ★ &nbsp; new post! &nbsp; ★ &nbsp; new post! &nbsp; ★ &nbsp; new post! &nbsp; ★ &nbsp;</div></div>

        <section className="diary" id="diary"><div className="section-heading"><h2>the diary</h2><p>last updated: whenever it feels right</p></div><div className="entry-grid">{diaryEntries.map((entry) => <article className={`diary-entry ${entry.className}`} key={entry.date}><div className="entry-image"><img src={entry.image} alt={entry.alt} /><span className="image-corner">↗</span></div><div className="entry-copy"><p className="entry-date">{entry.date}</p><h3>{entry.title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h3><p>{entry.text}</p><a className="text-link" href="#shop">read more →</a></div></article>)}</div></section>

        <section className="shop-strip" id="shop"><div className="shop-copy"><p className="tiny-label">take it home</p><h2>internet things<br /><span>for real life.</span></h2><p>Prints, stickers, and other small proofs that you have excellent taste.</p></div><div className="shop-links"><a className="shop-link redbubble-link" href={profileLinks.redbubble} target="_blank" rel="noreferrer"><span>redbubble</span><strong>↗</strong><small>prints / stickers / things</small></a><a className="shop-link vinted-link" href={profileLinks.vinted} target="_blank" rel="noreferrer"><span>vinted</span><strong>↗</strong><small>pre-loved / re-loved / yours</small></a></div></section>

        <section className="guestbook" id="guestbook"><Sticker className="sticker-yellow">sign it!</Sticker><h2>you made it<br /><span>to the bottom.</span></h2><p>Leave a little love in the air, then come back whenever the internet gets boring.</p><a className="button-link" href="mailto:hello@example.com">say hello <span>♡</span></a></section>
      </main>
      <footer className="blog-footer"><div><strong>alleycat</strong><span>© 2000-something / made with too many tabs open</span></div><div><span>best viewed with curiosity</span><span>↑ <a href="#top">back to top</a></span></div></footer>
    </div>
  );
}

export default App;
