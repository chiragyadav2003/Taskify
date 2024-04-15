const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full bg-slate-100">
            {/* navbar */}
            <main className="pt-40 pb-20">
                {children}
            </main>
            {/* footer */}
        </div>
    )
}

export default MarketingLayout;