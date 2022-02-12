import Template from "../components/Template"
import { Card } from 'antd';

const Dashboard = () => {
  return (
    <Template>
      <h1>Dashboard</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="site-card-border-less-wrapper">
          <Card title="Users" bordered={false} >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
        <div className="site-card-border-less-wrapper">
          <Card title="Garages" bordered={false} >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
        <div className="site-card-border-less-wrapper">
          <Card title="Invoices" bordered={false} >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
        <div className="site-card-border-less-wrapper">
          <Card title="Vehicles" bordered={false} >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
        <div className="site-card-border-less-wrapper col-span-4">
          <Card title="Vehicles" bordered={false} >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </div>

    </Template>
  )
}

export default Dashboard;