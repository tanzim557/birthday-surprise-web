# 🎂 Cyber-Magical Birthday Surprise Experience

A single-page, gamified, and emotional birthday surprise web application designed for your best friend. Built with **HTML5**, **Tailwind CSS**, **GSAP**, **Canvas Confetti**, and the **Web Audio API**.

---

## 🚀 Quick Start & How to Open

### Option 1: View in Browser via Local Server (Recommended)
The server is currently running locally at:
👉 **[http://localhost:3000](http://localhost:3000)**

### Option 2: Direct File Open
You can simply double-click `index.html` in Windows Explorer to open it in Chrome, Edge, Brave, or Safari without any server setup!

---

## 🎮 Gamified 5-Stage Journey

1. **Step 1: The Mysterious Intro Gate**
   - Anamorphic cinema bars with a glowing 3D golden gift box and floating lock.
   - Enter secret passcode (`BDAY` by default) or click **"I Am Ready!"**.
   - Dramatic cinematic reveal with celestial chimes and full-screen confetti cannons.

2. **Step 2: Cake Cutting & Candle Blowing**
   - 3D-styled celebration cake with a neon banner: *"Happy Birthday, [Friend's Name]!"*.
   - **Blowing Candles**: Blow into your microphone (Web Audio frequency analyzer) or click the candles to blow them out with realistic canvas smoke physics.
   - **Cake Cutting**: Drag the glowing golden knife across the cake line to cut a slice, triggering party horn fanfares, crowd cheers, and floating balloons.

3. **Step 3: 3D Memory Lane / Polaroid Wall**
   - 8 categorized polaroid photo cards with authentic tape stickers, drop shadows, and handwritten captions.
   - Dynamic 3D parallax tilt effect following your mouse cursor.
   - Click any card to open a high-res lightbox with an interactive **Voice Note Audio Player** (animated waveforms).

4. **Step 4: Interactive 'Scratch & Win' Wishes Wall**
   - Real HTML5 Canvas scratch-off cards (metallic gold/silver foil).
   - Drag mouse or finger to scratch off foil and reveal:
     - 😈 A funny roast/inside joke
     - 💖 A heartfelt emotional wish
     - 🌟 A bucket list promise
     - 🔮 A secret birthday prophecy
   - Auto-reveals with sparkles and confetti once scratched past 45%.

5. **Step 5: Balloon Pop Mini-Game & Golden Ticket Voucher**
   - Interactive balloons drifting upwards that pop when clicked, showering emojis (`💖`, `🎉`, `🍰`, `⭐`).
   - Pop 5 balloons to unlock the **Golden Ticket Modal**.
   - Features a holographic VIP Birthday Voucher with customizable privileges and a **"Save Ticket to Phone / PC"** button that exports a high-resolution PNG image!

---

## 🛠️ How to Customize

Open `app.js` and edit the `SURPRISE_CONFIG` object at the very top of the file:

```javascript
const SURPRISE_CONFIG = {
  // 1. Friend's Name
  FRIEND_NAME: "Heya",

  // 2. Birthday Password (Case-insensitive)
  PASSWORD: "BDAY",

  // 3. Custom MP3 (Optional; built-in synthesizer plays if left empty)
  AUDIO_URL: "",

  // 4. Memory Polaroid Photos & Voice Notes
  MEMORIES: [
    {
      id: 1,
      tag: "The Beginning",
      title: "Our First Hangout",
      image: "https://your-image-url.jpg",
      caption: "That coffee meetup that lasted 4 hours!",
      voiceNote: "Remember when we lost track of time?",
      date: "October 14, 2021"
    },
    // ... 8 moments in total
  ],

  // 5. Scratch Card Messages
  WISHES: [
    { badge: "The Brutal Roast 😈", message: "..." },
    { badge: "Pure Emotion 💖", message: "..." },
    // ...
  ],

  // 6. Redeemable Birthday Coupons
  COUPONS: [
    { icon: "fa-utensils", label: "One Lavish Dinner / Food Treat Fully Sponsored by Me 🍔" },
    // ...
  ]
};
```

---

## 🎶 Sound Synthesizer Engine
No external audio files or MP3 downloads are needed! The built-in Web Audio API generates:
- Ambient "Happy Birthday" lo-fi arpeggiator melody
- Celestial door unlock chimes
- Candle wind puff sounds
- Party horn fanfare & crowd applause
- Balloon pops & scratch sounds
- Floating glassmorphic music controls (Sound ON/OFF + Equalizer animation)
