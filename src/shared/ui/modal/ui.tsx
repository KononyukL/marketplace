import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Icons } from "@/shared/config";

interface IModal {
  onClose: () => void;
  show: boolean;
  title: string;
}

export const Modal = ({
  children,
  onClose,
  show,
  title,
}: React.PropsWithChildren<IModal>) => {
  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center align-middle">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[60%] transform overflow-hidden rounded-lg bg-[#FFFEFE] p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-between pb-6">
                    <Dialog.Title className="text-[28px] font-medium leading-9 text-primary">
                      {title}
                    </Dialog.Title>
                    <button
                      onClick={() => onClose()}
                      className="bg-gray-0 rounded-lg p-2"
                    >
                      <Icons.Cross />
                    </button>
                  </div>

                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
