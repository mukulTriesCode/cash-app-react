import React, { Dispatch, SetStateAction } from "react";

const NotificationModal: React.FC<{
  notification: Dispatch<SetStateAction<boolean>>;
}> = ({ notification }) => {
  return (
    <div
      data-lenis-prevent
      className="fixed flex flex-col w-screen h-screen z-[1001] bg-black/50 left-0 top-0 "
    >
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            document.body.style.overflow = "";
            notification(false);
          }
        }}
        className="relative w-screen h-screen overflow-y-scroll"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[800px] flex flex-col gap-4 mx-auto w-full p-8 bg-[#131313] rounded-xl">
          <div className="flex justify-between">
            <h3>Notification</h3>
            <button
              className="text-white"
              onClick={() => {
                document.body.style.overflow = "";
                notification(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block -mt-1 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="gap-1 flex-col max-h-[400px] overflow-y-scroll">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((elem) => (
              <div key={elem} className="h-20 my-1 bg-white"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
