import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";


const data02 = [
  { name: "Total Employee", value: 200 },
 
];



function Chart() {

   
  return (
<>
        <PieChart width={200} height={250}>
          <Pie
            dataKey="value"
            data={data02}
            cx={100}
            cy={150}
            innerRadius={40}
            outerRadius={80}
            fill="#ffd831"
          />
          <Tooltip />
          
          
        </PieChart>
        
        
</>
  )
}

export default Chart