const canvas = document.getElementById('Matrix')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const bin = '01'

const fontSize = 16
const columns = canvas.width / fontSize

const rainDrops = []

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1
}

const draw = () => {
  context.fillStyle = 'rgba(0,0,0,0.05)'
  context.fillRect(0, 0, canvas.width, canvas.height)

  context.fillStyle = '#0f0'
  context.font = fontSize + 'px monospace'

  for (let i = 0; i < rainDrops.length; i++) {
    const text = bin.charAt(Math.floor(Math.random() * bin.length))
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize)

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0
    }
    rainDrops[i]++
  }
}

setInterval(draw, 30)

function Converter() {
  const valorElemento = document.getElementById('text')
  const text = valorElemento.value
  const novoValor = text
  const convercao = []

  const elementoValorConvertido = document.getElementById('valorConvertido')
  const valorConvertido = novoValor.split('')
  for (let a = 0; a < valorConvertido.length; a++) {
    convercao[a] =
      '(' +
      valorConvertido[a] +
      ')' +
      valorConvertido[a].charCodeAt(0).toString(2)
  }
  elementoValorConvertido.innerHTML = convercao
}

window.onresize = function () {
  location.reload()
}
