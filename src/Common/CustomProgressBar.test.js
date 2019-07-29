import React from "react";
import {
  ColorCircularProgress,
  ColorLinearProgress
} from "./CustomProgressBar";
import renderer from "react-test-renderer";

it("Custom Progress Bar - ColorCircularProgress renders correctly", () => {
  const tree = renderer
    .create(<ColorCircularProgress size={30} thickness={5} />)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="MuiCircularProgress-root WithStyles(ForwardRef(CircularProgress))-root-1 MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate"
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
  `);
});

it("Custom Progress Bar - ColorLinearProgress renders correctly", () => {
  const tree = renderer.create(<ColorLinearProgress />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="MuiLinearProgress-root MuiLinearProgress-colorPrimary WithStyles(ForwardRef(LinearProgress))-colorPrimary-14 MuiLinearProgress-indeterminate"
      role="progressbar"
    >
      <div
        className="MuiLinearProgress-bar MuiLinearProgress-bar1Indeterminate MuiLinearProgress-barColorPrimary WithStyles(ForwardRef(LinearProgress))-barColorPrimary-15"
        style={Object {}}
      />
      <div
        className="MuiLinearProgress-bar MuiLinearProgress-bar2Indeterminate MuiLinearProgress-barColorPrimary WithStyles(ForwardRef(LinearProgress))-barColorPrimary-15"
        style={Object {}}
      />
    </div>
  `);
});
