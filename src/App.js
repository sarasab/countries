import React from 'react'
import Button from './component/Button'
import Card from './component/Card'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      capital: '',
      flag: '',
      population: '',
      region: '',
    }
  }



  
  getCountry = async (country) => {
    try {
      const result = await fetch('https://restcountries.eu/rest/v2/name/' + country)
      
      const countries = await result.json()
      
      this.setState({
        name: countries[0].name,
        capital: countries[0].capital,
        flag: countries[0].flag,
        population: countries[0].population,
        region: countries[0].region,
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return <div>
     <div className="text-center">
        <Button onClick={() => this.getCountry('France')}>France</Button>
        <Button onClick={() => this.getCountry('Brazil')}>Brazil</Button>
        <Button onClick={() => this.getCountry('Croatia')}>Croatia</Button>
        <Button onClick={() => this.getCountry('Morocco')}>Morocco</Button>
      </div>
      <Card {...this.state}/>

  

      
    </div>
  }
}

export default App
