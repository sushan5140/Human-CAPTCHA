// Human CAPTCHA — Batch 17
// 8 unique test cases. Draft only; not wired into main.
// Rule: do not reuse these prompts/mechanics in other batches.

export const batch17 = [
  {
    id: "b17-restaurant-menu",
    category: "decision paralysis",
    mechanic: "choice-loop",
    prompt: "you've read the menu three times. what are you ordering?",
    options: [
      "the first thing i saw",
      "same thing as always",
      "ask what everyone else is getting",
      "panic when the waiter comes back"
    ],
    reaction: "decision engine timed out."
  },
  {
    id: "b17-front-camera",
    category: "camera shock",
    mechanic: "surprise-choice",
    prompt: "front camera opens by accident.",
    options: [
      "close immediately",
      "fix hair for no audience",
      "question every life choice",
      "pretend that angle never happened"
    ],
    reaction: "jump scare successfully survived."
  },
  {
    id: "b17-low-storage",
    category: "phone chaos",
    mechanic: "resource-denial",
    prompt: "storage full. what are you deleting?",
    options: [
      "old screenshots",
      "apps i haven't used in months",
      "absolutely nothing",
      "one 14 second video and call it solved"
    ],
    reaction: "digital hoarding remains undefeated."
  },
  {
    id: "b17-name-forgotten",
    category: "social awkwardness",
    mechanic: "identity-dodge",
    prompt: "someone greets you by name. you forgot theirs.",
    options: [
      "hey brooo",
      "avoid names completely",
      "wait for someone else to say it",
      "carry this secret to the grave"
    ],
    reaction: "identity verification skipped."
  },
  {
    id: "b17-rain-window",
    category: "main character syndrome",
    mechanic: "mood-choice",
    prompt: "it starts raining while you're inside.",
    options: [
      "ignore it",
      "look outside dramatically",
      "play the exact song for this scene",
      "invent lore nobody asked for"
    ],
    reaction: "cinematography budget approved."
  },
  {
    id: "b17-last-slice",
    category: "social politics",
    mechanic: "fake-politeness",
    prompt: "one slice left. everybody says they don't want it.",
    options: [
      "take it immediately",
      "ask once more",
      "wait 12 seconds for legal clearance",
      "cut it into a suspiciously tiny half"
    ],
    reaction: "diplomatic negotiations concluded."
  },
  {
    id: "b17-password-reset",
    category: "account lore",
    mechanic: "memory-gamble",
    prompt: "site says incorrect password.",
    options: [
      "type the exact same password again",
      "add one random capital",
      "try the old old password",
      "hit forgot password after 9 attempts"
    ],
    reaction: "cybersecurity by vibes."
  },
  {
    id: "b17-window-seat",
    category: "public transport",
    mechanic: "territory-choice",
    prompt: "you got the window seat and need to get out.",
    options: [
      "say excuse me normally",
      "wait until it's almost too late",
      "mentally rehearse the exit",
      "consider missing the stop"
    ],
    reaction: "social anxiety almost changed the route."
  }
];
