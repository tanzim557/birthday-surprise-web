/**
 * ============================================================================
 * CYBER-MAGICAL BIRTHDAY SURPRISE EXPERIENCE - CORE ENGINE
 * ============================================================================
 * Highly interactive, gamified single-page celebration website for best friend.
 * Built with HTML5, Tailwind CSS, GSAP, Canvas-Confetti, and Web Audio API.
 */

// ============================================================================
// 1. SURPRISE CONFIGURATION (Easily customizable by the user)
// ============================================================================
const SURPRISE_CONFIG = {
  // Friend's Name (shown across banners, cakes, tickets, and headlines)
  FRIEND_NAME: "Heya",

  // Birthday Passcode (case-insensitive; "I Am Ready!" button also allows skip)
  PASSWORD: "BDAY",

  // Background Audio: Put an MP3 URL here if you have one, or leave empty/fallback
  // to our built-in celestial Web Audio API ambient synthesizer!
  AUDIO_URL: "audio/mala_re.mp3", 

  // Memory Lane: 12 Real Moments with Photos and Sweet Birthday Wishes
  MEMORIES: [
    {
      id: 1,
      tag: "সেরা ভাইব",
      title: "সেরা ভাইব",
      image: "images/memory1.jpg",
      orientation: "portrait",
      caption: "তোর সাথে কাটানো প্রতিটা মুহূর্তই অন্যরকম সুন্দর। তোর জীবনের প্রতিটা দিন এমন আনন্দ আর পজিটিভিটিতে ভরে থাকুক!",
      date: "Special Moments"
    },
    {
      id: 2,
      tag: "সোনালী স্মৃতি",
      title: "সোনালী স্মৃতি",
      image: "images/memory2.jpg",
      orientation: "landscape",
      caption: "ছবি যেমনই হোক, পেছনের স্মৃতিগুলোই আসল। তোর জীবনে এরকম অজস্র সুন্দর মুহূর্ত আর ভালো মানুষের সঙ্গ থাকুক।",
      date: "Golden Times"
    },
    {
      id: 3,
      tag: "একটু পাগলামি",
      title: "একটু পাগলামি",
      image: "images/memory3.jpg",
      orientation: "portrait",
      caption: "লাইফ সবসময় বেশি সিরিয়াস নেওয়ার দরকার নাই! একটু আধটু পাগলামি আর একরাশ মজা নিয়েই এগিয়ে যা, দারুণ এক জীবন তোর অপেক্ষায়!",
      date: "Chaos & Fun"
    },
    {
      id: 4,
      tag: "মনখোলা হাসি",
      title: "মনখোলা হাসি",
      image: "images/memory4.jpg",
      orientation: "landscape",
      caption: "কোনো ফিল্টার ছাড়াই এই হাসিটা যেন তোর মুখে সবসময় থাকে। মন ভালো রাখা আর হাসিখুশি থাকাটাই আসল, অল দ্য বেস্ট!",
      date: "Pure Happiness"
    },
    {
      id: 5,
      tag: "চিরকালের জন্য",
      title: "চিরকালের জন্য",
      image: "images/memory5.jpg",
      orientation: "landscape",
      caption: "ভবিষ্যৎ যেখানেই নিয়ে যাক না কেন, তোর জন্য সবসময় অনেক অনেক শুভকামনা ও ভালোবাসা থাকবে। অনেক দূর এগিয়ে যা!",
      date: "Forever & Always"
    },
    {
      id: 6,
      tag: "গোলাপের সুবাস",
      title: "গোলাপের সুবাস",
      image: "images/memory6.jpg",
      orientation: "portrait",
      caption: "গোলাপের মতো তোর জীবনও যেন সবসময় ভালোবাসা, স্নিগ্ধতা আর আনন্দে রঙিন হয়ে থাকে। শুভ জন্মদিন হেয়া!",
      date: "Rose Garden"
    },
    {
      id: 7,
      tag: "সেরা সঙ্গ",
      title: "সেরা সঙ্গ",
      image: "images/memory7.jpg",
      orientation: "landscape",
      caption: "সবসময় এমন প্রাণখোলা আড্ডা আর হাসিমুখের মুহূর্তেই যেন দিনগুলো কাটে। তুই আছিস বলেই আড্ডাগুলো এত স্পেশাল!",
      date: "Happy Hangouts"
    },
    {
      id: 8,
      tag: "সিনেমাটিক ড্রামা",
      title: "ফিল্মি ভাইব",
      image: "images/memory8.jpg",
      orientation: "landscape",
      caption: "আমাদের ড্রামা কুইনের পারফেক্ট সিনেমাটিক মুহূর্ত! তোর এই মিষ্টি নাটকীয়তা আর আনন্দ সবসময় আমাদের মুখে হাসি ফোটায়।",
      date: "Cinematic Tale"
    },
    {
      id: 9,
      tag: "শাড়ির স্নিগ্ধতা",
      title: "শাড়ির স্নিগ্ধতা",
      image: "images/memory9.jpg",
      orientation: "portrait",
      caption: "শাড়িতে তোকে সবসময়ই দারুণ মিষ্টি আর স্নিগ্ধ লাগে! দুই বন্ধুর এমন সুন্দর ভালোবাসার বন্ধন যেন আজীবন অটুট থাকে।",
      date: "Ethnic Charm"
    },
    {
      id: 10,
      tag: "মিষ্টি বন্ধুত্ব",
      title: "মিষ্টি বন্ধুত্ব",
      image: "images/memory10.jpg",
      orientation: "landscape",
      caption: "তোর সাথে সেলফি মানেই মুখে লেগে থাকা খাঁটি হাসি! বন্ধুত্বের এই নির্মল আনন্দ আর মিষ্টি মুহূর্তগুলোই জীবনের সেরা সম্পদ।",
      date: "True Besties"
    },
    {
      id: 11,
      tag: "আড্ডার মেলা",
      title: "সেরা গ্যাং ও আড্ডা",
      image: "images/memory11.jpg",
      orientation: "landscape",
      caption: "পুরো গ্যাং একসাথে হলে আড্ডা আর হাসির কোনো শেষ থাকে না! এমন আনন্দের দিনগুলোই স্মৃতি হয়ে আজীবন হৃদয়ে থেকে যায়।",
      date: "Squad Diaries"
    },
    {
      id: 12,
      tag: "ক্যাফে স্মৃতি",
      title: "ক্যাফে স্মৃতি ও আড্ডা",
      image: "images/memory12.jpg",
      orientation: "portrait",
      caption: "ক্যাফেতে কাটানো দারুণ এক বিকেল আর প্রাণখোলা কথা! তোর মিষ্টি উপস্থিতি যেকোনো সাধারণ দিনকেও স্মরণীয় করে তোলে।",
      date: "Cozy Hangout"
    }
  ],

  // Scratch Cards: Inside joke, deep emotional wish, bucket list promise, secret fortune
  WISHES: [
    {
      id: 1,
      badge: "✨ একটু মিষ্টি পচানি 👾",
      title: "বয়স বাড়ার সিক্রেট অ্যালার্ট! 🎂",
      message: "শুভ জন্মদিন হেয়া! আনুষ্ঠানিকভাবে তুই এখন আরো এক বছর বুড়ি হওয়ার কাছাকাছি! তবে চিন্তা করিস না, তোর কিউট পাগলামি আর হাসির ভাইব কিন্তু আজীবন চিরসবুজ থাকবে!",
      gradient: "from-amber-500 via-rose-500 to-red-600",
      foil: ["#f59e0b", "#f43f5e", "#e11d48"]
    },
    {
      id: 2,
      badge: "💖 মনের গভীর থেকে 🌸",
      title: "সবচেয়ে খাঁটি শুভকামনা ✨",
      message: "হেয়া, তোর উপস্থিতি জীবনটাকে সত্যি অনেক বেশি আনন্দময় আর প্রাণবন্ত করে তোলে। সবসময় এমন খাঁটি ও প্রাণখোলা বন্ধু হয়ে পাশে থাকার জন্য ধন্যবাদ। তোর প্রতিটি দিন অফুরন্ত আনন্দে ভরে থাকুক!",
      gradient: "from-purple-600 via-pink-600 to-rose-500",
      foil: ["#c084fc", "#ec4899", "#f43f5e"]
    },
    {
      id: 3,
      badge: "🌟 স্পেশাল প্রমিজ 🍕",
      title: "হ্যাংআউট ও ট্রিট চুক্তি 🎉",
      message: "আমার পক্ষ থেকে এই বছরের পাকা ওয়াদা: আর কোনো প্ল্যান ক্যান্সেল নয়! জমিয়ে আড্ডা, পছন্দের রেস্টুরেন্টে পেটপূজো আর দারুণ সব মুহূর্ত দিয়ে তোর এই বছরটা হবে সেরা!",
      gradient: "from-blue-600 via-cyan-500 to-teal-500",
      foil: ["#60a5fa", "#38bdf8", "#2dd4bf"]
    },
    {
      id: 4,
      badge: "🔮 শুভকামনা ও দোয়া 🌈",
      title: "স্বপ্নের সাফল্য ও শান্তি 💫",
      message: "তোর জীবনের প্রতিটি পদক্ষেপে থাকুক আকাশছোঁয়া সাফল্য, কোনো অনাকাঙ্ক্ষিত প্যারা ছাড়া অফুরন্ত সুখ, মানসিক শান্তি আর ভালোবাসা! সবসময় হাসিখুশি থাকিস আমাদের ড্রামা কুইন!",
      gradient: "from-emerald-500 via-teal-600 to-indigo-700",
      foil: ["#34d399", "#059669", "#4f46e5"]
    }
  ],

  // Virtual Gift Voucher Perks
  COUPONS: [
    {
      icon: "fa-utensils",
      title: "🍴 একদিন আনলিমিটেড খাওয়াদাওয়া / ট্রিট",
      desc: "যেকোনো দিন পছন্দের রেস্টুরেন্টে পেটপূজো অথবা আনলিমিটেড কফি আর ফুচকা—তবে মনে রাখবি, বিল দেওয়ার দায়িত্ব কিন্তু পুরোপুরি তোমার!"
    },
    {
      icon: "fa-phone-volume",
      title: "📞 ২৪/৭ লাইফ-ক্রাইসিস আর প্যারা শেয়ারিং হটলাইন",
      desc: "রাত ৩টায় মনের দুঃখ, কোনো নাটক বা কাউকে নিয়ে গসিপ করার ইচ্ছা হলে যত খুশি ফোন করবি; কেউ বকা দেবে না, ফোনও কাটবে না।"
    },
    {
      icon: "fa-car-side",
      title: "🚗 হুটহাট ডে-আউট বা ঘুরতে যাওয়া",
      desc: "কোনো উইকেন্ডে হুট করে কোথাও বের হওয়া—প্ল্যান আর হুকুম তোর, সাথে থাকা আর সঙ্গ দেওয়ার দায়িত্ব আমাদের।"
    },
    {
      icon: "fa-camera-retro",
      title: "📸 পার্সোনাল ফটোগ্রাফার ও আনফিল্টার্ড প্রশংসা সেশন",
      desc: "ইনস্টাগ্রামের জন্য ১০০টা পোজ দিয়ে ছবি তোলার স্বাধীনতা এবং প্রতিটি ছবিতে চরম হাইপ ও প্রশংসা করার ফুল গ্যারান্টি।"
    },
    {
      icon: "fa-heart",
      title: "💖 আনলিমিটেড সাপোর্ট আর শক্ত করে জড়িয়ে ধরার আজীবন মেম্বারশিপ",
      desc: "যেকোনো মন খারাপের দিনে সব বাদ দিয়ে পাশে থাকা এবং আজীবন সাপোর্ট দেওয়ার আনলিমিটেড সাবস্ক্রিপশন।"
    }
  ]
};


