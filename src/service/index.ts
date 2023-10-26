import { clone } from "lodash-es";
import { HttpRequest } from "./request";
import { interceptors } from "./interCeptors";

const http = new HttpRequest({ baseURL: "/api", interceptors: clone(interceptors) });

export default http;
