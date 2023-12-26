import { Fragment } from "react";
import { SessionProvider } from "next-auth/react";

import MainNavigation from "./main-navigation";

function Layout(props) {
  return (
    <Fragment>
      <SessionProvider>
        <MainNavigation />
        <main>{props.children}</main>
      </SessionProvider>
    </Fragment>
  );
}

export default Layout;
