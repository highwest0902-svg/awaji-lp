/* =========================================================================
   GRAND NIKKO AWAJI - Resort Wedding LP
   Mobile-first / Static mock
   ========================================================================= */

:root{
  /* ---------- color ---------- */
  --c-bg:        #faf7f1;      /* ivory */
  --c-bg-2:      #f3eee5;      /* ecru */
  --c-paper:     #ffffff;
  --c-blue:      #7a93a2;      /* smoky seto-blue */
  --c-greige:    #a89e91;      /* ando greige */
  --c-olive:     #7a8260;      /* awaji olive */
  --c-gold:      #b69658;      /* discreet gold */
  --c-terra:     #c8703a;      /* terracotta orange (primary CTA) */
  --c-terra-2:   #b35e2c;      /* hover */
  --c-text:      #3a3733;      /* charcoal */
  --c-sub:       #8a857d;      /* sub gray */
  --c-line:      #d9d1c4;      /* hairline */
  --c-dark:      #222220;      /* shared dark bg for STAY & FINAL CTA */
  --c-cuisine-bg: #e8eef2;     /* smoky sea-blue for CUISINE */

  /* ---------- typography ---------- */
  --f-jp:        "Noto Serif JP","Shippori Mincho","Yu Mincho",serif;
  --f-en:        "Cormorant Garamond","Playfair Display","EB Garamond",serif;
  --f-en-sans:   "Inter","Helvetica Neue",sans-serif;

  /* ---------- spacing ---------- */
  --section-py:  clamp(64px, 14vw, 128px);
  --container:   1120px;
  --gutter:      clamp(20px, 5vw, 48px);

  /* ---------- motion ---------- */
  --ease:        cubic-bezier(.22,.61,.36,1);
}

/* ---------- base ---------- */
html{font-size:16px}
body{
  font-family:var(--f-jp);
  color:var(--c-text);
  background:var(--c-bg);
  font-weight:400;
  letter-spacing:.04em;
  line-height:1.95;
}

img{object-fit:cover}

.container{
  width:100%;
  max-width:var(--container);
  margin-inline:auto;
  padding-inline:var(--gutter);
}

/* =========================================================================
   shared: section heading (英字+日本語)
   ========================================================================= */
.section-eyebrow{
  display:block;
  font-family:var(--f-en);
  font-weight:400;
  font-style:italic;
  letter-spacing:.18em;
  color:var(--c-gold);
  font-size:clamp(13px,2.8vw,15px);
  margin-bottom:14px;
}
.section-title{
  font-family:var(--f-jp);
  font-weight:500;
  color:var(--c-text);
  font-size:clamp(20px,5vw,30px);
  line-height:1.7;
  letter-spacing:.08em;
  margin-bottom:clamp(28px,6vw,48px);
}
.section-title__en{
  display:block;
  font-family:var(--f-en);
  font-weight:400;
  font-style:italic;
  letter-spacing:.22em;
  color:var(--c-gold);
  font-size:clamp(13px,2.8vw,16px);
  margin-bottom:14px;
}
.section-num{
  display:inline-block;
  font-family:var(--f-en-sans);
  font-size:clamp(11px,2.4vw,13px);
  letter-spacing:.3em;
  color:var(--c-sub);
  margin-bottom:18px;
}
.section-num::before{
  content:"";
  display:inline-block;
  width:32px;height:1px;background:var(--c-greige);
  vertical-align:middle;margin-right:14px;
}

