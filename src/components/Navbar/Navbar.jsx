import "../../globals.css";
import styles from "./Navbar.module.css";

import { Select } from "./Select";
import { Search } from "./Search";
import { SearchButton } from "./SearchButton";

export const Navbar = () => {
  return (
    <nav className={`container ${styles["container"]}`}>
      <label htmlFor="search" className={`text-base ${styles["search-label"]}`}>
        Pesquisar cidade
      </label>
      <Search />
      <Select />
      <SearchButton />
    </nav>
  );
};
