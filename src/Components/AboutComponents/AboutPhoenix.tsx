import Phoenix from "../../assets/logo.png";

const text: string =
  "ფენიქსი - არის სამაგიდო თამაშების მოყვარული ადამიანების გაერთიანება. \n ფენიქსი ეხმარება წევრებს შექმნან და რეალიზება გაუწიონ სამაგიდო თამაშებებს. \n ჩვენ ვატარებთ: სამაგიდო თამაშების საღამოებს, ტურნირებს. ვქმნით ინფორმაციულ და გასართობ კონტენტს სამაგიდო თამაშებზე: https://www.youtube.com/channel/UCaaFg06QxmK-UGRwadogMLg. \n გაქვთ სამაგიდო თამაშის იდეა? \n ფენიქსში გაერთიანებისას თქვენ შეგიძლიათ მიიღოთ: მარკეტინგულ დახმარებას, წვდომა თამაშისთვის საჭირო მასალების დამზადების ბაზაზე, დახვეწოთ იდეა ამ სფეროში გათვიცნობიერებული ადამიანების დახმარებით, შექმნათ თამაშის MVP, გაიჩინოთ ბიზნეს პარტნიორები, აიღოთ სტარტაპ სესხი და სხვ.";

const AboutPhoenix = () => {
  return (
    <div className="mt-16 mb-4 w-[100] px-2 ">
      <div className="my-5 md:px-10 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-full">
          <img src={Phoenix} alt="" className="md:w-96 md:h-96" />
        </div>

        <div className=" md:w-3/4 flex flex-col break-all">
          <div className="self-start md:my-16">
            <h1 className="text-center text-2xl">ფენიქსის შესახებ</h1>
          </div>
          <div className="px-1 text-left">
            <div className="">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPhoenix;
