// Download immediately; hold only the first page's loader when loading is fast.
export const INITIAL_LOADER_MIN_MS = 650

export function loadWithMinimum(load, minimumMs = INITIAL_LOADER_MIN_MS) {
  const loaded = load()
  if (minimumMs <= 0) return loaded
  return Promise.all([
    loaded,
    new Promise(resolve => setTimeout(resolve, minimumMs)),
  ]).then(([module]) => module)
}
