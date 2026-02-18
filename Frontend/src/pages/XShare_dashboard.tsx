
import { ShareSidebar } from "../components/ShareSidebar";
import { Card } from "../components/Card"


import { Xfind } from "../hooks/Xfind";

type ContentItem = {
  _id: string;
  type: any;
  link: string;
  title: string;
};

export function XShareDashboard() {
  const [username, contents] = Xfind()
  return (
    <>
      <div>
        <ShareSidebar/>
      </div>
      <div className="p-4 ml-72 bg-main min-h-screen border-2 border-gray-200 ">
        <div className="mb-8 mt-8 text-4xl text-blue-900 font-bold ">{username}'s , Brain</div>
        <div className="flex item gap-4 mt-10 flex-wrap">
          {(contents as ContentItem[]).map(({ _id, type, link, title }) => (
            <Card key={link + title} id={_id} type={type} link={link} title={title} />
          ))}
        </div>

      </div>
    </>
  );
}