import Header from "../component/header"
import Sidebar from "../component/sidebar"
import BarGraph from '../component/barchart';
import Doughnat from '../component/doughnut'
import SalesTable from "../component/salesTable";

export default function Dashboard() {

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="content">
        {/* <BarGraph />
        <Doughnat /> */}
        <SalesTable />
      </div>

      <style jsx>{`
        .content {
          position: relative;
          left: 280px;
          top: 80px;
          padding: 20px 50px;
          gap: 30px;
          width: calc(100% - 280px);
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: #F6F6F9;
        }

        @media only screen and (max-width: 1200px) {
          .content {
            width: 100%;
            left: 0px;
          }
        }

        @media only screen and (max-width: 992px) {
          .content {
            width: 100%;
            flex-direction: column;
            left: 0px;
          }
        }

        @media only screen and (max-width: 768px) {
          .content {
            width: 100%;
            flex-direction: column;
            left: 0px;
            padding: 20px 20px;
          }
        }
      `}</style>
    </div>
  )
}
