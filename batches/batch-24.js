// Human CAPTCHA — Batch 24
// 8 unique test cases. Draft only; not wired into main.
// Rule: do not reuse these prompts/mechanics in other batches.

export const batch24 = [
  {
    id: "b24-camera-flash",
    category: "public panic",
    mechanic: "flash-accident",
    prompt: "you take a photo and the flash fires in a dark room.",
    options: [
      "act normal",
      "apologize to the atmosphere",
      "check who noticed",
      "delete the photo like that fixes it"
    ],
    reaction: "stealth mode left the chat."
  },
  {
    id: "b24-missed-stop",
    category: "transport",
    mechanic: "attention-fail",
    prompt: "you look up and your stop just passed.",
    options: [
      "get off next stop",
      "pretend this was intentional",
      "open maps in panic",
      "begin a new life in this neighborhood"
    ],
    reaction: "route successfully converted into side quest."
  },
  {
    id: "b24-ice-cube",
    category: "tiny chaos",
    mechanic: "object-fumble",
    prompt: "an ice cube falls on the floor.",
    options: [
      "pick it up",
      "kick it under something",
      "watch it disappear naturally",
      "declare the floor hydrated"
    ],
    reaction: "cleanup outsourced to thermodynamics."
  },
  {
    id: "b24-caps-lock",
    category: "typing",
    mechanic: "tone-accident",
    prompt: "you realize half the message is in CAPS.",
    options: [
      "fix it",
      "send anyway",
      "lowercase only the last word",
      "commit to the aggression"
    ],
    reaction: "tone accidentally escalated."
  },
  {
    id: "b24-coffee-forgotten",
    category: "daily life",
    mechanic: "temperature-regret",
    prompt: "you made coffee and forgot it existed.",
    options: [
      "drink it cold",
      "reheat it",
      "make another",
      "find it three hours later and negotiate"
    ],
    reaction: "beverage timeline fractured."
  },
  {
    id: "b24-vending-machine",
    category: "public life",
    mechanic: "machine-betrayal",
    prompt: "the vending machine keeps your money.",
    options: [
      "press button again",
      "shake nothing and stare",
      "ask the machine politely",
      "accept corporate defeat"
    ],
    reaction: "capitalism took the snack too."
  },
  {
    id: "b24-photo-bomb",
    category: "camera lore",
    mechanic: "background-discovery",
    prompt: "perfect photo. then you notice someone in the background.",
    options: [
      "keep it",
      "crop them out",
      "zoom in and investigate",
      "decide they improved the lore"
    ],
    reaction: "background character promoted."
  },
  {
    id: "b24-socks-mismatch",
    category: "morning chaos",
    mechanic: "effort-threshold",
    prompt: "you notice your socks don't match after leaving home.",
    options: [
      "go back",
      "hide them",
      "say it's intentional",
      "this is my brand now"
    ],
    reaction: "fashion problem reclassified as personality."
  }
];
