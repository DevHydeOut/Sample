
import SideBar from '@/components/app-sidebar'
import React from 'react'


export default function page() {

  return (
    
    <div className="mt-4 mx-auto flex justify-center gap-[20px] w-[100%]">
      <div className="verticle w-[15%] boxShadow rounded-[20px] p-2 bg-[#E0E1DB]">
        <div className="h-[100%] p-2 rounded-[20px] innerShadow">
          <SideBar />
        </div>
      </div>
      <div className="w-[80%]">
        
        <div className="w-[100%] boxShadow rounded-[20px] p-2 bg-[#E0E1DB]">
          <div className="h-[100%] p-2 rounded-[20px] innerShadow flex justify-between items-center px-6">
          <div className="">
            <label htmlFor="order-type" className='font-[500] '>PO Type:</label>
              <select id="order-type" className="ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl">
                <option value="Option 1" className="" >Puchase Order</option>
                <option value="Option 2" className="" >Sale Order</option>
              </select>
              <select id="order-type" className="ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl">
                <option value="Option 1" className="" >Indent</option>
                <option value="Option 2" className="" >Ondent</option>
              </select>
              <select id="order-type" className="ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl">
                <option value="Option 1" className="" >Close</option>
                <option value="Option 2" className="" >Open</option>
              </select>
          </div>
          
          <div className="">
            <label htmlFor="unit" className='font-[500] '>Unit CD:</label>
            <select id="unit" className="ml-4 p-1 px-3 rounded outline-none cursor-pointer shadow-xl">
              <option value="Option 1" className="" >101</option>
              <option value="Option 2" className="" >102</option>
            </select>
          </div>
          <div className="">
              <p className="p-1 px-4 bg-[#ffffff] rounded shadow-xl" >Dasmesh Mechanical Works, Unit-II</p>
          </div>
          </div>
        </div>

        <div className="w-[100%] flex justify-between mt-4">
          
          <div className="w-[70%] boxShadow rounded-[20px] p-2 bg-[#E0E1DB]">
            <div className="h-[100%] p-2 px-6 rounded-[20px] innerShadow">
              <div className="w-full flex items-center">
                <label htmlFor="sup-type" className='block w-[150px] font-[500] '>Supp. cd:</label>
                  <select id="sup-type" className="ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl">
                    <option value="Option 1" className="" >NANDINI ALLOYS - VN1198 (Mandi Gobindgarh, Punjab, India)</option>
                    <option value="Option 2" className="" >AVON CYCLE - VN1198 (Mandi Gobindgarh, Punjab, India)</option>
                  </select>
              </div>
              <div className="flex mt-4 justify-between items-center">
                <div className="flex">
                  <label htmlFor="quality-type" className='block w-[150px] font-[500] '>Quality Required:</label>
                    <select id="quality-type" className="ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl">
                      <option value="Option 1" className="" >YES</option>
                      <option value="Option 2" className="" >NO</option>
                    </select>
                  </div>
                  <button className='bg-[#E0E1DB] text-[#121212] px-7 py-1 rounded-3xl oShadow2 text-s hover:text-[#ffff] hover:bg-[#64CBBE] border border-transparent'>Check Balance</button>
              </div>
              <div className="flex mt-4 items-center">
                <label htmlFor="delivery-term" className='w-[150px] font-[500] '>Delivery Terms:</label>
                  <select id="delivery-term" className="ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl">
                    <option value="Option 1" className="" >EX-Works</option>
                    <option value="Option 2" className="" >NEW-Works</option>
                  </select>
              </div>
              
              <div className="flex mt-4 items-center">
                <label htmlFor="dispatch" className='w-[150px] font-[500]'>Mode of Dispatch:</label>
                  <select id="dispatch" className="p-1 ml-4 px-4 rounded outline-none cursor-pointer shadow-xl">
                    <option value="Option 1" className="" >By Road</option>
                    <option value="Option 2" className="" >By Train</option>
                  </select>
              </div>
              <div className="flex mt-4 justify-between items-center">
                <div className="flex">
                  <label htmlFor="freight" className="block w-[150px] font-[500]">Freight By:</label>
                    <select id="freight" className="p-1 ml-4 px-4 rounded outline-none cursor-pointer shadow-xl">
                      <option value="Option 1" className="" >Paid By Us</option>
                      <option value="Option 2" className="" >Paid By Them</option>
                    </select>
                  </div>
                  <div className="">
                    <label className='w-[180px] font-[500] '>Amount:</label>
                    <input type="text" className='ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                  </div>
              </div>
              <div className="flex mt-4 justify-between items-center">
                <div className="flex">
                  <label htmlFor="currency" className='block w-[150px] font-[500]'>Currency:</label>
                    <select id="currency" className="ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl">
                      <option value="Option 1" className="" >INR - Rupees</option>
                      <option value="Option 2" className="" >US - Dollor</option>
                    </select>
                  </div>
                  <div className="">
                    <label className='w-[180px] font-[500] '>Currency Rate:</label>
                      <input type="text" className='ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                  </div>
              </div>
              
              <div className="flex mt-4 flex-start">
                <label className='w-[180px] font-[500] '>Remarks:</label>
                  <textarea className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
              </div>
              
              <div className="flex mt-4 items-center">
                  <label htmlFor="address" className='w-[150px] font-[500]'>Address Type:</label>
                    <select id="address" className="p-1 ml-4 px-4 rounded outline-none cursor-pointer shadow-xl">
                      <option value="Option 1" className="" >Unit Address</option>
                      <option value="Option 2" className="" >Product Address</option>
                    </select>
              </div>

              
              <div className="flex mt-4 ">
                <label className='block w-[180px] font-[500]'>Dispatch Address:</label>
                  <textarea className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
              </div>
              
              <div className="flex mt-4 items-center">
                  <label htmlFor="project-no" className=' w-[180px] font-[500] '>Project No:</label>
                    <select id="project-no" className="w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl">
                      <option value="Option 1" className="" >1</option>
                      <option value="Option 2" className="" >5</option>
                    </select>
              </div>

            </div>
          </div>
          
          <div className="w-[28%]">
            <div className="">
              <div className="w-[100%] boxShadow rounded-[20px] p-2 bg-[#E0E1DB]">
                <div className="h-[100%] p-2 rounded-[20px] innerShadow">
                  
                  <div className="flex items-center">
                    <label className='block w-[150px] font-[500] '>PO NO.</label>
                      <input type="text" className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                  </div>
                  
                  <div className="flex mt-4 items-center">
                    <label className='block w-[140px] font-[500] '>Amendment</label>
                      <input type="text" className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                  </div>
                  
                  <div className="flex mt-4 items-center">
                    <label className='block w-[140px] font-[500] '>Amd. Date</label>
                      <input type="text" className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                  </div>
                  <div className="flex mt-4 items-center">
                    <label htmlFor="active" className='block w-[140px] font-[500] '>PO Status</label>
                      <select id="active" className="w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl">
                        <option value="Option 1" className="" >Active</option>
                        <option value="Option 2" className="" >Close</option>
                      </select>
                  </div>

                </div>
              </div>
              
              <div className="mt-4 w-[100%] boxShadow rounded-[20px] p-2 bg-[#E0E1DB]">
                <div className="h-[100%] p-2 rounded-[20px] innerShadow">
                  
                  <div className="flex items-center">
                    <label className='block w-[150px] font-[500] '>PO Date</label>
                      <input type="text" className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                  </div>
                  
                  <div className="flex mt-4 items-center">
                    <label className='block w-[140px] font-[500] '>Valid From</label>
                      <input type="text" className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                  </div>
                  
                  <div className="flex mt-4 items-center">
                    <label className='block w-[140px] font-[500] '>Valid To</label>
                      <input type="text" className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                  </div>
                  <div className="flex mt-4 items-center">
                    <label htmlFor="location" className='block w-[140px] font-[500] '>Location</label>
                      <select id="location" className="w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl">
                        <option value="Option 1" className="" >L022 - RAW</option>
                        <option value="Option 2" className="" >L555 - Build</option>
                      </select>
                  </div>

                </div>
              </div>
            
            <div className="mt-4 w-[100%] boxShadow rounded-[20px] p-2 bg-[#E0E1DB]">
                <div className="h-[100%] p-2 rounded-[20px] innerShadow">
                  
                  <div className="flex items-center">
                    <label className='block w-[140px] font-[500] '>Payment Terms</label>
                    <button className='bg-[#E0E1DB] text-[#121212] px-7 py-1 rounded-3xl oShadow2 text-xs hover:text-[#ffff] hover:bg-[#64CBBE] border border-transparent'>Add Payments Terms</button>
                  </div>
                  
                  <div className="flex mt-4 items-center">
                    <label className='block w-[140px] font-[500] '>Payment Terms Based on</label>
                      <select id="active" className="w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl">
                        <option value="Option 1" className="" >Date of Receipt of item</option>
                        <option value="Option 2" className="" >Date of Invoice of item</option>
                      </select>
                  </div>
                  <div className="flex mt-4 items-center">
                    <label className='block w-[140px] font-[500] '>Tansporter</label>
                      <select id="active" className="w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl">
                        <option value="Option 1" className="" >By Bus</option>
                        <option value="Option 2" className="" >By Train</option>
                      </select>
                  </div>
                  
                  <div className="flex mt-4 items-center">
                    <label className='block w-[140px] font-[500] '>Remarks</label>
                      <input type="text" className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                  </div>

                  <div className="flex mt-4 items-center">
                    <label className='block w-[140px] font-[500] '>Tolerence %</label>
                      <input type="text" className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                  </div>

                </div>
            </div>  

            </div>          
          </div>
        </div>

        <div className="mt-4 w-[100%] boxShadow rounded-[20px] p-2 bg-[#E0E1DB]">
          <div className="h-[100%] p-2 rounded-[20px] innerShadow flex flex-col justify-between items-center px-6">
            
          <div className="w-full flex justify-between">
                    <label className='w-[180px] font-[500] '>Prepared By </label>
                    <input type="text" className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                  </div>

                  
                  <div className="mt-4 w-full flex justify-between">
                    <label className='w-[180px] font-[500] '>Checked By</label>
                    <input type="text" className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                  </div>

                  
                  <div className="mt-4 w-full flex justify-between">
                    <label className='w-[180px] font-[500] '>Verified By</label>
                    <input type="text" className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                  </div>

                  
                  <div className="mt-4 w-full flex justify-between">
                    <label className='w-[180px] font-[500] '>Approved By</label>
                    <input type="text" className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                  </div>
          </div>
        </div>

        <div className="mt-4 w-[100%] boxShadow rounded-[20px] p-2 bg-[#E0E1DB]">
          <div className="h-[100%] p-2 rounded-[20px] innerShadow flex flex-col justify-between items-center px-6">
                  <div className="w-full flex justify-between">
                    <div className="flex items-center">
                      <label className='block w-[180px] font-[500] '>IGST Value </label>
                      <input type="text" className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                    </div>
                    <div className="flex items-center">
                      <label className='block w-[180px] font-[500] '>SGST Value</label>
                      <input type="text" className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                    </div>
                    <div className="flex items-center">
                      <label className='block w-[180px] font-[500] '>CGST Value</label>
                      <input type="text" className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                    </div>
                  </div>

                  <div className="mt-4 w-full flex justify-between">
                    <div className="flex items-center">
                      <label className='block w-[180px] font-[500] '>Disc. Value</label>
                      <input type="text" className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                    </div>

                    <div className="flex items-center">
                      <label className='w-[180px] font-[500] '>PO. Value</label>
                      <input type="text" className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                    </div>

                    <div className="flex items-center">
                      <label className='w-[180px] font-[500] '>Net. Value</label>
                      <input type="text" className='w-full ml-4 p-1 px-4 rounded outline-none cursor-pointer shadow-xl' />
                    </div>
                  </div>
          </div>
        </div>

        <div className="mt-4 w-[100%] boxShadow rounded-[20px] p-2 bg-[#E0E1DB]">
          <div className="h-[100%] p-2 rounded-[20px] innerShadow flex flex-col justify-between items-center px-6">
          </div>
        </div>

      </div>
    </div>
  )
}
