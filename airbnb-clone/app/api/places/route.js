export async function GET() {
    const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
    const exploreData = await res.json();

    return Response.json(exploreData);
}