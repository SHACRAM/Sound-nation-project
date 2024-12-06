import { Layout } from "../components/Layout";
import ReactMarkdown from 'react-markdown';
import React from "react";
import { useLocation } from "react-router-dom";



export const DisplayCgu = () => {
  const location = useLocation();
  const data = location.state


  return (
    <Layout>
     <div className="bg-black rounded-md m-4 p-4">
       <div>
        {data.map((item, index) => {
          return(
            <div key={index}>
            <h2 className=" text-[1.4rem] mb-4 text-[#ee7e1a]">{item.title}</h2>
            <ReactMarkdown className='text-white markdown react-markdown'>{item.content}</ReactMarkdown>
          </div>
          )
        })}
      </div>
    </div>
    </Layout>
  );
};