// ============================================================================
// 2. WEB AUDIO API SOUND SYNTHESIZER & AMBIENT ENGINE
// ============================================================================
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.ambientInterval = null;
    this.ambientNoteIndex = 0;
    this.initContext();
  }

  initContext() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  ensureContext() {
    this.initContext();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Celestial Chime on Door / Safe Unlock
  playUnlockChime() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 1.2);
      }, idx * 90);
    });
  }

  // Cheerful Crowd Fanfare & Applause on Cake Slice Cut
  playFanfare() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    // Brass-like fanfare chords: C, G, high C, E
    const chords = [
      { f: 523.25, t: 0, d: 0.2 },
      { f: 659.25, t: 0.18, d: 0.2 },
      { f: 783.99, t: 0.36, d: 0.25 },
      { f: 1046.5, t: 0.6, d: 0.8 },
      { f: 1318.5, t: 0.6, d: 0.8 }
    ];

    chords.forEach(c => {
      setTimeout(() => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(c.f, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + c.d);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + c.d);
      }, c.t * 1000);
    });

    // Simulated crowd cheer burst using filtered pink noise
    this.playNoiseApplause();
  }

  playNoiseApplause() {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 1.5;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      data[i] = (b0 + b1 + b2) * 0.15;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, this.ctx.currentTime);
    filter.Q.setValueAtTime(2, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.25, this.ctx.currentTime + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.5);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    noise.start();
  }

  // Candle Extinguish Wind Puff
  playCandleBlowPuff() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(180, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.35);

    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.35);
  }

  // Balloon Pop Sound
  playBalloonPop() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }

  // Scratching Card Paper Friction
  playScratchSwoosh() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(700 + Math.random() * 400, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  // Ambient Celestial Happy Birthday Synth Melody
  startAmbientMusic() {
    if (this.ambientInterval) return;
    this.ensureContext();

    // "Happy Birthday To You" Notes in Hz (C Major Arpeggio)
    // C4, C4, D4, C4, F4, E4 | C4, C4, D4, C4, G4, F4
    const birthdayMelody = [
      { f: 261.63, d: 350 }, { f: 261.63, d: 350 }, { f: 293.66, d: 650 }, { f: 261.63, d: 650 }, { f: 349.23, d: 650 }, { f: 329.63, d: 1100 },
      { f: 261.63, d: 350 }, { f: 261.63, d: 350 }, { f: 293.66, d: 650 }, { f: 261.63, d: 650 }, { f: 392.00, d: 650 }, { f: 349.23, d: 1100 },
      { f: 261.63, d: 350 }, { f: 261.63, d: 350 }, { f: 523.25, d: 650 }, { f: 440.00, d: 650 }, { f: 349.23, d: 650 }, { f: 329.63, d: 650 }, { f: 293.66, d: 900 }
    ];

    let index = 0;
    const playNext = () => {
      if (this.isMuted) {
        this.ambientInterval = setTimeout(playNext, 1000);
        return;
      }
      const note = birthdayMelody[index];
      index = (index + 1) % birthdayMelody.length;

      if (this.ctx && this.ctx.state === 'running') {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(note.f, this.ctx.currentTime);

        // Soft ambient celestial attack and release
        gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.06, this.ctx.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + (note.d / 1000));

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + (note.d / 1000));
      }

      this.ambientInterval = setTimeout(playNext, note.d + 120);
    };

    playNext();
  }

  stopAmbientMusic() {
    if (this.ambientInterval) {
      clearTimeout(this.ambientInterval);
      this.ambientInterval = null;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }
}

const soundEngine = new SoundEngine();


