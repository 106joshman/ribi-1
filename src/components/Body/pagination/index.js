import { Pagination, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";

export const Paginate = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Stack
      spacing={2}
      sx={{ p: 3 }}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Pagination
        count={10}
        color="secondary"
        siblingCount={0}
        page={page}
        onChange={handleChange}
        size="large"
        alignItems="center"
      />
    </Stack>
  );
};

  {/* <Stack
              spacing={2}
              sx={{ p: 3 }}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Pagination
                sx={{ size: "small" }}
                md={{ size: "large" }}
                count={10}
                color="secondary"
                siblingCount={0}
                page={currentPage}
                onChange={handleChange}
                pageSize={10}
                alignItems="center"
              />
            </Stack> */}