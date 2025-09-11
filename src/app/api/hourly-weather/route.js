export async function POST(request) {
    const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const { city } = await request.json();

    const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const weatherResponse = await weatherRes.json();

    if (!weatherRes.ok) {
        return new Response(
            JSON.stringify({
                error: weatherResponse.message || "City not found",
            }),
            { status: weatherRes.status }
        );
    }

    return Response.json(weatherResponse);
}
