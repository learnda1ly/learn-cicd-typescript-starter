import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("authentication", () => {
  test("when authentication header is missing", () => {
    const header = {};
    expect(getAPIKey(header)).toBeNull();
  });
  test("when authentication header is imporoperly formed", () => {
    const header = {
      authentication: "apikey 1234",
    };
    expect(getAPIKey(header)).toBeNull();
  });
});
