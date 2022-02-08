import { expect } from "chai";

import { UserController } from "./user-controller";
import { results } from "inversify-express-utils";

describe("User controller", () => {
  let controller: UserController;

  beforeEach(() => {
    controller = new UserController();
  });

  describe("get", () => {
    it("should have a status code of 403", async () => {
      const response = await controller.get();

      expect(response).to.be.an.instanceof(results.JsonResult);
      expect(response.statusCode).to.equal(403);
    });
  });
});