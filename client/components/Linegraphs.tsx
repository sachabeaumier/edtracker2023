import React, { PureComponent } from 'react'
import {
  LineChart,
  AreaChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from 'recharts'

const linedata = [
  {
    date_received: '3 March 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 116162,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '7 March 2023',
    ACT: 0,
    DemocracyNZ: 20000,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '10 March 2023',
    ACT: 100000,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '13 March 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 50000,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '17 March 2023',
    ACT: 50000,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 20040,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '23 March 2023',
    ACT: 100000,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '24 March 2023',
    ACT: 725000,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '3 April 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 50000,
    NZFirst: 0,
    Labour: 0,
    National: 120030,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '6 April 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 100000,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '11 April 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 50000,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '12 April 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 22000,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '14 April 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 50000,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '19 April 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 50000,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '27 April 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 100000,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '3 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 20000,
    Labour: 33804.35,
    National: 25000,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '5 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 50000,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '8 May 2023',
    ACT: 50000,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 50000,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '10 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 23000,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 25000,
  },
  {
    date_received: '16 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 100000,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '18 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 150000,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '19 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 25000,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '26 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 100000,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '29 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 90000,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '30 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 64979.69,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '31 May 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 20500,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '2 June 2023',
    ACT: 55000,
    DemocracyNZ: 0,
    FreedomsNZ: 23000,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '7 June 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 21250,
    NZFirst: 0,
    Labour: 35000,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '13 June 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 50000,
    NZFirst: 0,
    Labour: 0,
    National: 125000,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '16 June 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 50000,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '20 June 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 25010,
    NZFirst: 0,
    Labour: 0,
    National: 173303.3,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '21 June 2023',
    ACT: 75000,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 124500,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '29 June 2023',
    ACT: 150000,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '30 June 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 500000,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '5 July 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 20254,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '10 July 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 50000,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '18 July 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 350000,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '19 July 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 50000,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '20 July 2023',
    ACT: 50000,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '24 July 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 23000,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 70000,
    Māori: 0,
    VisionNZ: 23000,
  },
  {
    date_received: '25 July 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 50000,
    NZFirst: 0,
    Labour: 0,
    National: 75000,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '27 July 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 47052.53,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 0,
    VisionNZ: 0,
  },
  {
    date_received: '31 July 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 0,
    Māori: 50000,
    VisionNZ: 0,
  },
  {
    date_received: '1 August 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 50000,
    Māori: 0,
    VisionNZ: 0,
  },

  {
    date_received: '3 August 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 0,
    Labour: 0,
    National: 50150,
    Māori: 0,
    VisionNZ: 0,
  },

  {
    date_received: '11 August 2023',
    ACT: 0,
    DemocracyNZ: 0,
    FreedomsNZ: 0,
    Greens: 0,
    NZFirst: 180000,
    Labour: 0,
    National: 117000,
    Māori: 0,
    VisionNZ: 0,
  },
]

// export default class Actlinegraph extends PureComponent {
//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart width={300} height={100} data={linedata}>
//           <Line
//             type="monotone"
//             dataKey="ACT"
//             stroke="#FFFF00"
//             strokeWidth={2}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     )
//   }
// }

// export function ActLineGraph() {
//   return (
//     <AreaChart width={600} height={300} data={linedata}>
//       <XAxis dataKey="date_received" />
//       <Label value="Date Received" offset={0} position="insideBottom" />

//       <YAxis />
//       <Label value="Value" angle={-90} position="insideLeft" />

//       <CartesianGrid strokeDasharray="3 3" />
//       <Tooltip />
//       <Legend />
//       <Line
//         type="monotone"
//         dataKey="ACT"
//         stroke="#8884d8"
//         activeDot={{ r: 8 }}
//       />
//     </AreaChart>
//   )
// }

export function DemocracyNZLineGraph() {
  return (
    <LineChart width={600} height={300} data={linedata}>
      <XAxis dataKey="date_received" />
      <Label value="Date Received" offset={0} position="insideBottom" />

      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="DemocracyNZ"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  )
}

export function FreedomsNZNZLineGraph() {
  return (
    <LineChart width={600} height={300} data={linedata}>
      <XAxis dataKey="date_received" />
      <Label value="Date Received" offset={0} position="insideBottom" />

      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="FreedomsNZ"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  )
}

export function GreensLineGraph() {
  return (
    <LineChart width={600} height={300} data={linedata}>
      <XAxis dataKey="date_received" />
      <Label value="Date Received" offset={0} position="insideBottom" />

      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Greens"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  )
}

export function NZFirstLineGraph() {
  return (
    <LineChart width={600} height={300} data={linedata}>
      <XAxis dataKey="date_received" />
      <Label value="Date Received" offset={0} position="insideBottom" />

      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="NZFirst"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  )
}

export function LabourLineGraph() {
  return (
    <LineChart width={600} height={300} data={linedata}>
      <XAxis dataKey="date_received" />
      <Label value="Date Received" offset={0} position="insideBottom" />

      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Labour"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  )
}

export function NationalLineGraph() {
  return (
    <LineChart width={600} height={300} data={linedata}>
      <XAxis dataKey="date_received" />
      <Label value="Date Received" offset={0} position="insideBottom" />

      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="National"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  )
}
