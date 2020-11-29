import { useEffect, useState } from 'react'
import contacts from './clients'

function App () {
  const [search, setSearch] = useState('')
  // const [rows, setRows] = useState([])

  function onChange (e) {
    const value = e.target.value
    const fields = value.split(' ') // separar cada uno de las queries

    let results = contacts.rows // por defecto inicias con todos los elementos

    // por cada campo encontrado
    fields.forEach(el => {
      const field = el.split(':') // separar campo por clave y valor
      const aux = results.filter(contact => {
        try {
          // busqueda por cada campo

          switch (field[0]) {
            case 'lastname':
              // caso lastname
              if (
                contact.name.toUpperCase().indexOf(field[1].toUpperCase()) !==
                -1
              )
                return contact
              break

            default:
              if (
                contact[field[0]]
                  .toUpperCase()
                  .indexOf(field[1].toUpperCase()) !== -1
              )
                return contact
              break
          }
        } catch (error) {
          // caso base de busqueda por defecto
          if (contact.name.toUpperCase().indexOf(field[0].toUpperCase()) !== -1)
            return contact
        }
      })
      results = aux
    })
    setSearch(e.target.value)
    console.log(results) // actualizar el state
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <label htmlFor='site-search'>Search the site:</label>
        <input
          type='search'
          id='site-search'
          name='q'
          value={search}
          onChange={onChange}
          aria-label='Search through site content'
        />

        <button>Search</button>
      </header>
    </div>
  )
}

export default App