// ============================================================================
// 3. AMBIENT CANVAS & FESTIVE BIRTHDAY BALLOONS & CONFETTI ENGINE
// ============================================================================
function initAmbientCanvas() {
  const canvas = document.getElementById("ambientCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // 1. Floating Pastel Birthday Balloons
  const balloonColors = [
    { main: "#fb7185", shade: "#f43f5e", highlight: "rgba(255,255,255,0.7)" }, // Strawberry Rose
    { main: "#facc15", shade: "#eab308", highlight: "rgba(255,255,255,0.75)" }, // Sunny Yellow
    { main: "#c084fc", shade: "#a855f7", highlight: "rgba(255,255,255,0.7)" }, // Sweet Lilac
    { main: "#38bdf8", shade: "#0284c7", highlight: "rgba(255,255,255,0.7)" }, // Sky Cyan
    { main: "#4ade80", shade: "#22c55e", highlight: "rgba(255,255,255,0.7)" }, // Pastel Mint
    { main: "#fb923c", shade: "#f97316", highlight: "rgba(255,255,255,0.7)" }  // Warm Peach
  ];

  const balloons = [];
  const balloonCount = width > 768 ? 16 : 9;

  for (let i = 0; i < balloonCount; i++) {
    balloons.push({
      x: Math.random() * width,
      y: Math.random() * (height + 300),
      radiusX: Math.random() * 8 + 20, // 20 - 28px
      radiusY: Math.random() * 10 + 26, // 26 - 36px
      color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
      speedY: Math.random() * 0.45 + 0.35,
      swaySpeed: Math.random() * 0.015 + 0.01,
      swayDist: Math.random() * 1.2 + 0.8,
      wobbleOffset: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.35 + 0.55
    });
  }

  // 2. Twinkling Golden & Pink Celebration Stars
  const stars = [];
  const starCount = width > 768 ? 38 : 20;
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 6 + 4,
      rotation: Math.random() * Math.PI,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      color: Math.random() > 0.4 ? "#f59e0b" : "#ec4899",
      pulseSpeed: Math.random() * 0.03 + 0.015,
      pulseOffset: Math.random() * Math.PI * 2,
      speedY: -Math.random() * 0.3 - 0.1
    });
  }

  // 3. Floating Colorful Confetti Flakes
  const confettiList = [];
  const confettiCount = width > 768 ? 35 : 18;
  const confettiColors = ["#ec4899", "#f59e0b", "#8b5cf6", "#06b6d4", "#10b981", "#fb7185"];
  for (let i = 0; i < confettiCount; i++) {
    confettiList.push({
      x: Math.random() * width,
      y: Math.random() * height,
      w: Math.random() * 7 + 4,
      h: Math.random() * 5 + 3,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.03,
      speedY: Math.random() * 0.5 + 0.3,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.4
    });
  }

  // Draw 4-point star helper
  function drawStar(cx, cy, spikes, outerRadius, innerRadius, color, alpha, rot) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rot);
    ctx.beginPath();
    let rotAngle = Math.PI / 2 * 3;
    let x = 0;
    let y = 0;
    const step = Math.PI / spikes;

    for (let i = 0; i < spikes; i++) {
      x = Math.cos(rotAngle) * outerRadius;
      y = Math.sin(rotAngle) * outerRadius;
      ctx.lineTo(x, y);
      rotAngle += step;

      x = Math.cos(rotAngle) * innerRadius;
      y = Math.sin(rotAngle) * innerRadius;
      ctx.lineTo(x, y);
      rotAngle += step;
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha;
    ctx.fill();
    ctx.restore();
  }

  // Render loop
  let time = 0;
  function render() {
    ctx.clearRect(0, 0, width, height);
    time++;

    // 1. Render Floating Balloons with cute highlights and waving strings
    balloons.forEach(b => {
      b.y -= b.speedY;
      const sway = Math.sin(time * b.swaySpeed + b.wobbleOffset) * b.swayDist;
      const currentX = b.x + sway * 15;

      if (b.y < -80) {
        b.y = height + 60;
        b.x = Math.random() * width;
      }

      ctx.save();
      ctx.globalAlpha = b.opacity;

      // Balloon string
      ctx.beginPath();
      ctx.moveTo(currentX, b.y + b.radiusY);
      ctx.bezierCurveTo(
        currentX + sway * 8, b.y + b.radiusY + 18,
        currentX - sway * 8, b.y + b.radiusY + 36,
        currentX + sway * 4, b.y + b.radiusY + 50
      );
      ctx.strokeStyle = "rgba(148, 163, 184, 0.45)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Balloon knot
      ctx.beginPath();
      ctx.moveTo(currentX - 3, b.y + b.radiusY + 4);
      ctx.lineTo(currentX + 3, b.y + b.radiusY + 4);
      ctx.lineTo(currentX, b.y + b.radiusY);
      ctx.closePath();
      ctx.fillStyle = b.color.shade;
      ctx.fill();

      // Balloon body (oval)
      ctx.beginPath();
      ctx.ellipse(currentX, b.y, b.radiusX, b.radiusY, 0, 0, Math.PI * 2);
      const grad = ctx.createRadialGradient(
        currentX - b.radiusX * 0.3, b.y - b.radiusY * 0.3, b.radiusX * 0.1,
        currentX, b.y, b.radiusY
      );
      grad.addColorStop(0, "#ffffff");
      grad.addColorStop(0.35, b.color.main);
      grad.addColorStop(1, b.color.shade);
      ctx.fillStyle = grad;
      ctx.fill();

      // Cute glossy highlight
      ctx.beginPath();
      ctx.ellipse(
        currentX - b.radiusX * 0.35,
        b.y - b.radiusY * 0.35,
        b.radiusX * 0.22,
        b.radiusY * 0.32,
        -0.4,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = b.color.highlight;
      ctx.fill();

      ctx.restore();
    });

    // 2. Render Twinkling Celebration Stars
    stars.forEach(s => {
      s.y += s.speedY;
      s.rotation += s.rotSpeed;
      if (s.y < -20) {
        s.y = height + 20;
        s.x = Math.random() * width;
      }

      const pulse = Math.sin(time * s.pulseSpeed + s.pulseOffset);
      const alpha = Math.max(0.2, (pulse + 1) / 2 * 0.85);
      drawStar(s.x, s.y, 4, s.size * (0.8 + pulse * 0.25), s.size * 0.3, s.color, alpha, s.rotation);
    });

    // 3. Render Drifting Confetti
    confettiList.forEach(c => {
      c.y += c.speedY;
      c.x += c.speedX;
      c.rotation += c.rotSpeed;

      if (c.y > height + 20) {
        c.y = -20;
        c.x = Math.random() * width;
      }
      if (c.x > width) c.x = 0;
      if (c.x < 0) c.x = width;

      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.rotation);
      ctx.fillStyle = c.color;
      ctx.globalAlpha = c.opacity;
      ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
      ctx.restore();
    });

    requestAnimationFrame(render);
  }

  render();
}


// ============================================================================
// 4. GAME STATE & STEP NAVIGATION
// ============================================================================
let currentStep = 1;
const totalSteps = 5;

const chapterTitles = {
  1: "✨ পার্ট ১: স্পেশাল সারপ্রাইজ 🎁",
  2: "🎂 পার্ট ২: মিষ্টি কেক কাটিং 🍰",
  3: "📸 পার্ট ৩: স্মৃতিময় মুহূর্তগুলো 💖",
  4: "💌 পার্ট ৪: সিক্রেট উইশ কার্ড ✨",
  5: "🎈 পার্ট ৫: স্পেশাল গিফট ভাউচার 🎟️"
};

