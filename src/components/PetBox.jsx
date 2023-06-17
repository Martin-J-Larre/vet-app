import Swal from "sweetalert2";

export const PetBox = ({ pet, setPet, deletePet }) => {
  const { name, family, email, date, symptoms, id } = pet;

  const handleDelete = () => {
    Swal.fire({
      title: "Delete pet?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "rgb(8 145 178)",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePet(id);
        Swal.fire("Deleted!", "Pet has been deleted.", "success");
      }
    });
  };
  return (
    <div className="mx-5 my-6 bg-white shadow-md m-3 px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name: <span className="font-normal normal-case">{name}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Family: <span className="font-normal normal-case">{family}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        discharged: <span className="font-normal normal-case">{date}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        symptoms: <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className="flex justify-between">
        <button
          type="button"
          className="py-2 px-10 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold uppercase rounded-lg"
          onClick={() => setPet(pet)}
        >
          Edit
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-semibold uppercase rounded-lg"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
