import { Sidebar } from "../components/Sidebar"

import { Card } from "../components/Card"

import { useFind } from "../hooks/useFind";

type ContentItem = {
  type: any;
  link: string;
  title: string;
};

export function ShareDashboard() {
  const [username, contents] = useFind()
  return (
    <>
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className="p-4 ml-72 bg-main min-h-screen border-2 border-gray-200 ">
        <div className="mb-4 text-lg font-bold ">User: {username}</div>
        <div className="flex item gap-4 mt-10 flex-wrap">
          {(contents as ContentItem[]).map(({ type, link, title }) => (
            <Card key={link + title} type={type} link={link} title={title} />
          ))}
        </div>

      </div>
    </>
  );
}