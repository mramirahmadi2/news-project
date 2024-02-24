export default async function specialOffer({url}:any) {
    const res = await fetch(`${url}/specialOffer/`, {
        cache: "force-cache",
    });
    return res.json();
}