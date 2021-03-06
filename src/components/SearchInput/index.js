import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../store/functions/header'
import { cleanSearchSpaces } from '../../utils/web_functions'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import './style.css'

const SearchInput = ({ white, changeSearch }) => {
    const [searchValue, setSearchValue] = useState('')
    const inputSearch = useRef(null)

    const keyPress = (e) => {
        if (e.keyCode == 13) {
            changeSearch(searchValue)
        }
    }

    return (
        <div className={'expandable-search ' + (white ? 'white' : '')}>
            <input
                className={'expandable-search-input ' + (white ? 'white' : '')}
                type='search'
                ref={inputSearch}
                onChange={(e) => setSearchValue(cleanSearchSpaces(e.target.value))}
                onKeyUp={(e) => keyPress(e)}
                placeholder='Pesquisar'
                value={searchValue}
            />
            <IconButton
                aria-label='search'
                className={'expandable-search-button ' + (white ? 'white' : '')}
                onClick={() => searchValue ? changeSearch(searchValue) : inputSearch.current.focus()}
            >
                <SearchIcon
                    fontSize='small'
                    className='expandable-search-icon'
                />
            </IconButton>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)