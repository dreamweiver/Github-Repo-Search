import React from "react";
import CustomTablePagination from "./CustomTablePagination";
import renderer from "react-test-renderer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

it("Custom Table Pagination renders correctly", () => {
  const handleChangeRowsPerPage = () => {};
  const handleChangePage = () => {};
  const totalCount = 12;
  const rowsPerPage = 10;
  const page = 0;

  const tree = renderer
    .create(
      <TableFooter>
        <TableRow>
          <TablePagination
            colSpan={5}
            count={totalCount}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: { "aria-label": "rows per page" },
              native: true
            }}
            rowsPerPageOptions={[]}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            ActionsComponent={CustomTablePagination}
          />
        </TableRow>
      </TableFooter>
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
        <tfoot
          className="MuiTableFooter-root"
        >
          <tr
            className="MuiTableRow-root MuiTableRow-footer"
          >
            <td
              aria-sort={null}
              className="MuiTableCell-root MuiTablePagination-root MuiTableCell-footer"
              colSpan={5}
            >
              <div
                className="MuiToolbar-root MuiToolbar-regular MuiTablePagination-toolbar MuiToolbar-gutters"
              >
                <div
                  className="MuiTablePagination-spacer"
                />
                <span
                  className="MuiTypography-root MuiTablePagination-caption MuiTypography-caption MuiTypography-colorInherit"
                >
                  1-10 of 12
                </span>
                <div
                  className="makeStyles-root-62"
                >
                  <button
                    aria-label="first page"
                    className="MuiButtonBase-root MuiIconButton-root Mui-disabled Mui-disabled"
                    disabled={true}
                    onBlur={[Function]}
                    onClick={[Function]}
                    onDragLeave={[Function]}
                    onFocus={[Function]}
                    onKeyDown={[Function]}
                    onKeyUp={[Function]}
                    onMouseDown={[Function]}
                    onMouseLeave={[Function]}
                    onMouseUp={[Function]}
                    onTouchEnd={[Function]}
                    onTouchMove={[Function]}
                    onTouchStart={[Function]}
                    tabIndex={-1}
                    type="button"
                  >
                    <span
                      className="MuiIconButton-label"
                    >
                      <svg
                        aria-hidden="true"
                        className="MuiSvgIcon-root"
                        focusable="false"
                        role="presentation"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
                        />
                        <path
                          d="M24 24H0V0h24v24z"
                          fill="none"
                        />
                      </svg>
                    </span>
                  </button>
                  <button
                    aria-label="previous page"
                    className="MuiButtonBase-root MuiIconButton-root Mui-disabled Mui-disabled"
                    disabled={true}
                    onBlur={[Function]}
                    onClick={[Function]}
                    onDragLeave={[Function]}
                    onFocus={[Function]}
                    onKeyDown={[Function]}
                    onKeyUp={[Function]}
                    onMouseDown={[Function]}
                    onMouseLeave={[Function]}
                    onMouseUp={[Function]}
                    onTouchEnd={[Function]}
                    onTouchMove={[Function]}
                    onTouchStart={[Function]}
                    tabIndex={-1}
                    type="button"
                  >
                    <span
                      className="MuiIconButton-label"
                    >
                      <svg
                        aria-hidden="true"
                        className="MuiSvgIcon-root"
                        focusable="false"
                        role="presentation"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
                        />
                        <path
                          d="M0 0h24v24H0V0z"
                          fill="none"
                        />
                      </svg>
                    </span>
                  </button>
                  <button
                    aria-label="next page"
                    className="MuiButtonBase-root MuiIconButton-root"
                    disabled={false}
                    onBlur={[Function]}
                    onClick={[Function]}
                    onDragLeave={[Function]}
                    onFocus={[Function]}
                    onKeyDown={[Function]}
                    onKeyUp={[Function]}
                    onMouseDown={[Function]}
                    onMouseLeave={[Function]}
                    onMouseUp={[Function]}
                    onTouchEnd={[Function]}
                    onTouchMove={[Function]}
                    onTouchStart={[Function]}
                    tabIndex={0}
                    type="button"
                  >
                    <span
                      className="MuiIconButton-label"
                    >
                      <svg
                        aria-hidden="true"
                        className="MuiSvgIcon-root"
                        focusable="false"
                        role="presentation"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                        />
                        <path
                          d="M0 0h24v24H0V0z"
                          fill="none"
                        />
                      </svg>
                    </span>
                  </button>
                  <button
                    aria-label="last page"
                    className="MuiButtonBase-root MuiIconButton-root"
                    disabled={false}
                    onBlur={[Function]}
                    onClick={[Function]}
                    onDragLeave={[Function]}
                    onFocus={[Function]}
                    onKeyDown={[Function]}
                    onKeyUp={[Function]}
                    onMouseDown={[Function]}
                    onMouseLeave={[Function]}
                    onMouseUp={[Function]}
                    onTouchEnd={[Function]}
                    onTouchMove={[Function]}
                    onTouchStart={[Function]}
                    tabIndex={0}
                    type="button"
                  >
                    <span
                      className="MuiIconButton-label"
                    >
                      <svg
                        aria-hidden="true"
                        className="MuiSvgIcon-root"
                        focusable="false"
                        role="presentation"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
                        />
                        <path
                          d="M0 0h24v24H0V0z"
                          fill="none"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
    `);
});

