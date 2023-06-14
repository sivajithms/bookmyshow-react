import { Disclosure } from "@headlessui/react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const PlaysFilter = (props) => {
  return (
    <div className='bg-page-50 rounded p-3 mb-3 mr-4'>
    <Disclosure >
      {({ open }) => (
        <>
          <Disclosure.Button className="py-2 flex items-center gap-3 ">
              {open ? <BiChevronDown /> : <BiChevronUp />}
              {props.title}
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            <div className="flex flex-wrap gap-2 item-center">
                {
                    props.tags.map((tag)=>(
                        <>
                        <div className="border-2 p-2 border-gray-400">
                            <span className="text-red-600">{tag}</span>
                        </div>
                        </>
                    ))
                }
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  );
};

export default PlaysFilter;
