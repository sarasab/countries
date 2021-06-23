import React, {useState, useEffect } from 'react'
import Button from './component/Button'
import Card from './component/Card'

const App = () => {
  const [contryName, setCountryName] = useState('france')
  const [name, setName] = useState('name')
  const [capital, setCapital] = useState('capital')
  const [flag, setFlag] = useState('flag')
  const [population, setPopulation] = useState('population')
  const [region, setRegion] = useState('region')

  useEffect(async () => {
    try {
      const result = await fetch('https://restcountries.eu/rest/v2/name/' + contryName)
      const countries = await result.json()
      
      setName(countries[0].name)
      setCapital(countries[0].capital)
      setFlag(countries[0].flag)
      setPopulation(countries[0].population)
      setRegion(countries[0].region)

    } catch (error) {
      console.error(error)
    }
  })

  return (
    <div>
      <div className="text-center" >
        <Button onClick={() => setCountryName('France')}> France </Button >
        <Button onClick={() => setCountryName('Brazil')}> Brazil</Button >
        <Button onClick={() => setCountryName('Croatia')}> Croatia</Button >
        <Button onClick={() => setCountryName('Morocco')}> Morocco</Button >
        <Button onClick={() => setCountryName('Martinique')}> martinique</Button >
      </div>
      <Card {...{name,capital,region,population,flag}} />

    </div>
  )
}

export default App
