import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/api/user", (req, res, ctx) => {
    const userId = req.url.searchParams.get("id");

    if (userId === "1") {
      return res(
        ctx.status(200),
        ctx.json({
          name: "John Doe",
          email: "john.doe@example.com",
          age: 30,
        })
      );
    } else {
      return res(ctx.status(404), ctx.json({ error: "User not found" }));
    }
  }),
];
