import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { SlCalender } from 'react-icons/sl';
import Swal from 'sweetalert2';


const MyBooking = () => {
    const [bookCar, setBookCar] = useState([])
    const {user} = useContext(AuthContext)
    useEffect(() => {
      axios
        .get(`${import.meta.env.VITE_API_URL}/booking?email=${user?.email}`,{withCredentials:true})
        .then((res) => {
          setBookCar(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }, [user]);
    
    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete it?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`${import.meta.env.VITE_API_URL}/booking/${id}`)
            .then((res) => {
              if (res.data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Car deleted successfully",
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
    return (
      <div>
        <div className="overflow-x-auto container mx-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Car|Rental</th>
                <th>Car Model</th>
                <th>Booking Date</th>
                <th>Total Price + Vat</th>
                <th>Booking Status</th>
                <th>Date Added</th>
                <th>Update Booking Date</th>
                <th>Delete Booking</th>
              </tr>
            </thead>
            <tbody>
              {bookCar.map((car) => (
                <tr key={car._id}>
                  <td>
                    <div className="avatar">
                      <div className="w-[150px] h-[100px]">
                        <img src={car.photo} alt={car.carModel} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{car.carModel}</div>
                    </div>
                  </td>
                  <td>{car.bookingDate}</td>
                  <td>$ {car.dailyRentalPrice}</td>
                  <td>
                    <button>{car.bookingStatus}</button>
                  </td>
                  <td>{new Date(car.Date).toLocaleDateString()}</td>
                  <td>
                    <button
                      className="btn btn-outline"
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      <SlCalender />
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-error"
                      onClick={() => handleDelete(car._id)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    );
};

export default MyBooking;