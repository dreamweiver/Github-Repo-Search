import React from "react";
import { StyledTableRow, StyledTableCell } from "./CustomTableRowCell";
import renderer from "react-test-renderer";

it("Custom Table Row renders correctly", () => {
  const unique = "unique";
  const tree = renderer
    .create(<StyledTableRow key={unique}></StyledTableRow>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <tr
      className="MuiTableRow-root WithStyles(ForwardRef(TableRow))-root-1"
    />
  `);
});

it("Custom Table cell renders correctly", () => {
  const tree = renderer
    .create(<StyledTableCell align="right"></StyledTableCell>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
        <td
          aria-sort={null}
          className="MuiTableCell-root MuiTableCell-alignRight"
        />
    `);
});
