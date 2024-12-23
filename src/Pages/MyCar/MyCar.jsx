import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { TbPhotoEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyCar = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [myCar, setMyCar] = useState([]);
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/cars?email=${user?.email}`)
        .then(res=>{
            setMyCar(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[user]);
    return (
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center">My Cars</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
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
              {/* row 1 */}
              {myCar.map((car) => (
                <tr key={car._id}>
                  <td>
                    <div className="avatar">
                      <div className="w-[150px] h-[100px]">
                        <img src={car.photo} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{car.carModel}</div>
                    </div>
                  </td>
                  <td>$ {car.dailyRentalPrice}</td>
                  <td>{car.availability}</td>
                  <td>date</td>
                  <td>
                    <button>
                      <TbPhotoEdit />
                    </button>
                  </td>
                  <td>
                    <button>
                      <RiDeleteBin6Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyCar;