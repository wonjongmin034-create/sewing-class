/* 슬라이드와 앱이 함께 쓰는 직접 그린 SVG 그림 모음 */
const _S = (inner, vb = '0 0 100 100') =>
  `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${inner}</svg>`;

const ART = {
  fabric: _S(`<g transform="rotate(-6 50 50)">
    <rect x="8" y="20" width="84" height="60" rx="4" fill="#fffaf0" stroke="#d8c9a8" stroke-width="1.5"/>
    <rect x="8" y="28" width="84" height="6" fill="#e26a5b"/><rect x="8" y="40" width="84" height="6" fill="#3f7cac"/>
    <rect x="8" y="52" width="84" height="6" fill="#e9b949"/><rect x="8" y="64" width="84" height="6" fill="#5aa469"/></g>`),
  pin: _S(`<line x1="24" y1="82" x2="68" y2="34" stroke="#9aa5b1" stroke-width="4" stroke-linecap="round"/>
    <circle cx="74" cy="27" r="9" fill="#ff7aa8"/><circle cx="71" cy="24" r="3" fill="#ffc2d8"/>`),
  ruler: _S(`<g transform="rotate(-35 50 50)"><rect x="-5" y="38" width="110" height="24" rx="3" fill="#f0c36b" stroke="#c99a3a" stroke-width="1.5"/>
    ${Array.from({length: 22}, (_, i) => `<line x1="${4 + i * 5}" y1="38" x2="${4 + i * 5}" y2="${i % 5 ? 46 : 52}" stroke="#7a5a14" stroke-width="1.2"/>`).join('')}</g>`),
  needle: _S(`<line x1="18" y1="86" x2="78" y2="18" stroke="#aeb7c0" stroke-width="3.5" stroke-linecap="round"/>
    <ellipse cx="78" cy="17" rx="2.6" ry="6" transform="rotate(41 78 17)" fill="none" stroke="#aeb7c0" stroke-width="2"/>`),
  thread: _S(`${[['#ff6fa5', 30], ['#4fc3e8', 64]].map(([c, x]) => `
    <rect x="${x - 14}" y="${x === 30 ? 40 : 34}" width="28" height="8" rx="3" fill="#e9dcc0"/>
    <rect x="${x - 12}" y="${(x === 30 ? 40 : 34) + 8}" width="24" height="30" fill="${c}"/>
    <rect x="${x - 14}" y="${(x === 30 ? 40 : 34) + 38}" width="28" height="8" rx="3" fill="#e9dcc0"/>
    <path d="M${x - 12} ${(x === 30 ? 40 : 34) + 16} h24 M${x - 12} ${(x === 30 ? 40 : 34) + 24} h24 M${x - 12} ${(x === 30 ? 40 : 34) + 32} h24" stroke="#fff" stroke-opacity=".35" stroke-width="2"/>`).join('')}`),
  chalk: _S(`<path d="M50 20 L84 76 Q86 82 78 82 L22 82 Q14 82 16 76 Z" fill="#8fd6e8" stroke="#5db6cc" stroke-width="2.5" stroke-linejoin="round"/>
    <circle cx="50" cy="56" r="7" fill="#fff" fill-opacity=".45"/>`),
  scissors: _S(`<line x1="50" y1="52" x2="72" y2="12" stroke="#b9c2cc" stroke-width="6" stroke-linecap="round"/>
    <line x1="50" y1="52" x2="28" y2="12" stroke="#cdd5dd" stroke-width="6" stroke-linecap="round"/>
    <circle cx="36" cy="72" r="13" fill="none" stroke="#2f6fb5" stroke-width="7"/><circle cx="64" cy="72" r="13" fill="none" stroke="#2f6fb5" stroke-width="7"/>
    <line x1="42" y1="62" x2="50" y2="52" stroke="#2f6fb5" stroke-width="6"/><line x1="58" y1="62" x2="50" y2="52" stroke="#2f6fb5" stroke-width="6"/>
    <circle cx="50" cy="52" r="3" fill="#fff"/>`),
  bigScissors: _S(`<line x1="46" y1="50" x2="92" y2="14" stroke="#c4ccd4" stroke-width="7" stroke-linecap="round"/>
    <line x1="46" y1="50" x2="88" y2="30" stroke="#dde3e8" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="26" cy="68" rx="16" ry="12" fill="none" stroke="#e0a93a" stroke-width="7" transform="rotate(25 26 68)"/>
    <ellipse cx="46" cy="82" rx="14" ry="10" fill="none" stroke="#e0a93a" stroke-width="7" transform="rotate(-15 46 82)"/>
    <circle cx="46" cy="50" r="3.5" fill="#fff"/>`),
  thimble: _S(`<path d="M24 78 L28 46 Q50 14 72 46 L76 78 Z" fill="#8fd6e8" stroke="#5db6cc" stroke-width="3" stroke-linejoin="round"/>
    <rect x="22" y="74" width="56" height="9" rx="3" fill="#6cc3da"/>
    ${[[42, 42], [58, 42], [34, 56], [50, 56], [66, 56], [42, 68], [58, 68]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6" fill="#2f93ad"/>`).join('')}`),
  pincushion: _S(`<ellipse cx="50" cy="78" rx="36" ry="9" fill="#b5322f"/>
    <path d="M14 76 Q14 36 50 34 Q86 36 86 76 Q50 90 14 76 Z" fill="#e5484d"/>
    <path d="M24 60 Q50 74 76 60" stroke="#fff" stroke-opacity=".5" stroke-width="3" fill="none"/>
    ${[[34, 14, 40, 34, '#ffd23f'], [52, 8, 52, 33, '#4fc3e8'], [68, 16, 62, 35, '#7bd88f']].map(([x, y, x2, y2, c]) => `<line x1="${x}" y1="${y}" x2="${x2}" y2="${y2}" stroke="#aeb7c0" stroke-width="2.5"/><circle cx="${x}" cy="${y}" r="4.5" fill="${c}"/>`).join('')}`),
  button2: _S(`<circle cx="50" cy="50" r="38" fill="#f4b942" stroke="#d98f1c" stroke-width="4"/><circle cx="50" cy="50" r="28" fill="none" stroke="#d98f1c" stroke-width="2.5"/>
    <circle cx="39" cy="50" r="5.5" fill="#7a4c0a"/><circle cx="61" cy="50" r="5.5" fill="#7a4c0a"/>`),
  buttonShank: _S(`<circle cx="50" cy="48" r="38" fill="#c8932f" stroke="#8b6218" stroke-width="4"/><circle cx="50" cy="48" r="26" fill="#e0b050" stroke="#8b6218" stroke-width="2"/>
    <path d="M40 48 l10 -10 l10 10 l-10 10 z" fill="#8b6218"/>`),
  sock: _S(`<path d="M34 10 H62 V50 L84 66 Q92 76 82 84 Q70 94 56 80 L34 62 Z" fill="#f0643c" stroke="#c9461f" stroke-width="3" stroke-linejoin="round"/>
    <rect x="34" y="10" width="28" height="12" fill="#ff8d66" stroke="#c9461f" stroke-width="3"/>
    <ellipse cx="46" cy="52" rx="8" ry="7" fill="#fff" stroke="#c9461f" stroke-width="2" stroke-dasharray="3 3"/>`),
  shirt: _S(`<path d="M32 14 L14 26 L22 42 L30 38 V86 H70 V38 L78 42 L86 26 L68 14 Q50 30 32 14Z" fill="#9fd3ee" stroke="#5aa6cf" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="50" cy="40" r="3" fill="#f4b942"/><circle cx="50" cy="56" r="3" fill="#f4b942" stroke="#d98f1c"/><circle cx="50" cy="72" r="3" fill="#f4b942" stroke="#d98f1c" stroke-dasharray="1 1"/>
    <path d="M44 34 L50 44 L56 34" fill="none" stroke="#5aa6cf" stroke-width="2.5"/>`),
  sweater: _S(`<path d="M30 14 L10 30 L20 50 L30 44 V84 H70 V44 L80 50 L90 30 L70 14 Q50 26 30 14Z" fill="#f2c94c" stroke="#d1a32a" stroke-width="3" stroke-linejoin="round"/>
    <path d="M50 70 C32 56 36 44 44 46 Q50 48 50 54 Q50 48 56 46 C64 44 68 56 50 70Z" fill="#fff"/>`),
  patch: _S(`<rect x="22" y="22" width="56" height="56" rx="10" fill="#ffd34d" stroke="#e0a800" stroke-width="3" stroke-dasharray="6 4"/>
    <circle cx="50" cy="50" r="13" fill="#fff3b0"/><path d="M43 48 q2 -3 4 0 M53 48 q2 -3 4 0" stroke="#7a4c0a" stroke-width="2" fill="none"/><path d="M42 56 q8 8 16 0" stroke="#7a4c0a" stroke-width="2.5" fill="none" stroke-linecap="round"/>`),
  zipper: _S(`<rect x="38" y="6" width="24" height="88" fill="#cfd8e0"/>
    ${Array.from({length: 9}, (_, i) => `<rect x="${i % 2 ? 50 : 36}" y="${10 + i * 9}" width="14" height="6" rx="2" fill="#7b8794"/>`).join('')}
    <rect x="40" y="44" width="20" height="26" rx="6" fill="#ef6f6c"/><circle cx="50" cy="62" r="4" fill="#fff"/>`),
  rubber: _S(`<path d="M10 50 q10 -22 20 0 t20 0 t20 0 t20 0" fill="none" stroke="#f08a5d" stroke-width="9" stroke-linecap="round"/>
    <path d="M10 50 q10 -22 20 0 t20 0 t20 0 t20 0" fill="none" stroke="#ffd0b8" stroke-width="3" stroke-linecap="round"/>`),
  hole: _S(`<path d="M10 20 H90 V80 H10Z" fill="#9fd3ee"/><ellipse cx="50" cy="50" rx="20" ry="15" fill="#fffaf0" stroke="#5aa6cf" stroke-width="3" stroke-dasharray="4 3"/>
    <path d="M44 50 l12 0 M50 44 l0 12" stroke="#5aa6cf" stroke-width="2"/>`),
  leak: _S(`<path d="M12 22 H88 V78 H12Z" fill="#9fd3ee"/><path d="M12 40 H50 L58 48 L50 56 H12" fill="none"/><path d="M20 50 H70" stroke="#fff" stroke-width="3" stroke-dasharray="2 5"/>
    <path d="M70 50 q10 -10 14 4 q-6 8 -16 6" fill="none" stroke="#e26a5b" stroke-width="3"/>`),
  heart: _S(`<path d="M50 84 C14 58 20 28 40 30 Q50 32 50 42 Q50 32 60 30 C80 28 86 58 50 84Z" fill="#ff6f91"/>`),
  /* 어린이 캐릭터: hair 색, 옷 색, 표정(smile|think|wow) */
  kid(hair = '#2b2b3a', shirt = '#4fa3d9', mood = 'smile', girl = false) {
    const mouth = { smile: '<path d="M42 62 q8 8 16 0" stroke="#7a3b2b" stroke-width="2.6" fill="none" stroke-linecap="round"/>',
      think: '<path d="M44 64 h12" stroke="#7a3b2b" stroke-width="2.6" stroke-linecap="round"/>',
      wow: '<ellipse cx="50" cy="64" rx="4" ry="5" fill="#7a3b2b"/>' }[mood];
    return _S(`<path d="M20 98 Q20 74 50 74 Q80 74 80 98Z" fill="${shirt}"/>
      ${girl ? `<circle cx="24" cy="52" r="11" fill="${hair}"/><circle cx="76" cy="52" r="11" fill="${hair}"/>` : ''}
      <circle cx="50" cy="50" r="27" fill="#ffe0c2"/>
      <path d="M23 46 Q24 20 50 20 Q76 20 77 46 Q66 34 50 36 Q34 34 23 46Z" fill="${hair}"/>
      <circle cx="40" cy="52" r="3.4" fill="#2b2b3a"/><circle cx="60" cy="52" r="3.4" fill="#2b2b3a"/>
      <circle cx="34" cy="60" r="4.5" fill="#ff9f9f" fill-opacity=".6"/><circle cx="66" cy="60" r="4.5" fill="#ff9f9f" fill-opacity=".6"/>${mouth}`);
  },
};

/* 바느질 종류별 구멍 위치 (단위 길이). i번째 → i+1번째 실은 짝수 i일 때 겉(보이는 면)에 나타난다. */
const STITCH = {
  running: { name: '홈질', pos: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    use: '옷감을 성기게 이을 때 써요. 겉과 안의 바늘땀 길이가 같아요.', size: '바늘땀 0.2~0.4cm' },
  back: { name: '박음질', pos: [1, 0, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5],
    use: '옷감을 튼튼하게 이을 때 써요. 한 땀 되돌아 다시 떠서 촘촘해요.', size: '바늘땀 0.2~0.4cm' },
  basting: { name: '시침질', pos: [0, 3, 4, 7, 8, 11, 12, 15],
    use: '옷감이 밀리지 않게 임시로 고정할 때 써요. 겉이 길고 안이 짧아요.', size: '겉 2~3cm, 안 0.5~1cm' },
};

/* 홈질·박음질·시침질 그림 (정적). x0, unit, y: 겉 실 y, 안 실 y+gap */
ART.stitch = (type, w = 360, h = 130) => {
  const st = STITCH[type], p = st.pos, max = Math.max(...p);
  const u = (w - 60) / max, x = v => 30 + v * u, y = 52, yb = 82;
  let front = '', back = '', holes = '';
  for (let i = 0; i < p.length - 1; i++) {
    if (i % 2 === 0) front += `<line x1="${x(p[i])}" y1="${y}" x2="${x(p[i + 1])}" y2="${y}" stroke="#1fae6b" stroke-width="5" stroke-linecap="round"/>`;
    else back += `<line x1="${x(p[i])}" y1="${yb}" x2="${x(p[i + 1])}" y2="${yb}" stroke="#9bd9b8" stroke-width="3" stroke-dasharray="6 5" stroke-linecap="round"/>`;
  }
  new Set(p).forEach(v => { holes += `<circle cx="${x(v)}" cy="${y}" r="3" fill="#7a5a14"/>`; });
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="6" y="30" width="${w - 12}" height="70" rx="8" fill="#fbe9bd" stroke="#e0c47a" stroke-width="2"/>
    <text x="14" y="22" font-size="13" fill="#6b5a2a" font-family="inherit">겉: 초록 실선 / 안: 연한 점선</text>
    ${back}${holes}${front}</svg>`;
};
