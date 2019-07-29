import React from "react";
import Store from "./../Stores/Store";
import { Provider } from "react-redux";
import SearchForm from "./SearchForm";
import renderer from "react-test-renderer";

it("SearchForm component renders correctly - when github repo data fetch is not happening", () => {
  const onSubmitHandler = () => {};
  const isLoading = false;

  const tree = renderer
    .create(
      <Provider store={Store}>
        <SearchForm onSubmit={onSubmitHandler} isSubmitting={isLoading} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
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
                    className="makeStyles-customTextFld-2"
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
    `);
});

it("SearchForm component renders correctly - when github api fetch is in progress", () => {
  const onSubmitHandler = () => {};
  // submit button to be disabled,
  // preventing user access until async all is not completed
  const isLoading = true;

  const tree = renderer
    .create(
      <Provider store={Store}>
        <SearchForm onSubmit={onSubmitHandler} isSubmitting={isLoading} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
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
                className="makeStyles-customTextFld-2"
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
  `);
});
