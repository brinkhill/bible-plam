import { NextRequest, NextResponse } from 'next/server'
import passages from './passages.json';


export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const url = new URL(req.url, `http://${req.headers.get("host") ?? ""}`);
    const dateParam: string | null = url.searchParams.get("date");
    const result = await findPassageByDate(dateParam);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching passage:", error);

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "content-type": "application/json",
      },
    });
  }
}

function findPassageByDate(date: string | null) {
  if (date == null) {
    //find today's date and set date to today's date....
    // Get today's date
    const today: Date = new Date();
    // Get the formatted date as YYYY-MM-DD
    date = today.toISOString().split("T")[0];
  }

  const passage = passages.find((item) => item.Date === date);

  // Return the date and passage if found, otherwise return null
  return passage ? { Date: passage.Date, Passage: passage.Passage } : null;
}
