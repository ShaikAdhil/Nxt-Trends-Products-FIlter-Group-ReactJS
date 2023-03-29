import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    searchInput,
    categoryOptions,
    ratingsList,
    changeSearchInput,
    enterSearchInput,
    activeCategoryId,
    activeRatingId,
    changeCategory,
    changeRating,
    clearFilter,
  } = props

  const onChangeSearchInput = event => {
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  return (
    <div className="filters-group-container">
      {/* Replace this element with your code */}
      <div className="searchbar-holder">
        <input
          type="search"
          className="search-bar"
          placeholder="search"
          onChange={onChangeSearchInput}
          value={searchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
      <h1 className="category-heading">Category</h1>
      <ul className="category-list">
        {categoryOptions.map(eachItem => (
          <li className="category-item" key={eachItem.categoryId}>
            <button
              type="button"
              className={`category-btn ${
                eachItem.categoryId === activeCategoryId ? 'add-color' : ''
              }`}
              onClick={() => changeCategory(eachItem.categoryId)}
            >
              <p>{eachItem.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <h1 className="category-heading">Rating</h1>
      <ul className="category-list">
        {ratingsList.map(eachItem => (
          <li className="category-item" key={eachItem.ratingId}>
            <button
              type="button"
              className={`rating-holder ${
                eachItem.ratingId === activeRatingId ? 'add-color' : ''
              }`}
              onClick={() => changeRating(eachItem.ratingId)}
            >
              <img
                src={eachItem.imageUrl}
                alt={`rating ${eachItem.ratingId}`}
                className="rating-image"
              />
              <span className="up">& up</span>
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className="clear-btn" onClick={clearFilter}>
        clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
