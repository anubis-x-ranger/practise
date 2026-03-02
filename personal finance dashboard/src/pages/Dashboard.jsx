import Sidebar from "@/components/dashboard/Sidebar";
// import Topbar from "@/components/dashboard/Topbar";
import Navbar from "@/components/dashboard/Navbar";
import SummaryCards from "@/components/dashboard/SummaryCards";
import ExpenseChart from "@/components/dashboard/ExpenseChart";
import RecentTransactions from "@/components/dashboard/RecentTransactions";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-muted/40">

      <Sidebar />

      <div className="flex-1 flex flex-col">

       {/* <Topbar />*/}
           <Navbar />

        <main className="p-6 space-y-6">
          <SummaryCards />
          <ExpenseChart />
          <RecentTransactions />
        </main>

      </div>
    </div>
  );
}