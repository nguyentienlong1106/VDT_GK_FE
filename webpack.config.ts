import path from "path";

export default {
  // Các cấu hình khác của webpack
  // ...

  resolve: {
    fallback: {
      path: import("path-browserify").then((mod) => mod.default),
      os: import("os-browserify/browser").then((mod) => mod.default),
      crypto: import("crypto-browserify").then((mod) => mod.default),
    },
  },
};
