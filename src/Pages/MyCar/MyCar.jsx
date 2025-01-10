import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { TbPhotoEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import UpdateForm from "./UpdateForm";
import { Link } from "react-router-dom";

const MyCar = () => {
  const { user } = useContext(AuthContext);
  const [myCar, setMyCar] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null); // State for selected car
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/myCar?email=${user?.email}`,{withCredentials:true})
      .then((res) => {
        setMyCar(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [user]);
  console.log(myCar);
  // Handle delete
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
          .delete(`${import.meta.env.VITE_API_URL}/cars/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Car deleted successfully",
                icon: "success",
              });
              const remainingCars = myCar.filter((c) => c._id !== id);
              setMyCar(remainingCars);
            }
          })
          .catch((err) => console.error(err));
      }
    });
  };
const handleSort = (type) => {
  setSortType(type);
  let sortedCars = [...myCar];
  if (type === "date-newest") {
    sortedCars = sortedCars.sort((a, b) => new Date(b.Date) - new Date(a.Date));
  } else if (type === "date-oldest") {
    sortedCars = sortedCars.sort((a, b) => new Date(a.Date) - new Date(b.Date));
  } else if (type === "price-lowest") {
    sortedCars = sortedCars.sort(
      (a, b) => a.dailyRentalPrice - b.dailyRentalPrice
    );
  } else if (type === "price-highest") {
    sortedCars = sortedCars.sort(
      (a, b) => b.dailyRentalPrice - a.dailyRentalPrice
    );
  }
  setMyCar(sortedCars);
};

  return (
    <div className="min-h-screen mt-10">
      <div className="flex justify-end container mx-auto mb-4 ">
        <select
          className="select select-bordered w-full max-w-xs"
          value={sortType}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="date-newest">Date Added (Newest First)</option>
          <option value="date-oldest">Date Added (Oldest First)</option>
          <option value="price-lowest">Price (Lowest First)</option>
          <option value="price-highest">Price (Highest First)</option>
        </select>
      </div>
      <h2 className="text-2xl font-bold text-center mb-6">My Cars</h2>

      {myCar.length === 0 ? (
        <>
          <div className="text-center m-10 ">
            <p className="text-lg">No cars added yet. Want to add one?</p>
            <Link
              to="/addCar"
              className="btn bg-[#FF3600] text-white font-bold mt-4"
            >
              Add Car
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="overflow-x-auto container mx-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Car|Rental</th>
                  <th>Car Model</th>
                  <th>Daily Rental Price</th>
                  <th>Availability</th>
                  <th>Date Added</th>
                  <th>Update Details</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {myCar.map((car) => (
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
                    <td>${car.dailyRentalPrice}</td>
                    <td>{car.availability}</td>
                    <td>{new Date(car.Date).toLocaleDateString()}</td>
                    <td>
                      <button
                        className="btn btn-outline"
                        onClick={() => {
                          setSelectedCar(car); // Set the selected car
                          document.getElementById("my_modal_4").showModal();
                        }}
                      >
                        <TbPhotoEdit />
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

            {/* Modal */}
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg text-center">
                  Update Your Car Rental Details
                </h3>
                {selectedCar && <UpdateForm car={selectedCar} />}
                <div className="modal-action">
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById("my_modal_4").close()
                    }
                  >
                    Close
                  </button>
                </div>
              </div>
            </dialog>
          </div>
        </>
      )}
    </div>
  );
};

export default MyCar;
