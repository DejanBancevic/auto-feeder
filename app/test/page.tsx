import { GetStaticProps } from 'next/types';
import React from 'react'
import prisma from "../../lib/prisma";

const Test: GetStaticProps = async () => {
  const feed = await prisma.post.findMany();
  return (
    <div>
      {feed.map(da2 => <div key={da2.id}>
        <h1>{da2.name}</h1>
      </div>)}
    </div>
  )
};



export default Test