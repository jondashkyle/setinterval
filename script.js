(function createSetIntervalLink () {
  var duration = 500
  var element = createElement()
  var frame

  window.addEventListener('DOMContentLoaded', handleLoad, false)
  window.addEventListener('mousemove', handleMouseMove, false)

  function createElement () {
    var el = document.createElement('a')
    el.setAttribute('href', 'https://setinterval.zone')
    el.setAttribute('target', '_blank')
    el.setAttribute('style', [
      'text-decoration: none',
      'padding: 10px',
      'line-height: 1',
      'color: currentColor',
      'position: fixed',
      'font-size: 15px',
      'bottom: 0; right: 0',
      'opacity: 0',
      'transition: opacity ' + (duration / 2) + 'ms ease-out'
    ].join(';'))
    el.innerHTML = '⧗'
    return el
  }

  function handleLoad () {
    var parent = document.body
    parent.appendChild(element)
  }

  function handleMouseMove (event) {
    clearTimeout(frame)
    if (element.style.opacity === '0') element.style.opacity = 1
    frame = setTimeout(function () {
      element.style.opacity = 0
    }, duration)
  }
})()