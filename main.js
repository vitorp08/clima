window.addEventListener('load', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
       
        
        const getWeather = async () => {
            const getData = await fetch(`http://api.weatherapi.com/v1/current.json?key=55a32c1083a14410962120955240106&q=${latitude},${longitude}&lang=pt`)
            const res = await getData.json()
            const condicaoContainer = document.querySelector('.condicao')
             const localAtualContainer= document.querySelector('.local-atual')
            console.log(res.current.condition.text)
            console.log(res.location.name)
            console.log(res.current.temp_c)
            console.log(res.current.feelslike_c)
            console.log(res.current.wind_kph)
            

            const icone = document.createElement('img')
            const condicao = document.createElement('p')
            const cidade = document.createElement('span')
            const temp = document.createElement('span')
            const sensacaoTermica  = document.createElement('span')
            const vento = document.createElement('span')


            condicao.innerHTML = res.current.condition.text
            icone.setAttribute('src', 'https:'+ res.current.condition.icon)
            temp.innerHTML = res.current.temp_c + '°C'
            cidade.innerHTML = res.location.name
            sensacaoTermica.innerHTML = res.current.feelslike_c
            vento.innerHTML = res.current.wind_kph + 'KM'
            // -------------------------------------------
            temp.className = 'fontLarga'
            cidade.className = 'fontMedia'
            vento.className = 'fontMedia'
            condicao.className = 'fontMedia'

            // -------------------------------------------------
            condicaoContainer.appendChild(icone)
            condicaoContainer.appendChild(temp)
            condicaoContainer.appendChild(condicao)
            localAtualContainer.appendChild(cidade)
            localAtualContainer.appendChild(sensacaoTermica)
            localAtualContainer.appendChild(vento)
            
             localAtualContainer('.local-atual').appendChild(cidade)
             localAtualContainer('.local-atual').appendChild(sensacaoTermica)
             localAtualContainer('.local-atual').appendChild(vento)
             

        }
        document.querySelector('.load').className = 'hideLoad'
        getWeather()
    })

})