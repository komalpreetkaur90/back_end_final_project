import { Request, Response } from "express";
import * as membersController from "../api/v1/controllers/members.controller";
import * as membersService from "../api/v1/services/membersService";

jest.mock("../api/v1/services/members.service");

describe("Members Controller", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();

    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jsonMock,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("getMembers returns list of members", async () => {
    // Mock service response
    (membersService.getMembersService as jest.Mock).mockResolvedValue([
      { id: "1", name: "John Doe", email: "john@example.com" },
    ]);

    await membersController.getMembers(req as Request, res as Response);

    expect(jsonMock).toHaveBeenCalledWith({
      success: true,
      data: [{ id: "1", name: "John Doe", email: "john@example.com" }],
    });
  });

  test("createMember adds a member", async () => {
    req.body = { name: "Alice", email: "alice@example.com" };

    (membersService.createMemberService as jest.Mock).mockResolvedValue(
      "mock-id"
    );

    await membersController.createMember(req as Request, res as Response);

    expect(jsonMock).toHaveBeenCalledWith({
      success: true,
      message: "Member created",
      id: "mock-id",
    });
  });
});
