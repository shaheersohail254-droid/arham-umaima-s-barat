import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Arham & Umaima | Wedding Invitation", description: "Mr and Mrs Zubair Akhtar cordially invite you to the wedding ceremony of their son Muhammad Arham Zubair with Umaima Akhtar" };
export default function RootLayout({ children }: { readonly children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html> }
