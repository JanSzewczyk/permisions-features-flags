export async function POST() {
  return Response.json({ message: "The route is working" });
}

// curl -H 'Content-Type: application/json' -X POST http://localhost:3000/api/webhooks/test
