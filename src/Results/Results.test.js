import React from "react";
import SearchResults from "./Results";
import renderer from "react-test-renderer";
import mockedRepoItems from "./../Misc/repo-items-mock.js";
import GenericHelper from "./../Helper/GenericHelper";

it("Result component renders correctly - valid items array", () => {
  const mappedRepoItems = GenericHelper.mapRepoItems(mockedRepoItems.items);

  const tree = renderer
    .create(<SearchResults data={mappedRepoItems}></SearchResults>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="MuiPaper-root MuiPaper-elevation1 makeStyles-root-1 MuiPaper-rounded"
    >
      <div
        className="makeStyles-tableWrapper-3"
      >
        <table
          className="MuiTable-root makeStyles-table-2"
        >
          <thead
            className="MuiTableHead-root"
          >
            <tr
              className="MuiTableRow-root MuiTableRow-head"
            >
              <th
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-head WithStyles(ForwardRef(TableCell))-head-39 MuiTableCell-sizeSmall"
                scope="col"
              >
                Repository Name
              </th>
              <th
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-head WithStyles(ForwardRef(TableCell))-head-39 MuiTableCell-alignRight MuiTableCell-sizeSmall"
                scope="col"
              >
                Programming Language
              </th>
              <th
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-head WithStyles(ForwardRef(TableCell))-head-39 MuiTableCell-alignRight MuiTableCell-sizeSmall"
                scope="col"
              >
                Owner
              </th>
              <th
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-head WithStyles(ForwardRef(TableCell))-head-39 MuiTableCell-alignCenter MuiTableCell-sizeSmall"
                scope="col"
              >
                Avatar
              </th>
              <th
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-head WithStyles(ForwardRef(TableCell))-head-39 MuiTableCell-alignRight MuiTableCell-sizeSmall"
                scope="col"
              >
                Stars
              </th>
            </tr>
          </thead>
          <tbody
            className="MuiTableBody-root"
          >
            <tr
              className="MuiTableRow-root WithStyles(ForwardRef(TableRow))-root-53"
            >
              <th
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-sizeSmall"
                scope="repoItem"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="git://github.com/dreamweiver/dreamSlider.git"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver/dreamSlider
                </a>
              </th>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                <div
                  className="MuiChip-root makeStyles-active-4 MuiChip-outlined"
                  onKeyDown={[Function]}
                  onKeyUp={[Function]}
                >
                  <span
                    className="MuiChip-label"
                  >
                    JavaScript
                  </span>
                </div>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="https://github.com/dreamweiver"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver
                </a>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignCenter MuiTableCell-sizeSmall"
              >
                <div
                  className="MuiAvatar-root centerAlign"
                >
                  <img
                    alt="avatar"
                    className="MuiAvatar-img"
                    src="https://avatars3.githubusercontent.com/u/2362296?v=4"
                  />
                </div>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                6
              </td>
            </tr>
            <tr
              className="MuiTableRow-root WithStyles(ForwardRef(TableRow))-root-53"
            >
              <th
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-sizeSmall"
                scope="repoItem"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="git://github.com/dreamweiver/MyLeaf.git"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver/MyLeaf
                </a>
              </th>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              />
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="https://github.com/dreamweiver"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver
                </a>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignCenter MuiTableCell-sizeSmall"
              >
                <div
                  className="MuiAvatar-root centerAlign"
                >
                  <img
                    alt="avatar"
                    className="MuiAvatar-img"
                    src="https://avatars3.githubusercontent.com/u/2362296?v=4"
                  />
                </div>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                0
              </td>
            </tr>
            <tr
              className="MuiTableRow-root WithStyles(ForwardRef(TableRow))-root-53"
            >
              <th
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-sizeSmall"
                scope="repoItem"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="git://github.com/dreamweiver/DroneForYou.git"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver/DroneForYou
                </a>
              </th>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                <div
                  className="MuiChip-root makeStyles-active-4 MuiChip-outlined"
                  onKeyDown={[Function]}
                  onKeyUp={[Function]}
                >
                  <span
                    className="MuiChip-label"
                  >
                    JavaScript
                  </span>
                </div>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="https://github.com/dreamweiver"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver
                </a>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignCenter MuiTableCell-sizeSmall"
              >
                <div
                  className="MuiAvatar-root centerAlign"
                >
                  <img
                    alt="avatar"
                    className="MuiAvatar-img"
                    src="https://avatars3.githubusercontent.com/u/2362296?v=4"
                  />
                </div>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                0
              </td>
            </tr>
            <tr
              className="MuiTableRow-root WithStyles(ForwardRef(TableRow))-root-53"
            >
              <th
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-sizeSmall"
                scope="repoItem"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="git://github.com/dreamweiver/photoframe.git"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver/photoframe
                </a>
              </th>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                <div
                  className="MuiChip-root makeStyles-active-4 MuiChip-outlined"
                  onKeyDown={[Function]}
                  onKeyUp={[Function]}
                >
                  <span
                    className="MuiChip-label"
                  >
                    PHP
                  </span>
                </div>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="https://github.com/dreamweiver"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver
                </a>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignCenter MuiTableCell-sizeSmall"
              >
                <div
                  className="MuiAvatar-root centerAlign"
                >
                  <img
                    alt="avatar"
                    className="MuiAvatar-img"
                    src="https://avatars3.githubusercontent.com/u/2362296?v=4"
                  />
                </div>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                0
              </td>
            </tr>
            <tr
              className="MuiTableRow-root WithStyles(ForwardRef(TableRow))-root-53"
            >
              <th
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-sizeSmall"
                scope="repoItem"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="git://github.com/dreamweiver/money-waster-app.git"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver/money-waster-app
                </a>
              </th>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                <div
                  className="MuiChip-root makeStyles-active-4 MuiChip-outlined"
                  onKeyDown={[Function]}
                  onKeyUp={[Function]}
                >
                  <span
                    className="MuiChip-label"
                  >
                    TypeScript
                  </span>
                </div>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="https://github.com/dreamweiver"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver
                </a>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignCenter MuiTableCell-sizeSmall"
              >
                <div
                  className="MuiAvatar-root centerAlign"
                >
                  <img
                    alt="avatar"
                    className="MuiAvatar-img"
                    src="https://avatars3.githubusercontent.com/u/2362296?v=4"
                  />
                </div>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                0
              </td>
            </tr>
            <tr
              className="MuiTableRow-root WithStyles(ForwardRef(TableRow))-root-53"
            >
              <th
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-sizeSmall"
                scope="repoItem"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="git://github.com/dreamweiver/ng-softnotify.git"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver/ng-softnotify
                </a>
              </th>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                <div
                  className="MuiChip-root makeStyles-active-4 MuiChip-outlined"
                  onKeyDown={[Function]}
                  onKeyUp={[Function]}
                >
                  <span
                    className="MuiChip-label"
                  >
                    TypeScript
                  </span>
                </div>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="https://github.com/dreamweiver"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver
                </a>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignCenter MuiTableCell-sizeSmall"
              >
                <div
                  className="MuiAvatar-root centerAlign"
                >
                  <img
                    alt="avatar"
                    className="MuiAvatar-img"
                    src="https://avatars3.githubusercontent.com/u/2362296?v=4"
                  />
                </div>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                1
              </td>
            </tr>
            <tr
              className="MuiTableRow-root WithStyles(ForwardRef(TableRow))-root-53"
            >
              <th
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-sizeSmall"
                scope="repoItem"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="git://github.com/dreamweiver/react-redux_registration_form.git"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver/react-redux_registration_form
                </a>
              </th>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                <div
                  className="MuiChip-root makeStyles-active-4 MuiChip-outlined"
                  onKeyDown={[Function]}
                  onKeyUp={[Function]}
                >
                  <span
                    className="MuiChip-label"
                  >
                    JavaScript
                  </span>
                </div>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="https://github.com/dreamweiver"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver
                </a>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignCenter MuiTableCell-sizeSmall"
              >
                <div
                  className="MuiAvatar-root centerAlign"
                >
                  <img
                    alt="avatar"
                    className="MuiAvatar-img"
                    src="https://avatars3.githubusercontent.com/u/2362296?v=4"
                  />
                </div>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                0
              </td>
            </tr>
            <tr
              className="MuiTableRow-root WithStyles(ForwardRef(TableRow))-root-53"
            >
              <th
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-sizeSmall"
                scope="repoItem"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="git://github.com/dreamweiver/react-room-allocation-optimizer.git"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver/react-room-allocation-optimizer
                </a>
              </th>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                <div
                  className="MuiChip-root makeStyles-active-4 MuiChip-outlined"
                  onKeyDown={[Function]}
                  onKeyUp={[Function]}
                >
                  <span
                    className="MuiChip-label"
                  >
                    JavaScript
                  </span>
                </div>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="https://github.com/dreamweiver"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver
                </a>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignCenter MuiTableCell-sizeSmall"
              >
                <div
                  className="MuiAvatar-root centerAlign"
                >
                  <img
                    alt="avatar"
                    className="MuiAvatar-img"
                    src="https://avatars3.githubusercontent.com/u/2362296?v=4"
                  />
                </div>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                1
              </td>
            </tr>
            <tr
              className="MuiTableRow-root WithStyles(ForwardRef(TableRow))-root-53"
            >
              <th
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-sizeSmall"
                scope="repoItem"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="git://github.com/dreamweiver/react-web-search-form.git"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver/react-web-search-form
                </a>
              </th>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                <div
                  className="MuiChip-root makeStyles-active-4 MuiChip-outlined"
                  onKeyDown={[Function]}
                  onKeyUp={[Function]}
                >
                  <span
                    className="MuiChip-label"
                  >
                    JavaScript
                  </span>
                </div>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="https://github.com/dreamweiver"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver
                </a>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignCenter MuiTableCell-sizeSmall"
              >
                <div
                  className="MuiAvatar-root centerAlign"
                >
                  <img
                    alt="avatar"
                    className="MuiAvatar-img"
                    src="https://avatars3.githubusercontent.com/u/2362296?v=4"
                  />
                </div>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                0
              </td>
            </tr>
            <tr
              className="MuiTableRow-root WithStyles(ForwardRef(TableRow))-root-53"
            >
              <th
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-sizeSmall"
                scope="repoItem"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="git://github.com/dreamweiver/plunker_Contacts-Filter-using-Angularjs1.4x.git"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver/plunker_Contacts-Filter-using-Angularjs1.4x
                </a>
              </th>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                <div
                  className="MuiChip-root makeStyles-active-4 MuiChip-outlined"
                  onKeyDown={[Function]}
                  onKeyUp={[Function]}
                >
                  <span
                    className="MuiChip-label"
                  >
                    JavaScript
                  </span>
                </div>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                <a
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                  href="https://github.com/dreamweiver"
                  onBlur={[Function]}
                  onFocus={[Function]}
                  rel="noopener"
                  target="_blank"
                >
                  dreamweiver
                </a>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignCenter MuiTableCell-sizeSmall"
              >
                <div
                  className="MuiAvatar-root centerAlign"
                >
                  <img
                    alt="avatar"
                    className="MuiAvatar-img"
                    src="https://avatars3.githubusercontent.com/u/2362296?v=4"
                  />
                </div>
              </td>
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTableCell-body WithStyles(ForwardRef(TableCell))-body-40 MuiTableCell-alignRight MuiTableCell-sizeSmall"
              >
                0
              </td>
            </tr>
          </tbody>
          <tfoot
            className="MuiTableFooter-root"
          >
            <tr
              className="MuiTableRow-root MuiTableRow-footer"
            >
              <td
                aria-sort={null}
                className="MuiTableCell-root MuiTablePagination-root MuiTableCell-footer MuiTableCell-sizeSmall"
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
                    1-10 of 13
                  </span>
                  <div
                    className="makeStyles-root-138"
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
        </table>
      </div>
    </div>
  `);
});

it("Result component renders correctly - empty items array", () => {
  const mappedRepoItems = []; // passing empty items array

  const tree = renderer
    .create(<SearchResults data={mappedRepoItems}></SearchResults>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`null`);
});
