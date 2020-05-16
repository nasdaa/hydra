(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{170:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var i=t(1),a=t(9),o=(t(0),t(227)),r={id:"nesting",title:"Nesting configs"},c={id:"tutorials/structured_config/nesting",title:"Nesting configs",description:"Configs can be nested using several different methods.",source:"@site/docs/tutorials/structured_config/2_nesting_configs.md",permalink:"/docs/next/tutorials/structured_config/nesting",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/structured_config/2_nesting_configs.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1589597074,sidebar:"Docs",previous:{title:"Minimal example",permalink:"/docs/next/tutorials/structured_config/minimal_example"},next:{title:"Config groups",permalink:"/docs/next/tutorials/structured_config/config_groups"}},s=[{value:"Nesting using a dataclass definition",id:"nesting-using-a-dataclass-definition",children:[]},{value:"Nesting by specifying a package",id:"nesting-by-specifying-a-package",children:[]},{value:"Nesting by creating an ad-hoc config node",id:"nesting-by-creating-an-ad-hoc-config-node",children:[]}],p={rightToc:s};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Configs can be nested using several different methods."),Object(o.b)("h3",{id:"nesting-using-a-dataclass-definition"},"Nesting using a dataclass definition"),Object(o.b)("p",null,"This is the preferred approach; use it when possible.\nThere are two things of note in this example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A top level ",Object(o.b)("inlineCode",{parentName:"li"},"MyConfig")," class defined and stored in the ",Object(o.b)("inlineCode",{parentName:"li"},"ConfigStore")),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"cfg")," object in ",Object(o.b)("inlineCode",{parentName:"li"},"my_app")," is annotated as the top level ",Object(o.b)("inlineCode",{parentName:"li"},"MyConfig")," class, providing static type safety for\nthe entire configuration tree\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'@dataclass\nclass MySQLConfig:\n    host: str = "localhost"\n    port: int = 3306\n\n@dataclass\nclass MyConfig:\n    db: MySQLConfig = MySQLConfig()\n    verbose: bool = True\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=MyConfig)\n\n@hydra.main(config_name="config")\ndef my_app(cfg: MyConfig) -> None:\n    # Python knows that the type of cfg.db is MySQLConfig without any additional hints\n    print(f"Host: {cfg.db.host}, port: {cfg.db.port}")\n\nif __name__ == "__main__":\n    my_app()\n')),Object(o.b)("h3",{id:"nesting-by-specifying-a-package"},"Nesting by specifying a package"),Object(o.b)("p",null,"If for some reason you do not want to have a top level config class, you can still place MySQLConfig\nin a specific package in the final configuration object. To do that, use the ",Object(o.b)("inlineCode",{parentName:"p"},"package")," parameter to specify the package.\nYou can use dot-notation to create multiple parent nodes as needed (E.G. ",Object(o.b)("inlineCode",{parentName:"p"},'path="foo.bar.baz"'),").\nBy default, the package parameter is ",Object(o.b)("inlineCode",{parentName:"p"},"_group_"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'@dataclass\nclass MySQLConfig:\n    ...\n\ncfg_store = ConfigStore.instance()\ncfg_store.store(name="config", node=MySQLConfig, package="db")\n\n@hydra.main(config_name="config")\ndef my_app(cfg: DictConfig) -> None:\n    # mypy does not know the type of cfg.db.\n    # You can optionally help it with a hint to get static type checking.\n    db: MySQLConfig = cfg.db\n    print(f"Host: {db.host}, port: {db.port}")\n')),Object(o.b)("h3",{id:"nesting-by-creating-an-ad-hoc-config-node"},"Nesting by creating an ad-hoc config node"),Object(o.b)("p",null,"Ad-hoc config nodes can be created using Dictionaries.  While this\nallows great flexibility, it offers reduced type safety."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'cfg_store.store(\n    name="config",\n    node={\n        "src": MySQLConfig(host="localhost"),\n        "dst": MySQLConfig(host="example.com"),\n    },\n)\n\n\n@hydra.main(config_name="config")\ndef my_app(cfg: DictConfig) -> None:\n    print(f"Copying {cfg.src.host}:{cfg.src.port} to {cfg.dst.host}:{cfg.dst.port}")\n')))}l.isMDXComponent=!0},227:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return u}));var i=t(0),a=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},f=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(i.forwardRef)((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(t),d=i,u=f["".concat(r,".").concat(d)]||f[d]||g[d]||o;return t?a.a.createElement(u,c({ref:n},p,{components:t})):a.a.createElement(u,c({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var p=2;p<o;p++)r[p]=t[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);