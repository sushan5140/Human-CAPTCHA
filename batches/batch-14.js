// Human CAPTCHA — Batch 14
// 8 unique test cases. Kept off main intentionally.
// Rule: do not reuse these prompts/mechanics in other batches.

export const batch14 = [
  {
    id: "b14-reply-later",
    category: "social battery",
    mechanic: "choice",
    prompt: "you saw the message hours ago. what happened?",
    options: [
      "replied in my head",
      "forgot completely",
      "waiting for the vibe",
      "opened it again and still did nothing"
    ],
    reaction: "communication happened spiritually."
  },
  {
    id: "b14-alarm-negotiations",
    category: "sleep lore",
    mechanic: "choice",
    prompt: "alarm says 7:00. what time are you actually getting up?",
    options: [
      "7:05",
      "7:47 somehow",
      "when panic kicks in",
      "bold of you to assume i'm getting up"
    ],
    reaction: "sleep schedule has entered free roam."
  },
  {
    id: "b14-screenshot-first",
    category: "group chat",
    mechanic: "choice",
    prompt: "your friend sends something insane. first instinct?",
    options: [
      "reply",
      "screenshot",
      "send it to another friend",
      "stare at it for 40 seconds"
    ],
    reaction: "evidence preservation instinct. deeply human."
  },
  {
    id: "b14-delivery-tracker",
    category: "package lore",
    mechanic: "choice",
    prompt: "package says out for delivery. how many times have you checked?",
    options: [
      "once",
      "5",
      "every 9 minutes",
      "i know the driver's route now"
    ],
    reaction: "bro became logistics management."
  },
  {
    id: "b14-group-chat-archaeology",
    category: "group chat",
    mechanic: "choice",
    prompt: "you wake up to 286 unread messages.",
    options: [
      "scroll to top",
      "ask what happened",
      "read only the last 8",
      "mute for another year"
    ],
    reaction: "context is optional apparently."
  },
  {
    id: "b14-fridge-respawn",
    category: "daily life",
    mechanic: "two-stage",
    prompt: "you opened the fridge. nothing interesting.",
    followup: "okay but what if you open it again?",
    options: [
      "obviously",
      "food might've spawned"
    ],
    reaction: "same loot table. tragic."
  },
  {
    id: "b14-playlist-hostage",
    category: "music",
    mechanic: "disappearing-option",
    prompt: "you've replayed the same song 19 times. stop?",
    options: [
      "stop",
      "run it back"
    ],
    interaction_note: "the stop option disappears after a beat",
    reaction: "exactly."
  },
  {
    id: "b14-social-battery",
    category: "social battery",
    mechanic: "choice",
    prompt: "someone says we should hang out sometime",
    options: [
      "absolutely",
      "after i recover from existing",
      "send a reel instead",
      "see you in 3–5 business months"
    ],
    reaction: "plans successfully converted into lore."
  }
];
