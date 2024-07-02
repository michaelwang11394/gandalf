export function isLoading(): boolean {
  // hack for supabase
  // will need to adapt to individual products
  return document.querySelector(".shimmering-loader") !== null;
}
