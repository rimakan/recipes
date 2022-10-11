import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginatorProps {
  page: number;
  onChange(argOne: any, value: number): void;
  count: number;
}

const Paginator = ({ page, onChange, count }: PaginatorProps) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        sx={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}
        size={"large"}
        page={page}
        onChange={onChange}
      />
    </Stack>
  );
};

export default Paginator;
