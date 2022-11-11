import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <li>Home</li>
        <li>Store</li>
        <li>Marketplace</li>
        <li>Dexicon</li>
      </nav>
      {children}
    </div>
  );
}
