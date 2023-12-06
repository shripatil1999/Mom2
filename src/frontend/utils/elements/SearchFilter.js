import React from 'react'

const SearchFilter = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    
  return (
    <>
      <form className="flex flex-col md:flex-row mx-4 gap-3" onSubmit={handleSubmit}>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Type here to Search"
                            className="w-full md:w-80 px-3 h-10 rounded-l border border-black focus:outline-none focus:border-black"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 border border-black text-white rounded-r px-2 md:px-3 py-0 md:py-1"
                        >
                            Search
                        </button>
                    </div>
                    <select
                        id="pricingType"
                        name="pricingType"
                        className="w-full h-10 border border-black focus:outline-none bg-white focus:border-black text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                    >
                        <option value="All" defaultValue="0">
                            All
                        </option>
                        <option value="">Option 1</option>
                        <option value="">Option 2</option>
                        <option value="">Option 3</option>
                    </select>
                </form>
    </>
  )
}

export default SearchFilter
