import React, { useState } from 'react'

export default function SearchForm(): JSX.Element {
  const [name, setName] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  return (
    <form>
      <div className="flex max-w-5xl rounded shadow p-4 mb-8 mx-auto justify-between">
        <input
          className="border border-blue-400 shadow-lg rounded-lg pl-2 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
          type="text"
          value={name}
          onChange={onChange}
          name="name"
          placeholder="Company Name"
        />
        <button
          type="submit"
          className="py-2 px-4 rounded-lg shadow-lg bg-blue-800 text-white"
        >
          Search
        </button>
      </div>
    </form>
  )
}
