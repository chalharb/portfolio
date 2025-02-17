import { NextResponse } from "next/server";

export function GET(): NextResponse {
  return NextResponse.json(
    { status: 403, error: "Access Not Allowed" },
    { status: 403 }
  );
}
