import { List, CheckCircle, CalendarDays, Loader } from "lucide-react";

export default function Dashboard() {

    const dashboardElements = [
        { title: 'Total tasks', value: 2, Icon: List },
        { title: 'Completed tasks', value: 2, Icon: CheckCircle },
        { title: 'Ongoing tasks', value: 2, Icon: Loader },
        { title: 'Today\'s tasks', value: 2, Icon: CalendarDays }
    ]

  return (
    <div className="flex flex-row flex-wrap gap-3 p-4">
        { dashboardElements.map((dashboard, index) => (
            <div key={index} className="border card p-4 rounded-md w-52 h-auto">
            <div className="flex flex-row justify-between items-center">
                <h4 className="font-medium text-md">{dashboard.title}</h4>
                <dashboard.Icon size={14}/>
            </div>
            <span className="font-bold text-xl mt-1 translate-y-1">{dashboard.value}</span>
        </div>
        )) }
    </div>
  )
}
