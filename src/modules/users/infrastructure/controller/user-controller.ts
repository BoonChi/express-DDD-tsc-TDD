import {
  controller, httpGet, BaseHttpController
} from "inversify-express-utils";

@controller("/")
export class UserController extends BaseHttpController {
  @httpGet("/")
  public async get() {
    const content = { name: "chi hum" };
    const statusCode = 403;

    return this.json(content, statusCode);
  }
}