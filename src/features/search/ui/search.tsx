import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'

import debounce from 'lodash.debounce'
import { searchApi } from '../api/api'
import { SearchList } from './searchList'

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isVisible, setVisibleState] = useState<boolean>(false)

  const { data, error, isFetching } = searchApi.useGetSearchListQuery(searchTerm, {
    skip: !searchTerm,
  })

  const inputRef = useRef<HTMLInputElement | null>(null)

  const changeVisible = (e: MouseEvent) => {
    if (e.target !== inputRef.current && isVisible) {
      setVisibleState(false)
    }
  }

  const handleInputChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }, 500)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  useEffect(() => {
    document.addEventListener('click', changeVisible)

    return () => {
      document.removeEventListener('click', changeVisible)
    }
  }, [isVisible])

  return (
    <div className="w-[60%] relative">
      <form onSubmit={handleSubmit}>
        {isFetching && (
          <div className="w-6 h-6 border-2 border-white border-solid border-b-transparent rounded-full inline-block box-border animate-spin absolute z-50 top-[25%] left-[2%]"></div>
        )}
        <input
          ref={inputRef}
          onClick={() => setVisibleState(true)}
          onChange={handleInputChange}
          type="text"
          placeholder="search"
          className="w-full p-2.5 pl-12 rounded-2xl bg-[#0d0a1b] border border-solid border-[#272133]"
        />
      </form>
      {data && isVisible && <SearchList searchData={data} />}
      {error && <div className="text-center font-bold">Oops something went wrong. Try later or another coin</div>}
    </div>
  )
}
