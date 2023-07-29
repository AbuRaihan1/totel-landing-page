import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import mobileButton from "../../assets/icons/mobile-button.png";
import star from "../../assets/icons/star.png";
import mail from "../../assets/icons/mail.png";
import NotificationContext from "../../context/Context";
import './Notification.css'
const Notification = () => {
  const notifications = [
    {
      icon: mobileButton,
      notiMessage: "You have a new message.",
      userName: "John Doe",
      notiTime: "1h ago",
    },
    {
      icon: star,
      notiMessage: "Your order has been shipped.",
      userName: "Jane Smith",
      notiTime: "2 days ago",
    },
    {
      icon: mail,
      notiMessage: "You received a friend request.",
      userName: "Mike Johnson",
      notiTime: "3 hours ago",
    },
    {
      icon: mail,
      notiMessage: "You received a friend request.",
      userName: "Mike Johnson",
      notiTime: "3 hours ago",
    },
    {
      icon: mail,
      notiMessage: "You received a friend request.",
      userName: "Mike Johnson",
      notiTime: "3 hours ago",
    },
    {
      icon: mail,
      notiMessage: "You received a friend request.",
      userName: "Mike Johnson",
      notiTime: "3 hours ago",
    },
    {
      icon: star,
      notiMessage: "Reminder: Upcoming event tomorrow.",
      userName: "Alice Williams",
      notiTime: "1 day ago",
    },
  ];

  const { showDialog, setShowDialog } = useContext(NotificationContext);
  const handleDialogClose = () => {
    setShowDialog(false);
  };

  return (
    <>
      {showDialog && (
        <div className="fixed inset-0 bg-gray-500 opacity-50 z-5"></div>
      )}
      {showDialog && (
        <div className="relative shadow-2xl ">
          <div className="bg-white absolute right-0 lg:top-0 z-10 lg:w-[520px] h-[446px] overflow-auto shadow-2xl w-full top-36 rounded-lg">
            <div className=" flex items-center justify-between p-6">
              <p className="font-[500] text-2xl font-inter">Notification </p>
              <FaTimes
                onClick={handleDialogClose}
                className="bg-gray-100 hover:bg-gray-300 rounded-full p-3 h-10 cursor-pointer w-10"
              />
            </div>

            <div>
              {notifications.map((notification, idx) => (
                <div
                  key={idx}
                  className="font-inter py-4  cursor-pointer hover:bg-gray-100"
                >
                  <div className="flex gap-4 pl-6">
                    <img
                      src={notification.icon}
                      alt=""
                      className="border-2 p-2 rounded-full h-10 w-10"
                    />

                    <div>
                      <p className="text-[16px] font-[500]">
                        {notification.notiMessage}
                      </p>
                      <p className="font-bold text-black">
                        {notification.userName}
                      </p>
                      <p>{notification.notiTime}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
