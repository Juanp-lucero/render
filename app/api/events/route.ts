import { NextResponse } from "next/server";
import { events } from "../../../lib/events";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const search = searchParams.get("search")?.toLowerCase();
    const category = searchParams.get("category");

    let filteredEvents = events;

    if (search) {
      filteredEvents = filteredEvents.filter((event) => {
        return (
          event.title.toLowerCase().includes(search) ||
          event.description.toLowerCase().includes(search)
        );
      });
    }

    if (category && category !== "Todos") {
      filteredEvents = filteredEvents.filter((event) => {
        return event.category === category;
      });
    }

    return NextResponse.json({
      success: true,
      total: filteredEvents.length,
      events: filteredEvents,
    });
  } catch (error) {
    console.error("Error al obtener los eventos:", error);

    return NextResponse.json(
      {
        success: false,
        message: "No se pudieron obtener los eventos",
      },
      {
        status: 500,
      }
    );
  }
}