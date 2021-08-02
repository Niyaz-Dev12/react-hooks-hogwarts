import React from 'react'

function Filter({
  sortBy,
  onChangeSortBy,
  showGreased,
  onChangeShowGreased
}) {

  function handleChangeSortBy(event) {
    onChangeSortBy(event.target.value)
  }
  
  function handleToggleGreased(event) {
    onChangeShowGreased(event.target.checked)
  }

  return (
    <form className="filterWrapper">
      <label htmlFor="checkbox">Sort By: </label>
      <select name="sort" value={sortBy} onChange={handleChangeSortBy}>
      <option value="name">Name</option>
						<option value="weight">Weight</option>
      </select>
      <label htmlFor="search">  Greased: </label>
      <input className="ui toggle checkbox" type="checkbox" checked={showGreased}
						onChange={handleToggleGreased} id="checkbox" />
    </form>
  )
}

export default Filter
