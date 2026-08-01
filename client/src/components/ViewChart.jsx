import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";


function ViewChart({ data = []}) {

  return (

    <div style={{ width:"100%", height:300 }}>

      <ResponsiveContainer>

        <LineChart data={data}>

          <CartesianGrid />

          <XAxis dataKey="_id" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="totalViews"
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

}


export default ViewChart;