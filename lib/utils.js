// TODO: Rename / refactor this.

export function pickRest (object, pick) {
  const picked = {}
  const rest = {}
  for (const key in object) {
    if (pick.includes(key)) {
      picked[key] = object[key]
    } else {
      rest[key] = object[key]
    }
  }
  return [picked, rest]
}
