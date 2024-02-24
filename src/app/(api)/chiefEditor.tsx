export default async function chiefEditor({url}:any) {
    const res = await fetch(`${url}/chiefEditor/`, {
        cache: "force-cache",
    });
    return res.json();
}