import Image from "next/image";
import ImageNews from "@/components/imgStyle/page";
import Link from "next/link";
import chiefEditor from "./(api)/chiefEditor";
import Articles from "./(api)/Articles";
import titls from "./(api)/titls";
import importantNew from "./(api)/importantNew";

export default async function Home() {
  const url = "http://localhost:8000";
  try {
    const [chiefEditorData, titlsData, importantNewPage, articles] =
      await Promise.all([
        chiefEditor({ url }),
        titls({ url }),
        importantNew({ url }),
        Articles({ url }),
      ]);

    return (
      <>
        <div className="flex flex-col px-3 md:px-0 md:flex-row mx-auto  max-w-7xl items-start mt-4  justify-between">
          <div className="mx-2 border-t-4 border-[#898989]">
            <div className="w-[60%] h-[4px] bg-[#898989] mt-2"></div>
            <h2>سخن سردبیر</h2>
            <ul>
              {chiefEditorData.map((item: any) => (
                <li key={item.id} className="flex flex-col items-center">
                  <div className="flex flex-row">
                    <img
                      src="/avatar/1401120109413719927095974-300x209.jpg"
                      className="rounded-full w-24 h-24"
                    />
                    <div className="mr-2 ">
                      <p className="text-xs">احسان صالحی</p>
                      <Link href={`${item.id}`}>
                        <p className="pt-2 hover:text-red-500 text-xl">
                          {item.title}
                        </p>
                      </Link>
                    </div>
                  </div>
                  <ul className="mr-4 flex flex-col ">
                    <div className="flex flex-col ">
                      {item.news.map((show: any) => (
                        <li key={show.id} className="py-2">
                          {show.new}
                        </li>
                      ))}
                    </div>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-2">
            {/* <div className="w-[60%] h-[4px] bg-[#898989] mt-2"></div> */}

            <div>
              {importantNewPage.map((item: any) => (
                <div key={item.id}>
                  <img
                    src={"/avatar/170234070-700x500.jpg"}
                    alt={item.title}
                    // width={600}
                    // height={800}
                    className="w-full h-[400px] md:h-[500px]"
                  />
                  <h2 className="text-center text-3xl">{item.title}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-2 border-t-4 border-[#898989]">
            <div className="w-[60%] h-[4px] mr-2 md:mr-0 bg-[#898989] mt-2"></div>
            <h2>عنواین این صفحه</h2>
            <ul className="w-full">
              {titlsData.map((item: any) => (
                <li key={item.id}>
                  {item.id <= 2 && (
                    <div>
                      <img
                        src={"/avatar/4436594-300x200.jpg"}
                        alt={item.title}
                        // width={350}
                        // height={150}
                        className="w-full h-[200px]"
                      />
                      <p className="w-2/3">{item.title}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <img
            src={"/avatar/ketabkalagh-1024x146.jpg"}
            alt="ketabkalagh"
            // width={1250}
            // height={50}
            className="md:w-[80rem] w-[95%] md:h-[100px] mx-auto"
          />
        </div>
        <div className="max-w-7xl  mx-auto px-2 md:px-0 mt-2">
          <div className="border-t-4 border-[#898989]">
            <div className="w-[60%] h-[4px] bg-[#898989] mt-2 mx-auto"></div>
            <h3 className="text-center my-4">عناوین این صفحه</h3>
            <ul className="flex md:flex-row flex-col justify-between">
              {titlsData.map((item: any) => (
                <li key={item.id} className="flex flex-col items-center mx-4">
                  <Image
                    src={"/avatar/4436594-300x200.jpg"}
                    alt={item.title}
                    width={500}
                    height={500}
                    className=""
                  />
                  <p className="text-center">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start px-2 md:px-0  max-w-7xl mx-auto">
          <div className="basis-1/3 border-t-4 border-[#898989] mt-4 ml-4">
            <div className="w-[70%] h-[4px] bg-[#898989] mt-1"></div>
            <h2>سرمقاله</h2>
            <div>
              <ul>
                {articles.map((item: any) => (
                  <li key={item.id} className="flex flex-row my-4 items-center">
                    {/* <div className="w-[100px] h-[80px] bg-red-600 rounded-full inline-block align-middle overflow-hidden ">
                      <Image src="/avatar/1401120109413719927095974-300x209.jpg" alt={item.title} width={850} height={800} className="w-[100px] h-[80px] bg-red-600 rounded-full inline-block align-middle overflow-hidden"  />
                    </div> */}
                    <img
                      src="/avatar/1401120109413719927095974-300x209.jpg"
                      className="rounded-full w-24 h-24"
                    />
                    {/* //SRC="/avatar/1401120109413719927095974-300x209.jpg" ALT={item.title} WIDTH={150} HEIGHT={209} ClassName="w-10" circle={true} */}
                    <p className="w-72 mr-2">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="basis-2/3 border-t-4 border-[#898989] mt-4">
            <div className="w-[70%] h-[4px] bg-[#898989] mt-1"></div>
            <h2>آخرین اخبار</h2>
            <div>
              <ul className="flex flex-col justify-between">
                {titlsData.map((item: any) => (
                  <li
                    key={item.id}
                    className="flex flex-col md:flex-row items-start mx-4"
                  >
                    <Image
                      src={"/avatar/4436594-300x200.jpg"}
                      alt={item.title}
                      width={350}
                      height={500}
                      className="my-2"
                    />
                    <div className="mr-4">
                      <p className="text-center">{item.title}</p>
                      <p className="text-sm ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. A praesentium excepturi et accusantium reiciendis,
                        corporis quisquam inventore dolor, vero autem
                        perferendis adipisci quasi eveniet soluta ullam,
                        consectetur dolores iure. Quasi.
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[100vw] h-auto bg-black text-white">
          <div className="md:w-[80rem] w-[80%] h-[4px] bg-white mx-auto relative top-2"></div>
          <div className="w-[50vw] h-[4px] bg-white mx-auto relative top-4"></div>
          <h2 className="text-center mt-8">عناوین صفحه</h2>
          <div className="max-w-7xl mx-auto mt-8">
            <ul className="flex flex-col justify-between  items-center md:flex-row ">
              {titlsData.map((item: any) => (
                <li key={item.id} className="md:mx-4">
                  <img
                    src={"/avatar/4436594-300x200.jpg"}
                    alt={item.title}
                    // width={600}
                    // height={500}
                    className="my-2 md:w-[400px] md:h-[400px] w-[300px] mx-auto "
                  />
                  <p className={`mt-4 w-2/3 mx-auto`}>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error:", error);
    // Handle errors
    return <div>خطایی رخ داده است. لطفا صفحه را مجددا بارگذاری کنید.</div>;
  }
}
