import React from "react";
import HeaderAppBar from "./HeaderAppBar";
import renderer from "react-test-renderer";
import appIcon from "./../Home/appIcon.png";

it("HeaderAppBar renders correctly", () => {
  const pageTitle = "Github Repo Directory";
  const tree = renderer
    .create(<HeaderAppBar title={pageTitle} icon={appIcon}></HeaderAppBar>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="header-app-bar"
    >
      <header
        className="MuiPaper-root MuiPaper-elevation4 MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
      >
        <div
          className="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters"
        >
          <h6
            className="MuiTypography-root makeStyles-title-2 MuiTypography-h6 MuiTypography-noWrap"
          >
            Github Repo Directory
          </h6>
          <div
            className="MuiAvatar-root margin5"
          >
            <img
              alt="drone"
              className="MuiAvatar-img"
              src="appIcon.png"
            />
          </div>
          <div
            className="makeStyles-grow-1"
          />
        </div>
      </header>
    </div>
  `);
});
