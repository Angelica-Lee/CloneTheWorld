import React from 'react'
import Search from '../components/Search'
import { useStateValue } from '../StateProvider'

function SearchResult() {
  const [{term}, dispatch] = useStateValue()
  return (
    <div>
      {term}
      <Search />
    </div>
  )
}

export default SearchResult