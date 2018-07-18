<h1 align="center"><a href="https://setinterval.zone">setInterval.zone</a></h1>
<div align="center">browser-based durational works<br><br></div>

```
dat://c4f50b9facba45c21987397018ba0f87f8566767a513887ffb2628cbe02bcb4b
```

*setInterval* is an online exhibition space and web ring. It’s published with the [Dat protocol](https://datprotocol.org) ensuring continued accessibility and long-term archival. The work on display engages perception of time; order, tense, duration, newness, synchrony… Do we experience “time”, or only it’s passing? When is the work? Where is the work?

## Contributing

1. *Fork* this repository.
2. Edit the `entries.md` file, either with Github’s interface (click the pencil) or your preferred method.
3. Follow the formatting convention. Add your entry to the top.
4. Create a pull request for your edits.

Optionally, include the script below in your work to link back to the ring.

```
<script src="https://setinterval.zone/script.js"></script>
```

<details id="column">
<summary>Webring script source</summary>

```js
<script>
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
</script>
```

</details>