function goToStep(step) {
  if (step < 1 || step > totalSteps) return;
  currentStep = step;

  // Update Chapter indicator Badge
  const badge = document.getElementById("journeyBadge");
  if (badge && chapterTitles[step]) {
    badge.innerText = chapterTitles[step];
  }

  // Update Timeline Nav Button Styles
  document.querySelectorAll(".step-nav-btn").forEach(btn => {
    const s = parseInt(btn.getAttribute("data-step"));
    if (s === step) {
      btn.classList.add("text-neonGold", "scale-125");
      btn.classList.remove("text-slate-400");
    } else {
      btn.classList.remove("text-neonGold", "scale-125");
      btn.classList.add("text-slate-400");
    }
  });

  // Switch Active Sections with GSAP Smooth Crossfade
  document.querySelectorAll(".step-section").forEach(sec => {
    sec.classList.add("hidden");
    sec.classList.remove("active");
  });

  const targetSec = document.getElementById(`step${step}`);
  if (targetSec) {
    targetSec.classList.remove("hidden");
    targetSec.classList.add("active");

    gsap.fromTo(
      targetSec,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }

  window.scrollTo({ top: 0, behavior: "smooth" });

  // Step specific triggers
  if (step === 2) {
    triggerCandleFlames();
  } else if (step === 4) {
    setTimeout(() => {
      initStep4ScratchCards();
    }, 120);
  } else if (step === 5) {
    startBalloonArena();
  }
}


// ============================================================================
// 5. STEP 1: MYSTERIOUS INTRO GATE & UNLOCK LOGIC
// ============================================================================
function initStep1() {
  const passwordInput = document.getElementById("passwordInput");
  const unlockBtn = document.getElementById("unlockBtn");
  const readyBtn = document.getElementById("readyBtn");
  const giftBoxTrigger = document.getElementById("giftBoxTrigger");
  const introFriendName = document.getElementById("introFriendName");
  const cakeFriendName = document.getElementById("cakeFriendName");
  const voucherRecipient = document.getElementById("voucherRecipient");

  // Populate names from CONFIG
  if (introFriendName) introFriendName.innerText = SURPRISE_CONFIG.FRIEND_NAME;
  if (cakeFriendName) cakeFriendName.innerText = SURPRISE_CONFIG.FRIEND_NAME;
  if (voucherRecipient) voucherRecipient.innerText = "হেয়া (আমাদের ড্রামা কুইন)";

  function performUnlock() {
    soundEngine.playUnlockChime();
    if (!SURPRISE_CONFIG.AUDIO_URL) {
      soundEngine.startAmbientMusic();
    } else {
      const bgAudio = document.getElementById("bgMusicAudio");
      if (bgAudio && bgAudio.paused && !soundEngine.isMuted) {
        bgAudio.play().catch(() => {});
      }
    }

    // Animate lock icon
    const lockIcon = document.getElementById("gateLockIcon");
    if (lockIcon) {
      lockIcon.classList.remove("fa-lock", "text-amber-300");
      lockIcon.classList.add("fa-lock-open", "text-emerald-400");
    }

    // Shrink Cinema letterbox bars away
    const topBar = document.getElementById("cinemaTopBar");
    const bottomBar = document.getElementById("cinemaBottomBar");
    if (topBar) topBar.style.transform = "translateY(-100%)";
    if (bottomBar) bottomBar.style.transform = "translateY(100%)";

    // Reveal Timeline Nav
    const timelineNav = document.getElementById("timelineNav");
    if (timelineNav) timelineNav.classList.remove("hidden");

    // Full screen Confetti explosion
    if (window.confetti) {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#ffd700", "#ec4899", "#8b5cf6", "#06b6d4"]
      });
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 300);
    }

    // GSAP Zoom Transition to Step 2
    gsap.to("#giftBoxTrigger", {
      scale: 1.4,
      rotation: 15,
      opacity: 0,
      duration: 0.7,
      ease: "back.in(1.7)",
      onComplete: () => {
        goToStep(2);
      }
    });
  }

  if (unlockBtn) {
    unlockBtn.addEventListener("click", performUnlock);
  }

  if (readyBtn) {
    readyBtn.addEventListener("click", performUnlock);
  }

  if (giftBoxTrigger) {
    giftBoxTrigger.addEventListener("click", performUnlock);
  }
}


// ============================================================================
// 6. STEP 2: NEXT-GEN CAKE CUTTING & CANDLE BLOWING
// ============================================================================
let blownCandles = { 1: false, 2: false, 3: false };
let micStream = null;
let micAudioContext = null;
let micAnalyser = null;
let micListening = false;
let knifeDraggableInstance = null;
let cakeCutComplete = false;

function triggerCandleFlames() {
  blownCandles = { 1: false, 2: false, 3: false };
  cakeCutComplete = false;
  [1, 2, 3].forEach(id => {
    const flame = document.getElementById(`flame${id}`);
    if (flame) flame.classList.remove("extinguished");
  });
}

// Blow candle by id with smoke particles
function blowCandle(id) {
  if (blownCandles[id]) return;
  blownCandles[id] = true;

  const flame = document.getElementById(`flame${id}`);
  if (flame) {
    flame.classList.add("extinguished");
  }

  soundEngine.playCandleBlowPuff();
  spawnSmokeParticle(id);

  // Check if all candles blown
  if (blownCandles[1] && blownCandles[2] && blownCandles[3]) {
    onAllCandlesExtinguished();
  }
}

