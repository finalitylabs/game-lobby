// Routes are matched from top to bottom. Make sure they are sequenced
// in the order of priority. It is generally best to sort them by pattern,
// prioritizing specific patterns over generic patterns (patterns with
// one or more parameters). For example:
//     /items
//     /items/:id
export const routes = [
  {
    name: "home",
    pattern: "/"
  },
  {
    name: "Profile",
    pattern: "/profile"
  },
  {
    name: "ChatRoom",
    pattern: "/chat/room/:id"
  },
  {
    name: "ChatUserProfile",
    pattern: "/chat/profile/:id"
  },
  {
    name: "ChatLobby",
    pattern: "/chat"
  },
  {
    name: "GameLobby",
    pattern: "/games"
  },
  {
    name: "GameJoin",
    pattern: "/games/join/:id"
  },
  {
    name: "notFound",
    pattern: "/not-found"
  }
];
