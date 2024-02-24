import Image from 'next/image';
import React from 'react';
import Copy from "./components/Copy";
import specialOffer from './(api)/specialOffer';
import chiefEditor from '../(api)/chiefEditor';
const url = "http://localhost:8000";
const Page = async ({ params }: {
    params: {
        News: string;
    }
}) => {
     const tags = [
        {id:1,title:"اسماعیلیون",link:"/"},
        {id:2,title:"ایران",link:"/"},
        {id:3,title:"چین",link:"/"},
        {id:4,title:"رئیسی",link:"/"},
        {id:5,title:"سیاسی",link:"/"},
        {id:6,title:"سیاسی",link:"/"},
        {id:7,title:"عربستان",link:"/"},
     ]
    try {
        const [chiefEditorData , offers] = await Promise.all([
            chiefEditor({url}),
            specialOffer({url}),
        ]);
        return (
            <div className='max-w-7xl mx-auto'>
                <ul className='w-full mx-auto h-auto my-8  bg-gray-300 rounded-xl overflow-hidden'>
                    {chiefEditorData.map((item: any) => (
                        <li key={item.id}>
                          <div className='flex flex-col md:flex-row-reverse items-center w-full '>
                            <img src="/avatar/1401120109413719927095974-300x209.jpg" alt={item.title} className='w-[610px] h-[610px]'  />
                             <div className='px-16'>
                               <h3 className='text-3xl'>{item.title}</h3>
                               <p>احسان صالحی دبیر شورای اطلاع‌رسانی دولت طی یادداشتی به شرح زیر به تبیین ابعاد سفر اخیر آیت‌الله رئیسی به چین پرداخته است: سفر دو روزه رئیس‌جمهور به چین که با همراهی شش وزیر و رئیس کل بانک مرکزی انجام شد پراهمیت و تاریخی بود. فارغ از سطح سفر (State Visit) که از 22 سال قبل […]</p>
                             </div> 
                          </div>
                        </li>
                    ))}
                </ul>
                <div className='flex flex-row justify-between items-start w-full'>
                    <div className='mr-5 w-2/3'>
                         <div >
                    <p>احسان صالحی دبیر شورای اطلاع‌رسانی دولت طی یادداشتی به شرح زیر به تبیین ابعاد سفر اخیر آیت‌الله رئیسی به چین پرداخته است:
                 سفر دو روزه رئیس‌جمهور به چین که با همراهی شش وزیر و رئیس کل بانک مرکزی انجام شد پراهمیت و تاریخی بود. فارغ از سطح سفر (State Visit) که از 22 سال قبل تا به حال سابقه نداشت، در این سفر موضوع همکاری‌های جامع ایران و چین از مرحله چهارچوب همکاری، به مرحله «اجرا و قرارداد» وارد شد. این دقیقاً همان نقطه حساسیت‌برانگیزی است که علت هجمه‌های متعدد داخلی و خارجی را باید در آن جست‌و‌جو کرد. <br /></p>
                    <p>نسبت چین با ایران در سال‌های گذشته نسبت همکاری بوده است؛ بخصوص در دوره تحریم، بخشی از سیاست خنثی‌سازی تحریم از طریق این همکاری دنبال شد. هدف از تحریم‌ها این بود که درآمدهای ایران دچار نزول حداکثری و دسترسی به منابع محدود شده نیز به قدری دشوار شود که هم تأمین کالاها و نیازهای مردم مختل شود، هم کشور در گرداب هزینه وارد ابرتورم شود؛ مسأله‌ای که از آن به ونزوئلایی شدن اقتصاد ایران (ترکیب رکود و قحطی با تورم) یاد می‌کردند. <br /></p>
                    <p>در مقابل این طراحی، با هدفگذاری و تأکیدهای مکرر رهبر انقلاب اسلامی، مسأله تولید در شش سال متوالی به دستور کار اول کشور تبدیل شد و به علت وجود زیرساخت‌های خوب، نقشه ایجاد قحطی و کمبود کالاها شکست خورد. در بخش درآمدی نیز کشور فراز و نشیب‌هایی را طی کرد اما بخصوص در 18 ماه اخیر و با وجودی که در شهریور 1400، دولت با یک کسری حدود 450 هزار میلیارد تومانی تحویل گرفته شد، افزایش درآمدهای کشور از جمله از طریق افزایش فروش نفت در رده اولویت‌های قطعی دولت سیزدهم قرار گرفت. <br /></p>
                    <p>همچنانکه اشاره شد در هر دو بخش یعنی هم کمک به تأمین مواد اولیه تولید و هم در مبادله نفت، چین جزو همکاران مهم کشور بود. آنچه رئیس‌جمهور از آن به‌عنوان «دوستان روزهای سخت» یاد می‌کند، ناشی از همین واقعیت است. <br /></p>
                    <p>این همکاری تأثیر مهمی در ناکام ماندن نقشه به زانو در آوردن ملت ایران داشت، بنابراین طبیعی است که دستگاه‌های تبلیغاتی متصل به پروژه تحریم، از چند سال قبل عملیات روانی انبوهی را برای ارائه تصویر منفی از چین در افکار عمومی کلید زدند. جالب اینجا است که بوق‌های تحریم‌گرا که چند ماه قبل و در جریان سفر رئیس‌جمهور چین به عربستان، ادعا کردند چین، ایران را کنار گذاشته و به سراغ عربستان رفته است، در سفر اخیر رئیس‌جمهور به چین بار دیگر به تنظیمات کارخانه و دستورکار قبلی خود بازگشتند و دو محور موازی را دستورکار قرار دادند؛ 1) بی‌ثمر نشان دادن سفر، 2) القاء سوء‌استفاده چین از ایران.
                               <br />
                       در حالی‌ که تولید مشترک هواپیما با چین، سرمایه‌گذاری چین در ساخت فرودگاه، ایجاد شهرک صنعتی مشترک، تکمیل کریدور ریلی شرق به غرب، صادرات محصولات لبنی و مرکبات ایران به چین، مشارکت چین در ساخت انبوه مسکن، امضای 3.5 میلیارد دلار قرارداد صنعتی با چین، توافق برای ساخت خودروی با کیفیت در ایران، سرمایه‌گذاری در سواحل مکران و توافق‌های مهم در بخش‌های انرژی و چند موضوع دیگر که جزئیات آن‌ها به جهت مصون‌ماندن از تحریم‌ها اعلام نشد، توافق‌های مهم دو کشور در این سفر بود.
                               <br />
                       اما سفر به چین که در دوره پایان آشوب‌ها، عفو متهمان و محکومان از موضع اقتدار و پس از راهپیمایی تاریخی 22 بهمن، انجام شد، این پیام را به همه دنیا ارسال کرد که بر خلاف محاسبات غلط غربی‌ها، قدرت دوم اقتصادی دنیا که کاملاً محاسبه‌گر و آینده‌نگر با تحولات برخورد می‌کند، آماده گسترش همکاری‌های همه‌جانبه با ایران است. از این منظر، سفر چین علاوه بر آنکه استمرار و تقویت رویکرد خنثی‌سازی تحریم را به‌دنبال داشت، میخ دیگری بر تابوت آشوب بود.
  
                           یکی بودن سازمان آشوب و تحریم، در مواجهه تبلیغاتی و سیاسی با این سفر کاملاً آشکار بود. همان دولت‌ها و تشکیلات رسانه‌ای آنها که در این سال‌ها، پیشگام جنایت تحریم و در اغتشاشات پاییز نیز محور شرارت بودند، از این سفر احساس خطر و اقدام به عادی‌سازی و اهمیت‌زدایی از آن کردند.

                           تأسف‌آور اینکه همان صدا (تحریم- آشوب) در داخل نیز امتدادهایی داشت؛ مثلاً یک رسانه اقتصادی که اخیراً همسو با اقدام عملی امریکایی‌ها علیه ایران در عراق، خبر دروغ توقف صادرات به عراق را منتشر کرده بود، در فقره سفر چین نیز با انتشار خبری از یک رسانه غربی آن هم به تاریخ شهریور 1398 مدعی تخفیف سنگین و 30 درصدی ایران به چین در فروش نفت شد.
                           همچنین یکی از معاونان دفتر رئیس‌جمهور سابق، دست به تحریف متن بیانیه مشترک ایران و چین زد. در کنار خط تبلیغاتی تحریم‌گرا، خط تبلیغاتی آشوب نیز فراخوان پنجشنبه 27 بهمن را با تبلیغات بسیار زیاد در رسانه‌های معاند و با میدان‌داری منافقین منتشر کرد که این فراخوان نیز شکست سختی خورد .
                        <br />
               البته خط تبلیغاتی «تخریب خنثی‌سازی تحریم» و «تلاش برای احیای آشوب» در حالی در داخل و خارج از کشور دنبال شد که آن طرف‌تر بر اساس خبری که ان‌بی‌سی منتشر کرد، امریکایی‌ها از دو هفته قبل در قطر به‌صورت غیرمستقیم در حال مذاکره با ایران برسر آزادی چند زندانی دو تابعیتی، در ازای آزادسازی منابع 7 میلیارد دلاری ایران در کره‌جنوبی بوده‌اند.

             بی‌شک روابط ایران و چین دچار عقب‌ماندگی‌های بزرگ ناشی از خطای راهبردی دولت قبل است؛ مسأله‌ای که آقای ظریف وزیر امور خارجه سابق نیز در گزارش برجام به مجلس به تاریخ تیر 1400، از آن با تعبیر «رنجاندن دوستان در روزهای سخت با خوش‌خیالی و سراب طمع سرازیر شدن شرکت‌های غربی» یاد کرد؛ این خطای راهبردی و ترک فعل‌های متعاقب آن البته برای عوامل آن بی‌هزینه مانده است، همچون ترک فعل آن‌ها در واردات واکسن کرونا به بهانه‌های مختلف از جمله تحریم و FATF. در حالی‌ که چند روز پس از روی کار آمدن دولت سیزدهم، رئیس‌جمهور با یک تماس تلفنی با رئیس‌جمهور چین این مسیر را باز کرد و ده‌ها میلیون واکسن تأمین شد</p>
                          </div>
                          <div className='border-t-2 border-b-2 flex flex-row w-full justify-between items-center'>
                            <div className=''>
                                <ul className='flex flex-row w-full'>
                                  <li className='mx-2'>icon</li>
                                  <li className='mx-2'>icon</li>
                                  <li className='mx-2'>icon</li>
                                  <li className='mx-2'>icon</li>
                                </ul>
                            </div>
                            <Copy link={params.News}/>
                          </div>
                          <div>
                            <div>
                                <p className='text-2xl mt-8'>هیچ دیدگاهی درج نشده - اولین نفر باشید</p>
                            </div>
                            <div>
                                <h3>دیدگاهتان را بنویسید</h3>
                               <form action="" className='flex flex-col items-start mt-2'>
                                  <span className='text-xs'>نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند *</span>
                                  <textarea placeholder="دیدگاه" className="textarea textarea-bordered textarea-lg w-full max-w-full mt-1" ></textarea>
                                  <div className='flex flex-row justify-between mt-2 w-full'>
                                    <input type="text" placeholder="نام*" className="input input-bordered w-full max-w-full ml-4" />
                                    <input type="email" placeholder="ایمیل*" className="input input-bordered w-full max-w-full" />
                                  </div>
                                  <input type="text" placeholder="وبسایت" className="input w-full max-w-full mt-2 input-bordered" />
                                  <div className='flex flex-row mt-2'>
                                    <input type="checkbox" id='saveEmail' className="checkbox checkbox-info" />
                                    <label htmlFor="saveEmail">ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم.</label>
                                  </div>
                                   <button className="btn btn-primary mt-4">فرستادن دیدگاه</button>
                               </form>
                            </div>
                          </div>
                    </div>
                   <div className='w-1/3 mr-8'>
                      <div >
                        <div className='flex flex-row items-center mx-4'>
                           <div className='bg-red-600 w-[8px] h-[10px]'></div>
                           <img src="/prime_hashtag.svg" alt="prime_hashtag" className='mr-2' />
                           <h2 className='text-2xl mr-2'>هشتگ </h2>
                        </div>
                        <div className='flex flex-row flex-wrap w-full' >
                            {tags.map((item:any)=>(
                                <div className='bg-[#d1d1d1] px-2 py-1 mx-2 my-2 text-lg hover:bg-red-700 hover:text-white cursor-pointer' key={item.id}>
                                    {item.title}
                                </div>
                            ))}
                        </div>
                      </div>
                      <div className='bg-[#d1d1d1] w-full  h-auto ml-2 mt-5'>
                        <ul className='mx-3'>
                            <div className='flex flex-row items-center py-2'>
                               <div className='bg-red-600 w-[8px] h-[10px] '></div>
                              <img src="/Vector.svg" alt="offres" className='w-[20px] mr-2' />
                               <h3 className='text-2xl mr-1'> پیشنهاد ویژه</h3>

                            </div>
                            {offers.map((item:any)=>(
                                <li className='py-4 text-base flex flex-row pl-4' key={item.id}>
                                   <div className='text-red-500 ml-2'>Icon</div>
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                      </div>
                      <div className='bg-[#d1d1d1] w-full  h-auto ml-2 mt-5'>
                        <ul className='mx-3'>
                            <div className='flex flex-row items-center py-2'>
                               <div className='bg-red-600 w-[8px] h-[10px] '></div>
                              <img src="/Vector.svg" alt="offres" className='w-[20px] mr-2' />
                               <h3 className='text-2xl mr-1'> پیشنهاد ویژه</h3>

                            </div>
                            {offers.map((item:any)=>(
                                <li className='py-4 text-base flex flex-row pl-4' key={item.id}>
                                   <div className='text-red-500 ml-2'>Icon</div>
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                      </div>
                      <div className='w-full mt-5'>
                        <img src="/avatar/1848073-fsd.jpg" alt="baner"  className='w-full'/>
                      </div>
                   </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error:", error);
        // Handle errors
        return <div>خطایی رخ داده است. لطفا صفحه را مجددا بارگذاری کنید.</div>;
    }
}
export default Page;
