import { loginResponse } from "@/responses/loginResponse";
import { createToken } from "@/utils/jwt";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

// Zod validation
const loginSchema = z.object({
  email: z
    .email({
      message: "Email is required",
    })
    .min(1, { message: "Email is required" }),
  password: z
    .string({
      message: "Password is required",
    })
    .min(1, { message: "Password is required" }),
});

const registeredUser = [
  {
    id: "0",
    email: "admin@example.com",
    password: "admin123",
  },
];

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    const parsedData = loginSchema.safeParse(data);

    if (!parsedData.success) {
      throw parsedData.error;
    }

    const { email, password } = parsedData.data;

    const foundUser = registeredUser.find((user) => user.email === email);
    if (!foundUser || password !== foundUser.password) {
      return NextResponse.json<loginResponse>(
        {
          code: 401,
          error: "Invalid email or password!",
        },
        { status: 401 }
      );
    }

    // jwt token
    const payload = {
      id: foundUser.id,
      email: foundUser.email,
    };
    const token = createToken(payload);

    return NextResponse.json({
      code: 200,
      message: "Succefully logged in",
      access_token: token,
    });
  } catch (err) {
    console.error(err);

    if (err instanceof z.ZodError) {
      const errMessage = err.issues[0].message;

      return NextResponse.json<loginResponse>(
        {
          code: 400,
          error: `${errMessage}`,
        },
        {
          status: 400,
        }
      );
    }

    // Default error
    return NextResponse.json<loginResponse>(
      {
        code: 500,
        error: "Internal Server Error!",
      },
      {
        status: 500,
      }
    );
  }
};
