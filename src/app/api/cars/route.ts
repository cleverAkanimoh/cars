import { NextResponse } from "next/server";
import cars from "@/cars.json"

// export const dynamic = "force-dynamic"

export async function GET() {
  
  return NextResponse.json( {cars} );
}