import Header from "../component/header"
import Sidebar from "../component/sidebar"
import BarGraph from '../component/barchart';
import Doughnat from '../component/doughnut'

export default function Dashboard() {

  return (
    <div>
      <Header />
      <Sidebar />
      {/* <div className="content">
        <BarGraph />
        <Doughnat />
      </div> */}

      <style jsx>{`
        .content {
          position: relative;
          left: 280px;
          top: 80px;
          padding: 20px;
          gap: 30px;
          width: calc(100% - 280px);
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: #F6F6F9;
        }

        @media (max-width: 600px) {
          .content {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}
