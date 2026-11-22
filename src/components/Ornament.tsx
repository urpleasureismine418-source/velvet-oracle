import React from 'react';

/** A tall, mirrored Art-Nouveau / Victorian botanical engraving. */
export function SideOrnament({ side = 'left' }: { side?: 'left' | 'right' }) {
  return (
    <div className={`ornament-track ${side}`} aria-hidden="true">
      {Array.from({ length: 5 }, (_, tile) => {
        const id = `ornament-${side}-${tile}`;
        return <svg
      key={tile}
      className={`side-ornament ${side}`}
      viewBox="0 0 300 1200"
      preserveAspectRatio="xMidYMin meet"
      fill="none"
    >
      <defs>
        <linearGradient id={`${id}-ink`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#061a35" />
          <stop offset=".48" stopColor="#0b3b70" />
          <stop offset="1" stopColor="#08264d" />
        </linearGradient>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#5b4b32" />
          <stop offset=".5" stopColor="#9b875e" />
          <stop offset="1" stopColor="#5b4b32" />
        </linearGradient>
      </defs>

      {/* Main flowing stems: deliberately heavier than the engraved details. */}
      <g className="ornament-main" stroke={`url(#${id}-ink)`} strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth="2.25" d="M-24 0 C88 82 166 124 142 218 C124 289 36 297 24 226 C15 172 88 155 112 205 C132 246 87 274 61 245" />
        <path strokeWidth="2.05" d="M-35 330 C72 270 157 300 164 390 C171 480 62 506 32 431 C9 374 77 338 116 379 C146 411 119 453 83 446" />
        <path strokeWidth="2.2" d="M-30 690 C66 608 162 626 171 724 C181 824 66 855 31 780 C5 724 73 681 116 725 C148 758 118 799 82 790" />
        <path strokeWidth="2.1" d="M-18 1040 C72 946 166 968 170 1060 C173 1140 83 1184 32 1120 C-5 1074 42 1018 91 1047 C128 1069 108 1115 75 1110" />
        <path strokeWidth="1.55" d="M18 0 C90 96 228 106 241 202 C253 286 182 324 146 278 C117 241 155 205 186 231 C210 251 192 277 174 269" />
        <path strokeWidth="1.55" d="M4 1200 C68 1105 213 1095 238 1007 C260 931 196 892 158 932 C127 966 163 1002 191 979 C213 960 193 937 177 947" />
      </g>

      {/* Long, fine tendrils and scrolls. */}
      <g className="ornament-fine" stroke={`url(#${id}-ink)`} strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
        <path d="M105 205 C178 153 231 168 247 215 C263 263 218 289 190 260 C168 238 190 213 208 225" />
        <path d="M146 278 C215 292 249 339 227 389 C207 434 157 420 155 383 C154 354 185 345 198 367" />
        <path d="M164 390 C228 357 276 383 281 433 C286 478 241 495 219 463 C204 441 226 421 242 438" />
        <path d="M30 431 C-8 475 4 526 48 540 C88 553 111 516 86 492 C67 474 44 493 56 512" />
        <path d="M116 379 C178 342 222 352 239 397" />
        <path d="M171 724 C226 675 273 692 282 739 C291 786 247 810 223 780 C205 758 225 738 242 753" />
        <path d="M31 780 C-14 818 -3 873 41 887 C82 901 108 863 81 839 C60 821 40 843 54 861" />
        <path d="M116 725 C177 681 224 694 243 741" />
        <path d="M170 1060 C225 1012 273 1028 281 1075 C289 1120 246 1145 222 1116 C204 1094 224 1073 241 1088" />
        <path d="M32 1120 C-9 1157 6 1200 45 1218" />
        <path d="M91 1047 C149 1006 208 1014 238 1007" />
        <path d="M241 202 C265 181 286 188 292 211 C298 234 286 249 274 241" />
        <path d="M238 1007 C265 985 286 993 292 1016 C298 1039 285 1054 273 1046" />
        <path d="M12 570 C57 553 95 568 106 603 C116 636 88 657 66 637 C48 621 62 601 79 611" />
        <path d="M11 910 C56 889 96 908 104 943 C111 976 82 993 62 972 C46 955 61 937 77 947" />
      </g>

      {/* Small floral medallions and fine gold accents. */}
      <g className="ornament-flowers" stroke={`url(#${id}-gold)`} strokeLinecap="round" strokeLinejoin="round">
        <g strokeWidth="1.25" transform="translate(133 300)">
          <path d="M0 -24 C8 -15 8 -8 0 0 C-8 -8 -8 -15 0 -24Z M24 0 C15 8 8 8 0 0 C8 -8 15 -8 24 0Z M0 24 C-8 15 -8 8 0 0 C8 8 8 15 0 24Z M-24 0 C-15 -8 -8 -8 0 0 C-8 8 -15 8 -24 0Z" />
          <circle r="4" />
        </g>
        <g strokeWidth="1.15" transform="translate(137 610) scale(.8)">
          <path d="M0 -24 C8 -15 8 -8 0 0 C-8 -8 -8 -15 0 -24Z M24 0 C15 8 8 8 0 0 C8 -8 15 -8 24 0Z M0 24 C-8 15 -8 8 0 0 C8 8 8 15 0 24Z M-24 0 C-15 -8 -8 -8 0 0 C-8 8 -15 8 -24 0Z" />
          <circle r="4" />
        </g>
        <g strokeWidth="1.2" transform="translate(137 930) scale(.72)">
          <path d="M0 -24 C8 -15 8 -8 0 0 C-8 -8 -8 -15 0 -24Z M24 0 C15 8 8 8 0 0 C8 -8 15 -8 24 0Z M0 24 C-8 15 -8 8 0 0 C8 8 8 15 0 24Z M-24 0 C-15 -8 -8 -8 0 0 C-8 8 -15 8 -24 0Z" />
          <circle r="4" />
        </g>
      </g>
      <g className="ornament-stars" fill="#347fc2">
        <path d="M102 178l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
        <path d="M220 465l2.2 6.5 6.5 2.2-6.5 2.2-2.2 6.5-2.2-6.5-6.5-2.2 6.5-2.2z" />
        <path d="M102 760l2.5 7.5 7.5 2.5-7.5 2.5-2.5 7.5-2.5-7.5-7.5-2.5 7.5-2.5z" />
        <path d="M224 1080l2.5 7.5 7.5 2.5-7.5 2.5-2.5 7.5-2.5-7.5-7.5-2.5 7.5-2.5z" />
      </g>
    </svg>;
      })}
    </div>
  );
}

export function Flourish({ className = '' }: { className?: string }) {
  return <svg className={`flourish ${className}`} viewBox="0 0 260 34" fill="none" aria-hidden="true">
    <g stroke="currentColor" strokeWidth=".8" strokeLinecap="round"><path d="M4 17h78c18 0 20-14 8-14-9 0-9 12 2 12 14 0 17-12 29-12 12 0 15 12 29 12 11 0 11-12 2-12-12 0-10 14 8 14h74"/><path d="M4 17c18 0 19 14 8 14-9 0-9-12 2-12 14 0 17 12 29 12 12 0 15-12 29-12 11 0 11 12 2 12-12 0-10-14 8-14"/><path d="M130 3v28M124 17h12"/></g><circle cx="130" cy="17" r="2" fill="currentColor"/>
  </svg>;
}
