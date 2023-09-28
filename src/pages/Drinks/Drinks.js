import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import Data from "./DrinksData"

export default function Drinks() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [drinks, setDrinks] = React.useState([])

    const typeFilter = searchParams.get("type")

    React.useEffect(() => {
        fetch("./Data")
            .then(res => res.json())
            .then(data => setDrinks(data.Data))
    }, [])

    const displayedDrinks = typeFilter
        ? Data.filter(drink => drink.type === typeFilter)
        : Data

    const drinkElements = displayedDrinks.map(drink => (
        <div key={drink.id} className="drink-tile">
            <Link 
                to={drink.id} 
                state={{ search: `?${searchParams.toString()}` }}
            >
                <img src={drink.imageUrl} />
                <div className="drink-info">
                    <h3>{drink.name}</h3>
                    <p>{drink.info}</p>
                    <h4>${drink.price}</h4>
                </div>
                <i className={`drink-type ${drink.type} selected`}>{drink.type}</i>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <div className="drink-list-container">
            <h1>Explore our drink options</h1>
            <div className="drink-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "cocktails")}
                    className={
                        `drink-type cocktails 
                        ${typeFilter === "cocktails" ? "selected" : ""}`
                    }
                >Cocktails</button>
                <button
                    onClick={() => handleFilterChange("type", "non-alcoholic")}
                    className={
                        `drink-type non-alcoholic 
                        ${typeFilter === "non-alcoholic" ? "selected" : ""}`
                    }
                >Alcohol Free</button>
                <button
                    onClick={() => handleFilterChange("type", "beer")}
                    className={
                        `drink-type beer 
                        ${typeFilter === "beer" ? "selected" : ""}`
                    }
                >Beer</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="drink-type clear-filters"
                    >Clear filter</button>
                ) : null}

            </div>
            <div className="drink-list">
                {drinkElements}
            </div>
        </div>
    )
}