import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import logic from '../logic'

function SearchWork({ placeholder, data }) {
  const [works, setWorks] = useState([])
  const [refreshStamp, setRefreshStamp] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q')

  const handleSearchWork = (event) => {
    event.preventDefault()
    const querySearched = event.target.query.value
    setSearchParams({ q: querySearched })
  }

  const refreshWorks = () => {
    try {
      logic.retrieveWorks()
        .then(works => setWorks(works))
        .catch(error => {
          console.log(error)
          alert(error.message)
        })
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }

  const searchWorks = () => {
    try {
      logic.searchWork()
        .then(works => setWorks(works))
        .catch(error => {
          console.log(error)
          alert(error.message)
        })
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }

  useEffect(() => {
    if (query) searchWorks
    refreshWorks()

  }, [refreshStamp, query])


  return (
    <>
      <form className='mt-2' onSubmit={handleSearchWork}>
        <input
          name='query'
          type='text'
          className='border border-gray-100 rounded-md px-1 py-1 mb-2'
          placeholder='Search by title...'
        />
        <button
          type='submit'
          className='rounded-md px-2 py-2'
        >
          <img src='../src/assets/images/searchIcon.png' alt='Search Icon' className='h-[30px]' />
        </button>
      </form>
    </>
  )

}

export default SearchWork