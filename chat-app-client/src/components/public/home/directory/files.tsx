import React from 'react';
// packages dependencies
import { ClipboardText , DocumentCode , DocumentText , Gallery , ReceiveSquare } from 'iconsax-react';

const Files : React.FC = () => {
    return (
        <div className="py-[26px] px-4">
            <div className="flex gap-x-2 items-center">
                <h2 className="text-sm">Files</h2>
                <span className="flex items-center justify-center bg-gray-200 text-xs rounded-full px-2 py-0.5">125</span>
            </div>

            <div className="flex flex-col gap-y-2 mt-2">
                <div className="flex justify-between items-center gap-x-4 p-3">
                    <div className="flex gap-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-100">
                            <ClipboardText color="#F56565" />
                        </div>

                        <div className="flex flex-col items-start">
                            <h3 className="text-sm">19.pdf</h3>

                            <div className="flex gap-x-2.5 text-xs text-gray-400">
                                <h3>PDF</h3>
                                <span>9mb</span>
                            </div>
                        </div>
                    </div>

                    <button>
                        <ReceiveSquare color="#615EF0" />
                    </button>
                </div>

                <div className="flex justify-between items-center gap-x-4 p-3">
                    <div className="flex gap-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-100">
                            <ClipboardText color="#F56565" />
                        </div>

                        <div className="flex flex-col items-start">
                            <h3 className="text-sm">19.pdf</h3>

                            <div className="flex gap-x-2.5 text-xs text-gray-400">
                                <h3>PDF</h3>
                                <span>9mb</span>
                            </div>
                        </div>
                    </div>

                    <button>
                        <ReceiveSquare color="#615EF0" />
                    </button>
                </div>

                <div className="flex justify-between items-center gap-x-4 p-3">
                    <div className="flex gap-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-100">
                            <ClipboardText color="#F56565" />
                        </div>

                        <div className="flex flex-col items-start">
                            <h3 className="text-sm">19.pdf</h3>

                            <div className="flex gap-x-2.5 text-xs text-gray-400">
                                <h3>PDF</h3>
                                <span>9mb</span>
                            </div>
                        </div>
                    </div>

                    <button>
                        <ReceiveSquare color="#615EF0" />
                    </button>
                </div>

                <div className="flex justify-between items-center gap-x-4 p-3">
                    <div className="flex gap-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-100">
                            <ClipboardText color="#F56565" />
                        </div>

                        <div className="flex flex-col items-start">
                            <h3 className="text-sm">19.pdf</h3>

                            <div className="flex gap-x-2.5 text-xs text-gray-400">
                                <h3>PDF</h3>
                                <span>9mb</span>
                            </div>
                        </div>
                    </div>

                    <button>
                        <ReceiveSquare color="#615EF0" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Files;