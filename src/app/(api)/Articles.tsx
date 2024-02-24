export default async function Articles({url}:any) {
    const res = await fetch(`${url}/Articles`, {
      cache: "force-cache",
    });
    return res.json();
  }