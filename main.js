window.addEventListener('load', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        const getWeather = async () => {
            const getData = await fetch(`http://api.weatherapi.com/v1/current.json?key=55a32c1083a14410962120955240106&q=${latitude},${longitude}&lang=pt`)
            const res = await getData.json()
            console.log(res.current.condition.text)
            console.log(res.location.name)
            console.log(res.current.temp_c)
            console.log(res.current.feelslike_c)
            console.log(res.current.wind_kph)
            const condicao = document.createElement('p')
            condicao.innerHTML = res.current.condition.text
            document.querySelector('.dados').appendChild(condicao)
        }
        getWeather()
    })

})