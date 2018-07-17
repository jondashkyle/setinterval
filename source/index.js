(function init () {
  // setup
  window.addEventListener('DOMContentLoaded', handleLoad, false)

  function handleLoad () {
    loadEntries()
  }

  function loadEntries () {
    fetch('entries.md')
      .then(async function (resp) {
        var data = await resp.text()
        data = data.split('\n')
          .filter(function (str) { return str })
          .reduce(parseYamlLine, [ ])
        createEntries(data)
      })
      .catch(function (err) {

      })
  }

  // super stupid yaml to json parser
  function parseYamlLine (res, cur, i, arr) {
    if (cur.substring(0, 2) !== '  ') {
      res.push({ id: cur.replace(':', '').trim() })
    } else {
      var parts = cur.split(/:(.+)/)
      res[res.length - 1][parts[0].trim()] = parts[1].trim()
    }
    return res
  }

  function createEntries (entries) {
    var container = document.createElement('ul')
    var parent = document.querySelector('main')
    parent.appendChild(container)

    entries.forEach(function (entry) {
      var el = document.createElement('li')
      container.appendChild(el)
      el.innerHTML = `
        <a href="${entry.url}" target="_blank">${entry.title}</a>, by <a href="${entry.authorUrl}" target="_blank">${entry.author}</a>
      `
    })
  }
})()