// Smoke Particle Effect on Canvas
function spawnSmokeParticle(candleId) {
  const canvas = document.getElementById("smokeCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const candle = document.querySelector(`[data-candle="${candleId}"]`);
  if (!candle) return;
  const rect = candle.getBoundingClientRect();
  const parentRect = canvas.getBoundingClientRect();

  const startX = rect.left - parentRect.left + rect.width / 2;
  const startY = rect.top - parentRect.top;

  const smokePuffs = [];
  for (let i = 0; i < 18; i++) {
    smokePuffs.push({
      x: startX,
      y: startY,
      size: Math.random() * 8 + 6,
      opacity: 0.8,
      speedX: (Math.random() - 0.5) * 1.5,
      speedY: -Math.random() * 2 - 1,
      expand: Math.random() * 0.4 + 0.2
    });
  }

  function animateSmoke() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;

    smokePuffs.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.size += p.expand;
      p.opacity -= 0.02;

      if (p.opacity > 0) {
        active = true;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 200, 220, ${p.opacity})`;
        ctx.fill();
      }
    });

    if (active) requestAnimationFrame(animateSmoke);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  animateSmoke();
}

// When all 3 candles are extinguished
function onAllCandlesExtinguished() {
  const instructions = document.getElementById("cakeInstructions");
  if (instructions) {
    instructions.innerText = "✨ Candles Blown! Tap anywhere on the cake or click the Golden Knife to cut your slice! 🍰";
    instructions.classList.add("text-amber-300", "font-bold");
  }

  // Show guideline & Draggable Knife
  const guideline = document.getElementById("cutGuideline");
  const knifeContainer = document.getElementById("knifeContainer");
  if (guideline) guideline.classList.remove("hidden");
  if (knifeContainer) {
    knifeContainer.classList.remove("hidden");
    gsap.fromTo(knifeContainer, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
  }

  // Initialize knife drag
  initDraggableKnife();
}

// Global one-tap cake cutting handler (cuts immediately on tap/click anywhere on cake)
window.triggerCakeCutFromAnywhere = function() {
  if (cakeCutComplete) return;

  // If candles aren't extinguished yet, extinguish them first
  if (!blownCandles[1] || !blownCandles[2] || !blownCandles[3]) {
    blowCandle(1);
    blowCandle(2);
    blowCandle(3);
  }

  // Animate knife swoosh down the cake cut line
  const knife = document.getElementById("draggableKnife");
  const guideline = document.getElementById("cutGuideline");

  if (knife && guideline) {
    const guideRect = guideline.getBoundingClientRect();
    const stageRect = document.getElementById("cakeStage").getBoundingClientRect();
    
    // Quick knife animation slicing through the cake
    gsap.to(knife, {
      x: guideRect.left - stageRect.left - 20,
      y: guideRect.top - stageRect.top - 30,
      rotation: -25,
      duration: 0.35,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(knife, {
          y: guideRect.bottom - stageRect.top + 10,
          duration: 0.25,
          ease: "power3.in",
          onComplete: () => {
            executeCakeCutSlice();
          }
        });
      }
    });
  } else {
    executeCakeCutSlice();
  }
};

// Draggable Golden Knife with GSAP or Touch/Pointer Drag
function initDraggableKnife() {
  const knife = document.getElementById("draggableKnife");
  const guideline = document.getElementById("cutGuideline");
  if (!knife || !guideline) return;

  // Clicking knife cuts directly
  knife.addEventListener("click", () => {
    triggerCakeCutFromAnywhere();
  });

  if (window.Draggable) {
    Draggable.create(knife, {
      type: "x,y",
      bounds: "#cakeStage",
      edgeResistance: 0.65,
      onDrag: function () {
        const knifeRect = knife.getBoundingClientRect();
        const guideRect = guideline.getBoundingClientRect();

        // Check if knife overlaps with cake cut line
        const overlaps = !(
          knifeRect.right < guideRect.left ||
          knifeRect.left > guideRect.right ||
          knifeRect.bottom < guideRect.top ||
          knifeRect.top > guideRect.bottom
        );

        if (overlaps && !cakeCutComplete) {
          executeCakeCutSlice();
        }
      }
    });
  }
}

// Execute Slice Separation & Celebration Fanfare
function executeCakeCutSlice() {
  cakeCutComplete = true;
  soundEngine.playFanfare();

  // Hide knife guideline
  const guideline = document.getElementById("cutGuideline");
  if (guideline) guideline.classList.add("hidden");

  // Animate cake slice separation
  const cutSlice = document.getElementById("cakeCutSlice");
  if (cutSlice) {
    cutSlice.style.opacity = "1";
    gsap.fromTo(
      cutSlice,
      { x: 0, y: 0, scale: 0.9 },
      { x: 40, y: 15, rotation: 12, scale: 1.1, duration: 0.8, ease: "back.out(2)" }
    );
  }

  // Confetti burst
  if (window.confetti) {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.55 }
    });
  }

  // Show Success Card & Next Button
  const successCard = document.getElementById("cakeSuccessCard");
  const knifeContainer = document.getElementById("knifeContainer");
  if (knifeContainer) knifeContainer.classList.add("hidden");
  if (successCard) {
    successCard.classList.remove("hidden");
    gsap.fromTo(successCard, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.5 });
  }

  // Spawn ascending celebratory balloons
  spawnFestiveBalloons();
}

function spawnFestiveBalloons() {
  const bg = document.getElementById("cakeBalloonsBg");
  if (!bg) return;
  const colors = ["#ec4899", "#facc15", "#8b5cf6", "#06b6d4", "#10b981"];

  for (let i = 0; i < 8; i++) {
    const b = document.createElement("div");
    b.className = "absolute floating-balloon pointer-events-none";
    b.style.left = `${Math.random() * 85 + 5}%`;
    b.style.bottom = "-60px";

    const shape = document.createElement("div");
    shape.className = "balloon-shape";
    shape.style.background = colors[i % colors.length];

    const string = document.createElement("div");
    string.className = "balloon-string";

    b.appendChild(shape);
    b.appendChild(string);
    bg.appendChild(b);

    gsap.to(b, {
      y: -500,
      x: (Math.random() - 0.5) * 80,
      rotation: (Math.random() - 0.5) * 20,
      duration: Math.random() * 3 + 3,
      delay: i * 0.2,
      ease: "power1.out",
      onComplete: () => b.remove()
    });
  }
}

// Microphone Blow Detection Setup
function setupMicrophoneDetection() {
  const micBtn = document.getElementById("micBlowBtn");
  const micStatusText = document.getElementById("micStatusText");
  const micIcon = document.getElementById("micIcon");

  if (!micBtn) return;

  micBtn.addEventListener("click", async () => {
    if (micListening) return;

    try {
      micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micAudioContext = new (window.AudioContext || window.webkitAudioContext)();
      micAnalyser = micAudioContext.createAnalyser();
      micAnalyser.fftSize = 256;

      const source = micAudioContext.createMediaStreamSource(micStream);
      source.connect(micAnalyser);

      micListening = true;
      if (micStatusText) micStatusText.innerText = "Listening... Blow into mic!";
      if (micIcon) {
        micIcon.classList.remove("fa-microphone");
        micIcon.classList.add("fa-wind", "animate-pulse", "text-amber-300");
      }

      detectBlowLevel();
    } catch (err) {
      console.warn("Microphone access not permitted:", err);
      if (micStatusText) micStatusText.innerText = "Mic denied. Tap candles instead!";
    }
  });
}

function detectBlowLevel() {
  if (!micListening || !micAnalyser) return;
  const bufferLength = micAnalyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  micAnalyser.getByteFrequencyData(dataArray);

  // Calculate average volume / high-frequency breath energy
  let sum = 0;
  for (let i = 0; i < bufferLength; i++) {
    sum += dataArray[i];
  }
  const average = sum / bufferLength;

  // Blow threshold
  if (average > 35) {
    if (!blownCandles[1]) blowCandle(1);
    else if (!blownCandles[2]) blowCandle(2);
    else if (!blownCandles[3]) blowCandle(3);
  }

  if (!(blownCandles[1] && blownCandles[2] && blownCandles[3])) {
    requestAnimationFrame(detectBlowLevel);
  } else {
    // Clean up mic
    micListening = false;
    if (micStream) {
      micStream.getTracks().forEach(t => t.stop());
    }
  }
}


// ============================================================================
// 7. STEP 3: 3D MEMORY LANE / POLAROID WALL WITH 3D TILT
// ============================================================================
function initStep3Memories() {
  const grid = document.getElementById("polaroidGrid");
  if (!grid) return;
  grid.innerHTML = "";

  SURPRISE_CONFIG.MEMORIES.forEach((item, index) => {
    const rot = (index % 2 === 0 ? -1 : 1) * ((index % 3) + 1.5);

    const card = document.createElement("div");
    card.className = "polaroid-card group";
    card.style.setProperty("--rotation", `${rot}deg`);
    card.setAttribute("data-id", item.id);

    card.innerHTML = `
      <div class="tape-sticker"></div>
      <div class="polaroid-img-wrapper ${item.orientation === 'portrait' ? 'is-portrait' : 'is-landscape'}">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="polaroid-caption">${item.title}</div>
      <div class="flex items-center justify-between mt-2 pt-1 border-t border-pink-100 text-[11px] font-bengali">
        <span class="text-slate-400 font-mono">${item.date}</span>
        <span class="text-pink-500 font-bold flex items-center gap-1 animate-pulse">
          <i class="fa-solid fa-heart text-rose-500"></i> ট্যাপ করো ✨
        </span>
      </div>
    `;

    // 3D Tilt Parallax on Mouse Move
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = -(y / (rect.height / 2)) * 12;
      const rotateY = (x / (rect.width / 2)) * 12;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `rotate(${rot}deg) scale3d(1, 1, 1)`;
    });

    // Lightbox Click Handler
    card.addEventListener("click", () => openMemoryLightbox(item));

    grid.appendChild(card);
  });
}

// Lightbox modal logic with Magical Reaction & Confetti
let heyaLoveCount = 99;

function openMemoryLightbox(item) {
  const modal = document.getElementById("memoryLightbox");
  const img = document.getElementById("lightboxImg");
  const tag = document.getElementById("lightboxTag");
  const title = document.getElementById("lightboxTitle");
  const desc = document.getElementById("lightboxDesc");

  if (!modal || !item) return;

  img.src = item.image;
  tag.innerText = item.tag;
  title.innerText = item.title;
  desc.innerText = item.caption;

  modal.classList.remove("hidden");
  soundEngine.playUnlockChime();

  if (window.confetti) {
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#ec4899", "#ffd700", "#f43f5e"]
    });
  }
}

function closeMemoryLightbox() {
  const modal = document.getElementById("memoryLightbox");
  if (modal) modal.classList.add("hidden");
}

// Magical Love & Sparkle Shower for Birthday Girl Heya
window.triggerMagicHeartShower = function(e) {
  soundEngine.playUnlockChime();
  heyaLoveCount += 1;

  const display = document.getElementById("loveCountDisplay");
  if (display) {
    display.innerText = `${heyaLoveCount}+ অফুরন্ত ভালোবাসা 💕`;
    gsap.fromTo(display, { scale: 1 }, { scale: 1.3, duration: 0.2, yoyo: true, repeat: 1 });
  }

  const loveBtn = document.getElementById("loveBurstBtn");
  if (loveBtn) {
    gsap.fromTo(loveBtn, { scale: 0.95 }, { scale: 1.06, duration: 0.15, yoyo: true, repeat: 1 });
  }

  // Spawn floating animated emojis flying upwards
  const emojis = ["💖", "🌸", "✨", "👑", "🍰", "🎈", "💕", "🌟", "🥰", "🎉"];
  const startX = e && e.clientX ? e.clientX : window.innerWidth / 2;
  const startY = e && e.clientY ? e.clientY : window.innerHeight / 2;

  for (let i = 0; i < 10; i++) {
    const el = document.createElement("div");
    el.className = "floating-magic-heart";
    el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = `${startX + (Math.random() - 0.5) * 90}px`;
    el.style.top = `${startY + (Math.random() - 0.5) * 50}px`;
    el.style.setProperty("--tx", `${(Math.random() - 0.5) * 180}px`);
    el.style.setProperty("--rot", `${(Math.random() - 0.5) * 70}deg`);
    document.body.appendChild(el);

    setTimeout(() => el.remove(), 1350);
  }

  // Burst heart confetti
  if (window.confetti) {
    confetti({
      particleCount: 45,
      spread: 75,
      origin: {
        x: startX / window.innerWidth,
        y: startY / window.innerHeight
      },
      colors: ["#ec4899", "#f43f5e", "#ffd700", "#c084fc"]
    });
  }
};


// ============================================================================
// 8. STEP 4: INTERACTIVE 'SCRATCH & WIN' WISHES WALL
// ============================================================================
function initStep4ScratchCards() {
  const grid = document.getElementById("scratchCardGrid");
  if (!grid) return;
  grid.innerHTML = "";

  SURPRISE_CONFIG.WISHES.forEach(item => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "scratch-card-container group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 shadow-2xl";
    cardContainer.style.cssText = "height: 440px !important; min-height: 440px !important; width: 100%; position: relative; border-radius: 1.5rem; overflow: hidden;";

    cardContainer.innerHTML = `
      <!-- Revealed Content Beneath -->
      <div class="scratch-hidden-content bg-gradient-to-br ${item.gradient} flex flex-col items-center justify-between text-center relative overflow-hidden h-full font-bengali" style="height: 100% !important; padding: 24px 18px !important;">
        <!-- Floating Ambient Glows -->
        <div class="absolute -top-12 -right-12 w-28 h-28 bg-white/20 rounded-full blur-xl pointer-events-none"></div>
        <div class="absolute -bottom-12 -left-12 w-28 h-28 bg-black/25 rounded-full blur-xl pointer-events-none"></div>

        <div class="w-full flex flex-col items-center gap-2 pt-1">
          <span class="text-xs font-sans font-bold tracking-wide uppercase bg-black/40 border border-white/30 px-3.5 py-1 rounded-full shadow-md text-amber-200 backdrop-blur-md">
            ${item.badge}
          </span>

          <h4 class="text-lg md:text-xl font-bold text-white font-bengali tracking-normal drop-shadow-md">
            ${item.title}
          </h4>
        </div>

        <div class="my-auto py-2 px-1 flex items-center justify-center">
          <p class="text-sm md:text-base text-white/95 font-bengali leading-relaxed drop-shadow font-medium">
            "${item.message}"
          </p>
        </div>

        <div class="text-xs font-sans font-bold text-amber-200 uppercase tracking-wider pb-1 border-t border-white/20 w-full pt-2">
          ✨ Revealed Secret Message ✨
        </div>
      </div>

      <!-- Interactive Foil Scratch Canvas -->
      <canvas class="scratch-canvas" id="canvas-${item.id}"></canvas>
    `;

    grid.appendChild(cardContainer);
  });

  // Attach canvas scratch logic to each card with item styling context
  setTimeout(() => {
    SURPRISE_CONFIG.WISHES.forEach(item => {
      setupSingleScratchCanvas(`canvas-${item.id}`, item);
    });
  }, 100);
}

function setupSingleScratchCanvas(canvasId, item) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });

  const parent = canvas.parentElement;
  const width = (canvas.width = parent.offsetWidth);
  const height = (canvas.height = parent.offsetHeight);

  // Custom metallic gradient based on item theme
  const colors = item && item.foil ? item.foil : ["#d1d5db", "#f3f4f6", "#9ca3af"];
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(0.5, colors[1]);
  gradient.addColorStop(1, colors[2]);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add shimmering foil noise & sparkles
  ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
  for (let i = 0; i < 50; i++) {
    ctx.beginPath();
    ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 2.5 + 0.5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Foil Decorative Border Frame on canvas
  ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
  ctx.lineWidth = 4;
  ctx.strokeRect(8, 8, width - 16, height - 16);

  // Draw Scratch Instruction Badge Text
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "rgba(0, 0, 0, 0.6)";
  ctx.shadowBlur = 6;
  ctx.font = "bold 14px 'Plus Jakarta Sans', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("✨ RUB TO SCRATCH & REVEAL ✨", width / 2, height / 2 - 8);

  ctx.font = "bold 12px 'Plus Jakarta Sans', sans-serif";
  ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
  ctx.fillText("Use Mouse or Finger 👆", width / 2, height / 2 + 14);

  ctx.shadowBlur = 0;

  let isScratching = false;
  let scratchedPixels = 0;
  let cardRevealed = false;

  function scratch(x, y) {
    if (cardRevealed) return;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    soundEngine.playScratchSwoosh();

    scratchedPixels++;
    if (scratchedPixels % 15 === 0) {
      checkRevealPercentage();
    }
  }

  function checkRevealPercentage() {
    if (cardRevealed) return;
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    let transparentCount = 0;
    const totalPixels = data.length / 4;

    // Sample every 16th pixel for performance
    for (let i = 3; i < data.length; i += 64) {
      if (data[i] === 0) transparentCount++;
    }

    const ratio = transparentCount / (totalPixels / 16);
    if (ratio > 0.45) {
      cardRevealed = true;
      gsap.to(canvas, {
        opacity: 0,
        duration: 0.6,
        onComplete: () => {
          canvas.style.pointerEvents = "none";
          if (window.confetti) {
            confetti({
              particleCount: 40,
              spread: 60,
              origin: {
                x: canvas.getBoundingClientRect().left / window.innerWidth,
                y: canvas.getBoundingClientRect().top / window.innerHeight
              }
            });
          }
        }
      });
    }
  }

  // Mouse Handlers
  canvas.addEventListener("mousedown", (e) => {
    isScratching = true;
    const rect = canvas.getBoundingClientRect();
    scratch(e.clientX - rect.left, e.clientY - rect.top);
  });

  window.addEventListener("mouseup", () => (isScratching = false));

  canvas.addEventListener("mousemove", (e) => {
    if (!isScratching) return;
    const rect = canvas.getBoundingClientRect();
    scratch(e.clientX - rect.left, e.clientY - rect.top);
  });

  // Touch Handlers for Mobile Devices
  canvas.addEventListener(
    "touchstart",
    (e) => {
      isScratching = true;
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      if (touch) {
        scratch(touch.clientX - rect.left, touch.clientY - rect.top);
      }
      e.preventDefault();
    },
    { passive: false }
  );

  canvas.addEventListener(
    "touchmove",
    (e) => {
      if (!isScratching) return;
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      if (touch) {
        scratch(touch.clientX - rect.left, touch.clientY - rect.top);
      }
      e.preventDefault();
    },
    { passive: false }
  );

  canvas.addEventListener("touchend", () => (isScratching = false));
}


// ============================================================================
// 9. STEP 5: BALLOON POP MINI-GAME & VIRTUAL GIFT VOUCHER
// ============================================================================
let balloonPopCount = 0;
let balloonSpawnerInterval = null;

function startBalloonArena() {
  balloonPopCount = 0;
  const countEl = document.getElementById("balloonPopCount");
  if (countEl) countEl.innerText = "0";

  const arena = document.getElementById("balloonArena");
  if (!arena) return;

  // Clear previous balloons
  arena.querySelectorAll(".floating-balloon").forEach(b => b.remove());

  if (balloonSpawnerInterval) clearInterval(balloonSpawnerInterval);

  // Spawn initial balloons
  for (let i = 0; i < 4; i++) {
    spawnMiniGameBalloon();
  }

  balloonSpawnerInterval = setInterval(() => {
    if (currentStep === 5 && arena.querySelectorAll(".floating-balloon").length < 7) {
      spawnMiniGameBalloon();
    }
  }, 1200);
}

function spawnMiniGameBalloon() {
  const arena = document.getElementById("balloonArena");
  if (!arena) return;

  const colors = ["#ec4899", "#facc15", "#8b5cf6", "#06b6d4", "#10b981", "#f97316"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  const b = document.createElement("div");
  b.className = "floating-balloon";
  const startX = Math.random() * (arena.offsetWidth - 70) + 10;
  b.style.left = `${startX}px`;
  b.style.bottom = "-80px";

  const shape = document.createElement("div");
  shape.className = "balloon-shape";
  shape.style.background = color;

  const string = document.createElement("div");
  string.className = "balloon-string";

  b.appendChild(shape);
  b.appendChild(string);
  arena.appendChild(b);

  const duration = Math.random() * 4 + 5;
  const floatAnim = gsap.to(b, {
    y: -(arena.offsetHeight + 120),
    x: (Math.random() - 0.5) * 60,
    duration: duration,
    ease: "linear",
    onComplete: () => b.remove()
  });

  // Balloon Pop Interaction (Instant pointerdown for mobile touch + click fallback)
  let popped = false;
  const handlePop = (e) => {
    if (popped) return;
    popped = true;
    floatAnim.kill();
    const cx = e.touches && e.touches[0] ? e.touches[0].clientX : e.clientX;
    const cy = e.touches && e.touches[0] ? e.touches[0].clientY : e.clientY;
    popBalloon(b, cx, cy);
  };
  b.addEventListener("pointerdown", handlePop);
  b.addEventListener("click", handlePop);
}

function popBalloon(balloonEl, clientX, clientY) {
  soundEngine.playBalloonPop();

  // Burst Emoji Particles
  const emojis = ["💖", "🎉", "🍰", "⭐", "🎈", "✨"];
  const arena = document.getElementById("balloonArena");
  const arenaRect = arena.getBoundingClientRect();

  const originX = clientX ? clientX - arenaRect.left : balloonEl.offsetLeft + 25;
  const originY = clientY ? clientY - arenaRect.top : balloonEl.offsetTop + 35;

  for (let i = 0; i < 6; i++) {
    const emoji = document.createElement("span");
    emoji.className = "emoji-burst";
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = `${originX}px`;
    emoji.style.top = `${originY}px`;
    emoji.style.setProperty("--tx", `${(Math.random() - 0.5) * 90}px`);
    emoji.style.setProperty("--ty", `${(Math.random() - 0.5) * 90}px`);
    arena.appendChild(emoji);
    setTimeout(() => emoji.remove(), 700);
  }

  balloonEl.remove();
  balloonPopCount++;

  const countEl = document.getElementById("balloonPopCount");
  if (countEl) countEl.innerText = `${balloonPopCount}`;

  // Once 5 balloons popped, trigger pulse reward
  if (balloonPopCount === 5) {
    const claimBtn = document.getElementById("claimVoucherBtn");
    if (claimBtn) {
      gsap.fromTo(
        claimBtn,
        { scale: 1 },
        { scale: 1.1, repeat: 3, yoyo: true, duration: 0.2, ease: "power1.inOut" }
      );
    }
    if (window.confetti) {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.7 } });
    }
  }
}


// ============================================================================
// 10. VIRTUAL GOLDEN TICKET VOUCHER MODAL & IMAGE GENERATOR
// ============================================================================
function initVoucherConfig() {
  const recipient = document.getElementById("voucherRecipient");
  if (recipient) {
    recipient.innerText = "হেয়া (আমাদের ড্রামা কুইন)";
  }

  const perksList = document.getElementById("voucherPerksList");
  if (perksList) {
    perksList.innerHTML = "";
    SURPRISE_CONFIG.COUPONS.forEach(c => {
      const div = document.createElement("div");
      div.className = "flex items-start gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-amber-900/15 shadow-sm text-left transition-all hover:bg-white/80";
      div.innerHTML = `
        <div class="w-8 h-8 rounded-lg bg-amber-900/10 flex items-center justify-center shrink-0 mt-0.5 text-amber-900 shadow-inner">
          <i class="fa-solid ${c.icon} text-sm"></i>
        </div>
        <div class="flex-1">
          <h5 class="font-bold text-amber-950 text-xs sm:text-sm leading-tight">${c.title}</h5>
          <p class="text-[11px] sm:text-xs text-amber-900/90 mt-1 leading-relaxed">${c.desc}</p>
        </div>
      `;
      perksList.appendChild(div);
    });
  }
}

function openVoucherModal() {
  const modal = document.getElementById("voucherModal");
  if (modal) modal.classList.remove("hidden");
  soundEngine.playUnlockChime();

  if (window.confetti) {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });
  }
}

function closeVoucherModal() {
  const modal = document.getElementById("voucherModal");
  if (modal) modal.classList.add("hidden");
}

function triggerGrandFinaleConfetti() {
  soundEngine.playFanfare();
  if (!window.confetti) return;

  const duration = 3.5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 6,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 6,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

// Download Ticket as Clean PNG Card using HTML2Canvas (Exact Screen Copy) with Fallback
function downloadVoucherAsImage() {
  const ticket = document.getElementById("ticketContainer");

  if (window.html2canvas && ticket) {
    // High-resolution capture of the exact Bengali Golden Ticket on screen
    html2canvas(ticket, {
      scale: 3,
      useCORS: true,
      backgroundColor: null,
      logging: false
    }).then(canvas => {
      const link = document.createElement("a");
      link.download = `Birthday_Voucher_Heya.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    }).catch(err => {
      console.warn("html2canvas error, using fallback canvas:", err);
      renderFallbackCanvasVoucher();
    });
    return;
  }

  renderFallbackCanvasVoucher();
}

