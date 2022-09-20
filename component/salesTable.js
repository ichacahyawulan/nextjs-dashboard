import styles from '../styles/sidebar.module.css'
import { AiOutlineDashboard, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { BiLineChart } from 'react-icons/bi'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function SalesTable() {
  return (
    <div className="sales-table">
      <table className="table">
        <thead className="table-light">
          <tr>
            <th scope="col">Products name</th>
            <th scope="col" className="d-none d-lg-table-cell">Categories</th>
            <th scope="col" className="d-none d-lg-table-cell">Amount</th>
            <th scope="col" className="d-none d-lg-table-cell">Items Sold</th>
            <th scope="col" className="d-none d-lg-table-cell">Price</th>
            <th scope="col">Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nighthawk R7800</td>
            <td className="d-none d-lg-table-cell"><span className="categories">TECHNOLOGY</span></td>
            <td className="d-none d-lg-table-cell">27 in stock</td>
            <td className="d-none d-lg-table-cell">3</td>
            <td className="d-none d-lg-table-cell">Rp. 4,850,000</td>
            <td>Rp. 14,550,000</td>
          </tr>
          <tr>
            <td>WN821N</td>
            <td className="d-none d-lg-table-cell"><span className="categories">TECHNOLOGY</span></td>
            <td className="d-none d-lg-table-cell">45 in stock</td>
            <td className="d-none d-lg-table-cell">22</td>
            <td className="d-none d-lg-table-cell">Rp. 565,000</td>
            <td>Rp. 12,430,000</td>
          </tr>
          <tr>
            <td>R6330 Netgear</td>
            <td className="d-none d-lg-table-cell"><span className="categories">TECHNOLOGY</span></td>
            <td className="d-none d-lg-table-cell">20 in stock</td>
            <td className="d-none d-lg-table-cell">6</td>
            <td className="d-none d-lg-table-cell">Rp. 3,215,000</td>
            <td>Rp. 19,290,000</td>
          </tr>
          <tr>
            <td>Webcam C310</td>
            <td className="d-none d-lg-table-cell"><span className="categories">TECHNOLOGY</span></td>
            <td className="d-none d-lg-table-cell">52 in stock</td>
            <td className="d-none d-lg-table-cell">10</td>
            <td className="d-none d-lg-table-cell">Rp. 399,000</td>
            <td>Rp. 3,990,000</td>
          </tr>
          <tr>
            <td>Arlo Pro 4</td>
            <td className="d-none d-lg-table-cell"><span className="categories">TECHNOLOGY</span></td>
            <td className="d-none d-lg-table-cell">2 in stock</td>
            <td className="d-none d-lg-table-cell">4</td>
            <td className="d-none d-lg-table-cell">Rp. 6,550,000</td>
            <td>Rp. 26,200,000</td>
          </tr>
        </tbody>
      </table>

      <style jsx>{`
        .sales-table {
          width: 100%;
        }
        .table {
          width: 100%;
          background: #FFFFFF;
          font-size: 18px;
          font-weight: 500;
        }
        tr {
          height: 60px;
        }
        th, td {
          vertical-align: middle;
        }
        .categories {
          background: rgba(122, 182, 253, 0.26);
          border-radius: 5px;
          color: rgba(122, 182, 253);
          padding: 5px;
        }

        @media only screen and (max-width: 768px) {
          
        }
      `}</style>
    </div>
  )
}
