import Image from "next/image";
import ImageNews from "@/components/imgStyle/page"
import { title } from "process";
export default async function Home() {
  async function chiefEditor(){
    const res = await fetch(`http://localhost:8000/chiefEditor`, { cache: 'force-cache' })
    return res.json()
  }
  async function Articles(){
    const res = await fetch(`http://localhost:8000/Articles`, { cache: 'force-cache' })
    return res.json()
  }
  async function titls(){
    const res = await fetch(`http://localhost:8000/titls`, { cache: 'force-cache' })
    return res.json()
  } 
  async function importantNew(){
    const res = await fetch(`http://localhost:8000/importNew`, { cache: 'force-cache' })
    return res.json()
  } 

  const chiefEditorData = await chiefEditor();
  const titlsData = await titls();
  const importantNewPage = await importantNew();
  const articles = await Articles();

  return (
    <>
     <div className="flex flex-col md:flex-row mx-auto  max-w-7xl items-start mt-4  justify-around">
      <div className="mx-2 border-t-4 border-[#898989]">
         <div className="w-[60%] h-[4px] bg-[#898989] mt-2"></div>
         <h2>سخن سردبیر</h2>
          <ul>
            {
             chiefEditorData.map((item: any) => (
              <li key={item.id} className="flex flex-row">
                <ImageNews SRC="/avatar/1401120109413719927095974-300x209.jpg" ALT={item.title} WIDTH={150} HEIGHT={209} ClassName="w-10" circle={true} />
                {/* <div className="w-[100px] h-[80px] bg-red-600 rounded-full inline-block align-middle overflow-hidden ">
                 <Image src="/avatar/1401120109413719927095974-300x209.jpg" alt={item.title} width={850} height={800} className="w-[100px] h-[80px] bg-red-600 rounded-full inline-block align-middle overflow-hidden"  />
                </div> */}
                {item.title}
                <ul>
                  {item.news.map((news: any) => (
                    <li key={news.id}>
                      {news.title}
                    </li>
                  ))}
                </ul>
              </li>
            ))
            }
          </ul> 
      </div>
      <div className="mx-2">
      {/* <div className="w-[60%] h-[4px] bg-[#898989] mt-2"></div> */}

        <div>
           {
             importantNewPage.map((item:any) => (
               <div key={item.id}>
                 <Image src={"/avatar/170234070-700x500.jpg"} alt={item.title} width={600} height={800} />
                <h2 className="text-center ">{item.title}</h2> 
               </div>
           ))
          }
        </div>
      </div>
      <div className="mx-4">
        <h2>عنواین این صفحه</h2>
        <ul>
          {
            titlsData.map((item:any)=>(
              <li key={item.id}>
               {item.id <= 2 && <div>
                   <Image src={"/avatar/4436594-300x200.jpg"} alt={item.title} width={261} height={150} className=""/>
                  <p className="w-2/3">{item.title}</p> 
                </div>
                }
              </li>
            ))
          }
        </ul>
      </div>
     </div>
     <div className="mt-4">
       <Image src={"/avatar/ketabkalagh-1024x146.jpg"} alt="ketabkalagh" width={1250} height={50} className="mx-auto" />
     </div>
     <div className="max-w-7xl mx-auto">
        <h3 className="text-center my-4">عناوین این صفحه</h3>
        <ul className="flex md:flex-row flex-col justify-between">
          {
             titlsData.map((item:any)=>(
              <li key={item.id} className="flex flex-col items-center mx-4">
                <Image src={"/avatar/4436594-300x200.jpg"} alt={item.title} width={500} height={500} className=""/>
                <p className="text-center">{item.title}</p>
              </li>
            ))
          }
        </ul>
     </div>
     <div className="flex flex-col md:flex-row items-start  max-w-7xl mx-auto">
       <div className="basis-1/3 border-t-4 border-black mt-4 ml-4">
       <div className="w-[70%] h-[4px] bg-black mt-1"></div>
         <h2>سرمقاله</h2>
         <div>
           <ul>
            {
              articles.map((item:any)=>(
                <li key={item.id} className="flex flex-row my-4">
                    {/* <div className="w-[100px] h-[80px] bg-red-600 rounded-full inline-block align-middle overflow-hidden ">
                      <Image src="/avatar/1401120109413719927095974-300x209.jpg" alt={item.title} width={850} height={800} className="w-[100px] h-[80px] bg-red-600 rounded-full inline-block align-middle overflow-hidden"  />
                    </div> */}
                  <ImageNews  />
                  {/* //SRC="/avatar/1401120109413719927095974-300x209.jpg" ALT={item.title} WIDTH={150} HEIGHT={209} ClassName="w-10" circle={true} */}
                   <p className="w-72">{item.title}</p> 
                </li>
              ))
            }
           </ul>
         </div>
       </div>
       <div className="basis-2/3 border-t-4 border-black mt-4">
        <div className="w-[70%] h-[4px] bg-black mt-1"></div>
        <h2>آخرین اخبار</h2>
        <div>
          <ul className="flex flex-col justify-between">
          {
             titlsData.map((item:any)=>(
              <li key={item.id} className="flex flex-col md:flex-row items-start mx-4">
                <Image src={"/avatar/4436594-300x200.jpg"} alt={item.title} width={350} height={500} className="my-2"/>
               <div className="mr-4">
                 <p className="text-center">{item.title}</p>
                 <p className="text-sm ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. A praesentium excepturi et accusantium reiciendis, corporis quisquam inventore dolor, vero autem perferendis adipisci quasi eveniet soluta ullam, consectetur dolores iure. Quasi.
                 </p>
                </div> 
              </li>
            ))
          }
          </ul>
        </div>
       </div>
     </div>
     <div className="w-[100vw] h-auto bg-black text-white">
      <div className="w-[65vw] h-[4px] bg-white mx-auto relative top-2"></div>
      <div className="w-[50vw] h-[4px] bg-white mx-auto relative top-4"></div>
      <h2 className="text-center mt-8">عناوین صفحه</h2>
      <div className="max-w-7xl mx-auto mt-8">
         <ul className="flex flex-col justify-between  items-start md:flex-row ">
          {
            titlsData.map((item:any)=>(
              <li key={item.id} className="mx-4">
                  <Image src={"/avatar/4436594-300x200.jpg"} alt={item.title} width={600} height={500} className="my-2"/>
                   <p className={`mt-4 w-2/3`}>{item.title}</p>
              </li>
            ))
          }
          </ul>
      </div>
     </div>
    </>
  );
}
