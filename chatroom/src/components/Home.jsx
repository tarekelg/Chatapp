import { useEffect } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Home = ({ socket }) => {
  const { username, setUsername } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    console.log(username);
  }, [username]);

  function handleInputChange(e) {
    e.preventDefault;
    console.log(e.target.value);
    setUsername(e.target.value);
  }

  async function onSubmitUsername(e) {
    e.preventDefault();
    // save in local storage
    //or in mongoDB
    localStorage.setItem("userName", username);

    await socket.emit("newUser", { username, socketID: socket.id });
    navigate("/chat", { replace: true });
  }

  return (
    <form className="max-w-sm mx-auto" onSubmit={onSubmitUsername}>
      <label
        for="website-admin"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Username
      </label>
      <div className="flex">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
        </span>
        <input
          type="text"
          id="website-admin"
          className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Bonnie Green"
          onChange={handleInputChange}
        />
        <button className="bg-blue-300">Start</button>
      </div>
    </form>
  );
};

export default Home;
