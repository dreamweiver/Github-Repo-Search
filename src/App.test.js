import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("App component renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="App"
    >
      <section
        className="home"
      >
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
                className="MuiTypography-root makeStyles-title-243 MuiTypography-h6 MuiTypography-noWrap"
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
                className="makeStyles-grow-242"
              />
            </div>
          </header>
        </div>
        <div
          className="MuiContainer-root home__cont MuiContainer-maxWidthLg"
        >
          <form
            onSubmit={[Function]}
          >
            <div
              className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-align-items-xs-center MuiGrid-justify-xs-center"
            >
              <div
                className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10"
              >
                <div>
                  <div>
                    <input
                      className="makeStyles-customTextFld-325"
                      name="searchQuery"
                      onBlur={[Function]}
                      onChange={[Function]}
                      onDragStart={[Function]}
                      onDrop={[Function]}
                      onFocus={[Function]}
                      placeholder="Type in Repository Name"
                      required={true}
                      type="text"
                      value=""
                    />
                  </div>
                </div>
              </div>
              <div
                className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2"
              >
                <button
                  className="MuiButtonBase-root MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary"
                  disabled={false}
                  onBlur={[Function]}
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
                  type="submit"
                >
                  <span
                    className="MuiButton-label"
                  >
                    Submit
                  </span>
                  <span
                    className="MuiTouchRipple-root"
                  />
                </button>
              </div>
            </div>
          </form>
          <div
            className="MuiPaper-root MuiPaper-elevation1"
          />
        </div>
        <div />
        <footer
          className="home__footer"
        >
          <div
            className="MuiContainer-root MuiContainer-maxWidthSm"
          >
            <p
              className="MuiTypography-root MuiTypography-body1"
            >
              Github Repo Directory.
            </p>
            <p
              className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
            >
              @ Copyright 
              <a
                className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorInherit"
                href="https://github.com/dreamweiver/"
                onBlur={[Function]}
                onFocus={[Function]}
              >
                dreamweiver
              </a>
            </p>
          </div>
        </footer>
      </section>
    </div>
  `);
});
