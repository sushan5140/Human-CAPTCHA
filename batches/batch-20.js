// Human CAPTCHA — Batch 20
// 8 unique test cases. Draft only; not wired into main.
// Rule: do not reuse these prompts/mechanics in other batches.

export const batch20 = [
  {
    id: "b20-browser-download",
    category: "download lore",
    mechanic: "file-hunt",
    prompt: "you downloaded the file. where did it go?",
    options: [
      "downloads folder",
      "desktop somehow",
      "open recent files",
      "download it again instead of looking"
    ],
    reaction: "file duplication speedrun completed."
  },
  {
    id: "b20-call-goodbye",
    category: "social awkwardness",
    mechanic: "ending-loop",
    prompt: "the call should've ended 40 seconds ago.",
    options: [
      "okay bye",
      "yeah okay bye",
      "alright take care bye",
      "accidentally start a new topic"
    ],
    reaction: "goodbye failed successfully."
  },
  {
    id: "b20-plug-orientation",
    category: "tiny rage",
    mechanic: "physical-misread",
    prompt: "USB doesn't fit on the first try.",
    options: [
      "flip it",
      "flip it back",
      "question physics",
      "rotate it until technology apologizes"
    ],
    reaction: "ancient ritual completed."
  },
  {
    id: "b20-movie-choice",
    category: "decision paralysis",
    mechanic: "browse-loop",
    prompt: "you've spent 35 minutes choosing a movie.",
    options: [
      "pick one",
      "watch trailers",
      "scroll until tired",
      "watch youtube instead"
    ],
    reaction: "movie night became menu night."
  },
  {
    id: "b20-online-status",
    category: "social observation",
    mechanic: "status-peek",
    prompt: "someone says they're busy. they're online.",
    options: [
      "mind my business",
      "notice once",
      "check again later",
      "build a conspiracy board"
    ],
    reaction: "investigation budget denied."
  },
  {
    id: "b20-snack-crumbs",
    category: "daily life",
    mechanic: "evidence-choice",
    prompt: "you said you weren't hungry. why are there crumbs?",
    options: [
      "no comment",
      "that was one bite",
      "crumbs are circumstantial evidence",
      "i have no legal representation"
    ],
    reaction: "case dismissed for lack of dignity."
  },
  {
    id: "b20-volume-check",
    category: "public panic",
    mechanic: "audio-anxiety",
    prompt: "you press play in public. volume is unknown.",
    options: [
      "risk it",
      "lower volume to zero first",
      "cover speaker with hand",
      "experience immediate spiritual fear"
    ],
    reaction: "public audio incident narrowly avoided."
  },
  {
    id: "b20-window-open",
    category: "room lore",
    mechanic: "weather-gamble",
    prompt: "you leave the window open 'for five minutes'.",
    options: [
      "close it in five",
      "remember in an hour",
      "remember when it gets cold",
      "remember when weather enters the room"
    ],
    reaction: "indoor climate now community-managed."
  }
];
