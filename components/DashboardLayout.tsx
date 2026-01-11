
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
        <div>DashboardLayout</div>
        <div>{children}</div>
    </div>
  )
}

export default DashboardLayout