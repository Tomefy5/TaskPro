import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  return (
    <div className="border w-64 flex flex-col h-screen items-center p-2">
        <h1 className="bg-slate-200 w-[90%] rounded p-2 text-center font-bold text-md ">Task Pro</h1>
        <SidebarMenu/>
    </div>
  )
}
