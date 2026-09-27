
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Autoriser les accès réseau locaux
  // pendant le développement.

  allowedDevOrigins: [
    "172.20.10.6",
    "localhost",
    "127.0.0.1",
  ],

};

export default nextConfig;