import { BiSearch } from 'react-icons/bi'

export const Search = () => {
  return (
    <form className='bg-slate-200 w-full rounded-full flex items-center overflow-hidden px-3'>
      <label className='pl-3' htmlFor='search'>
        <BiSearch />
      </label>
      <input
        className='bg-inherit placeholder:text-slate-500 active:border-none flex-1 p-3 outline-none'
        id='search'
        placeholder='Search Twitter'
        type='text'
      />
    </form>
  )
}
