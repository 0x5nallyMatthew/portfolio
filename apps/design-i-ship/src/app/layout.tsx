import type { Metadata } from "next";
import { Archivo, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* Browser extensions (e.g. the one injecting bis_skin_checked / bis_register /
   __processed_* attributes) mutate the DOM before React hydrates, causing
   hydration attribute mismatches. This inline script (executes before hydration)
   strips those attributes now and keeps stripping them via MutationObserver. */
const extensionAttributeCleanup = `
(function () {
  var pattern = /^(?:bis_|__processed)/;
  function scrub(el) {
    if (el.nodeType !== 1 || !el.attributes) return;
    for (var i = el.attributes.length - 1; i >= 0; i--) {
      var name = el.attributes[i].name;
      if (pattern.test(name)) el.removeAttribute(name);
    }
  }
  function walk(root) {
    if (!root) return;
    scrub(root);
    var all = root.querySelectorAll ? root.querySelectorAll("*") : [];
    for (var i = 0; i < all.length; i++) scrub(all[i]);
  }
  walk(document);
  new MutationObserver(function (muts) {
    for (var i = 0; i < muts.length; i++) {
      if (muts[i].type === "attributes") scrub(muts[i].target);
      else for (var j = 0; j < muts[i].addedNodes.length; j++) walk(muts[i].addedNodes[j]);
    }
  }).observe(document, { attributes: true, childList: true, subtree: true });
})();
`;

export const metadata: Metadata = {
  title: "URDIS — Your Design I Ship",
  description:
    "URDIS — you hand over the design, I ship it. Design systems, product interfaces and fullstack architecture — numbered, built and shipped by the same pair of hands.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: extensionAttributeCleanup }} />
        {children}
      </body>
    </html>
  );
}
