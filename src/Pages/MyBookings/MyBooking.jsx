import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const MyBooking = () => {
  const [bookCar, setBookCar] = useState([]);
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/booking?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setBookCar(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [user]);
  const updateStatus = (id, newStatus) => {
    axios
      .put(`${import.meta.env.VITE_API_URL}/booking/status/${id}`, {
        status: newStatus,
      })
      .then((res) => {
        Swal.fire("Success", "Booking status updated successfully!", "success");
        // Optionally update the local state if needed
        const updatedBookings = bookCar.map((car) =>
          car._id === id ? { ...car, bookingStatus: newStatus } : car
        );
        setBookCar(updatedBookings);
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", "Failed to update booking status", "error");
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/booking/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Cancelled!",
                text: "Booking cancelled successfully",
                icon: "success",
              });
              const remainingCars = bookCar.filter((c) => c._id !== id);
              setBookCar(remainingCars);
            }
          })
          .catch((err) => console.error(err));
      }
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { ...newDate } = initialData;

    // Sending PATCH request to update the car details
    axios
      .patch(`${import.meta.env.VITE_API_URL}/booking/${_id}`, newDate)
      .then((res) => {
        console.log("Update successful:", res.data);
        toast.success("Car updated successfully!");
      })
      .catch((err) => {
        console.error("Error updating car:", err);
        toast.error("Failed to update car. Please try again.");
      });
  };

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Car Image</th>
              <th>Car Model</th>
              <th>Booking Date</th>
              <th>Total Price</th>
              <th>Booking Status</th>
              <th>Modify Booking</th>
              <th>Cancel Booking</th>
            </tr>
          </thead>
          <tbody>
            {bookCar.map((car) => (
              <tr key={car._id} className="hover:bg-gray-100">
                <td>
                  <div className="avatar">
                    <div className="w-24 h-16">
                      <img src={car.photo} alt={car.carModel} />
                    </div>
                  </div>
                </td>
                <td>{car.carModel}</td>
                <td>
                    {car.startDate} - {car.endDate}
                </td>
                <td>$ {car.bookingPrice}</td>
                <td>{car.bookingStatus}</td>
                <td>
                  <button
                    className="btn btn-outline btn-info"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    <SlCalender /> Modify
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-error"
                    onClick={() => handleDelete(car._id)}
                  >
                    <RiDeleteBin6Line /> Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Modify Booking Date</h3>
            <div className="modal-action">
              <form onSubmit={handleUpdate} method="dialog">
                <div className="flex gap-10 my-5">
                  <p className="p-2 border rounded-md">
                    Booking Start:{" "}
                    <DatePicker
                      selected={startDate}
                      name="startDate"
                      onChange={(date) => setStartDate(date)}
                    />
                  </p>
                  <p className="p-2 border rounded-md">
                    Booking End:{" "}
                    <DatePicker
                      selected={endDate}
                      name="endDate"
                      onChange={(date) => setEndDate(date)}
                    />
                  </p>
                </div>
                <button className="btn">Close</button>
                <button className="btn ml-10">Update</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyBooking;
