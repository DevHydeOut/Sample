"use client"


import ListItem from '@/components/dash-list';
import { listData } from '@/components/data'; 
import Chart  from '@/components/chart'; 

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import ChartPie from "@/components/pie-chart";
import { Bell, HomeIcon, TrendingUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SideBar from "@/components/app-sidebar";

export default function Home() {

  const handleButtonClick = (title: string) => {
    alert(`Button clicked for ${title}!`);
  };

  return (
    <div className="mt-4 mx-auto flex justify-center gap-[20px] w-[100%]">
      <div className="verticle w-[15%] boxShadow rounded-[20px] p-2 bg-[#E0E1DB]">
        <div className="h-[100%] p-2 rounded-[20px] innerShadow">
          <SideBar />
        </div>
      </div>
      <div className="w-[80%]">
        <div className="w-[100%] py-2 flex justify-between items-center">
          <h6 className="text-[24px] font-[500] ">Dashboard</h6>
          <div className="mr-6 w-[30%] flex justify-between">
            <a href="" className="bg-[#E0E1DB] text-[#121212] px-4 py-1 rounded-3xl oShadow2 text-xs hover:text-[#64CBBE] hover:bg-[#0000] border border-transparent hover:border-[#64CBBE]">
              Graph Dashboard
            </a>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-xs flex justify-center items-center hover:text-[#64CBBE]" href="/">
                  <HomeIcon className="w-4 mr-1" />Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-xs hover:text-[#64CBBE]" href="/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <Separator className="w-[100%] bg-[#B7BCB8]" />
        
        <div className="mt-4">
          <ul className="w-[100%] flex flex-wrap gap-[20px]">
            {listData.map((item) => (
              <ListItem
                key={item.id} 
                title={item.title}
                count={item.count}
                imageSrc={item.imageSrc}
                buttonText={item.buttonText}
                onButtonClick={() => handleButtonClick(item.title)}
              />
            ))}
          </ul>
        </div>
        
        <div className="mt-8 flex justify-between">

          <div className="w-[20%] boxShadow bg-[#E0E1DB] p-1 rounded-[20px]">
            <div className="h-[100%] innerShadow p-1 rounded-[20px]">
              <h4 className="flex p-4 font-[500]"><Bell className="mr-1" />News & Update</h4>
              <Separator className="w-[100%] bg-[#B7BCB8] mb-2" />
              <span className="p-4"> No Message Available</span>
            </div>
          </div>
          
          <div className="h-[50%] w-[40%] boxShadow bg-[#E0E1DB] p-1 rounded-[20px]">
            <div className="h-[100%] innerShadow p-1 rounded-[20px]">
              <h4 className="flex p-4 font-[500]"><TrendingUp className="mr-1" />Sales Vs Purchase</h4>
              <Separator className="w-[100%] bg-[#B7BCB8] mb-4" />
              <Chart />
            </div>
          </div>

          <div className="h-[50%] w-[35%] boxShadow bg-[#E0E1DB] p-1 rounded-[20px]">
            <div className="h-[100%] innerShadow p-1 rounded-[20px]">
              <h4 className="flex p-4 font-[500]"><TrendingUp className="mr-1" />Purchase Item Group Wise</h4>
              <Separator className="w-[100%] bg-[#B7BCB8]" />
              <ChartPie />
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}
