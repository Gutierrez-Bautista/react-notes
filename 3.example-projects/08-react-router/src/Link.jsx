import { EVENTS } from './const'

export function navigate (href) {
  window.history.pushState({}, '', href)

  // crear evento para avisar que hemos cambiado la url
  const navigationEvent = new Event(EVENTS.NAVIGATION_EVENT)

  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (evt) => {
    const isMainEvent = evt.button === 0 // primary click
    const isModifiedEvent = evt.metaKey || evt.altKey || evt.ctrlKey || evt.shiftKey
    const isManagebleEvent = target === undefined || target === '_self'

    if (isMainEvent && isManagebleEvent && !isModifiedEvent) {
      evt.preventDefault()
      navigate(to) // navegacion SPA
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
