"use client"

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from 'lucide-react';

export function TableDemo() {
  // State to keep track of the rows
  const [rows, setRows] = useState([
    {
      indentNo: "",
      itemType: "",
      itemName: "",
      make: "",
      uom: "",
      stock: "",
      pipelineQty: "",
      processCode: "",
      procSeq: "",
      previousProcCode: "",
      prevProcSeq: "",
      history: ""
    },
  ]);

  // Function to add a new row
  const handleAddRow = () => {
    const newRow = {
      indentNo: "",
      itemType: "",
      itemName: "",
      make: "",
      uom: "",
      stock: "",
      pipelineQty: "",
      processCode: "",
      procSeq: "",
      previousProcCode: "",
      prevProcSeq: "",
      history: ""
    };
    setRows([...rows, newRow]);
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[110px]">Indent No.</TableHead>
            <TableHead className="w-[110px]">Item Type</TableHead>
            <TableHead className="w-[110px]">Item Name</TableHead>
            <TableHead className="w-[110px]">Make</TableHead>
            <TableHead className="w-[110px]">UOM</TableHead>
            <TableHead className="w-[110px]">Stock</TableHead>
            <TableHead className="w-[110px]">Pipeline Qty</TableHead>
            <TableHead className="w-[110px]">Process Code</TableHead>
            <TableHead className="w-[110px]">Proc Seq</TableHead>
            <TableHead className="w-[110px]">Previous Proc Code</TableHead>
            <TableHead className="w-[110px]">Prev Proc Seq</TableHead>
            <TableHead className="w-[110px]">History</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="">
                <div className="flex mt-4 items-center">
                  <select id="project-no" className="w-[130px] p-1 px-4 rounded outline-none cursor-pointer shadow-xl">
                    <option value="24-25/1/IN2155">24-25/1/IN2155</option>
                    <option value="24-30/1/IN2156">24-30/1/IN2156</option>
                  </select>
                </div>
              </TableCell>
              <TableCell className="">
                <div className="flex mt-4 items-center">
                  <select id="item-type" className="w-[130px] p-1 px-4 rounded outline-none cursor-pointer shadow-xl">
                    <option value="Normal Items">Normal Items</option>
                    <option value="Special Items">Special Items</option>
                  </select>
                </div>
              </TableCell>
              <TableCell className="">
                <div className="flex mt-4 items-center">
                  <select id="item-name" className="w-[130px] p-1 px-4 rounded outline-none cursor-pointer shadow-xl">
                    <option value="RMP10023-ROTOR">RMP10023-ROTOR</option>
                    <option value="RMP10023-SEAMLESS">RMP10023-SEAMLESS</option>
                  </select>
                </div>
              </TableCell>
              {/* Continue with the other columns similarly */}
              <TableCell className="">
                <div className="mt-4 w-full flex justify-between">
                  <input type="text" className="w-full p-1 px-4 rounded outline-none cursor-pointer shadow-xl" />
                </div>
              </TableCell>
              <TableCell className="">
                <div className="mt-4 w-full flex justify-between">
                  <input type="text" className="w-full p-1 px-4 rounded outline-none cursor-pointer shadow-xl" />
                </div>
              </TableCell>
              <TableCell className="">
                <div className="mt-4 w-full flex justify-between">
                    <input type="text" className='w-full p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                  </div>
              </TableCell>
              <TableCell className="">
                <div className="mt-4 w-full flex justify-between">
                    <input type="text" className='w-full p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                  </div>
              </TableCell>
              <TableCell className="">
                <div className="flex mt-4 items-center">
                    <select id="project-no" className="w-[130px] p-1 px-4 rounded outline-none cursor-pointer shadow-xl">
                      <option value="Option 1" className="" >Finish</option>
                      <option value="Option 2" className="" >Working</option>
                    </select>
                </div>
              </TableCell>
              <TableCell className="">
                <div className="mt-4 w-full flex justify-between">
                    <input type="text" className='w-full p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                  </div>
              </TableCell>
              <TableCell className="">
                <div className="flex mt-4 items-center">
                    <select id="project-no" className="w-[130px] p-1 px-4 rounded outline-none cursor-pointer shadow-xl">
                      <option value="Option 1" className="" >F-Finish</option>
                      <option value="Option 2" className="" >W-Working</option>
                    </select>
                </div>
              </TableCell>
              <TableCell className="">
                <div className="mt-4 w-full flex justify-between">
                    <input type="text" className='w-full p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                  </div>
              </TableCell>
              <TableCell className="">
                <div className="mt-4 w-full flex justify-between">
                    <input type="text" className='w-full p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                  </div>
              </TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center">
        <button
            onClick={handleAddRow}
            className="flex items-center mt-4 p-1 px-6 bg-[#62B6A6] text-white rounded">
            <Plus className='w-[15px] h-[15px] mr-2' /> Add
        </button>
        <button
            onClick={handleAddRow}
            className="mt-4 p-1 px-6 bg-[#62B6A6] text-white rounded">
            Save
        </button>
        </div>
    </div>
  );
}
