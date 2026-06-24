/** Smooth-scroll to a section id, accounting for the sticky navbar height. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const navOffset = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
  window.scrollTo({ top, behavior: "smooth" });
}
