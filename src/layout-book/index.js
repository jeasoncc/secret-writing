import HeaderComponent from "src/components/Header/Header.svelte";
import SidebarComponent from "src/components/Sidebar/Sidebar.svelte";
import Foot from "src/component-foot/ComponentFoot.svelte";
import Router from "svelte-spa-router";
import Content from "carbon-components-svelte/src/UIShell/Content.svelte";
export { HeaderComponent, SidebarComponent, Foot, Router, Content };
export const items = require("./items.json");
