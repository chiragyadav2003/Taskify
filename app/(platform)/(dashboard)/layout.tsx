import { Navbar } from "./_components/Navbar";

const OrganizationDashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full flex flex-col">
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default OrganizationDashboardLayout;