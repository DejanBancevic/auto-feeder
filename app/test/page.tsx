import React from 'react'
import prisma from "../../lib/prisma";

const test = async () => {

  const da = await prisma.entry.findMany();
  return (
    <div>
      {da.map(da2 => <div key={da2.id}>
        <h1>{da2.name}</h1>
      </div>)}
    </div>
  )
}



export default test