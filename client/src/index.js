import React from "react";

const exports = {};

const __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        // eslint-disable-next-line
        if (k2 === undefined) k2 = k;
        let desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get() {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        // eslint-disable-next-line
        if (k2 === undefined) k2 = k;
        // eslint-disable-next-line
        o[k2] = m[k];
      });
const __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        // eslint-disable-next-line
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        // eslint-disable-next-line
        o.default = v;
      });
const __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    const result = {};
    if (mod != null)
      for (const k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
require("react-app-polyfill/ie9");
require("react-app-polyfill/ie11");
require("core-js");
// eslint-disable-next-line
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
require("./index.css");
const App_1 = __importDefault(require("./components/App"));
const serviceWorker = __importStar(require("./serviceWorker"));
const react_router_dom_1 = require("react-router-dom");
const _reducers_1 = __importDefault(require("./_reducers"));
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const redux_promise_1 = __importDefault(require("redux-promise"));
const redux_thunk_1 = __importDefault(require("redux-thunk"));

const createStoreWithMiddleware = (0, redux_1.applyMiddleware)(
  redux_promise_1.default,
  redux_thunk_1.default
)(redux_1.createStore);
react_dom_1.default.render(
  <react_redux_1.Provider
    store={createStoreWithMiddleware(
      _reducers_1.default,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <react_router_dom_1.BrowserRouter>
      <App_1.default />
    </react_router_dom_1.BrowserRouter>
  </react_redux_1.Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
