import {SearchContainer} from './style/searchBarStyle';

export default function SearchBar({searchChallenges, searchInput}) {
	return (
		<SearchContainer>
			<form>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					role="search-logo"
					width="1em"
					height="1em"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 20 20"
				>
					<path
						fill="currentColor"
						d="m17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"
					/>
				</svg>
				<input
					type="text"
					id="searchBar"
					value={searchInput}
					placeholder="search.."
					required
					onChange={event => {
						searchChallenges(event.target.value);
					}}
				/>
			</form>
		</SearchContainer>
	);
}