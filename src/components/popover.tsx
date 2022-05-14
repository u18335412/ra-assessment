/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

/**
 * This file's name does not match the component being exported.
 * It also does not use the correct casing.
 */

// Completely ignored the types in these props.

type Props = {
  setWidth: any;
  setHeight: any;
  setColor: any;
  setLabel: any;
  setShape: any;
  clone: any;
  remove: any;
  properties: any;
};

// Excellent that this was extracted into a constant.
// It would have been nice to have this in a separate file so that other components could use it.

const COLORS: string[] = [
  'bg-lime-500/70',
  'bg-rose-500/70',
  'bg-cyan-500',
  'bg-indigo-500',
];

interface size {
  name: string;
  dimensions: {
    h: string;
    w: string;
  };
}

// Same as my comment on the colours above.

const SIZE: size[] = [
  {
    name: 'xs',
    dimensions: {
      h: 'h-[50px]',
      w: 'w-[50px]',
    },
  },
  {
    name: 'sm',
    dimensions: {
      h: 'h-[75px]',
      w: 'w-[75px]',
    },
  },
  {
    name: 'md',
    dimensions: {
      h: 'h-[100px]',
      w: 'w-[100px]',
    },
  },
  {
    name: 'lg',
    dimensions: {
      h: 'h-[150px]',
      w: 'w-[150px]',
    },
  },
  {
    name: 'xl',
    dimensions: {
      h: 'h-[200px]',
      w: 'w-[200px]',
    },
  },
];

export const PopoverMenu = (props: Props) => {
  return (
    <div className='h-full w-full'>
      <Popover className='relative h-full'>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
            ${open ? '' : 'text-opacity-90'}
            group inline-flex h-full w-full bg-opacity-0 items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              {/* Commented out code is bad. If you do not want it then it should be removed. If you might want it in future then it should be tracked by git. */}
              {/* <span>Solutions</span> */}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute  left-1/2 w-screen max-w-xs -translate-x-1/2 transform px-4 sm:px-0 '>
                <div className='overflow-hidden  rounded-lg shadow-xl ring-1 ring-black ring-opacity-5'>
                  <div className='relative grid gap-4 bg-slate-200 p-5 '>
                    <div className='flex gap-x-2 justify-center font-semibold'>
                      <div className='flex gap-x-8'>
                        {COLORS.map((color) => {
                          return (
                            <button
                              key={color}
                              onClick={() => {
                                props.setColor(color);
                              }}
                              className={`w-5 h-5 ${color} rounded-full`}
                            ></button>
                          );
                        })}
                      </div>
                    </div>
                    <div className='flex gap-x-2 justify-center font-semibold'>
                      <div className='flex gap-x-4 flex-wrap'>
                        {SIZE.map(({ name, dimensions: { h, w } }) => {
                          return (
                            <button
                              key={name}
                              onClick={() => {
                                props.setHeight(h);
                                props.setWidth(w);
                              }}
                              className={`rounded-full flex items-center w-fit px-2 py-1 text-xs bg-white font-bold`}
                            >
                              {name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className='flex justify-center text-ellipsis'>
                      <input
                        className='py-1 rounded-md px-2 text-xs font-semibold text-center text-center'
                        type='text'
                        value={props.properties.label}
                        onChange={(e) => props.setLabel(e.target.value)}
                      />
                    </div>
                    <div className='flex gap-x-2 justify-center text-ellipsis'>
                      <button
                        onClick={() => props.clone(props)}
                        className='text-xs bg-green-500/70 rounded-full px-2 py-1 font-bold text-green-900'
                      >
                        Duplicate
                      </button>
                      <button
                        onClick={() =>
                          props.setShape(
                            props.properties.shape === 'rounded-full'
                              ? 'rounded-[5px]'
                              : 'rounded-full',
                          )
                        }
                        className='text-xs bg-yellow-500/70 rounded-full px-2 py-1 font-bold text-yellow-900'
                      >
                        Transform
                      </button>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};
