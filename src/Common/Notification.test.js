import React from "react";
import NotificationBar from "./Notification";
import renderer from "react-test-renderer";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createMount } from "@material-ui/core/test-utils";

configure({ adapter: new Adapter() });

it("Custom Notification bar renders correctly- success type", () => {
  const dismissNotification = () => {};

  const variant = "success";
  const message = "snackbar succes notification";
  const showNotification = true;
  const notificationDimissTime = 3000;

  const wrapper = createMount()(
    <NotificationBar
      variant={variant}
      msg={message}
      showNotification={showNotification}
      dismissAfter={notificationDimissTime}
      onDimiss={dismissNotification}
    ></NotificationBar>
  );
  expect(wrapper.html()).toMatchInlineSnapshot(
    `"<div><div class=\\"MuiSnackbar-root MuiSnackbar-anchorOriginBottomCenter\\"><div class=\\"MuiTypography-root MuiPaper-root MuiPaper-elevation6 MuiSnackbarContent-root makeStyles-success-1 MuiTypography-body2\\" role=\\"alertdialog\\" aria-describedby=\\"client-snackbar\\" style=\\"opacity: 1; transform: scale(1, 1); transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\" direction=\\"up\\"><div class=\\"MuiSnackbarContent-message\\"><span id=\\"client-snackbar\\" class=\\"makeStyles-message-7\\"><span class=\\"material-icons MuiIcon-root makeStyles-icon-5 makeStyles-iconVariant-6\\" aria-hidden=\\"true\\"></span>snackbar succes notification</span></div><div class=\\"MuiSnackbarContent-action\\"><button class=\\"MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit\\" tabindex=\\"0\\" type=\\"button\\" aria-label=\\"Close\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root makeStyles-icon-5\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" role=\\"presentation\\"><path d=\\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button></div></div></div></div>"`
  );
});

it("Custom Notification bar renders correctly - error type", () => {
  const dismissNotification = () => {};

  const variant = "error";
  const message = "snackbar error notification";
  const showNotification = true;
  const notificationDimissTime = 3000;

  const wrapper = createMount()(
    <NotificationBar
      variant={variant}
      msg={message}
      showNotification={showNotification}
      dismissAfter={notificationDimissTime}
      onDimiss={dismissNotification}
    ></NotificationBar>
  );
  expect(wrapper.html()).toMatchInlineSnapshot(
    `"<div><div class=\\"MuiSnackbar-root MuiSnackbar-anchorOriginBottomCenter\\"><div class=\\"MuiTypography-root MuiPaper-root MuiPaper-elevation6 MuiSnackbarContent-root makeStyles-error-2 MuiTypography-body2\\" role=\\"alertdialog\\" aria-describedby=\\"client-snackbar\\" style=\\"opacity: 1; transform: scale(1, 1); transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\" direction=\\"up\\"><div class=\\"MuiSnackbarContent-message\\"><span id=\\"client-snackbar\\" class=\\"makeStyles-message-7\\"><span class=\\"material-icons MuiIcon-root makeStyles-icon-5 makeStyles-iconVariant-6\\" aria-hidden=\\"true\\"></span>snackbar error notification</span></div><div class=\\"MuiSnackbarContent-action\\"><button class=\\"MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit\\" tabindex=\\"0\\" type=\\"button\\" aria-label=\\"Close\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root makeStyles-icon-5\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" role=\\"presentation\\"><path d=\\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button></div></div></div></div>"`
  );
});

it("Custom Notification bar renders correctly - error type", () => {
  const dismissNotification = () => {};

  const variant = "warning";
  const message = "snackbar warning notification";
  const showNotification = true;
  const notificationDimissTime = 3000;

  const wrapper = createMount()(
    <NotificationBar
      variant={variant}
      msg={message}
      showNotification={showNotification}
      dismissAfter={notificationDimissTime}
      onDimiss={dismissNotification}
    ></NotificationBar>
  );
  expect(wrapper.html()).toMatchInlineSnapshot(
    `"<div><div class=\\"MuiSnackbar-root MuiSnackbar-anchorOriginBottomCenter\\"><div class=\\"MuiTypography-root MuiPaper-root MuiPaper-elevation6 MuiSnackbarContent-root makeStyles-warning-4 MuiTypography-body2\\" role=\\"alertdialog\\" aria-describedby=\\"client-snackbar\\" style=\\"opacity: 1; transform: scale(1, 1); transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\" direction=\\"up\\"><div class=\\"MuiSnackbarContent-message\\"><span id=\\"client-snackbar\\" class=\\"makeStyles-message-7\\"><span class=\\"material-icons MuiIcon-root makeStyles-icon-5 makeStyles-iconVariant-6\\" aria-hidden=\\"true\\"></span>snackbar warning notification</span></div><div class=\\"MuiSnackbarContent-action\\"><button class=\\"MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit\\" tabindex=\\"0\\" type=\\"button\\" aria-label=\\"Close\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root makeStyles-icon-5\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" role=\\"presentation\\"><path d=\\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button></div></div></div></div>"`
  );
});

it("Custom Notification bar renders correctly - error type", () => {
  const dismissNotification = () => {};

  const variant = "info";
  const message = "snackbar information notification";
  const showNotification = true;
  const notificationDimissTime = 3000;

  const wrapper = createMount()(
    <NotificationBar
      variant={variant}
      msg={message}
      showNotification={showNotification}
      dismissAfter={notificationDimissTime}
      onDimiss={dismissNotification}
    ></NotificationBar>
  );
  expect(wrapper.html()).toMatchInlineSnapshot(
    `"<div><div class=\\"MuiSnackbar-root MuiSnackbar-anchorOriginBottomCenter\\"><div class=\\"MuiTypography-root MuiPaper-root MuiPaper-elevation6 MuiSnackbarContent-root makeStyles-info-3 MuiTypography-body2\\" role=\\"alertdialog\\" aria-describedby=\\"client-snackbar\\" style=\\"opacity: 1; transform: scale(1, 1); transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\" direction=\\"up\\"><div class=\\"MuiSnackbarContent-message\\"><span id=\\"client-snackbar\\" class=\\"makeStyles-message-7\\"><span class=\\"material-icons MuiIcon-root makeStyles-icon-5 makeStyles-iconVariant-6\\" aria-hidden=\\"true\\"></span>snackbar information notification</span></div><div class=\\"MuiSnackbarContent-action\\"><button class=\\"MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit\\" tabindex=\\"0\\" type=\\"button\\" aria-label=\\"Close\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root makeStyles-icon-5\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" role=\\"presentation\\"><path d=\\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button></div></div></div></div>"`
  );
});
