import React from "react";
import Home from "./Home";
import renderer from "react-test-renderer";

it("Home component renders correctly", () => {
  const tree = renderer.create(<Home></Home>).toJSON();
  expect(tree).toMatchInlineSnapshot(`
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
                        className="makeStyles-customTextFld-84"
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
    `);
});

it("Home component renders correctly - invoking dismiss Notification", () => {
  const tree = renderer.create(<Home></Home>);

  const event = {};

  tree.getInstance().dismissNotification(event);
  expect(tree.toJSON()).toMatchInlineSnapshot(`
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
                    className="makeStyles-customTextFld-84"
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
  `);
});

it("Home component renders correctly - invoking dismiss Notification", () => {
  const tree = renderer.create(<Home></Home>);
  const values = {
    searchQuery: "dreamweiver"
  };

  tree.getInstance().showResults(values);
  expect(tree.toJSON()).toMatchInlineSnapshot(`
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
                    className="makeStyles-customTextFld-84"
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
                className="MuiButtonBase-root MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled Mui-disabled"
                disabled={true}
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
                tabIndex={-1}
                type="submit"
              >
                <span
                  className="MuiButton-label"
                >
                  Submit
                </span>
              </button>
            </div>
          </div>
        </form>
        <div>
          <div
            className="MuiCircularProgress-root WithStyles(ForwardRef(CircularProgress))-root-242 MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate"
            role="progressbar"
            style={
              Object {
                "height": 30,
                "width": 30,
              }
            }
          >
            <svg
              className="MuiCircularProgress-svg"
              viewBox="22 22 44 44"
            >
              <circle
                className="MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate"
                cx={44}
                cy={44}
                fill="none"
                r={19.5}
                strokeWidth={5}
                style={Object {}}
              />
            </svg>
          </div>
          <div
            className="MuiLinearProgress-root MuiLinearProgress-colorPrimary WithStyles(ForwardRef(LinearProgress))-colorPrimary-255 MuiLinearProgress-indeterminate"
            role="progressbar"
          >
            <div
              className="MuiLinearProgress-bar MuiLinearProgress-bar1Indeterminate MuiLinearProgress-barColorPrimary WithStyles(ForwardRef(LinearProgress))-barColorPrimary-256"
              style={Object {}}
            />
            <div
              className="MuiLinearProgress-bar MuiLinearProgress-bar2Indeterminate MuiLinearProgress-barColorPrimary WithStyles(ForwardRef(LinearProgress))-barColorPrimary-256"
              style={Object {}}
            />
          </div>
        </div>
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
  `);
});
