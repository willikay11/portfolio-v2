
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const body = await request.json().catch(() => ({}));
		const message = typeof body === "object" && body !== null ? (body.message ?? null) : null;

		// Minimal handler: echo received message or return a default reply.
		const reply = message ? `Echo: ${String(message)}` : "Hello from /api/chat";

		return NextResponse.json({ reply });
	} catch (err) {
		return NextResponse.json({ error: "Failed to handle request" }, { status: 500 });
	}
}
