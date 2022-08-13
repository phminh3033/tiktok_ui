import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Search.module.scss';

//FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

//Tippy library
import HeadlessTippy from '@tippyjs/react/headless';

//Axios library
// import axios from 'axios';

//React hooks
import { useEffect, useState, useRef } from 'react';

//Custom hooks
import { useDebounce } from '~/hooks';

//components
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountsItem from '~/components/AccountsItem/AccountsItem';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounceValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debounceValue);

            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounceValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHiddenResults = () => {
        setShowResults(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResults && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountsItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHiddenResults}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos..."
                        onChange={handleChange}
                        onFocus={() => setShowResults(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear-icon')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
