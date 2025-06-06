import Content from "./content/index";
import { registerCustomElement } from "ojs/ojvcomponent";
import "preact";
import { useEffect } from "preact/hooks";
import Context = require("ojs/ojcontext");

type Props = {
  appName: string;
  userLogin: string;
};

export const App = registerCustomElement("app-root", (props: Props) => {
  props.appName = "Authorization Check";
  props.userLogin = "some.person@oracle.com";

  useEffect(() => {
    Context.getPageContext().getBusyContext().applicationBootstrapComplete();
  }, []);

  return (
    <div id="appContainer" class="oj-web-applayout-page">
      <Content />
    </div>
  );
});
