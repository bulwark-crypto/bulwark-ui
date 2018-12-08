// TODO: Rename / refactor this.

export function kill (ev) {
  try {
    ev.preventDefault()
    ev.stopPropagation()
  } catch (err) {
    // Do nothing!
  }
}

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

export function splitProps (map) {
  return function (props) {
    const out = {}
    for (const key in map) {
      for (const prop of map[key]) {
        if (props[prop]) {
          out[key] = prop
        }
      }
    }
    return out
  }
}