/* =========================================================================
   buttons (CTA)
   ========================================================================= */
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:12px;
  min-height:56px;
  padding:0 32px;
  font-family:var(--f-jp);
  font-size:15px;
  font-weight:500;
  letter-spacing:.14em;
  border-radius:2px;
  transition:.4s var(--ease);
  position:relative;
  text-align:center;
}
.btn--primary{
  background:var(--c-terra);
  color:#fff;
}
.btn--primary:hover{background:var(--c-terra-2);color:#fff;letter-spacing:.18em}
.btn--ghost{
  background:transparent;
  color:var(--c-text);
  border:1px solid var(--c-greige);
}
.btn--ghost:hover{background:var(--c-text);color:var(--c-bg);border-color:var(--c-text)}
.btn--gold{
  background:var(--c-terra);
  color:#fff;
}
.btn--gold:hover{background:var(--c-terra-2)}
.btn__arrow{
  display:inline-block;
  width:18px;height:1px;background:currentColor;
  position:relative;
}
.btn__arrow::after{
  content:"";position:absolute;right:0;top:-3px;
  width:7px;height:7px;
  border-top:1px solid currentColor;
  border-right:1px solid currentColor;
  transform:rotate(45deg);
}

/* =========================================================================
   header (logo + tiny nav)
   ========================================================================= */
.site-header{
  position:absolute;
  inset:0 0 auto 0;
  z-index:30;
  padding:clamp(16px,4vw,28px) clamp(20px,5vw,48px);
  display:flex;
  align-items:center;
  justify-content:space-between;
  color:#fff;
  pointer-events:none;
}
.site-header > *{pointer-events:auto}
.site-header__logo{
  font-family:var(--f-en);
  font-style:italic;
  letter-spacing:.2em;
  font-size:clamp(13px,3vw,16px);
  line-height:1.3;
}
.site-header__logo small{
  display:block;
  font-family:var(--f-jp);
  font-style:normal;
  letter-spacing:.18em;
  font-size:11px;
  opacity:.85;
  margin-top:4px;
}
.site-header__cta{
  display:none;
}
@media (min-width:900px){
  .site-header__cta{
    display:inline-flex;
    background:var(--c-terra);
    border:1px solid var(--c-terra);
    color:#fff;
    min-height:46px;
    padding:0 22px;
    font-size:14px;
    box-shadow:0 4px 18px rgba(200,112,58,.3);
  }
  .site-header__cta:hover{background:var(--c-terra-2);border-color:var(--c-terra-2);color:#fff}
}

/* =========================================================================
   01. HERO
   ========================================================================= */
.hero{
  position:relative;
  min-height:100svh;
  min-height:100vh;
  color:#fff;
  overflow:hidden;
  display:flex;
  align-items:center;
}
.hero__media{
  position:absolute;inset:0;z-index:0;
}
.hero__media img{
  width:100%;height:100%;object-fit:cover;
  animation:heroZoom 14s var(--ease) both;
}
@keyframes heroZoom{
  from{transform:scale(1.08)}
  to  {transform:scale(1)}
}
.hero__media::after{
  content:"";position:absolute;inset:0;
  background:linear-gradient(180deg,rgba(0,0,0,.18) 0%,rgba(0,0,0,.05) 40%,rgba(0,0,0,.05) 60%,rgba(0,0,0,.35) 100%);
}
.hero__inner{
  position:relative;
  z-index:2;
  width:100%;
  padding:clamp(60px,12vw,80px) var(--gutter);
}
.hero__eyebrow{
  font-family:var(--f-en);
  font-style:italic;
  letter-spacing:.32em;
  font-size:clamp(12px,3vw,15px);
  margin-bottom:24px;
  opacity:.95;
}
.hero__copy{
  font-family:var(--f-jp);
  font-weight:400;
  font-size:clamp(22px,6.8vw,46px);
  line-height:1.55;
  letter-spacing:.08em;
  text-shadow:0 2px 24px rgba(0,0,0,.25);
}
.hero__copy span{display:block}
.hero__sub{
  margin-top:clamp(20px,5vw,32px);
  font-size:clamp(13px,3.4vw,16px);
  line-height:2;
  max-width:520px;
  text-shadow:0 2px 16px rgba(0,0,0,.4);
}
.hero__actions{
  margin-top:clamp(28px,6vw,40px);
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:12px;
  max-width:520px;
}
.hero__actions .btn{padding:0 16px;letter-spacing:.08em}
.hero__actions .btn--primary{background:var(--c-terra);color:#fff}
.hero__actions .btn--primary:hover{background:var(--c-terra-2);color:#fff}
.hero__actions .btn--ghost{color:#fff;border-color:rgba(255,255,255,.7);background:rgba(255,255,255,.08);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}
.hero__actions .btn--ghost:hover{background:#fff;color:var(--c-text);border-color:#fff}

/* scroll cue */
.hero__scroll{
  position:absolute;
  z-index:2;
  left:50%;bottom:24px;
  transform:translateX(-50%);
  font-family:var(--f-en);
  font-style:italic;
  letter-spacing:.32em;
  font-size:11px;
  color:#fff;opacity:.85;
  writing-mode:vertical-rl;
}
.hero__scroll::after{
  content:"";position:absolute;left:50%;bottom:-46px;transform:translateX(-50%);
  width:1px;height:36px;background:#fff;opacity:.7;
  animation:scrollLine 1.8s var(--ease) infinite;
}
@keyframes scrollLine{
  0%  {transform:translateX(-50%) scaleY(0);transform-origin:top}
  50% {transform:translateX(-50%) scaleY(1);transform-origin:top}
  51% {transform:translateX(-50%) scaleY(1);transform-origin:bottom}
  100%{transform:translateX(-50%) scaleY(0);transform-origin:bottom}
}

/* =========================================================================
   02. CONCEPT
   ========================================================================= */
.concept{padding:var(--section-py) 0;background:var(--c-bg)}
.concept__inner{display:grid;gap:clamp(28px,6vw,56px)}
.concept__copy{order:2}
.concept__media{order:1;display:grid;grid-template-columns:repeat(6,1fr);gap:14px}
.concept__media figure{margin:0;overflow:hidden}
.concept__media img{width:100%;height:100%}
.concept__media figure:nth-child(1){grid-column:1/5;aspect-ratio:4/5}
.concept__media figure:nth-child(2){grid-column:5/7;aspect-ratio:3/4;margin-top:30%}
.concept__lead{
  font-family:var(--f-jp);
  font-size:clamp(20px,5vw,30px);
  font-weight:500;
  letter-spacing:.08em;
  line-height:1.7;
  margin-bottom:28px;
  text-align:left;
}
.concept__body{
  font-size:clamp(14px,3.4vw,15.5px);
  line-height:2.15;
  color:var(--c-text);
  max-width:560px;
  text-align:left;
}
.concept__body + .concept__body{margin-top:1.4em}
.concept__access{
  display:flex;flex-wrap:wrap;gap:18px;
  margin-top:clamp(24px,5vw,36px);
  padding-top:24px;
  border-top:1px solid var(--c-line);
}
.concept__access dt{font-family:var(--f-en);font-style:italic;letter-spacing:.18em;font-size:11px;color:var(--c-gold);margin-bottom:4px}
.concept__access dd{font-size:13px;letter-spacing:.08em}
.concept__access strong{font-size:18px;font-weight:500;color:var(--c-text);letter-spacing:.05em;margin-right:4px}

@media (min-width:880px){
  .concept__inner{grid-template-columns:1.05fr 1fr;align-items:center}
  .concept__copy{order:2}
  .concept__media{order:1}
}

/* =========================================================================
   LOCATION (淡路夢舞台のスケール訴求)
   ========================================================================= */
.location{
  position:relative;
  color:#fff;
  overflow:hidden;
  isolation:isolate;
  padding:var(--section-py) 0;
}
.location::before{
  content:"";position:absolute;inset:0;z-index:-2;
  background:url("../assets/img/location-yumebutai-pano.jpg") center/cover no-repeat;
  transform:scale(1.02);
}
.location::after{
  content:"";position:absolute;inset:0;z-index:-1;
  background:linear-gradient(180deg,rgba(28,28,26,.45) 0%,rgba(28,28,26,.55) 60%,rgba(28,28,26,.75) 100%);
}
.location__inner{
  max-width:780px;
  margin-inline:auto;
  text-align:center;
}
.location__eyebrow{
  display:block;
  font-family:var(--f-en);
  font-style:italic;
  letter-spacing:.32em;
  font-size:clamp(12px,2.8vw,14px);
  color:#e9d9b7;
  margin-bottom:18px;
}
.location__title{
  font-family:var(--f-jp);
  font-weight:500;
  font-size:clamp(22px,5.6vw,32px);
  letter-spacing:.1em;
  line-height:1.7;
  margin-bottom:clamp(32px,6vw,44px);
}
.location__title span{display:block}

.location__stats{
  display:grid;
  gap:0;
  grid-template-columns:1fr;
  margin:clamp(28px,6vw,40px) auto 0;
  max-width:680px;
  border-top:1px solid rgba(255,255,255,.25);
  border-bottom:1px solid rgba(255,255,255,.25);
}
.location__stat{
  padding:clamp(20px,4vw,28px) 12px;
  text-align:center;
  border-top:1px solid rgba(255,255,255,.15);
}
.location__stat:first-child{border-top:0}
.location__stat-num{
  font-family:var(--f-en);
  font-style:italic;
  font-size:clamp(40px,11vw,68px);
  line-height:1;
  color:#e9d9b7;
  letter-spacing:.02em;
  display:block;
  margin-bottom:8px;
}
.location__stat-num small{font-size:.45em;font-style:normal;margin-left:6px;letter-spacing:.1em;color:#fff;font-family:var(--f-en-sans)}
.location__stat-label{
  display:block;
  font-size:clamp(12px,3vw,13.5px);
  letter-spacing:.12em;
  color:#f1ead8;
  line-height:1.7;
}
.location__note{
  margin-top:clamp(28px,5vw,36px);
  font-size:clamp(13px,3.2vw,14.5px);
  line-height:2.1;
  color:#f1ead8;
}
.location__highlight{
  display:inline-block;
  margin-top:18px;
  padding:8px 18px;
  border:1px solid rgba(255,255,255,.55);
  font-family:var(--f-en-sans);
  font-size:12px;
  letter-spacing:.22em;
  color:#fff;
}
@media (min-width:760px){
  .location__stats{grid-template-columns:repeat(3,1fr)}
  .location__stat{border-top:0;border-left:1px solid rgba(255,255,255,.15)}
  .location__stat:first-child{border-left:0}
}

/* =========================================================================
   03. THREE EXPERIENCES
   ========================================================================= */
.three{padding:var(--section-py) 0;background:var(--c-bg-2)}
.three__head{text-align:center;margin-bottom:clamp(40px,8vw,72px)}
.three__grid{
  display:grid;gap:clamp(36px,7vw,40px);
  grid-template-columns:1fr;
}
.three-card{position:relative}
.three-card__num{
  font-family:var(--f-en);
  font-style:italic;
  letter-spacing:.2em;
  color:var(--c-gold);
  font-size:14px;
  margin-bottom:14px;
}
.three-card__img{
  aspect-ratio:4/5;
  overflow:hidden;
  margin-bottom:24px;
}
.three-card__img img{width:100%;height:100%;transition:.8s var(--ease)}
.three-card:hover .three-card__img img{transform:scale(1.04)}
.three-card__en{
  font-family:var(--f-en);
  font-style:italic;
  letter-spacing:.24em;
  color:var(--c-greige);
  font-size:13px;
  margin-bottom:8px;
}
.three-card__title{
  font-family:var(--f-jp);
  font-weight:500;
  font-size:clamp(17px,4.2vw,21px);
  letter-spacing:.06em;
  line-height:1.6;
  margin-bottom:14px;
}
.three-card__body{
  font-size:14px;line-height:2;color:var(--c-text);
}
@media (min-width:760px){
  .three__grid{grid-template-columns:repeat(3,1fr);gap:36px}
}

/* =========================================================================
   04. CEREMONY
   ========================================================================= */
.ceremony{padding:var(--section-py) 0;background:var(--c-bg)}
.ceremony__head{display:grid;gap:24px;align-items:end;margin-bottom:clamp(40px,8vw,72px)}
@media (min-width:760px){
  .ceremony__head{grid-template-columns:1fr auto}
}
.ceremony__big-num{
  font-family:var(--f-en);
  font-style:italic;
  font-size:clamp(80px,22vw,180px);
  line-height:.9;
  color:var(--c-line);
  letter-spacing:.04em;
  margin:0;
}
.ceremony__hero{
  position:relative;
  margin-bottom:clamp(40px,8vw,72px);
}
.ceremony__hero-img{
  aspect-ratio:16/10;
  overflow:hidden;
}
.ceremony__hero-img img{width:100%;height:100%}
.ceremony__hero-text{
  background:var(--c-paper);
  padding:clamp(28px,6vw,48px);
  position:relative;
  margin-top:-40px;
  margin-inline:clamp(0px,3vw,40px);
  border-top:2px solid var(--c-gold);
}
.ceremony__hero-text h3{
  font-family:var(--f-jp);
  font-weight:500;
  font-size:clamp(18px,4.4vw,24px);
  letter-spacing:.06em;
  margin-bottom:16px;
}
.ceremony__hero-text h3 .en{
  display:block;font-family:var(--f-en);font-style:italic;
  letter-spacing:.22em;color:var(--c-gold);font-size:13px;font-weight:400;
  margin-bottom:8px;
}
.ceremony__hero-text p{font-size:14.5px;line-height:2.1}

.ceremony__list{display:grid;gap:clamp(24px,5vw,32px);grid-template-columns:1fr 1fr}
@media (min-width:760px){
  .ceremony__list{grid-template-columns:repeat(4,1fr)}
}
.venue-card{}
.venue-card__img{
  aspect-ratio:4/5;
  overflow:hidden;
  margin-bottom:14px;
}
.venue-card__img img{width:100%;height:100%;transition:.7s var(--ease)}
.venue-card:hover .venue-card__img img{transform:scale(1.05)}
.venue-card__en{
  font-family:var(--f-en);
  font-style:italic;
  letter-spacing:.2em;
  color:var(--c-gold);
  font-size:11px;
  margin-bottom:6px;
}
.venue-card__name{
  font-family:var(--f-jp);
  font-weight:500;
  font-size:15px;
  letter-spacing:.06em;
  margin-bottom:8px;
}
.venue-card__desc{
  font-size:12px;
  color:var(--c-sub);
  line-height:1.8;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}

/* =========================================================================
   05. PARTY SPACE (CELREO RESORT EXPERIENCE)
   ========================================================================= */
.party{padding:var(--section-py) 0;background:var(--c-bg-2);overflow:hidden}
.party__hero{
  position:relative;
  aspect-ratio:16/10;
  overflow:hidden;
  margin-bottom:clamp(32px,6vw,56px);
}
.party__hero img{width:100%;height:100%;animation:heroZoom 16s var(--ease) both}
.party__hero::after{
  content:"";position:absolute;inset:0;
  background:linear-gradient(180deg,rgba(0,0,0,0) 50%,rgba(0,0,0,.35) 100%);
}
.party__hero-label{
  position:absolute;left:clamp(20px,5vw,40px);bottom:clamp(20px,5vw,32px);
  color:#fff;z-index:2;
}
.party__hero-label .en{
  display:block;
  font-family:var(--f-en);font-style:italic;letter-spacing:.32em;
  font-size:clamp(13px,3vw,15px);color:#e9d9b7;margin-bottom:8px;
}
.party__hero-label .ja{
  font-family:var(--f-jp);font-weight:500;
  font-size:clamp(18px,4.6vw,26px);letter-spacing:.08em;
  text-shadow:0 2px 18px rgba(0,0,0,.4);
}

.party__inner{
  display:grid;gap:clamp(32px,7vw,56px);
}
@media (min-width:880px){
  .party__inner{grid-template-columns:1.05fr 1fr;align-items:start}
}
.party__copy{order:1}
.party__lead{
  font-family:var(--f-jp);
  font-weight:500;
  font-size:clamp(20px,5vw,30px);
  line-height:1.7;
  letter-spacing:.08em;
  margin:18px 0 28px;
}
.party__body{font-size:14.5px;line-height:2.15;max-width:520px}
.party__body + .party__body{margin-top:1.4em}
.party__points{
  margin-top:32px;
  display:grid;gap:18px;
}
.party__points li{
  padding:14px 0 14px 22px;
  border-top:1px solid var(--c-line);
  font-size:13.5px;line-height:1.85;color:var(--c-text);letter-spacing:.05em;
  position:relative;
}
.party__points li:last-child{border-bottom:1px solid var(--c-line)}
.party__points li::before{
  content:"";position:absolute;left:0;top:1.35em;
  width:12px;height:1px;background:var(--c-gold);
}
.party__cap{
  display:inline-block;
  margin-top:24px;
  font-family:var(--f-en-sans);
  font-size:12px;letter-spacing:.2em;
  padding:6px 14px;border:1px solid var(--c-line);
  background:#fff;color:var(--c-sub);
}
.party__cap strong{
  font-family:var(--f-en);font-style:italic;
  font-size:18px;color:var(--c-gold);
  letter-spacing:.06em;margin-right:4px;
}

.party__media{order:2;display:grid;grid-template-columns:repeat(6,1fr);gap:12px}
.party__media figure{margin:0;overflow:hidden}
.party__media img{width:100%;height:100%;transition:.8s var(--ease)}
.party__media figure:hover img{transform:scale(1.05)}
.party__media figure:nth-child(1){grid-column:1/5;aspect-ratio:4/5}
.party__media figure:nth-child(2){grid-column:5/7;aspect-ratio:3/4;margin-top:30%}

.party__other{
  margin-top:clamp(40px,8vw,56px);
  padding-top:clamp(28px,5vw,36px);
  border-top:1px solid var(--c-line);
  text-align:left;
  font-size:14px;
  letter-spacing:.06em;
  line-height:2.1;
  color:var(--c-text);
  max-width:680px;
}
.party__other strong{color:var(--c-text);font-weight:500}
.party__other-en{
  display:block;
  font-family:var(--f-en);font-style:italic;letter-spacing:.24em;
  color:var(--c-gold);font-size:12px;margin-bottom:8px;
}

/* =========================================================================
   06. CUISINE
   ========================================================================= */
.cuisine{padding:var(--section-py) 0;background:var(--c-cuisine-bg);position:relative;overflow:hidden}
.cuisine .section-eyebrow{color:var(--c-terra)}
.cuisine .cuisine__tags span{background:#fff;border-color:rgba(122,147,162,.35)}
.cuisine__inner{display:grid;gap:clamp(32px,7vw,56px)}
@media (min-width:900px){
  .cuisine__inner{grid-template-columns:1fr 1fr;align-items:center}
}
.cuisine__copy{}
.cuisine__lead{
  font-family:var(--f-jp);
  font-weight:500;
  font-size:clamp(20px,5vw,30px);
  line-height:1.7;
  letter-spacing:.07em;
  margin:24px 0 28px;
}
.cuisine__body{font-size:14.5px;line-height:2.15;max-width:480px}
.cuisine__body + .cuisine__body{margin-top:1.4em}
.cuisine__tags{
  display:flex;flex-wrap:wrap;gap:8px;
  margin-top:28px;
}
.cuisine__tags span{
  font-family:var(--f-en-sans);
  font-size:11px;letter-spacing:.16em;
  padding:6px 14px;
  border:1px solid var(--c-line);
  color:var(--c-sub);
  background:#fff;
}
.cuisine__actions{margin-top:32px;display:flex;flex-wrap:wrap;gap:12px}

.cuisine__media{
  display:grid;
  grid-template-columns:repeat(6,1fr);
  gap:12px;
}
.cuisine__media figure{margin:0;overflow:hidden}
.cuisine__media figure:nth-child(1){grid-column:1/5;aspect-ratio:1/1}
.cuisine__media figure:nth-child(2){grid-column:5/7;aspect-ratio:3/4;margin-top:20%}
.cuisine__media figure:nth-child(3){grid-column:2/6;aspect-ratio:5/3;margin-top:-12%}
.cuisine__media img{width:100%;height:100%;transition:.8s var(--ease)}
.cuisine__media figure:hover img{transform:scale(1.05)}

/* =========================================================================
   07. STAY WEDDING
   ========================================================================= */
.stay{padding:var(--section-py) 0;background:var(--c-dark);color:#f6f1e6;position:relative;overflow:hidden}
.stay .section-eyebrow{color:var(--c-gold)}
.stay__head{text-align:center;margin-bottom:clamp(40px,8vw,64px)}
.stay__head .section-title{color:#f6f1e6}
.stay__grid{
  display:grid;gap:clamp(20px,4vw,28px);
  grid-template-columns:repeat(4,1fr);
}
.stay__grid figure{margin:0;overflow:hidden}
.stay__grid img{width:100%;height:100%;transition:.8s var(--ease)}
.stay__grid figure:hover img{transform:scale(1.05)}
.stay__grid figure:nth-child(1){grid-column:1/3;aspect-ratio:5/6}
.stay__grid figure:nth-child(2){grid-column:3/5;aspect-ratio:5/6;margin-top:30%}
.stay__grid figure:nth-child(3){grid-column:1/5;aspect-ratio:16/8;margin-top:-12%}
.stay__points{
  display:grid;gap:18px;
  margin-top:clamp(40px,8vw,64px);
  grid-template-columns:repeat(2,1fr);
}
@media (min-width:760px){
  .stay__points{grid-template-columns:repeat(4,1fr)}
}
.stay__points li{
  border-top:1px solid rgba(255,255,255,.15);
  padding-top:18px;
  font-size:13.5px;
  line-height:1.8;
  color:#e9e2d2;
  letter-spacing:.06em;
}
.stay__points li::before{
  content:attr(data-no);
  display:block;
  font-family:var(--f-en);font-style:italic;letter-spacing:.2em;
  color:var(--c-gold);font-size:12px;margin-bottom:8px;
}

/* =========================================================================
   08. ACCESS
   ========================================================================= */
.access{padding:var(--section-py) 0;background:var(--c-bg)}
.access__head{text-align:center;margin-bottom:clamp(40px,8vw,64px)}
.access__inner{
  display:grid;gap:clamp(36px,7vw,56px);
}
@media (min-width:880px){
  .access__inner{grid-template-columns:1fr 1fr;align-items:center}
}
.access__map{
  background:#fff;
  border:1px solid var(--c-line);
  position:relative;
  overflow:hidden;
}
.access__map iframe{
  display:block;
  width:100%;
  height:clamp(280px,55vw,420px);
  border:0;
  filter:saturate(.85) contrast(1.02);
}
.access__map-link{
  display:inline-flex;
  align-items:center;
  gap:10px;
  margin-top:14px;
  font-family:var(--f-en-sans);
  font-size:12px;
  letter-spacing:.16em;
  color:var(--c-sub);
  padding:6px 0;
}
.access__map-link:hover{color:var(--c-gold)}
.access__times{display:flex;flex-wrap:wrap;gap:14px;margin-top:24px}
.access__times div{
  padding:10px 16px;
  background:var(--c-bg-2);
  font-size:13px;letter-spacing:.05em;
}
.access__times strong{
  font-family:var(--f-en-sans);
  font-size:22px;font-weight:500;
  color:var(--c-gold);letter-spacing:.04em;margin-right:4px;
}
.access__list{
  display:flex;flex-direction:column;gap:14px;
}
.access__list dt{
  font-family:var(--f-en);font-style:italic;letter-spacing:.18em;
  font-size:11px;color:var(--c-gold);margin-bottom:4px;
}
.access__list dd{font-size:14px;line-height:1.9;letter-spacing:.05em}
.access__list > div{border-bottom:1px dashed var(--c-line);padding-bottom:14px}
.access__list > div:last-child{border-bottom:0}

/* =========================================================================
   09. FAIR / CAMPAIGN
   ========================================================================= */
.fair{
  padding:var(--section-py) 0;
  background:linear-gradient(180deg,var(--c-bg-2) 0%,#ece4d3 100%);
  position:relative;
  overflow:hidden;
}
.fair::before{
  content:"";position:absolute;inset:0;
  background:radial-gradient(circle at 80% 0%,rgba(182,150,88,.1),transparent 60%);
  pointer-events:none;
}
.fair__inner{position:relative;text-align:center;max-width:760px;margin-inline:auto}
.fair__title{
  font-family:var(--f-jp);
  font-weight:500;
  font-size:clamp(20px,4.8vw,30px);
  letter-spacing:.06em;
  line-height:1.65;
  margin-bottom:32px;
  word-break:keep-all;
  overflow-wrap:break-word;
}
.fair__title .en{
  display:block;
  font-family:var(--f-en);font-style:italic;letter-spacing:.32em;
  color:var(--c-gold);font-size:14px;margin-bottom:14px;font-weight:400;
}
.fair__list{
  display:grid;gap:14px;text-align:left;
  margin:0 auto clamp(36px,7vw,48px);
  max-width:520px;
  background:#fff;
  padding:clamp(24px,5vw,36px);
  border:1px solid var(--c-line);
}
.fair__list li{
  padding-left:24px;
  position:relative;
  font-size:14px;line-height:1.95;
}
.fair__list li::before{
  content:"";
  position:absolute;left:0;top:.85em;
  width:14px;height:1px;background:var(--c-gold);
}
.fair__actions{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:12px;
  max-width:520px;
  margin-inline:auto;
}
@media (max-width:480px){
  .fair__actions{grid-template-columns:1fr}
}

/* =========================================================================
   10. FAQ
   ========================================================================= */
.faq{padding:var(--section-py) 0;background:var(--c-bg)}
.faq__head{text-align:center;margin-bottom:clamp(40px,8vw,56px)}
.faq__list{max-width:760px;margin-inline:auto;border-top:1px solid var(--c-line)}
.faq__item{border-bottom:1px solid var(--c-line)}
.faq__q{
  width:100%;
  display:flex;align-items:flex-start;gap:18px;
  text-align:left;
  padding:22px 4px;
  font-family:var(--f-jp);font-weight:500;
  font-size:15px;letter-spacing:.06em;line-height:1.7;
}
.faq__q::before{
  content:"Q.";
  flex:0 0 auto;
  font-family:var(--f-en);font-style:italic;
  color:var(--c-gold);font-size:18px;letter-spacing:.05em;
}
.faq__q::after{
  content:"";
  flex:0 0 auto;
  width:14px;height:14px;margin-left:auto;
  background:
    linear-gradient(currentColor,currentColor) center/100% 1px no-repeat,
    linear-gradient(currentColor,currentColor) center/1px 100% no-repeat;
  transition:transform .35s var(--ease);
  margin-top:.45em;
  color:var(--c-greige);
}
.faq__item[aria-expanded="true"] .faq__q::after{
  transform:rotate(45deg);
}
.faq__a{
  display:grid;
  grid-template-rows:0fr;
  transition:grid-template-rows .35s var(--ease);
}
.faq__a > div{overflow:hidden}
.faq__item[aria-expanded="true"] .faq__a{grid-template-rows:1fr}
.faq__a-inner{
  padding:0 4px 22px 36px;
  font-size:14px;line-height:2;color:var(--c-text);
  display:flex;gap:10px;
}
.faq__a-inner::before{
  content:"A.";
  font-family:var(--f-en);font-style:italic;
  color:var(--c-greige);font-size:18px;
  flex:0 0 auto;
}

/* =========================================================================
   11. FINAL CTA
   ========================================================================= */
.final-cta{
  position:relative;
  padding:var(--section-py) 0;
  color:#fff;
  overflow:hidden;
  isolation:isolate;
}
.final-cta{background:var(--c-dark)}
.final-cta::before{
  content:"";position:absolute;inset:0;z-index:-1;
  background:url("../assets/img/final-cta-bg.jpg") center/cover no-repeat;
  filter:brightness(.45) saturate(.9);
  transform:scale(1.02);
}
.final-cta::after{
  content:"";position:absolute;inset:0;z-index:-1;
  background:linear-gradient(180deg,rgba(34,34,32,.2) 0%,rgba(34,34,32,.55) 100%);
}
.final-cta__inner{text-align:center;max-width:680px;margin-inline:auto}
.final-cta__en{
  font-family:var(--f-en);font-style:italic;letter-spacing:.32em;
  font-size:14px;color:#e9d9b7;margin-bottom:20px;
}
.final-cta__title{
  font-family:var(--f-jp);font-weight:500;
  font-size:clamp(20px,5vw,32px);
  letter-spacing:.08em;
  line-height:1.6;margin-bottom:28px;
  word-break:keep-all;
  overflow-wrap:break-word;
}
.final-cta__body{
  font-size:14.5px;line-height:2.15;
  margin-bottom:clamp(32px,6vw,40px);
  color:#f1ead8;
}
.final-cta__actions{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:12px;
  max-width:520px;
  margin-inline:auto;
}
@media (max-width:480px){
  .final-cta__actions{grid-template-columns:1fr}
}
.final-cta__actions .btn--primary{background:#fff;color:var(--c-text)}
.final-cta__actions .btn--primary:hover{background:var(--c-gold);color:#fff}
.final-cta__actions .btn--ghost{color:#fff;border-color:rgba(255,255,255,.7)}
.final-cta__actions .btn--ghost:hover{background:#fff;color:var(--c-text);border-color:#fff}

/* =========================================================================
   footer
   ========================================================================= */
.site-footer{
  background:#1c1c1a;
  color:#b8afa0;
  padding:48px var(--gutter) 32px;
  text-align:center;
}
.site-footer__logo{
  font-family:var(--f-en);font-style:italic;letter-spacing:.2em;
  font-size:14px;color:#e9d9b7;margin-bottom:8px;
}
.site-footer__name{font-size:13px;letter-spacing:.16em;margin-bottom:24px}
.site-footer__links{
  display:flex;flex-wrap:wrap;gap:18px;justify-content:center;
  font-size:12px;letter-spacing:.1em;margin-bottom:28px;
}
.site-footer__links a:hover{color:#fff}
.site-footer__copy{font-size:11px;letter-spacing:.12em;color:#7e776c}

/* =========================================================================
   mobile-fixed CTA (bottom)
   ========================================================================= */
.fixed-cta{
  position:fixed;
  left:0;right:0;bottom:0;
  z-index:50;
  display:none;
  grid-template-columns:1.4fr 1fr;
  gap:1px;
  background:var(--c-line);
  padding-bottom:env(safe-area-inset-bottom);
  box-shadow:0 -8px 22px rgba(0,0,0,.15);
  transform:translateY(100%);
  transition:transform .35s var(--ease);
}
.fixed-cta.is-show{transform:translateY(0)}
.fixed-cta.is-hide{transform:translateY(100%)}
.fixed-cta a{
  display:flex;align-items:center;justify-content:center;gap:8px;
  min-height:56px;
  font-family:var(--f-jp);
  font-weight:500;
  font-size:14px;
  letter-spacing:.08em;
}
.fixed-cta a:first-child{background:var(--c-text);color:#fff}
.fixed-cta a:last-child{background:#fff;color:var(--c-text)}
.fixed-cta__icon{font-size:18px;line-height:1}

@media (max-width:760px){
  .fixed-cta{display:grid}
  /* avoid bottom content being covered */
  .final-cta{padding-bottom:calc(var(--section-py) + 60px)}
}

/* =========================================================================
   fade-in on scroll
   ========================================================================= */
.fade-in{opacity:0;transform:translateY(28px);transition:opacity .9s var(--ease),transform .9s var(--ease)}
.fade-in.is-in{opacity:1;transform:none}
.fade-in.delay-1{transition-delay:.08s}
.fade-in.delay-2{transition-delay:.16s}
.fade-in.delay-3{transition-delay:.24s}