function renderFallbackCanvasVoucher() {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 920;
  const ctx = canvas.getContext("2d");

  // Gold Holographic Ticket Background
  const bgGrad = ctx.createLinearGradient(0, 0, 1200, 920);
  bgGrad.addColorStop(0, "#fef08a");
  bgGrad.addColorStop(0.3, "#fde047");
  bgGrad.addColorStop(0.7, "#eab308");
  bgGrad.addColorStop(1, "#ca8a04");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1200, 920);

  // Border
  ctx.strokeStyle = "#78350f";
  ctx.lineWidth = 8;
  ctx.strokeRect(30, 30, 1140, 860);

  // Inner dashed border
  ctx.strokeStyle = "#92400e";
  ctx.lineWidth = 3;
  ctx.setLineDash([12, 8]);
  ctx.strokeRect(45, 45, 1110, 830);
  ctx.setLineDash([]);

  // Header
  ctx.fillStyle = "#451a03";
  ctx.font = "bold 18px 'Hind Siliguri', sans-serif";
  ctx.fillText("🎟️ অফিসিয়াল লাইফটাইম পাস ★ নং: ৮৮৮-BDAY | মেয়াদ: আজীবন", 80, 95);

  ctx.font = "bold 38px 'Hind Siliguri', sans-serif";
  ctx.fillText("দ্য আল্টিমেট বার্থডে ভাউচার", 80, 150);

  // Recipient Box
  ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
  ctx.fillRect(80, 180, 1040, 90);
  ctx.strokeStyle = "#b45309";
  ctx.lineWidth = 2;
  ctx.strokeRect(80, 180, 1040, 90);

  ctx.fillStyle = "#78350f";
  ctx.font = "16px 'Hind Siliguri', sans-serif";
  ctx.fillText("প্রাপক:", 110, 215);

  ctx.fillStyle = "#451a03";
  ctx.font = "bold 32px 'Hind Siliguri', sans-serif";
  ctx.fillText("হেয়া (আমাদের ড্রামা কুইন)", 110, 250);

  // Perks
  ctx.fillStyle = "#78350f";
  ctx.font = "bold 20px 'Hind Siliguri', sans-serif";
  ctx.fillText("যেসব স্পেশাল সুবিধা পাবে:", 80, 310);

  ctx.font = "bold 18px 'Hind Siliguri', sans-serif";
  ctx.fillStyle = "#292524";
  SURPRISE_CONFIG.COUPONS.forEach((c, idx) => {
    const y = 350 + idx * 80;
    ctx.font = "bold 18px 'Hind Siliguri', sans-serif";
    ctx.fillStyle = "#451a03";
    ctx.fillText(`${c.title}`, 90, y);

    ctx.font = "14px 'Hind Siliguri', sans-serif";
    ctx.fillStyle = "#292524";
    ctx.fillText(`${c.desc}`, 110, y + 26);
  });

  // Footer Signature
  ctx.fillStyle = "#451a03";
  ctx.font = "bold 22px 'Hind Siliguri', sans-serif";
  ctx.fillText("স্বাক্ষরে: হ্যান্ডসাম বয় তানজিম", 80, 790);
  ctx.font = "16px 'Hind Siliguri', sans-serif";
  ctx.fillText("ভালোবাসা সহ আজীবন ও চিরকাল ❤️", 80, 820);

  // Export & Download
  const link = document.createElement("a");
  link.download = `Birthday_Voucher_Heya.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}


// ============================================================================
// 10.5. WELCOME POPUP MODAL & MUSIC INITIATOR
// ============================================================================
function initWelcomeModal() {
  const welcomeModal = document.getElementById("welcomeWishModal");
  const welcomeCard = document.getElementById("welcomeWishCard");
  const welcomePlayBtn = document.getElementById("welcomePlayBtn");
  const welcomeFriendName = document.getElementById("welcomeFriendName");
  const bgAudio = document.getElementById("bgMusicAudio");
  const audioWaves = document.getElementById("audioWaves");
  const musicIcon = document.getElementById("musicIcon");
  const musicLabel = document.getElementById("musicLabel");

  if (welcomeFriendName) {
    welcomeFriendName.innerText = SURPRISE_CONFIG.FRIEND_NAME;
  }

  if (!welcomeModal || !welcomePlayBtn) return;

  function startCelebrationAndMusic() {
    // 1. Resume / unlock Web Audio Context
    soundEngine.ensureContext();
    soundEngine.isMuted = false;

    // 2. Play song immediately
    if (bgAudio && SURPRISE_CONFIG.AUDIO_URL) {
      if (!bgAudio.src || !bgAudio.src.includes(SURPRISE_CONFIG.AUDIO_URL)) {
        bgAudio.src = SURPRISE_CONFIG.AUDIO_URL;
      }
      bgAudio.volume = 0.85;
      bgAudio.loop = true;
      const playPromise = bgAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn("Audio play prevented:", err);
        });
      }
    } else {
      soundEngine.startAmbientMusic();
    }

    // 3. Update Audio Header UI state
    if (musicIcon) musicIcon.className = "fa-solid fa-volume-high text-xs sm:text-sm";
    if (musicLabel) musicLabel.innerText = "Sound ON";
    if (audioWaves) audioWaves.classList.remove("paused");

    // 4. Play celebratory chime
    soundEngine.playUnlockChime();

    // 5. Shower with Confetti
    if (window.confetti) {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.5 },
        colors: ["#ffd700", "#ec4899", "#8b5cf6", "#06b6d4", "#f43f5e"]
      });
    }

    // 6. Smooth GSAP fade-out & removal of the modal
    if (window.gsap && welcomeCard) {
      gsap.to(welcomeCard, {
        scale: 0.9,
        opacity: 0,
        y: -30,
        duration: 0.45,
        ease: "power2.in"
      });
      gsap.to(welcomeModal, {
        opacity: 0,
        duration: 0.5,
        delay: 0.1,
        onComplete: () => {
          welcomeModal.remove();
        }
      });
    } else {
      welcomeModal.style.opacity = "0";
      setTimeout(() => welcomeModal.remove(), 400);
    }
  }

  welcomePlayBtn.addEventListener("click", startCelebrationAndMusic);
}


// ============================================================================
// 11. AUDIO PLAYER & EQUALIZER CONTROLLER
// ============================================================================
function initAudioControls() {
  const musicToggleBtn = document.getElementById("musicToggleBtn");
  const musicIcon = document.getElementById("musicIcon");
  const musicLabel = document.getElementById("musicLabel");
  const audioWaves = document.getElementById("audioWaves");
  const bgAudio = document.getElementById("bgMusicAudio");

  if (SURPRISE_CONFIG.AUDIO_URL && bgAudio) {
    bgAudio.src = SURPRISE_CONFIG.AUDIO_URL;
    bgAudio.volume = 0.85;
    bgAudio.loop = true;
  }

  if (musicToggleBtn) {
    musicToggleBtn.addEventListener("click", () => {
      const isMuted = soundEngine.toggleMute();

      if (bgAudio && SURPRISE_CONFIG.AUDIO_URL) {
        if (isMuted) {
          bgAudio.pause();
        } else {
          bgAudio.play().catch(() => {});
        }
      } else {
        if (isMuted) soundEngine.stopAmbientMusic();
        else soundEngine.startAmbientMusic();
      }

      if (isMuted) {
        if (musicIcon) musicIcon.className = "fa-solid fa-volume-xmark text-xs sm:text-sm";
        if (musicLabel) musicLabel.innerText = "Sound OFF";
        if (audioWaves) audioWaves.classList.add("paused");
      } else {
        soundEngine.ensureContext();
        if (musicIcon) musicIcon.className = "fa-solid fa-volume-high text-xs sm:text-sm";
        if (musicLabel) musicLabel.innerText = "Sound ON";
        if (audioWaves) audioWaves.classList.remove("paused");
      }
    });
  }

  // Optional Synth FX demo button
  const fxBtn = document.getElementById("soundFxToggleBtn");
  if (fxBtn) {
    fxBtn.addEventListener("click", () => {
      soundEngine.playUnlockChime();
    });
  }
}


// ============================================================================
// 12. INITIALIZATION ORCHESTRATOR
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initAmbientCanvas();
  initWelcomeModal();
  initStep1();
  setupMicrophoneDetection();
  initStep3Memories();
  initStep4ScratchCards();
  initVoucherConfig();
  initAudioControls();

  // User gesture to unlock audio context smoothly
  document.body.addEventListener("click", () => soundEngine.ensureContext(), { once: true });
});
