// Make an api request using async await
const image = document.querySelector('img')
const getDoggoButton = document.querySelector('button')

async function getACuteDogPhoto(){
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    console.log(data)

    image.src = data.message
    console.log(image.src)
}

getDoggoButton.addEventListener('click', getACuteDogPhoto)



