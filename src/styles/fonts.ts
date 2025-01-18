import { Inter, Space_Grotesk, Space_Mono, Outfit } from "next/font/google";

// Font for Titles and Headers
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Font for Articles (reading)
export const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Font for Monospace
export const spaceMono = Space_Mono({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
});

// Temporary font for testing
export const outfit = Outfit({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
