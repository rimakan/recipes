import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "./Filter.module.css";

interface FilterProps {
  categories: string[];
  onChange(value: string): void;
  selected: string;
}

const Filter = ({ categories, onChange, selected }: FilterProps) => {
  const filterHandler = (e: SelectChangeEvent) => onChange(e.target.value);
  return (
    <div className={styles["recipes__filter"]}>
      <FormControl
        sx={{ m: 1, width: "50%", minWidth: "40%", fontFamily: "Montserrat" }}
      >
        <InputLabel id="category-filter" sx={{ fontSize: "1.6rem" }}>
          Category
        </InputLabel>
        <Select
          labelId="category-filter"
          id="demo-simple-select-autowidth"
          value={selected}
          onChange={filterHandler}
          autoWidth
          label="Category"
          sx={{ fontSize: "1.6rem", textAlign: "center" }}
        >
          <MenuItem value="All" sx={{ fontSize: "1.6rem" }}>
            All
          </MenuItem>
          {categories.map((category, idX: number) => (
            <MenuItem key={idX} value={category} sx={{ fontSize: "1.6rem" }}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
